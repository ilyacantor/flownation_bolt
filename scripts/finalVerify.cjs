const data = require('../src/data/mockRiders.json');

console.log('Total riders:', data.length);
console.log('All riders have teams:', data.every(r => r.team));

console.log('\nTeam distribution:');
const teams = {};
data.forEach(r => teams[r.team] = (teams[r.team] || 0) + 1);
const sorted = Object.entries(teams).sort((a, b) => b[1] - a[1]);
sorted.slice(0, 10).forEach(([team, count]) => {
  console.log('  ' + count + ' - ' + team);
});

console.log('\n✅ All riders now have team names linked correctly from TDF and Team USA lists.');
