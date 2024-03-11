const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
const n = +input.shift()
const a = Array(n).fill().map(el => Array(n).fill(0))
let ret = 0;

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];


for(let i=0; i<n; i++){
  const row = input.shift().split(' ').map(Number)
  for(let j=0; j<n; j++){
    a[i][j] =  row[j];
  }
}

for(let p=0; p<=100; p++){
  //테케 하나
  const b = Array(n).fill().map(el => Array(n).fill(1))
  const visited = Array(n).fill().map(el => Array(n).fill(0))
  let cnt = 0;

  function dfs(y, x){
    visited[y][x] = 1;
    for(let i=0; i<4; i++){
      const ny=y+dy[i];
      const nx=x+dx[i];
      if(ny<0 || ny>=n || nx<0 || nx>=n || visited[ny][nx]) continue;
      if(b[ny][nx] === 0) continue;
      dfs(ny, nx);
    }
  }

  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(a[i][j] <= p){
        b[i][j] = 0;
      }
    }
  }
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(visited[i][j]) continue;
      if(b[i][j] === 0) continue;
      dfs(i, j);
      cnt++;
    }
  }
  ret = Math.max(ret, cnt);
}
console.log(ret)