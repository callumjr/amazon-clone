class Address {
	show() {
		document.querySelector('#address-popup').classList.remove('hidden');

		document.querySelector('#overlay').classList.add('opacity-100');
	}

	hide() {
		document.querySelector('#address-popup').classList.add('hidden');

		document.querySelector('#overlay').classList.remove('opacity-100');
	}
}

const address = new Address();

document.querySelector('#address-container').addEventListener('click', function(e) {
	e.preventDefault();
	address.show();
});

document.addEventListener('click', function() {
	if (!document.querySelector('#address-popup').classList.contains('hidden')) {
		setTimeout(() => {
			document.addEventListener('click', function(e) {
				if (!document.getElementById('address-popup-div').contains(e.target)) {
					address.hide();
				}
			});
		}, 500);
	}
});

// &&
// !document.getElementById('address-popup-div').contains(e.target)
// ) {
// address.hide();
