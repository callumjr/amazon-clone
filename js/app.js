class AdressPopUp {
	show(targetDiv) {
		targetDiv.classList.remove('hidden');
	}
}

const adressPopUp = new AdressPopUp();

const adressContainer = document.querySelector('#adress-container');

adressContainer.classList.add('hidden');
const adressPopUp = document.querySelector('#adress-popup');

adressContainer.addEventListener('click', adressPopUp.show(adressPopUp));
