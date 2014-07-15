define(['views/CommonView','tpl!tpls/menu.tpl'], function (CommonView,template) {
  return CommonView.extend({
    events: {
      'click li': 'click'
    },
    template: template,
    initialize: function () {
      this.render();
    },
    click: function (event) {
      $(event.currentTarget).addClass('active').siblings().removeClass('active');
    }
  });
});