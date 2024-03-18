function solution(s) {
    let answer = '';
    const nums = s.split(' ').map(Number);
    
    let maxVal = -987654321;
    let minVal = 987654321;
    for(const num of nums){
        maxVal = Math.max(maxVal, num);
        minVal = Math.min(minVal, num);
    }
    answer = minVal + ' ' + maxVal;
    
    return answer;
}