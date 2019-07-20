function SelectionSort(arr){

    if(arr.length <= 1) return;
    for(var i  = 0; i< arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }

        if(i !== lowest){
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
}

var arr3 =  [33, 12, 45, 23, 78, 56, 43, 32];
SelectionSort(arr3);
console.log(arr3);
