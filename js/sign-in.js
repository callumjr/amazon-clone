class SignIn {
	emailValidation(value) {
		if (/^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+).([a-zA-Z\.]+)$/.test(value)) {
			this.email = value;
			window.sessionStorage.setItem('email', this.email);

			window.open('/sign-in-password.html', '_self');

			if (!document.querySelector('#invalid-email').classList.contains('hidden')) {
				document.querySelector('#invalid-email').classList.add('hidden');
			}
		} else if (/^\d{11}$/.test(value)) {
			this.number = value;

			window.open('/sign-in-password.html', '_self');

			if (!document.querySelector('#invalid-email').classList.contains('hidden')) {
				document.querySelector('#invalid-email').classList.add('hidden');
			}
		} else {
			document.querySelector('#invalid-email').classList.remove('hidden');
		}
	}

	helpDropdown() {
		document.querySelector('#help-icon-right').classList.toggle('hidden');
		document.querySelector('#help-icon-down').classList.toggle('hidden');
		document.querySelector('.help-extras').classList.toggle('hidden');
	}
}

const signIn = new SignIn();

if (
	window.location.href === 'http://127.0.0.1:5501/sign-in.html#' ||
	window.location.href === 'http://127.0.0.1:5501/sign-in.html?#'
) {
	document.querySelector('#continue-button').addEventListener('click', e => {
		e.preventDefault();
		signIn.emailValidation(document.querySelector('#email-phone-number').value);
	});

	document.querySelector('#continue-button').addEventListener('click', e => {
		e.preventDefault();
		signIn.emailValidation(document.querySelector('#email-phone-number').value);
	});

	document.addEventListener('keydown', e => {
		e.preventDefault();
		if (e.key === 'Enter') {
			signIn.emailValidation(document.querySelector('#email-phone-number').value);
		}
	});

	document.querySelector('#help-button').addEventListener('click', e => {
		e.preventDefault();
		signIn.helpDropdown();
	});
}

if (window.location.href === 'http://127.0.0.1:5501/sign-in-password.html') {
	document.querySelector('.email-insert').innerHTML = `<span>${window.sessionStorage.getItem('email')}</span>`;
}
