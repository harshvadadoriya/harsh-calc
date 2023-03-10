// const result = document.getElementById("result").value;
// function getResult() {
//   const result = document.getElementById("result").value;
//   console.log(result);

//   const body = document.querySelector("body");
//   body.addEventListener("submit", (event) => {
//     event.preventDefault();
//   });
// }

const arr = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'+',
	'-',
	'/',
	'*',
	'%',
	'(',
	')',
	'.',
];

// display keyboard key on screen when keyboard numbers or operators click
document.addEventListener('keydown', (event) => {
	// console.log(event);
	if (arr.includes(event.key)) {
		document.getElementById('result').value += event.key;
	}
	if (event.key == 'Enter' || event.key == '=') {
		try {
			const result = document.getElementById('result').value;
			document.getElementById('result').value = eval(result);
			console.log(result);
		} catch (error) {
			document.getElementById('result').value = 'Syntax Error';
		}
	}
	if (event.key == 'Backspace') {
		document.getElementById('result').value = document
			.getElementById('result')
			.value.slice(0, -1);
	}
});

// Get all the number buttons
var numberButtons = document.getElementsByClassName('calcBtn');

// Add a click event listener to each button
for (var i = 0; i < numberButtons.length; i++) {
	numberButtons[i].addEventListener('click', function () {
		// Get the value of the clicked button
		var buttonValue = this.value;

		// Get the current value of the input field
		var result = document.getElementById('result').value;

		// Add the button value to the input field
		document.getElementById('result').value = result + buttonValue;
	});
}

// to get result on screen when equal button pressed by user
const equalBtn = document.getElementById('eval');
equalBtn.addEventListener('click', () => {
	try {
		const result = document.getElementById('result').value;
		document.getElementById('result').value = eval(result);
		console.log(result);
	} catch (error) {
		document.getElementById('result').value = 'Syntax Error';
	}
});

// toggle button on 2nd button click
// const secondBtn = document.getElementById('second');
// secondBtn.addEventListener('click', () => {
// 	let buttonContainer = document.getElementsByClassName('sub_btn_container');
// 	// for loop to get first button element of all sub_btn_container class
// 	for (let i = 0; i < buttonContainer.length; i++) {
// 		const firstChild = buttonContainer[i].firstElementChild;
// 		if (secondBtn) {
// 			firstChild.innerHTML = `
// 			<button type="submit" id="one_by_x">123</button>
// 		  `;
// 		} else {
// 			firstChild.innerHTML = ``;
// 		}
// 		// alert('Hello world');
// 	}
// });

// function test() {
// 	// var buttonContainer = document.getElementById("buttonContainer");
// 	let buttonContainer =
// 		document.getElementsByClassName('sub_btn_container').firstElementChild;
// 	if (buttonContainer.innerHTML === '') {
// 		buttonContainer.innerHTML = `
// 		<button>Button 1</button>
// 		<button>Button 2</button>
// 	  `;
// 	} else {
// 		buttonContainer.innerHTML = '';
// 	}
// }
