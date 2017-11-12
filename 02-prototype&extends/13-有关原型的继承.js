function Person(name, age) {
    this.name = name;
    this.age = age;
}

//1. 给原型对象中添加成员(对象的动态特性,非严格意义上的继承)
/*
	Person.prototype.sayHello=function(){
		console.log('hello');
	}

	var p = new Person('冯巩','50');

	p.sayHello();//p对象就继承了原型对象

*/
//2. 直接替换原型对象,原型对象原本的属性无法保存
/*
	var parent={
		saygoodbye:function(){
			console.log('goodbye');
		}
	};

	Person.prototype=parent;

	var p1 = new Person('zzw','20');

	p1.saygoodbye();//p对象就继承了原型对象,也就是我们的parent对象

*/

//3.用混入的方式为原型对象添加成员,保存了原型对象原有的属性(sayhi方法)

Person.prototype.sayhi = function () {
    console.log('hi');
}

var parent = {
    saygoodbye: function () {
        console.log('goodbye');
    }
};

for (var k in parent) {
    Person.prototype[k] = parent[k];
}

var p2 = new Person('zzw', '18');

p2.saygoodbye();
