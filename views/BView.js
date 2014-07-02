define(['views/CommonView','tpl!tpls/b.tpl'], function (CommonView,template) {
  return CommonView.extend({
    initialize: function () {
      this.render();
    },
    template: template
  });
});