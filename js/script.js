
$(document).ready(function(){
	$('.popslider').slick({
		arrows:true,
		dots:true,
		adaptiveHight:true,
		slidesToShow:1,
		slidesToScroll:1,
		speed:1000,
		easing:'ease',
		infinite:true,
		waitForAnimate: true,
	});
});

const body = document.querySelector('.body');
const imageBoxes = document.querySelectorAll('.boxfeatured__image');
const popupShow = document.querySelector('.sliderPopup');

const popupClose = document.querySelector('.sliderPopup__close');


	for (i = 0; i < imageBoxes.length; i++){
		let imageBox = imageBoxes[i];
		imageBox.addEventListener('click', popUpOpen);
		popupClose.addEventListener('click', popUpClose);
	}

function popUpOpen(e){
	popupShow.classList.add('show');
}
function popUpClose(e){
	popupShow.classList.remove('show');
}