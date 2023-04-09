console.clear();

var num1 = 10;
var num2 = 20.3;
var string = num1.toString();

// toString(), it takes a number as input and returns  a string


/*console.log(num1.toString());
console.log(num2.toString());
console.log(typeof(num1));
console.log(typeof(string));*/




// parseInt(), it takes a string numeral as input and returns a number

var strNum1 = "10";
var strNum2 = "11.5";
var strNum3 = "ABC";


console.log(parseInt(strNum1));
console.log(parseInt(strNum2));
console.log(parseInt(strNum3));

// parseFLoat(), it takes a string numeral as an input and returns a floating number

console.log(parseFloat(strNum2));
console.log(parseFloat(strNum3));



//toFixed(), it takes floating number and rounds it off to given position

var strFloat = 87.987653;
console.log(strFloat.toFixed());
console.log(strFloat.toFixed(2));
console.log(strFloat.toFixed(5));
console.log(strFloat.toFixed(10));
