const fs = require('fs');

const mockRiders = JSON.parse(fs.readFileSync('../src/data/mockRiders.json', 'utf8'));
const tdfRiders = fs.readFileSync('./tdf_riders.txt', 'utf8');
const tdfWomen = fs.readFileSync('./tdf_women.txt', 'utf8');

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

    // Check if it's a team line (all caps)
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

console.log('TDF mapping has', Object.keys(riderToTeam).length, 'riders');
console.log('\nSample TDF riders:');
Object.keys(riderToTeam).slice(0, 5).forEach(name => {
  console.log('  "' + name + '" -> ' + riderToTeam[name]);
});

console.log('\nSample mockRiders names:');
mockRiders.slice(1, 6).forEach(r => {
  console.log('  "' + r.name + '" -> ' + r.team);
});

// Check matches
let matches = 0;
mockRiders.forEach(r => {
  if (riderToTeam[r.name]) {
    matches++;
  }
});

console.log('\nMatches found:', matches);
