#include <bits/stdc++.h>
using namespace std;

int n, m, ret;

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
	
	cin >> n >> m;
	int a[n];
	for(int i=0; i<n; i++){
		cin >> a[i];
	}
	sort(a+0, a+n);
	
	int st = 0;
	int en = n-1;
	
	while(st < en){
		if(a[st]+a[en] == m){
			en--;
			ret++;
		} else if(a[st]+a[en] < m) st++;
		else if(a[st]+a[en] > m) en--;
	}
	cout << ret << '\n';
	
	return 0;
}