/**
 *
 * @param {Array} array
 * @param {Array} resultArray
 * @return {Array} resultArray
 */
function level(array,resultArray) {
    array.filter(
        element=>Array.isArray(element)?level(element,resultArray):resultArray.push(element)
    );
    return resultArray;
}
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
var resultArray = [];
level(arr,resultArray);
console.log(resultArray);