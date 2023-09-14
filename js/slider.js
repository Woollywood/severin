gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', (windowEvent) => {
	const advantagesBody = document.querySelector('.advantages__body');
	const slider = document.querySelector('.advantages__slider');
	const sliderWrapper = document.querySelector('.advantages__slider-wrapper');
	const slides = document.querySelectorAll('.advantages__slide');
	const sliderDots = document.querySelectorAll('.advantages__slider-dot');

	gsap.to(advantagesBody, {
		scrollTrigger: {
			trigger: advantagesBody,
			start: 'center center',
			pin: true,
			scrub: 1,
		},
	});

	if (document.querySelector('.advantages__slider-wrapper-outer')) {
		new Swiper('.advantages__slider-wrapper-outer', {
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 50,

			pagination: {
				el: '.advantages__slider-pagination',
			},

			/*
			// Брейкпоинты
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/

			on: {
				init: (e) => {
					let step = 100 / e.slides.length;
					let curSlide = 0;

					gsap.to(sliderWrapper, {
						scrollTrigger: {
							trigger: slider,
							start: 'center center',
							// end: `${slides.length} * 1000`,
							scrub: 1,
							onUpdate: ({ progress }) => {
								let stage = Math.trunc(Math.abs(progress * 100 - 1) / step);
								console.log(curSlide);

								if (curSlide !== stage) {
									curSlide = stage;
									e.slideTo(curSlide, 0);

									gsap.from(e.slides[curSlide], {
										x: -150,
										opacity: 0,
										duration: 2,
										ease: 'elastic',
									});
								}
							},
						},
					});
				},
			},
		});
	}
});
