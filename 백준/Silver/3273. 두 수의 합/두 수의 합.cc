#include <bits/stdc++.h>
using namespace std;

int n, x, lo, hi, ret;

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
	
	cin >> n;
	int a[n];
	
	for(int i=0; i<n; i++){
		cin >> a[i];
	}
	cin >> x;
	sort(a, a+n);
	
	lo = 0;
	hi = n-1;
	while(lo < hi){
		if(a[lo] + a[hi] == x) hi--, ret++;
		else if(a[lo] + a[hi] > x) hi--;
		else lo++;
	}
	cout << ret << '\n';
	return 0;
}