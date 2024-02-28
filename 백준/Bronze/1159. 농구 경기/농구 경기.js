const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = Number(input.shift())
const arr = new Array(26).fill(0)
const result = []
for(let i=0; i<n; i++){
  arr[input.shift()[0].charCodeAt()-97]++
}

for(let i=0; i<26; i++){
  if(arr[i] >= 5){
    result.push(String.fromCharCode(i+97))
  }
}
if(result.length === 0){
  console.log("PREDAJA")
}
else {
  console.log(result.join(''))
}