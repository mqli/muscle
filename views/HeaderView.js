define(['views/CommonView','tpl!tpls/header.tpl'], function (CommonView,template) {
  return CommonView.extend({
    initialize: function () {
      this.render();
    },
    template: template
  });
});