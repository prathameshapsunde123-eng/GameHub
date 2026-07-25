class person1 {                //parent 
    printname(name) {
        console.log("name : ",name);
    }
    printage(age ){
        console.log("age : ",age  );
    }
    hello(){
        console.log("hello world");
    }
}

class worker extends person1 {       // child class
    printsalary(salary){
        console.log("salary : ",salary);
    }
}


let obj = new worker();
obj.printage(19);
obj.printname("ravi");
obj.printsalary(50000);