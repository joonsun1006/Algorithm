function solution(arr)
{
    let answer = [];

    arr.forEach((el) => {
        if(answer.length > 0){
            if(answer[answer.length-1] !== el) {
                answer.push(el);
            }
        } else {
            answer.push(el);
        }
        
    })
    
    return answer;
}