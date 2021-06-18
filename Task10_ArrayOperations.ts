
var a1:number[]=[10,21,4,5,6,8];
var a2=[3,4,5,6];

var a3=[];
var choice:String;

var ArrayOps=(choice)=>{
switch (choice) {
    case '+':
        console.log("-------- Addition --------")
        for (let i = 0; i < a1.length; i++) {
            a3[i]=a1[i]+a2[i];    
        }
        break;

    case '-':
        console.log("-------- Subtraction --------")
        for (let i = 0; i < a1.length; i++) {
            a3[i]=a1[i]-a2[i];    
        }
        break;    
    default:
        console.log("Incorrect Operation...")
        break;
}
    

console.log(a3);
}


ArrayOps("-");