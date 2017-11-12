function SuperType() {
    this.colors = ['red', 'blue', 'black']; // 超类实例成员
}

SuperType.prototype.sayHello = function () {
    console.log('hello');
}; // 超类原型成员

function SubType() {
    SuperType.call(this); // 调用超类的构造方法子类实例对象拥有了自己的colors 屏蔽了原型的colors
    this.sex = "male"; // 子类实例成员;
}

SubType.prototype = new SuperType(); // 继承
SubType.prototype.constructor = SubType; // 保持闭三角关系

var subObj1 = new SubType(); // 子类实例对象1
var subObj2 = new SubType(); // 子类实例对象2

// 到此为止,我们就完成了一个经典的原型链式继承

// 可以看出子类实例对象1 2都拥有了new SuperType()的成员,包括其 实例方法以及原型方法
// 但是此处相较于17而言,子类构造函数中调用了超类的构造函数,子类实例对象于是拥有了自己的colors,屏蔽掉了new SuperType中的colors

console.log(subObj1);
console.log(subObj2);

subObj1.colors.push('white'); // 改变subObj1的colors
console.log(subObj1.colors); // 影响到了subObj1的colors
console.log(subObj2.colors); // 并未影响到subObj2的colors
