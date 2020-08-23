$(function() {
	
		function getCoords(elem) {
 	 	let box = elem.getBoundingClientRect();
			 return {
		    top: box.top + pageYOffset,
		    left: box.left + pageXOffset
		  	};
		}

	

	let newsArrow = document.querySelectorAll('.preview-news-card')

	newsArrowLenght = newsArrow.length
	let i=1 
	const newsVisible = () => {
		while (newsArrow[i].classList.contains('d-none') === false){
			i+=1
		}
		return i
	}
	newsVisible()

	document.querySelector('#readMoreButton').addEventListener('click', ()=>{

		let step = i+2

		if (step >= newsArrowLenght-1){
			step=newsArrowLenght-1
		}
		
		while(i<=step){
			newsArrow[i].classList.remove('d-none')
			i+=1
		}

		document.querySelector('#readMoreBlock').classList.remove('d-flex')
		document.querySelector('#readMoreBlock').classList.add('d-none')

		const returnButton = ()=>{
			if (step < newsArrowLenght-1){
				document.querySelector('#readMoreBlock').classList.remove('d-none')
				document.querySelector('#readMoreBlock').classList.add('d-flex')
			}
		}
		setTimeout(returnButton, 1)
	
	})	




})