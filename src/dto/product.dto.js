export class ProductDto {
	isNotEmpty(name, image, category) {
		if (name != "" && image != "" && category != "") {
			return true;
		} else {
			return false;
		}
	}

	isNumber(price, stock) {
		if (Number.isInteger(price) && Number.isInteger(stock)) {
			return true;
		} else {
			return false;
		}
	}

	validatedProduct({ name, image, category, price, stock }) {
		if (this.isNotEmpty(name, image, category) && this.isNumber(price, stock)) {
			return true;
		} else {
			return false;
		}
	}
}
