$( document ).ready(function() {

// Hide empty breadcrumbs
$(".breadcrumb-link a").each(function(){
    var link_content = $(this).text();
    if (!link_content) {
        $(this).parent(".breadcrumb-link").addClass('hidden');
    }
 });
 
                        
}); // end doc.ready

