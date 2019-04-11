function tail(fn) {
    var value,
        active = false,
        stack = [];
    return function () {//调用了tail函数之后，其实factorial已经改变为tail的回调函数。
        stack.push(arguments);
        if (!active) {
            active = true;
            /*
            先提前预设active为true，然后如果有列表有参数的话，就压入一个sum函数。
           sum函数执行的过程中active设置为true,所以返回了undefined，这样就不存在递归栈了。
           并且参数列表里面也加入了一个参数。
             */
            while (stack.length) {
                value = fn.apply(this, stack.shift());
            }
            active = false;
            return value;
        }

    };
}

var factorial = tail(function sum(t,result) {
    /*
         第二步因为参数还未满足条件，所以重新执行一次回调函数，函数执行过程中发现参数数组还有值，为4
         且active为false，所以重新执行一次上述函数，并且返回NaN，清空函数栈。
          */
    if (t > 1) {
        result+=t;
        return  t+factorial(--t,result);
    } else return result
});
console.log(factorial(100000,1));
