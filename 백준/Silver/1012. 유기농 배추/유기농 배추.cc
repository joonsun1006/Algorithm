#include <bits/stdc++.h>
using namespace std;

const int dy[4] = {-1, 0, 1, 0};
const int dx[4] = {0, 1, 0, -1};

int t, m, n, k, y, x, a[51][51], visited[51][51], ret;

void dfs(int sy, int sx){
	visited[sy][sx] = 1;
	for(int i=0; i<4; i++){
		int ny = sy+dy[i];
		int nx = sx+dx[i];
		if(ny<0 || ny>= n || nx<0 || nx>= m) continue;
		if(visited[ny][nx]) continue;
		if(a[ny][nx] == 0) continue;
		dfs(ny, nx);
	}
}

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
	cin >> t;
	for(int i=0; i<t; i++){
		cin >> m >> n >> k;
		ret=0;
		fill(&a[0][0], &a[0][0]+51*51, 0);
		fill(&visited[0][0], &visited[0][0]+51*51, 0);
		
		for(int j=0; j<k; j++){
			cin >> x >> y;
			a[y][x] = 1;
		}
		for(int j=0; j<n; j++){
			for(int l=0; l<m; l++){
				if(visited[j][l]) continue;
				if(a[j][l] == 0) continue;
				dfs(j, l);
				ret++;
			}
		}
		cout << ret << '\n';
	}
	return 0;
}