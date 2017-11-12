// 此处实现一个计算斐波那契数列的递归函数

function feibonaqi1(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 1;
    }
    if (n > 2) {
        return feibonaqi1(n - 1) + feibonaqi1(n - 2);
    }
}

var myfeibonaqi = feibonaqi1;
feibonaqi1 = null;//清除原函数的指向,导致递归中调用失败
console.log(myfeibonaqi(11));//报错


//如何解决这种问题  使用arguments.callee,指向函数自身 而不通过函数名指向

function feibonaqi1(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 1;
    }
    if (n > 2) {
        return arguments.callee(n - 1) + arguments.callee(n - 2);
    }
}


// 非递归方式
function f(n) {
    var arr = [0, 1, 1];
    if (n <= 2) {
        return 1
    }
    if (n > 2) {
        for (var i = 3; i <= n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        return arr[n];
    }
}