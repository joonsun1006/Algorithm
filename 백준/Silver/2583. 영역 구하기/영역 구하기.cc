#include <bits/stdc++.h>
using namespace std;
#define y1 aaaa
int m, n, k, x1,y1, x2,y2, a[101][101],visited[101][101];
int ret, area;
vector<int> areavec;

const int dy[4] = { -1, 0, 1, 0 };
const int dx[4] = { 0, 1, 0, -1 };

int dfs(int y, int x) {
	visited[y][x] = 1;
	area++;
	for (int i = 0; i < 4; i++) {
		int ny = y + dy[i];
		int nx = x + dx[i];
		if (ny < 0 || ny >= m || nx < 0 || nx >= n) continue;
		if (visited[ny][nx]) continue;
		if (a[ny][nx] == 1) continue;
		dfs(ny, nx);
	}
	return area;
}

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
	
	cin >> m >> n >> k;
	
	//초기화
	ret = 0;

	for (int i = 0; i < k; i++) {
		cin >> x1 >> y1 >> x2 >> y2;
		for (int y = y1; y < y2; y++) {
			for (int x = x1; x < x2; x++) {
				a[y][x] = 1;
			}
		}
	}
	for (int i = 0; i < m; i++) {
		for (int j = 0; j < n; j++) {
			if (visited[i][j]) continue;
			if (a[i][j] == 1) continue;
			area = 0;
			areavec.push_back(dfs(i, j));
			ret++;
		}
	}
	sort(areavec.begin(), areavec.end());
	cout << ret << '\n';
	for (int i : areavec) cout << i << " ";
	return 0;
}