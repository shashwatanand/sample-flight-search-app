var _ = require("underscore");

var repo = {
    cache : null,
    
    init : function() {
        this.cache = {};
    },
    
    isCache : function(key) {
        if(_.has(this.cache, key)) {
            return true;
        }
        return false;
    },
    
    put : function(key, value) {
        this.cache[key] = value;
    },
    
    get : function(key) {
        return this.cache[key];
    }
};

module.exports = Object.create(repo);