function Person(name) {
    this.name = name;
}

Person.prototype.age = 18; // 给原型新增值类型属性  

var p = new Person('zzw');

console.log(p.age); // 18 实例对象中不存在该属性 去原型中查找  

p.age = 20; // 给实例对象新增值类型属性  而非修改原型中的属性

console.log(p.age); // 20

var car = {
    brand: 'benz'
}

Person.prototype.car = car; // 给原型新增引用类型属性  

var p1 = new Person('lyf');

console.log(p1.car.brand); // benz 实例对象中不存在该属性 去原型中查找  

var temp = p1.car;

temp.brand = 'byd';
// p1.car.brand实例对象中不存在该属性,则修改原型中的属性,而非新增,具体表现在其他实例对象受到影响  

var p2 = new Person('asd');

console.log(p2.car.brand); // byd 实例对象中不存在该属性 去原型中查找,原型中的属性被p1修改了