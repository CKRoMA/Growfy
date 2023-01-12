
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__content').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

//add class when page loaded
window.addEventListener('load', () => {
	const loaderFon = document.documentElement.classList.add("loaded");

});
