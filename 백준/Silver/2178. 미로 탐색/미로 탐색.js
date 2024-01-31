const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(" ").map(Number);
const a = input.map((row) => row.split('').map(Number));
let visited = Array.from(Array(100), () => Array(100).fill(0));

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

const bfs = (y, x) => {
  visited[y][x] = 1;
  const q = [y, x];
  while(q.length){
    y = q.shift();
    x = q.shift();
    for(let i=0; i<4; i++){
      let ny = y+dy[i];
      let nx = x+dx[i];
      if(ny<0 || ny>=n || nx<0 || nx>=m || visited[ny][nx]) continue;
      if(a[ny][nx] === 0) continue;
      visited[ny][nx] = visited[y][x] + 1;
      q.push(ny, nx);
    }
  }
}

bfs(0, 0);

console.log(visited[n-1][m-1]);