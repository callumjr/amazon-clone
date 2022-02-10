class buildCart {
	constructor() {
		if (window.localStorage.getItem('cart')) {
			this.cart = JSON.parse(window.localStorage.getItem('cart'));
		} else {
			this.cart = [];
		}
	}

	addToCart(element) {
		this.cart.push({
			name  : element.querySelector('#product-name').textContent,
			image : element.querySelector('#product-img').getAttribute('src'),
			price : element.querySelector('#product-price').textContent
		});
		window.localStorage.setItem('cart', JSON.stringify(this.cart));
	}

	removeFromCart(element) {}
}

const cart = new buildCart();

document.querySelectorAll('#cart-btn').forEach(v => {
	v.addEventListener('click', e => {
		cart.addToCart(v.parentElement);
	});
});

if (window.localStorage.getItem('cart')) {
	document.querySelector('#cart-items').innerHTML = `${JSON.parse(window.localStorage.getItem('cart')).length}`;
}

class CartPage {
	constructor() {}

	cartHtml() {
		if (window.localStorage.getItem('cart')) {
			let cartArr = JSON.parse(window.localStorage.getItem('cart'));

			for (let i = 0; i < cartArr.length; i++) {
				document.querySelector('#cart-page').innerHTML += `
				<div class="p-4 w-full bg-white flex justify-between border-b border-slate-300" name="${i}">
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
								<span class="text-sm mr-1">1</span>
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

				cartArr[i];
			}

			document.querySelector('#cart-page').classList.add(`grid-cols-${cartArr.length}`);
		} else {
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
				console.log(v.parentElement.parentElement.parentElement.parentElement);
			});
		});
	});
}
