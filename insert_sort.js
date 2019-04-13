function insert_sort(array) {
    let target,sortCourse;
    for (var i=1;i<array.length;i++){
        target=array[i];sortCourse=i;
        while (sortCourse>0&&array[sortCourse-1]>target){
            //遍历索引前面的数组，如果当前索引的值比前面的小，就向前继续遍历，
            array[sortCourse]=array[sortCourse-1];
            sortCourse--
        }
        //结束时取得当前索引的正确位置

        array[sortCourse]=target;
    }
}

const array=[5,4,3,2,1,5,4,3,2,1,5,4,3,2,1];insert_sort(array,);
