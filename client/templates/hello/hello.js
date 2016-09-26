Template.hello.helpers({
  name: function () {
    if (Meteor.user()) {
      return Users.getDisplayName(Meteor.user());
    } else {
      return "";
    }
  }
});
var sec = 30
var timer = setInterval(function() { 
  $('#hideMsg span').text(sec--);
   if (sec == -1) {
      $('#hideMsg').slideUp('slow');
      clearInterval(timer);
   } 
}, 500);
