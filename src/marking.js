// Automatic marking engine for the written-response quests.
// A rubric ("spec") describes what a correct answer must contain.
// Answers are normalised (case, punctuation, units, thousands separators) before matching,
// so "7 m 15 cm", "7m15cm" and "7 metres 15 centimetres" are all read the same way.

const UNIT_WORDS = [
  [/\bkilomet(?:re|er)s?\b/g, ' km '],
  [/\bcentimet(?:re|er)s?\b/g, ' cm '],
  [/\bmillimet(?:re|er)s?\b/g, ' mm '],
  [/\bmet(?:re|er)s?\b/g, ' m '],
  [/\bkilograms?\b/g, ' kg '],
  [/\bgrams?\b/g, ' g '],
  [/\bmillilit(?:re|er)s?\b/g, ' ml '],
  [/\blit(?:re|er)s?\b/g, ' l '],
];

export function norm(input) {
  let s = ' ' + String(input ?? '').toLowerCase() + ' ';
  s = s.replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"');
  s = s.replace(/×/g, ' x ').replace(/÷/g, ' / ').replace(/→/g, ' ');
  s = s.replace(/\s[−–—-]\s/g, ' minus ').replace(/[−–—]/g, ' ');   // spaced minus sign stays a separator
  s = s.replace(/\+/g, ' plus ').replace(/=/g, ' equals ');         // working signs separate quantities
  s = s.replace(/cubic\s*centimet(?:re|er)s?/g, ' cmcubed ').replace(/cubic\s*met(?:re|er)s?/g, ' mcubed ');
  s = s.replace(/cm\s*³|cm\s*\^\s*3|cm3(?![0-9a-z])/g, ' cmcubed ');
  s = s.replace(/(^|[^a-z])m(?:\s*³|\s*\^\s*3|3(?![0-9a-z]))/g, '$1 mcubed ');
  for (let i = 0; i < 3; i++) s = s.replace(/(\d)[ ,](\d{3})(?![0-9])/g, '$1$2');
  s = s.replace(/(\d)([a-z])/g, '$1 $2').replace(/([a-z])(\d)/g, '$1 $2');
  for (const [re, rep] of UNIT_WORDS) s = s.replace(re, rep);
  s = s.replace(/'/g, '').replace(/"/g, ' ');                       // don't -> dont
  s = s.replace(/([a-z0-9])-([a-z0-9])/g, '$1 $2');                  // flat-topped -> flat topped
  s = s.replace(/[(),;:!?\[\]{}]/g, ' | ').replace(/\.(?!\d)/g, ' | '); // punctuation = a boundary
  s = s.replace(/[^a-z0-9.\/%\s|]/g, ' ');
  return ' ' + s.replace(/\s+/g, ' ').trim() + ' ';
}

const esc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// true if a and b differ by at most one edit (typo tolerance for longer words)
function within1(a, b) {
  if (a === b) return true;
  const la = a.length, lb = b.length;
  if (Math.abs(la - lb) > 1) return false;
  let i = 0;
  while (i < la && i < lb && a[i] === b[i]) i++;
  if (la === lb) return a.slice(i + 1) === b.slice(i + 1) || (a[i] === b[i + 1] && a[i + 1] === b[i] && a.slice(i + 2) === b.slice(i + 2));
  return la > lb ? a.slice(i + 1) === b.slice(i) : b.slice(i + 1) === a.slice(i);
}
function fuzzyFind(t, k, from = 0) {
  let pos = 0;
  for (const w of t.split(' ')) {
    const start = pos; pos += w.length + 1;
    if (start < from || w.length < k.length - 1) continue;
    for (const L of [k.length, k.length - 1, k.length + 1]) {
      if (w.length >= L && within1(w.slice(0, L), k)) return { idx: start, end: start + w.length };
    }
  }
  return null;
}

const cache = new Map();
function compile(kw) {
  if (cache.has(kw)) return cache.get(kw);
  let whole = false, k = kw;
  if (k.endsWith('$')) { whole = true; k = k.slice(0, -1); }
  k = norm(k).trim();
  const hasDigit = /\d/.test(k);
  const e = esc(k).replace(/\s+/g, '\\s+');
  let re;
  if (hasDigit) re = new RegExp('(^|[^0-9a-z./])' + e + "(?![0-9a-z/]|\\.\\d)");
  else if (whole || k.length <= 2) re = new RegExp('(^|[^a-z0-9])' + e + '(?![a-z0-9])');
  else re = new RegExp('(^|[^a-z0-9])' + e);
  const fz = !whole && !hasDigit && !/\s/.test(k) && k.length >= 7 && !/cubed$/.test(k) ? k : null;   // single longer word: allow one typo (never unit tokens)
  const c = { re, fz };
  cache.set(kw, c);
  return c;
}
const has1 = (t, kw) => { const c = compile(kw); return c.re.test(t) || (c.fz ? !!fuzzyFind(t, c.fz) : false); };
const hasAny = (t, group) => group.split('|').some((k) => has1(t, k));
function firstIndex(t, group, from = 0) {
  let best = null;
  const sub = t.slice(from);
  for (const k of group.split('|')) {
    const c = compile(k);
    const m = c.re.exec(sub);
    let hit = null;
    if (m) hit = { idx: from + m.index, end: from + m.index + m[0].length };
    else if (c.fz) hit = fuzzyFind(t, c.fz, from);
    if (hit && (!best || hit.idx < best.idx)) best = hit;
  }
  return best;
}
const numbers = (t) => (t.match(/\d+(?:\.\d+)?/g) || []).map(parseFloat);

const DIM = {
  len: { mm: 1, cm: 10, m: 1000, km: 1e6 },
  mass: { g: 1, kg: 1000 },
  cap: { ml: 1, l: 1000 },
  vol: { cmcubed: 1, mcubed: 1e6 },
};
const UP = { mm: 'cm', cm: 'm', m: 'km', g: 'kg', ml: 'l', cmcubed: 'mcubed' };

function qtyRuns(t) {
  const re = /(\d+(?:\.\d+)?)\s*(km|kg|cmcubed|mcubed|cm|mm|ml|m|g|l)(?![a-z0-9])/g;
  const out = []; let m, last = null, cur = null;
  while ((m = re.exec(t))) {
    const it = { v: parseFloat(m[1]), u: m[2], start: m.index, end: m.index + m[0].length };
    if (last && /^\s*(?:and)?\s*$/.test(t.slice(last.end, it.start))) cur.push(it);
    else { cur = [it]; out.push(cur); }
    last = it;
  }
  return out;
}
function qtyOk(spec, t) {
  const f = DIM[spec.dim];
  const allowed = spec.units || Object.keys(f);
  for (const run of qtyRuns(t)) {
    if (!run.every((x) => x.u in f && allowed.includes(x.u))) continue;
    if (spec.must && !spec.must.some((u) => run.some((x) => x.u === u))) continue;
    const total = run.reduce((a, x) => a + x.v * f[x.u], 0);
    if (Math.abs(total - spec.value) > 1e-6 * Math.max(1, spec.value)) continue;
    if (spec.strict) {
      const units = [...new Set(run.map((x) => x.u))];
      const top = units.reduce((a, b) => (f[a] >= f[b] ? a : b));
      let bad = false;
      for (const x of run) {
        if (x.u === top) continue;
        const up = UP[x.u];
        const ratio = up && f[up] ? f[up] / f[x.u] : Infinity;
        if (x.v >= ratio) bad = true;
      }
      if (bad) continue;
    }
    return true;
  }
  if (spec.bare && allowed.length === 1) {
    // a plain number counts, unless it is attached to a DIFFERENT unit (e.g. "64 cm" for a millimetre answer)
    const exp = spec.value / f[allowed[0]];
    const re = /(\d+(?:\.\d+)?)(?:\s*(km|kg|cmcubed|mcubed|cm|mm|ml|m|g|l)(?![a-z0-9]))?/g;
    let m;
    while ((m = re.exec(t))) {
      if (Math.abs(parseFloat(m[1]) - exp) < 1e-9 && (!m[2] || m[2] === allowed[0])) return true;
    }
  }
  return false;
}

function seqOk(tokens, t) {
  const uniq = [...new Set(tokens)];
  const re = new RegExp('(?:^|[^a-z0-9])(' + uniq.map(esc).join('|') + ')(?![a-z0-9])', 'g');
  const found = []; let m;
  while ((m = re.exec(t))) { found.push(m[1]); re.lastIndex = m.index + m[0].length - 1; }
  return found.length === tokens.length && found.every((x, i) => x === tokens[i]);
}

function pairsOk(pairs, t) {
  const items = pairs.map(([k, v]) => ({ k, v, pos: firstIndex(t, k) }));
  if (items.some((i) => !i.pos)) return false;
  items.sort((a, b) => a.pos.idx - b.pos.idx);
  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    const fwd = t.slice(it.pos.idx, i + 1 < items.length ? items[i + 1].pos.idx : t.length);
    const bwd = t.slice(i > 0 ? items[i - 1].pos.end : 0, it.pos.end);
    if (!hasAny(fwd, it.v) && !hasAny(bwd, it.v)) return false;
  }
  return true;
}

function orderOk(groups, t) {
  let from = 0;
  for (const g of groups) {
    const p = firstIndex(t, g, from);
    if (!p) return false;
    from = p.end;
  }
  return true;
}

function evalSpec(spec, t, raw) {
  if (spec.all) return spec.all.every((s) => evalSpec(s, t, raw));
  if (spec.any) return spec.any.some((s) => evalSpec(s, t, raw));
  if (spec.kw) {
    const n = spec.kw.filter((g) => hasAny(t, g)).length;
    return spec.min ? n >= spec.min : n === spec.kw.length;
  }
  if (spec.order) return orderOk(spec.order, t);
  if (spec.num) { const ns = numbers(t); return spec.num.some((v) => ns.some((n) => Math.abs(n - v) < 1e-9)); }
  if (spec.qty) return qtyOk(spec.qty, t);
  if (spec.seq) return seqOk(spec.seq, t);
  if (spec.pairs) return pairsOk(spec.pairs, t);
  if (spec.raw) return spec.raw.test(raw);
  return false;
}

const wordCount = (raw) => raw.trim().split(/\s+/).filter(Boolean).length;

// returns true / false, or null if there is no rubric for this question
export function markAnswer(spec, raw) {
  if (!spec) return null;
  const text = String(raw ?? '');
  if (!text.trim()) return false;
  const w = wordCount(text);
  if (spec.minWords && w < spec.minWords) return false;
  if (spec.maxWords && w > spec.maxWords) return false;
  const t = norm(text);
  if (spec.not && hasAny(t, spec.not)) return false;
  return evalSpec(spec, t, text);
}

// ---- rubric builders ----
export const K = (...groups) => ({ kw: groups });              // every group must match (a group = 'a|b|c' alternatives)
export const KM = (min, ...groups) => ({ kw: groups, min });   // at least `min` groups must match
export const O = (...groups) => ({ order: groups });           // groups must appear in this order
export const N = (...values) => ({ num: values });             // any of these numbers appears
export const Q = (dim, value, units, opts = {}) => ({ qty: { dim, value, units, ...opts } });
export const SEQ = (...tokens) => ({ seq: tokens });
export const P = (...pairs) => ({ pairs });                    // [keyGroup, valueGroup] pairs
export const ALL = (...specs) => ({ all: specs });
export const ANY = (...specs) => ({ any: specs });
export const RAW = (regex) => ({ raw: regex });                // case-sensitive check on the raw text
export const W = (spec, o) => ({ ...spec, minWords: o.min, maxWords: o.max, not: o.not });
