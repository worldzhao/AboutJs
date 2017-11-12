// for in 会遍历出obj1的所有属性，包括其原型上的属性 
// hasOwnProperty可以判断是否为实例对象属性
var obj1 = {
    name: 'zzw',
    age: '18'
};

console.log(obj1);

var obj2 = {};

for (var k in obj1) {
    obj2[k] = obj1[k];
}

console.log(obj2);