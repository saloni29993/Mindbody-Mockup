$(document).ready(function () {
    $(".module-extended").hide();
    $(".module-more").on("click", function () {
        var txt = $(".module-extended").is(':visible') ? 'More..' : 'Less..';
        $(".module-more").text(txt);
        $(this).next('.module-extended').slideToggle(200);
    });

    $(".module-new-section").click(function(){
    $("#newprogmodal").modal('show');
	});

	$('#sub-navigation ul').hide();

	$('#set1').show();


});

// $('.nav.navbar-nav > li').on('click', function (e) {
//     e.preventDefault();
//     $('.nav.navbar-nav > li').removeClass('active');
//     $(this).addClass('active');
// });


$('#navigation a').on('click', function(e){
	e.preventDefault();

	var submenu_id = $(this).attr('href');

	//console.log(submenu_id);

	$('#sub-navigation ul').hide();

	$(submenu_id).show();
});