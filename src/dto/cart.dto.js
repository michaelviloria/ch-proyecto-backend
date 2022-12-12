export class CartDto {
	isNotEmpty(address, email) {
		if (address != "" && email != "") {
			return true;
		} else {
			return false;
		}
	}

	isArray(items) {
		if (Array.isArray(items)) {
			return true;
		} else {
			return false;
		}
	}

	validatedCart({ address, email, items }) {
		if (this.isNotEmpty(address, email) && this.isArray(items)) {
			return true;
		} else {
			return false;
		}
	}
}
