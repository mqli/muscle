require.config({
  baseUrl: "",
  paths: {
      "jquery": "bower_components/jquery/dist/jquery",
      "underscore": "bower_components/underscore/underscore",
      "backbone": "bower_components/backbone/backbone",
      "tpl": "bower_components/requirejs/tpl",
      "text": "bower_components/requirejs/text"
  },
  waitSeconds: 15
});


require(["backbone","routers/AppRouter"], function(Backbone, AppRouter) {
  new AppRouter()
  Backbone.history.start();
});