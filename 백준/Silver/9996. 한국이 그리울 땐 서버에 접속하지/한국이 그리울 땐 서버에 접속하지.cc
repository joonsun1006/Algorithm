#include <bits/stdc++.h>
using namespace std;

int n;
string s, pat;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
	
	cin >> n;
	cin >> pat;

	int patIdx = pat.find('*');
	string pre = pat.substr(0, patIdx);
	string suf = pat.substr(patIdx+1);
	for(int i=0; i<n; i++){
		cin >> s;
		if(pat.size()-1 > s.size()){
			cout << "NE" << '\n';
		}
		else if(s.substr(0, pre.size()) == pre && s.substr(s.size()-suf.size()) == suf){
			cout << "DA" << '\n';
		}
		else {
			cout << "NE" << '\n';
		}
	}
	
	return 0;
}