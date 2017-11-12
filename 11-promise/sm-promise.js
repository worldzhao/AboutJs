function _Promise(fn) {
    this.val = null;
    this.status = 'PENDING';
    this.resloveFun = null;
    this.rejectFun = null;
    fn(this.reslove.bind(this), this.reject.bind(this)); // 注意在fn中这两个方法是函数调用,this指向undefined 要显式绑定实例this
}

_Promise.prototype.reslove = function (val) {
    var self = this;
    if(self.status === 'PENDING'){
        self.status = 'ONFULLFILLED';
        setTimeout(function () { // 所以reslove方法永远在可执行代码执行完后执行，保证then方法注册完毕
            self.val = val;
            self.resloveFun(self.val);
        }, 0)
    }
};
_Promise.prototype.reject = function (val) {
    var self = this;
    if(self.status==='PENDING'){
        self.status = 'REJECTED';
        setTimeout(function () {
            self.val = val;
            self.rejectFun(self.val);
        }, 0)
    }
};
_Promise.prototype.then = function (resloveFun, rejectFun) {
    this.resloveFun = resloveFun;
    this.rejectFun = rejectFun;
};

var a = new _Promise(function (reslove, reject) {
    reslove('hello');
    reject('hello again');
    console.log(1);
});

a.then(function (data) {
    console.log(data);
},function(data){
    console.log(data);
});
