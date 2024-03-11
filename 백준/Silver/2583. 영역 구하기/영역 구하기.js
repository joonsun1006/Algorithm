const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
const [m, n, k] =  input.shift().split(' ').map(Number)
// m, n, k
// y, x, k

const a = Array(101).fill().map(el => Array(101).fill(0));
const visited = Array(101).fill().map(el => Array(101).fill(0));
let cnt = 0;
let area = 0;
let ret = [];

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

function dfs(y, x){
  area++;
  visited[y][x] = 1;
  for(let i=0; i<4; i++){
    const ny=y+dy[i];
    const nx=x+dx[i];
    if(ny<0 || ny>=m || nx<0 || nx>=n || visited[ny][nx]) continue;
    if(a[ny][nx] === 1) continue;
    dfs(ny, nx);
  }
}

for(let i=0; i<k; i++){
  const color = input.shift().split(' ').map(Number)
  for(let j=color[0]; j<color[2]; j++){
    for(let k=color[1]; k<color[3]; k++){
      a[k][j] = 1;
    }
  }
}

for(let i=0; i<m; i++){
  for(let j=0; j<n; j++){
    if(visited[i][j]) continue;
    if(a[i][j] === 1) continue;
    dfs(i, j);
    cnt++;
    ret.push(area)
    area=0;
  }
}
ret.sort((a, b) => a-b)
console.log(cnt);
console.log(ret.join(' '))