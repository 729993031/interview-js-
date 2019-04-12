function swap(array,left,right) {
    [array[left],array[right]]=[array[right],array[left]];
}
function sort(array) {
    const arrayLength=array.length;
   for (let x=0;x<arrayLength;x++){
       let minIndex=x;
       for (let y=x+1;y<arrayLength;y++){
           if (array[minIndex]>array[y]){
               minIndex=y
           }
       }
       if (minIndex!==x){
           swap(array,minIndex,x)
       }
   }
   return array;
}
console.log(sort([5,3,2,1,5,3,2,1,5,3,2,1,5,3,2,1]))