
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

function findOddNumbers(isPromise, n){
    function main(n){
        let numbers = [];
        for(let i=0; i <= n; i++){
            if(i % 2 != 0)
                numbers.push(i);
        }
        return numbers.join(", ");
    }

    if(isPromise){
        return new Promise(function(resolve, reject){
            var response = main(n);
            resolve(response);
        });
    }else{
        return main(n);
    }
    
}

factorial(true, 4).then(function(param){
    return findOddNumbers(false, param);
}).then(function(n){
    console.log(n);
})


let number = 5;
Promise.all([factorial(true, number), findOddNumbers(true, number)]).then(([factResult, oddNumbers]) => {
    console.log(`Factorial of ${number}`, factResult);
    console.log(`Odd numbers till ${number}`, oddNumbers);
}).catch((err) => {
    console.log(err); // If any promise fails then method doesn't calls and it comes here
}).then(()=> {
    console.log("We can still do anything if at all catch comes");
})


//Race return value of one promise from promises passed which resolves first
Promise.race([
    factorial(true, number), 
    findOddNumbers(true, number)
]).then((value) => console.log("Which ever call comes first", value));