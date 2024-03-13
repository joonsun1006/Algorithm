#include <bits/stdc++.h>
using namespace std;

int n, m, j, drop, l, r, ret;

int main(){
	cin >> n >> m;
	cin >> j;
	l=1, r=l+m-1;
	for(int i=0; i<j; i++){
		cin >> drop;
		if(r < drop){
			ret += drop-r;
			l = l+drop-r;
			r = l+m-1;
		}
		else if(drop < l){
			ret += l-drop;
			l = drop;
			r = l+m-1;
		}
	}
	cout << ret << '\n';
	return 0;
}