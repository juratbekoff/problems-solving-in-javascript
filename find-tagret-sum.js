let arr = [6,1,5,4, -1, 3,2]  // array for finding target numbers
let targetSum = 11 //your target sum

function findTargetSum(targetSum, arr) {
    
    arr.sort((a,b) => a - b)

    let left = 0,
        right = arr.length - 1;
    
    while(left < right) {
        const sum = arr[left] + arr[right]
        
        if(sum === targetSum) {
           return [arr[left], arr[right]];
        } else if (left < right) {
            left++
        } else if (left > right) {
            right --
        } 
    }    
    return []
}

findTargetSum(targetSum, arr);