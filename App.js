define(["backbone",'LayoutView'], function (Backbone, LayoutView) {
  return  Backbone.Router.extend({
    initialize: function () {
      this.route(":module", "module");
      this.route("", "index");
    },
    module: function (module) {
      console.log(module)
    },
    index: function () {
      console.log('index');
      new LayoutView({
        el: document.body
      }).render()
    }
  });
});