class buildCart {
	constructor() {
		this.cart = JSON.parse(window.localStorage.getItem('cart'));
	}

	addToCart(element) {
		this.cart.push({
			name  : element.querySelector('#product-name').textContent,
			image : element.querySelector('#product-img').getAttribute('src'),
			price : element.querySelector('#product-price').textContent
		});
		window.localStorage.setItem('cart', JSON.stringify(this.cart));
	}
}

const cart = new buildCart();

document.querySelectorAll('#cart-btn').forEach(v => {
	v.addEventListener('click', e => {
		cart.addToCart(v.parentElement);
	});
});

console.log(JSON.parse(window.localStorage.getItem('cart')));

if (window.localStorage.getItem('cart')) {
	document.querySelector('#cart-items').innerHTML = `${JSON.parse(window.localStorage.getItem('cart')).length}`;
}

class CartPage {
	constructor() {}

	cartHtml() {
		if (window.localStorage.getItem('cart')) {
			let cartArr = JSON.parse(window.localStorage.getItem('cart'));

			for (let i = 0; i < cartArr.length; i++) {
				document.querySelector('#cart-items').innerHTML += ``;
			}
		} else {
			document.querySelector('#no-cart-items').classList.remove('hidden');
		}
	}
}
