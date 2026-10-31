export const defaultQuests=[
{name:"No short-form video",description:"Choose intentional media use today.",difficulty:"Easy",xp:35,credits:5,kind:"daily"},
{name:"Read for 20 minutes",description:"Spend time with a book or long-form article.",difficulty:"Easy",xp:15,credits:3,kind:"daily"},
{name:"Focused study — 60 min",description:"Complete one distraction-aware study block.",difficulty:"Medium",xp:30,credits:5,kind:"daily"},
{name:"Move your body",description:"Walk, stretch, or complete a workout.",difficulty:"Medium",xp:25,credits:5,kind:"daily"},
{name:"Evening reflection",description:"Write a short reflection before sleep.",difficulty:"Easy",xp:10,credits:2,kind:"daily"},
{name:"Complete 5 focus sessions",description:"Build a week of intentional focus.",difficulty:"Hard",xp:150,credits:30,kind:"weekly"}
];
export const lessons=[
{title:"Dopamine: the basics",category:"Neuroscience",minutes:5,body:"Dopamine is a neurotransmitter involved in motivation, learning, movement, and reward prediction. It is not simply a pleasure chemical, and everyday activities do not map neatly to a single dopamine level.",takeaway:"Think of dopamine as part of a learning and motivation system—not a happiness meter.",quiz:"Dopamine is best described as…",options:["Only a pleasure chemical","A neurotransmitter involved in motivation and learning","A toxin to eliminate"],answer:1},
{title:"How habits form",category:"Behavioral Science",minutes:6,body:"Habits often develop through repeated context-cue-response patterns. Making a desired behavior easier to start and reducing friction around distractions can help reshape routines over time.",takeaway:"Change cues and environment, not just willpower.",quiz:"A useful habit strategy is…",options:["Rely only on willpower","Make the desired action easier to start","Punish every missed day"],answer:1},
{title:"Attention and interruptions",category:"Attention",minutes:5,body:"Switching tasks has a cognitive cost. Notifications and frequent checking can fragment attention. Batching communication and creating protected focus periods may reduce unnecessary switching.",takeaway:"Protect uninterrupted time for tasks that matter.",quiz:"What can reduce task switching?",options:["More notifications","Batching communication","Keeping every app open"],answer:1},
{title:"Sleep and cognition",category:"Wellbeing",minutes:6,body:"Sleep supports memory consolidation, emotional regulation, and attention. Consistent sleep timing and a wind-down routine can support cognitive performance.",takeaway:"Sleep is a foundation for attention and learning.",quiz:"Sleep supports…",options:["Memory and attention","Only muscle growth","No cognitive processes"],answer:0},
{title:"Reward prediction and learning",category:"Neuroscience",minutes:6,body:"The brain learns partly by comparing expected outcomes with actual outcomes. Prediction errors help update future expectations and behavior. This is one reason feedback and reflection can support learning.",takeaway:"Reflection helps turn experience into useful feedback.",quiz:"Prediction errors help the brain…",options:["Stop learning","Update expectations","Measure dopamine with a phone"],answer:1}
];
export const skills=[
{id:"focus1",name:"Focus Initiate",path:"Focus",desc:"Complete 3 focus sessions.",cost:0,need:0},
{id:"focus2",name:"Deep Work",path:"Focus",desc:"Unlock after Focus Initiate.",cost:120,need:1,pre:"focus1"},
{id:"focus3",name:"Attention Mastery",path:"Focus",desc:"Unlock after Deep Work.",cost:250,need:5,pre:"focus2"},
{id:"disc1",name:"Daily Consistency",path:"Discipline",desc:"Complete 5 quests.",cost:0,need:0},
{id:"disc2",name:"Habit Builder",path:"Discipline",desc:"Unlock after Daily Consistency.",cost:120,need:1,pre:"disc1"},
{id:"aware1",name:"Trigger Recognition",path:"Awareness",desc:"Record 3 urges.",cost:0,need:0},
{id:"aware2",name:"Impulse Awareness",path:"Awareness",desc:"Unlock after Trigger Recognition.",cost:120,need:1,pre:"aware1"},
{id:"know1",name:"Neuroscience Basics",path:"Knowledge",desc:"Complete 1 lesson.",cost:0,need:0},
{id:"know2",name:"Behavioral Science",path:"Knowledge",desc:"Unlock after Neuroscience Basics.",cost:120,need:1,pre:"know1"},
{id:"vital1",name:"Movement",path:"Vitality",desc:"Log 3 movement activities.",cost:0,need:0},
{id:"vital2",name:"Healthy Rhythm",path:"Vitality",desc:"Unlock after Movement.",cost:120,need:1,pre:"vital1"}
];
export const rewards=[{id:"frame-cyan",name:"Cyan Reactor Frame",type:"Avatar Frame",price:80,icon:"shield"},{id:"theme-purple",name:"Nebula HUD Theme",type:"HUD Theme",price:120,icon:"palette"},{id:"title-explorer",name:"Attention Explorer",type:"Player Title",price:150,icon:"award"},{id:"theme-green",name:"Emerald Interface",type:"HUD Theme",price:180,icon:"sparkles"},{id:"frame-gold",name:"Solar Crown Frame",type:"Avatar Frame",price:250,icon:"crown"}];
export const badges=[
{id:"first",name:"First Step",desc:"Complete your first quest.",rarity:"Common",icon:"flag",test:d=>d.quests.some(q=>q.completed)},
{id:"focus3",name:"Early Explorer",desc:"Complete 3 focus sessions.",rarity:"Common",icon:"timer",test:d=>d.focusSessions.length>=3},
{id:"streak3",name:"Consistency Builder",desc:"Reach a 3-day activity streak.",rarity:"Rare",icon:"flame",test:d=>d.streak.longest>=3},
{id:"focus10",name:"Focus Warrior",desc:"Complete 10 focus sessions.",rarity:"Epic",icon:"target",test:d=>d.focusSessions.length>=10},
{id:"learn5",name:"Knowledge Seeker",desc:"Complete 5 lessons.",rarity:"Rare",icon:"book-open",test:d=>Object.keys(d.learningProgress).length>=5},
{id:"urge10",name:"Awareness Master",desc:"Record 10 urges.",rarity:"Epic",icon:"brain",test:d=>d.urgeLogs.length>=10},
{id:"habit30",name:"Habit Architect",desc:"Log 30 growth activities.",rarity:"Legendary",icon:"sprout",test:d=>d.activities.filter(a=>a.type==="growth").length>=30}
];