define(['views/CommonView', 'tpl!tpls/user/search.tpl'],
  function(CommonView, template) {
    return CommonView.extend({
      template: template
    });
  });