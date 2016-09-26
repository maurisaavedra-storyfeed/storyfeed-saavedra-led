// Set Access Rules for the third-party websites to add more rules here check http://docs.meteor.com/api/mobile-config.html
App.accessRule('*');

// Mobile Preferences
App.setPreference('BackgroundColor', '0xff0000ff')

// Allow OverScrolling
App.setPreference('DisallowOverscroll', false)

// Setting Preferences for Plugins in Cordova
App.setPreference('StatusBarOverlaysWebView', false);
App.setPreference('StatusBarStyle', 'lightcontent')
App.setPreference('StatusBarBackgroundColor','#171717')
