//面向对象三大特性:封装 继承 多态

//1.封装
var student = {
    school: 'hnu',
    major: 'tourism',
    skill: function() {
        console.log("sayHello");
    }
}

student.skill();

//2.继承,此处使用混入式继承法,遍历赋值

var zzw = {
    myOwnSkill: function() {
        console.log('coding');
    }
};
for (var k in student) {
    zzw[k] = student[k]; //此处只能使用[],不能使用点语法,不然变量名就成了属性名,而k的变量值才是属性名
}
console.log(zzw);
zzw.skill();
zzw.myOwnSkill();

//3.多态
//多态在强类型语言中体现明显,js中没有,用不到