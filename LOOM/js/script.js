

$(function() {


	$('.slider').slick({
		dots:false,
		arrows:true,
		adaptiveHeight: true,
		slideToShow: 1,
		centerMode: false
	});



let i = 1


		function sliderAutoplayer(slidesClass){

		let numLastSlide = document.querySelector(`#${slidesClass}-block`).querySelector('.last-slide').getAttribute('id').charAt(slidesClass.length+1)
			
		let slideHidden = document.querySelector(`#${slidesClass}-block`).querySelector('.to-hidden')
		let slideActive = document.querySelector(`#${slidesClass}-block`).querySelector('.slide_active')
		let slideUnactive = document.querySelector(`#${slidesClass}-${i+1}`)
		if(i == numLastSlide){
			slideUnactive = document.querySelector(`#${slidesClass}-1`)
		}

		if(slideHidden !== null){
			slideHidden.classList.add('slide_unactive')
			slideHidden.classList.remove('to-hidden')
		}
		
		slideActive.classList.add('to-hidden')
		slideActive.classList.remove('slide_active')

		slideUnactive.classList.add('slide_active')
		slideUnactive.classList.remove('slide_unactive')

		let numDotUnActive 
		let numDotActive
		numDotUnActive = document.querySelector(`#${slidesClass}-block`).querySelector('.slide_active').getAttribute('id').charAt(slidesClass.length+1)
		document.querySelector(`#${slidesClass}-dot-${numDotUnActive}`).classList.add(`${slidesClass}-dot_active`)
		numDotActive = document.querySelector(`#${slidesClass}-block`).querySelector('.to-hidden').getAttribute('id').charAt(slidesClass.length+1)
		document.querySelector(`#${slidesClass}-dot-${numDotActive}`).classList.remove(`${slidesClass}-dot_active`)

		i+=1

		if (i > numLastSlide){
			slideHidden.classList.add('slide_unactive')
			slideHidden.classList.remove('to-hidden')
			i=1
		}
	}


	setInterval(sliderAutoplayer, 4300, 'quote')


	let p = 1
	function ourProcess (wayName) {

		let numLastIcon 
		numLastIcon = document.querySelector(`#${wayName}-block`).querySelector('.last-slide').getAttribute('id').charAt(wayName.length+1)
		
		if(p!==1){
			document.querySelector(`#${wayName}-${p-1}`).querySelector('.picture').classList.remove(`picture-${p-1}_active`)
			document.querySelector(`#${wayName}-${p-1}-text`).classList.add(`process-no-visible`)
		}
		if(p==1){
			document.querySelector(`#${wayName}-${numLastIcon}`).querySelector('.picture').classList.remove(`picture-${numLastIcon}_active`)
			document.querySelector(`#${wayName}-${numLastIcon}-text`).classList.add(`process-no-visible`)
		}
		
		document.querySelector(`#${wayName}-${p}`).querySelector('.picture').classList.add(`picture-${p}_active`)
		document.querySelector(`#${wayName}-${p}-text`).classList.remove(`process-no-visible`)

		p+=1
		console.log(p)
		if(p>numLastIcon){
			p=1
		}
	}


	setInterval(ourProcess, 5000, 'process')



})


