const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filePath).toString().trim().split('').sort()

const head = []
const body = []

while(input.length) {
  const first = input.shift();
  const idx = input.indexOf(first);
  if(idx === -1) {
    body.push(first);
  }
  else {
    head.push(first);
    input.splice(idx, 1)
  }
}

const tail = [...head].reverse()
if(body.length > 1) console.log("I'm Sorry Hansoo")
else {
  const result = head.join('') + body.join('') + tail.join('')
  console.log(result)
}