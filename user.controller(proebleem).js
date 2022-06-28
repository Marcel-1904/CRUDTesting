exports.create = async (req, res) => {

    var counter = 0;
    var cars = [];
    var carCount = [];

    for(var i = 0; i < req.body.length; i++){
        
        if(!cars.includes(req.body[i].car)){
            cars.push(req.body[i].car);
        }

        var index = cars.indexOf(req.body[i].car);

        //Hier is wat ek sover het om cars in een array te sit.
        //EK het nou die index van die req.body[i].car waarde wat voorkom in die 
        //car array


        //As ek reg verstaan moet ek nou deur die indexes gaan en elke instance
        //van elke value optel

        //Askuus ek is al deur soveel maniere ek weet nie meer wat ek al proebeer het
        //nie
    }  


    console.log(cars);
    console.log(carCount);

    res.status(200).send({message: i});
} 