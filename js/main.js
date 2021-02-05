$(document).ready(function () {

	let tabsItem = $('.tabs-item');

	tabsItem.on('click', function (event) {
		event.preventDefault();
		let activeContent = $(this).attr('href');
		$('.visible').toggleClass('visible');
		$(activeContent).toggleClass('visible');
		$('.tabs-item-active').toggleClass('tabs-item-active')
		$(this).toggleClass('tabs-item-active')
	})


	$('.movie-info').addClass('hidden').viewportChecker({
		classToAdd: 'visibility animated fadeInLeft',
		offset: 100
	});

	$('.short-info').addClass('hidden').viewportChecker({
		classToAdd: 'visibility animated fadeInLeft',
		offset: 100
	});

	$('.tabs').addClass('hidden').viewportChecker({
		classToAdd: 'visibility animated fadeInRight delay-1s',
		offset: 100
	});

	$('.subscribe').addClass('hidden').viewportChecker({
		classToAdd: 'visibility animated fadeInRight delay-1s',
		offset: 100
	});



});