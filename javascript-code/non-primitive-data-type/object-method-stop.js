const car = new Object({
    name:"Suzuki",
    color:"black",
    speed:50
    });
    function stop(){
        console.log("second method of car");   
    }
    car.stop=stop;
    console.log(car);