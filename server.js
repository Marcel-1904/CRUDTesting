var express = require('express');
var app = express();
const bodyParser = require("body-parser");
app.use(express.json());

require("./routes/user.routes")(app);

var server = app.listen(8081, function(){
    var host = server.address().addresss;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
})