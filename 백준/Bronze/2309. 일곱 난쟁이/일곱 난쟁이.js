const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let sum = 0;

// 전체 합 - 9C2 === 100
let indexX = 0;
let indexY = 0;
let flag = 0;

input.sort((a, b) => a-b)

for(let i=0; i<9; i++){
  sum += input[i];
}


for(let i=0; i<9; i++){
  for(let j=i+1; j<9; j++){
    if(sum - input[i] - input[j] === 100){
      indexX = i; indexY = j;
      flag=1;
      break;
    }
  }
  if(flag) break;
}

for(let i=0; i<9; i++){
  if(i === indexX || i === indexY) continue;
  console.log(input[i])
}