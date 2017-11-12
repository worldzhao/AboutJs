// 1.对象字面量法 (key:value,key:value)
var zzw = {
	name: "zzw",
	age: '20',
	major: 'cs'
};
// 缺点:冗余度过高,若需要创建属性一致的对象需要不断写对象字面量,不断重复

// 2.工厂函数法(对象的动态特性)
// 使用对象的动态特性为对象添加属性与方法,但是也挺麻烦的,封装性还差
var zjj = new Object();
zjj.name = "zjj";
zjj.age = "20";
zjj.major = "english";
zjj.sing = function() {
	console.log("i am zzw's gf");
}
zjj.sing();

// 现在我们来封装一个简单的工厂函数
function createObj(name, age, major) {
	var obj = {};
	obj.name = name;
	obj.age = age;
	obj.major = major;
	return obj;
}

var lyf = createObj('lyf', '19', 'sorry');
console.log(lyf);
// 缺点:通过工厂函数创建的对象之间并无关联性,不推荐使用

// 构造函数法
function Person(name, job) {
	//默认隐含的操作,将new创建的对象赋值给this
	this.name = name;
	this.job = job;
	this.sayHello = function() {
		console.log('hello');
	}
}

var winter = new Person("winter", "coding");
console.log(winter);

// 构造函数的执行过程
// 使用new关键字创建对象
// 调用构造函数,将新创建出来的对象赋值给对象函数内部的this
// 在构造函数内部使用this为新创建的对象新增成员
// 默认返回新创建的对象,普通函数如果不写返回语句,会返回undefined