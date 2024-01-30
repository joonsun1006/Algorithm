#include <bits/stdc++.h>
using namespace std;

int n, m, a[101][101], visited[101][101], d, c;
string s;
queue<pair<int, int>> q;

const int dy[4] = { -1, 0, 1, 0 };
const int dx[4] = { 0, 1, 0, -1 };

void bfs(int y, int x) {
	visited[y][x] = 1;
	q.push({ y, x });
	while (q.size()) {
		tie(y, x) = q.front();
		q.pop();
		for (int i = 0; i < 4; i++) {
			int ny = y + dy[i];
			int nx = x + dx[i];
			if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
			if (visited[ny][nx]) continue;
			if (a[ny][nx] == 0) continue;
			visited[ny][nx] = visited[y][x] + 1;
			q.push({ ny, nx });
		}
	}

}

int main() {
	cin >> n >> m;
	for (int i = 0; i < n; i++) {
		cin >> s;
		for (int j = 0; j < m; j++) {
			a[i][j] = s[j]-'0';
		}
	}
	bfs(0, 0);
	cout << visited[n-1][m-1] << '\n';
	return 0;
}