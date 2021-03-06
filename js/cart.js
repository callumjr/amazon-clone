import { cart } from './cart-class.js';

const cartContainer = document.querySelector('#cart-page');
const cartItems = document.querySelector('#cart-items');
const deselectItems = document.querySelector('#cart-deselect');
const orderInfo = document.querySelector('#order-info');
const cartTotal = document.querySelector('#cart-total');
const noItems = document.querySelector('#no-cart-items');

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

deselectItems.addEventListener('click', () => {
	cart.clearCart();
	window.location.reload();
});

class CartPage {
	constructor() {}

	cartHtml() {
		if (
			JSON.parse(window.localStorage.getItem('cart')) &&
			JSON.parse(window.localStorage.getItem('cart')).length > 0
		) {
			let cartArr = JSON.parse(window.localStorage.getItem('cart'));

			for (let i = 0; i < cartArr.length; i++) {
				cartContainer.innerHTML += `
				<div class="p-4 w-full bg-white flex justify-between border-b border-slate-300">
					<div class="w-3/12">
						<img src="${cartArr[i].image}" alt="" class="w-40">
					</div>

					<div class="pl-4 w-10/12">
						<div>
							<h3 class="text-xl">${cartArr[i].name}</h3>
						</div>

						<div>
							<span class="text-sm text-green-600">In stock</span>
						</div>

						<div>
							<span class="text-xs text-gray-600">Eligible for FREE shipping</span>
						</div>

						<div class="flex items-center space-x-6">
						
							<div id="quantity-element" class="flex hover:cursor-pointer rounded-lg border border-gray-200 p-2 w-2/12 justify-between shadow-md relative">

								<div id="quantity-menu" class="w-full z-10 h-48 bg-white absolute top-10 left-0 rounded-lg flex flex-col overflow-y-scroll hidden">
								
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">1</div>
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">2</div>
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">3</div>
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">4</div>
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">5</div>
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">6</div>
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">7</div>
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">8</div>
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">9</div>

								</div>

								<span class="hidden lg:block md:block text-sm mr-1">Qty:</span>

								<span class="text-sm mr-1">${cartArr[i].quantity}</span>

								<ion-icon name="caret-down-sharp" class="text-gray-600 text-sm pt-1"></ion-icon>

							</div>

							<div>
								<span id="cart-delete-btn" class="text-xs text-blue-600 hover:underline hover:cursor-pointer">Delete</span>
							</div>

							<div>
								<span class="text-xs text-blue-600 hover:underline hover:cursor-pointer">Save for later</span>
							</div>
						</div>
					</div>

					<div class="w-3/12 flex justify-end">
						<h3 id="product-price" class="text-lg font-semibold">${cartArr[i].price}</h3>
					</div>
				</div>`;

				cartTotal.innerHTML = `<span class="text-lg text-gray-800 pl-6">Subtotal ${cartArr.length} item(s): </span>
				
				<span class="text-lg font-semibold text-gray-800">??${cartArr
					.map(v => {
						return parseFloat(v.price.slice(1) * v.quantity);
					})
					.reduce((a, b) => {
						return a + b;
					}, 0)
					.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
				`;
			}

			cartContainer.classList.remove('hidden');
			deselectItems.classList.remove('hidden');
			orderInfo.classList.remove('hidden');
		} else {
			cartContainer.classList.add('hidden');
			deselectItems.classList.add('hidden');
			orderInfo.classList.add('hidden');
			noItems.classList.remove('hidden');
		}
	}
}

const cartPage = new CartPage();

document.addEventListener('DOMContentLoaded', () => {
	cartPage.cartHtml();

	document.querySelectorAll('#cart-delete-btn').forEach(v => {
		v.addEventListener('click', e => {
			cart.removeFromCart(e.path[3].children[0].children[0].textContent);
			window.location.reload();
		});
	});

	document.querySelectorAll('#quantity-element').forEach(v => {
		v.addEventListener('click', () => {
			v.parentElement.firstElementChild.firstElementChild.classList.toggle('hidden');
		});
	});

	document.querySelectorAll('#quantity-number-btn').forEach(v => {
		v.addEventListener('click', e => {
			const item = cart.searchCart(
				v.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild
					.textContent
			);

			let quantity = parseFloat(e.target.textContent - item.quantity);

			cart.addToCart(item.name, item.image, item.price, quantity);

			window.location.reload();
		});
	});
});
