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
        var fs = require('fs');
        var path = require('path');
    }
};

module.exports = Object.create(engine);