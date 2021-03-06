/* scripts ready */
$(document).ready(function(){

	$(window).on('resize', function(){
		menuDown();
	});

	/* функция скрытия мобильного меню */
	menuDown = function(){
		$('#hamburger').removeClass('is-active');
		$('#menu').slideUp();
	};

	/* слайдер */
	$('.owl-review').owlCarousel({
		items: 1,
		center: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 600,
	});

	//E-mail Ajax Send
	$("#callback", "#callback2").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 500);
		});
		return false;
	});

	/* всплывающая форма обратной связи */
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
	});

	/* открытие мобильного меню при нажатии */
	$('#hamburger').click(function(){
		$(this).toggleClass('is-active');
		$('#menu').slideToggle();
		$('#menu .menu__item').click(function(){
			$('#menu').slideUp();
		});
	});

	var scrollLink = function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: (top - 60)}, 1000);
	};

	/* плавный переход по ссылкам  */
	$("#top").click(scrollLink);
	$("#map").click(scrollLink);
	$('.menu__item a').click(scrollLink);

	/* функция для активации меню при скроле */
	$(window).scroll(function(){

		menuDown(); /* вызов функции */
		
		var wScroll = $(this).scrollTop(),
				hPanel = $("#header-panel").height(),
				topServices = $('#services').offset().top - hPanel*1.2,
				topAbout = $('#about').offset().top - hPanel*1.2,
				topReview = $('#review').offset().top - hPanel*1.2,
				topContact = $('#contact').offset().top - hPanel*3.4;

		if(wScroll > ( hPanel/2)){
			$('#header-panel').addClass('active');
		}
		else {
			$('#header-panel').removeClass('active');
		}

		if(wScroll > topServices) {
			$('#menu').find('a').removeClass('is-active');
			$("#menu a[href*=services]").addClass('is-active');
		}
		else {
			$('#menu').find('a').removeClass('is-active');
		}
		if(wScroll > topAbout){
			$('#menu').find('a').removeClass('is-active');
			$("#menu a[href*=about]").addClass('is-active');
		}
		if(wScroll > topReview){
			$('#menu').find('a').removeClass('is-active');
			$("#menu a[href*=review]").addClass('is-active');
		}
		if(wScroll > topContact){
			$('#menu').find('a').removeClass('is-active');
			$("#menu a[href*=contact]").addClass('is-active');
		}
		
		if(wScroll > (topServices - 100)){
			$('#top').addClass('is-active');
		} else {
			$('#top').removeClass('is-active');
		}

	});

});
