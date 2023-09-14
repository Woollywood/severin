gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', (windowEvent) => {
	const advantagesBody = document.querySelector('.advantages__body');
	const slider = document.querySelector('.advantages__slider');
	const sliderWrapper = document.querySelector('.advantages__slider-wrapper');
	const slides = document.querySelectorAll('.advantages__slide');
	const sliderDots = document.querySelectorAll('.advantages__slider-dot');

	gsap.to(sliderWrapper, {
		yPercent: -(100 - 100 / slides.length),
		scrollTrigger: {
			trigger: slider,
			start: 'center center',
			// end: `${slides.length} * 1000`,
			scrub: 1,
		},
	});

	let step = 100 / slides.length;
	gsap.to(sliderDots, {
		scrollTrigger: {
			trigger: slider,
			start: 'center center',
			scrub: 1,
			onUpdate: ({ progress, direction }) => {
				let stage = Math.trunc((progress * 100 - 1) / step);

				sliderDots.forEach((dot) => dot.classList.remove('advantages__slider-dot--active'));
				sliderDots[stage].classList.add('advantages__slider-dot--active');
			},
		},
	});

	gsap.to(advantagesBody, {
		scrollTrigger: {
			trigger: advantagesBody,
			start: 'center center',
			// end: `${slides.length} * 1000`,
			pin: true,
			scrub: 1,
		},
	});
});
