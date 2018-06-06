$(document).ready(function() {
	
	// Pole Buttons
	$('#bazookaButton').on('click', function () {
		$("#cb-Bazooka").fadeIn();
		$('#cb-Wood, #cb-Monson').fadeOut();
	});

	$('#woodButton').on('click', function () {
		$("#cb-Wood").fadeIn();
		$('#cb-Bazooka, #cb-Monson').fadeOut();
	});

	$('#monsonButton').on('click', function () {
		$("#cb-Monson").fadeIn();
		$('#cb-Bazooka, #cb-Wood').fadeOut();
	});


	
});