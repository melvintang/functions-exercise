//Long Question 1
var lengths = function(listofstring){
  // Accept a list of strings and return an array of numbers where each number is the length of the corresponding string.
	var nums = [];
	for (var i = 0; i<listofstring.length; i++){
		console.log(words[i]);
		nums.push(words[i].length);
		console.log(nums);}
	return nums;
}

//Long Question 2
var transmogrifier = function(num1, num2, num3){
  //Accept 3 numbers and accept the product of the first two numbers, raised to the power of the third number.
	var multi = num1*num2;
		for (var i = 0; i < num3; i+1){
		   var result = (multi*multi);
		   console.log(result);
	return result;
	}
};

//Long Question 3
function wordReverse(s) {
  //accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation.
  return s.split(' ').reverse().join(' ');
}

//Short Question 1
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2){
  	return num1;}
  else
    {return num2;}
  }

  //Short Question 2
  var maxOfThree = function(a, b, c){
    greatest = a;
    if (greatest < b) {
      greatest = b;
    }
    if (greatest < c) {
      greatest = c;
    }
    return greatest;
  };


//Short Question 3: Poor practice because of multiple
function isCharacterAVowel(character) {

  if (character === "a"){
  	return true;
  }
   else if (character === "e"){
  	return true;
 }
  else if (character === "i"){
    return true;
  }
  else if (character === "o"){
    return true;
  }
  else if (character === "u"){
    return true;
  }

}
//ALternative short Question3:
function isCharacterAVowel(x){
	var isVowel = false;
	var str = str.toLowerCase();
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	for (var i = 0; i < vowels.length; i++) {
		if (vowels[i] === str) {isVowel = true;}

	} return isVowel;
}

//Use regular expression
function isCharacterAVowel(x){}

//Faster solution
function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

//Short Question 4a
var sumArray = function(numbers){
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
       total += numbers[i];
   }
//note: return should be outside the for loop otherwise will only return the 1st number in the list.
return total;
}

//Short Question 4b
var multiplyArray = function(numbers){
var product = 1;
for (var i = 0; i < numbers.length; i++) {

    product *= numbers[i];
}
}

//Short Question 5
function numargs() {
  return arguments.length;
}

//Short Question 6
function reverseString(s) {
  return s.split('').reverse().join('');
}

//Short Question 7
function findLongestWord(str) {
  var words = str.split(' ');
  var longest = 0;

  for (var i=0;i<words.length;i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
  }
  //note: return should be outside the for loop otherwise will only return the 1st word in the list.
  return longest;
}

//Short question 8
var filterLongWords = function(listofwords,x){
  var newlist = [];
  for (var i = 0; i < listofwords.length; i++){
		if (listofwords[i].length > x){
		    newlist.push(listofwords[i]);}
	}
	return listofwords;
}
