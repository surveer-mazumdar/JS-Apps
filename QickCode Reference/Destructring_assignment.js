// Array matching

var isOn = false;
var amount  = 10;

function setConfig([_isOn, _amount]){
    isOn = _isOn;
    amount = _amount;
}

setConfig([true, 20]);

// Object Matching

var config = {};

function setConfig({isOn, amount}){
    config = {isOn, amount};
}

setConfig({
    isOn: false,
    amount: 20
})


// Deep Object Maping

function getConfig(){
    return {
        isOn: true,
        amount: 10,
        servers: {
            a: true,
            b: false
        }
    }
}

var {
    isOn: myIson,
    amount: myAmount,
    servers: {
        a: myServerA,
        b: myServerB
    }
} = getConfig();

myIson; //true
myAmount; //10 etc
// This put values backward to new variavles


// Default values

var arr = [1]
var [amount, type= "text"] = arr
amount // 1
type// text


var [amount, type] = arr

type // undefined


//Object Default
const obj = {
    isOn: true,
    amount: 20
}

var {
    isOn: myIson,
    amount = 1000
} = obj;

amount // 20 but if obj dosn't have amount it amoount variable will be 1000
// Mid that = sign of default assignment
