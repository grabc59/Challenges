var findHighSum = function (cardNumList) {
	var highCardSum = 0;
	var highCardNum = "";
	for (i in cardNumList) {
		thisCardNum = cardNumList[i];
		thisCardSum = 0;
		for (j in thisCardNum) {
			if (isNaN(j) === false) {
				thisCardSum += Number(thisCardNum(j));
			}
		}
		if (thisCardSum >= highCardSum) {
			highCardSum = thisCardSum;
		}
	}
	// console.log(highCardSum);
	// console.log(highCardNUm);
	return 'the high card sum is ' + highCardSum + '. the high card num is '+ highCardNum
}

findHighSum(['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260']);
