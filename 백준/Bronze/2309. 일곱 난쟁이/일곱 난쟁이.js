const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

//sum - 9C2 === 100
let ret = [];

const sum = input.reduce((acc, cur) => acc+cur, 0);

input.sort((a, b) => a-b);
for(let i=0; i<8; i++){
  for(let j=i+1; j<9; j++){
    if(sum - input[i] - input[j] === 100){
      ret = input.filter((value) => value !== input[i] && value !== input[j]);
      // process.exit();
    }
  }
}

console.log(ret.join('\n'));