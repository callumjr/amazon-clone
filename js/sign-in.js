class SignIn {
	constructor() {}

	emailValidation(value) {
		if (/^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+).([a-zA-Z\.]+)$/.test(value)) {
			this.email = value;
			if (!document.querySelector('#invalid-entry').classList.contains('hidden')) {
				document.querySelector('#invalid-entry').classList.add('hidden');
			}
		} else if (/^\d{11}$/.test(value)) {
			this.number = value;
			if (!document.querySelector('#invalid-entry').classList.contains('hidden')) {
				document.querySelector('#invalid-entry').classList.add('hidden');
			}
		} else {
			document.querySelector('#invalid-entry').classList.remove('hidden');
		}
	}
}

const signIn = new SignIn();

document.querySelector('#continue-button').addEventListener('click', e => {
	e.preventDefault();
	signIn.emailValidation(document.querySelector('#email-phone-number').value);
});
