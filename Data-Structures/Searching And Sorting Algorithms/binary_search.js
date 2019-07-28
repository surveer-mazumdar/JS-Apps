function binarySearch(arr, n){
    var start = 0;
    var end = arr.length;
    var middle = Math.floor((start + end) / 2);

    while(arr[middle] != n && start <= end){
        if(arr[middle] < n) start = middle + 1;
        else end = middle - 1;

        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === n ? middle : -1;
    
}

var index = binarySearch([10, 15, 20, 30], 3);

console.log(index);