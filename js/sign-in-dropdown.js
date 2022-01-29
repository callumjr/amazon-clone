class SignInDropdown {
	showPopUp() {
		document.querySelector('#overlay').classList.add('opacity-100');
	}

	hide() {
		document.querySelector('#overlay').classList.remove('opacity-100');
	}
}

const signInDropdown = new SignInDropdown();

document.querySelector('#country-container').addEventListener('mouseover', e => {
	e.preventDefault();
	signInDropdown.showPopUp();
});

document.addEventListener('mouseout', function(e) {
	if (!document.querySelector('#country-dropdown').contains(e.target)) {
		address.hide();
	}
});
