let body = document.querySelector('body');
body.addEventListener('click', (e)=>{
	e.preventDefault();
})

let gallery = document.querySelectorAll('.card-container');

function galleryGrid () {
	for (let i = 0; i < gallery.length; i++){
	if(gallery[i+3]){
	let thisCard = gallery[i];
	let nextCard = gallery[i+3];
	let thisCardBottom = thisCard.getBoundingClientRect().bottom;
	let nextCardTop = nextCard.getBoundingClientRect().top;
	let margin = nextCardTop - thisCardBottom-10 + 'px';

	nextCard.style.marginTop = '-'+margin;
	};	
	}
}

galleryGrid()
window.addEventListener('resize', ()=>{
	let windowWidth = window.innerWidth;
	if(windowWidth > 460){
		body.classList.remove('menu--active');
	}
})

let burger = document.querySelector('.burger-icon');
burger.addEventListener('click', ()=>{
	body.classList.toggle('menu--active');
})