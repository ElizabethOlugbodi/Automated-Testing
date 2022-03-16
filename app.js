
//EXAMPLES 

// const add = (num1, num2) => {
//     return num1 + num2;
// };

// const myArray = ['Tracy', 'Elizabeth', 'Holly'];

// module.exports = {add, myArray}

// CHALLENGE 1

// To make sure what is returned is not ‘null’
const getNotNull = () => {
    return 35;
};

// A value that is truthy
const getTruthy = () => {
    return '10';
};

// A value that is not falsy
const getNotFalsy = () => {
	return '10';
};

// Create a function that creates an object with 2 properties, test to
// makes sure that the objects properties are equal to your test
// function
const add = (num1, num2) => { 
    return num1 + num2 === num1*num2;
};

// A function that will return items in an array with 6 or more
// characters  
const getItems = (array) => {
	return array.filter((e) => e.length >= 6);
};

// CHALLENGE 2

// Create function on the following

// • Convert a number to a string
const convertNumberToString = (num) => {
	return num.toString();
};

// • Display the correct planet with the number order it is away from
// the sun
// (planet(3) //will return ‘Earth’)
const getPlanetFromOrder = (order) => {
	const planets = [
		'Mercury',
		'Venus',
		'Earth',
		'Mars',
		'Jupiter',
		'Saturn',
		'Uranus',
		'Neptune',
	];
	return planets[order- 3];
};

// • Count the amount of students present in the class. With an array
// or boolean values, count how many students are present (true =
// present)
// ([true, true, true, false, true] //will return 5)
const countAmountOfStudentsPresent = (attendanceArray) => {
	return attendanceArray.filter((attendance) => attendance === true).length;
};

// • Square every digit and concatenate them (must return an integer)
// (squareDigi(34) //will return 916)
const squareAndConcat = (digits) => {
	const digitString = digits.toString().split('');
	const result = digitString.reduce((prev, cur) => {
		prev += cur ** 2;
		return prev;
	}, '');
	return parseInt(result);
};

// (squareDigi(25) //will return 625)
// const squareAndConcat = (digits) => {
// 	const digitString = digits.toString().split('');
// 	const result = digitString.reduce((prev, cur) => {
// 		prev += cur ** 2;
// 		return prev;
// 	}, '');
// 	return parseInt(result);
// };


// • Given a year return back the century it is in
// (century(1705) //will return 17)
const convertYearToCentury = (year) => {
	return Math.floor(year / 100);
};

// • With an array of ones and zeroes, convert the equivalent binary
// value to an integer
const binary = (binaryArray) => {
	return binaryArray.reverse().reduce((prev, curr, index) => {
		prev += curr === 1 ? 2 ** index : 0;
		return prev;
	}, 0);
};





module.exports = {
	add,
	myArray,
	getNotNull,
	getTruthy,
	getNotFalsy,
	createObject,
	getItems,
	convertNumberToString,
	getPlanetFromOrder,
	countAmountOfPresentStudents,
	squareAndConcat,
	convertYearToCentury,
	binary,
};