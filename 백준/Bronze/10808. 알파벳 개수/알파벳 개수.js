const s = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const counts = new Array(26).fill(0);

s.forEach(el => counts[alphabet.indexOf(el)]++)

console.log(counts.join(" "));