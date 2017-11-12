//超类构造函数（实例成员）
function SuperType() {
    this.colors = ['red', 'blue', 'black'];
}

// 超类原型成员
SuperType.prototype.sayHello = function () {
    console.log('hello');
};

// 子类构造函数（实例成员）
function SubType() {
    this.sex = "male";
}

// 继承
SubType.prototype = new SuperType();
// 保持闭三角关系
SubType.prototype.constructor = SubType;

// 子类实例对象1
var subObj1 = new SubType();
// 子类实例对象2
var subObj2 = new SubType();

//到此为止,我们就完成了一个经典的原型链式继承

//可以看出子类实例对象1 2都拥有了new SuperType()的成员,包括其 实例方法 以及 原型方法

console.log(subObj1);
console.log(subObj2);

// 但存在一个问题,倘若修改子类实例对象1的colors会影响到实例对象2,这也就是为什么很少单独使用原型链式继承的原因,就和为什么很少使用单独使用原型模式创建对象一样.

// 改变subObj1的colors
subObj1.colors.push('white');

// 影响到了subObj2的colors
console.log(subObj2.colors);
