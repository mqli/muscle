define(['views/CommonView', 'tpl!tpls/user/list.tpl'],
  function(CommonView, template) {
    
    return CommonView.extend({
      template: template
    });
  });