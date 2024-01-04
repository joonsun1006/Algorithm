#include <bits/stdc++.h>
using namespace std;

const int INF = 987654321;
int n, s, en, a[100002], sum, ret=INF;

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
	
	cin >> n >> s;
	for(int i=0; i<n; i++){
		cin >> a[i];
	}
	sum=a[0];
	for(int st=0; st<n; st++){
		while(en<n && sum<s){
			en++;
			sum += a[en];
		}
		if(en == n) break;
		ret = min(ret, en-st+1);
		sum -= a[st];
	}
	if(ret == INF){
		cout << 0 << '\n';
	}
	else{
		cout << ret << '\n';
	}
	
	return 0;
}