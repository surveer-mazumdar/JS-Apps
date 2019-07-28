//Type 1 : less Optimized
function BubbleSortTypeOne(arr){

    if(arr.length <= 1) return;
    var countOfLoops = 0;
    for(var v in arr){
        for(var i in arr){
            i = parseInt(i);
            if(i+1 >= arr.length) break;

            if(arr[i] > arr[i+1]){
                var temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
            }
            countOfLoops++;
        }
        countOfLoops++;
    }

    console.log(countOfLoops);
}


//Trype 2 : lesser Optimized
function BubbleSortTypeTwo(arr){

    if(arr.length <= 1) return;
    var countOfLoops = 0;
    for(var i = arr.length; i >= 0; i--){
        for(var j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
            countOfLoops++;
        }
        countOfLoops++;
    }
    console.log(countOfLoops);
}

//Type 3: Most Optimized in number of iteration. when array is nearly sorted
function BubbleSortTypeThree(arr){

    if(arr.length <= 1) return;
    var countOfLoops = 0;
    var isSwaped = false;
    for(var i = arr.length; i >= 0; i--){
        isSwaped = false;
        for(var j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                isSwaped = true;
            }
            countOfLoops++;
        }
        countOfLoops++;
        if(!isSwaped) break;
    }
    console.log(countOfLoops);
}

var arr1 =  [33, 12, 45, 23, 78, 56, 43, 32];
var arr2 =  [33, 12, 45, 23, 78, 56, 43, 32];
var arr3 =  [33, 12, 45, 23, 78, 56, 43, 32];

BubbleSortTypeOne(arr1); //O(n2)
BubbleSortTypeTwo(arr2);
BubbleSortTypeThree(arr3);//O(n) nearly
//console.log(arr1);
//console.log(arr2);
//console.log(arr3);