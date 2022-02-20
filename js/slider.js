const carouselSlider = document.querySelector('#carousel-slider');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

class Slider {
	constructor(element, size, counter, timer) {
		this.element = element;
		this.size = size;
		this.counter = counter;
		this.timer = timer;

		carouselSlider.style.transform = `translateX(${-size * counter}px)`;

		carouselSlider.style.transition = 'transform 0.5s ease-in-out';
	}

	next() {
		if (this.counter > 4) return;

		if (this.timer) {
			clearInterval(this.timer);
			this.timer = setInterval(() => {
				this.auto();
			}, 10000);
		}

		this.counter++;

		carouselSlider.style.transition = 'transform 0.5s ease-in-out';

		this.element.style.transform = `translateX(${-this.size * this.counter}px)`;
	}

	prev() {
		if (this.counter < 1) return;

		if (this.timer) {
			clearInterval(this.timer);
			this.timer = setInterval(() => {
				this.auto();
			}, 10000);
		}

		this.counter--;

		carouselSlider.style.transition = 'transform 0.5s ease-in-out';

		this.element.style.transform = `translateX(${-this.size * this.counter}px)`;

		if (this.timer) {
			clearInterval(this.timer);
			this.timer = setInterval(() => {
				this.auto();
			}, 10000);
		}
	}

	auto() {
		this.counter++;

		carouselSlider.style.transition = 'transform 0.5s ease-in-out';

		this.element.style.transform = `translateX(${-this.size * this.counter}px)`;
	}

	reset() {
		if (document.querySelectorAll('#carousel-slider img')[this.counter].id === 'last-clone') {
			carouselSlider.style.transition = 'none';

			this.counter = document.querySelectorAll('#carousel-slider img').length - 2;

			this.element.style.transform = `translateX(${-this.size * this.counter}px)`;
		}

		if (document.querySelectorAll('#carousel-slider img')[this.counter].id === 'first-clone') {
			carouselSlider.style.transition = 'none';

			this.counter = document.querySelectorAll('#carousel-slider img').length - 5;

			this.element.style.transform = `translateX(${-this.size * this.counter}px)`;
		}
	}
}

const slider = new Slider(
	carouselSlider,
	document.querySelectorAll('#carousel-slider img')[0].clientWidth,
	1,
	setInterval(() => {
		slider.auto();
	}, 10000)
);

nextButton.addEventListener('click', () => {
	slider.next();
});

prevButton.addEventListener('click', () => {
	slider.prev();
});

carouselSlider.addEventListener('transitionend', () => {
	slider.reset();
});
