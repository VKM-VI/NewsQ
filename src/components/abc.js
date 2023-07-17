$(document).ready(function(){
    $('li').click(function() {
    $("li.active").removeClass("active");
    $(this).addClass('active');
})
