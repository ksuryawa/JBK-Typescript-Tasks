//8 Create Default parameter function of handloom shop which by default has 10% discount on each item, 
//also they offer total 20%discount during sale on MRP price. Display the discount price & Total selling price

var Handloom=(mrpPrice:number,discount:number=10)=>{
    var discountInRs=(discount/100)*mrpPrice;
    const sellingPrice=mrpPrice - discountInRs;

    console.log(
        `
        --------------------------------------
        MRP           :: ${mrpPrice}
        Discount (%)  :: ${discount}
        Discount (Rs) :: ${discountInRs}
        Selling Price :: ${sellingPrice}
        --------------------------------------
        `
    )
}

Handloom(1000,20);
Handloom(10000);