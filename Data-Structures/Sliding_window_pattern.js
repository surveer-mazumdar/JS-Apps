// write a function which accepts array of integer, and a number called n, function should calculate MAX SUM of n consicutive numbers

//[1,2,5,2,8,1,5], 4 return 17 = 2+5+2+8

function SubArraySum(arr, n){
    let maxSum = tempSum = 0;
    if(arr.length < n) return null;
    maxSum = arr.reduce((total, num) => total += num);
    tempSum = maxSum;
    let index = n;
    while(index < arr.length){
        tempSum = tempSum - (arr[index - n] + arr[index]);
        maxSum = Math.max(maxSum, tempSum);
        index++;
    }
    return maxSum;
}

console.log(SubArraySum([1,2,5,2,8,1,5], 4));