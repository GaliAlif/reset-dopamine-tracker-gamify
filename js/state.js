const KEY="reset_app_data";
const fresh=()=>({version:1,profile:{username:"PLAYER",level:1,totalXP:0,credits:0,rank:"INITIATE",avatar:"P"},activities:[],quests:[],questHistory:[],xpTransactions:[],creditTransactions:[],urgeLogs:[],focusSessions:[],learningProgress:{},skills:[],achievements:[],inventory:[],equipped:{},settings:{theme:"dark",dailyGoal:3,notifications:false},streak:{current:0,longest:0,lastDate:null}});
let data;
export function load(){try{const raw=localStorage.getItem(KEY);data=raw?{...fresh(),...JSON.parse(raw)}:fresh();}catch{data=fresh();}save();return data}
export function get(){return data}
export function save(){localStorage.setItem(KEY,JSON.stringify(data))}
export function update(fn){fn(data);save();return data}
export function uid(){return crypto.randomUUID?crypto.randomUUID():Date.now()+"-"+Math.random().toString(16).slice(2)}
export function today(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`}
export function dateLabel(v){return new Date(v+"T12:00:00").toLocaleDateString(undefined,{day:"numeric",month:"short",year:"numeric"})}
export function xpForNext(level){return 100+50*(level-1)}
export function levelInfo(total){let level=1,remaining=total;while(remaining>=xpForNext(level)){remaining-=xpForNext(level);level++}return {level,into:remaining,next:xpForNext(level),percent:Math.min(100,remaining/xpForNext(level)*100)}}
export function awardXP(amount,reason){if(!Number.isFinite(amount)||amount<=0)return;update(d=>{d.profile.totalXP+=amount;d.xpTransactions.push({id:uid(),amount,reason,date:today(),at:Date.now()});const info=levelInfo(d.profile.totalXP);if(info.level>d.profile.level){d.profile.level=info.level;d.profile.rank=rankFor(info.level);window.dispatchEvent(new CustomEvent("levelup",{detail:{level:info.level}}))}})}
export function awardCredits(amount,reason){if(!Number.isFinite(amount)||amount<=0)return;update(d=>{d.profile.credits+=amount;d.creditTransactions.push({id:uid(),amount,reason,date:today()})})}
export function spendCredits(amount,reason){if(data.profile.credits<amount)return false;update(d=>{d.profile.credits-=amount;d.creditTransactions.push({id:uid(),amount:-amount,reason,date:today()})});return true}
export function rankFor(l){return l>=30?"ATTENTION LEGEND":l>=20?"DISCIPLINE MASTER":l>=10?"FOCUS VETERAN":l>=5?"HABIT BUILDER":"INITIATE"}
export function addActivity(a){update(d=>d.activities.unshift({...a,id:uid(),createdAt:Date.now()}));if(a.type==="growth"&&a.duration>=20)awardXP(Math.min(40,Math.round(a.duration/20)*10),a.name)}
export function calcStreak(){const days=[...new Set(data.quests.filter(q=>q.completed).map(q=>q.completedDate))].sort();if(!days.length)return data.streak;let current=0;const cursor=new Date(today()+"T12:00:00");for(let i=0;i<365;i++){const s=cursor.toISOString().slice(0,10);if(days.includes(s)){current++;cursor.setDate(cursor.getDate()-1)}else if(i===0){cursor.setDate(cursor.getDate()-1);continue}else break}return {current,longest:Math.max(current,data.streak.longest),lastDate:days.at(-1)||null}}
export function refreshStreak(){update(d=>{const s=calcStreak();d.streak={...s,longest:Math.max(s.longest,d.streak.longest)}})}
export function exportData(){const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`reset-backup-${today()}.json`;a.click();URL.revokeObjectURL(a.href)}
export function importData(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>{try{const x=JSON.parse(r.result);if(x.version!==1||!x.profile||!Array.isArray(x.activities)||!Array.isArray(x.quests))throw Error("Invalid RESET backup schema");data={...fresh(),...x};save();resolve()}catch(e){reject(e)}};r.onerror=reject;r.readAsText(file)})}
