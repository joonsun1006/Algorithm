const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
const [n, k] = input.shift().split(" ").map(Number)
const temp = input.shift().split(" ").map(Number)

let result = -Infinity

for(let i=0; i<n-k+1; i++){
  let sum=0;
  for(let j=i; j<i+k; j++){
    sum += temp[j];
  }
  result = Math.max(result, sum);
}

console.log(result)