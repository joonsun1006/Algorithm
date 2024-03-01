#include <bits/stdc++.h>
using namespace std;

int n, k, a[100002], psum[100002], maxval;

int main() {
	cin >> n >> k;
	maxval = -1000002;
	for (int i = 1; i <= n; i++) {
		cin >> a[i];
	}
	for (int i = 1; i <= n; i++) {
		psum[i] = psum[i - 1] + a[i];
	}
	for (int i = 0; i <= n-k; i++) {
		maxval = max(maxval, psum[i+k] - psum[i]);
	}
	cout << maxval << '\n';
	return 0;
}