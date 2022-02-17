const countryContainer = document.querySelector('#country-container');
const countryDropdown = document.querySelector('#country-dropdown');
const countryOverlay = document.querySelector('#country-overlay');
const signInContainer = document.querySelector('#sign-in-container');
const signInDropdown = document.querySelector('#sign-in-dropdown');
const adressContainer = document.querySelector('#address-container');
const adressPopup = document.querySelector('#address-popup');
const adressPopupDiv = document.querySelector('#address-popup-div');
const overlay = document.querySelector('#overlay');
const carouselSlider = document.querySelector('#carousel-slider');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

class DropDownMenu {
	show(element) {
		element.classList.add('opacity-100');
	}

	hide(element) {
		element.classList.remove('opacity-100');
	}

	addZIndex(element) {
		element.classList.add('z-30');
	}

	removeZIndex(element) {
		element.classList.remove('z-30');
	}
}

const dropDownMenu = new DropDownMenu();

// Country dropdown

countryContainer.addEventListener('mouseover', e => {
	e.preventDefault();
	dropDownMenu.show(countryOverlay);
});

document.addEventListener('mouseout', e => {
	if (!countryDropdown.contains(e.target)) {
		dropDownMenu.hide(countryOverlay);
	}
});

countryContainer.addEventListener('mouseover', () => {
	dropDownMenu.addZIndex(countryContainer);
});

countryContainer.addEventListener('mouseout', () => {
	dropDownMenu.removeZIndex(countryContainer);
});

// Sign in dropdown

signInContainer.addEventListener('mouseover', e => {
	e.preventDefault();
	dropDownMenu.show(countryOverlay);
});

document.addEventListener('mouseout', function(e) {
	if (!signInDropdown.contains(e.target)) {
		dropDownMenu.hide(countryOverlay);
	}
});

signInContainer.addEventListener('mouseover', () => {
	dropDownMenu.addZIndex(signInContainer);
});

signInContainer.addEventListener('mouseout', () => {
	dropDownMenu.removeZIndex(signInContainer);
});

class PopUpMenu {
	show(popUp, overlay) {
		popUp.classList.remove('hidden');

		overlay.classList.add('opacity-100');
	}

	hide(popUp, overlay) {
		popUp.classList.add('hidden');

		overlay.classList.remove('opacity-100');
	}
}

const popUpMenu = new PopUpMenu();

adressContainer.addEventListener('click', e => {
	e.preventDefault();
	popUpMenu.show(adressPopup, overlay);
});

document.addEventListener('mouseup', function(e) {
	if (!adressPopup.classList.contains('hidden') && !adressPopupDiv.contains(e.target)) {
		popUpMenu.hide(adressPopup, overlay);
	}
});

if (window.location.href === 'http://127.0.0.1:5501/index.html') {
	class Slider {
		constructor(element, size, counter, timer) {
			this.element = element;
			this.size = size;
			this.counter = counter;

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
}
