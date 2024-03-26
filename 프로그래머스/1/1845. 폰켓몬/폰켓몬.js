function solution(nums) {
    let answer = 1;
    const st = new Set(nums);
    if(st.size >= nums.length/2){
        answer = nums.length/2;
    } else if(st.size < nums.length/2) {
        answer = st.size;
    }
    
    return answer;
}