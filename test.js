var ExpansionPack = require('./index');
ExpansionPack.extendAll();

// array functions
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('bubbleSort', arr.bubbleSort());
console.log('shuffle', arr.shuffle());
console.log('sum', arr.sum());
console.log('getRandom', arr.getRandom());
console.log('remove', arr.remove());
console.log('clone', arr.clone());
console.log('unique', arr.unique());
console.log('max', arr.max());
console.log('min', arr.min());
console.log('average', arr.avg());
console.log('clear', arr.clear());

// number functions
console.log((1234565789).formatMoney());
console.log((5).factorial());

// string functions
let str = 'Uma opção alternativa ao café é o pó de guaraná.';
let thisCouldBeBad = 'This¢£«±÷could&*()\/<>be!@#$%^bad';
console.log('squeeze', str.squeeze());
console.log('removeSymbols', thisCouldBeBad.removeSymbols());
console.log('truncate', str.truncate());
console.log('anagram', str.anagram());
console.log('reverse', str.reverse());
console.log('alphabeticalOrder', str.alphabeticalOrder());
console.log('removeDiacritics', str.removeDiacritics());
