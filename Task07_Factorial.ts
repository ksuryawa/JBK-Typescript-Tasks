//7 Find factorial of given number
//Factoral value of 6 = 720
var fact=1;
var factorial=(num:number)=>{
for (let index = 1; index <= num; index++) {
   fact=fact*index;  
}
console.log(
    `
    -------------- With For loop --------------
    Factorial value of ${num} is :: ${fact}`
)

}
 
//factorial(6);


 var recFact=(num1:number)=>{
    var factValue = factNum(num1);
    console.log(
        `
        --------------With Recursive function --------------
        Factorial value of ${num1} is :: ${factValue}`
    )
 }


function factNum(num2: number) {
    if(num2>=1)
    {
        return factNum(num2-1)*num2; 
    }
    else{
        return 1;
    }
	        
}


//recFact(6);

var num1:number = 20;
var num2:number = 3;
var result:number = 0;
 

result = num1 + num2;
console.log("Sum: "+result); 
 
result = num1 - num2; 
console.log("Difference: "+result);
 
result = num1*num2;
console.log("Product: "+result);
 
result = num1/num2;
console.log("Quotient: "+Math.floor(result));
console.log("Quotient: "+result);
 
result = num1%num2;
console.log("Remainder: "+result);
 
num1++ 
console.log("Value of num1 after increment: "+num1);
 
num2-- 
console.log("Value of num2 after decrement: "+num2);