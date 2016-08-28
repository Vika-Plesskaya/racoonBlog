jQuery(document).ready(function(){
	var width = $(document).width();
	if (width < 960 && width > 480) {
		$('aside h3').on('click',function(){
			$('aside p').hide();
			$('aside h3 span').hide();
			$(this).find('span').show();
			$(this).next().show();
		});
	}

    if (width < 480) {
        $('aside h3').on('click',function(){
            $('aside p').hide();
            $('header menu').hide();
            $('aside ul').hide();
            $('aside h3 span').hide();
            $(this).find('span').show();
            $(this).next().show();
        });

        $('aside h3').on('click',function(){
            $('aside ul').hide();
            $('header menu').hide();
            $('aside h3 span').hide();
            $(this).find('span').show();
            $(this).next().show();
        });
        $('header div span').on('click',function(){
            $('header menu').hide();
            $('aside p').hide();
            $('aside ul').hide();
            $('header div menu').hide();
            $(this).find('menu').show();
            $(this).next().show();
        });
    }

    $(document).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>87) {
         $('body').addClass('fixed');
     }
     else {
         $('body').removeClass('fixed');
     }
 });
});

function menuClassActive(menuItemLink) {
    var menuItems = document.getElementsByClassName("menu-wrapper");
    var menuItemsLinks = menuItems[0].getElementsByTagName("a");
    for (var i = 0; i < menuItemsLinks.length; i++) {
        menuItemsLinks[i].className = null;
    }
    menuItemLink.className = "active";
}