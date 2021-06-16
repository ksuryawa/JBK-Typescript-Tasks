//2 Find out Greatest number of 3 number use if else statements .Make a class and method Implement
//logic in method (take hard coded data time being)
var GreatestNumber = /** @class */ (function () {
    function GreatestNumber(num1, num2, num3) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    }
    GreatestNumber.prototype.FindGreatestNumber = function () {
        if (this.num1 > this.num2) {
            if (this.num1 > this.num3) {
                console.log(this.num1 + " is greatest number");
            }
            else {
                console.log(this.num3 + " is greatest number");
            }
        }
        else {
            if (this.num2 > this.num3) {
                console.log(this.num2 + " is greatest number");
            }
            else {
                console.log(this.num3 + " is greatest number");
            }
        }
    };
    return GreatestNumber;
}());
var obj = new GreatestNumber(100, 102, 15);
obj.FindGreatestNumber();
