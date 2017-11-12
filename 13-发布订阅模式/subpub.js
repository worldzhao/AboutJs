function EventTarget() { // 订阅器
	this.handlers = {};
}

EventTarget.prototype = {
	constructor: EventTarget,
	addHandler: function(type, handler) { // 订阅
		if (typeof this.handlers[type] == "undefined") {
			this.handlers[type] = [];
		}
		this.handlers[type].push(handler);
	},
	fire: function(action) { // 触发，action是一个包含type的对象，里面可能有handler需要用到的参数
		if (!action.target) {
			action.target = this;
		}
		if (this.handlers[action.type] instanceof Array) {
			var handlers = this.handlers[action.type];
			for (var i = 0, len = handlers.length; i < len; i++) {
				handlers[i](action);
			}
		}
	},
	removeHanler: function(type, handler) { // 解除订阅
		if (this.handlers[type] instanceof Array) {
			var handlers = this.handlers[type];
			for (var i = 0, len = handlers.length; i < len; i++) {
				if (handlers[i] === handler) {
					break;
				}
			}
			handlers.splice(i, 1); // 删掉该回调
		}
	}
}