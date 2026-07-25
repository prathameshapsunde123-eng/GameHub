function hello(){
    console.log("hello world");
}

function fact(n){
    let factorial =1;
    for(let i =1;i<=n;i++){
        factorial*=i;
    }
    return factorial;
}
hello();
console.log(fact(4));