class DropDownMenu {
	showPopUp(element) {
		document.querySelector(element).classList.add('opacity-100');
	}

	hide(element) {
		document.querySelector(element).classList.remove('opacity-100');
	}
}

const dropDownMenu = new DropDownMenu();

// Country dropdown

document.querySelector('#country-container').addEventListener('mouseover', e => {
	e.preventDefault();
	dropDownMenu.showPopUp('#country-overlay');
});

document.addEventListener('mouseout', function(e) {
	if (!document.querySelector('#country-dropdown').contains(e.target)) {
		dropDownMenu.hide('#country-overlay');
	}
});

// Sign in dropdown

document.querySelector('#sign-in-container').addEventListener('mouseover', e => {
	e.preventDefault();
	dropDownMenu.showPopUp('#country-overlay');
});

document.addEventListener('mouseout', function(e) {
	if (!document.querySelector('#sign-in-dropdown').contains(e.target)) {
		dropDownMenu.hide('#country-overlay');
	}
});

class PopUpMenu {
	showPopUp(popUp) {
		document.querySelector(popUp).classList.remove('hidden');

		document.querySelector('#overlay').classList.add('opacity-100');
	}

	hide(popUp) {
		document.querySelector(popUp).classList.add('hidden');

		document.querySelector('#overlay').classList.remove('opacity-100');
	}
}

const popUpMenu = new PopUpMenu();

document.querySelector('#address-container').addEventListener('click', e => {
	e.preventDefault();
	popUpMenu.showPopUp('#address-popup', '#overlay');
});

document.addEventListener('mouseup', function(e) {
	if (
		!document.querySelector('#address-popup').classList.contains('hidden') &&
		!document.querySelector('#address-popup-div').contains(e.target)
	) {
		popUpMenu.hide('#address-popup');
	}
});
