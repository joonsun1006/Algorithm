#include <bits/stdc++.h>
using namespace std;

int n, a[100][100], b[100][100], visited[100][100], ret;

const int dy[] = {-1, 0, 1, 0};
const int dx[] = {0, 1, 0, -1};

void dfs(int y, int x){
	visited[y][x] = 1;
	for(int i=0; i<4; i++){
		int ny=y+dy[i];
		int nx=x+dx[i];
		if(ny<0 || ny>=n || nx<0 || nx>=n || visited[ny][nx]) continue;
		if(b[ny][nx] == 0) continue;
		dfs(ny, nx);
	}
}

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
	
	cin >> n;
	for(int i=0; i<n; i++){
		for(int j=0; j<n; j++){
			cin >> a[i][j];
		}
	}
	
	for(int p=0; p<=100; p++){
		//tc 하나
		fill(&visited[0][0], &visited[0][0]+100*100, 0);
		fill(&b[0][0], &b[0][0]+100*100, 1);
		int cnt=0;
		
		for(int i=0; i<n; i++){
			for(int j=0; j<n; j++){
				if(a[i][j] <= p){
					b[i][j] = 0;
				}
			}
		}
		
		for(int i=0; i<n; i++){
			for(int j=0; j<n; j++){
				if(visited[i][j]) continue;
				if(b[i][j] == 0) continue;
				dfs(i, j);
				cnt++;
			}
		}
		
		ret = max(ret, cnt);
	}
	cout << ret << '\n';
	
	return 0;
}