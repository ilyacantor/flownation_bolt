const data = require('../src/data/mockRiders.json');

const noTeam = data.filter(r => !r.team || r.team === '');
console.log('Riders without teams:', noTeam.length);

const teamUsa = data.filter(r => r.team === 'Team USA / FlowNation');
console.log('Team USA riders:', teamUsa.length);
console.log('Sample Team USA:', teamUsa.slice(0, 3).map(r => r.name));

if (noTeam.length > 0) {
  console.log('\nFirst 5 without teams:', noTeam.slice(0, 5).map(r => r.name));
}
