// let promise =  new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("suceess");
//     // reject("some error");
// });


function getdata ( dataid , getnextdata){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("data : ", dataid);
            resolve("success");
            if(getnextdata){
                getnextdata();
            }
        }, 10000);
    } );
}

getdata(10);