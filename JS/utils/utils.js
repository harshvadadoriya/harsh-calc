// function to calculate factorial and normal calculation
export function calculate(input) {
	let result = document.getElementById('result').value;
	// check if the input includes the "!" symbol
	if (input.includes('!')) {
		// calculate factorial using the factorial function
		let num = parseInt(input.slice(0, -1));
		let result = factorial(num);
		document.getElementById('result').value = result;
	} else if (input.includes('π') || input.includes('e')) {
		input = input?.replaceAll(/π/g, '3.14');
		input = input?.replaceAll(/e/g, '2.7182');
		result = eval(input);
		document.getElementById('result').value = result;
	} else {
		// evaluate the input using the eval function
		result = eval(input);
		document.getElementById('result').value = result;
	}
}

// factorial function from previous example
function factorial(num) {
	if (typeof num !== 'number' || num < 0 || Math.floor(num) !== num) {
		return 'Invalid input';
	}
	let result = 1;
	for (let i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
}
