const addToCartButtons = document.querySelectorAll('#cart-btn');
const deleteFromCartButtons = document.querySelectorAll('#cart-delete-btn');
const cartItemsNumber = document.querySelector('#cart-items');
const cartContainer = document.querySelector('#cart-page');
const cartTotal = document.querySelector('#cart-total');
const orderInfo = document.querySelector('#order-info');
const noCartItems = document.querySelector('#no-cart-items');
const quantityContainers = document.querySelectorAll('#quantity-element');
const quantityElements = document.querySelectorAll('#quantity-menu-item');

class BuildCart {
	constructor() {
		if (window.localStorage.getItem('cart')) {
			this.cart = JSON.parse(window.localStorage.getItem('cart'));
		} else {
			this.cart = [];
		}
	}

<<<<<<< HEAD
	//could make this reusable by adding product name as an arg

	addToCart(element) {
		for (let i = 0; i < this.cart.length; i++) {
			if (this.cart[i].name === element.querySelector('#product-name').textContent) {
				this.cart[i].quantity++;
=======
	searchCart(criteria) {
		for (let obj of this.cart) {
			for (let key in obj) {
				if (obj[key] === criteria) {
					return obj;
				}
			}
		}
	}
>>>>>>> old-state

	addToCart(name, img, price, quantity = 1) {
		if (this.searchCart(name)) {
			this.searchCart(name).quantity += quantity;
			//figure out how to get in both situations

			window.localStorage.setItem('cart', JSON.stringify(this.cart));

			return;
		}

		this.cart.push({
			name     : name,
			image    : img,
			price    : price,
			quantity : 1
		});
		window.localStorage.setItem('cart', JSON.stringify(this.cart));
	}

	removeFromCart(name) {
		for (let i = 0; i < this.cart.length; i++) {
<<<<<<< HEAD
			console.log(name);
			if (name === this.cart[i].name) {
=======
			if (this.cart[i].name === name) {
>>>>>>> old-state
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

const buildCart = new BuildCart();

addToCartButtons.forEach(v => {
	v.addEventListener('click', e => {
<<<<<<< HEAD
		buildCart.addToCart(v.parentElement);
=======
		cart.addToCart(
			v.parentElement.querySelector('#product-name').textContent,
			v.parentElement.querySelector('#product-img').getAttribute('src'),
			v.parentElement.querySelector('#product-price').textContent
		);
>>>>>>> old-state
	});
});

if (window.localStorage.getItem('cart')) {
	let cart = JSON.parse(window.localStorage.getItem('cart'));

	if (cart.length > 0) {
		cartItemsNumber.innerHTML = `${cart
			.map(v => {
				return v.quantity;
			})
			.reduce((a, b) => {
				return a + b;
			}, 0)}`;
	}
}

function deleteCart() {
	buildCart.clearCart();
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
								
<<<<<<< HEAD
									<div id="quantity-menu-item" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">1</div>

									<div id="quantity-menu-item" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">2</div>

									<div id="quantity-menu-item" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">3</div>

									<div id="quantity-menu-item" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">4</div>

									<div id="quantity-menu-item" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">5</div>

									<div id="quantity-menu-item" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">6</div>

									<div id="quantity-menu-item" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">7</div>

									<div id="quantity-menu-item" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">8</div>

									<div id="quantity-menu-item" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">9</div>
=======
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">1</div>
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">2</div>
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">3</div>
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">4</div>
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">5</div>
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">6</div>
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">7</div>
									<div id="quantity-element" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">8</div>
									<div id="quantity-number-btn" class="border-b border-gray-200 py-2 pl-2 text-gray-600 hover:bg-gray-100">9</div>
>>>>>>> old-state

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

			cartContainer.classList.remove('hidden');
			orderInfo.classList.remove('hidden');
		} else {
			cartContainer.classList.add('hidden');
			orderInfo.classList.add('hidden');
			noCartItems.classList.remove('hidden');
		}
	}
}

const cartPage = new CartPage();

if (window.location.href === 'http://127.0.0.1:5501/cart-page.html') {
	document.addEventListener('DOMContentLoaded', () => {
		cartPage.cartHtml();

		deleteFromCartButtons.forEach(v => {
			v.addEventListener('click', e => {
				buildCart.removeFromCart(e.path[3].children[0].children[0].textContent);
				window.location.reload();
			});
		});

		quantityContainers.forEach(v => {
			v.addEventListener('click', () => {
<<<<<<< HEAD
				v.firstElementChild.classList.toggle('hidden');
			});
		});

		quantityElements.forEach(v => {
			v.addEventListener('click', e => {
				console.log('hello');
				let quantity = parseFloat(v.textContent);

				for (let i = 0; i < quantity; i++) {
					// cart.addToCart()

					//search cart function
					// search cart see how many their already are and subtract that from quantity then run add cart

					//faster algorithm --- go to element and add remaining to quantitiy

					//we can then use this for add to cart func

					console.log(e.path[4].firstElementChild);
				}
=======
				v.parentElement.firstElementChild.firstElementChild.classList.toggle('hidden');
			});
		});

		document.querySelectorAll('#quantity-number-btn').forEach(v => {
			v.addEventListener('click', e => {
				const item = cart.searchCart(
					v.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild
						.textContent
				);

				quantity = parseFloat(e.target.textContent - item.quantity);

				cart.addToCart(item.name, item.image, item.price, quantity);

				window.location.reload();
>>>>>>> old-state
			});
		});
	});
}
