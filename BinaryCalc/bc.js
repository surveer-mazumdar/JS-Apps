
var BcCalc = function () {

    BcCalc.prototype.convertBinaryToValue = (binary) => {
        /* 
        Pick a binary number. Let's use 101. Here is the same method but in a slightly different format. You may find this format easier to understand.
        101= (1X2) power of 2 + (0X2) power of 1 + (1X2) power 0
        101= (2X2) + (0X0) + (1)
        101= 4 + 0 + 1
        101= 5
        The 'zero' is not a number, but its place value must be noted.
        */
        if (typeof binary == "number") {
            binary = binary.toString();
        }

        let bArray = binary.split("");
        bArray.reverse();
        let bArrayCalc = bArray.map((elem, index) => {
            //if 0 return 0 otherwise pow 0 0 = 1 making issue
            return (parseInt(elem)) ? Math.pow((parseInt(elem) * 2), index) : 0;
        });

        let value = bArrayCalc.reduce((total, currentVal) => {
            return total + currentVal;
        }, 0); //Initial value 0 for total

        return value;
    }

    BcCalc.prototype.convertBinaryToValueDefault = (binary) => {
        if (typeof binary == "number") {
            binary = binary.toString();
        }
        return parseInt(binary, 2);// returns binary
    }

    BcCalc.prototype.convertDecimalToBinaryDefault = (decimal) => {
        return parseInt(decimal).toString(2);
    }

    BcCalc.prototype.convertDecimalToBinary = (decimal) => {
        let dividend = decimal;
        let remainders = [];
        while (dividend >= 2) {
            remainders.push((dividend % 2));
            dividend = parseInt(dividend / 2);
            if (dividend == 2) {
                remainders.push(0);
                remainders.push(1);
                break;
            }
        }

        return remainders.reverse().join("");
    }

    BcCalc.prototype.calculate = (resString) => {

        let resArray = resString.split("");
        this.total = 0;
        this.operators = ["+", "-", "*", "/"];
        this.currentBinaryElem = "";
        this.decimalOpsArray = [];
        resArray.forEach((char, index) => {
            if (this.operators.indexOf(char) >= 0) {//means operator found
                let decimal = this.convertBinaryToValueDefault(this.currentBinaryElem);
                if (typeof decimal == "number") {
                    this.decimalOpsArray.push(decimal);
                    this.decimalOpsArray.push(char);
                    this.currentBinaryElem = "";
                }
            } else {
                this.currentBinaryElem += char;
            }
            if (index == resArray.length - 1) {
                let decimal = this.convertBinaryToValueDefault(this.currentBinaryElem);
                this.decimalOpsArray.push(decimal);
                this.currentBinaryElem = "";
            }
        });

        let result = eval(this.decimalOpsArray.join(""));
        let resultBinary= this.convertDecimalToBinaryDefault(result);
        document.getElementById("res").innerHTML = resultBinary;
    }

}

var btnsActivity = function () {

    btnsActivity.prototype.clearResult = () => {
        document.getElementById("res").innerHTML = "";
    }

    btnsActivity.prototype.calculate = () => {
        var calc = new BcCalc();
        var resString = document.getElementById("res").innerHTML;
        calc.calculate(resString);
    }

    btnsActivity.prototype.addBtnContent = (event) => {
        let currentValue = document.getElementById("res").innerHTML;
        currentValue += event.target.innerHTML;
        document.getElementById("res").innerHTML = currentValue;
    }

    btnsActivity.prototype.addEventListener = () => {
        var domObjs = document.querySelectorAll("button.changeRes");

        domObjs.forEach((domObj) => {
            domObj.addEventListener("click", this.addBtnContent);
        });

        document.getElementById("btnClr").addEventListener("click", this.clearResult, this);

        document.getElementById("btnEql").addEventListener("click", this.calculate, this);
    }

}

var btns = new btnsActivity();
btns.addEventListener();