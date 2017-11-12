/*	function Student(name){
		this.name=name;
		this.skill=function(){
			console.log("goodgoodstudy");
		}
	}

	var zzw = new Student('zzw');
	var zjj = new student('zjj');*/

// 传统构造函数的缺点:

// 如果在构造函数中定义函数(skill)
// 那么每次创建对象,都会重新创建该函数
// 函数内部代码完全相同,内存中存在了多个相同内容的函数,仅仅是地址不同,造成了资源浪费

// 为了解决这个问题,我们要让所有对象共用一个方法,在构造函数外部定义好该函数

// 将函数赋值给构造函数内部的方法,这样内存内只存在一个方法,对象内部的方法名全都指向该方法

function studyMethod() {
    console.log(this.name + "goodgoodstudy");
}

function Student(name) {
    this.name = name;
    this.skill = studyMethod;
}

var zzw = new Student('zzw');
var zjj = new Student('zjj');

zzw.skill();

// 同时该方法内部的this 指向调用其的对象
// 问题又来了:如果对象公用的方法很多,那么就在构造函数外部定义好很多个函数,全局变量增多,造成污染,代码结构混乱,不易维护.
// 由此引入原型