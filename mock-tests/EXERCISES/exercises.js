/* Create functions and test it out :) */

/*
	Task 1. Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.

	countAll("Hello World") ➞ {"LETTERS":  10, "DIGITS": 0}
	countAll("H3ll0 Wor1d") ➞ {"LETTERS":  7, "DIGITS": 3}
	countAll("149990") ➞ {"LETTERS": 0, "DIGITS": 6}

	Task 2. Given an object containing the names and ages of a group of people, return the name of the oldest person.

	oldest({
		Emma: 71,
		Jack: 45,
		Amy: 15,
		Ben: 29
	}) ➞ "Emma"

	oldest({
		Max: 9,
		Josh: 13,
		Sam: 48,
		Anne: 33
	}) ➞ "Sam"

	Task 3. Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential
	order as the old array (minus duplicates).

	removeDups([1, 0, 1, 0]) ➞ [1, 0]
	removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
	removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]

	Task 4. Create a function that returns the index of the first vowel in a string.

	firstVowel("apple") ➞ 0
	firstVowel("hello") ➞ 1
	firstVowel("STRAWBERRY") ➞ 3
	firstVowel("pInEaPPLe") ➞ 1

	Task 5. Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

	reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
	reverseCase("MANY THANKS") ➞ "many thanks"
	reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"

	Task 6. Create a function that takes a string and returns the number (count) of vowels contained within it.

	countVowels("Celebration") ➞ 5
	countVowels("Palm") ➞ 1
	countVowels("Prediction") ➞ 4

	Task 7. Create a function that takes a string and returns a new string with all vowels removed.

	removeVowels("I have never seen a thin person drinking Diet Coke.")
	➞ " hv nvr sn  thn prsn drnkng Dt Ck."
	removeVowels("We're gonna build a wall!")
	➞ "W'r gnn bld  wll!"
	removeVowels("Happy Thanksgiving to all--even the haters and losers!")
	➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"

	Task 8. Write a function that converts an object into an array of keys and values.

	objectToArray({
		D: 1,
		B: 2,
		C: 3
	}) ➞ [["D", 1], ["B", 2], ["C", 3]]
	objectToArray({
		likes: 2,
		dislikes: 3,
		followers: 10
	}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

	Task 9. Create a function that takes an object and returns the keys and values as separate arrays.

	keysAndValues({ a: 1, b: 2, c: 3 })
	➞ [["a", "b", "c"], [1, 2, 3]]
	keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
	➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
	keysAndValues({ key1: true, key2: false, key3: undefined })
	➞ [["key1", "key2", "key3"], [true, false, undefined]]

	Task 10. An array is special, if every even index contains an even number and every odd index contains an odd number.
	Create a function that returns true if an array is special, and false otherwise.

	isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
	// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
	isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
	// Index 2 has an odd number 9.
	isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
	// Index 3 has an even number 8.

	Task 11. Your task is to create a Circle constructor that creates a circle with a radius provided by an argument.
	The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective
	areas and perimeter (circumference).

	For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.

	let circy = new Circle(11);
	circy.getArea();
	// Should return 380.132711084365
	let circy = new Circle(4.44);
	circy.getPerimeter();
	// Should return 27.897342763877365

	Create 4 functions
    function returns first character of string
    function return amount of vowels
    function return uppercase version
	function checks if substring exists

	MOCKING

	Zadanie 1.

	Create a file with 4 functions:
	- function takes an array and returns first element
	- function takes element and check if it exists in an array
	- function takes array and returns sum of elements
	- function takes array an returns max value

	Then create test file and mock each one of them with following implementations:
	Call those functions and ceck if followed functions has been called

	getArrayFirstElement		return letter 'm'
	checkIfExists						return true
	getSumOfArrayElements		return multiplication
	getMaxArrayValue				return min
*/
