function filter_repetition(array) {
    const array_filtration=new Map();
    let result;
    if (array.length===0){
         result=false;
    } else {
        for ( var i=0;i<array.length;i++){
            if (array_filtration.has(array[i])){
                return console.log(result='true');
            }else {
                array_filtration.set(array[i],'1');
                result='false';
            }
        }
    }
    console.log (result);
}
let array_test=[1,2   ,3,1];
console.time('map');
filter_repetition(array_test);
console.timeEnd('map');
function filter_repetition (nums) {
    const map = {};
    for (const v of nums) {
        if (v in map) {
            return true
        }
        map[v] = true
    }
    return false
};
console.time('map');
filter_repetition(array_test);
console.timeEnd('map');
/*
map: 0.541ms
map: 0.017ms
 */