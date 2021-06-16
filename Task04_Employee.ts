import { PropertyDetails } from "./Task04_Property";

export class EmployeeDetails
{
    firstName:string;
    lastName:string;
    Salary:number;
    property:PropertyDetails;

    constructor(fname:string,lname:string,sal:number,hno:number,area:string,city:string,pin:number)
    {
        this.firstName=fname;
        this.lastName=lname;
        this.Salary=sal;
        this.property=new PropertyDetails(hno,area,city,pin)
    }

    Display()
    {
        console.log(`
        -------------Employement Details-------------
        Employee First Name :: ${this.firstName}
        Employee Last Name  :: ${this.lastName}
        Employee Salary     :: ${this.Salary}
        -------------Property Details   -------------
        House Number :: ${this.property.houseno}
        Area         :: ${this.property.area}
        City         :: ${this.property.city}
        Pin          :: ${this.property.pin}
        `)
    }
}