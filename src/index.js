// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	var obj = {};
	if(currency > 0 && currency < 10000){
		var coin50 = coin25 = coin10 = coin5 = coin1 =0;
		coin50  = Math.floor(currency / 50);
		currency = currency - coin50 * 50;
		coin25 = Math.floor(currency / 25);
		currency = currency - coin25 * 25;
		coin10 = Math.floor(currency / 10);
		currency = currency - coin10 * 10;
		coin5 = Math.floor(currency / 5);
		currency = currency - coin5 * 5;
		coin1 = currency / 1;
		if (coin50 != 0){
			obj["H"]  = coin50;
		}
		if (coin25 != 0){
			obj["Q"]  = coin25;
		}
		if (coin10 != 0){
			obj["D"]  = coin10;
		}
		if (coin5 != 0){
			obj["N"]  = coin5;
		}
		if (coin1 != 0){
			obj["P"]  = coin1;
		}
	}
	else if(currency != 0 && currency > 10000){
		obj.error = "You are rich, my friend! We don't have so much coins for exchange";
	}
	return obj;
}