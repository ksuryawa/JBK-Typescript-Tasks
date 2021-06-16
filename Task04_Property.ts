export class PropertyDetails
{
    houseno:number;
    area:string;
    city:string;
    pin:number;

    constructor(hno:number,area:string,city:string,pin:number)
    {
        this.houseno=hno;
        this.area=area;
        this.city=city;
        this.pin=pin;
    }

    /*
    getHouseNo()
    {
        return this.houseno;
    }

    setHouseNo()
    {
        console.log(this.houseno)
    }

    getArea()
    {
        return this.area;
    }

    setArea()
    {
        console.log(this.area)
    }

    getCity()
    {
        return this.city;
    }

    setCity()
    {
        console.log(this.city)
    }

    getPin()
    {
        return this.pin;
    }

    setPin()
    {
        console.log(this.pin)
    }
    */
}