const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
let t = +input.shift()

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];



while(t--){
  const [m, n, k] = input.shift().split(' ').map(Number)
  const a = Array(m).fill().map(el => Array(n).fill(0))
  const visited = Array(m).fill().map(el => Array(n).fill(0))
  let ret = 0;
  function dfs(y, x) {
    visited[y][x] = 1;
    for(let i=0; i<4; i++){
      const ny = y+dy[i];
      const nx = x+dx[i];
      if(ny<0 || ny>=m || nx<0 || nx>=n || visited[ny][nx]) continue;
      if(a[ny][nx] === 0) continue;
      dfs(ny, nx);
    }
  }
  for(let i=0; i<k; i++){
    let [ax, ay] = input.shift().split(' ').map(Number)
    let temp = 0;
    temp = ay;
    ay = ax;
    ax = temp;
    a[ay][ax] = 1;
  }
  for(let i=0; i<m; i++){
    for(let j=0; j<n; j++){
      if(visited[i][j]) continue;
      if(a[i][j] === 0) continue;
      dfs(i, j);
      ret++;
    }
  }

  console.log(ret);
}