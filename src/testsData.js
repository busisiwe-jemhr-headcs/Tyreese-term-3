// Written-response Test Bank — Tyreese Quest HQ
// Each item: { q: 'question text', memo: 'model answer for self/parent marking' }

export const TEST_SUBJECTS = [
  { id: 'maths-test', name: 'Mathematics', icon: '➗', color: 'violet' },
  { id: 'geography-test', name: 'Geography', icon: '🌍', color: 'cyan' },
];

export const TEST_BANK = {
  'maths-test': [
    { q: 'Calculate: 2/6 + 3/6 = ?', memo: '5/6' },
    { q: 'Write down one fraction that is equivalent to 1/2.', memo: 'Any equivalent fraction, e.g. 2/4, 3/6 or 4/8' },
    { q: 'Write 7/2 as a mixed number.', memo: '3 1/2' },
    { q: 'Simplify 4/10 to its simplest form.', memo: '2/5' },
    { q: 'Which is greater: 3/8 or 1/2? Explain your answer.', memo: '1/2 is greater (1/2 = 4/8, which is more than 3/8)' },
    { q: 'A cake is cut into 6 equal slices. Tyreese eats 2 slices. What fraction of the cake is left?', memo: '4/6 (or 2/3)' },
    { q: 'How many degrees are in a quarter turn?', memo: '90°' },
    { q: 'What do we call an angle that is smaller than 90°?', memo: 'An acute angle' },
    { q: 'What do we call an angle that is bigger than 90° but smaller than 180°?', memo: 'An obtuse angle' },
    { q: 'How many degrees are in a full turn?', memo: '360°' },
    { q: 'If you turn from facing north to facing east, how many degrees have you turned?', memo: '90°' },
    { q: 'Name the angle that measures exactly 90°.', memo: 'A right angle' },
    { q: 'What do we call two lines that never meet and stay the same distance apart?', memo: 'Parallel lines' },
    { q: 'What do we call two lines that meet at a right angle?', memo: 'Perpendicular lines' },
    { q: 'How many sides does a quadrilateral have?', memo: '4' },
    { q: 'Name a quadrilateral where all four sides are equal in length.', memo: 'A square (or a rhombus)' },
    { q: 'A rectangle has a length of 10 cm and a width of 4 cm. What is the length of the side opposite the 10 cm side?', memo: '10 cm' },
    { q: 'How many right angles does a rectangle have?', memo: '4' },
    { q: 'Round 3 254 to the nearest hundred.', memo: '3 300' },
    { q: 'Round 6 180 to the nearest thousand.', memo: '6 000' },
    { q: 'Order these numbers from smallest to largest: 2 340, 2 043, 2 430, 2 034.', memo: '2 034, 2 043, 2 340, 2 430' },
    { q: 'Calculate 150 × 2 using a mental strategy. Show your working.', memo: '300 (double 150)' },
    { q: 'What is 500 + 499?', memo: '999' },
    { q: 'What is half of 720?', memo: '360' },
    { q: 'Calculate 6 × 7 using a known-facts strategy. Show your working.', memo: '42 (e.g. 6×5=30, 6×2=12, 30+12=42)' },
    { q: 'What is double 260?', memo: '520' },
    { q: 'Calculate 36 ÷ 4.', memo: '9' },
    { q: 'A shop had 640 sweets and sold 275. How many sweets are left?', memo: '365' },
    { q: 'Continue this number pattern: 4, 8, 12, 16, ___', memo: '20' },
    { q: 'Explain, in your own words, one mental maths strategy you can use to add two 2-digit numbers.', memo: 'e.g. round one number to the nearest ten, add it, then adjust back' },
  ],
  'geography-test': [
    { q: 'Name two instruments used by weather stations.', memo: 'Any two of: thermometer, rain gauge, wind vane' },
    { q: 'Explain the job of a wind vane.', memo: 'It shows the direction the wind is blowing from' },
    { q: 'Explain, in one sentence, what rainfall means.', memo: 'The amount of rain that falls in a place over a set period of time' },
    { q: 'Why do scientists record weather data every day rather than just once a week?', memo: 'Daily records give a more accurate, detailed picture of changing conditions and long-term patterns' },
    { q: 'Name the season when Durban (KwaZulu-Natal) typically receives most of its rain.', memo: 'Summer' },
    { q: 'Explain one way climate is different from weather.', memo: 'Climate is the average pattern over many years; weather is the day-to-day conditions' },
    { q: "Explain why the Free State's winters can be very cold despite being far from the coast.", memo: "It is a high-altitude interior region, away from the sea's moderating warmth" },
    { q: 'Describe one adaptation a desert plant might have to survive with little water.', memo: 'e.g. thick, waxy leaves or spines to reduce water loss, or long roots to reach water' },
    { q: 'Explain why the Cape south coast gets rain mostly in winter.', memo: 'Its climate follows a Mediterranean pattern, where winter storms bring most of the rainfall' },
    { q: 'Name a biome found in parts of South Africa that has grassland with scattered trees.', memo: 'Savannah' },
    { q: 'Explain what natural vegetation means.', memo: 'The plants that grow naturally in an area without being planted by people' },
    { q: 'Why might a region with very little rainfall have very little farming?', memo: 'Crops need enough water to grow, so dry regions struggle to support large-scale farming' },
    { q: 'Explain why understanding rainfall patterns is useful for farmers.', memo: 'It helps them decide when to plant and harvest crops' },
    { q: 'Give one reason coastal areas often have milder temperatures than inland areas.', memo: "The sea helps moderate temperatures, keeping coastal areas cooler in summer and warmer in winter" },
    { q: 'Explain the term "climate zone".', memo: 'A region defined by a particular pattern of temperature and rainfall over the year' },
    { q: 'Name one thing forecasters can help predict when air pressure starts to change.', memo: 'e.g. an approaching storm or a change in the weather' },
    { q: 'Describe what you would expect to see in a savannah during the dry season.', memo: 'e.g. dry, yellow-brown grass, fewer leaves on trees, possible bushfires' },
    { q: 'Explain how altitude (height above sea level) can affect climate.', memo: 'Higher areas are generally cooler than lower areas at the same latitude' },
    { q: 'Why do the Drakensberg mountains often get snow in winter, unlike much of the rest of South Africa?', memo: 'Their high altitude makes them much colder than lower-lying regions' },
    { q: 'Explain the value of using a rainfall graph instead of just written notes.', memo: 'A graph makes it easier to see patterns and compare rainfall across different months at a glance' },
    { q: 'Name one human activity that could be affected by an unusually dry season.', memo: 'e.g. farming, water supply, gardening' },
    { q: 'Explain why weather forecasts are useful to ordinary people.', memo: 'They help people plan activities and dress appropriately, and warn of dangerous conditions' },
    { q: 'Describe the difference between a summer-rainfall region and a winter-rainfall region, using one example of each.', memo: 'e.g. Gauteng (summer-rainfall) and the Western Cape (winter-rainfall)' },
    { q: "Explain why South Africa doesn't have just one single climate.", memo: 'Because factors like distance from the sea, altitude and latitude vary across such a large country' },
    { q: 'What might a very high temperature reading combined with no rainfall for weeks suggest about conditions in an area?', memo: 'A dry, hot spell — possibly drought-like conditions' },
    { q: 'Explain why grasslands, rather than forests, are common in savannah regions.', memo: 'Rainfall and climate conditions favour grasses and scattered trees rather than dense forest' },
    { q: "Name one instrument you would use to check today's temperature before deciding what to wear.", memo: 'A thermometer' },
    { q: "Explain why comparing this year's rainfall to previous years is useful.", memo: 'It helps identify whether conditions are wetter, drier, or typical compared to the normal pattern' },
    { q: 'Give one reason it is important to study different biomes in South Africa.', memo: 'To understand how climate affects the plants, animals and human activities across different regions' },
    { q: 'In your own words, summarise why climate affects where people choose to farm or live.', memo: 'Climate affects water availability, temperature and growing conditions, which influence where farming and settlement are most suitable' },
  ],
};

// ─────────────────────────────────────────────────────────────
// TERM 4 EXAM PREP — built from the school Term 4 revision packs
// 2 quests per subject · 20 questions each · pass mark 90% (18/20)
// ─────────────────────────────────────────────────────────────

const NST_1 = [
  { q: "Name the thin, outer solid layer of Earth that we live on, then list Earth’s four layers in order from the outside to the centre.", memo: "The crust. Order: crust → mantle → outer core → inner core. (Both parts needed.)" },
  { q: "Define the word landform and name TWO different landforms.", memo: "A landform is a natural feature or shape on Earth’s surface. Any two, e.g. mountain, hill, valley, plain, plateau, river, gorge/canyon, coastline." },
  { q: "Describe how a plateau looks different from a mountain.", memo: "A mountain rises steeply above the land around it and often has a peak. A plateau is high land with a relatively flat top (like a raised table)." },
  { q: "A learner says: “A valley is a high area of land.” Correct this statement, and say what a gorge (canyon) is.", memo: "A valley is low land between hills or mountains (a river may flow through it). A gorge/canyon is a deep, narrow valley with steep sides." },
  { q: "Define weathering. Does weathering carry the broken pieces away? Explain.", memo: "Weathering is the breaking down of rock into smaller pieces in the place where the rock is found. No – carrying the pieces away is erosion." },
  { q: "Explain how plant roots can help to break a rock.", memo: "Roots grow into cracks in the rock and widen them, so pieces of rock may break off." },
  { q: "Explain how repeated heating and cooling can weaken a rock over time.", memo: "The rock expands when it heats up and contracts when it cools. Over time this makes cracks grow until the rock breaks." },
  { q: "Describe TWO ways water can help to weather a rock.", memo: "Water enters cracks and can weaken the rock; repeated wetting and drying can help some rocks break down." },
  { q: "Define erosion and name the THREE natural agents that can cause it.", memo: "Erosion is the wearing away and movement of soil, sand and rock from one place to another. The agents are water, wind and moving ice." },
  { q: "A strong wind blows loose sand across an open area with very few plants. Name the process, and explain why having few plants makes it worse.", memo: "Wind erosion. Plants help to hold soil in place; with few plants the loose sand and soil is easily lifted and carried away." },
  { q: "Over a very long time, how can a river change a valley or gorge?", memo: "Flowing water carries soil and rock away (water erosion), so the river can deepen or widen the valley or gorge." },
  { q: "Define deposition and name TWO places where sediment may collect.", memo: "Deposition is when moving water, wind or ice drops the sediment it has been carrying. Any two: river bends, river mouths, lakes, the seabed." },
  { q: "A river carrying sand flows into a calm lake and the sand settles. Name the process and explain why the sand settles.", memo: "Deposition. The water slows down, so it can no longer carry the sand." },
  { q: "Put these in the correct order and name each process: (a) the pieces settle in a new place, (b) rock breaks into smaller pieces, (c) water carries the pieces away.", memo: "First (b) – weathering; then (c) – erosion; then (a) – deposition. (Order and all three names needed.)" },
  { q: "Explain how weathering, erosion and deposition can work together to change a river valley over many years.", memo: "Weathering breaks rock into smaller pieces; the river erodes its banks and carries the pieces downstream; where the water slows, the sediment is deposited. Together, over many years, these processes change the shape of the landform." },
  { q: "In a model, you pour water down a slope of loose soil in a tray. Name TWO things you must keep the same to make it a fair test.", memo: "Any two: the slope (steepness), the amount/type of soil, the amount of water, how fast the water is poured." },
  { q: "Describe TWO observations that would be evidence of erosion in the soil-slope model.", memo: "Any two: channels in the slope; soil carried to the bottom of the slope; sediment collecting in the water." },
  { q: "Explain ONE way the soil-slope model is different from a real landscape.", memo: "The model shows only some effects of water erosion; it does not reproduce every feature of a real landscape (e.g. real rivers, wind, and the very long time real erosion takes)." },
  { q: "After heavy rain, a farmer sees deep channels in a bare field and a pile of muddy sediment at the bottom of the slope. Name the process that made the channels and the process that left the sediment, and explain how the two are connected.", memo: "Erosion made the channels (rainwater carried soil away). Deposition left the sediment (the soil was dropped at the bottom where the water slowed). They are connected because the soil eroded from the slope is the soil that is deposited below." },
  { q: "Suggest TWO actions the farmer could take to reduce soil erosion, then say which you would do first and why.", memo: "Any two sensible actions, e.g. plant grass or crops, cover the bare soil, plant across the slope. The ‘first’ choice must be justified using the scenario – e.g. the field is bare, so plant cover (roots) would hold the soil and slow the water." },
];

const NST_2 = [
  { q: "Define sediment and give TWO examples.", memo: "Sediment is small pieces of rock, minerals or organic material. Examples: sand, mud, small rock fragments, remains of living things." },
  { q: "List the FIVE stages of sedimentary rock formation in the correct order.", memo: "Weathering → erosion → deposition → compaction → cementation." },
  { q: "Explain what compaction is.", memo: "The weight of the upper layers presses the lower layers of sediment together." },
  { q: "Explain what cementation is.", memo: "Minerals between the grains help to bind (glue) the sediment together into rock." },
  { q: "A learner says: “A sedimentary rock can form in a few minutes.” Explain why this is wrong.", memo: "Sedimentary rock forms over a very long period of time, as sediment builds up in layers and is slowly compacted and cemented." },
  { q: "Explain why the lower layers of sediment get pressed together more than the upper layers.", memo: "More layers build up on top, so the lower layers carry the weight of all the layers above them." },
  { q: "Match each rock to its description: sandstone, shale, limestone, coal. (a) formed mainly from very fine mud or clay; (b) often contains sand-sized grains; (c) often forms from shell-rich or calcium-rich material; (d) forms from ancient plant material.", memo: "(a) shale (b) sandstone (c) limestone (d) coal. All four must be correct." },
  { q: "Petroleum (oil) is a fossil fuel. Explain why it is NOT classified as a sedimentary rock.", memo: "Oil is a liquid, not a rock. It can form from ancient organic matter in sedimentary basins, but it is a liquid fossil fuel and must not be classified as a rock." },
  { q: "Name TWO features you could observe and describe in a sedimentary rock sample.", memo: "Any two: colour, grain size, layers, visible fragments, fossils." },
  { q: "Explain why colour alone may not be enough to identify a rock.", memo: "Different rocks can look similar in colour, so you need other observations (grain size, layers, fragments, fossils) before deciding." },
  { q: "A rock sample has sand-sized grains and layers. Say which sedimentary rock it might be, and explain why your answer is a possibility and not a certainty.", memo: "Possibly sandstone. Sand-sized grains and layers fit sandstone, but other rocks can have similar features, so more observations are needed before being sure." },
  { q: "A learner says: “All sedimentary rocks always have clearly visible layers.” Explain why this statement is a problem.", memo: "Words like ‘all’ and ‘always’ leave no room for exceptions. Not every sedimentary rock shows clear layers, so scientists look at more than one feature." },
  { q: "In a bottle model you shake soil and water together, then leave the bottle still. What does the model show about deposition?", memo: "Particles of different sizes settle at different levels, forming layers when the water is still." },
  { q: "Explain why the bottle model does not prove that real sedimentary rock can form in a few minutes.", memo: "It only models the settling of sediment into layers. Real rock also needs compaction and cementation, which take a very long time." },
  { q: "Define a fossil and name TWO things a fossil can be.", memo: "A fossil is the preserved remains, impression or trace of an organism that lived long ago. Any two: shell, bone, leaf, footprint." },
  { q: "In an undisturbed sequence of sedimentary layers, which layer is generally older – the lower layer or the upper layer? Explain.", memo: "The lower layer. It was deposited first, and later sediment settled on top of it." },
  { q: "An undisturbed cliff has three layers: Layer A at the bottom, Layer B in the middle and Layer C at the top. A shell fossil is found in Layer A and plant remains in Layer C. What might the fossils suggest? Use careful words such as may, might or suggests.", memo: "The living things or environment in the area may have changed over time: the shell fossil may suggest shell-producing organisms lived there when Layer A formed, and the plant remains may suggest plants grew in or near the area when Layer C formed. (Accept careful, evidence-based answers; do not accept ‘it proves’.)" },
  { q: "Use claim–evidence–reasoning. Claim: “Layer A is older than Layer C.” Write the evidence and the reasoning.", memo: "Evidence: Layer A lies underneath Layer C. Reasoning: in an undisturbed sequence, lower layers were deposited before the layers above them." },
  { q: "A scientist finds a shell fossil in one layer of a cliff. Can she tell exactly what the whole area looked like from this one fossil? Explain, and name TWO other pieces of evidence that would help.", memo: "No – a fossil alone does not tell the whole story. Any two helpful extras: rock type, grain size, layer position/thickness, other fossils, whether the layers have been disturbed." },
  { q: "Explain why scientists should use several observations rather than one clue when drawing conclusions about the past.", memo: "One clue can be misleading or incomplete. Comparing rock type, layer position, fossils and other evidence helps to check an idea before drawing a conclusion." },
];

const SS_1 = [
  { q: "Define heritage.", memo: "The history, places, objects, traditions and natural features we receive from the past and preserve for future generations." },
  { q: "Explain the difference between tangible and intangible heritage, with ONE example of each.", memo: "Tangible heritage is physical – you can see and touch it (e.g. buildings, monuments, rock paintings, ancient tools). Intangible heritage is traditions, knowledge and practices passed from one generation to the next (e.g. oral storytelling, songs and dances, languages, ceremonies)." },
  { q: "What is natural heritage? Give ONE South African example.", memo: "Important natural features and landscapes (e.g. mountains, unique geological formations, ecosystems). Example: Makhonjwa Mountains (Mpumalanga) or Golden Gate Highlands National Park (Free State)." },
  { q: "Name the province where each heritage example is found: (a) Cradle of Humankind (b) Mapungubwe (c) Castle of Good Hope (d) Makhonjwa Mountains.", memo: "(a) Gauteng (b) Limpopo (c) Western Cape (d) Mpumalanga. All four must be correct." },
  { q: "Name the province where each heritage example is found: (a) Kaditshwene (b) San rock art in the Drakensberg (c) Richtersveld Cultural and Botanical Landscape (d) Golden Gate Highlands National Park.", memo: "(a) North West (b) KwaZulu-Natal (c) Northern Cape (d) Free State. All four must be correct." },
  { q: "Which province is linked to aloe and traditional medicinal knowledge? Then say which type of heritage ‘knowledge about medicinal plants passed from grandparents to grandchildren’ is, and why.", memo: "Eastern Cape. It is intangible heritage – knowledge passed between generations rather than a single physical object (it is also cultural heritage)." },
  { q: "Explain TWO ways heritage helps a community.", memo: "Any two explained: preserves memory; gives identity/belonging; preserves cultural knowledge; helps people learn about the past (education); brings tourism and jobs; reminds us to protect it for future generations." },
  { q: "Why is Mapungubwe important? Use evidence in your answer.", memo: "Archaeological discoveries such as gold objects and pottery provide evidence of the skills, achievements and trading connections of people in an early African kingdom in Limpopo." },
  { q: "Why is the Cradle of Humankind significant?", memo: "Important hominin fossils found there help us learn about the origins of humans." },
  { q: "A golden object is found at an archaeological site. Explain why it is tangible heritage and what it might teach us.", memo: "It is a physical object that can be seen and touched. It may show the skills, trade and way of life of the people who made it." },
  { q: "Classify this example and justify your answer: a historic stone building in the Western Cape.", memo: "Tangible (and/or cultural) heritage – a physical building that tells us about the history of the Cape (e.g. the Castle of Good Hope). Accept other well-justified classifications." },
  { q: "Compare Mapungubwe and the Castle of Good Hope: give ONE difference in what each helps us learn about the past.", memo: "Mapungubwe gives archaeological evidence about an early African kingdom (e.g. its crafts and trade). The Castle of Good Hope tells us about the history of the Cape and how a historic building was used over time." },
  { q: "Read Source B and answer. SOURCE B: “Rock paintings found in the Drakensberg provide evidence of people who lived in the region in the past. The paintings may show animals, people and activities. Researchers study the images to learn about past ways of life. However, a painting alone may not tell us the full meaning intended by the person who created it.”  Give ONE reason researchers should not make assumptions about the meaning of a painting.", memo: "A painting alone may not show the full meaning the artist intended, so researchers need other evidence and must avoid guessing without support." },
  { q: "A rock painting shows human and animal figures. Using this example, explain the difference between an observation and an inference.", memo: "An observation is what you can see (e.g. ‘there are human and animal figures’). An inference is what you think the evidence may mean (e.g. ‘the people may be hunting’) – it must be supported by evidence and not claimed as definitely true." },
  { q: "A scholar says: “Only old buildings can be heritage.” Do you agree or disagree? Use TWO examples to support your answer.", memo: "Disagree. Heritage can be tangible, intangible, cultural or natural. Example: San rock art is tangible heritage; oral storytelling is intangible heritage." },
  { q: "Explain why the heritage categories can overlap, using an example.", memo: "One heritage example can fit more than one category. E.g. a historic place such as Mapungubwe or the Castle of Good Hope is tangible (a physical site) and cultural (it tells us about people’s history)." },
  { q: "When analysing a heritage source you follow six steps. Write down the FIRST THREE steps in order.", memo: "1. Observe  2. Identify  3. Locate. (The rest: classify, find evidence, explain significance.)" },
  { q: "Write a short paragraph (3–5 sentences) explaining why ONE South African heritage example should be protected. Include its name and province, its heritage type, what it teaches us about the past, and why future generations should be able to learn from it.", memo: "Model answer: The Cradle of Humankind in Gauteng is tangible heritage. Its hominin fossils teach us about the origins of humans. It must be protected so that future generations can also learn from it. (A full answer has: the name and province, the heritage type, what it teaches, and why future generations should learn from it.)" },
  { q: "Explain how a heritage site can create jobs, and say what could happen to the site if it is not protected.", memo: "Visitors and tourists create jobs (guides, hotels, restaurants, shops). If it is not protected it can be damaged or lost, and future generations can no longer learn from it." },
  { q: "Compare the Makhonjwa Mountains and San rock art: say which is natural heritage and which is tangible heritage, and what each teaches us.", memo: "Makhonjwa Mountains = natural heritage; their important geological features give evidence of Earth’s ancient history. San rock art = tangible heritage; the paintings give evidence of the lives and beliefs of people in the past." },
];

const SS_2 = [
  { q: "Define a mineral and a mine.", memo: "A mineral is a naturally occurring substance found in the Earth’s crust. A mine is a place where minerals or other valuable materials are extracted from the ground." },
  { q: "Match each resource to a common use: coal, copper, iron ore, diamonds.  Uses: A electrical wiring  B jewellery and industrial cutting tools  C electricity generation  D making steel.", memo: "coal – C; copper – A; iron ore – D; diamonds – B. All four must be correct." },
  { q: "Name ONE use of platinum and ONE use of gold.", memo: "Platinum: vehicle catalytic converters, jewellery or industrial uses. Gold: jewellery, electronics or some specialised equipment." },
  { q: "Explain why copper is a good choice for electrical wiring.", memo: "A resource’s use depends on its properties – copper conducts electricity well." },
  { q: "A map uses coloured symbols to show minerals. Name the first TWO things you should check on the map, and explain why the key is important.", memo: "The title (what the map is about) and the key/legend. The key explains what the colours and symbols mean." },
  { q: "A learner says: “Every province has the same mineral resources.” Explain why this should not be assumed, and how a map would show it.", memo: "Mineral resources are concentrated in certain areas, not spread evenly. A map’s symbols/colours show different minerals in different places, so you must use the map as evidence." },
  { q: "Explain why a settlement may grow near a mineral deposit.", memo: "Mining creates jobs and attracts workers, who need homes, shops, schools, roads and healthcare – so a settlement can grow near the mine." },
  { q: "Give TWO factors, other than the minerals themselves, that affect whether a mining settlement keeps growing.", memo: "Any two: transport, water, investment, working conditions, whether mining stays economically viable." },
  { q: "Describe surface (open-cast) mining and say when it is used.", memo: "The top layers of soil and rock are removed, often creating a large open pit. It is used when the deposit is close enough to the surface to be reached economically from above." },
  { q: "Describe underground mining and say when it is used.", memo: "Shafts and tunnels give access to the deposit, and workers and machines extract the mineral underground. It is used when the deposit is deep below the surface." },
  { q: "Compare surface mining and underground mining in terms of how the deposit is reached and how visible the change to the land is.", memo: "Surface: reached through a large open excavation; land change is often extensive. Underground: reached through shafts and tunnels; surface change may be less visible, but damage (e.g. ground subsidence) can still happen." },
  { q: "A mineral deposit lies deep below the ground. Which mining method is more suitable, and why?", memo: "Underground mining – the deposit is too deep to be reached practically from the surface." },
  { q: "Give TWO risks of underground mining.", memo: "Any two: rock falls, heat, poor ventilation (also ground subsidence)." },
  { q: "Complete the cause-and-effect chain:  Mining removes vegetation → ______________ → ______________ → erosion increases.", memo: "soil becomes exposed → rain washes the soil away. (Both gaps needed, in this order.)" },
  { q: "SOURCE C: A photograph shows a large open pit where vegetation has been removed. Trucks carry rock away from the pit. A stream flows near the mining area, and some bare soil is visible on the slope beside it.  (a) Which mining method is shown?  (b) Describe TWO visible changes to the land.", memo: "(a) Surface/open-cast mining. (b) Any two: vegetation removed; a large pit created; bare soil exposed; the land surface reshaped. Both parts needed." },
  { q: "Using Source C (bare soil on a slope beside a stream), explain how the exposed soil could affect the stream after heavy rainfall.", memo: "Rain can wash the exposed soil into the stream, making the water muddy with sediment. This can damage habitats and harm aquatic organisms." },
  { q: "Name THREE environmental impacts of mining, and explain ONE of them.", memo: "Any three of: land disturbance, water pollution, air pollution, habitat destruction, noise pollution, waste. One explained correctly, e.g. mining waste or chemicals can contaminate rivers and groundwater." },
  { q: "Mining waste enters a stream. Explain the cause-and-effect chain that could harm living things.", memo: "Mining waste enters the stream → the water becomes polluted → aquatic organisms may be harmed." },
  { q: "Define rehabilitation and give TWO actions that could be part of it.", memo: "Rehabilitation means repairing or restoring land affected by mining. Any two: replace suitable soil and reshape the land; replant indigenous vegetation; control erosion; treat or contain polluted water; secure dangerous open pits; monitor the site after mining." },
  { q: "A mining company wants to close a mine without treating polluted water or restoring the damaged land. Explain why this is a problem, then recommend ONE action and justify it.", memo: "Untreated water could pollute rivers or groundwater, and damaged land could keep eroding. A good recommendation (e.g. treat or contain the polluted water, or rehabilitate the land by replanting and reshaping slopes) must explain how the action reduces the harm." },
];

const MATHS_1 = [
  { q: "A line segment is 6 cm 4 mm long. Write its length in millimetres.", memo: "64 mm" },
  { q: "Write 85 mm in centimetres and millimetres.", memo: "8 cm 5 mm" },
  { q: "A line segment starts at the 2 cm mark on a ruler (not at 0) and ends at the 9 cm 5 mm mark. What is its length?", memo: "7 cm 5 mm (9 cm 5 mm − 2 cm). Reading only the end mark would be a mistake – the start is not at 0." },
  { q: "Convert 5 L 250 mL to millilitres.", memo: "5 250 mL" },
  { q: "Convert 7 km 80 m to metres.", memo: "7 080 m" },
  { q: "Convert 3 kg 45 g to grams.", memo: "3 045 g" },
  { q: "Convert 6 250 g to kilograms and grams.", memo: "6 kg 250 g" },
  { q: "Convert 4 070 mL to litres and millilitres.", memo: "4 L 70 mL" },
  { q: "Calculate: 4 m 65 cm + 2 m 50 cm.  Give your answer in metres and centimetres.", memo: "7 m 15 cm (4 m 65 cm + 2 m 50 cm = 6 m 115 cm, and 100 cm = 1 m)" },
  { q: "Calculate: 8 kg 200 g − 3 kg 650 g.  Give your answer in kilograms and grams.", memo: "4 kg 550 g (regroup 8 kg 200 g as 7 kg 1 200 g)" },
  { q: "Calculate: 3 L 750 mL + 2 L 480 mL.  Give your answer in litres and millilitres.", memo: "6 L 230 mL (3 L 750 mL + 2 L 480 mL = 5 L 1 230 mL)" },
  { q: "Calculate: 5 km 200 m − 2 km 850 m.  Give your answer in kilometres and metres.", memo: "2 km 350 m (5 200 m − 2 850 m = 2 350 m)" },
  { q: "Sipho has a green ribbon that is 3 m 45 cm long and a yellow ribbon that is 2 m 80 cm long. He cuts 1 m 25 cm off the two ribbons joined together. How much ribbon is left?", memo: "5 m (345 cm + 280 cm = 625 cm; 625 cm − 125 cm = 500 cm = 5 m)" },
  { q: "A cafeteria mixes 3 L 600 mL of orange juice with 2 L 900 mL of apple juice. The mixture is poured equally into 5 jugs. How much juice is in each jug?", memo: "1 L 300 mL (3 600 mL + 2 900 mL = 6 500 mL; 6 500 ÷ 5 = 1 300 mL)" },
  { q: "Thabo runs around a 250 m track 8 times. Aisha runs a trail that is 2 km 400 m long. Who runs further, and by how many metres?", memo: "Aisha runs further by 400 m (Thabo: 250 × 8 = 2 000 m; Aisha: 2 400 m)" },
  { q: "One rope is 2 m 35 cm long. How long are 4 of these ropes together? Give your answer in metres and centimetres.", memo: "9 m 40 cm (235 cm × 4 = 940 cm)" },
  { q: "A 1 kg 800 g bag of sugar is shared equally between 6 children. How many grams does each child get?", memo: "300 g (1 800 g ÷ 6)" },
  { q: "Lerato says: “5 m 70 cm + 3 m 60 cm = 8 m 130 cm.” Explain what she still needs to do, and give the correct answer.", memo: "130 cm is more than 100 cm, so she must regroup 100 cm as 1 m: 8 m 130 cm = 9 m 30 cm." },
  { q: "Which is longer: 3 km 50 m or 3 500 m? Show how you know.", memo: "3 500 m is longer. 3 km 50 m = 3 050 m, which is 450 m shorter than 3 500 m." },
  { q: "Order these masses from lightest to heaviest: 2 kg 50 g, 2 500 g, 2 kg 5 g, 2 150 g.", memo: "2 kg 5 g (2 005 g), 2 kg 50 g (2 050 g), 2 150 g, 2 500 g" },
];

const MATHS_2 = [
  { q: "What is volume? What is the volume of one unit cube that measures 1 cm × 1 cm × 1 cm?", memo: "Volume is the amount of 3D space inside a solid object. One unit cube has a volume of 1 cm³." },
  { q: "Choose the better unit (cm³ or m³) to measure the volume of each: (a) a juice box (b) a shipping container (c) a classroom (d) a maths textbook.", memo: "(a) cm³ (b) m³ (c) m³ (d) cm³. All four must be correct." },
  { q: "A cereal-box model is built from 4 layers with 12 cubes in each layer. What is its volume?", memo: "48 cm³ (4 × 12)" },
  { q: "A block is built from 6 layers with 15 cubes in each layer. What is its volume?", memo: "90 cm³ (6 × 15)" },
  { q: "Write the formula for the volume of a cuboid.", memo: "Volume = length × width × height (V = l × w × h)" },
  { q: "Calculate the volume of a cuboid with l = 9 cm, w = 4 cm and h = 5 cm.", memo: "180 cm³ (9 × 4 × 5)" },
  { q: "A storage room is 5 m long, 4 m wide and 6 m high. Calculate its volume. Remember the unit.", memo: "120 m³ (5 × 4 × 6)" },
  { q: "Calculate the volume of a cube with sides of 6 cm.", memo: "216 cm³ (6 × 6 × 6)" },
  { q: "A cuboid has a volume of 120 cm³. Its length is 6 cm and its width is 5 cm. What is its height?", memo: "4 cm (6 × 5 = 30; 120 ÷ 30 = 4)" },
  { q: "Complete: 4 000 cm³ = ______ mL.", memo: "4 000 mL (1 cm³ = 1 mL)" },
  { q: "Complete: 2 500 mL = ______ cm³.", memo: "2 500 cm³ (1 mL = 1 cm³)" },
  { q: "Complete: 6 000 cm³ = ______ L.", memo: "6 L (1 000 cm³ = 1 L)" },
  { q: "How many cubic centimetres of water are there in 3 L?", memo: "3 000 cm³ (3 × 1 000)" },
  { q: "Write 7 500 mL in litres and millilitres.", memo: "7 L 500 mL" },
  { q: "An aquarium is 50 cm long, 30 cm wide and 40 cm high. (a) Calculate its volume in cm³. (b) How many litres of water will fill it completely?", memo: "(a) 60 000 cm³ (50 × 30 × 40). (b) 60 L (60 000 ÷ 1 000). Both parts needed." },
  { q: "A fish tank is 60 cm long, 40 cm wide and 50 cm high. It is filled with water to a height of 30 cm only. How many litres of water are in the tank?", memo: "72 L (60 × 40 × 30 = 72 000 cm³; 72 000 ÷ 1 000 = 72 L). The water height (30 cm) must be used, not the tank height." },
  { q: "A box measures 10 cm × 10 cm × 10 cm. How many millilitres of water can it hold? Give the answer in litres too.", memo: "1 000 mL = 1 L (10 × 10 × 10 = 1 000 cm³)" },
  { q: "Box A measures 8 cm × 5 cm × 3 cm and Box B measures 6 cm × 5 cm × 5 cm. Which box has the greater volume, and by how much?", memo: "Box B. Box A = 120 cm³, Box B = 150 cm³, so Box B is greater by 30 cm³." },
  { q: "Zinhle says: “A block that is 4 cm × 3 cm × 2 cm has a volume of 9 cm³ because 4 + 3 + 2 = 9.” Explain her mistake and give the correct volume.", memo: "Volume is found by multiplying length × width × height, not by adding. 4 × 3 × 2 = 24 cm³." },
  { q: "A juice carton measures 7 cm × 5 cm × 20 cm. How many millilitres of juice does it hold? Is that enough to fill 6 cups of 100 mL each?", memo: "700 mL (7 × 5 × 20 = 700 cm³). 6 cups × 100 mL = 600 mL, so yes – enough with 100 mL left over." },
];

const PSW_1 = [
  { q: "Define a gender stereotype and give an example from home or school.", memo: "A fixed, unfair idea that certain tasks or behaviours belong only to boys or only to girls. Example: ‘only girls should sweep and cook; only boys should play sport’." },
  { q: "Some people believe that girls should only do indoor chores while boys should only work outdoors or play sport. Explain why this belief is unfair.", memo: "It limits what people are allowed to do and ignores their abilities and interests. Anyone can do any chore or play any sport." },
  { q: "Explain TWO ways unfair gender roles can limit boys or girls.", memo: "Any two explained: stops them developing talents or trying activities; reduces opportunities (jobs, leadership); makes them feel excluded or unequal; shares responsibilities unfairly." },
  { q: "Give an example of how boys’ and girls’ responsibilities can differ in some homes or cultures, and explain why unfair roles should change.", memo: "Example: in some homes girls are expected to cook and clean while boys play outside. Unfair roles should change because they limit people’s opportunities; everyone deserves equal chances and respect." },
  { q: "Name ONE influential South African woman or women’s group, and describe what she or they did.", memo: "Accept any accurate example, e.g. Charlotte Maxeke (founded the Bantu Women’s League; first Black South African woman to earn a university degree); Lilian Ngoyi, Helen Joseph, Rahima Moosa and Sophie de Bruyn (leaders of the 1956 Women’s March to the Union Buildings); Albertina Sisulu." },
  { q: "Describe TWO ways women contribute to developing local communities in South Africa.", memo: "Any two: nursing/doctoring (health care); teaching; running businesses that create jobs; community leadership; leading social movements; caring for families and communities." },
  { q: "Give a reasoned opinion: how does valuing the equal contributions of men and women make a community stronger? Give TWO reasons.", memo: "Accept reasoned answers, e.g. more skills and ideas are used; decisions are fairer; everyone feels respected and able to contribute; problems get solved faster." },
  { q: "Diwali: name the religion that celebrates it and explain what it celebrates.", memo: "Hinduism. The triumph of light over darkness and good over evil." },
  { q: "Name TWO customs or symbols linked to Diwali.", memo: "Any two: lighting clay lamps (diyas), making rangoli patterns, family gatherings, sharing sweets." },
  { q: "Christmas: name the religion that celebrates it and say what it celebrates.", memo: "Christianity. The birth of Jesus Christ." },
  { q: "Eid-al-Fitr: name the religion, say what it marks, and give ONE custom.", memo: "Islam. It marks the end of the Ramadan fast. Any one custom: special prayers, family gatherings and feasting, giving to charity, wearing new clothes." },
  { q: "Describe what Muslims do during Ramadan, and explain how this links to Eid-al-Fitr.", memo: "Muslims fast from sunrise to sunset during the holy month of Ramadan. Eid-al-Fitr is the celebration that marks the end of the fast." },
  { q: "Passover: name the religion, say what it commemorates, and name ONE custom or symbol.", memo: "Judaism. Freedom from slavery in ancient Egypt. Custom/symbol: the Seder meal or unleavened bread (matzo)." },
  { q: "Buddha Day: name the religion, say what is remembered, and give ONE way it is celebrated.", memo: "Buddhism. The birth, enlightenment and passing of Buddha. Any one way: lighting lamps or candles, offering flowers, meditation, visiting a temple, giving to others." },
  { q: "Explain the significance of Rosh Hashanah and of Hanukkah in Jewish communities.", memo: "Rosh Hashanah is the Jewish New Year – a time of prayer, reflection and new beginnings. Hanukkah is the festival of lights, remembering the rededication of the Temple and marked by lighting the menorah." },
  { q: "Analyse how light is used as a symbol in Diwali and in Buddha Day. What does light represent?", memo: "At Diwali the lamps stand for the triumph of light over darkness and good over evil; on Buddha Day light can stand for wisdom, enlightenment and hope. In both, light represents goodness and knowledge overcoming darkness or ignorance. Accept well-reasoned answers." },
  { q: "Discuss TWO themes that are shared by many different religious festivals in South Africa.", memo: "Any two discussed: family gatherings; charity and giving; reflection and prayer; community; thankfulness; hope." },
  { q: "Match each festival to its faith: Passover, Diwali, Eid-al-Fitr, Buddha Day, Hanukkah, Christmas.", memo: "Passover – Judaism; Diwali – Hinduism; Eid-al-Fitr – Islam; Buddha Day – Buddhism; Hanukkah – Judaism; Christmas – Christianity. All six must be correct." },
  { q: "Why is it important to respect other people’s religious customs, even when they are different from ours?", memo: "South Africa is a diverse nation. Respect and tolerance help people of different faiths live together peacefully, and every person has the right to follow their own beliefs." },
  { q: "A classmate is fasting for Ramadan and some learners tease her for not eating at break. Explain what you would say or do, and why.", memo: "Accept a respectful, reasoned response, e.g. explain that she is fasting for her faith and that teasing is unkind; ask them to stop; include her in other activities. The reason should link to respect for different religions." },
];

const PSW_2 = [
  { q: "Name THREE common household chemicals that can poison a child if swallowed.", memo: "Any three, e.g. bleach, paraffin, drain cleaner, dishwashing liquid, insecticide/insect spray, rat poison, pool chemicals." },
  { q: "What does the skull-and-crossbones symbol on a container warn you about?", memo: "That the contents are poisonous/toxic and can harm or kill if swallowed or touched." },
  { q: "Explain why it is dangerous for children to take medicine without adult supervision.", memo: "Taking the wrong medicine or the wrong amount can poison or seriously harm a child; an adult checks the medicine and the correct dose." },
  { q: "Give TWO safe-storage rules for medicines or household chemicals.", memo: "Any two: store them in a locked cupboard or high up, out of children’s reach; keep them in their original labelled containers (never in cooldrink bottles); keep lids tightly closed." },
  { q: "A younger child has swallowed a household chemical. What should you do?", memo: "Tell an adult straight away; phone the emergency number or a poison helpline and follow their instructions; keep the container to show them. Do not make the child vomit or give anything to drink unless a professional says so." },
  { q: "Outline an emergency fire exit strategy for your home. Give at least THREE steps.", memo: "Any three sensible steps, e.g. plan and practise exit routes; get out quickly and crawl low under smoke; do not go back for belongings; meet at a safe spot outside; call the fire department/emergency number from outside." },
  { q: "Why should you never go back into a burning house to fetch your belongings?", memo: "Fire and smoke spread very quickly and can trap or kill you. Belongings can be replaced – people cannot." },
  { q: "Explain why freshwater is a limited natural resource.", memo: "Most of Earth’s water is salty seawater. Less than 1% of Earth’s water is freshwater that people can easily use." },
  { q: "Name TWO ways human activities pollute water.", memo: "Any two: dumping litter or waste, sewage, factory or mining waste/chemicals, oil spills, pesticides and fertilisers washing into rivers." },
  { q: "Suggest TWO ways to save water indoors.", memo: "Any two: shorter showers; turn off the tap while brushing teeth; fix leaking taps; use full loads in washing machines; reuse water." },
  { q: "Suggest TWO water-wise gardening strategies.", memo: "Any two: water early morning or evening; use mulch; plant indigenous or drought-resistant plants; use rainwater or grey water; water at the roots." },
  { q: "Define malnutrition.", memo: "A condition caused by an insufficient or unbalanced intake of nutrients." },
  { q: "List FIVE food groups you learned in class, and explain why growing children need a balanced variety of foods.", memo: "Accept the five groups taught in class (e.g. starchy foods/grains, protein foods, fruit and vegetables, fats and oils, water/dairy). Each group provides different nutrients needed for energy, growth and protection against illness." },
  { q: "Which food group supplies long-term energy and helps insulate the body? Give ONE example.", memo: "Fats and oils. Example: cooking oil, butter or nuts." },
  { q: "Name ONE religious group that does not eat pork, and explain that this is because of religious dietary laws.", memo: "Muslims (halal) or Jewish people (kosher). Their religious dietary laws do not allow pork." },
  { q: "Explain the difference between legal substances and illegal drugs, with TWO examples of each.", memo: "Legal substances can be bought or used legally, often with age or prescription rules (e.g. alcohol for adults, tobacco, medicine). Illegal drugs are against the law to make, sell or use (e.g. tik/methamphetamine, heroin, cocaine)." },
  { q: "Give TWO negative physical or social effects of drug abuse.", memo: "Any two: addiction; damage to health (brain, heart, body); mood swings; conflict with family and friends; crime; dropping out of school; losing a job." },
  { q: "What is tik (methamphetamine), and why is it so dangerous?", memo: "An illegal stimulant drug that causes severe physical and mental addiction and damages health." },
  { q: "A learner says: “Medicine is legal, so it is always safe.” Explain why this is incorrect.", memo: "Legal does not mean safe for everyone in every amount. Medicine is only safe when used as directed by a doctor or adult; the wrong medicine or too much can poison you. Alcohol and tobacco are legal for adults but still harmful." },
  { q: "Older learners offer you a cigarette at the bus stop. Describe THREE steps you could take.", memo: "Any three sensible steps, e.g. say a firm “no”; walk away; tell a trusted adult; stay with friends who make healthy choices; explain that it is harmful." },
];

const ENG_STORY = [
  { title: "The lantern beneath the bridge", text: [
    "1. On Friday afternoon, Naledi and her cousin Ben crossed the footbridge beside the school. Beneath it lay a tiny brass lantern. When Naledi lifted it, a silver fish appeared inside the glass. It swam through the air and whispered, “One wish, but choose for everyone.”",
    "2. Ben pointed to the cracked football in his bag. “Ask for a new ball!” he said. Naledi imagined a shiny bicycle instead. Then she noticed the dry channel below the bridge. Their class had planted seedlings along its bank, but the little plants were drooping. The caretaker had warned that the water tank was almost empty.",
    "3. Naledi hesitated. She had walked to school all year and longed for a bicycle. Yet she remembered how carefully her classmates had planted each seedling. “Let the rain fill our tank,” she whispered. The fish flickered like a falling star. A cool wind brushed the bridge, and rain began to patter on the roof of the shed.",
    "4. By Monday the tank was full. Bright green leaves stood upright along the bank. Ben helped Naledi carry a watering can. “We still have an old ball,” he said, “but now we have a garden.” Naledi smiled. At the bottom of her bag, the lantern had become an ordinary stone. She kept it to remind herself of the choice she had made.",
  ] },
];

const ENG_INFO = [
  { title: "A fish pond needs balance", text: [
    "A school pond is a small habitat: a place where living things meet their needs. Fish need clean water, enough space and suitable food. Water plants provide shelter. However, too much leftover fish food can make the water dirty. Feeding fish more does not always help them.",
    "The eco-club checked the pond at the same time on three days. Members counted pieces of uneaten food still visible ten minutes after feeding. They recorded their observations in the table. The counts describe this pond during these checks; they do not prove what happens in every pond.",
    "The club recommends measuring food instead of guessing. Members should observe the fish and ask the teacher for advice before changing the amount. They should never add wild fish or unknown chemicals to the pond.",
  ], table: { head: ["Day", "Scoops of food", "Uneaten pieces"], rows: [["Monday", "3", "18"], ["Wednesday", "2", "9"], ["Friday", "1", "2"]] } },
  { title: "Make a desk organiser", text: [
    "Materials: one clean, dry cereal box; pencil; ruler; blunt scissors; tape; paper.",
    "1. First, ask an adult to help you mark a straight line halfway up the box.",
    "2. Next, cut along the marked line with adult supervision.",
    "3. Then, cover the cut edge with tape.",
    "4. After that, wrap the outside in paper and label it.",
    "5. Finally, place the organiser on a flat desk and put pencils inside.",
  ] },
];

const ENG_1 = [
  { q: "What condition did the silver fish attach to the wish? Explain what it means in your own words.", memo: "“Choose for everyone.” The wish had to help everybody, not just the person making it." },
  { q: "Why did Ben want Naledi to wish for a new ball?", memo: "His football was cracked." },
  { q: "What was wrong with the seedlings, and what caused the problem?", memo: "They were drooping because the channel was dry – the water tank was almost empty." },
  { q: "Which word in paragraph 3 shows that Naledi was not sure what to do?", memo: "“hesitated”" },
  { q: "What does the phrase “longed for” tell you about how Naledi felt about the bicycle?", memo: "She wanted it very much (for a long time)." },
  { q: "Name the figure of speech in “The fish flickered like a falling star” and explain the comparison.", memo: "A simile. It compares the fish’s flickering light/movement to a falling star, suggesting it was bright, quick and magical." },
  { q: "Where and when does the story begin?", memo: "On a Friday afternoon, on the footbridge beside the school." },
  { q: "Explain the cause-and-effect chain that followed Naledi’s wish.", memo: "Naledi wished for rain → rain filled the water tank → the seedlings got water and stood upright with bright green leaves." },
  { q: "How did Ben’s attitude change from the start of the story to the end? Use evidence.", memo: "At first he wanted a new football; at the end he accepted the old ball and valued the garden – “now we have a garden”." },
  { q: "Why did Naledi keep the stone?", memo: "To remind herself of the choice she had made." },
  { q: "What does the phrase “ordinary stone” suggest about the lantern’s magic?", memo: "That the magic was used up / gone after the wish was granted." },
  { q: "Was Naledi’s choice wise? Give your opinion and ONE detail from the story to support it.", memo: "Accept any supported opinion that uses a story detail, e.g. yes – the seedlings the class planted needed water and the whole class benefited; or no – she gave up the bicycle she had longed for. An opinion with no story detail is not correct." },
  { q: "State a lesson the story teaches and explain how the ending supports it.", memo: "e.g. choices that help everyone can be more rewarding than personal wishes: at the end the garden thrives and Naledi smiles even though she has no bicycle. The ending detail must be linked to the lesson." },
  { q: "Write down all the proper nouns in this sentence: “Naledi and Ben crossed the footbridge on Friday.”", memo: "Naledi, Ben and Friday (all three needed)." },
  { q: "Rewrite in the past tense: “Naledi carries the watering can and waters the seedlings.”", memo: "Naledi carried the watering can and watered the seedlings. (Both verbs changed.)" },
  { q: "Rewrite the sentence using pronouns instead of the three nouns: “Naledi gave the lantern to Ben.”", memo: "She gave it to him." },
  { q: "Join these sentences using “although”: “Naledi wanted a bicycle. She chose water for the garden.”", memo: "Although Naledi wanted a bicycle, she chose water for the garden. (Or: Naledi chose water for the garden although she wanted a bicycle.)" },
  { q: "Copy the adjective and the adverb in: “The tiny fish swam silently through the air.”", memo: "Adjective: tiny. Adverb: silently." },
  { q: "Add a prefix to “happy” to make its opposite, and a suffix to “care” to mean “without care”.", memo: "unhappy; careless." },
  { q: "Correct ALL the errors in this sentence: “naledi and ben was happy because the tank were full.”", memo: "Naledi and Ben were happy because the tank was full. (Capital letters for Naledi and Ben; “were” after “Naledi and Ben”; “was” after “the tank”.) Mark correct only if all errors are fixed." },
];

const ENG_2 = [
  { q: "In your own words, what is a habitat?", memo: "A place where living things meet their needs (food, water, shelter, space)." },
  { q: "Name TWO things fish need in a pond, according to the text.", memo: "Any two: clean water, enough space, suitable food." },
  { q: "Why does the writer say that feeding fish more “does not always help them”?", memo: "Too much leftover food can make the water dirty." },
  { q: "How many scoops of food were given on Wednesday, and how many uneaten pieces were counted?", memo: "2 scoops; 9 uneaten pieces." },
  { q: "Compare Monday and Friday: how did the amount of food and the number of leftover pieces change?", memo: "Food went down from 3 scoops to 1 scoop, and the leftovers went down from 18 pieces to 2 pieces." },
  { q: "What pattern does the table show?", memo: "As the scoops of food decreased, the number of uneaten pieces also decreased." },
  { q: "A scholar says: “Three scoops always harm every pond.” Is this conclusion supported by the text? Explain.", memo: "No. The counts come from one pond over three checks and “do not prove what happens in every pond”. “Always” and “every” are too strong, and leftovers alone are not proof of harm." },
  { q: "Why does the writer include the sentence “they do not prove what happens in every pond”?", memo: "To warn readers not to over-generalise – the data only show this pond during these checks." },
  { q: "Suggest ONE extra observation the eco-club could make, and explain how it would help.", memo: "e.g. record how clear the water is, or how the fish behave. It would show whether the water is getting dirty or whether the fish are healthy." },
  { q: "Write a one-sentence summary of the main idea of the information text.", memo: "A pond needs balance: feeding the right (measured) amount keeps the fish healthy, while too much food makes the water dirty." },
  { q: "Why does the club recommend measuring the food instead of guessing?", memo: "Measuring gives the correct, consistent amount, which avoids waste and dirty water and lets the club compare results fairly." },
  { q: "Name TWO things the club says must never be added to the pond.", memo: "Wild fish and unknown chemicals." },
  { q: "Why should members ask the teacher for advice before changing the amount of food?", memo: "The teacher can give expert advice, which helps avoid harming the fish or the water." },
  { q: "In the instructions: what must be covered with tape, and why must cutting happen first?", memo: "The cut edge. The edge only exists after the box has been cut." },
  { q: "Explain TWO features that help a reader follow the instructions.", memo: "Any two explained: numbered steps show the order; sequencing words (first, next, then, after that, finally) show what comes when; the materials list shows what to get ready; command verbs tell you exactly what to do." },
  { q: "Copy TWO command verbs from the instructions.", memo: "Any two: ask, mark, cut, cover, wrap, label, place, put." },
  { q: "Rewrite “Cut it.” as a clearer instruction with TWO useful details.", memo: "Any clear instruction with two details, e.g. “Carefully cut along the marked line with blunt scissors while an adult helps.”" },
  { q: "Would step 5 work well if the desk were uneven? Explain and suggest an improvement.", memo: "No – the organiser might tip or spill. Improve it by placing it on a flat, stable surface (or using a non-slip mat)." },
  { q: "Correct ALL the errors in this sentence: “the eco club dont feed the fish to much food.”", memo: "The eco-club doesn’t feed the fish too much food. (Capital T; “doesn’t” with an apostrophe; “too”. Accept “eco club”.) Mark correct only if all three are fixed." },
  { q: "Write a complex sentence about the pond that begins with “If”.", memo: "Example: “If the club feeds the fish too much, the water will become dirty.” (Any meaningful sentence that begins with If and has a main clause is correct.)" },
];

// ─────────────────────────────────────────────────────────────
// REWARD SETTINGS — change these numbers to change the game
// ─────────────────────────────────────────────────────────────
export const REWARD = {
  goalTokens: 1000,          // tokens needed to unlock the reward
  goalLabel: "R1,000 V-Bucks",
  tokenValueRand: 1,         // 1 token = R1 of the reward
  passPct: 90,               // pass mark for every Term 4 quest
  tokensPerQuest: 100,       // tokens for the FIRST pass of each quest (10 quests = 1 000)
  requireParent: false,      // false = tokens are released automatically the moment he passes; true = a parent must confirm each pass first
  maxAppeals: 4,             // how many answers he can flag per attempt as "I think I was right"
};

const T4 = (o) => ({ term: 4, tokens: REWARD.tokensPerQuest, passPct: REWARD.passPct, ...o });

export const T4_TESTS = [
  T4({ id: "t4-maths-1", subject: "Mathematics", icon: "➗", color: "violet", title: "Measurement: Lines & Compound Units",
       blurb: "Convert, add, subtract, multiply and divide compound units. Spot the mistakes.", passage: null, questions: MATHS_1 }),
  T4({ id: "t4-maths-2", subject: "Mathematics", icon: "➗", color: "violet", title: "Volume & Capacity",
       blurb: "Cuboid volume, cm³ ↔ mL ↔ L, and real-world volume problems.", passage: null, questions: MATHS_2 }),
  T4({ id: "t4-nst-1", subject: "Natural Sciences & Technology", icon: "⚡", color: "orange", title: "Earth’s Surface, Weathering & Erosion",
       blurb: "Landforms, weathering, erosion, deposition and the soil-slope investigation.", passage: null, questions: NST_1 }),
  T4({ id: "t4-nst-2", subject: "Natural Sciences & Technology", icon: "⚡", color: "orange", title: "Sedimentary Rocks & Clues About the Past",
       blurb: "How sedimentary rock forms, fossils, layers and evidence-based conclusions.", passage: null, questions: NST_2 }),
  T4({ id: "t4-ss-1", subject: "Social Sciences", icon: "🗺️", color: "amber", title: "Heritage in South Africa",
       blurb: "Four heritage types, the nine provinces, and analysing heritage sources.", passage: null, questions: SS_1 }),
  T4({ id: "t4-ss-2", subject: "Social Sciences", icon: "🗺️", color: "amber", title: "Minerals & Mining",
       blurb: "Resources and uses, mining methods, environmental impact and rehabilitation.", passage: null, questions: SS_2 }),
  T4({ id: "t4-psw-1", subject: "Personal & Social Well-being", icon: "🤝", color: "green", title: "People, Gender Roles & Festivals",
       blurb: "Gender stereotypes, women’s contributions, and South African religious festivals.", passage: null, questions: PSW_1 }),
  T4({ id: "t4-psw-2", subject: "Personal & Social Well-being", icon: "🤝", color: "green", title: "Health, Safety, Water & Nutrition",
       blurb: "Chemical and fire safety, water-wise living, food groups and substance abuse.", passage: null, questions: PSW_2 }),
  T4({ id: "t4-eng-1", subject: "English", icon: "📚", color: "blue", title: "Story Comprehension & Language",
       blurb: "Read “The lantern beneath the bridge”, then answer reading and language questions.", passage: ENG_STORY, questions: ENG_1 }),
  T4({ id: "t4-eng-2", subject: "English", icon: "📚", color: "blue", title: "Information Text, Instructions & Language",
       blurb: "Read the pond report and the desk-organiser instructions, then answer.", passage: ENG_INFO, questions: ENG_2 }),
];

// Term 3 practice tests (no tokens) — kept so earlier progress still shows
const T3_TESTS = TEST_SUBJECTS.map((s) => ({
  id: s.id, term: 3, subject: s.name, icon: s.icon, color: s.color,
  title: `${s.name} Test`, blurb: "30 written-response questions, marked against a memo.",
  tokens: 0, passPct: null, passage: null, questions: TEST_BANK[s.id],
}));

export const ALL_TESTS = [...T4_TESTS, ...T3_TESTS];

// pass mark helpers
export const passNeeded = (t) => (t.passPct == null ? null : Math.ceil((t.questions.length * t.passPct) / 100));

// ─────────────────────────────────────────────────────────────
// GRADE 5 END-OF-TERM-4 TIMETABLE (SPARK Rynfield, Catalyst phase, 2026)
// Revision day = the day BEFORE each exam.
// ─────────────────────────────────────────────────────────────
export const G5_EXAMS = [
  { date: '2026-11-03', subject: 'English: Writing', rev: 'eng-writing' },
  { date: '2026-11-05', subject: 'English: Reading Comprehension & Grammar', rev: 'eng-rc' },
  { date: '2026-11-06', subject: 'Coding & Robotics', rev: 'coding' },
  { date: '2026-11-09', subject: 'PSW / LO', rev: 'psw' },
  { date: '2026-11-10', subject: 'History', rev: 'history' },
  { date: '2026-11-11', subject: 'Geography', rev: 'geography' },
  { date: '2026-11-11', subject: 'NST', rev: 'nst' },
  { date: '2026-11-12', subject: 'Mathematics', rev: 'maths' },
  { date: '2026-11-13', subject: 'isiZulu FAL (EOT Cycle Test 1 & 2)', rev: 'isizulu' },
  { date: '2026-11-13', subject: 'Coding & Robotics (listed a second time)', rev: 'coding' },
];

// what he does on the revision day for each exam
export const REVISION = {
  'eng-writing': [{ kind: 'writing' }],
  'eng-rc': [{ kind: 'quest', id: 't4-eng-1' }, { kind: 'quest', id: 't4-eng-2' }],
  coding: [{ kind: 'practice', id: 'coding' }],
  psw: [{ kind: 'quest', id: 't4-psw-1' }, { kind: 'quest', id: 't4-psw-2' }],
  history: [{ kind: 'quest', id: 't4-ss-1' }],
  geography: [{ kind: 'quest', id: 't4-ss-2' }],
  nst: [{ kind: 'quest', id: 't4-nst-1' }, { kind: 'quest', id: 't4-nst-2' }],
  maths: [{ kind: 'quest', id: 't4-maths-1' }, { kind: 'quest', id: 't4-maths-2' }],
  isizulu: [{ kind: 'practice', id: 'isizulu' }],
};
export const REVISION_NOTES = {
  coding: 'No Term 4 Coding pack yet, so this is the Term 3 practice quest.',
  isizulu: 'No Term 4 isiZulu pack yet, so this is the Term 3 practice quest.',
  history: 'Uses the Heritage section of the Social Sciences pack.',
  geography: 'Uses the Minerals & Mining section of the Social Sciences pack.',
};

// ─────────────────────────────────────────────────────────────
// WRITING WORKSHOP (English: Writing) — tasks and success checks from the Term 4 English pack
// ─────────────────────────────────────────────────────────────
export const WRITING_TASKS = [
  { id: 'w-diary', title: 'Diary entry (20 marks in the pack)', words: [100, 140],
    prompt: 'Write a diary entry as Naledi on the evening after the wish. Include the event, your difficult choice, feelings and a reflection. Use the first person and mainly past tense.',
    checks: ['Date and greeting at the top (e.g. Dear Diary)', 'First person (I, my, me) and mainly the past tense', 'Tells what happened: the lantern, the fish and the wish', 'Explains the difficult choice (bicycle or the seedlings and the water tank)', 'Shows feelings, before and after the choice', 'Ends with a thoughtful reflection', 'Spelling, punctuation and full sentences checked'] },
  { id: 'w-instructions', title: 'Instructions for a classroom game (10 marks in the pack)', words: [60, 90],
    prompt: 'Write clear instructions for a simple classroom game using paper and pencils. Include a title, materials and five numbered steps. Use command verbs and sequencing words.',
    checks: ['A title', 'A materials list', 'Exactly five numbered steps in a sensible order', 'Command verbs (Draw, Fold, Write…) at the start of steps', 'Sequencing words (First, Next, Then, Finally)', 'The rules make the game playable', 'Spelling and punctuation checked'] },
  { id: 'w-letter', title: 'Friendly letter (extra practice)', words: [80, 100],
    prompt: 'Write to Ben explaining your choice and inviting him to help with the garden. Include your address, the date, a greeting, paragraphs and a suitable ending.',
    checks: ['Your address and the date at the top', 'A greeting (Dear Ben,)', 'Says what you chose and why', 'Invites Ben to help with the garden', 'Neat paragraphs', 'A friendly ending and your name', 'Spelling and punctuation checked'] },
  { id: 'w-report', title: 'Information report (extra practice)', words: [100, 140],
    prompt: 'Use the pond text to plan and write a report titled “Caring for a School Pond”. Add headings for habitat, feeding and safety. Use facts and your own words.',
    checks: ['A title: Caring for a School Pond', 'A heading and facts about the habitat', 'A heading and facts about feeding', 'A heading and facts about safety', 'Facts in your own words (not copied)', 'Spelling and punctuation checked'] },
  { id: 'w-describe', title: 'Descriptive paragraph (extra practice)', words: [80, 100],
    prompt: 'Describe the garden after the rain. Use sight, sound and touch details and one simile.',
    checks: ['Sight details (what you can see)', 'Sound details (what you can hear)', 'Touch details (what you can feel)', 'One simile (like or as)', 'Interesting, precise words', 'Spelling and punctuation checked'] },
];
