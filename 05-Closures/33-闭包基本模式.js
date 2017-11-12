// 闭包的基本模式:
// 在f1内部创建函数setNum,setNum可以访问f1内部的成员
// 将setNum return , 于是f1外部也可以访问setNUm,从而达到更改f1内部成员的目的

function f1() {
    var num = 123;
    var setNum = function (a) {
        num = a;
        console.log(num);
    };
    return setNum;
}

var foo = f1();
foo(10);


var foo = (function () {
    var num = 123;
    return function (a) {
        if (a !== undefined) { //如果传参 set
            num = a;
        } else {
            return num; //如果不传参 get
        }
    };
})();

// var foo=f1();
foo(10); // set
console.log(foo()); // get

