const input = require('fs').readFileSync('/dev/stdin')
.toString().trim().split('\n').map(el => el.split(" ").map(Number));

const n = input[0][0];
const m = input[0][1];
const a = new Array(m);

let lo = 1;
let hi = 0;
let mid = 0;
let ret = 9987654321;

for(let i=1; i<=m; i++){
  a[i-1] = input[i][0];
  hi = Math.max(hi, a[i-1]);
}

const check = (md) => {
  let num = 0;
  for(let i=0; i<m; i++){
    // JS에서는 부동소수점때문에 Math.floor를 써줘야 한다.
    num += Math.floor(a[i]/md);
    if(a[i]%md !== 0) num++;
  }
  return n>=num;
}

// 질투심을 이분탐색으로 찾는다.
while(lo <= hi){
  // Math.floor
  mid = Math.floor((lo + hi)/2);
  if(check(mid)){
    hi = mid-1;
    ret = mid;
  }
  else {
    lo = mid+1;
  }
}

console.log(ret);