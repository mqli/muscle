require.config({
  baseUrl: "",
  paths: {
      "jquery": "bower_components/jquery/dist/jquery",
      "underscore": "bower_components/underscore/underscore",
      "backbone": "bower_components/backbone/backbone"
  },
  waitSeconds: 15
});


require(["backbone","App"], function(Backbone, App) {
  new App()
  Backbone.history.start()
});