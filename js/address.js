class Address {
	showPopUp() {
		document.querySelector('#address-popup').classList.remove('hidden');

		document.querySelector('#overlay').classList.add('opacity-100');
	}

	hide() {
		document.querySelector('#address-popup').classList.add('hidden');

		document.querySelector('#overlay').classList.remove('opacity-100');
	}
}

const address = new Address();

document.querySelector('#address-container').addEventListener('click', e => {
	e.preventDefault();
	address.showPopUp();
});

document.addEventListener('mouseup', function(e) {
	if (
		!document.querySelector('#address-popup').classList.contains('hidden') &&
		!document.getElementById('address-popup-div').contains(e.target)
	) {
		address.hide();
	}
});
