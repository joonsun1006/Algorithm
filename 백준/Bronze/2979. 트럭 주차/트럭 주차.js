const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(el => el.split(" ").map(Number));
let ret = 0;

const a = input[0][0];
const b = input[0][1];
const c = input[0][2];

const count = new Array(101).fill(0);

for(let i=1; i<input.length; i++){
  for(let j=input[i][0]; j<input[i][1]; j++){
    count[j]++;
  }
}

for(let i=0; i<101; i++){
  if(count[i] === 1){
    ret += a;
  }
  else if(count[i] === 2){
    ret += b*2;
  }
  else if(count[i] === 3){
    ret += c*3;
  }
}

console.log(ret);