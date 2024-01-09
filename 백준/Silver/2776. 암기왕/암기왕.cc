#include <bits/stdc++.h>
using namespace std;

int t, n, a[1000002], b, m;

int bs(int target){
	int st=0;
	int en=n-1;
	while(st<=en){
		int mid=(st+en)/2;
		if(a[mid] == target) return 1;
		else if(a[mid] < target) st=mid+1;
		else if(a[mid] > target) en=mid-1;
	}
	return 0;
}

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
	
	cin >> t;
	for(int z=0; z<t; z++){
		cin >> n;
		for(int i=0; i<n; i++){
			cin >> a[i];
		}
		sort(a, a+n);
		cin >> m;
		for(int i=0; i<m; i++){
			cin >> b;
			cout << bs(b) << '\n';
		}
	}
	
	return 0;
}