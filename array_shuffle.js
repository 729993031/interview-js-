function shuffle(array) {
    let arrayLength=array.length;
    while (arrayLength!==0){
        const shuffleIndex=Math.floor(Math.random()*arrayLength--);
        [array[shuffleIndex],array[arrayLength]]=[array[arrayLength],array[shuffleIndex]]
    }
    return array;
}
console.log(shuffle([1,2,3,4,5,6,7,8]));