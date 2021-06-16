//7 Find factorial of given number
//Factoral value of 6 = 720
var fact = 1;
var factorial = function (num) {
    for (var index = 1; index <= num; index++) {
        fact = fact * index;
    }
    console.log("\n    -------------- With For loop --------------\n    Factorial value of " + num + " is :: " + fact);
};
//factorial(6);
var recFact = function (num1) {
    var factValue = factNum(num1);
    console.log("\n        --------------With Recursive function --------------\n        Factorial value of " + num1 + " is :: " + factValue);
};
function factNum(num2) {
    if (num2 >= 1) {
        return factNum(num2 - 1) * num2;
    }
    else {
        return 1;
    }
}
//recFact(6);
var num1 = 20;
var num2 = 3;
var result = 0;
result = num1 + num2;
console.log("Sum: " + result);
result = num1 - num2;
console.log("Difference: " + result);
result = num1 * num2;
console.log("Product: " + result);
result = num1 / num2;
console.log("Quotient: " + Math.floor(result));
console.log("Quotient: " + result);
result = num1 % num2;
console.log("Remainder: " + result);
num1++;
console.log("Value of num1 after increment: " + num1);
num2--;
console.log("Value of num2 after decrement: " + num2);
