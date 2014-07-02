define(["views/CommonView",'tpl!/tpls/layout.tpl','views/MenuView'], function (CommonView,template,MenuView) {
  return  CommonView.extend({
    template: template,
    initialize: function () {
      console.log('initialize laylout');
      this.render();
    },
    render: function () {
      this.$el.html(this.template());
      this.menu = new MenuView({
        el: this.$el.find('.menu')
      });
    },
    load: function (view) {
      console.log(view);
      var el = this.$el.find('.content');
      require(['views/' + view + 'View'],function (View) {
        new View({
          el: el
        })
      })
    }
  });
});