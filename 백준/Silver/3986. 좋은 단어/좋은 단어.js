const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filePath).toString().trim().split('\n')
const n = +input.shift()
input = input.map(el => el.trim())
let ret = 0;

for(let str of input){
  const results = []
  for(let alpha of str){
    if(results[results.length-1] === alpha){
      results.pop();
    } else {
      results.push(alpha);
    }
  }
  if(!results.length) ret++;
}

console.log(ret);