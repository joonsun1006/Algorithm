#include <bits/stdc++.h>
using namespace std;

long long n, a[100002], cnt[100002], en, ret;

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
	
	cin >> n;
	for(int i=0; i<n; i++){
		cin >> a[i];
	}
	
	for(int st=0; st<n; st++){
		while(en<n && !cnt[a[en]]){
			cnt[a[en]]++;
			en++;
		}
		//다른 투포인터와는 달리 얘는 n이 되어서도
		//st를 계속 증가시키면서 경우의수를 추가해줘야 하기 때문에
		//넣으면 안된다. 
		//if(en >= n) break;
		
		//en-st+1 처럼 +1을 추가해주지 않는 이유는
		//en이 이미 하나 증가해서 범위 밖으로 나가버렸기 때문이다.
		//ex. 1, 2, 3, 4, 5
		//st=0, en=0에서 시작하고 en=4가 되었고 en(4) < 5 이기 때문에
		//다시 한번 while문을 돌면서 en=5가 되면서 끝난다.
		//따라서 en=5이기 때문에 5-0을 하면 5개가 되면서 +1을 하면 안된다. 
		ret += (en-st);
		cnt[a[st]]--;
	}
	cout << ret << '\n';
	
	return 0;
}