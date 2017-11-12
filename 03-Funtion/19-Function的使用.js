// Function构造函数可以新建函数对象
// 语法如下:
// Function函数所有参数都是字符串
// 如果只有一个参数那么必须是函数体
// var 函数名 = new Function('函数体');
// 如果传多个参数,那么最后一个参数为函数体,前面的参数为将要创建的函数的形参名
// var func=new Function('参数1','参数2',...,'函数体');
// 如果不传参数,表示创建一个空函数
// var 函数名 = new Function();


//练习

//创建没有参数的函数

/*
var song = new Function(
    "console.log('这是什么车啊');console.log('ae86啊,怎样');console.log('飘一个啊,来啊');");
song();
*/

//创建带有参数的函数

/*
var cal=new Function('a','b','console.log(a+b)');
cal(1,2);
*/

//返回出三个数中的最大数
/*
    	var max= new Function('a','b','c',"return (a>b?a:b)>c?(a>b?a:b):c;");
    	console.log(max(1,1,2));
*/