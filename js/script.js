$(document).ready(function () {
    $(".module-extended").hide();
	$('#sub-navigation ul').hide();
	$('#set1').show();
});

$('#navigation a').on('touchstart click', function(e){
	e.preventDefault();
	var submenu_id = $(this).attr('href');
	$('#sub-navigation ul').hide();
	$(submenu_id).show();
});

$(".module-more").on("click", function () {
        var txt = $(".module-extended").is(':visible') ? 'More' : 'Less';
        $(this).text(txt);
        $(this).prev('.module-extended').slideToggle(200);
});

$(".module-new-section").click(function(){
	console.log("checking");
    $("#newprogmodal").modal('show');
});