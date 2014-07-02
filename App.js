define(["backbone",'views/LayoutView'], function (Backbone, LayoutView) {
  return  Backbone.Router.extend({
    initialize: function () {
      this.route(":module", "module");
      this.layout = new LayoutView({
        el: document.body
      });
    },
    module: function (module) {
      this.layout.load(module);
    }
  });
});