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

		document.querySelector('#cart-items').innerHTML = `${this.cart.length}`;
	}
}

const cart = new buildCart();

document.querySelectorAll('#cart-btn').forEach(v => {
	v.addEventListener('click', e => {
		e.preventDefault();
		cart.addToCart(v.parentElement);
	});
});
