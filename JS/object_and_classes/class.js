class car {
    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }

    setbrand(brand){
        this.brand = brand;
    }
}


let BMW = new car();
BMW.setbrand("BMW 6");

BMW.start();
BMW.stop();