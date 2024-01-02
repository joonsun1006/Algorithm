#include <bits/stdc++.h>
using namespace std;

int n, ret;

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);

	cin >> n;
	string s = to_string(n);
	int a[s.size()];
	for(int i=0; i<s.size(); i++){
		a[i] = s[i]-'0';
	}
	sort(a, a+s.size(), greater<int>());

	string b;
	for(int i=0; i<s.size(); i++){
		b += a[i]+'0';
	}
	cout << b << '\n';

	return 0;
}