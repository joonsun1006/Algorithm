const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

let maxVal=input[0];
let index=0;

for(let i=0; i<9; i++){
  if(maxVal < input[i]){
    maxVal = input[i];
    index = i;
  }
}

console.log(maxVal);
console.log(index+1);