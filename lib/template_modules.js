// activate module to the hero zone for special announcements
//Telescope.modules.add("hero", {
//  template: 'hello',
//  order: 1
//});



// add location_menu template to the nav zone
//Telescope.modules.add("primaryNav", {
//  template: 'location_menu',
//  order: 4
//});

// add location_menu and source_menu template to the sideMenu
Telescope.modules.add("sideBar", [
    {
    template: 'new_posts_list',
    order: 1    
    }
]);

// add location_menu and source_menu template to the mobile Nav Menu
Telescope.modules.add("mobileNav", [
    { 
    template: 'suggested_location_menu_mobile',
    order: 2
    },
    {
    template: 'topic_menu_mobile',
    order: 3
    },
    {
    template: 'location_menu_mobile',
    order: 5
    }
]);

// add views_menu mobile
Telescope.modules.add("postsListTop", {
  template: "custom_views_menu_mobile",
  order: 2
});

// Remove Categories menu from PrimaryNav and mobileNav
Telescope.modules.remove("primaryNav", "categories_menu");
Telescope.modules.remove("mobileNav", "categories_menu");

// change the location of footer

Telescope.modules.add("sideBar", [
  {
    template: "custom_footer_code",
    order: 10
  }
]);

Telescope.modules.remove("footer", "footer_code");



