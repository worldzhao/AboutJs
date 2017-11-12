/**
 * 
 * 实现一个LazyMan，可以按照以下方式调用:

LazyMan(“Hank”)输出

Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出

Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出

Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出

//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper

以此类推。
 */
// 重点： 维护事件队列 这是典型的JavaScript流程控制，问题的关键是如何实现任务的顺序执行。
// 在Express有一个类似的东西叫中间件，这个中间件和我们这里的吃饭、睡觉等任务很类似，
// 每一个中间件执行完成后会调用next()函数，这个函数用来调用下一个中间件。
// 对于这个问题，我们也可以利用相似的思路来解决，首先创建一个任务队列，然后利用next()函数来控制任务的顺序执行：
function _LazyMan(name){
	this.task = [];
	this.name = name;
	var that = this;
	var fn = function () {
		console.log(that.name);
		that.next();
	}
	this.task.push(fn);
 	setTimeout(function () { // 开始
 		that.next()
 	}, 0)
}
/* 事件调度函数 */
_LazyMan.prototype.next = function () {
	var fn = this.task.shift();
	fn && fn();
}

_LazyMan.prototype.eat=function(name){
	var that = this;
	var fn = function () {
		console.log(name + 'is decilious');
		that.next();
	}
	this.task.push(fn);
	return this;

};
_LazyMan.prototype.sleep=function(time){
	var that = this;
	var fn = function(){
		setTimeout(function () {
			console.log('wake up ' + time + 's');
			that.next();
		}, time*1000)
    }
    this.task.push(fn);
	return this;
};
_LazyMan.prototype.sleepFirst=function(time){
	var that = this;
	var fn = function(){
		setTimeout(function () {
			console.log('wake up ' + time + 's');
			that.next();
		}, time*1000)
    }
    this.task.unshift(fn);
	return this;
};
/* 封装 */
function LazyMan(name){
  return new _LazyMan(name);
}


// LazyMan("Hank").sleep(10).eat("dinner");
// LazyMan("Hank").eat("dinner").eat("supper");
LazyMan("Hank").sleepFirst(5).eat("supper")