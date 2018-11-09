// Array++
function extendArray() {
	// SortOn
	Array.prototype.sortOn = function () {
		var dup = this.slice();
		if (!arguments.length) return dup.sort();
		var args = Array.prototype.slice.call(arguments);
		return dup.sort(function (a, b) {
			var props = args.slice();
			var prop = props.shift();
			while (a[prop] == b[prop] && props.length) prop = props.shift();
			return a[prop] == b[prop] ? 0 : a[prop] > b[prop] ? 1 : -1;
		});
	};
	// BubbleSort
	Array.prototype.bubbleSort = function () {
		var done = false;
		while (!done) {
			done = true;
			for (var i = 1; i < this.length; i++) {
				if (this[i - 1] > this[i]) {
					done = false;
					[this[i - 1], this[i]] = [this[i], this[i - 1]];
				}
			}
		}
		return this;
	};
	// Shuffle
	Array.prototype.shuffle = function () {
		var currentIndex = this.length,
			temporaryValue, randomIndex;
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = this[currentIndex];
			this[currentIndex] = this[randomIndex];
			this[randomIndex] = temporaryValue;
		}
		return this;
	};
	// Sum
	Array.prototype.sum = function () {
		if (this.reduce) {
			const reducer = (accumulator, currentValue) => accumulator + currentValue;
			return this.reduce(reducer);
		}
	};
	// GetRandom
	Array.prototype.getRandom = function () {
		if (this.length == 0) return false;
		return this.splice(Math.floor(Math.random() * this.length), 1)[0];
	};
	// Remove
	Array.prototype.remove = function (returnNew) {
		var what, a = arguments,
			L = a.length,
			ax;
		while (L && this.length) {
			what = a[--L];
			while ((ax = this.indexOf(what)) !== -1) {
				this.splice(ax, 1);
			}
		}
		return this;
	};
	// Clone
	Array.prototype.clone = function () {
		return this.concat();
	};
	// Unique
	Array.prototype.unique = function (returnNew) {
		let onlyUnique = (value, index, self) => {
			return self.indexOf(value) === index;
		};
		return this.filter(onlyUnique);
	};
	return Array;
}
// Exports
exports.do = extendArray;