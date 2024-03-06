const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(el => el.split(' ').map(Number))

const n = input[0][0]
const m = input[1][0]
const myArr = input[2].sort((a, b) => a-b)

let ret = 0;
let st = 0;
let en = myArr.length-1;
while(st < en){
  if(myArr[st]+myArr[en] === m){
    en--; ret++;
  } else if(myArr[st]+myArr[en] > m) en--;
  else if(myArr[st]+myArr[en] < m) st++;
}
console.log(ret)