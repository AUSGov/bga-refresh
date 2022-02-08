$( document ).ready(function() {

// HIDE EMPTY BREADCRUMBS -------------------------------------------
$(".breadcrumb-link a").each(function(){
    var link_content = $(this).text();
    if (!link_content) {
        $(this).parent(".breadcrumb-link").addClass('hidden');
    }
 });
 
 
    
// ANCHOR MENU ------------------------------------------------------

// Current section

    
                        
}); // end doc.ready

