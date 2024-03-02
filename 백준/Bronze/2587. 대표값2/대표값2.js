const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number)
let sum = 0
input.sort((a, b) => a - b)
for (let i = 0; i < 5; i++) {
  sum += input[i]
}

console.log(sum / 5)
console.log(input[2])
