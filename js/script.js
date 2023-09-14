window.addEventListener('load', (windowEvent) => {
	const sliderWrapperOuter = document.querySelector('.advantages__slider-wrapper-outer');
	const slides = document.querySelectorAll('.advantages__slide');

	let maxHeight = Math.max(...Array.from(slides).map((slide) => slide.offsetHeight));

	slides.forEach((slide) => (slide.style.height = `${maxHeight}px`));

	sliderWrapperOuter.style.height = `${maxHeight}px`;
});
