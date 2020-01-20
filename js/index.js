$(function() {
	// Add Border to The Navbar on Scroll and Remove it on Top
	$(window).scroll(function() {
		if ($(window).scrollTop() > 1) {
			$(".navbar").addClass("border-bottom border-danger");
		}
		else {
			$(".navbar").removeClass('border-bottom border-danger')
		}
	});
});