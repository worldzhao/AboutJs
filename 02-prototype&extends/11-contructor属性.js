// 原型对象创建出来的时候会有个默认的属性constructor指向对应构造函数.
// 实例对象如何访问构造函数?
// p.constructor,因为实例对象可以访问原型对象中的constructor.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

console.log(Person.prototype.constructor); //function Person(...){} 通过构造函数的原型访问构造函数

var p = new Person('zzw', '18');
console.log(p.name);

var p1 = new p.constructor('zjj', '18'); //通过已经创建好的实例对象调用构造函数
console.log(p1.name);

Person.prototype = {}; //重写构造函数的原型,constructor属性也被重写,不再指向关联的构造函数,而是指向function Object(){...},与构造函数没有关联了

console.log(Person.prototype.constructor); //function Object(){...}

Person.prototype = {
    constructor: Person
};

console.log(Person.prototype.constructor); //function Object(){...}