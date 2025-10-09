import fs from "fs";
import path from "path";

const OUTPUT = path.resolve("src/data/mockRiders.json");

const BAY_AREA_CITIES = [
  "Saratoga","Los Gatos","San Jose","Palo Alto","Santa Cruz","Berkeley",
  "Oakland","Walnut Creek","Livermore","Half Moon Bay","Los Altos",
  "Morgan Hill","Gilroy","Menlo Park","Redwood City","Boulder Creek"
];

const BAY_AREA_TEAMS = [
  "Almaden Cycle Touring Club","Alto Velo Racing Club","Coastside on Bikes",
  "Cycle California Magazine","Diablo Cyclists","Different Spokes",
  "Freemont Freewheelers","Grizzly Peak Cyclists",
  "Los Gatos Bicycle Racing Club","Peninsula Velo Cycling Club",
  "San Jose Bicycle Club","Santa Clara University Cycling Club",
  "Santa Cruz County Cycling Club","Silicon Valley Mountain Bikers",
  "Skyline Cycling Club","Stanford University Cycling Club",
  "Sunnyvale Cupertino Cycling Club","Velo Girls","Western Wheelers",
  "Friends of Stevens Creek Trail","Bay Area Mountain Bike Rides",
  "San Francisco Bay Trail","Hellyer County Park Velodrome","Good Karma Bikes",
  "San Jose Bike Party","Turning Wheels for Kids"
];

let GLOBAL_TEAMS = [];
const GLOBAL_FILE = path.resolve("scripts/globalTeams.txt");
if (fs.existsSync(GLOBAL_FILE)) {
  GLOBAL_TEAMS = fs.readFileSync(GLOBAL_FILE,"utf8")
    .split(/\r?\n/).filter(Boolean);
} else {
  console.warn("⚠️ Missing scripts/globalTeams.txt – using fallback team set.");
  GLOBAL_TEAMS = ["Aegis Cycling","ARA Skip Capital","Army Cycling Union","Bike Aid","Analog Racing"];
}

const rand = (arr) => arr[Math.floor(Math.random()*arr.length)];
const range = (min,max)=>Math.floor(Math.random()*(max-min+1))+min;

const FEMALE_NAMES = new Set([
  "Sofia","Marianne","Ashleigh","Chloe","Pauline","Lizzie","Kasia","Demi",
  "Beyoncé","Taylor","Adele","Rihanna","Lady","Shania","Serena","Naomi",
  "Jessica","Emily","Sarah","Hannah","Katarzyna","Ricarda","Neve","Cecilie",
  "Soraya","Agnieszka","Demi","Elise","Amber","Juliette","Marie","Evita",
  "Ally","Pauliena","Millie","Yara","Flora","Puck","Christina","Marthe",
  "Lotte","Mischa","Elena","Femke","Anna","Blanka","Lorena","Pauline",
  "Marion","Lieke","Eva","Imogen","Elisa","Brodie","Eleonora","Lara",
  "Maeva","Karlijn","Dominika","Marlen","Aude","Jelena","Liane","Ana",
  "Sara","Mareille","Lucinda","Niamh","Riejanne","Emma","Lauretta","Shirin",
  "Kim","Shari","Justine","Ilse","Julie","Gladys","Charlotte","Francesca",
  "Rachele","Pfeiffer","Megan","Franziska","Nienke","Valentina","Emilia",
  "Clémence","Titia","Maurène","Marjolein","Letizia","Mavi","Jeanne","Ruby",
  "Silke","Monica","Ella","Katrine","Susanne","Teuntje","Maria","Rebecca",
  "Mie","Linda","Victoire","Eugenia","Amalie","Clara","Hannah","Nadia",
  "Franziska","Kristýna","Daniek","Celia","Dilyxine","Barbara","Thalita",
  "Ruth","Romy","Mona","Marit","Lily","Alicia","Alison","Lucie","Emilie",
  "Elyne","Ségolène","Emily","Ane","Alice","Idoia","Usoa","Catalina","Alba",
  "Laura","Karolina","Marine","Kiara","Fiona","Marie-Morgane","Constance",
  "Eline","Valerie","Anneke","Maud","Lonneke","Margot","Morgane","Tamara",
  "Mia","Kaja","Petra","Sylvie","Kristen","Magdeleine","Cedrine","Henrietta",
  "Haley","Lauren","Rose","Paige","Heather","Flavia","Evelyn","Jill","Carson",
  "Erin","Isabel","Ellen"
]);

function inferGender(name){
  const first = name.split(" ")[0].replace(/[^A-Za-zÀ-ÿ]/g,"");
  return FEMALE_NAMES.has(first) ? "F" : "M";
}

function buildPhotoURL(name, gender, seed) {
  return gender === "F"
    ? `https://randomuser.me/api/portraits/women/${seed % 90}.jpg`
    : `https://randomuser.me/api/portraits/men/${seed % 90}.jpg`;
}

const TDF_FILE = path.resolve("scripts/tdf_riders.txt");
let proRecords = [];
if (fs.existsSync(TDF_FILE)) {
  const text = fs.readFileSync(TDF_FILE, "utf8");
  let currentTeam = null;
  for (const line of text.split(/\r?\n/)) {
    const clean = line.trim();
    if (!clean) continue;
    if (/TEAM|BORA|INEOS|EF\s|GROUPAMA|ASTANA|TREK|COFIDIS|TOTAL|MOVISTAR|BAHRAIN/i.test(clean)) {
      currentTeam = clean.replace(/^[•#\d\s]+/, "").trim();
      continue;
    }
    const m = clean.match(/\d?\s*([A-ZÀ-ÿ'\-\. ]+)/i);
    if (m && currentTeam) {
      const name = m[1].trim().replace(/\s+/g, " ");
      proRecords.push({
        id:`pro-${proRecords.length+1}`,
        name,
        team: currentTeam,
        city: rand(BAY_AREA_CITIES),
        rideType:"Road",
        distancePref:[range(40,70),range(90,140)],
        paceZone:3,
        socialPref:"Focused",
        expLevel:"Advanced",
        activeSearch:Math.random()<.4,
        lastActive:new Date(Date.now()-1000*60*60*Math.random()*24*14).toISOString(),
        gender:"M",
        avatar:buildPhotoURL(name,"M",proRecords.length)
      });
    }
  }
  console.log(`🚴 Added ${proRecords.length} male pro riders`);
}

const FEMALE_FILE = path.resolve("scripts/tdf_women.txt");
let femaleProRecords = [];
if (fs.existsSync(FEMALE_FILE)) {
  const text = fs.readFileSync(FEMALE_FILE, "utf8");
  let currentTeam = null;
  for (const line of text.split(/\r?\n/)) {
    const clean = line.trim();
    if (!clean) continue;
    if (/TEAM|CANYON|MOVISTAR|TREK|SD WORX|FDJ|COFIDIS|ROLAND|LIV|UNO-X|UAE|HUMAN|CERATIZIT|FENIX|PICNIC|ARKEA|INSURANCE|LABORAL|WINSPACE|VOLKERWESSELS/i.test(clean)) {
      currentTeam = clean.replace(/^[•#\d\s]+/, "").trim();
      continue;
    }
    const m = clean.match(/\d?\s*([A-ZÀ-ÿ'\-\. ]+)/i);
    if (m && currentTeam) {
      const name = m[1].trim().replace(/\s+/g, " ");
      femaleProRecords.push({
        id:`fpro-${femaleProRecords.length+1}`,
        name,
        team: currentTeam,
        city: rand(BAY_AREA_CITIES),
        rideType:"Road",
        distancePref:[range(40,70),range(90,140)],
        paceZone:3,
        socialPref:"Focused",
        expLevel:"Advanced",
        activeSearch:Math.random()<.4,
        lastActive:new Date(Date.now()-1000*60*60*Math.random()*24*14).toISOString(),
        gender:"F",
        avatar:buildPhotoURL(name,"F",femaleProRecords.length)
      });
    }
  }
  console.log(`👩 Added ${femaleProRecords.length} female pro riders`);
}

const LIFETIME_PROS = [
  "Keegan Swenson","Sofia Gomez Villafañe","Alexey Vermeulen","Riley Amos",
  "Haley Smith","Russell Finsterwald","Sarah Sturm","Pete Stetina",
  "Lauren De Crescenzo","Rose Grant","Alex Howes","Paige Onweller",
  "Adam Roberge","Heather Jackson","Payton McElveen","Taylor Lideen",
  "Tobin Ortenblad","Flavia Oliveira","Hannah Otto","Evelyn Dong",
  "Matt Beers","Cole Paton","Hannah Shell","Andrew L'Esperance",
  "Jill Patterson","Cody Kelley","Heather Posner","Carson Beckett",
  "Erin Huck","Isabel King","Brandon McNulty","Ellen Campbell","Zach Calton"
].map((n,i)=>({
  id:`lgp-${i+1}`,
  name:n,
  team:"Lifetime Grand Prix",
  city:rand(BAY_AREA_CITIES),
  rideType:"Gravel / MTB",
  distancePref:[range(30,70),range(80,130)],
  paceZone:3,
  socialPref:"Focused",
  expLevel:"Advanced",
  activeSearch:Math.random()<.4,
  lastActive:new Date(Date.now()-1000*60*60*Math.random()*24*14).toISOString(),
  gender:inferGender(n),
  avatar:buildPhotoURL(n,inferGender(n),i)
}));

const ILYA = {
  id:"ilya-cantor",
  name:"Ilya Cantor",
  age:57,
  team:"Team USA / FlowNation",
  city:"Saratoga",
  rideType:"Road / Gravel / MTB / Triathlon",
  distancePref:[40,100],
  paceZone:3,
  socialPref:"Focused",
  expLevel:"Advanced",
  activeSearch:true,
  lastActive:new Date().toISOString(),
  gender:"M",
  avatar:"https://randomuser.me/api/portraits/men/1.jpg"
};

const CELEBS = ["Beyoncé Knowles","Taylor Swift","Elon Musk","Peter Gibbons","Ron Swanson","Adele Adkins",
"Tom Cruise","Serena Williams","Naomi Osaka","Dwayne Johnson","Keanu Reeves","Jennifer Aniston","Oprah Winfrey",
"Barack Obama","Ted Cruz","Kamala Harris","Joe Biden","Hannah Waddingham","Jason Sudeikis","Lady Gaga"];

const SYNTH_FIRST = ["Marta","Liam","Tomas","Julia","Carlos","Elena","Evan","Noah","Luca","Isabella","Nina","Marco","Jonas","Greta","Sasha","Nikolai","Emilia","Rafael","Owen","Amelia"];
const SYNTH_LAST = ["DelValle","Kessler","Novak","Lopez","Fischer","Ivanov","Bianchi","Petrov","Cruz","Miller","Nguyen","Hansen","Morales","Rossi","Parker","Silva"];

function makeSynthetic(n,teamsource){
  const arr=[];
  const used = new Set();
  for(let i=0;i<n;i++){
    let name;
    let attempts = 0;
    do {
      name=`${rand(SYNTH_FIRST)} ${rand(SYNTH_LAST)}`;
      attempts++;
    } while(used.has(name) && attempts < 100);

    if(attempts >= 100) continue;
    used.add(name);

    const gender = inferGender(name);
    arr.push({
      id:`syn-${i}`,
      name,
      team: rand(teamsource),
      city: rand(BAY_AREA_CITIES),
      rideType: rand(["Road","Gravel","MTB","Tri"]),
      distancePref:[range(20,60),range(70,120)],
      paceZone: range(2,4),
      socialPref: rand(["Social","Focused","Solo"]),
      expLevel: rand(["Novice","Intermediate","Advanced"]),
      activeSearch:Math.random()<.4,
      lastActive:new Date(Date.now()-1000*60*60*Math.random()*24*14).toISOString(),
      gender,
      avatar:buildPhotoURL(name,gender,i)
    });
  }
  return arr;
}

const locals = makeSynthetic(70,BAY_AREA_TEAMS);
const celebFill = CELEBS.map((n,i)=>({
  id:`cel-${i+1}`,
  name:n,
  team: rand(GLOBAL_TEAMS),
  city: rand(BAY_AREA_CITIES),
  rideType: rand(["Road","Gravel"]),
  distancePref:[range(20,60),range(70,120)],
  paceZone: range(2,3),
  socialPref:"Social",
  expLevel:"Intermediate",
  activeSearch:Math.random()<.3,
  lastActive:new Date(Date.now()-1000*60*60*Math.random()*24*14).toISOString(),
  gender: inferGender(n),
  avatar:buildPhotoURL(n,inferGender(n),i)
}));
const synth = makeSynthetic(80,GLOBAL_TEAMS);

const all = [ILYA, ...proRecords, ...femaleProRecords, ...LIFETIME_PROS, ...locals, ...celebFill, ...synth];

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, JSON.stringify(all, null, 2));
console.log(`✅ Created ${all.length} rider records at ${OUTPUT}`);
console.log(`   - ${proRecords.length} male TDF pros`);
console.log(`   - ${femaleProRecords.length} female TDF pros`);
console.log(`   - ${LIFETIME_PROS.length} Lifetime GP pros`);
console.log(`   - ${locals.length} Bay Area locals`);
console.log(`   - ${celebFill.length} celebrities`);
console.log(`   - ${synth.length} synthetic riders`);
