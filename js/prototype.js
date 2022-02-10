/*jshint browser: true, devel: true, jquery: true*/


$( document ).ready(function() {

// HIDE EMPTY BREADCRUMBS -------------------------------------------
$(".breadcrumb-link a").each(function(){
    var link_content = $(this).text();
    if (!link_content) {
        $(this).parent(".breadcrumb-link").addClass('hidden');
    }
 });
 
 
    
// ANCHOR MENU ------------------------------------------------------

if( $('#anchor-menu').length ) {
        
        console.log('Side menu present');
        var sections = {};
        $('#anchor-menu li').each(function(){
            var anchor_link = $(this).find('a').attr('href');
            var section_position = $(anchor_link).position();
            sections[anchor_link] = Math.round(section_position.top);
        });

        // Stickiness
        var make_sticky = function () {

            var menu_position = Math.round($('#body-copy .col-sm-3').position().top);
            var menu_width = $('#body-copy .col-sm-3').width();
            var menu_height = $('.side-menu').height();
            var footer_height = $('footer').height();
            var unfix = $(document).height() - footer_height - menu_height;

            $('.side-menu').css('width', menu_width);

            if ($(window).width() >= 575) {

                $(window).scroll(function () {
                    var scroll_position = $(window).scrollTop();

                    if (scroll_position >= menu_position && scroll_position < unfix) {
                        $('.side-menu').addClass('fixed');
                    } else {
                        $('.side-menu').removeClass('fixed');
                    }
                });
            } else if ($(window).width() < 575){
               $(window).scroll(function () {
                   $('.side-menu').removeClass('fixed');
                });
            }

        };

        make_sticky();

        $(window).resize(function(){

            if ($(window).width() < 575) {
                $('.side-menu').removeClass('fixed');
            }

            make_sticky();
        });

        // Current section
        $(window).scroll(function(){
            var current_section;

            for (var key in sections) {

                if ($(window).scrollTop() >= sections[key]) {
                    current_section = key;
                }
            }
            $('#anchor-menu li a').each(function(){
                $(this).removeClass('current');

                if ( $(this).attr('href') === current_section ) {
                    $(this).addClass('current');
                }
            });


        });

    }

    
    
// MAIN NAVIGATION
/*    
$(".nav-dropdown").on("click", function () {
    $(this).toggleClass('open');
    
    var menu = $(this).attr('id');
    var submenu ='#' + menu + '-submenu'; 
    
    if ($(this).hasClass('open')) {
        $(submenu).slideDown().css('display', 'flex');
    } else {
        $(submenu).slideUp();
    }
    
    
});
*/
    
// Close nav on click outside
/*    
$(document).mouseup(function(e) {
    var container = $('.submenu');
    
    
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        
        container.hide();
        
        $('.nav-dropdown').each(function(){
            $(this).removeClass('open');
        });
        
    }
});

*/  
    
    
    
                        
}); // end doc.ready

