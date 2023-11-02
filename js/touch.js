$(document).ready(function () {

$('.burger').click(function (event) {
	
	$('.burger, .burger__item ').toggleClass('active');


  });
	
});


$(document).ready(function () {

$('.nav__link').click(function (event) {
	
	$('.burger, .burger__item ').removeClass('active');


  });
	
});


$(document).ready(function () {

$('.nav__link, .burger').click(function (event) {
	
	$('li').removeClass('active');


  });
	
});