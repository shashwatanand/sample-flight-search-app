var express = require("express");
var application = express();
application.use(express.static(__dirname));
application.listen(5001, function() {
    console.log("Server start listening on port " + 5001);
});

var flightEngine = require("./search-engine/flights.search.engine");
flightEngine.initEngine();

application.get("/getCities", function(request, response) {
    response.send(flightEngine.getCities());
})