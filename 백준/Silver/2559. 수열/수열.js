const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
const [n, k] = input.shift().split(" ").map(Number)
const temp = input.shift().split(" ").map(Number)

let result = -987654321
const psum = new Array(n+2).fill(0);
for(let i=1; i<=n; i++){
  psum[i] = psum[i-1] + temp[i-1]
}

for(let i=k; i<=n; i++){
  result = Math.max(result, psum[i]-psum[i-k])
}

console.log(result)