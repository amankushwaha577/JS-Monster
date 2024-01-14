///////////////////  Shallow copy : for both array ////////
let originalArray1 = [1, [2, 3], 4];
let shallowCopy1 = originalArray1.slice();
originalArray1[1][0] = 'X';
console.log(originalArray1);  // [1, ['X', 3], 4]
console.log(shallowCopy1);     // [1, ['X', 3], 4]

let originalArray2 = [1, [2, 3], 4];
let shallowCopy2 = [].concat(originalArray2);
originalArray2[1][0] = 'X';
console.log(originalArray2);  // [1, ['X', 3], 4]
console.log(shallowCopy2);     // [1, ['X', 3], 4]

////////////////// Shallow copy : Objects ///////////////////////
let originalObject3 = { a: 1, b: { c: 2 } };
let shallowCopy3 = Object.assign({}, originalObject3);
originalObject3.b.c = 'X';
console.log(originalObject3);  // { a: 1, b: { c: 'X' } }
console.log(shallowCopy3);     // { a: 1, b: { c: 'X' } }

let originalObject4 = { a: 1, b: { c: 2 } };
let shallowCopy4 = { ...originalObject4 };
originalObject4.b.c = 'X';
console.log(originalObject4);  // { a: 1, b: { c: 'X' } }
console.log(shallowCopy4);     // { a: 1, b: { c: 'X' } }

let originalObject5 = { a: 1, b: { c: 2 } };
let shallowCopy5 = Object.create(originalObject5);
originalObject5.b.c = 'X';
console.log(originalObject5);  // { a: 1, b: { c: 'X' } }
console.log(shallowCopy5);     // {}

////////////////////// deep copy ///////////////////////
let originalObject6 = { a: 1, b: { c: 2 } };
let deepCopy6 = JSON.parse(JSON.stringify(originalObject6));
originalObject6.b.c = 'X';
console.log(originalObject6);  // { a: 1, b: { c: 'X' } }
console.log(deepCopy6);        // { a: 1, b: { c: 2 } }
