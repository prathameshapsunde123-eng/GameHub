function getdata(dataid,getNextData) {
    setTimeout(() => {
        console.log("data : " ,dataid );
        if(getNextData){
            getNextData();
        };
        }, 2000);
}

getdata(10 ,() => {
    getdata(20);
});