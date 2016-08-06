define(["jquery"], function($){
    var Cities = {
        cities : null,
        loadCities : function() {
            var self = this;
            var deferred = $.Deferred();
            $.ajax({
                url : "/getCities",
            }).success(function(cities) {
                self.cities = cities;
                deferred.resolve(cities);
            }).fail(function(err) {
                console.error(err);
                deferred.reject(err);
            });
            return deferred.promise();
        },
        
        getCities : function() {
            return this.cities;
        }
    };
    
    return Cities;
});