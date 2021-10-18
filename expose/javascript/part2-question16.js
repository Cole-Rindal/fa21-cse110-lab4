let statistics = {
    redCars: 21,
    blueCars: 45,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for ( cars in statistics ){
    if( cars.substring(0, 1) == 'r' || statistics[cars] % 2 == 1 ){
        console.log(`${cars}: ${statistics[cars]}`);
    }
}