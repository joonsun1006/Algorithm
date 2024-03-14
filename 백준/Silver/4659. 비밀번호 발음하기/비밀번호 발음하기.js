const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
let pw = input.shift().trim()

while (pw !== "end") {
  let flag = 1
  if (
    !(
      pw.includes("a") ||
      pw.includes("e") ||
      pw.includes("i") ||
      pw.includes("o") ||
      pw.includes("u")
    )
  ) {
    flag = 0
  }

  //모음이 3개 혹은 자음이 3개 연속으로 오면 flag=0
  if (pw.length >= 3) {
    for (let i = 0; i < pw.length - 2; i++) {
      if (
        (pw[i] === "a" ||
          pw[i] === "e" ||
          pw[i] === "i" ||
          pw[i] === "o" ||
          pw[i] === "u") &&
        (pw[i + 1] === "a" ||
          pw[i + 1] === "e" ||
          pw[i + 1] === "i" ||
          pw[i + 1] === "o" ||
          pw[i + 1] === "u") &&
        (pw[i + 2] === "a" ||
          pw[i + 2] === "e" ||
          pw[i + 2] === "i" ||
          pw[i + 2] === "o" ||
          pw[i + 2] === "u")
      ) {
        flag = 0
      }
      if (
        (pw[i] !== "a" &&
          pw[i] !== "e" &&
          pw[i] !== "i" &&
          pw[i] !== "o" &&
          pw[i] !== "u") &&
        (pw[i + 1] !== "a" &&
          pw[i + 1] !== "e" &&
          pw[i + 1] !== "i" &&
          pw[i + 1] !== "o" &&
          pw[i + 1] !== "u") &&
        (pw[i + 2] !== "a" &&
          pw[i + 2] !== "e" &&
          pw[i + 2] !== "i" &&
          pw[i + 2] !== "o" &&
          pw[i + 2] !== "u")
      ) {
        flag = 0
      }
    }
  }
  // ee나 oo가 아닌 같은 글자가 연속 두번 오면 flag = 0
  if (pw.length >= 2) {
    for (let i = 0; i < pw.length - 1; i++) {
      if (pw[i] === pw[i + 1] && pw[i] !== "e" && pw[i] !== "o") flag = 0
    }
  }
  if (!flag) {
    console.log(`<${pw}> is not acceptable.`)
  } else {
    console.log(`<${pw}> is acceptable.`)
  }
  pw = input.shift().trim()
}
