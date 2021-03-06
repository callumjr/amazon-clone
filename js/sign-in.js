const invalidEmail = document.querySelector('#invalid-email');
const helpIconRight = document.querySelector('#help-icon-right');
const helpIconDown = document.querySelector('#help-icon-down');
const helpExtras = document.querySelector('.help-extras');
const helpButton = document.querySelector('#help-button');
const continueButton = document.querySelector('#continue-button');

class SignInEmail {
	emailValidation(value) {
		if (/^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+).([a-zA-Z\.]+)$/.test(value)) {
			this.email = value;
			window.sessionStorage.setItem('email', this.email);

			window.open('/sign-in-password.html', '_self');

			if (!invalidEmail.classList.contains('hidden')) {
				invalidEmail.classList.add('hidden');
			}
		} else if (/^\d{11}$/.test(value)) {
			this.number = value;

			window.open('/sign-in-password.html', '_self');

			if (!invalidEmail.classList.contains('hidden')) {
				invalidEmail.classList.add('hidden');
			}
		} else {
			invalidEmail.classList.remove('hidden');
		}
	}

	helpDropdown() {
		helpIconRight.classList.toggle('hidden');
		helpIconDown.classList.toggle('hidden');
		helpExtras.classList.toggle('hidden');
	}
}

export const signIn = new SignInEmail();

continueButton.addEventListener('click', e => {
	e.preventDefault();
	signIn.emailValidation(emailBox.value);
});

continueButton.addEventListener('click', e => {
	e.preventDefault();
	signIn.emailValidation(emailBox.value);
});

document.addEventListener('keydown', e => {
	e.preventDefault();
	if (e.key === 'Enter') {
		signIn.emailValidation(emailBox.value);
	}
});

helpButton.addEventListener('click', e => {
	e.preventDefault();
	signIn.helpDropdown();
});
