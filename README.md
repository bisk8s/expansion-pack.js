expansion-pack.js
================
Adding some useful (and others not so useful) functions to javascript's objects.

Why?
------------
It started as a challenge to implement some functions to the javascript Array and now we're implementing stuff all around. The only rule is to implement them as prototypes (this is an expansion pack after all). Accepting sugestions ans bits of code!

Installation:
------------
```
npm install expansion-pack
```

Some ways to use it:
------------
```javascript
var ExpansionPack = require("expansion-pack");
ExpansionPack.extendAll();

// array functions
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log('bubbleSort', arr.bubbleSort());
console.log('shuffle', arr.shuffle());
console.log('sum', arr.sum());
console.log('getRandom', arr.getRandom());
console.log('remove', arr.remove());
console.log('clone', arr.clone());
console.log('unique', arr.unique());

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
```