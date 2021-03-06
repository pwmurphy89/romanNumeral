function makeMeRoman(number){
	var romanString = "";
	var numberOfNumeral = 0;
	var amountLeftOver = 0;

	function buildRomanString(amount, divider, romanNumeral){
		numberOfNumeral = Math.floor(amount / divider);
		for (i=0; i<numberOfNumeral;i++){
			romanString += romanNumeral;
		}
		amountLeftOver = amount - numberOfNumeral * divider;
	}

	function checkSpecialCase(amount, divider, romanNumeral){
		if(amount/ divider >=1){
			romanString += romanNumeral;
			amountLeftOver -= divider;
		}
	}

	buildRomanString(number, 1000, 'M');
	checkSpecialCase(amountLeftOver, 900, 'CM');

	buildRomanString(amountLeftOver, 500, 'D');
	checkSpecialCase(amountLeftOver, 400, 'CD');

	buildRomanString(amountLeftOver, 100, 'C');
	checkSpecialCase(amountLeftOver, 90, 'XC');

	buildRomanString(amountLeftOver, 50, 'L');
	checkSpecialCase(amountLeftOver, 40, 'XL');

	buildRomanString(amountLeftOver, 10, "X");
	checkSpecialCase(amountLeftOver, 9, "IX");

	buildRomanString(amountLeftOver, 5, "V");
	checkSpecialCase(amountLeftOver, 4, "IV");

	buildRomanString(amountLeftOver, 1, 'I');
	
	return romanString;
}
