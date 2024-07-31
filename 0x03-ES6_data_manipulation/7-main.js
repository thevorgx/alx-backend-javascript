import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4,'vorg']), [1, 2, 'vorg']));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4,'ercudu']), [1, 2, 'vorg']));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4,'']), [1, 2, '']));