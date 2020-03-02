let para =
	'If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.';

// Convert paragraph string to an Array of characters
let paraArray = para.split('');

// Sort array by ascending character frequency
paraArray.sort((a, b) => {
	let aCount = 0;
	let bCount = 0;
	paraArray.forEach((x) => {
		if (x === a) {
			aCount++;
		}
		if (x === b) {
			bCount++;
		}
	});
	return aCount - bCount;
});

// Declare empty object
let charObj = {};

// Iterate through character Array
// Fill object with key value pairs
// Key is the char, value is n times is appears
paraArray.forEach((char) => {
	if (!charObj[char]) {
		charObj[char] = 1;
	} else {
		charObj[char]++;
	}
});

// instatiate final array which will be returned
let finalReturnArray = [];
// Assign counter number of characters in paragraph
let charCount = paraArray.length;

// Iterate through object while char count is >= 50
for (let key in charObj) {
	if (charCount - charObj[key] >= 50) {
		charCount -= charObj[key];
		// Push character into array n number of times it appeared
		// Could optionally remove for loop and push char only once
		for (let i = 0; i < charObj[key]; i++) {
			finalReturnArray.push(key);
		}
		// Log running total of num characters left in paragraph
		console.log(charCount);
	}
}

// Return array with removed characters
console.log(finalReturnArray);
