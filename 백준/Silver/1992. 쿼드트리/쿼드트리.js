const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
const n = +input.shift()
const a = Array(n)
  .fill()
  .map((el) => Array(n).fill(0))
const ret = []
function go(sy, sx, ey, ex) {
  if (sy === ey && sx === ex) {
    ret.push(a[sy][sx])
    return
  }
  let prev = a[sy][sx]
  for (let i = sy; i <= ey; i++) {
    for (let j = sx; j <= ex; j++) {
      if (prev !== a[i][j]) {
        ret.push("(")
        go(sy, sx, Math.floor((sy + ey) / 2), Math.floor((sx + ex) / 2))
        go(sy, Math.floor((sx + ex) / 2) + 1, Math.floor((sy + ey) / 2), ex)
        go(Math.floor((sy + ey) / 2) + 1, sx, ey, Math.floor((sx + ex) / 2))
        go(Math.floor((sy + ey) / 2) + 1, Math.floor((sx + ex) / 2) + 1, ey, ex)
        ret.push(")")
        return
      }
    }
  }
  ret.push(prev)
}

for (let i = 0; i < n; i++) {
  const row = input.shift()
  for (let j = 0; j < n; j++) {
    a[i][j] = row[j]
  }
}

go(0, 0, n - 1, n - 1)
console.log(ret.join(''))
