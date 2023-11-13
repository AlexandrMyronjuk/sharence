
// Slider second section
const secondSectionSliderBox = doc.querySelector('#secondSectionSlider');
const secondSectionSlider = doc.querySelector('#secondSlider');
const secondSectionSlides = doc.getElementsByName("secondSectionSliderItem");
const secondSectionDots = doc.getElementsByName("secondSectionSliderDot");

// Slider fifth section
const fifthSectionSlider = doc.querySelector('#fifthSlider');
const fifthSectionSlides = doc.getElementsByName("fifthSectionSliderItem");
const fifthSectionDots = doc.getElementsByName("fifthSectionSliderDot");


let transition = true;
let slideIndex = 0;


secondSectionDots.forEach ( function (actPh, index) {
	
	actPh.setAttribute('data_index', index);
	const arrPh = actPh.getAttribute ('data_index');
	
	actPh.onclick = function () {
		slideIndex = arrPh;
		
      sliderWork(secondSectionSlider, secondSectionSlides, secondSectionDots);

	}
});

fifthSectionDots.forEach ( function (actPh, index) {
	
	actPh.setAttribute('data_index', index);
	const arrPh = actPh.getAttribute ('data_index');
	
	actPh.onclick = function () {
		slideIndex = arrPh;
		
      sliderWork(fifthSectionSlider, fifthSectionSlides, fifthSectionDots);

	}
});


function sliderWork (slider, slides, dots) {
   let slideWidth = slides[1].offsetWidth + 27;
   
   if (transition) {
      slider.style.transition = 'transform .5s';
   }

   slider.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

   clearDots(dots);
   dots[slideIndex].classList.add('active');
};

function clearDots(dots) {
	dots.forEach( function( item ) {
		item.classList.remove( 'active' );
	} );
};

