
// Custom User Field

Users.addField({
  fieldName: 'instagramUsername',
  fieldSchema: {
    type: String,
    optional: true,
    public: true,
    profile: true,
    editableBy: ["member", "admin"],
    template: "custom_user_profile_instagram"
  }
});

Users.addField({
  fieldName: 'Veryfied',
  fieldSchema: {
    type: Boolean,
    optional: true,
    defaultValue: false,
    editableBy: ["admin"]
  }
});


// Custom Category Fields

Categories.addField({
  fieldName: 'categoryType',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["admin"]
  }
});

Categories.addField({
  fieldName: 'facebookPage',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["admin"]
  }
});

Categories.addField({
  fieldName: 'twitterPage',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["admin"]
  }
});

Categories.addField({
  fieldName: 'aboutCategory',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["admin"]
  }
});

