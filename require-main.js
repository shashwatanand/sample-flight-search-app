requirejs.config({
    baseUrl : "public/js",
    
    paths : {
        main : "main",
        
        //Models
        flightsCollection : "models/flights.collection",
		flightComboModel : "models/flight.combo.model",
		flightModel : "models/flight.model",
		searchInputModel : "models/search.input.model",
		citiesProvider : "models/cities.provider",
        
        //Views
        //Helpers
        
        //Third-Party
        jquery : "third-party/jquery.min",
        bootstrap : "third-party/bootstrap.min",
        underscore : "third-party/underscore-min",
        backbone : "third-party/backbone-min",
        tpl : "third-party/tpl.min",
        jqueryui : "third-party/jquery-ui/jquery-ui"
    },
    
    shim : {
        jquery : {
            exports : "$"
        },
        
        bootstrap : {
            deps : ["jquery"]
        },
        
        jqueryui : {
            deps : ["jquery"],
            exports : "jqueryui"
        },
        
        underscore : {
            exports : "_"
        },
        
        backbone : {
            deps : ["jquery", "underscore"],
            exports : "backbone"
        }
    }
});


require(["main", "jqueryui", "bootstrap"], function(main, jquery, backbone){
    main.init();
});