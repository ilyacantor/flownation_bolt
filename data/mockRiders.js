const firstNames = {
  M: ["Alex", "James", "Michael", "David", "Chris", "Daniel", "Matt", "Ryan", "Kevin", "Brian", "Tom", "Nick", "Steve", "John", "Mark", "Paul", "Andrew", "Jason", "Eric", "Kyle", "Tyler", "Brandon", "Josh", "Jake", "Sam", "Ben", "Luke", "Nathan", "Adam", "Justin", "Sean", "Derek", "Connor", "Ethan", "Dylan"],
  F: ["Sarah", "Emily", "Jessica", "Ashley", "Emma", "Madison", "Olivia", "Hannah", "Sophia", "Isabella", "Mia", "Charlotte", "Abigail", "Ava", "Lily", "Grace", "Chloe", "Zoe", "Natalie", "Lauren", "Rachel", "Samantha", "Nicole", "Kate", "Anna", "Julia", "Melissa", "Amy", "Jennifer", "Lisa"]
};

const lastNames = ["Chen", "Kim", "Johnson", "Smith", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Anderson", "Taylor", "Thomas", "Moore", "Jackson", "Martin", "Lee", "Thompson", "White", "Harris", "Sanchez", "Clark", "Lewis", "Walker", "Hall", "Allen", "Young", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart"];

const cities = ["San Francisco", "Oakland", "San Jose", "Palo Alto", "Marin", "Santa Cruz", "Berkeley", "Walnut Creek", "Mountain View", "Sunnyvale", "Redwood City", "Saratoga", "Los Gatos", "Fremont", "Hayward", "San Mateo"];

const rideTypes = ["Road", "Gravel", "MTB", "Tri"];
const socialPrefs = ["Social", "Focused", "Solo"];
const expLevels = ["Novice", "Intermediate", "Advanced"];

const avatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=6",
  "https://i.pravatar.cc/150?img=7",
  "https://i.pravatar.cc/150?img=8",
  "https://i.pravatar.cc/150?img=9",
  "https://i.pravatar.cc/150?img=10",
  "https://i.pravatar.cc/150?img=11",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=13",
  "https://i.pravatar.cc/150?img=14",
  "https://i.pravatar.cc/150?img=15",
];

function generateRider(index) {
  const gender = index < 30 ? "F" : "M";
  const firstName = firstNames[gender][Math.floor(Math.random() * firstNames[gender].length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  const minDistance = 20 + Math.floor(Math.random() * 30);
  const maxDistance = minDistance + 20 + Math.floor(Math.random() * 40);

  const age = 22 + Math.floor(Math.random() * 38);

  const daysAgo = Math.floor(Math.random() * 30);
  const lastActive = new Date();
  lastActive.setDate(lastActive.getDate() - daysAgo);

  return {
    id: `rider-${index + 1}`,
    name: `${firstName} ${lastName}`,
    gender,
    age,
    city: cities[Math.floor(Math.random() * cities.length)],
    rideType: rideTypes[Math.floor(Math.random() * rideTypes.length)],
    distancePref: [minDistance, maxDistance],
    paceZone: 1 + Math.floor(Math.random() * 5),
    socialPref: socialPrefs[Math.floor(Math.random() * socialPrefs.length)],
    expLevel: expLevels[Math.floor(Math.random() * expLevels.length)],
    activeSearch: Math.random() < 0.4,
    lastActive: lastActive.toISOString(),
    avatar: avatars[Math.floor(Math.random() * avatars.length)]
  };
}

export const mockRiders = Array.from({ length: 100 }, (_, i) => generateRider(i));

export const demoUser = {
  id: "demo-user",
  name: "Alex Rivera",
  gender: "M",
  age: 32,
  city: "San Francisco",
  rideType: "Road",
  distancePref: [30, 60],
  paceZone: 3,
  socialPref: "Social",
  expLevel: "Intermediate",
  activeSearch: true,
  lastActive: new Date().toISOString(),
  avatar: "https://i.pravatar.cc/150?img=33"
};
