let bt1 = document.querySelector("#bt1");

bt1.onclick = (evt) =>{
    console.log("bt1 was click ");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);

    // let a=25;
    // a++;
    // console.log(a);
}