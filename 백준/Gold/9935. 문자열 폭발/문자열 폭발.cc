#include <bits/stdc++.h>
using namespace std;

string s, p, curString;

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
	
	cin >> s;
	cin >> p;
	for(char c : s){
		curString += c;
		if(curString.size() >= p.size() && curString.substr(curString.size() - p.size(), p.size()) == p){
			curString.erase(curString.size()-p.size(), p.size());
		}
	}
	if(curString.size() == 0){
		cout << "FRULA" << '\n';
	}
	else {
		cout << curString << '\n';
	}
	return 0;
}