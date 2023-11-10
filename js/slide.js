
const sliderBox = doc.querySelector('.second-section__slider');
const slider = doc.querySelector('.slider');
const slides = doc.querySelectorAll('.slider__item');
const dots = doc.querySelectorAll('.slideDot');


let slideIndex = 0;
let transition = true;

slide = function() {
   let slideWidth = slides[1].offsetWidth + 27;
   console.log (slideWidth);
   
   if (transition) {
      slider.style.transition = 'transform .5s';
   }

   slider.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

   clearDots();
   dots[slideIndex].classList.add('active');

};

dots.forEach ( function (actPh, index) {
	
	actPh.setAttribute('data_index', index);
	const arrPh = actPh.getAttribute ('data_index');
	
	actPh.onclick = function () {
		slideIndex = arrPh;
		
        slide();

	}
});

function clearDots() {
	dots.forEach( function( item ) {
		item.classList.remove( 'active' );
	} );
};


