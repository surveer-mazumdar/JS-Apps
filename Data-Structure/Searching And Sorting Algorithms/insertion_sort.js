function InsertionSortTypeOne(arr){
    if(arr.length <= 1) return;

    for(var i  = 1; i< arr.length; i++){
        var current = i;
        var j = i - 1;

        while(j >= 0 && arr[current] < arr[j]){ // multiple time swapping  of 2 elements
            var temp = arr[current];
            arr[current] = arr[j];
            arr[j] = temp;
            current--;
            j--;
        }
    }
}

function InsertionSortTypeTwo(arr){
    if(arr.length <= 1) return;

    for(var i  = 1; i< arr.length; i++){
        var currentVal = arr[i];
        var j = i - 1;

        while(j >= 0 && currentVal < arr[j]){
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = currentVal;
    }
}

var arr1 =  [33, 12, 45, 23, 78, 56, 43, 32];
InsertionSortTypeOne(arr1);


var arr2 =  [33, 12, 45, 23, 78, 56, 43, 32];
InsertionSortTypeOne(arr2);
console.log(arr1, arr2);
