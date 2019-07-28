
function linearSearch(arr, n){
    for(var index in arr){
        if(arr[index] === n){
            return parseInt(index);
        }
    }    
    return -1;
}

var index = linearSearch([10, 15, 20, 30], 15);

console.log(index);