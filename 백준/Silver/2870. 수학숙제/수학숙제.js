const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
const n = +input.shift()
const str = Array(n).fill("")
let ret = []

for (let i = 0; i < n; i++) {
  str[i] = input.shift().trim()
  let tempRet = ""
  for (let j = 0; j < str[i].length; j++) {
    if (!isNaN(str[i][j])) {
      tempRet += str[i][j]
    } else if (isNaN(str[i][j])) {
      if (tempRet.length > 0) {
        ret.push(BigInt(tempRet))
      }
      tempRet = ""
    }
  }
  if (tempRet.length > 0) {
    ret.push(BigInt(tempRet))
  }
}
ret.sort((a, b) => {
  if (a > b) return 1
  if (a === b) return 0
  if (a < b) return -1
})

console.log(ret.join("\n"))
