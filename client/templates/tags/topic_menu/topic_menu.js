var getRoute = function () {
  FlowRouter.watchPathChange()
  var categoryName = this.data.slug;
  var currentQuery = _.clone(FlowRouter.current().queryParams);
  var newQuery = _.extend(currentQuery, {cat: categoryName});
  return FlowRouter.path("postsDefault", FlowRouter.current().params, newQuery);
};

Meteor.startup(function () {
  Template.topic_menu.helpers({
    hasCategories: function () {
      return Categories.find().count();
    },
    menuLabel: function () {
      return i18n.t("topic");
    },
    menuItems: function () {

      var activeCategories = FlowRouter.getQueryParam("cat");

      var defaultItem = [{
        route: "postsDefault",
        label: i18n.t("alltopics"),
        itemClass: "item-never-active",
        template: "defaultMenuItem"
      }];

      var menuItems = Categories.find({categoryType: "topic"}).fetch();

      menuItems = _.map(menuItems, function (category) {

        // if any of this category's children are included in the active categories, expand it
        var isExpanded = _.intersection(activeCategories, _.pluck(category.getChildren(), "slug")).length > 0;

        // is this category active?
        var isActive = _.contains(activeCategories, category.slug);

        return {
          route: getRoute,
          label: category.name,
          description: category.description,
          _id: category._id,
          parentId: category.parentId,
          isExpanded: isExpanded,
          isActive: isActive,
          itemClass: "category-"+category.slug,
          data: category
        };
      });

      return defaultItem.concat(menuItems);
    },
    expandLevel: function () {
      if (this.zone === "mobileNav") {
        return 0;
      } else {
        return 1;
      }
    },
    menuType: function () {
      if (this.zone === "mobileNav") {
        return 'collapsible';
      } else if (Settings.get('navLayout', 'top-nav') === 'top-nav') {
        return 'dropdown';
      } else {
        return 'collapsible';
      }
    }
  });
});
