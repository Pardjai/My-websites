

$(function() {


	$('.slider').slick({
		fade:true,
		dots:false,
		arrows:false,
		adaptiveHeight:true,		
		speedToshow:500
	});

	let slider = $('.slider')
	$('.arrow-left').on('click',function(){
			slider.slick('slickPrev')
		})
	$('.arrow-right').on('click',function(){
			slider.slick('slickNext')
		})

	let numLastSlide = $('#lastSlide').attr("alt")
	$('.num-last-slide').text(0+numLastSlide)
	let numThisSlide = $('.slick-active img').attr("alt")
	$('.num-this-slide').text(0+numThisSlide)
	$('.arrow-right').on('click',function(){
	$('.num-this-slide').text()
	let numThisSlide = $('.slick-active img').attr("alt")
	$('.num-this-slide').text(0+numThisSlide)
	})

	let chooseTop = $('#chooseTitle').height()+10
	$('#chooseTitle').css({"top":-chooseTop})

	$('.js-scroll-buttons').on('click', function(e){
		e.preventDefault()
		let idForButton = $(this).attr('href')
		let scrollForButtons = $(idForButton).offset().top - 30
		$('html, body').animate({
			scrollTop:scrollForButtons
		},700)
	})

	$('.js-button-scroll').on('click', function(e){
		e.preventDefault()
		let idForButton = $(this).attr('value')
		let scrollForButtons = $(idForButton).offset().top - 30
		$('html, body').animate({
			scrollTop:scrollForButtons
		},700)
	})

	$('#slider-text-'+numThisSlide).removeClass('transform-to-opacity')
	$('.js-slider-arrow').on('click', function(){
		let numThisSlide = $('.slick-active img').attr("alt")
		$('.choose__text').addClass('transform-to-opacity')
		$('#slider-text-'+numThisSlide).removeClass('transform-to-opacity')
	})

	setTimeout(function() {
	$('.top-block__string').addClass('animation_to-right')
	}, 1000)

	let windowHeight = $(window).height()
	
	$(document).on('scroll', function(){
		let documentScroll = $(document).scrollTop()
		let scrollForSlider = $('#chooseTitle').offset().top
		let sliderAnimation = scrollForSlider-windowHeight
		let scrollForImg =  $('#js-full-width').offset().top
		let imgAnimation = scrollForImg-windowHeight+200
		let scrollForWantBlock =  $('.js-want-animation').offset().top
		let WantBlockAnimation = scrollForWantBlock-windowHeight-130
		if(documentScroll>sliderAnimation){
			$('#chooseTitle').addClass('animation_get-up')
		}
		if(documentScroll>imgAnimation){
			$('#js-full-width').addClass('animation_to-opacity-1')
		}
		if(documentScroll>WantBlockAnimation){
			$('.js-want-animation').addClass('animation_get-up')
		}
	})

	let modalWidth = $('.modal').innerWidth()/2
	 $('.modal').css("marginLeft",-modalWidth)

	 $('#js-open-modal').on('click', function(e){
	 	e.preventDefault()
	 	let modalId = $(this).attr('value')
	 	$(modalId).fadeIn(400)
	 	$('body').addClass('modal_open').append('<div class="overlay"><div>')
	 	$('.js-slider-arrow').css("backgroundColor", "#959391")
	 	 $('#keep-posted').on('click', function(e){
	 	e.preventDefault()
	 	$('.check-text').removeClass('display_none')
	 	$('#keep-posted').text()
	   $('#keep-posted').text('YES')
	 	$(this).addClass('check-phase-2') 
	 	 $('.check-phase-2').on('click', function(e){
	 	e.preventDefault()
	 		$(this).addClass('check-phase-3')
	 		$('.check-text').addClass('display_none')
	 		$('#keep-posted').text()
	   	$('#keep-posted').text('ALL IS READY  😉')
	 	})
	 })
	 })
	 $('body').on('click', '.overlay, #js-close-modal', function(e){
	 	e.preventDefault()
	 	$('.modal').fadeOut(200)
	 	$('div.overlay').remove()
	 	$('body').removeClass('modal_open')
	 	$('.js-slider-arrow').css("backgroundColor", "#F9F5F2")
	 	
	 	$('#keep-posted').removeClass('check-phase-3')
	 	$('#keep-posted').removeClass('check-phase-2') 
	 	$('#keep-posted').text()
	 	$('#keep-posted').text('Keep posted')
	 	$('.check-text').addClass('display_none')

	 })

	
	

})