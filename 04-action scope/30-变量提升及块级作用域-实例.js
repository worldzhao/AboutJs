// eg1
function foo() {
    var num = 123;
    console.log(num);
}

foo(); // 123
console.log(num); // num is not defined

// 实际代码如下
function foo() {
    var num;
    num = 123;
    console.log(num); // 123
}

foo();
console.log(num);

// is not defined 没有定义
// undefined  定义了没有赋值

// eg2
var scope = "global";

foo();

function foo() {
    console.log(scope); //undefined
    var scope = "local";
    console.log(scope); //local
}

// 实际代码
var scope;

function foo() {
    var scope;
    console.log(scope);
    scope = "local";
    console.log(scope);
}

scope = "global";
foo();

// eg3 in 关键字 判断某个对象中是否有某个属性

function f1() {
    if ("a" in window) {
        var a = 10;
    }
    alert(a);//undefined
}

f1();

// 实际代码
function f1() {
    var a; // 提升至当前块级作用域顶部
    if ("a" in window) { // false 不执行
        a = 10;
    }
    alert(a);
}

// eg4
if ("a" in window) {
    var a = 10;
}
alert(a); // 10

// 实际代码
var a;
if ("a" in window) { // true
    a = 10;
}
alert(a);

// eg5
if (!"a" in window) {
    var a = 10;
}
alert(a); // undefined


// 实际代码
var a;
if (!"a" in window) {
    a = 10;
}
alert(a);

// eg6
var foo = 1;

function bar() {
    if (!foo) { // 此处提升了foo但是是undefined 判断语句会转为!undefined -->true
        var foo = 10;
    }
    alert(foo); // 10
}

bar();

// 实际代码
var foo;

function bar() {
    var foo; // undefined
    if (!foo) { // !undefined --> ture
        foo = 10; // 10
    }
    alert(foo); // 10
}

foo = 1;
bar();
