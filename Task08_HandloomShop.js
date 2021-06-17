//8 Create Default parameter function of handloom shop which by default has 10% discount on each item, 
//also they offer total 20%discount during sale on MRP price. Display the discount price & Total selling price
var Handloom = function (mrpPrice, discount) {
    if (discount === void 0) { discount = 10; }
    var discountInRs = (discount / 100) * mrpPrice;
    var sellingPrice = mrpPrice - discountInRs;
    console.log("\n        --------------------------------------\n        MRP           :: " + mrpPrice + "\n        Discount (%)  :: " + discount + "\n        Discount (Rs) :: " + discountInRs + "\n        Selling Price :: " + sellingPrice + "\n        --------------------------------------\n        ");
};
Handloom(1000, 20);
Handloom(10000);
