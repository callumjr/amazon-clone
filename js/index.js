import { cart } from './cart-class.js';

document.querySelectorAll('#cart-btn').forEach(v => {
	v.addEventListener('click', e => {
		cart.addToCart(
			v.parentElement.querySelector('#product-name').textContent,
			v.parentElement.querySelector('#product-img').getAttribute('src'),
			v.parentElement.querySelector('#product-price').textContent
		);
	});
});
