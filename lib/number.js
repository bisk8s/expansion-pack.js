// Number++
function extendNumber () {
	// FormatMoney
	Number.prototype.formatMoney = function (currency, decimalSpaces, decimalSeparator, thousandsSeparator) {
		n = this;
		currency = decimalSeparator == undefined ? 'R$ ' : currency;
		decimalSpaces = isNaN(decimalSpaces = Math.abs(decimalSpaces)) ? 2 : decimalSpaces;
		decimalSeparator = decimalSeparator == undefined ? ',' : decimalSeparator;
		thousandsSeparator = thousandsSeparator == undefined ? '.' : thousandsSeparator;
		let minusSingal = n < 0 ? '-' : '';
		let integerValue = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(decimalSpaces)));
		let thousandsSize = integerValue.length % 3;
		//
		return currency + minusSingal + (thousandsSize ? integerValue.substr(0, thousandsSize) + thousandsSeparator : '') + integerValue.substr(thousandsSize).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSeparator) + (decimalSpaces ? decimalSeparator + Math.abs(n - integerValue).toFixed(decimalSpaces).slice(2) : '');
	};
	// Factorial
	Number.prototype.factorial = function () {
		let value = this;
		for (let iFactorial = 1; iFactorial < this; iFactorial++) value *= iFactorial;
		return value;
	};
	return Number;
}
exports.do = extendNumber;
