const fs = require('fs')
const s = fs.readFileSync('/dev/stdin').toString().trim()
let flag = 0;

for(let i=0; i<s.length; i++){
  if(s[i] === s[s.length-i-1]) continue;
  flag=1;
}

if(flag){
  console.log(0)
} else {
  console.log(1)
}