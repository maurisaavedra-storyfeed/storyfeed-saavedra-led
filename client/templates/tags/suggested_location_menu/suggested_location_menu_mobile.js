var getRoute = function () {
  FlowRouter.watchPathChange()
  var categoryName = this.data.slug;
  var currentQuery = _.clone(FlowRouter.current().queryParams);
  var newQuery = _.extend(currentQuery, {cat: categoryName});
  return FlowRouter.path("postsDefault", FlowRouter.current().params, newQuery);
};

Meteor.startup(function () {
  Template.suggested_location_menu_mobile.helpers({
    hasCategories: function () {
      return Categories.find().count();
    },
    menuLabel: function () {
      return i18n.t("suggestions");
    },
    menuItems: function () {

      var activeCategories = FlowRouter.getQueryParam("cat");

      var defaultItem = [{
        route: "postsDefault",
        itemClass: "item-never-active",
        template: "defaultMenuItem"
      }];

      var menuItems = Categories.find({name: { $in: [ geoplugin_city(), geoplugin_region(), geoplugin_countryName() ] }}).fetch();

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
        return 1;
      } else {
        return 0;
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
