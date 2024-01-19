const s = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
const counts = new Array(26).fill(0);

s.forEach(el => counts[el.charCodeAt()-97]++);

console.log(counts.join(" "));