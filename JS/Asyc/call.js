function sum(a,b,mulCallback){
    console.log("sum : ",a+b);
    mulCallback(a,b);
}

function mul(a,b){
    console.log("product : ",a*b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b,mul);
}

calculator(10,10,sum);