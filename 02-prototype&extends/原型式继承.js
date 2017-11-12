// 原型式继承,创建一个继承于另外一个对象的对象 Object.create()
// 在不需要大费周章的创建构造函数的条件下,使用原型式继承是一个很好的选择
// 内部实现如下:
/*
    	function create(superObj){
    		var F=function(){};
    		F.prototype=superObj;
    		return new F();
    	}
*/
var superObj = {
    name: 'zzw',
    age: 18
};
//var subObj=create(superObj);//这样我们就创建了一个继承superObj的对象subObj



// 标准方法实现如下:

// Object.create(obj)

// 返回为一个继承自参数中的obj的对象


// 这个方式来自于ES5,所以存在兼容性问题

// 如何处理Object.create的兼容性问题

//检测浏览器能力
function create(superObj) {
    if (Object.create) {
        return Object.create(superObj);
    } else {
        var F = function() {};
        F.prototype = superObj;
        return new F();
    }
}