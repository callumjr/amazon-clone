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
						cart.filter(v => {
							return v.name !== clickedName;
						})
					)
				);
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

	document.querySelector('#cart-items').innerHTML = `${cart
		.map(v => {
			return v.quantity;
		})
		.reduce((a, b) => {
			return a + b;
		}, 0)}`;
}

if (window.location.href === 'http://127.0.0.1:5501/cart-page.html') {
	document.querySelectorAll('#cart-delete-btn').forEach(v => {
		v.addEventListener('click', e => {
			cart.removeFromCart(e.path[3].children[0].children[0].textContent);
			window.location.reload();
		});
	});

	// document.querySelector('#cart-deselect').addEventListener('click', e => {
	// 	console.log(e);
	// });
}

class CartPage {
	constructor() {}

	cartHtml() {
		if (window.localStorage.getItem('cart')) {
			document.querySelector('#cart-page').classList.remove('hidden');

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
							<div class="flex hover:cursor-pointer rounded-lg border border-gray-200 p-2 w-2/12 justify-between shadow-md">
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
			}

			document.querySelector('#cart-page').classList.add(`grid-cols-${cartArr.length}`);
		} else {
			document.querySelector('#cart-page').classList.add('hidden');
			document.querySelector('#no-cart-items').classList.remove('hidden');
		}
	}
}

const cartPage = new CartPage();

if (window.location.href === 'http://127.0.0.1:5501/cart-page.html') {
	document.addEventListener('DOMContentLoaded', () => {
		cartPage.cartHtml();
	});
}

// window.localStorage.clear('cart');
