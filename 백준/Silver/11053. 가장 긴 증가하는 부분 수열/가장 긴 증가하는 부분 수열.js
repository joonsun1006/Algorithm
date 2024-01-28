const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n] = input.shift().split(" ").map(Number);
const a = input[0].split(" ").map(Number);
const cnt = new Array(1002);
let ret=1;

for(let i=0; i<n; i++){
  let maxValue = 0;
  for(let j=0; j<i; j++){
    if(a[j]<a[i] && maxValue<cnt[j]){
      maxValue = cnt[j];
    }
  }
  cnt[i] = maxValue + 1;
  ret = Math.max(ret, cnt[i]);
}

console.log(ret);