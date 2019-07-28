/*

Pivot Pseudocode

    It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
    Grab the pivot from the start of the array
    Store the current pivot index in a variable (this will keep track of where the pivot should end up)
    Loop through the array from the start until the end

    If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index

    Swap the starting element (i.e. the pivot) with the pivot index
    Return the pivot index

    let arr = [ 5, 2, 1, 8, 4, 7, 6, 3 ]
    pivot(arr); // 4;
    // any one of these is an acceptable mutation:
    // [2, 1, 4, 3, 5, 8, 7, 6]
    // [1, 4, 3, 2, 5, 7, 6, 8]
    // [3, 2, 1, 4, 5, 7, 6, 8]
    // [4, 1, 2, 3, 5, 6, 8, 7]
    // there are other acceptable mutations too!


Quicksort Pseudocode

    Call the pivot helper on the array
    When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
    Your base case occurs when you consider a subarray with less than 2 elements


*/

function pivotHelper(arr, start = 0, end = arr.length - 1) {

    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    var pivot = arr[start];
    var swapIndex = start;

    for (var i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    swap(arr, start, swapIndex);
    return swapIndex;
}

function QuickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        var pivotIndex = pivotHelper(arr, left, right);

        QuickSort(arr, left, pivotIndex - 1);
        QuickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

var arr = [33, 12, 45, 23, 78, 56, 43, 32];
QuickSort(arr);
console.log(arr);
