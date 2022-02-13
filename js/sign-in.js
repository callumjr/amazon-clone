const invalidEmailNotice = document.querySelector('#invalid-email');
const helpIconRight = document.querySelector('#help-icon-right');
const helpIconDown = document.querySelector('#help-icon-down');
const helpExtras = document.querySelector('.help-extras');
const continueButton = document.querySelector('#continue-button');
const emailBox = document.querySelector('#email-phone-number');
const helpButton = document.querySelector('#help-button');
const emailInsert = document.querySelector('.email-insert');

class SignIn {
	emailValidation(value) {
		if (/^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+).([a-zA-Z\.]+)$/.test(value)) {
			this.email = value;
			window.sessionStorage.setItem('email', this.email);

			window.open('/sign-in-password.html', '_self');

			if (!invalidEmailNotice.classList.contains('hidden')) {
				invalidEmailNotice.classList.add('hidden');
			}
		} else if (/^\d{11}$/.test(value)) {
			this.number = value;

			window.open('/sign-in-password.html', '_self');

			if (!invalidEmailNotice.classList.contains('hidden')) {
				invalidEmailNotice.classList.add('hidden');
			}
		} else {
			invalidEmailNotice.classList.remove('hidden');
		}
	}

	helpDropdown() {
		helpIconRight.classList.toggle('hidden');
		helpIconDown.classList.toggle('hidden');
		helpExtras.classList.toggle('hidden');
	}
}

const signIn = new SignIn();

if (
	window.location.href === 'http://127.0.0.1:5501/sign-in.html#' ||
	window.location.href === 'http://127.0.0.1:5501/sign-in.html?#'
) {
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
}

if (window.location.href === 'http://127.0.0.1:5501/sign-in-password.html') {
	emailInsert.innerHTML = `<span>${window.sessionStorage.getItem('email')}</span>`;
}
