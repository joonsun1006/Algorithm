const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let [a, b, c] = fs.readFileSync(filePath).toString().trim().split(' ').map(BigInt)

const go = (x, y) => {
  if(y === 1n) return x%c;
  let ret = go(x, (y/2n));
  ret = (ret*ret)%c;
  if(y%2n) ret = (ret*x) % c;
  return ret;
}

console.log(go(a, b).toString());