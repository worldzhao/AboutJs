var Tab=(function(){
	function Tab(config){
		this.tabMenus=null;
		this.tabMains=null;
		if(config){
			this.init(config);
		}
	}
	Tab.prototype={
		init(config){
			this.initElements(config);
			this.initEvent();
			if(config.auto){
				this.autoPlay();
			}
		},
		initElements(config){
			var tabMenu=document.getElementById(config.tabMenu);
			this.tabMenus=tabMenu.children;
			var tabMain=document.getElementById(config.tabMain);
			this.tabMains=tabMain.children;
		},
		initEvent(){
			for(var i=0;i<this.tabMenus.length;i++){
				var li=this.tabMenus[i];
				li.index=i;
				var that=this;//用that来代替调用Tab对象的this
				li.onclick=function(){
					that.change(this);//事件内部的this指向触发事件的元素
				}
			}
		},
		change(tabMenu){
			for(var i=0;i<this.tabMenus.length;i++){//此处的this是前面的that  方法调用 this指向调用者
				this.tabMenus[i].className = "tab-item";
        		this.tabMains[i].style.display = "none";
			}
            tabMenu.className += " active";
			this.tabMains[tabMenu.index].style.display="block";
		},
		autoPlay(){
			var index=0;
			var that=this;
			setInterval(function(){
				index++;
				if(index>that.tabMenus.length){//定时器中的this指向window
					index=0;
				}
				that.change(that.tabMenus[index]);
			},2000);
		}
	}

	return Tab;
})()