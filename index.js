// expansion-pack
exports.extendArray = require('./lib/array');
exports.extendNumber = require('./lib/number');
exports.extendString = require('./lib/string');
//
exports.extendAll = () => {
	exports.extendArray.do();
	exports.extendNumber.do();
	exports.extendString.do();
};
