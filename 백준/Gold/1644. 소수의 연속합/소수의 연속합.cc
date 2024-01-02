#include <bits/stdc++.h>
using namespace std;

int n, sum, ret;
priority_queue<int, vector<int>, greater<int>> pq;

int check(int num){
	if(num <= 1) return 0; 
	if(num == 2) return 1;
	if(num%2 == 0) return 0;
	for(int i=3; i*i<=num; i++){
		if(num%i == 0) return 0;
	}
	return 1;
}

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
	
	cin >> n;
	for(int i=2; i<=n; i++){
		if(check(i) == 0) continue;
		sum += i;
		pq.push(i);
		while(sum > n && pq.size()){
			sum -= pq.top();
			pq.pop();
		}
		if(sum == n){
			ret += 1;
			sum -= pq.top();
			pq.pop();
		}
	}
	cout << ret << '\n';

	return 0;
}