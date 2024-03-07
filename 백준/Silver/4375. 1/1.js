const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)

for(let n of input){
  let cnt=1;
  let ret=1;
  while(true){
    if(cnt%n === 0){
      console.log(ret);
      break;
    }
    else{
      cnt = cnt*10+1;
      cnt %= n;
      ret++;
    }
  }
}