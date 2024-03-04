const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
const [n, m] = input.shift().split(" ").map(Number)
const map = new Map()
const map2 = new Map()

for (let i = 0; i < n; i++) {
  const text = input[i].trim()
  map.set(text, i+1)
  map2.set(i+1, text)
}
for(let i=n; i<n+m; i++){
  quest = input[i].trim()
  if(map.get(quest) === undefined) {
    console.log(map2.get(+quest))
  } else {
    console.log(map.get(quest))
  }
}