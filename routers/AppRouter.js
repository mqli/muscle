define(["backbone", 'views/LayoutView'], function(Backbone, LayoutView) {
  return Backbone.Router.extend({
    initialize: function() {
      this.route(":module", "module");
      this.route(":module/*sub", "module");
      this.layout = new LayoutView({
        el: document.body
      });
    },
    module: function(module) {
      var self = this;
      require(['routers/' + module.substring(0,1).toUpperCase() + module.substring(1) + 'Router'], function(Router) {
        //异步加载router后，触发一对应的函数
        new Router(self.layout).navigate('/').navigate(module, {trigger: true});
      });
    }
  });
});