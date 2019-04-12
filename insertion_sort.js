function swap(array, left, right) {
    [array[left], array[right]] = [array[right], array[left]];
}

function sortStart(array) {
    insertionSort(array, 0, array.length - 1);
}

function insertionSort(array, start, end) {
    if (array.length > 1) {
        let cardinal_number = partition(array, start, end);
        /*
        左索引如果比基元小，证明还没遍历完毕
        右索引如果比基元大，说明还要继续遍历
         */
        if (start < cardinal_number - 1) {
            insertionSort(array, start, cardinal_number - 1)
        }
        if (cardinal_number < end) {
            insertionSort(array, cardinal_number, end)
        }
    }
}

function partition(array, start, end) {

    let x = start;
    let y = end;
    let middle = array[Math.floor((start + end) / 2)];

    while (x <= y) {//确定数组遍历完毕
        while (array[x] < middle) {
            x++
        }
        while (array[y] > middle) {
            y--
        }
        if (x <= y) {//如果左数组还没遍历完毕，比中间索引小，说明左数组比较大，要交换左右数组。
            swap(array, x, y);
            x++;
            y--;
        }
    }
    return x;
}

const array_test = [5, 4, 3, 2, 1];
sortStart(array_test);


