class buildCart {
	constructor() {
		this.cart = [];
	}

	addToCart(element) {
		this.cart.push({
			name  : element.querySelector('#product-name').textContent,
			image : element.querySelector('#product-img').getAttribute('src'),
			price : element.querySelector('#product-price').textContent
		});

		window.localStorage.setItem('cart', this.cart);
	}
}

const cart = new buildCart();

document.querySelectorAll('#cart-btn').forEach(v => {
	v.addEventListener('click', e => {
		cart.addToCart(v.parentElement);
	});
});

// need to create page for cart object
if (window.localStorage.getItem('cart')) {
	document.querySelector('#cart-items').innerHTML = `${window.localStorage.getItem('cart').length}`;
}

console.log(window.localStorage.getItem('cart'));
