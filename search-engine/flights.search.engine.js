var cache = require("./flights.cache.repository");
var evaluator = require("./flights.evaluator");

var engine = {
    flights : null,
    cities : null,
    
    initEngine : function() {
        this.loadFlightsJson();
        cache.init();
    },
    
    loadFlightsJson : function() {
        var fs = require("fs");
        var path = require("path");
        var flightJson = JSON.parse(fs.readFileSync(path.join(__dirname + "/../" + "/model/flight.json")));
        this.cities = flightJson.cities;
        this.flights = flightJson.flights;
    }
};

module.exports = Object.create(engine);