"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var Task04_Property_1 = require("./Task04_Property");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(fname, lname, sal, hno, area, city, pin) {
        this.firstName = fname;
        this.lastName = lname;
        this.Salary = sal;
        this.property = new Task04_Property_1.PropertyDetails(hno, area, city, pin);
    }
    EmployeeDetails.prototype.Display = function () {
        console.log("\n        -------------Employement Details-------------\n        Employee First Name :: " + this.firstName + "\n        Employee Last Name  :: " + this.lastName + "\n        Employee Salary     :: " + this.Salary + "\n        -------------Property Details   -------------\n        House Number :: " + this.property.houseno + "\n        Area         :: " + this.property.area + "\n        City         :: " + this.property.city + "\n        Pin          :: " + this.property.pin + "\n        ");
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
