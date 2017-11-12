// 利用数组
function f1() {
    var name = "zzw";
    var age = "18";

    function f2() {
        return name;
    }

    function f3() {
        return age;
    }

    return [f2, f3];
}

var getName = f1()[0];
var getAge = f1()[1];
console.log(getName());
console.log(getAge());


// 利用对象
function f() {
    var name = "zzw";
    var age = "18";

    var o = {
        getName: function () {
            return name;
        },
        getAge: function () {
            return age;
        }
    };

    return o;
}

var getName = f().getName;
var getAge = f().getAge;
console.log(getName());
console.log(getAge());
