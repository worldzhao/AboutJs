function f() {
    var name = "zzw";
    var age = "18";

    var o = {
        sgname: function (a) {
            if (a !== undefined) {
                name = a;
            } else {
                return name;
            }
        },
        sgage: function (a) {
            if (a !== undefined) {
                age = a;
            } else {
                return age;
            }
        }
    }
    return o;
}

var o = f();
var sgname = o.sgname;
var sgage = o.sgage;
sgage('20');
sgname('zjj');
console.log(sgname() + " " + sgage());


function f() {
    var name = "zzw";
    var age = "18";

    var o = {//原来因为只能返回一个方法,将set与get合一,现在使用对象,可以将其分开了
        setName: function (a) {
            name = a;
        },
        getName: function () {
            return name;
        },
        setAge: function (a) {
            age = a;
        },
        getAge: function () {
            return age;
        }
    };
    return o;
}

var o = f();
var getName = o.getName;
var getAge = o.getAge;
var setName = o.setName;
var setAge = o.setAge;

/*
注: 不可写成以下形式:
这样的话执行了4次f,返回了4个o 每一个o修改查询的数据都是对应的f,而不是同一个f
    var getName=f().getName;
    var getAge=f().getAge;
    var setName=f().setName;
    var setAge=f().setAge;
*/

/*  	console.log(getName()+getAge());

       setName('zjj');
       setAge('20');

       console.log(getName()+getAge());
*/
//使用这种方式就不会有重复调用f的情况出现了,实际上我们只需要一次就够了
var o = (function () {
    var name = "zzw";//私有变量
    var age = "18";//私有变量
    //这里面就是一个块级作用域,外部如果不通过特权方法对象则无法访问
    var o = {//特权对象
        setName: function (a) {  //特权方法1
            name = a;
        },
        getName: function () {   //特权方法2
            return name;
        },
        setAge: function (a) {   //特权方法3
            age = a;
        },
        getAge: function () {    //特权方法4
            return age;
        }
    }
    return o;
})();

var getName = o.getName;
var getAge = o.getAge;
var setName = o.setName;
var setAge = o.setAge;

console.log(getName() + getAge());

setName('zjj');
setAge('20');

console.log(getName() + getAge());
