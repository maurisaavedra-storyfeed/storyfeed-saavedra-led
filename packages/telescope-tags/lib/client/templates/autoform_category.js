AutoForm.addInputType("bootstrap-category", {
  template: "afCategory",
  valueOut: function () {
    var categories = [];
    this.find(":checked").each(function() {
      categories.push($(this).val());
    });
    return categories;
  }
});

// -------- Reference Template --------- //

Template.afCategory_bootstrap3.helpers({
  menuItems: function () {

    var selectedCategoriesIds = this.value;
    var prefilledCategoriesIds = _.pluck(Session.get("prefilledCategories"), "_id");

    selectedCategoriesIds = _.compact(prefilledCategoriesIds.concat(selectedCategoriesIds));

    var menuItems = _.map(Categories.find({}, {sort: {order: 1, name: 1}}).fetch(), function (category) {
      var isSelected = _.contains(selectedCategoriesIds, category._id);
      return {
        _id: category._id,
        parentId: category.parentId,
        template: "category_input_item",
        label: category.name,
        isSelected: isSelected,
        isExpanded: isSelected,
        itemClass: "category-"+category.slug,
        data: category
      };
    });
    return menuItems;
  },
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    return atts;
  }
});

Template.afCategory_bootstrap3.onDestroyed(function () {
  Session.set("prefilledCategories", null);
});

Template.afCategory_bootstrap3.events({
  "click .category-input-item label": function (e) {
    // only trigger on actual checkbox' click event, and if the checkbox has just been checked
    if ($(e.toElement).is("input") && $(e.toElement).prop("checked")) {
      // when marking a category as checked, check all checkboxes of all parent nodes as well
      $(e.currentTarget).parentsUntil('.category-input', ".menu-item").find(">.menu-item-wrapper input:checkbox").prop("checked", true);
    }
  }
});


// -------- Calling Functions Geolocation  --------- //


Template.afCategory_suggested_location_geoplugin.helpers({
  geopluginCountry: function () { 
    return geoplugin_countryName(); 
  },
  geopluginCity: function () { 
    return geoplugin_city(); 
  },
  geopluginCountryCode: function () { 
    return geoplugin_countryCode(); 
  },
  geopluginRegion: function () { 
    return geoplugin_region(); 
  },
  geopluginContinentCode: function () { 
    return geoplugin_continentCode(); 
  }
});

// -------- Suggested Locations Menu Geolocation --------- //

Template.afCategory_suggested_location_geoplugin.helpers({
  menuItems: function () {

    var selectedCategoriesIds = this.value;
    var prefilledCategoriesIds = _.pluck(Session.get("prefilledCategories"), "_id");

    selectedCategoriesIds = _.compact(prefilledCategoriesIds.concat(selectedCategoriesIds));

    var menuItems = _.map(Categories.find({name: { $in: [ geoplugin_city(), geoplugin_region(), geoplugin_countryName() ] }}).fetch(), function (category) {

      var isSelected = _.contains(selectedCategoriesIds, category._id);
      return {
        _id: category._id,
        template: "category_input_item",
        label: category.name,
        isSelected: isSelected,
        isExpanded: isSelected,
        itemClass: "category-"+category.slug,
        data: category
      };
    });
    return menuItems;
  },
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    return atts;
  }
});


Template.afCategory_suggested_location_geoplugin.onDestroyed(function () {
  Session.set("prefilledCategories", null);
});

Template.afCategory_suggested_location_geoplugin.events({
  "click .category-input-item label": function (e) {
    // only trigger on actual checkbox' click event, and if the checkbox has just been checked
    if ($(e.toElement).is("input") && $(e.toElement).prop("checked")) {
      // when marking a category as checked, check all checkboxes of all parent nodes as well
      $(e.currentTarget).parentsUntil('.category-input', ".menu-item").find(">.menu-item-wrapper input:checkbox").prop("checked", true);
    }
  }
});




// -------- Location Menu --------- //


Template.afCategory_location.helpers({
  menuItems: function () {

    var selectedCategoriesIds = this.value;
    var prefilledCategoriesIds = _.pluck(Session.get("prefilledCategories"), "_id");

    selectedCategoriesIds = _.compact(prefilledCategoriesIds.concat(selectedCategoriesIds));

    var menuItems = _.map(Categories.find({categoryType: "location"}).fetch(), function (category) {

      var isSelected = _.contains(selectedCategoriesIds, category._id);
      return {
        _id: category._id,
        parentId: category.parentId,
        template: "category_input_item",
        label: category.name,
        isSelected: isSelected,
        isExpanded: isSelected,
        itemClass: "category-"+category.slug,
        data: category
      };
    });
    return menuItems;
  },
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    return atts;
  }
});

Template.afCategory_location.onDestroyed(function () {
  Session.set("prefilledCategories", null);
});

Template.afCategory_location.events({
  "click .category-input-item label": function (e) {
    // only trigger on actual checkbox' click event, and if the checkbox has just been checked
    if ($(e.toElement).is("input") && $(e.toElement).prop("checked")) {
      // when marking a category as checked, check all checkboxes of all parent nodes as well
      $(e.currentTarget).parentsUntil('.category-input', ".menu-item").find(">.menu-item-wrapper input:checkbox").prop("checked", true);
    }
  }
});



// -------- Topic Menu --------- //



Template.afCategory_topic.helpers({
  menuItems: function () {

    var selectedCategoriesIds = this.value;
    var prefilledCategoriesIds = _.pluck(Session.get("prefilledCategories"), "_id");

    selectedCategoriesIds = _.compact(prefilledCategoriesIds.concat(selectedCategoriesIds));

    var menuItems = _.map(Categories.find({categoryType: "topic"}).fetch(), function (category) {

      var isSelected = _.contains(selectedCategoriesIds, category._id);
      return {
        _id: category._id,
        parentId: category.parentId,
        template: "category_input_item",
        label: category.name,
        isSelected: isSelected,
        isExpanded: isSelected,
        itemClass: "category-"+category.slug,
        data: category
      };
    });
    return menuItems;
  },
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    return atts;
  }
});

Template.afCategory_topic.onDestroyed(function () {
  Session.set("prefilledCategories", null);
});

Template.afCategory_topic.events({
  "click .category-input-item label": function (e) {
    // only trigger on actual checkbox' click event, and if the checkbox has just been checked
    if ($(e.toElement).is("input") && $(e.toElement).prop("checked")) {
      // when marking a category as checked, check all checkboxes of all parent nodes as well
      $(e.currentTarget).parentsUntil('.category-input', ".menu-item").find(">.menu-item-wrapper input:checkbox").prop("checked", true);
    }
  }
});




