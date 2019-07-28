/* 
Time complexity of MergeSort
=======================================
    Big O of Merge sort is O(n log n)

    first n stands for merging time which depends on length of the array
    log n is the time take to split the array 
    array of 8 elements
    8
    4 4
    2 2 2 2
    1 1 1 1 1 1 1 1 

    3 steps
========================================

Space Complexity Of Merge Sort 
========================================
    O(n)
    Why On(n)?
    bcz we split the array to level 1. And as the n grows of array the space to calculate also increases
========================================


*/

const mergeSortedArrays = function(arrFirst, arrSecond){
    var mergedArr = [];
    [arrFirst, arrSecond] = (arrFirst.length > arrSecond.length)? [arrFirst, arrSecond] : [arrSecond, arrFirst];
    var i = j = 0;
    while(i < arrFirst.length){
        if(typeof arrSecond[j] != "undefined"){
            if(arrFirst[i] < arrSecond[j]){
                mergedArr.push(arrFirst[i]);
                i++;
            }else{
                mergedArr.push(arrSecond[j]);
                j++;
            }
        }else{
            mergedArr.push(arrFirst[i]);
            i++;
        }        
    }
    while(j < arrSecond.length){
        mergedArr.push(arrSecond[j]);
        j++;
    }

    return mergedArr;
}

function merge_sort(arr){

    if(arr.length <= 1) return arr;

    var half = (Math.floor(arr.length / 2));
    var left = merge_sort(arr.slice(0, half));
    var right = merge_sort(arr.slice(half));

    return mergeSortedArrays(left, right);
}


var arr =  [33, 12, 45, 23, 78, 56, 43, 32];
var sortedArr = merge_sort(arr);
console.log(sortedArr);
console.log(arr);// doesn't change bcz we sliced the array. it returns new array

//console.log(merge([12, 56, 72], [23,34]))
