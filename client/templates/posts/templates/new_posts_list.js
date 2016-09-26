Template.new_posts_list.helpers({
  customTemplate: function () {
    var currentView = FlowRouter.getQueryParam("view") || Settings.get("defaultView", "top");
    var currentMenuItem = _.findWhere(Telescope.menuItems.viewsMenu, {name: currentView});
    return currentMenuItem && currentMenuItem.viewTemplate;
  },
  arguments: function () {
    return {
      terms: {
        view: 'new',
        limit: 10
      }
    };
  }
});