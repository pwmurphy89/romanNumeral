function makeMeRoman(number){
	var number = number;
	var romanString = "";
	var numberOfNumeral = 0;
	var romanArray = [
		{number: 1000, character: 'M', specialNum: 900, specialChar: 'CM'},
		{number: 500, character: 'D', specialNum: 400, specialChar: 'CD'},
		{number: 100, character: 'C', specialNum: 90, specialChar: 'XC'},
		{number: 50, character: 'L', specialNum: 40, specialChar: 'XL'},
		{number: 10, character: 'X', specialNum: 9, specialChar: 'IX'},
		{number: 5, character: 'V', specialNum: 4, specialChar: 'IV'},
		{number: 1, character: 'I', specialNum: 0, specialChar: null}
	];
	function buildRomanString(amount, romanObj){
		numberOfNumeral = Math.floor(amount / romanObj.number);
		for (var i=0; i<numberOfNumeral;i++){
			romanString += romanObj.character;
		}
		number = amount - numberOfNumeral * romanObj.number; 
		if(number/ romanObj.specialNum >=1){
			romanString += romanObj.specialChar;
			number -= romanObj.specialNum;
		}
	}
	for(var i=0; i<romanArray.length;i++){
		buildRomanString(number,romanArray[i]);
	}
	return romanString;
}
