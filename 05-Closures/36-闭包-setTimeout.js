//js语言是单线程的,js同时只能处理一件事情

//js中分了三个线程(非并行,所以不是多线程,可以理解为任务)
//1. 渲染任务
//2. js代码执行任务
//3. 事件处理任务

//js代码执行顺序
//1. 先把主任务(代码任务)执行完毕
//2. 再去执行次要任务(setTimeout setInterval)

//定时器有一个单独的栈,每当创建一个定时器,定时器入栈,当可执行代码(主任务)执行完毕,定时器按照之前设定的时间出栈,开始执行回调函数
/*
    setTimeout(function(){
        console.log('我是0s定时器')
    },0);

    console.log('主代码');

    //输出结果: 主代码  我是0s定时器

*/

/*
    function foo(){
        for(var i=0;i<5;i++){
            setTimeout(function(){//当循环执行完毕 十个定时器创建完毕(并未执行),然后 开始执行定时器回调函数
                console.log(i);
            },0);
        }
    }

    foo();//5,5,5,5,5

    以上代码逻辑:
    * 创建5个定时器
    * i=5
    * 定时器代码开始执行
*/
function foo() {
    for (var i = 0; i < 5; i++) {
        (function (j) {//使用闭包 创建了5个块级作用域,每个定时器对应的j都是相应的i传进来的
            setTimeout(function () {
                console.log(j);
            }, 0);
        })(i)
    }
}

foo();//0,1,2,3,4

//以上代码逻辑:
//利用立刻执行的函数,创建5个块级作用域,同时在每个块级作用域中都有1个定时器 ,每个定时器的j都是自己作用域的j,(同时注意:定时器存在,引用了块级作用域内部的变量,所以块级作用域不会消失,产生了闭包)
//块级作用域创建完毕,定时器代码开始执行

/*
    	function foo(){
    		for(var i=0;i<5;i++){

    			function foo(j){
    				return f(){
    					console.log(j);
    				}
    			}

    			var f1=foo(i);
    			setTimeout(f1,0);
    		}
    	}

    	function foo(){
    		for(var i=0;i<5;i++){

    			var f1=(function foo(j){
    				return f(){
    					console.log(j);
    				}
    			})(i);

    			setTimeout(f1,0);
    		}
    	}
*/    	
