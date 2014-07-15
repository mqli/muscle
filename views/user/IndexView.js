define(['views/CommonView', 'tpl!tpls/user/index.tpl', 'views/user/SearchView', 'views/user/ListView'],
  function(CommonView, template, SearchView, ListView) {
    return CommonView.extend({
      template: template,
      initialize: function() {
        this.render();
        this.search = new SearchView({
          el: this.$el.find('.ms-search-view')
        }).render();
        this.list = new ListView({
          el: this.$el.find('.ms-list-view')
        }).render();
      }
    });
  });