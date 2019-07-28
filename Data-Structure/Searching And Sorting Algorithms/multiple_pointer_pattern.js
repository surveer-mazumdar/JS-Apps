//Count unique values
//accept sorted array, can have -ve value but always sorted
//[-2,-1,-1,0,1] returns 4

function CountUniqueValues(sortedArray){    
    if(sortedArray.length == 0) return 0;
    if(sortedArray.length == 1) return 1;
    if(sortedArray.length > 2){
        let leftPointer = 0;
        let rightPointer = 1;
        let uniqueCount = 0;
        while(rightPointer < sortedArray.length){
            if(sortedArray[leftPointer] != sortedArray[rightPointer]){
                uniqueCount++;                
            }
            leftPointer++;
            rightPointer++;
            if(rightPointer == sortedArray.length -1 && sortedArray[leftPointer] != sortedArray[rightPointer]){
                uniqueCount++;                
            }
        }
        return uniqueCount;
    }
}

//var response = CountUniqueValues([-2,-1,-1,0,1]);
var response = CountUniqueValues([1,1,1,1,1,2]);
var response = CountUniqueValues([1,2,3,4,4,4,7,7,12,13]);
var response = CountUniqueValues([0]);
console.log(response);