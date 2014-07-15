define(["backbone", 'views/user/IndexView'], function(Backbone, IndexView) {
  return Backbone.Router.extend({
    routes: {
      "user": "index"
    },
    initialize: function(layout) {
      if (!layout) throw new Error('need layout view');
      this.layout = layout;
    },
    index: function (){
      new IndexView({
        el: this.layout.$el.find('.ms-content')
      });
    }
  });
});