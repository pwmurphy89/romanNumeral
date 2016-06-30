function makeMeRoman(number){
	var romanString = "";
	var romanArray = [
		{number: 1000, character: 'M', specialNum: 900, specialChar: 'CM'},
		{number: 500, character: 'D', specialNum: 400, specialChar: 'CD'},
		{number: 100, character: 'C', specialNum: 90, specialChar: 'XC'},
		{number: 50, character: 'L', specialNum: 40, specialChar: 'XL'},
		{number: 10, character: 'X', specialNum: 9, specialChar: 'IX'},
		{number: 5, character: 'V', specialNum: 4, specialChar: 'IV'},
		{number: 1, character: 'I', specialNum: 0, specialChar: null}
	];
	for(var i=0; i<romanArray.length;i++){
		var numberOfNumeral = Math.floor(number / romanArray[i].number);
		for (var j=0; j<numberOfNumeral;j++){
			romanString += romanArray[i].character;
		}
		number = number - numberOfNumeral * romanArray[i].number; 
		if(number/ romanArray[i].specialNum >=1){
			romanString += romanArray[i].specialChar;
			number -= romanArray[i].specialNum;
		}
	}
	return romanString;
}

makeMeRoman(111);