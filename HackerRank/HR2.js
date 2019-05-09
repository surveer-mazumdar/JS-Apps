//https://www.hackerrank.com/challenges/kangaroo/problem

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    
    if(x2 > x1 && v2 > v1){
        return "NO";
    }else if(x2 < x1 && v1 > v2){
        return "NO";
    }else if(v2 == v1 && x1 < x2){
        return "NO";
    }
    
    if(x2 > x1){
        if(doesKangarooMeet(x2, v2, x1, v1))
            return "YES";
        else
            return "NO";
    }
    
    if(x1 > x2){
        if(doesKangarooMeet(x1, v1, x2, v2))
            return "YES";
        else
            return "NO";
    } 
}

function doesKangarooMeet(runner, v2, chaser, v1){
    let x = (runner -chaser)/(v1 - v2);
    if( Math.floor(x) == x )
        return true;
    else
        return false;
}

//kangaroo(0,3,4,2);
//kangaroo(0,2,5,3);
//console.log(kangaroo(14, 4, 98, 2));
//console.log(kangaroo(4523, 8092, 9419, 8076));
console.log(kangaroo(43, 2, 70, 2));