// function calculate_expression() {
// 	let result = document.getElementById('result').value;
// 	console.log(result);

// 	// initially stack will be empty
// 	const stack = [];

// 	for (let i = 0; i < result.length; i++) {
// 		const token = result[i];

// 		if (!isNaN(token)) {
// 			// if the token is a number, push it onto the stack
// 			stack.push(Number(token));
// 		} else {
// 			// if the token is an operator, pop the top two values from the stack,
// 			// apply the operator to them, and push the result back onto the stack
// 			const operand1 = stack.pop();
// 			const operand2 = stack.pop();

// 			switch (token) {
// 				case '+':
// 					stack.push(operand1 + operand2);
// 					break;
// 				case '-':
// 					stack.push(operand1 - operand2);
// 					break;
// 				case '×':
// 					stack.push(operand1 * operand2);
// 					break;
// 				case '÷':
// 					stack.push(operand1 / operand2);
// 					break;
// 				default:
// 					alert('Invalid operator');
// 			}
// 		}
// 	}

// 	// Final result will be on the top of the stack
// 	console.log(stack.pop());
// 	return stack.pop();
// }

//calculate_expression()

//case 2------------------------------------------------------------------------------
function calculate_expression(expression) {
	// Step 1: Convert the expression to postfix notation
	const postfixExpression = infixToPostfix(expression);

	// Step 2: Evaluate the postfix expression using a stack
	const stack = [];
	for (let i = 0; i < postfixExpression.length; i++) {
		const symbol = postfixExpression[i];
		if (isOperand(symbol)) {
			stack.push(parseFloat(symbol));
		} else if (isOperator(symbol)) {
			const operand2 = stack.pop();
			const operand1 = stack.pop();
			const result1 = applyOperator(symbol, operand1, operand2);
			stack.push(result1);
		}
	}

	// The final result is on the top of the stack
	return stack.pop();
}

// Helper functions

function infixToPostfix(expression) {
	const stack = [];
	const output = [];

	const precedence = {
		'+': 1,
		'-': 1,
		'*': 2,
		'/': 2,
	};

	for (let i = 0; i < expression.length; i++) {
		const symbol = expression[i];
		if (isOperand(symbol)) {
			output.push(symbol);
		} else if (isOperator(symbol)) {
			while (
				stack.length > 0 &&
				stack[stack.length - 1] !== '(' &&
				precedence[symbol] <= precedence[stack[stack.length - 1]]
			) {
				output.push(stack.pop());
			}
			stack.push(symbol);
		} else if (symbol === '(') {
			stack.push(symbol);
		} else if (symbol === ')') {
			while (stack.length > 0 && stack[stack.length - 1] !== '(') {
				output.push(stack.pop());
			}
			stack.pop();
		}
	}

	while (stack.length > 0) {
		output.push(stack.pop());
	}

	return output;
}

function isOperand(symbol) {
	return !isNaN(parseFloat(symbol));
}

function isOperator(symbol) {
	return ['+', '-', '*', '/'].includes(symbol);
}

function applyOperator(operator, operand1, operand2) {
	switch (operator) {
		case '+':
			return operand1 + operand2;
		case '-':
			return operand1 - operand2;
		case '*':
			return operand1 * operand2;
		case '/':
			return operand1 / operand2;
	}
}

// Calling above function to get final result on display of calculator
function getEvaluatedResult() {
	const result = document.getElementById('result').value;
	const expression = result;
	const outcome = calculate_expression(expression);
	console.log(outcome);
	document.getElementById('result').value = outcome;
}
