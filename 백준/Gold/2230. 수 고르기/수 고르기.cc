#include <bits/stdc++.h>
using namespace std;

int a[100002], n, m, e, ret=9987654321;

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
	
	cin >> n >> m;

	for(int i=0; i<n; i++){
		cin >> a[i];
	}
	sort(a, a+n);
	e = 0;
	
	for(int s=0; s<n; s++){
		while(e < n && a[e]-a[s] < m) e++;
		if(e == n) break;
		ret = min(ret, a[e]-a[s]);
	}
	cout << ret << '\n';
	
	return 0;
}