let slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	let prevArrow = document.getElementsByClassName("prev");
	let nextArrow = document.getElementsByClassName("next");
	
	//Disable arrows for first and last slide
	if(n==1){
		prevArrow[0].className += " isDisabled";
	}
	else if(n==5){
		nextArrow[0].className += " isDisabled";
	}
	else{
		prevArrow[0].classList.remove("isDisabled");
		nextArrow[0].classList.remove("isDisabled");
	}
	
	
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	
	slides[slideIndex - 1].style.display = "flex";
	dots[slideIndex - 1].className += " active";
}
