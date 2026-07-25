const person ={
    name :"prathamesh",
    village : "jambutake",
    age : 19,
    phone_no : 7387810705,

    printage : function() {
        console.log("age : ",this.age);
    } ,

    printname() {
        console.log("name : ", this.name)
    },
}

const xyz = {
    // age : 21,
    printage() {
        console.log("age : ",this.age);
    },
}

xyz.__proto__ = person;