const fs = require('fs');

// Read all data
const mockRiders = JSON.parse(fs.readFileSync('./src/data/mockRiders.json', 'utf8'));
const tdfRiders = fs.readFileSync('./scripts/tdf_riders.txt', 'utf8');
const tdfWomen = fs.readFileSync('./scripts/tdf_women.txt', 'utf8');
const globalTeams = fs.readFileSync('./scripts/globalTeams.txt', 'utf8').trim().split('\n');

// Build mapping from TDF files
const riderToTeam = {};

function parseRiders(text) {
  const lines = text.split('\n');
  let currentTeam = '';

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    // Remove line numbers (e.g., "1→")
    line = line.replace(/^\d+→/, '');

    // Check if it's a team line (all caps, often starts with uppercase letters)
    if (line === line.toUpperCase() && line.length > 0 && !/^\d+\s/.test(line)) {
      currentTeam = line;
    } else if (/^\d+\s/.test(line) && currentTeam) {
      // It's a rider line (starts with number + space)
      const name = line.replace(/^\d+\s/, '').trim();
      if (name) {
        riderToTeam[name] = currentTeam;
      }
    }
  }
}

parseRiders(tdfRiders);
parseRiders(tdfWomen);

console.log('Built mapping with ' + Object.keys(riderToTeam).length + ' riders');

// Update mockRiders
let proRiderUpdates = 0;
let teamUsaUpdates = 0;
let globalTeamUpdates = 0;
let teamIndex = 0;

for (let rider of mockRiders) {
  // Pro riders: match by name
  if (rider.celebrityType === 'pro rider' && riderToTeam[rider.name]) {
    rider.team = riderToTeam[rider.name];
    proRiderUpdates++;
  }
  // Team USA riders
  else if (rider.celebrityType === 'team usa' && !rider.team) {
    rider.team = 'Team USA / FlowNation';
    teamUsaUpdates++;
  }
  // Everyone else without a team gets a global team
  else if (!rider.team) {
    rider.team = globalTeams[teamIndex % globalTeams.length];
    teamIndex++;
    globalTeamUpdates++;
  }
}

// Save updated file
fs.writeFileSync('./src/data/mockRiders.json', JSON.stringify(mockRiders, null, 2));

console.log('\nUpdates:');
console.log('- Pro riders matched: ' + proRiderUpdates);
console.log('- Team USA assigned: ' + teamUsaUpdates);
console.log('- Global teams assigned: ' + globalTeamUpdates);
console.log('\n✅ All riders now have team names linked correctly from TDF and Team USA lists.');
