#include <bits/stdc++.h>
using namespace std;

int n, m, a[100001], sum, mx, ret;

bool check(int mid){
	if(mx>mid) return false;
	int temp=mid;
	int cnt=0;
	for(int i=0; i<n; i++){
		if(mid-a[i] < 0){
			mid = temp;
			cnt++;
		}
		mid -= a[i];
	}
	cnt++;
	return cnt <= m;
}

int main(){
	
	cin >> n >> m;
	
	for(int i=0; i<n; i++){
		scanf("%d", &a[i]);
		sum += a[i];
		mx = max(mx, a[i]);
	}
	
	int lo=0;
	int hi=sum;
	int mid=0;
	
	//블루레이의 크기를 이분탐색.
	while(lo<=hi){
		mid=(lo+hi)/2;
		if(check(mid)){
			hi=mid-1;
			ret=mid;
		}
		else {
			lo=mid+1;
		}
	}
	cout << ret << '\n';

	return 0;
}