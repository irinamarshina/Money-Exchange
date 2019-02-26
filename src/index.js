// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	var obj = {};
	if(currency > 0 && currency < 10000){
		var coin50 = coin25 = coin10 = coin5 = coin1 =0, ost;
		coin50  = Math.floor(currency / 50);
		if (coin50){
			obj["H"]  = coin50;
		}
		currency = currency % 50;
		coin25 = Math.floor(currency / 25);
		if (coin25){
			obj["Q"]  = coin25;
		}
		currency = currency % 25;
		coin10 = Math.floor(currency / 10);
		if (coin10){
			obj["D"]  = coin10;
		}
		currency = currency % 10;
		coin5 = Math.floor(currency / 5);
		if (coin5){
			obj["N"]  = coin5;
		}
		currency = currency % 5;
		coin1 = currency / 1;
		if (coin1){
			obj["P"]  = coin1;
		}
		
	}
	else if(currency != 0 && currency > 10000){
		obj.error = "You are rich, my friend! We don't have so much coins for exchange";
	}
	return obj;
}
