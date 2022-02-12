class buildCart {
	constructor() {
		if (window.localStorage.getItem('cart')) {
			this.cart = JSON.parse(window.localStorage.getItem('cart'));
		} else {
			this.cart = [];
		}
	}

	addToCart(element) {
		for (let i = 0; i < this.cart.length; i++) {
			if (this.cart[i].name === element.querySelector('#product-name').textContent) {
				this.cart[i].quantity++;

				window.localStorage.setItem('cart', JSON.stringify(this.cart));

				return;
			}
		}

		this.cart.push({
			name     : element.querySelector('#product-name').textContent,
			image    : element.querySelector('#product-img').getAttribute('src'),
			price    : element.querySelector('#product-price').textContent,
			quantity : 1
		});
		window.localStorage.setItem('cart', JSON.stringify(this.cart));
	}

	removeFromCart(name) {
		for (let i = 0; i < this.cart.length; i++) {
			if (name === this.cart[i].name) {
				window.localStorage.setItem(
					'cart',
					JSON.stringify(
						this.cart.filter(v => {
							return v.name !== name;
						})
					)
				);

				return;
			}
		}
	}

	clearCart() {
		window.localStorage.clear('cart');
	}
}

const cart = new buildCart();

document.querySelectorAll('#cart-btn').forEach(v => {
	v.addEventListener('click', e => {
		cart.addToCart(v.parentElement);
	});
});

if (window.localStorage.getItem('cart')) {
	let cart = JSON.parse(window.localStorage.getItem('cart'));

	if (cart.length > 0) {
		document.querySelector('#cart-items').innerHTML = `${cart
			.map(v => {
				return v.quantity;
			})
			.reduce((a, b) => {
				return a + b;
			}, 0)}`;
	}
}

function deleteCart() {
	cart.clearCart();
	window.location.reload();
}

class CartPage {
	constructor() {}

	cartHtml() {
		if (
			JSON.parse(window.localStorage.getItem('cart')) &&
			JSON.parse(window.localStorage.getItem('cart')).length > 0
		) {
			let cartArr = JSON.parse(window.localStorage.getItem('cart'));

			for (let i = 0; i < cartArr.length; i++) {
				document.querySelector('#cart-page').innerHTML += `
				<div class="p-4 w-full bg-white flex justify-between border-b border-slate-300">
					<div class="w-3/12">
						<img src="${cartArr[i].image}" alt="" class="w-40">
					</div>

					<div class="w-6/12">
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
						
							<div id="quantity-element" class="flex hover:cursor-pointer rounded-lg border border-gray-200 p-2 w-2/12 sm:w-4/12 justify-between shadow-md relative">

								<div id="quantity-menu" class="w-full z-10 h-48 bg-white absolute top-10 left-0 rounded-lg flex flex-col overflow-y-scroll hidden">
								
									<div class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">1</div>
									<div class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">2</div>
									<div class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">3</div>
									<div class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">4</div>
									<div class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">5</div>
									<div class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">6</div>
									<div class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">7</div>
									<div class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">8</div>
									<div class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">9</div>

								</div>

								<span class="text-sm mr-1">Qty:</span>

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

				document.querySelector(
					'#cart-total'
				).innerHTML = `<span class="text-lg text-gray-800 pl-6">Subtotal ${cartArr.length} item(s): </span>
				
				<span class="text-lg font-semibold text-gray-800">£${cartArr
					.map(v => {
						return parseFloat(v.price.slice(1) * v.quantity);
					})
					.reduce((a, b) => {
						return a + b;
					}, 0)
					.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
				`;
			}

			document.querySelector('#cart-page').classList.remove('hidden');
			document.querySelector('#order-info').classList.remove('hidden');
		} else {
			document.querySelector('#cart-page').classList.add('hidden');
			document.querySelector('#order-info').classList.add('hidden');
			document.querySelector('#no-cart-items').classList.remove('hidden');
		}
	}
}

const cartPage = new CartPage();

if (window.location.href === 'http://127.0.0.1:5501/cart-page.html') {
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
				console.log(v.closest('div').closest('div'));
			});
		});
	});
}
