// eg1
function Foo() {
    getName = function () {
        alert(1);
    };
    return this;
}

Foo.getName = function () {
    alert(2);
};

Foo.prototype.getName = function () {
    alert(3);
};

var getName = function () {
    alert(4);
};

function getName() {
    alert(5);
}

Foo.getName(); // 2

getName(); // 4

Foo().getName(); // 1

getName(); // 1

new Foo.getName(); // 2

new Foo().getName(); // 3

new new Foo().getName(); // 3

// 实际代码如下
function Foo() {
    getName = function () {
        alert(1);
    };
    return this;
}

var getName;

function getName() {
    alert(5);
}

Foo.getName = function () {
    alert(2);
};

Foo.prototype.getName = function () {
    alert(3);
};

getName = function () {
    alert(4);
};


getName(); // 4

Foo().getName(); // 1

getName(); // 1

Foo.getName(); // 2

new Foo.getName();// 2 先执行Foo.getName()  new关键字无效

(new Foo).getName();// 3 先执行new Foo创建对象

new Foo().getName(); // 3 先执行new Foo()创建对象

new new Foo().getName(); // 3 相当于 new Foo().getName() new关键字无效
