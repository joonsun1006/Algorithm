#include <bits/stdc++.h>
using namespace std;

int n;
string s, ret;
char a[65][65];

string quard(int y, int x, int n){
	int cnt0=0, cnt1=0;
	string ret="";
	for(int i=y; i<y+n; i++){
		for(int j=x; j<x+n; j++){
			if(a[i][j] == '0'){
				cnt0++;
			}
			else if(a[i][j] == '1'){
				cnt1++;
			}
		}
	}
	if(cnt0 == n*n){
		ret += '0';
	}
	else if(cnt1 == n*n){
		ret += '1';
	}
	else{
		ret += '(';
		ret += quard(y, x, n/2);
		ret += quard(y, x+n/2, n/2);
		ret += quard(y+n/2, x, n/2);
		ret += quard(y+n/2, x+n/2, n/2);
		ret += ')';
	}
	return ret;
}

int main(){
	cin >> n;
	for(int i=0; i<n; i++){
		cin >> s;
		for(int j=0; j<n; j++){
			a[i][j] = s[j];
		}
	}
	cout << quard(0, 0, n) << '\n';
	
	return 0;
}