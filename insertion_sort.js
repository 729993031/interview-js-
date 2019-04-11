let n=0;
function swap(array,left,right) {
    [array[left],array[right]]=[array[right],array[left]];
}
function insertionSort(array) {
    const array_length=array.length;
    for (let x=0;x<array_length;x++){
        for (let y=x+1;y<array_length;y++){
            n++;
            console.log(array)
            if (array[x]>array[y]){
                swap(array,x,y)
            }
        }
    } 
    return array;
}
console.log(insertionSort([5,3,2,1,5,3,2,1,5,3,2,1,5,3,2,1]),n)