
var aPromise = new Promise((resolve, reject) => {

    resolve("Promise Resolved");
});

function doSomeCalc(){
    let result = 10;
    return result;
}

function getAge(){
    return Promise.reject("Something Wrong happened");
}

async function Main(){
    let isResolved = await aPromise; 
    let calcDone = await doSomeCalc();
}

async function Main(){
    try{
        let isResolved = await aPromise; 
        let calcDone = await doSomeCalc();
        let isValidAge = await getAge();
    }catch(err){
        console.log(err); // prints something wrong happened
    }
}

async function Main(){
    try{
        const [name, age] = await Promise.all([
            promiseOne,
            promiseTwo
        ]);
    }catch(err){
        console.log(err); // prints if error occurs
    }
}