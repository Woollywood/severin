gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', (windowEvent) => {
	const advantagesBody = document.querySelector('.advantages__body');
	const slider = document.querySelector('.advantages__slider');
	const sliderWrapper = document.querySelector('.advantages__slider-wrapper');
	const slides = document.querySelectorAll('.advantages__slide');
	const sliderDots = document.querySelectorAll('.advantages__slider-dot');

	if (document.querySelector('.advantages__slider-wrapper-outer')) {
		new Swiper('.advantages__slider-wrapper-outer', {
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 50,
			speed: 800,

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

					function getScrollHeight(wrapper, slides, mul = 1) {
						let slideHeight = wrapper.offsetHeight;
						return slideHeight * slides.length * mul;
					}

					let mm = gsap.matchMedia();
					mm.add('(min-width: 991.98px)', () => {
						ScrollTrigger.create({
							trigger: slider,
							start: 'center center',
							end: getScrollHeight(sliderWrapper, e.slides, 3),
							scrub: 1,
							invalidateOnRefresh: true,
							pin: advantagesBody,
							onUpdate: ({ progress }) => {
								let stage = Math.trunc(Math.abs(progress * 100 - 1) / step);

								if (curSlide !== stage) {
									curSlide = stage;
									e.slideTo(curSlide, 0);

									gsap.from(e.slides[curSlide], {
										x: -150,
										opacity: 0,
										duration: 4,
										ease: 'elastic',
									});
								}
							},
						});
					});

					mm.add('(max-width: 991.98px) and (min-width: 479.98px)', () => {
						ScrollTrigger.create({
							trigger: slider,
							start: 'top 140px',
							end: getScrollHeight(sliderWrapper, e.slides, 4),
							scrub: 1,
							invalidateOnRefresh: true,
							pin: advantagesBody,
							onUpdate: ({ progress }) => {
								let stage = Math.trunc(Math.abs(progress * 100 - 1) / step);

								if (curSlide !== stage) {
									curSlide = stage;
									e.slideTo(curSlide, 0);
								}
							},
						});
					});

					mm.add('(max-width: 479.98px)', () => {
						ScrollTrigger.create({
							trigger: slider,
							start: 'top 86px',
							end: getScrollHeight(sliderWrapper, e.slides, 4),
							scrub: 1,
							invalidateOnRefresh: true,
							pin: advantagesBody,
							onUpdate: ({ progress }) => {
								let stage = Math.trunc(Math.abs(progress * 100 - 1) / step);

								if (curSlide !== stage) {
									curSlide = stage;
									e.slideTo(curSlide, 0);
								}
							},
						});
					});
				},
			},
		});
	}
});
