#include <iostream>
#include <stack>
#include <vector>

using namespace std;

stack<int> stk[3];
vector<int> v1, v2;
int cnt;

void MoveDisk(int from, int to)
{
	if (stk[from].empty())
	{
		exit(0);
	}
	if (!stk[to].empty() && stk[to].top() < stk[from].top())
	{
		exit(0);
	}
	stk[to].push(stk[from].top());
	stk[from].pop();
	v1.push_back(from + 1);
	v2.push_back(to + 1);
	cnt++;
	//cout << from + 1 << " " << to + 1 << '\n';
}

void Hanoi(int n, int from, int temp, int to)
{
	if (n == 1)
	{
		MoveDisk(from, to);
	}
	else if (n == 2)
	{
		MoveDisk(from, temp);
		MoveDisk(from, to);
		MoveDisk(temp, to);
	}
	else
	{
		Hanoi(n - 1, from, to, temp);
		MoveDisk(from, to);
		Hanoi(n - 1, temp, from, to);
	}
}

int main()
{
	int n;
	cin >> n;

	for (int i = n; i >= 1; i--)
	{
		stk[0].push(i);
	}

	Hanoi(n, 0, 1, 2);
	cout << cnt << '\n';
	for (int i = 0; i < cnt; i++)
	{
		cout << v1[i] << " " << v2[i] << '\n';
	}
}
