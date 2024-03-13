const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
const [n, m] = input.shift().split(" ").map(Number)
const j = +input.shift()

let ret = 0;
let st = 1;
let en = m;
for (let i = 0; i < j; i++) {
  const apple = +input.shift();
  if(st<=apple && apple<=en) continue;
  if(apple < st){
    const cnt = st-apple;
    ret += cnt;
    st = apple;
    en -= cnt;
  } else if(en < apple) {
    const cnt = apple-en;
    ret += cnt;
    en = apple;
    st += cnt;
  }
}

console.log(ret);
