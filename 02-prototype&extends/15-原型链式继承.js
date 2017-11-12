function SuperType() {
    this.class = '信管班';
}

function SubType(name) {
    this.name = name;
}

var superObj = new SuperType();

SubType.prototype = superObj;//继承

var subObj = new SubType('zzw');

console.log(subObj.class);//信管班
