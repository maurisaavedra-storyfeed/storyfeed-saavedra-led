Template.announcement_box.helpers({
  name: function () {
    if (Meteor.user()) {
      return Users.getDisplayName(Meteor.user());
    } else {
      return "";
    }
  }
});
