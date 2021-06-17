// 9 Find the Sum of all Digits. e.g num=1234 & output will be 10
var sum = 0;
var rem, temp;
var SumOfAllDigits = function (num) {
    temp = num;
    while (num > 0) {
        rem = (num % 10);
        sum = sum + rem;
        num = Math.floor(num / 10);
    }
    console.log("Number :: " + temp + " Sum of the digits of Given Number :: " + sum);
};
SumOfAllDigits(1234);
