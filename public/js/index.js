const input = document.querySelector("#phone");
const intl = window.intlTelInput(input, {
	preferredCountries: ["co", "arg"],
});

const form = document.querySelector("#formSignup");
form.addEventListener("submit", async () => {
	const number = intl.getNumber();
	input.value = number;
});
