define(["backbone"], function () {
  return  Backbone.Router.extend({
    initialize: function () {
      this.route(":module", "module");
    },
    module: function (module) {
      console.log(module)
    }
  });
});