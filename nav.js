const countryContainer = document.querySelector('#country-container');
const countryDropdown = document.querySelector('#country-dropdown');
const countryOverlay = document.querySelector('#country-overlay');
const signInContainer = document.querySelector('#sign-in-container');
const signInDropdown = document.querySelector('#sign-in-dropdown');
const adressContainer = document.querySelector('#address-container');
const adressPopup = document.querySelector('#address-popup');
const adressPopupDiv = document.querySelector('#address-popup-div');
const overlay = document.querySelector('#overlay');

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
