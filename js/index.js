class DropDownMenu {
	show(element) {
		document.querySelector(element).classList.add('opacity-100');
	}

	hide(element) {
		document.querySelector(element).classList.remove('opacity-100');
	}

	addZIndex(element) {
		document.querySelector(element).classList.add('z-30');
	}

	removeZIndex(element) {
		document.querySelector(element).classList.remove('z-30');
	}
}

const dropDownMenu = new DropDownMenu();

// Country dropdown

document.querySelector('#country-container').addEventListener('mouseover', e => {
	e.preventDefault();
	dropDownMenu.show('#country-overlay');
});

document.addEventListener('mouseout', e => {
	if (!document.querySelector('#country-dropdown').contains(e.target)) {
		dropDownMenu.hide('#country-overlay');
	}
});

document.querySelector('#country-container').addEventListener('mouseover', () => {
	dropDownMenu.addZIndex('#country-container');
});

document.querySelector('#country-container').addEventListener('mouseout', () => {
	dropDownMenu.removeZIndex('#country-container');
});

// Sign in dropdown

document.querySelector('#sign-in-container').addEventListener('mouseover', e => {
	e.preventDefault();
	dropDownMenu.show('#country-overlay');
});

document.addEventListener('mouseout', function(e) {
	if (!document.querySelector('#sign-in-dropdown').contains(e.target)) {
		dropDownMenu.hide('#country-overlay');
	}
});

document.querySelector('#sign-in-container').addEventListener('mouseover', () => {
	dropDownMenu.addZIndex('#sign-in-container');
});

document.querySelector('#sign-in-container').addEventListener('mouseout', () => {
	dropDownMenu.removeZIndex('#sign-in-container');
});

class PopUpMenu {
	show(popUp) {
		document.querySelector(popUp).classList.remove('hidden');

		document.querySelector('#overlay').classList.add('opacity-100');
	}

	hide(popUp, overlay) {
		document.querySelector(popUp).classList.add('hidden');

		document.querySelector(overlay).classList.remove('opacity-100');
	}
}

const popUpMenu = new PopUpMenu();

document.querySelector('#address-container').addEventListener('click', e => {
	e.preventDefault();
	popUpMenu.show('#address-popup', '#overlay');
});

document.addEventListener('mouseup', function(e) {
	if (
		!document.querySelector('#address-popup').classList.contains('hidden') &&
		!document.querySelector('#address-popup-div').contains(e.target)
	) {
		popUpMenu.hide('#address-popup', '#overlay');
	}
});

class Slider {
	constructor(element, size, counter) {
		this.element = element;
		this.size = size;
		this.counter = counter;

		document.querySelector('#carousel-slider').style.transform = `translateX(${-size * counter}px)`;

		document.querySelector('#carousel-slider').style.transition = 'transform 0.5s ease-in-out';
	}

	next() {
		this.counter++;
		document.querySelector(this.element).style.transform = `translateX(${-this.size * this.counter}px)`;
	}

	prev() {
		this.counter--;
		document.querySelector(this.element).style.transform = `translateX(${-this.size * this.counter}px)`;
	}
}

const slider = new Slider('#carousel-slider', document.querySelectorAll('#carousel-slider img')[0].clientWidth, 1);

document.querySelector('#next').addEventListener('click', () => {
	slider.next();
});

document.querySelector('#prev').addEventListener('click', () => {
	slider.prev();
});
