$(function() {
	
	$('.header__slider').slick({
		dots:true,
		adaptiveHeight:true,
	});

	$('.best-sallers__slider').slick({
		infinite: true,
  		slidesToShow: 4,
 	 	slidesToScroll: 1,
 	 	touchThreshold: 10,
 		swipeToSlide: true,
 		responsive:[
 		{
 			breakpoint: 780,
 			settings: {
 				slidesToShow:3
 			}
 		}
 		]
	});

	$('.edit-displey-status').on('click',function(){
		$(this).children('span').removeClass('display_none')
		let timer = function(){
				$('.edit-displey-status').children('span').addClass('display_none')
			}
		setTimeout(timer, 2000)
	})

	$('#js-bestSallersButton').on('click',function(e){
		e.preventDefault()
		let scrollSallers = $('.best-sallers').offset().top - 20
		$('html,body').animate({
			scrollTop:scrollSallers
		})
	})

	$('#js-buttonSearchItem').on('click',function(){
		$('#dropdownInput').toggleClass('display_off')
		$('#searchInputLi').toggleClass('display_off')
	})

	let scrollToNav = $('#js-nav').offset().top
	let navHeight = $('#js-nav').height()
	$(document).on('scroll',function(){
		let documentScroll = $(this).scrollTop()
		let criticalScroll = scrollToNav+navHeight+50
		if (documentScroll>criticalScroll){
			$('#js-nav').addClass('fixed')
			$('#js-header').css({"paddingTop":navHeight})
			$('.header-nav').css({"border":"none",
										"boxShadow":"none"})
		}else{
			$('#js-nav').removeClass('fixed')
			$('#js-header').removeAttr('style')
		}
	})

});