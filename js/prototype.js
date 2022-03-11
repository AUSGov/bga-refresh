/*jshint browser: true, devel: true, jquery: true*/


$( document ).ready(function() {

// SEARCH INPUT
$(".search-container input").on('focus', function() {
    $(this).addClass('in-focus');
});
    
$(".search-container input").on('focusout', function() {
    $(this).removeClass('in-focus');
});
 
// Mobile search
$('.mobile-search').on('click', function(){
    $('#nav').slideUp();
    $('.mobile-nav').removeClass('open');
    
    $('#mobile-search').slideToggle();
    $(this).toggleClass('open');
});
    
   
    
// MAIN NAVIGATION

var toggleClass = function(clicked_elem, elems, elem_class){
     
    if ( $(clicked_elem).hasClass(elem_class) ) {
        
        $(elems).each(function(){
            $(this).removeClass(elem_class);
        });
        
    } else {
        $(elems).each(function(){
            $(this).removeClass(elem_class);
        });
        $(clicked_elem).addClass(elem_class);
    }
};  
 
$(".level-1").on("click", function () { 
    toggleClass($(this), $('.level-1'), 'open');
    
    $('.level-2').each(function(){
        $(this).removeClass('open');
    });
});
    
$(".level-2").on("click", function () {
    toggleClass($(this), $('.level-2'), 'open');
});

    
// Close nav on click outside  
$(document).mouseup(function(e) {
    
    var container = $('.nav');
    
    
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        
        $('.nav-dropdown').each(function(){
            $(this).removeClass('open');
        });
        $('.level-1').each(function(){
            $(this).removeClass('open');
        });
        
        if ($(window).width() < 575) {
            console.log('mobile');
        }
        
    }
    
    
});
    
    
// Mobile navigation
$('.mobile-nav').on('click', function(){
    $('#mobile-search').slideUp();
    $('.mobile-search').removeClass('open');
    
    $('#nav').slideToggle();
    $(this).toggleClass('open');
});

$(window).resize(function(){
    if ( $(window).width() >= 767 ) {
        $('#mobile-search').hide();
        $('.mobile-search').removeClass('open');
    }
});
    

    
// BREADCRUMBS ------------------------------------------------------

// Hide empty breadcrumbs
$(".breadcrumb-link a").each(function(){
    var link_content = $(this).text();
    if (!link_content) {
        $(this).parent(".breadcrumb-link").remove();
    }
 });

// Add class for mobile view
$('li.breadcrumb-link').last().addClass('mobile-breadcrumb');
 
 

    
// ANCHOR MENU ------------------------------------------------------

if( $('#anchor-menu').length ) {
        
        console.log('Side menu present');
        var sections = {};
        $('#anchor-menu li').each(function(){
            var anchor_link = $(this).find('a').attr('href');
            var section_position = $(anchor_link).position();
            sections[anchor_link] = Math.round(section_position.top) - 16;
        });

        // Stickiness
        var make_sticky = function () {

            var menu_position = Math.round($('.body-copy .col-sm-3').position().top);
            var menu_width = $('.body-copy .col-sm-3').width();
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

    
    
    
// CHAT BUTTON ------------------------------------------------------

$('.chat.closed').hover(
    function() {
        if ($(window).width() > 767) {
            $('.chat-closed-msg').addClass( "show" );
        }
    }, 
    function() {
        if ($(window).width() > 767) {
            $('.chat-closed-msg').removeClass( "show" );
        }
  }
);
$('.chat.closed').on('click', function(){
    if ( $(window).width() < 767) {
        $('.chat-closed-msg').toggleClass("show");
    }
});

    
                        
}); // end doc.ready

