define(["jquery", "backbone"], 
       function($, Backbone){
    
    var HomeView = {
        initView : function(inputModel) {
            var homeViewClass = this._getHomeView();
            new homeViewClass(inputModel);
        },
        
        _getHomeView : function() {
            var HomeView = Backbone.View.extend({
                el : $("#mainRegion"),
                itemView : null,
                model : null,
                
                initialize : function(inputModel) {
                    this.model = inputModel;
                    this.itemView = require("tpl!templates/home.view.tpl");
                    this.render();
                    this.renderSubViews();
                },
                
                render : function() {
                    var view = this.itemView({});
                    $(this.el).append(view);
                },
                
                renderSubViews : function() {
                    
                },
            });
            return HomeView;
        }
    };
    return HomeView;
});