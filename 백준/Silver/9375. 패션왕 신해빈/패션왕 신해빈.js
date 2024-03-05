const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n")
// t = +t

let clothes = []
let count = -1
for (let i = 0; i < arr.length; i++) {
  if (arr[i].includes(" ")) {
    clothes[count].push(arr[i].split(" "))

    // let [cname, ctype] = arr[i].split(" ")
    // cname = cname.trim()
    // ctype = ctype.trim()
    // mp.set(ctype, cname)
  } else {
    clothes.push([])
    count++

    // n = +arr[i]
  }
}

// console.log(clothes)

for (let i of clothes) {
  const arr = i
  let mp = new Map()
  for (let j = 0; j < arr.length; j++) {
    if (!mp.has(arr[j][1])) {
      mp.set(arr[j][1], 1)
    } else {
      mp.set(arr[j][1], mp.get(arr[j][1]) + 1)
    }
  }
  let answer = 1;

  for(let a of mp.values()) {
    answer *= a+1;
  }

  console.log(answer - 1)
}
