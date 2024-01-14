#include <bits/stdc++.h>
using namespace std;

int a[9], sum;

int main() {
	//7난쟁이 키의 합 = 100
	//9C7의 합 == 100

	for (int i = 0; i < 9; i++) {
		cin >> a[i];//9난쟁이들의 키
	}

	sort(a, a + 9);
	do {
		sum = 0;
		for (int i = 0; i < 7; i++) sum += a[i];
		if (sum == 100) {
			for (int j = 0; j < 7; j++) cout << a[j] << '\n';
			break;
		}
	} while (next_permutation(a, a + 9));

	return 0;
}