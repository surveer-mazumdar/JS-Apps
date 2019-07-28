
function factorial(isPromise, n){
    function main(n){ return n * (n + 1); }
    if(isPromise){
        return new Promise(function(resolve, reject){
            var response = main(n);
            resolve(response);
        });
    }else{
        return main(n);
    }
}

function findOddNumbers(n){
    let numbers = [];
    for(let i=0; i <= n; i++){
        if(i % 2 != 0)
            numbers.push(i);
    }
    return numbers.join(", ");
}

factorial(true, 4).then(function(param){
    return findOddNumbers(param);
}).then(function(n){
    console.log(n);
})