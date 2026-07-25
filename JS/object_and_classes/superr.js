class person2 {   
    constructor(name,age )  {
        this.name = name ;
        this.age = age;
    }            
    printname1() {
        console.log("name : ",this.name);
    }
    printage1( ){
        console.log("age : ",this.age  );
    }
    hello1(){
        console.log("hello world");
    }
}

class worker1 extends person2 {
    constructor(salary ,name,age){
    super(name,age );
    this.salary = salary; 
    
    }
    
    printsalary1(){
        console.log("salary : ",this.salary);
    }
}


let obj1 = new worker1(1000000,"ravi",21);
