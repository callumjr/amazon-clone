import { cart } from './cart-class.js';

const cartItems = document.querySelector('#cart-items');

if (window.localStorage.getItem('cart')) {
	let cart = JSON.parse(window.localStorage.getItem('cart'));

	if (cart.length > 0) {
		cartItems.innerHTML = `${cart
			.map(v => {
				return v.quantity;
			})
			.reduce((a, b) => {
				return a + b;
			}, 0)}`;
	}
}

document.querySelectorAll('#cart-btn').forEach(v => {
	v.addEventListener('click', e => {
		cart.addToCart(
			v.parentElement.querySelector('#product-name').textContent,
			v.parentElement.querySelector('#product-img').getAttribute('src'),
			v.parentElement.querySelector('#product-price').textContent
		);
	});
});
