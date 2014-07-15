define(['tpl!/tpls/layout.tpl',"views/CommonView", 'views/MenuView', 'views/HeaderView'],
  function(template,CommonView,  MenuView, HeaderView) {
    return CommonView.extend({
      template: template,
      initialize: function() {
        console.log('initialize laylout');
        this.render();
      },
      render: function() {
        this.$el.html(this.template());
        this.menu = new MenuView({
          el: this.$el.find('.ms-menu')
        });
        this.header = new HeaderView({
          el: this.$el.find('.ms-header')
        })
      }
    });
  });