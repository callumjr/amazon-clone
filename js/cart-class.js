class buildCart {
	constructor() {
		if (window.localStorage.getItem('cart')) {
			this.cart = JSON.parse(window.localStorage.getItem('cart'));
		} else {
			this.cart = [];
		}
	}

	searchCart(criteria) {
		for (let obj of this.cart) {
			for (let key in obj) {
				if (obj[key] === criteria) {
					return obj;
				}
			}
		}
	}

	addToCart(name, img, price, quantity = 1) {
		if (this.searchCart(name)) {
			this.searchCart(name).quantity += quantity;

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
			if (this.cart[i].name === name) {
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

export const cart = new buildCart();
