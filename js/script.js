$('.nav.navbar-nav > li').on('click', function (e) {
    e.preventDefault();
    $('.nav.navbar-nav > li').removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function () {
    $(".module-extended").hide();
    $(".module-more").on("click", function () {
        var txt = $(".module-extended").is(':visible') ? 'More..' : 'Less..';
        $(".module-more").text(txt);
        $(this).next('.module-extended').slideToggle(200);
    });
});

$(document).ready(function(){
$(".module-new").click(function(){
    $("#newprogmodal").modal('show');
});
});