import React, {useEffect, useMemo, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {createClient} from '@supabase/supabase-js';
import {ALL_TESTS, T4_TESTS, REWARD, passNeeded, G5_EXAMS, REVISION, REVISION_NOTES, WRITING_TASKS} from './testsData.js';
import {RUBRICS, buildSet, questionsFor, recordSeen} from './rubrics.js';
import {markAnswer} from './marking.js';
import './styles.css';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const FAMILY_CODE = import.meta.env.VITE_FAMILY_CODE || 'TYREESE-LOCAL';
const supabase = (SUPABASE_URL && SUPABASE_KEY) ? createClient(SUPABASE_URL, SUPABASE_KEY) : null;

const SUBJECTS = [
  {id:'maths', name:'Mathematics', icon:'➗', color:'violet', tagline:'Build the brain XP.', topics:['Fractions','Angles & turns','Parallel & perpendicular lines','Squares, rectangles & quadrilaterals','Whole numbers & mental maths']},
  {id:'geography', name:'Geography', icon:'🌍', color:'cyan', tagline:'Read the map. Read the weather.', topics:['Weather elements & measurement','Rainfall patterns','Weather vs climate','South African climates','Natural vegetation & savannah']},
  {id:'history', name:'History', icon:'🏺', color:'amber', tagline:'Unlock the ancient world.', topics:['Ancient Egypt','Nile River','Pharaohs & society','Sources & evidence','Paragraph/source-based reasoning']},
  {id:'nst', name:'NST', icon:'⚡', color:'orange', tagline:'Energy. Change. Systems.', topics:['Energy & fuels','Fire triangle & safety','Simple circuits','Electricity to homes','Energy & movement','Wheels & axles']},
  {id:'isizulu', name:'isiZulu', icon:'🗣️', color:'green', tagline:'Speak it. Read it. Use it.', topics:['Reading comprehension','Vocabulary','Sentence building','Grammar','Writing & communication']},
  {id:'english', name:'English', icon:'📚', color:'blue', tagline:'Read deeper. Write sharper.', topics:['Novel reading','Characters & themes','Book review','Pronouns, adjectives & adverbs','Conjunctions & sentence structure','Similes, idioms & proverbs']},
  {id:'coding', name:'Coding & Robotics', icon:'🤖', color:'pink', tagline:'Think like a builder.', topics:['Patterns in data','Complete symbolic patterns','Read code line-by-line','Sprites & sequences','What is a robot?','Robot types & components']}
];

const QUESTIONS = {
 maths:[
  {q:'A loot crate contains 17/10 kg of supplies. Write this as a mixed number.',a:['1 7/10','1 1/7','2 7/10','17 1/10'],c:0,e:'Divide 17 by 10: one whole with 7 tenths left.'},
  {q:'Tyreese completes 7/8 of a challenge and then another 3/4. How much has he completed altogether?',a:['1 1/8','1 5/8','10/12','13/16'],c:1,e:'Convert 3/4 to 6/8. Then 7/8 + 6/8 = 13/8 = 1 5/8.'},
  {q:'Which statement is ALWAYS true for a square?',a:['Only opposite sides are equal','All four sides are equal and all four angles are right angles','It has exactly one pair of parallel sides','Its angles add to 180°'],c:1,e:'A square has four equal sides, four right angles and opposite sides parallel.'},
  {q:'A turn of 270° is equal to…',a:['1/4 turn','1/2 turn','3/4 turn','4 complete turns'],c:2,e:'A complete turn is 360°, so 270° is three quarters.'},
  {q:'A rectangle has length 20 cm and width 9 cm. Which pair gives the other two side lengths?',a:['20 cm and 9 cm','11 cm and 29 cm','18 cm and 40 cm','9 cm and 29 cm'],c:0,e:'Opposite sides of a rectangle are equal.'},
  {q:'What is 3/5 of 100?',a:['15','30','50','60'],c:3,e:'100 ÷ 5 = 20, then 20 × 3 = 60.'},
  {q:'A line that never meets another line because they stay the same distance apart is…',a:['perpendicular','parallel','curved','a right angle'],c:1,e:'Parallel lines remain equidistant and do not intersect.'},
  {q:'Which answer shows 19/6 as a mixed number?',a:['2 6/19','3 1/6','3 6/1','2 3/6'],c:1,e:'18/6 is 3, with 1/6 remaining.'}
 ,
  {q:"Which fraction is equivalent to 3/4?",a:["6/8", "3/8", "4/6", "9/16"],c:0,e:"Multiply numerator and denominator by 2: 3/4 = 6/8."},
  {q:"A map mission says the market is southwest of the park. If Tyreese walks from the market to the park, which direction is he travelling?",a:["Southwest", "Northeast", "Southeast", "Northwest"],c:1,e:"The reverse of southwest is northeast."},
  {q:"A rectangle and a square both have four right angles. What makes the square different?",a:["It has no parallel sides", "All four sides are equal", "It has only three sides", "Its angles are not 90°"],c:1,e:"A square has four equal sides as well as four right angles."},
  {q:"Tyreese says 2/3 + 1/6 = 3/9 because he added the denominators. What should you tell him?",a:["Add denominators every time", "Use a common denominator, then add the numerators", "Subtract the numerators", "Multiply the denominators only"],c:1,e:"Use sixths: 2/3 = 4/6, so 4/6 + 1/6 = 5/6."}],
 geography:[
  {q:'Which set contains three elements of weather?',a:['Temperature, wind, rainfall','Soil, rocks, minerals','Population, roads, trade','Crops, factories, mines'],c:0,e:'Weather includes temperature, wind, cloud cover and rainfall.'},
  {q:'Weather describes…',a:['the usual conditions over many decades','conditions of the atmosphere at a particular time/place','only rainfall','only temperature'],c:1,e:'Weather is short-term atmospheric conditions; climate describes longer-term patterns.'},
  {q:'Which instrument is used to measure rainfall?',a:['Thermometer','Rain gauge','Wind vane','Compass'],c:1,e:'A rain gauge collects and measures rainfall.'},
  {q:'A place has hot summers and cool winters. Which question helps determine its climate?',a:['What happened at 2pm today?','What are the long-term patterns over time?','What colour is the sky?','Which direction is north?'],c:1,e:'Climate is based on patterns over longer periods.'},
  {q:'Why is natural vegetation linked to climate?',a:['Plants need conditions such as suitable temperature and water','Plants decide the weather','All plants need exactly the same climate','Vegetation changes the calendar'],c:0,e:'Climate affects water availability and growing conditions, so plants adapt to local climates.'},
  {q:'Savannah grasslands are best described as…',a:['only dense rainforest','grassland with scattered trees/shrubs in suitable climates','permanent snowfields','desert with no plants'],c:1,e:'Savannah has grasses with scattered trees and is linked to its climate.'}
 ,
  {q:"A thermometer reads 28°C and a wind vane points west. Which statement is an observation of today's weather?",a:["It is 28°C and wind is from the west", "The region has a tropical climate", "The vegetation is savannah", "It always rains in winter"],c:0,e:"Those are short-term measurable weather observations."},
  {q:"Why might rainfall maps show different patterns across South Africa?",a:["Rainfall is distributed differently across places and seasons", "Every place gets the same rainfall", "Maps create rainfall", "Vegetation controls all rain"],c:0,e:"Location, season and climate patterns affect rainfall distribution."},
  {q:"A plant has features that help it survive with little water. This is an example of…",a:["adaptation", "a weather instrument", "a map scale", "precipitation"],c:0,e:"An adaptation helps an organism survive in its environment."},
  {q:"Which is the best way to investigate how weather changes?",a:["Record observations regularly and look for patterns", "Make one guess", "Only check one afternoon", "Use a fictional story"],c:0,e:"Repeated observations let you compare conditions and identify patterns."}],
 history:[
  {q:'Why was the Nile River important to ancient Egypt?',a:['It provided water and supported farming and transport','It made Egypt cold','It was used only for games','It separated Egypt from Africa'],c:0,e:'The Nile supplied water, fertile land for farming and a route for movement.'},
  {q:'A historian compares two written records made at different times. What skill is being used?',a:['Guessing','Using sources as evidence','Memorising names','Drawing maps'],c:1,e:'Historical thinking uses sources to investigate and support conclusions.'},
  {q:'Which question is strongest when analysing an ancient source?',a:['Is it cool?','Who made it, when, and why?','Can I copy it?','Is it long?'],c:1,e:'Author, date/context and purpose help us judge what a source can tell us.'},
  {q:'A pharaoh was…',a:['a ruler of ancient Egypt','a Roman soldier','a river','a type of crop'],c:0,e:'Pharaohs were rulers of ancient Egypt.'},
  {q:'Why should a history paragraph explain evidence rather than only list facts?',a:['Because historians need reasons for conclusions','Because facts are not useful','Because paragraphs must be long','Because dates are optional'],c:0,e:'Good historical writing connects evidence to a reasoned conclusion.'}
 ,
  {q:"Why was farming possible near the Nile?",a:["The river provided water and fertile soil in an otherwise dry region", "The river stopped all sunlight", "The river made metal", "The river was a road"],c:0,e:"The Nile supported agriculture through water and fertile land."},
  {q:"If a source was created hundreds of years after the event it describes, what should a historian do?",a:["Use it carefully and consider when and why it was created", "Assume every detail is automatically true", "Ignore all evidence", "Change the date"],c:0,e:"Context and purpose affect how historians interpret sources."},
  {q:"Which answer best shows cause and effect?",a:["The Nile flooded, so fertile soil was deposited for farming", "Egypt had a pharaoh", "The Nile is a river", "A pyramid is a building"],c:0,e:"Cause and effect explains why one event or condition leads to another."},
  {q:"A source shows a picture of a royal ceremony. What might it tell a historian?",a:["Something about status, culture or beliefs — but it must be interpreted carefully", "Every person's private thoughts", "The exact temperature that day", "Nothing at all"],c:0,e:"Sources can provide clues, but historians must consider perspective and context."}],
 nst:[
  {q:'What happens when a spring is compressed and then released?',a:['Stored energy can produce movement','It loses all energy instantly','It becomes a battery','It turns into water'],c:0,e:'Compression stores energy; releasing the spring can produce movement.'},
  {q:'Which three things are needed for most fires to start and continue?',a:['Fuel, heat, oxygen','Water, ice, wind','Soil, light, oxygen','Metal, water, fuel'],c:0,e:'The fire triangle is fuel + heat + oxygen.'},
  {q:'What is the main purpose of a complete circuit?',a:['To provide a continuous path for electric current','To stop electricity completely','To create rain','To measure temperature'],c:0,e:'A complete circuit gives electricity a continuous path.'},
  {q:'Why do wheels and axles help many vehicles move?',a:['They can reduce friction and make movement easier','They make vehicles heavier','They stop all movement','They create fuel'],c:0,e:'The wheel-and-axle system helps rolling movement happen more easily.'},
  {q:'Electricity can travel from a power station to homes through…',a:['an electricity distribution network','a rain gauge','a compass','a spring only'],c:0,e:'Electricity is generated and transmitted through a network to users.'},
  {q:'If a fire is unsafe to fight, what is the best response?',a:['Raise the alarm, get to safety and follow emergency procedures','Hide nearby','Touch the fire to test it','Add fuel'],c:0,e:'Safety comes first: alert others, evacuate and follow the appropriate emergency response.'}
 ,
  {q:"A battery, wires and a bulb are connected, but the bulb stays off. What is a sensible first check?",a:["Check whether the circuit is complete and connections are secure", "Add water", "Break the bulb", "Remove all wires"],c:0,e:"A break or poor connection can stop current flowing through the circuit."},
  {q:"Why should you never use a real flame to test an idea without adult supervision?",a:["Fire can cause burns and uncontrolled fires", "Fire cannot produce energy", "Fire is always cold", "Flames are only imaginary"],c:0,e:"Fire is hazardous; safe investigation requires proper controls and supervision."},
  {q:"Which situation demonstrates stored energy becoming movement energy?",a:["A stretched elastic band is released and moves an object", "A rock sits still", "A lamp is switched off", "Rain falls on a roof"],c:0,e:"The stretched elastic stores energy that can be transferred to movement."},
  {q:"If two wheel-and-axle designs are tested, what makes the comparison fair?",a:["Change one important variable while keeping other conditions similar", "Change everything at once", "Only test the faster one", "Choose the result you like"],c:0,e:"Fair tests control variables so the effect of the chosen change can be judged."}],
 isizulu:[
  {q:'What does “umfana” mean?',a:['boy','girl','school','book'],c:0,e:'Umfana means boy.'},
  {q:'Which sentence means “The boy is reading”?',a:['Umfana uyafunda.','Umfana uyadlala.','Intombazane iyacula.','Umama uyapheka.'],c:0,e:'Uyafunda means is reading/studying.'},
  {q:'If a sentence is asking a question, what should Tyreese pay attention to?',a:['Meaning and question structure','Only the first letter','Only the last word','The number of commas'],c:0,e:'Comprehension means understanding what the sentence is asking and responding appropriately.'},
  {q:'Choose the best reason for reading a passage twice.',a:['To confirm meaning and details','To make it longer','To avoid understanding it','To change every word'],c:0,e:'Re-reading can help identify details and confirm meaning.'},
  {q:'Which is the strongest answer to a comprehension question?',a:['A random word','A full response supported by the passage','Only “yes”','A copied title'],c:1,e:'A strong comprehension response shows understanding and uses evidence from the text.'}
 ,
  {q:"Which word means “girl”?",a:["intombazane", "umfana", "umuntu", "isikole"],c:0,e:"Intombazane means girl."},
  {q:"Choose the sentence that best means “The mother is cooking.”",a:["Umama uyapheka.", "Umama uyafunda.", "Umama uyagijima.", "Umama uyacula."],c:0,e:"Uyapheka means is cooking."},
  {q:"When answering a reading question in isiZulu, why should you look back at the passage?",a:["To support your answer with the correct meaning and details", "To copy random words", "To avoid reading", "To change the story"],c:0,e:"Returning to the text helps you answer from evidence rather than guessing."},
  {q:"Which strategy helps when you meet an unfamiliar isiZulu word?",a:["Use surrounding words and context, then check a dictionary if needed", "Ignore the whole sentence", "Invent any meaning", "Skip the paragraph"],c:0,e:"Context gives clues; a dictionary can confirm meaning."}],
 english:[
  {q:'In a novel, why does a character’s decision matter?',a:['It can reveal character, move events forward or create conflict','It only fills space','It changes the font','It has no effect'],c:0,e:'Character choices often reveal traits and drive the plot.'},
  {q:'What is the central message of a story?',a:['The main idea or lesson the text communicates','The longest sentence','The page number','The author’s address'],c:0,e:'The central message is the key idea or lesson.'},
  {q:'Which is a simile?',a:['The runner was fast.','The runner was as fast as lightning.','The runner ran.','The runner stopped.'],c:1,e:'A simile compares using words such as “like” or “as”.'},
  {q:'Which sentence uses the past tense?',a:['Tyreese plays.','Tyreese is playing.','Tyreese played.','Tyreese will play.'],c:2,e:'Played tells us the action happened in the past.'},
  {q:'What makes a book review useful?',a:['It summarises key points and gives a supported opinion','It only gives a star rating','It copies the whole book','It has no evidence'],c:0,e:'A good review combines relevant summary with a reasoned evaluation.'},
  {q:'Which word is an adjective?',a:['quickly','bright','run','under'],c:1,e:'Bright describes a noun, so it is an adjective.'}
 ,
  {q:"Which sentence uses a conjunction to join ideas?",a:["Tyreese studied because he wanted to improve.", "Tyreese studied.", "Tyreese, quickly.", "Study!"],c:0,e:"Because connects the reason to the action."},
  {q:"What is an adverb doing in “Tyreese answered carefully”?",a:["It tells how he answered", "It names a person", "It describes a noun", "It joins two paragraphs"],c:0,e:"Carefully tells how the action was performed."},
  {q:"Which is the best evidence for saying a character is brave?",a:["A scene where the character faces danger to help someone", "The character's name", "The page number", "The book cover colour"],c:0,e:"A character's actions provide evidence for an interpretation."},
  {q:"A proverb is best understood as…",a:["a short traditional saying that expresses a lesson or idea", "a character's name", "a punctuation mark", "a paragraph heading"],c:0,e:"Proverbs convey shared wisdom or a lesson."}],
 coding:[
  {q:'If code says “move 10 steps” four times, what pattern is happening?',a:['A repeated sequence','A random event','A spelling rule','A weather pattern'],c:0,e:'The same instruction repeats, which is a sequence/pattern.'},
  {q:'Why should you read code line-by-line before running it?',a:['To predict what the program should do and spot logic mistakes','To make the computer slower','To avoid learning','Because code cannot be tested'],c:0,e:'Reading first helps you reason about the program and compare your prediction with its behaviour.'},
  {q:'A robot is best described as…',a:['a machine designed to perform tasks using programmed/control systems','any toy with wheels','a human wearing metal','a computer game'],c:0,e:'Robots are machines that can be designed to sense, control and/or perform tasks.'},
  {q:'Which is an example of changing existing code?',a:['Copying code and changing values so a sprite moves differently','Deleting the whole project','Turning off the laptop','Printing the keyboard'],c:0,e:'Modifying an existing program to create a new effect is a core coding skill.'},
  {q:'A pattern has 2, 4, 6, 8, ?. What belongs next?',a:['9','10','12','16'],c:1,e:'The pattern increases by 2 each time.'},
  {q:'Why are patterns useful in coding?',a:['They help us recognise repeated rules and predict what comes next','They make all programs identical','They remove logic','They stop computers working'],c:0,e:'Recognising patterns supports algorithmic and computational thinking.'}
 ,
  {q:"A sprite moves 20 steps, turns, then repeats. What is the most important idea to understand?",a:["The order of instructions changes the program's behaviour", "The colour of the sprite is the algorithm", "A computer guesses the next command", "Loops have no purpose"],c:0,e:"Sequence and repetition are core programming ideas."},
  {q:"A pattern is ▲ ● ▲ ● ▲ ●. What should come next?",a:["▲", "■", "●", "◆"],c:0,e:"The two-symbol pattern alternates, so the next symbol is ▲."},
  {q:"Which robot component helps a robot detect information from its environment?",a:["A sensor", "A sticker", "A paintbrush", "A notebook"],c:0,e:"Sensors collect information that a robot can use for decisions/control."},
  {q:"Tyreese changes one command in a working program, runs it, and compares the result. This is useful because…",a:["It helps him test cause and effect in the code", "It prevents learning", "It guarantees every change is correct", "It removes the need to think"],c:0,e:"Changing one part and testing helps isolate how the instruction affects behaviour."}]
};

const storageKey='tyreese-quest-state-v1';
const defaultState={player:{name:'Tyreese',handle:'TYR3ESE',xp:0,level:1,streak:0},sessions:[],subjectStats:{},testSessions:[],parentPinHash:null,rewardClaimed:false,variantSeen:{},writing:{}};

function loadLocal(){try{return {...defaultState, ...(JSON.parse(localStorage.getItem(storageKey))||{})}}catch{return defaultState}}
function saveLocal(s){localStorage.setItem(storageKey,JSON.stringify(s))}
function avatarSvg(){
 return `<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
 <defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="#7c3aed"/><stop offset="1" stop-color="#06b6d4"/></linearGradient></defs>
 <circle cx="110" cy="110" r="105" fill="#0f172a"/>
 <circle cx="110" cy="112" r="82" fill="url(#g)" opacity=".25"/>
 <path d="M62 91c0-38 22-58 48-58s48 20 48 58v24H62z" fill="#17120f"/>
 <path d="M71 103c0-25 16-45 39-45s39 20 39 45v31c0 27-17 45-39 45s-39-18-39-45z" fill="#7b4a2d"/>
 <path d="M67 96c7-31 24-48 44-48 23 0 40 17 44 48-17-13-34-17-48-17-15 0-28 6-40 17z" fill="#201510"/>
 <circle cx="94" cy="119" r="5" fill="#101010"/><circle cx="126" cy="119" r="5" fill="#101010"/>
 <path d="M97 145c9 7 18 7 27 0" fill="none" stroke="#2b160e" stroke-width="5" stroke-linecap="round"/>
 <path d="M72 171c24 18 52 18 76 0l17 24H55z" fill="#111827"/>
 <path d="M83 174h54v31H83z" fill="#111827"/>
 <path d="M91 181h38l-4 17H95z" fill="#22d3ee"/>
 <path d="M80 96h25" stroke="#111" stroke-width="6" stroke-linecap="round"/><path d="M115 96h25" stroke="#111" stroke-width="6" stroke-linecap="round"/>
 </svg>`;
}

function levelForXp(xp){return Math.floor(xp/500)+1}
function pct(n,d){return d?Math.round(n/d*100):0}
const money=n=>'R'+Number(n).toLocaleString('en-US');
function tokensOf(state){return (state.testSessions||[]).reduce((n,x)=>n+(x.status==='approved'?(x.tokensAwarded||0):0),0)}
function testSummary(state,test){
 const list=(state.testSessions||[]).filter(x=>(x.testId||x.subject)===test.id);
 const best=list.reduce((b,x)=>Math.max(b,x.pct!=null?x.pct:pct(x.score,x.total)),0);
 return {attempts:list.length,best,passed:list.some(x=>x.status==='approved'),pending:list.some(x=>x.status==='pending'),last:list.length?list[list.length-1]:null};
}
async function hashPin(pin){
 const data=new TextEncoder().encode('tyreese-quest::'+pin);
 const buf=await crypto.subtle.digest('SHA-256',data);
 return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

function App(){
 const [state,setState]=useState(loadLocal);
 const [view,setView]=useState('home');
 const [subject,setSubject]=useState(null);
 const [questionIndex,setQuestionIndex]=useState(0);
 const [answers,setAnswers]=useState([]);
 const [started,setStarted]=useState(false);
 const [finished,setFinished]=useState(false);
 const [parentMode,setParentMode]=useState(false);
 const [parentPin,setParentPin]=useState('');
 const [notice,setNotice]=useState('');
 const [activeTest,setActiveTest]=useState(null);
 const [activeSet,setActiveSet]=useState(null);
 const [testIndex,setTestIndex]=useState(0);
 const [testAnswers,setTestAnswers]=useState([]);
 const [testMarks,setTestMarks]=useState([]);
 const [lastResult,setLastResult]=useState(null);
 const [parentUnlocked,setParentUnlocked]=useState(false);

 useEffect(()=>{saveLocal(state)},[state]);
 useEffect(()=>{
   if(!supabase)return;
   // Pull the latest shared state and listen for live parent-dashboard updates.
   supabase.from('player_state').select('state').eq('family_code',FAMILY_CODE).maybeSingle()
    .then(({data})=>{if(data?.state){const m={...defaultState,...data.state}; setState(m); saveLocal(m)}});

   const channel=supabase.channel('tyreese-live')
     .on('postgres_changes',
       {event:'UPDATE',schema:'public',table:'player_state',filter:`family_code=eq.${FAMILY_CODE}`},
       payload=>{if(payload.new?.state){const m={...defaultState,...payload.new.state}; setState(m); saveLocal(m)}}
     ).subscribe();

   return ()=>{supabase.removeChannel(channel)};
 },[]);
 const sync=async(next)=>{
   setState(next); saveLocal(next);
   if(supabase){
     await supabase.from('player_state').upsert({family_code:FAMILY_CODE,state:next,updated_at:new Date().toISOString()},{onConflict:'family_code'});
   }
 };
 const currentQs=subject?QUESTIONS[subject.id]:[];
 const currentQ=currentQs[questionIndex];
 const avgBySubject=useMemo(()=>{
   const out={};
   for(const s of SUBJECTS){
     const st=state.subjectStats[s.id];
     out[s.id]=st?Math.round(st.correct/st.total*100):0;
   }
   return out;
 },[state]);
 const overall=useMemo(()=>{
   let c=0,t=0; Object.values(state.subjectStats).forEach(x=>{c+=x.correct;t+=x.total}); return pct(c,t);
 },[state]);
 const startQuest=s=>{setSubject(s);setQuestionIndex(0);setAnswers([]);setStarted(true);setFinished(false);setView('quest')};
 const choose=(i)=>{
   const next=[...answers]; next[questionIndex]=i; setAnswers(next);
 };
 const nextQuestion=async()=>{
   if(answers[questionIndex]===undefined){setNotice('Choose an answer first. Think it through — no guessing spam 😎');return}
   setNotice('');
   if(questionIndex<currentQs.length-1){setQuestionIndex(questionIndex+1);return}
   const score=currentQs.reduce((n,q,i)=>n+(answers[i]===q.c?1:0),0);
   const xp=score*75+250;
   const sid=subject.id;
   const old=state.subjectStats[sid]||{correct:0,total:0,quests:0,best:0};
   const newStat={correct:old.correct+score,total:old.total+currentQs.length,quests:old.quests+1,best:Math.max(old.best,score)};
   const next={...state,player:{...state.player,xp:state.player.xp+xp,level:levelForXp(state.player.xp+xp),streak:state.player.streak+1},subjectStats:{...state.subjectStats,[sid]:newStat},sessions:[...state.sessions,{id:Date.now(),subject:sid,score,total:currentQs.length,xp,date:new Date().toISOString()}]};
   await sync(next); setFinished(true);
 };
 const reset=()=>{localStorage.removeItem(storageKey); location.reload()};

 const currentTestQs=activeSet?activeSet.questions:(activeTest?activeTest.questions:[]);
 const startTest=(t)=>{
   setActiveTest(t); setTestIndex(0);
   setActiveSet(RUBRICS[t.id]?buildSet(t,state.variantSeen?.[t.id]):null);
   setTestAnswers(Array(t.questions.length).fill(''));
   setTestMarks(Array(t.questions.length).fill(null));
   setView('testRun');
 };
 const setTestAnswer=(text)=>{const next=[...testAnswers]; next[testIndex]=text; setTestAnswers(next)};
 const testNext=()=>{
   if(testIndex<currentTestQs.length-1){setTestIndex(testIndex+1);return}
   if(RUBRICS[activeTest.id]) submitAuto(); else setView('testReview');
 };
 const testPrev=()=>{ if(testIndex>0) setTestIndex(testIndex-1) };
 const markTestAnswer=(i,correct)=>{ const next=[...testMarks]; next[i]=correct; setTestMarks(next) };
 const saveTestSession=async()=>{
   const t=activeTest; const total=t.questions.length;
   const score=testMarks.filter(m=>m===true).length;
   const need=passNeeded(t);
   const list=state.testSessions||[];
   const alreadyPassed=list.some(x=>(x.testId||x.subject)===t.id&&x.status==='approved'&&x.tokensAwarded>0);
   const status=(need===null||alreadyPassed)?'final':(score>=need?'pending':'failed');
   const session={id:Date.now(),testId:t.id,subject:t.id,subjectName:t.term===4?`${t.subject}: ${t.title}`:t.subject,score,total,pct:pct(score,total),status,tokensAwarded:0,date:new Date().toISOString(),
     ...(status==='pending'?{answers:testAnswers,marks:testMarks}:{})};
   await sync({...state,testSessions:[...list,session]});
   setLastResult({session,test:t,alreadyPassed});
   setActiveTest(null); setTestAnswers([]); setTestMarks([]); setTestIndex(0);
   setView('testResult');
 };
 const submitAuto=async()=>{
   const t=activeTest; const set=activeSet||buildSet(t,state.variantSeen?.[t.id]); const rub=set.rubrics; const total=t.questions.length;
   const marks=t.questions.map((_,i)=>markAnswer(rub[i],testAnswers[i])===true);
   const score=marks.filter(Boolean).length;
   const need=passNeeded(t);
   const list=state.testSessions||[];
   const alreadyPassed=list.some(x=>(x.testId||x.subject)===t.id&&x.status==='approved'&&x.tokensAwarded>0);
   let status='failed',award=0;
   if(alreadyPassed) status='final';
   else if(score>=need){ if(REWARD.requireParent) status='pending'; else {status='approved'; award=t.tokens} }
   const session={id:Date.now(),testId:t.id,subject:t.id,subjectName:`${t.subject}: ${t.title}`,score,total,pct:pct(score,total),status,tokensAwarded:award,auto:true,date:new Date().toISOString(),
     ...(status==='pending'?{answers:testAnswers,marks,picks:set.picks}:{})};
   await sync({...state,testSessions:[...list,session],variantSeen:{...(state.variantSeen||{}),[t.id]:recordSeen(state.variantSeen?.[t.id],set.picks)}});
   setLastResult({session,test:t,marks,answers:testAnswers,questions:set.questions,picks:set.picks,alreadyPassed,appealSent:false});
   setActiveTest(null); setActiveSet(null); setTestAnswers([]); setTestMarks([]); setTestIndex(0);
   setView('testResult');
 };
 const sendAppeal=async(idx)=>{
   const r=lastResult; if(!r)return;
   const list=state.testSessions||[];
   const cur=list.find(x=>x.id===r.session.id); if(!cur)return;
   const updated={...cur,status:'pending',appeals:idx,answers:r.answers,marks:r.marks,picks:r.picks};
   await sync({...state,testSessions:list.map(x=>x.id===cur.id?updated:x)});
   setLastResult({...r,session:updated,appealSent:true});
 };
 const saveWriting=async(id,v)=>{ await sync({...state,writing:{...(state.writing||{}),[id]:v}}) };
 const backToTestsHub=()=>{ setActiveTest(null); setActiveSet(null); setTestAnswers([]); setTestMarks([]); setTestIndex(0); setLastResult(null); setView('tests') };
 const resolveSession=async(sid,marks)=>{
   const list=state.testSessions||[];
   const sess=list.find(x=>x.id===sid); if(!sess)return;
   const t=ALL_TESTS.find(x=>x.id===(sess.testId||sess.subject)); if(!t)return;
   const score=marks.filter(Boolean).length; const total=t.questions.length;
   const passed=score>=passNeeded(t);
   const already=list.some(x=>x.id!==sid&&(x.testId||x.subject)===t.id&&x.status==='approved'&&x.tokensAwarded>0);
   const {answers:_a,marks:_m,appeals:_p,picks:_k,...rest}=sess;
   const updated={...rest,score,total,pct:pct(score,total),status:passed?'approved':'rejected',tokensAwarded:(passed&&!already)?t.tokens:0,checkedAt:new Date().toISOString()};
   await sync({...state,testSessions:list.map(x=>x.id===sid?updated:x)});
 };
 const claimReward=async()=>{ await sync({...state,rewardClaimed:true}) };
 const createPin=async(pin)=>{ const h=await hashPin(pin); await sync({...state,parentPinHash:h}); setParentUnlocked(true) };
 const tryPin=async(pin)=>{ const h=await hashPin(pin); if(h===state.parentPinHash){setParentUnlocked(true);return true} return false };
 const leaveParent=()=>{ setParentMode(false); setParentUnlocked(false) };

 if(parentMode){
   if(!parentUnlocked) return <ParentGate hasPin={!!state.parentPinHash} onCreate={createPin} onTry={tryPin} onBack={leaveParent}/>;
   return <ParentDashboard state={state} overall={overall} avgBySubject={avgBySubject} onBack={leaveParent} reset={reset} onResolve={resolveSession} onClaim={claimReward}/>;
 }
 if(view==='quest'&&subject){
   return <Quest subject={subject} q={currentQ} index={questionIndex} total={currentQs.length} answer={answers[questionIndex]} choose={choose} next={nextQuestion} finished={finished} answers={answers} onHome={()=>{setView('home');setSubject(null)}} xp={state.player.xp} notice={notice}/>;
 }
 if(view==='writing'){
   return <WritingWorkshop state={state} onSave={saveWriting} onBack={()=>setView('plan')}/>;
 }
 if(view==='testRun'&&activeTest){
   return <TestRunner test={activeTest} q={currentTestQs[testIndex]} index={testIndex} total={currentTestQs.length} value={testAnswers[testIndex]||''} onChange={setTestAnswer} onNext={testNext} onPrev={testPrev} onHome={backToTestsHub}/>;
 }
 if(view==='testReview'&&activeTest){
   return <TestReview test={activeTest} questions={currentTestQs} answers={testAnswers} marks={testMarks} onMark={markTestAnswer} onSave={saveTestSession} onHome={backToTestsHub}/>;
 }
 if(view==='testResult'&&lastResult){
   return <TestResult result={lastResult} state={state} onHome={backToTestsHub} onRetry={()=>startTest(lastResult.test)} onAppeal={sendAppeal}/>;
 }
 return <div className="app">
   <Header state={state} onParent={()=>setParentMode(true)} onTests={()=>setView('tests')} onPlan={()=>setView('plan')}/>
   <main className="container">
    {view==='home' && <>
      <section className="hero">
        <div className="avatar" dangerouslySetInnerHTML={{__html:avatarSvg()}}/>
        <div><div className="eyebrow">GRADE 5 • TERM 4 EXAMS • BATTLE MODE</div>
        <h1>Yo, <span>Tyreese</span> 👊</h1>
        <p>Welcome to <b>TYR3ESE QUEST HQ</b>. Seven tracks. One target: <b>80%+ mastery</b>. Your job isn't to memorise — it's to understand, explain and conquer.</p>
        <div className="heroBtns"><button className="primary" onClick={()=>setView('plan')}>📅 Revision plan</button><button className="ghost" onClick={()=>setView('tests')}>🪙 Term 4 Exam Quests</button><button className="ghost" onClick={()=>document.getElementById('tracks').scrollIntoView({behavior:'smooth'})}>⚡ Practice Quests</button><button className="ghost" onClick={()=>setParentMode(true)}>Parent HQ</button></div></div>
      </section>
      <TodayCard state={state} onOpenPlan={()=>setView('plan')} onQuest={startTest} onPractice={startQuest} onWriting={()=>setView('writing')}/>
      <VaultBar state={state} compact onOpen={()=>setView('tests')}/>
      <section className="stats">
        <div><span>LEVEL</span><strong>{state.player.level}</strong></div><div><span>XP</span><strong>{state.player.xp}</strong></div><div><span>STREAK</span><strong>🔥 {state.player.streak}</strong></div><div><span>OVERALL</span><strong>{overall}%</strong></div>
      </section>
      <section id="tracks">
       <div className="sectionHead"><div><div className="eyebrow">YOUR DROP ZONE</div><h2>Choose your track</h2></div><span className="pill">30–60 MIN • B + C</span></div>
       <div className="grid">{SUBJECTS.map(s=><SubjectCard key={s.id} s={s} mastery={avgBySubject[s.id]} onClick={()=>startQuest(s)}/>)}</div>
      </section>
      <section className="how">
        <div><b>🎯 Understand</b><span>Questions mix recall, reasoning and application.</span></div>
        <div><b>🧠 Explain</b><span>Feedback tells you why an answer works.</span></div>
        <div><b>🔥 Return</b><span>Weak skills come back in future drops.</span></div>
        <div><b>🏆 Master</b><span>80% is the mission target — 90% is elite.</span></div>
      </section>
    </>}
    {view==='tests' && <TestsHub state={state} onStart={startTest} onPlan={()=>setView('plan')} onBack={()=>setView('home')}/>}
    {view==='plan' && <RevisionPlan state={state} onQuest={startTest} onPractice={startQuest} onWriting={()=>setView('writing')} onBack={()=>setView('home')}/>}
   </main>
   <footer>Built for Tyreese • CAPS-aligned study structure • Family-first progress tracking</footer>
 </div>
}

function Header({state,onParent,onTests,onPlan}){return <header><div className="brand"><span className="logo">⚡</span><div><b>TYR3ESE</b><small>QUEST HQ</small></div></div><div className="headerRight"><div className="miniLevel">LVL {state.player.level} <span>{state.player.xp} XP</span></div>{onTests&&<button className="tokenChip" onClick={onTests}>🪙 {tokensOf(state)}</button>}{onPlan&&<button className="parentBtn testsBtn" onClick={onPlan}>📅<span className="hideSm"> Plan</span></button>}{onTests&&<button className="parentBtn testsBtn" onClick={onTests}>📝<span className="hideSm"> Tests</span></button>}<button className="parentBtn" onClick={onParent}>👀 Parent HQ</button></div></header>}

function SubjectCard({s,mastery,onClick}){
 return <button className={`subject ${s.color}`} onClick={onClick}><div className="subjectTop"><span className="subjectIcon">{s.icon}</span><span className="arrow">↗</span></div><h3>{s.name}</h3><p>{s.tagline}</p><div className="progress"><span style={{width:`${mastery}%`}}/></div><div className="subjectBottom"><span>{mastery?`${mastery}% mastery`:'Not started'}</span><span>{s.topics.length} skills</span></div></button>
}

function Quest({subject,q,index,total,answer,choose,next,finished,answers,onHome,xp,notice}){
 const score=answers.reduce((n,a,i)=>n+(a===QUESTIONS[subject.id][i].c?1:0),0);
 return <div className="questPage">
  <header><button className="back" onClick={onHome}>← HQ</button><div className="brand"><span className="logo">⚡</span><div><b>{subject.name.toUpperCase()}</b><small>MISSION TRACK</small></div></div><div className="miniLevel">XP {xp}</div></header>
  <main className="questContainer">
   {!finished?<><div className="questMeta"><span className="pill">{subject.icon} {subject.name}</span><span>Challenge {index+1}/{total}</span></div>
   <div className="bar"><span style={{width:`${((index)/total)*100}%`}}/></div>
   <div className="questionCard"><div className="eyebrow">THINK BEFORE YOU SHOOT</div><h1>{q.q}</h1><div className="answers">{q.a.map((x,i)=><button key={x} className={answer===i?'selected':''} onClick={()=>choose(i)}><span>{String.fromCharCode(65+i)}</span>{x}</button>)}</div>{notice&&<div className="notice">{notice}</div>}<button className="primary big" onClick={next}>{index===total-1?'⚔️ Finish Mission':'Next Challenge →'}</button></div>
   <div className="coach">💡 <b>Coach rule:</b> If you can't explain why your answer is correct, you don't own the skill yet.</div></>
   :<Result subject={subject} score={score} total={total} onHome={onHome}/>}
  </main>
 </div>
}

function Result({subject,score,total,onHome}){
 const p=pct(score,total); const xp=score*75+250;
 return <div className="result"><div className="resultEmoji">{p>=80?'🏆':'🧩'}</div><div className="eyebrow">MISSION COMPLETE</div><h1>{p>=80?'That was a clean drop.':'Good fight. Now we level it up.'}</h1><div className="scoreBig">{p}%</div><p>{score}/{total} correct • <b>+{xp} XP</b></p><div className={`resultBand ${p>=80?'win':''}`}>{p>=80?'80%+ target hit. Keep the streak alive.':'Below target — that’s useful data. Your next quest should revisit the weak spots.'}</div><button className="primary big" onClick={onHome}>Return to HQ</button></div>
}

function ParentDashboard({state,overall,avgBySubject,onBack,reset,onResolve,onClaim}){
 const recent=[...state.sessions].reverse().slice(0,8);
 const weakest=[...SUBJECTS].sort((a,b)=>(avgBySubject[a.id]||0)-(avgBySubject[b.id]||0)).slice(0,3);
 return <div className="parent"><header><button className="back" onClick={onBack}>← Tyreese HQ</button><div className="brand"><span className="logo">👀</span><div><b>PARENT HQ</b><small>PROGRESS COMMAND</small></div></div><button className="parentBtn" onClick={()=>{if(confirm('Reset all local progress?'))reset()}}>Reset local data</button></header>
 <main className="parentContainer"><div className="parentHero"><div><div className="eyebrow">TYR3ESE / {state.player.handle}</div><h1>How's he doing?</h1><p>Use this view to spot gaps early, celebrate progress and know what to do next.</p></div><div className="overallRing"><b>{overall}%</b><span>overall mastery</span></div></div>
 <ParentVault state={state} onClaim={onClaim}/>
 <ParentApprovals state={state} onResolve={onResolve}/>
 <div className="parentGrid"><div className="panel wide"><h2>Subject readiness</h2>{SUBJECTS.map(s=>{const m=avgBySubject[s.id];return <div className="row" key={s.id}><span className="rowName">{s.icon} {s.name}</span><div className="rowBar"><span style={{width:`${m}%`}}/></div></div>})}</div>
 <div className="panel"><h2>Coach him on…</h2>{weakest.map(s=><div className="tip" key={s.id}><b>{s.icon} {s.name} — {avgBySubject[s.id]}%</b><span>{avgBySubject[s.id]<70?'Do a short teach-back: ask him to explain the concept without notes.':avgBySubject[s.id]<80?'Do 5 extra questions and ask him to explain one answer aloud.':'Keep it warm: one mixed challenge to maintain mastery.'}</span></div>)}</div></div>
 <div className="parentGrid"><div className="panel"><h2>What you can do tonight</h2><ol><li>Ask Tyreese to teach you one thing he learned — no notes.</li><li>Ask “How do you know?” after an answer, not just “What is the answer?”</li><li>Keep sessions to 30–60 minutes and stop while he still has energy.</li><li>Celebrate improvement and explanation quality, not only marks.</li></ol></div><div className="panel"><h2>Recent drops</h2>{recent.length?<div className="recent">{recent.map(x=><div key={x.id}><span>{SUBJECTS.find(s=>s.id===x.subject)?.icon} {SUBJECTS.find(s=>s.id===x.subject)?.name}</span><b>{pct(x.score,x.total)}%</b><small>+{x.xp} XP</small></div>)}</div>:<p className="muted">No quests completed yet.</p>}</div></div>
 <div className="syncNote">{supabaseConfigured()? '☁️ Cross-device sync is configured.':'💾 Local mode is active. Add Supabase environment variables to sync between laptops.'}</div>
 </main></div>
}

const shortSubject=n=>({'Natural Sciences & Technology':'NST','Personal & Social Well-being':'PSW'})[n]||n;
function statusLabel(x){
 if(x.status==='approved')return '✅ approved';
 if(x.status==='pending')return '⏳ waiting';
 if(x.status==='rejected')return '❌ not passed';
 if(x.status==='failed')return 'below pass mark';
 return new Date(x.date).toLocaleDateString();
}

function VaultBar({state,compact,onOpen}){
 const tokens=tokensOf(state); const goal=REWARD.goalTokens;
 const p=Math.min(100,Math.round(tokens/goal*100));
 const unlocked=tokens>=goal;
 const Tag=onOpen?'button':'div';
 return <Tag className={`vault ${unlocked?'unlocked':''} ${compact?'compact':''}`} onClick={onOpen}>
  <div className="vaultTop">
   <div><div className="eyebrow">TERM 4 REWARD VAULT</div><h2>{unlocked?'🎉 UNLOCKED!':`🪙 ${tokens.toLocaleString('en-US')} / ${goal.toLocaleString('en-US')} tokens`}</h2></div>
   <div className="vaultPrize">{REWARD.goalLabel}</div>
  </div>
  <div className="vaultBar"><span style={{width:`${p}%`}}/></div>
  <div className="vaultNote">{unlocked?(state.rewardClaimed?'Claimed ✅ Great work, Tyreese!':`Show a parent to claim your ${REWARD.goalLabel}!`):`${money(tokens*REWARD.tokenValueRand)} of ${REWARD.goalLabel} unlocked. Pass each Term 4 quest with ${REWARD.passPct}%+ to earn ${REWARD.tokensPerQuest} tokens.`}</div>
 </Tag>
}

function QuestCard({t,state,onStart}){
 const sum=testSummary(state,t); const need=passNeeded(t);
 let chip='Not attempted yet',cls='';
 if(sum.passed){chip=`✅ Passed · +${t.tokens} 🪙`;cls='passed'}
 else if(sum.pending){chip='⏳ Waiting for parent check';cls='pending'}
 else if(sum.attempts){chip=`Best ${sum.best}% · need ${t.passPct}%`;cls='tried'}
 return <button className={`subject quest ${t.color} ${cls}`} onClick={()=>onStart(t)}>
  <div className="subjectTop"><span className="subjectIcon">{t.icon}</span><span className="tokenTag">+{t.tokens} 🪙</span></div>
  <h3>{t.title}</h3><p>{t.blurb}</p>
  <div className={`questChip ${cls}`}>{chip}</div>
  <div className="subjectBottom"><span>{t.questions.length} questions</span><span>Pass: {need}/{t.questions.length}</span></div>
 </button>
}

function TestsHub({state,onStart,onPlan,onBack}){
 const sessions=state.testSessions||[];
 const groups=[];
 T4_TESTS.forEach(t=>{let g=groups.find(x=>x.subject===t.subject); if(!g){g={subject:t.subject,icon:t.icon,tests:[]};groups.push(g)} g.tests.push(t)});
 const practice=ALL_TESTS.filter(t=>t.term!==4);
 const lastFor=(id)=>{const list=sessions.filter(x=>(x.testId||x.subject)===id);return list.length?list[list.length-1]:null};
 const ex=T4_TESTS[0];
 return <section className="tracks testsHub">
  <VaultBar state={state}/>
  <button className="ghost" onClick={onPlan} style={{marginBottom:18}}>📅 See the exam revision plan →</button>
  <div className="sectionHead"><div><div className="eyebrow">TERM 4 EXAM PREP</div><h2>Boss Quests</h2></div><span className="pill">{ex.questions.length} QUESTIONS • PASS = {REWARD.passPct}%</span></div>
  <p className="testsIntro">Write your answers in your own words. The app marks them automatically against the memo. Score {passNeeded(ex)}/{ex.questions.length} or more to pass and the tokens are yours straight away{REWARD.requireParent?', once a parent confirms it':''}. Every retake mixes in different questions that test the same skills, so you have to understand it, not memorise it. If you think the app marked a good answer wrong, you can ask a parent to check it.</p>
  {groups.map(g=><div key={g.subject} className="questGroup"><h3 className="questGroupTitle">{g.icon} {g.subject}</h3><div className="questRow">{g.tests.map(t=><QuestCard key={t.id} t={t} state={state} onStart={onStart}/>)}</div></div>)}
  <div className="sectionHead" style={{marginTop:44}}><div><div className="eyebrow">NO TOKENS</div><h2>Term 3 practice tests</h2></div></div>
  <div className="grid">
   {practice.map(t=>{const last=lastFor(t.id);return <button key={t.id} className={`subject ${t.color}`} onClick={()=>onStart(t)}>
     <div className="subjectTop"><span className="subjectIcon">{t.icon}</span><span className="arrow">↗</span></div>
     <h3>{t.title}</h3>
     <p>{t.blurb}</p>
     <div className="subjectBottom"><span>{last?`Last: ${last.pct!=null?last.pct:pct(last.score,last.total)}%`:'Not attempted yet'}</span><span>{t.questions.length} Qs</span></div>
   </button>})}
  </div>
  {sessions.length>0 && <div className="panel testsHistory"><h2>Recent attempts</h2>{[...sessions].reverse().slice(0,8).map(x=><div key={x.id} className="testsHistoryRow"><span>{x.subjectName}</span><b>{x.score}/{x.total}</b><small>{statusLabel(x)}</small></div>)}</div>}
  <button className="ghost" onClick={onBack} style={{marginTop:20}}>← Back to HQ</button>
 </section>
}

function Passage({blocks}){
 return <div className="passage">{blocks.map((b,i)=><div key={i} className="passageBlock"><h4>{b.title}</h4>{b.text.map((para,j)=><p key={j}>{para}</p>)}{b.table&&<div className="tableWrap"><table className="passageTable"><thead><tr>{b.table.head.map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{b.table.rows.map((r,k)=><tr key={k}>{r.map((c,m)=><td key={m}>{c}</td>)}</tr>)}</tbody></table></div>}</div>)}</div>
}

function TestRunner({test,q,index,total,value,onChange,onNext,onPrev,onHome}){
 const [showText,setShowText]=useState(true);
 return <div className="questPage">
  <header><button className="back" onClick={onHome}>← Tests</button><div className="brand"><span className="logo">{test.icon}</span><div><b>{shortSubject(test.subject).toUpperCase()}</b><small>{test.term===4?'TERM 4 QUEST':'WRITTEN RESPONSE'}</small></div></div><div className="miniLevel">Q {index+1}/{total}</div></header>
  <main className="questContainer">
   <div className="questMeta"><span className="pill">{test.title}</span><span>Question {index+1}/{total}</span></div>
   <div className="bar"><span style={{width:`${(index/total)*100}%`}}/></div>
   {test.passage&&<div className="passageBox"><button className="ghost passageToggle" onClick={()=>setShowText(!showText)}>{showText?'▲ Hide the text':'📖 Show the text'}</button>{showText&&<Passage blocks={test.passage}/>}</div>}
   <div className="questionCard">
    <div className="eyebrow">WRITE YOUR ANSWER</div>
    <h1 className="testQ">{q.q}</h1>
    <textarea className="testAnswerBox" rows={4} placeholder="Write your answer here…" value={value} onChange={e=>onChange(e.target.value)}/>
    <div className="testNavRow">
     <button className="ghost" onClick={onPrev} disabled={index===0}>← Back</button>
     <button className="primary" onClick={onNext}>{index===total-1?(RUBRICS[test.id]?'Submit for marking →':'Finish & Review →'):'Next Question →'}</button>
    </div>
   </div>
  </main>
 </div>
}

function TestReview({test,questions,answers,marks,onMark,onSave,onHome}){
 const scored=marks.filter(m=>m!==null).length;
 const correct=marks.filter(m=>m===true).length;
 const need=passNeeded(test);
 return <div className="questPage">
  <header><button className="back" onClick={onHome}>← Tests</button><div className="brand"><span className="logo">✅</span><div><b>{shortSubject(test.subject).toUpperCase()}</b><small>MARK YOUR ANSWERS</small></div></div><div className="miniLevel">{correct}/{questions.length}</div></header>
  <main className="questContainer reviewContainer">
   <p className="testsIntro">Compare each answer to the memo, then mark it ✓ correct or ✗ incorrect. {need!==null&&<>Pass mark: <b>{need}/{questions.length}</b>. Mark honestly: a parent checks every pass before tokens are released.</>} {scored<questions.length&&<b> {questions.length-scored} question(s) not yet marked.</b>}</p>
   {questions.map((q,i)=>(
    <div key={i} className="reviewCard">
     <div className="eyebrow">QUESTION {i+1}</div>
     <p className="reviewQ">{q.q}</p>
     <div className="reviewAnswerBlock"><b>Tyreese’s answer:</b><p className="reviewYourAns">{answers[i]?.trim()?answers[i]:<i>(left blank)</i>}</p></div>
     <div className="reviewAnswerBlock memo"><b>Memo:</b><p>{q.memo}</p></div>
     <div className="reviewMarkRow">
      <button className={`markBtn ${marks[i]===true?'good':''}`} onClick={()=>onMark(i,true)}>✓ Correct</button>
      <button className={`markBtn ${marks[i]===false?'bad':''}`} onClick={()=>onMark(i,false)}>✗ Incorrect</button>
     </div>
    </div>
   ))}
   <button className="primary big" onClick={onSave} disabled={scored<questions.length}>{need!==null?'Submit result':'Save Result'} ({correct}/{questions.length})</button>
   {scored<questions.length && <p className="muted" style={{textAlign:'center',marginTop:10}}>Mark every question before submitting.</p>}
  </main>
 </div>
}

function TestResult({result,state,onHome,onRetry,onAppeal}){
 const {session:x,test:t,alreadyPassed,marks,answers,appealSent}=result;
 const qs=result.questions||t.questions;
 const auto=Array.isArray(marks);
 const need=passNeeded(t);
 const [flag,setFlag]=useState([]);
 let emoji='✅',head='Result saved.',msg=`${x.score}/${x.total} correct.`,win=false,band='Nice work.';
 if(x.status==='approved'){emoji='🎉';head='Quest passed!';msg=`${x.score}/${x.total} correct. +${x.tokensAwarded} tokens are in your vault.`;win=true;band='Tokens added to your vault.'}
 else if(x.status==='pending'){
   const n=x.appeals?.length||0;
   emoji='🎉';head=n?'Sent to a parent':'Pass mark hit!';win=true;
   msg=n?`${x.score}/${x.total} auto-marked. A parent will look at the ${n} answer${n>1?'s':''} you flagged.`:`${x.score}/${x.total} correct. Show a parent: once they confirm your answers, ${t.tokens} tokens drop into your vault.`;
   band='Waiting for a parent to confirm…';
 }
 else if(x.status==='failed'){emoji='🧩';head='So close. Go again.';msg=`${x.score}/${x.total} correct. The pass mark is ${need}/${x.total} (${t.passPct}%).`;band=`You need ${need}/${x.total} to pass. Check the answers below, fix the gaps and try again.`}
 else if(alreadyPassed){emoji='💪';head='Practice run saved.';msg=`${x.score}/${x.total} correct. You already earned the tokens for this quest.`}
 const wrong=auto?marks.map((m,i)=>m?null:i).filter(i=>i!==null):[];
 const canAppeal=auto&&x.status==='failed'&&!appealSent&&wrong.length>0;
 const toggle=(i)=>setFlag(f=>f.includes(i)?f.filter(v=>v!==i):(f.length<REWARD.maxAppeals?[...f,i]:f));
 const reachable=x.score+flag.length>=need;
 return <div className="questPage">
  <header><button className="back" onClick={onHome}>← Tests</button><div className="brand"><span className="logo">{t.icon}</span><div><b>{shortSubject(t.subject).toUpperCase()}</b><small>RESULT</small></div></div><div className="miniLevel">🪙 {tokensOf(state)}</div></header>
  <main className="questContainer reviewContainer">
   <div className="result">
    <div className="resultEmoji">{emoji}</div><div className="eyebrow">{t.title.toUpperCase()}</div>
    <h1>{head}</h1><div className="scoreBig">{x.pct}%</div><p>{msg}</p>
    <div className={`resultBand ${win?'win':''}`}>{band}</div>
    <div className="resultBtns">{x.status==='failed'&&<button className="primary big" onClick={onRetry}>Try again</button>}<button className={x.status==='failed'?'ghost':'primary big'} onClick={onHome}>Back to Tests</button></div>
   </div>
   {auto&&<div className="resultDetail">
    {wrong.length>0&&<>
     <h3 className="subhead">{x.status==='failed'?'Check these ones':'Answers to review'} ({wrong.length})</h3>
     {canAppeal&&<p className="muted">Think the app marked a good answer wrong? Flag up to {REWARD.maxAppeals} and a parent will check them.</p>}
     {wrong.map(i=><div key={i} className="reviewCard wrongCard">
      <div className="eyebrow">QUESTION {i+1}</div>
      <p className="reviewQ">{qs[i].q}</p>
      <div className="reviewAnswerBlock"><b>Your answer:</b><p>{answers[i]?.trim()?answers[i]:<i>(left blank)</i>}</p></div>
      <div className="reviewAnswerBlock memo"><b>Memo:</b><p>{qs[i].memo}</p></div>
      {canAppeal&&<button className={`appealBtn ${flag.includes(i)?'on':''}`} onClick={()=>toggle(i)}>{flag.includes(i)?'🙋 Flagged: a parent will check this':'🙋 I think my answer was right'}</button>}
     </div>)}
    </>}
    {canAppeal&&flag.length>0&&<div className="verifyBar"><div><b>{flag.length}</b> flagged • {reachable?'a parent will decide':`even if all count you would have ${x.score+flag.length}/${x.total} (need ${need})`}</div><button className="primary" disabled={!reachable} onClick={()=>onAppeal(flag)}>Send to parent</button></div>}
    <h3 className="subhead">Got right ({x.total-wrong.length})</h3>
    <div className="okList">{marks.map((m,i)=>m?<div key={i} className="okRow">✓ {i+1}. {qs[i].q}</div>:null)}</div>
   </div>}
  </main>
 </div>
}

// ───────────── Revision plan, today's card and writing workshop ─────────────
const DOW=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const pad2=n=>String(n).padStart(2,'0');
const dayKey=d=>`${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
const parseKey=k=>{const [y,m,d]=k.split('-').map(Number);return new Date(y,m-1,d)};
const addDays=(k,n)=>{const d=parseKey(k);d.setDate(d.getDate()+n);return dayKey(d)};
const fmtDay=k=>{const d=parseKey(k);return `${DOW[d.getDay()]} ${d.getDate()} ${MON[d.getMonth()]}`};
const todayKey=()=>dayKey(new Date());
const isWeekend=k=>{const w=parseKey(k).getDay();return w===0||w===6};

function planDays(){
 const dates=G5_EXAMS.map(e=>e.date).sort();
 const start=addDays(dates[0],-1), end=dates[dates.length-1];
 const out=[];
 for(let k=start;k<=end;k=addDays(k,1)){
  out.push({date:k,exams:G5_EXAMS.filter(e=>e.date===k),revision:G5_EXAMS.filter(e=>e.date===addDays(k,1))});
 }
 return out;
}
const writingDone=(state)=>WRITING_TASKS.filter(t=>(state.writing?.[t.id]?.checks||[]).length===t.checks.length).length;

function PlanItem({item,state,onQuest,onPractice,onWriting}){
 if(item.kind==='quest'){
  const t=ALL_TESTS.find(x=>x.id===item.id); const sum=testSummary(state,t);
  let chip='Not attempted yet',cls='';
  if(sum.passed){chip=`✅ Passed · +${t.tokens} 🪙`;cls='passed'}
  else if(sum.pending){chip='⏳ Waiting for a parent to check'; cls='pending'}
  else if(sum.attempts){chip=`Best ${sum.best}% · need ${t.passPct}%`;cls='tried'}
  return <div className="planItem"><div className="planItemInfo"><b>{t.icon} {t.title}</b><span className={`questChip ${cls}`}>{chip}</span></div><button className="primary" onClick={()=>onQuest(t)}>{sum.passed?'Practise':'Start'} · +{t.tokens} 🪙</button></div>
 }
 if(item.kind==='practice'){
  const s=SUBJECTS.find(x=>x.id===item.id);
  return <div className="planItem"><div className="planItemInfo"><b>{s.icon} {s.name} practice quest</b><span className="questChip">Term 3 practice · no tokens</span></div><button className="ghost" onClick={()=>onPractice(s)}>Start</button></div>
 }
 return <div className="planItem"><div className="planItemInfo"><b>✍️ Writing workshop</b><span className={`questChip ${writingDone(state)===WRITING_TASKS.length?'passed':''}`}>{writingDone(state)}/{WRITING_TASKS.length} tasks ticked off</span></div><button className="primary" onClick={onWriting}>Open</button></div>
}

function RevisionBlock({ex,state,handlers}){
 return <div className="planRev">
  <div className="planRevHead">📚 Revision day for <b>{ex.subject}</b> <small>(exam {fmtDay(ex.date)})</small></div>
  {(REVISION[ex.rev]||[]).map((it,i)=><PlanItem key={i} item={it} state={state} {...handlers}/>)}
  {REVISION_NOTES[ex.rev]&&<small className="planNoteInline">{REVISION_NOTES[ex.rev]}</small>}
 </div>
}

function RevisionPlan({state,onQuest,onPractice,onWriting,onBack}){
 const days=planDays(); const today=todayKey();
 const handlers={onQuest,onPractice,onWriting};
 return <section className="tracks planPage">
  <div className="sectionHead"><div><div className="eyebrow">GRADE 5 • END OF TERM 4</div><h2>Exam revision plan</h2></div><span className="pill">REVISION DAY = THE DAY BEFORE EACH EXAM</span></div>
  <p className="testsIntro">Every exam on the timetable, in order. On the day before an exam, do that subject’s revision here. Pass a Boss Quest with 90% or more to earn tokens towards the {REWARD.goalLabel}.</p>
  {days.map(d=>{
   const isToday=d.date===today, isPast=d.date<today;
   const empty=!d.exams.length&&!d.revision.length;
   const load=d.revision.reduce((n,e)=>n+(REVISION[e.rev]||[]).length,0);
   return <div key={d.date} className={`planDay ${isToday?'today':''} ${isPast?'past':''} ${empty?'free':''}`}>
    <div className="planDate"><b>{fmtDay(d.date)}</b>{isToday&&<span className="todayTag">TODAY</span>}</div>
    <div className="planBody">
     {d.exams.map((e,i)=><div key={i} className="planExam">📝 Exam today: <b>{e.subject}</b></div>)}
     {d.revision.map((e,i)=><RevisionBlock key={i} ex={e} state={state} handlers={handlers}/>)}
     {load>=3&&<small className="planNoteInline">Big revision day ({load} activities). Start early and take breaks.</small>}
     {empty&&<div className="planFree">{isWeekend(d.date)?'Weekend. Rest, or catch up on anything you missed.':'No exam tomorrow. Rest, or catch up.'}</div>}
     {d.exams.length>0&&isWeekend(d.date)&&<small className="planNoteInline">Weekend day.</small>}
    </div>
   </div>
  })}
  <p className="muted planNote">Coding & Robotics appears twice on the school timetable (Fri 6 Nov and Fri 13 Nov), so it gets two revision days. Check with the school which date is right.</p>
  <button className="ghost" onClick={onBack} style={{marginTop:14}}>← Back to HQ</button>
 </section>
}

function TodayCard({state,onOpenPlan,onQuest,onPractice,onWriting}){
 const days=planDays(); const today=todayKey();
 const todayDay=days.find(x=>x.date===today);
 const day=(todayDay&&todayDay.revision.length)?todayDay:days.find(x=>x.date>today&&x.revision.length);
 if(!day) return null;
 const isToday=day.date===today;
 const handlers={onQuest,onPractice,onWriting};
 return <div className="todayCard">
  <div className="eyebrow">{isToday?'TODAY’S REVISION':'NEXT REVISION DAY'} • {fmtDay(day.date)}</div>
  {todayDay&&todayDay.exams.length>0&&<div className="planExam">📝 Exam today: <b>{todayDay.exams.map(e=>e.subject).join(' • ')}</b>. Good luck!</div>}
  {day.revision.map((e,i)=><RevisionBlock key={i} ex={e} state={state} handlers={handlers}/>)}
  <button className="ghost" onClick={onOpenPlan} style={{marginTop:10}}>📅 See the full revision plan →</button>
 </div>
}

function WritingTask({task,saved,onSave}){
 const [text,setText]=useState(saved?.text||'');
 const checks=saved?.checks||[];
 const words=text.trim()?text.trim().split(/\s+/).length:0;
 const [lo,hi]=task.words;
 const toggle=(i)=>onSave(task.id,{text,checks:checks.includes(i)?checks.filter(x=>x!==i):[...checks,i]});
 const all=checks.length===task.checks.length;
 return <div className={`reviewCard writeCard ${all?'done':''}`}>
  <div className="eyebrow">{all?'DONE ✓ ':''}WRITING TASK</div>
  <p className="reviewQ">{task.title}</p>
  <p className="writePrompt">{task.prompt}</p>
  <small className="muted">Aim for {lo}–{hi} words. In the exam you will write by hand, so it is good to practise on paper too.</small>
  <textarea className="testAnswerBox" rows={7} placeholder="Write here, or write on paper and just use the checklist below…" value={text} onChange={e=>setText(e.target.value)} onBlur={()=>onSave(task.id,{text,checks})}/>
  <div className={`wordCount ${words===0?'':(words>=lo&&words<=hi?'ok':'off')}`}>{words} words{words>0&&(words<lo?` • ${lo-words} more to reach ${lo}`:words>hi?` • ${words-hi} over ${hi}`:' • great length')}</div>
  <div className="checkList">
   {task.checks.map((c,i)=><label key={i} className={`checkRow ${checks.includes(i)?'on':''}`}><input type="checkbox" checked={checks.includes(i)} onChange={()=>toggle(i)}/> <span>{c}</span></label>)}
  </div>
 </div>
}

function WritingWorkshop({state,onSave,onBack}){
 const store=state.writing||{};
 return <div className="questPage">
  <header><button className="back" onClick={onBack}>← Plan</button><div className="brand"><span className="logo">✍️</span><div><b>WRITING</b><small>WORKSHOP</small></div></div><div className="miniLevel">{writingDone(state)}/{WRITING_TASKS.length}</div></header>
  <main className="questContainer reviewContainer">
   <p className="testsIntro">Revision for the English Writing exam. Do the first two tasks at least: they are the diary entry and the instructions from your English pack. For each one, write it, then tick every item on the checklist honestly. If an item is not true yet, fix your writing first. This workshop does not earn tokens, but it is what the exam will test.</p>
   {WRITING_TASKS.map(t=><WritingTask key={t.id} task={t} saved={store[t.id]} onSave={onSave}/>)}
  </main>
 </div>
}

function ParentGate({hasPin,onCreate,onTry,onBack}){
 const [pin,setPin]=useState(''); const [pin2,setPin2]=useState(''); const [err,setErr]=useState(''); const [busy,setBusy]=useState(false);
 const submit=async()=>{
   if(busy)return; setErr('');
   if(!/^\d{4}$/.test(pin)){setErr('Use exactly 4 digits.');return}
   if(!hasPin&&pin!==pin2){setErr('The two PINs do not match.');return}
   setBusy(true);
   try{
     if(!hasPin){await onCreate(pin)}
     else{const ok=await onTry(pin); if(!ok){setErr('Wrong PIN. Ask a parent.');setPin('')}}
   }finally{setBusy(false)}
 };
 const onKey=e=>{if(e.key==='Enter')submit()};
 return <div className="parent"><header><button className="back" onClick={onBack}>← Tyreese HQ</button><div className="brand"><span className="logo">🔒</span><div><b>PARENT HQ</b><small>{hasPin?'ENTER PIN':'SET A PIN'}</small></div></div><span/></header>
  <main className="gate"><div className="panel gateCard">
   <h2>{hasPin?'Parents only':'Create your parent PIN'}</h2>
   <p className="muted">{hasPin?'Enter the 4-digit PIN to check tests and release rewards.':'Choose a 4-digit PIN. You will need it to approve test passes and release tokens, so keep it to yourself.'}</p>
   <input className="pinInput" type="password" inputMode="numeric" autoComplete="off" maxLength={4} placeholder="••••" value={pin} onChange={e=>setPin(e.target.value.replace(/\D/g,''))} onKeyDown={onKey}/>
   {!hasPin&&<input className="pinInput" type="password" inputMode="numeric" autoComplete="off" maxLength={4} placeholder="Repeat PIN" value={pin2} onChange={e=>setPin2(e.target.value.replace(/\D/g,''))} onKeyDown={onKey}/>}
   {err&&<div className="notice">{err}</div>}
   <button className="primary big" onClick={submit} disabled={busy}>{hasPin?'Unlock':'Save PIN'}</button>
  </div></main></div>
}

function ParentVault({state,onClaim}){
 const tokens=tokensOf(state); const goal=REWARD.goalTokens;
 const p=Math.min(100,Math.round(tokens/goal*100)); const unlocked=tokens>=goal;
 return <div className="panel vaultPanel">
  <h2>🪙 Reward vault</h2>
  <p className="muted">{tokens.toLocaleString('en-US')} / {goal.toLocaleString('en-US')} tokens = {money(tokens*REWARD.tokenValueRand)} of {REWARD.goalLabel} unlocked.</p>
  <div className="vaultBar"><span style={{width:`${p}%`}}/></div>
  {unlocked&&!state.rewardClaimed&&<><p className="vaultNote">🎉 Tyreese has unlocked the full reward. Buy the V-Bucks, then tap below.</p><button className="primary" onClick={()=>{if(confirm('Mark the reward as claimed?'))onClaim()}}>Mark reward as claimed</button></>}
  {state.rewardClaimed&&<p className="vaultNote">Reward claimed ✅</p>}
 </div>
}

function ParentApprovals({state,onResolve}){
 const sessions=state.testSessions||[];
 const pending=sessions.filter(x=>x.status==='pending');
 const [openId,setOpenId]=useState(null);
 const open=pending.find(x=>x.id===openId);
 const t4=sessions.filter(x=>(x.testId||'').startsWith('t4-')).slice(-8).reverse();
 if(open){
  const t=ALL_TESTS.find(z=>z.id===open.testId);
  return <ParentVerify session={open} test={t} onCancel={()=>setOpenId(null)} onConfirm={async(marks)=>{await onResolve(open.id,marks);setOpenId(null)}}/>;
 }
 return <div className="panel approvalsPanel">
  <h2>✅ Test approvals {pending.length>0&&<span className="badge">{pending.length}</span>}</h2>
  {pending.length===0?<p className="muted">Nothing waiting. When Tyreese hits the pass mark, it will appear here for you to check.</p>:pending.map(x=><div key={x.id} className="approvalRow"><div><b>{x.subjectName}</b><small>{x.score}/{x.total} {x.auto?'auto-marked':'self-marked'}{x.appeals?.length?` • ${x.appeals.length} answer(s) flagged by Tyreese`:''} • {new Date(x.date).toLocaleString()}</small></div><button className="primary" onClick={()=>setOpenId(x.id)}>Check answers</button></div>)}
  {t4.length>0&&<><h3 className="subhead">Recent quest results</h3>{t4.map(x=><div key={x.id} className="testsHistoryRow"><span>{x.subjectName}</span><b>{x.score}/{x.total}</b><small>{statusLabel(x)}{x.tokensAwarded?` +${x.tokensAwarded}🪙`:''}</small></div>)}</>}
 </div>
}

function ParentVerify({session,test,onCancel,onConfirm}){
 const [marks,setMarks]=useState(session.marks||[]);
 const [busy,setBusy]=useState(false);
 const qs=questionsFor(test,session.picks);
 const score=marks.filter(Boolean).length; const need=passNeeded(test);
 const set=(i,v)=>{const n=[...marks];n[i]=v;setMarks(n)};
 return <div className="panel verifyPanel">
  <h2>Check: {test.title}</h2>
  <p className="muted">{session.auto?'The app auto-marked these answers. ':''}Check each answer against the memo and tap ✓ or ✗ to change any mark, then confirm. Pass mark: {need}/{test.questions.length}.</p>
  {qs.map((q,i)=><div key={i} className="reviewCard">
   <div className="eyebrow">QUESTION {i+1}</div>
   {session.appeals?.includes(i)&&<div className="appealTag">🙋 Tyreese thinks this one is right</div>}
   <p className="reviewQ">{q.q}</p>
   <div className="reviewAnswerBlock"><b>Tyreese’s answer:</b><p>{session.answers?.[i]?.trim()?session.answers[i]:<i>(left blank)</i>}</p></div>
   <div className="reviewAnswerBlock memo"><b>Memo:</b><p>{q.memo}</p></div>
   <div className="reviewMarkRow"><button className={`markBtn ${marks[i]===true?'good':''}`} onClick={()=>set(i,true)}>✓ Correct</button><button className={`markBtn ${marks[i]===false?'bad':''}`} onClick={()=>set(i,false)}>✗ Incorrect</button></div>
  </div>)}
  <div className="verifyBar"><div><b>{score}/{test.questions.length}</b> ({pct(score,test.questions.length)}%) — {score>=need?`✅ pass: ${test.tokens} tokens will be released`:'❌ below the pass mark: no tokens'}</div><div className="verifyBtns"><button className="ghost" onClick={onCancel}>Cancel</button><button className="primary" disabled={busy} onClick={async()=>{setBusy(true);await onConfirm(marks)}}>Confirm result</button></div></div>
 </div>
}

function supabaseConfigured(){return !!(SUPABASE_URL&&SUPABASE_KEY)}

createRoot(document.getElementById('root')).render(<App/>);
