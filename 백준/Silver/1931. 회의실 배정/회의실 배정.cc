#include <bits/stdc++.h>
using namespace std;

int n, s, e, ret=1;
vector<pair<int, int>> v;

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
	
	cin >> n;
	for(int i=0; i<n; i++){
		cin >> s >> e;
		v.push_back({e, s});
	}
	sort(v.begin(), v.end());
	int e = v[0].first;
	int s = v[0].second;
	for(int i=1; i<n; i++){
		if(e <= v[i].second){
			ret++;
			e = v[i].first;
		}
	}
	cout << ret << '\n';
	
	
	return 0;
}