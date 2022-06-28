exports.create = async (req, res) => {
    const firstUser = req.body[0];
    const secondUser = req.body[1];
    const thirdUser = req.body[2];

    var twentyToThirty = 0;
    var thirthyToThirtyfive = 0;
    var aboveThirtyfive = 0;

    var raptorCount = 0;
    var miniCount = 0;
    var bmwCount = 0;
    var nissanCount = 0;
    var golfCount = 0;

    var longestName = "";

    for(var i = 0; i < req.body.length; i++){

        if(req.body[i].age >= 20 && req.body[i].age <= 30){
            twentyToThirty++;
        }

        if(req.body[i].age > 30 && req.body[i].age <=35){
            thirthyToThirtyfive++;
        }

        if(req.body[i].age > 35){
            aboveThirtyfive++;
        }
        
        if(req.body[i].car === "Raptor"){
            raptorCount++;
        }

        if(req.body[i].car === "Golf"){
            golfCount++;
        }

        if(req.body[i].car === "Mini"){
            miniCount++;
        }

        if(req.body[i].car === "BMW"){
            bmwCount++;
        }

        if(req.body[i].car === "Nissan"){
            nissanCount++;
        }

        if(req.body[i].name.length > longestName.length){
            longestName = req.body[i].name;
        }
        
    }
    console.log("Age between 20 and 30: " + twentyToThirty);
    console.log("Age between 30 and 35: " + thirthyToThirtyfive);
    console.log("Age 35 and above: " + aboveThirtyfive);

    console.log("");

    console.log("Amount of Raptors: " + raptorCount);
    console.log("Amount of Golf: " + golfCount);
    console.log("Amount of Mini: " + miniCount);
    console.log("Amount of BMW: " + bmwCount);
    console.log("Amount of Nissan: " + nissanCount);

    console.log("");

    console.log("Longest name is: " + longestName);

    
    res.status(200).send({message: i});
}