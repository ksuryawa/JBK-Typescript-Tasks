//Find given number is Armstrong number or not
/*An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits. A number that is the sum of its own digits each raised to the power of the number of digits.
An Armstrong number of three digits is an integer where the sum of the cubes of its digits is equal to the number itself.*/
var sum = 0;
var rem;
var temp;
var CheckNumberIfArmstrongOrNot = function (num) {
    temp = num;
    console.log("Temp Number :: " + temp);
    while (num > 0) {
        rem = (num % 10);
        sum = sum + (rem * rem * rem);
        num = Math.floor(num / 10);
        console.log("---------------------");
        console.log("Rem :: " + rem);
        console.log("Sum :: " + sum);
        console.log("Number :: " + num);
    }
    if (temp == sum) {
        console.log(temp + " is an Armstrong Number");
    }
    else {
        console.log(temp + " is NOT an Armstrong Number");
    }
};
CheckNumberIfArmstrongOrNot(153);
//CheckNumberIfArmstrongOrNot(371);
