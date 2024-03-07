#include <bits/stdc++.h>
using namespace std;

int n, ret;
string s;

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
	
	cin >> n;
	for(int i=0; i<n; i++){
		cin >> s;
		stack<char> stk;
		for(int j=0; j<s.size(); j++){
			if(stk.size() && stk.top() == s[j]){
				stk.pop();
			}
			else {
				stk.push(s[j]);
			}
		}
		if(!stk.size()) ret++;
	}
	cout << ret << '\n';
	
	return 0;
}