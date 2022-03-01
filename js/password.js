const invalidPassword = document.querySelector('#invalid-password');
const signInButton = document.querySelector('#sign-in-button');
const passwordBox = document.querySelector('#password');

class Password {
	passwordValidation(value) {
		if (/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}/.test(value)) {
			if (!invalidPassword.classList.contains('hidden')) {
				invalidPassword.classList.add('hidden');
			}
		} else {
			invalidPassword.classList.remove('hidden');
		}
	}
}

const password = new Password();

const emailInsert = document.querySelector('.email-insert');

if (window.sessionStorage.getItem('email') !== null) {
	emailInsert.innerHTML = `<span>${window.sessionStorage.getItem('email')}</span>`;
}

signInButton.addEventListener('click', e => {
	e.preventDefault();
	password.passwordValidation(passwordBox.value);
});
