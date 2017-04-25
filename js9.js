// 左侧入
function leftIn(queue) {
    var num = document.getElementById("num").value;
    if (checkInput(num)) {
    	var span = document.createElement("span");

        // var cssrules = document.styleSheets[0].cssRules || document.styleSheets[0].rules;
        // var height = cssrules[0].style.height;

    	span.style.height = num;
		var spanList = queue.childNodes;
		if (spanList.length <= 60) {
		 queue.insertBefore(span,spanList[0]);
	    }
		else {
			alert("元素个数不能超过60");
		}
	}
} 
// 右侧入
function rightIn(queue) {
	var num = document.getElementById("num").value;
    if (checkInput(num)) {
    	var span = document.createElement("span");
    	span.style.height = num;
    	var spanList = queue.childNodes;
    	if (spanList.length <= 60) { 
            queue.appendChild(span);
        }
		else { 
			alert("元素个数不能超过60");
		}
    }
}
// 左侧出
function leftOut(queue) {
	var child = queue.childNodes;
	alert(child[0].innerHTML);
	queue.removeChild(child[0]);
}
// 右侧出
function rightOut(queue) {
	var child = queue.childNodes;
	alert(child[child.length-1].innerHTML);
	queue.removeChild(child[child.length-1]);
}
// 输入验证,输入只能为整数且不能为空
function checkInput(num) {
	// 整数的正则表达式
	// reg = /^-?\d+$/;
	reg=/^[-+]?\d*$/; 
	if (num == "") {
		alert("输入不能为空");
		return false;
	}
	else if (num < 10 || num > 100) {
		alert("请输入10-100的数字");
		return false;
	}
	else if (!reg.test(num)) {
		alert("请输入整数");
		return false;
	}
	else return true;
}

//排序
function sort(queue) {
	var child = queue.childNodes;
	for (var i = 0; i < child.length; i++) {
		for (var j = i + 1; j < child.length; j++) {
			if (child[i].style.height > child[j].style.height) {
				var height = child[i].style.height;
				child[i].style.height = child[j].style.height;
				child[j].style.height = height;
			}
		}
	}
}
// 绑定点击事件和删除事件
function init() {
	var queue = document.getElementById("queue");
	document.getElementById("leftIn").onclick = function() {
		leftIn(queue);
	};
	document.getElementById("rightIn").onclick = function() {
		rightIn(queue);
	};
	document.getElementById("leftOut").onclick = function() {
		leftOut(queue);
	};
	document.getElementById("rightOut").onclick = function() {
		rightOut(queue);
	}; 
	document.getElementById("sort").onclick = function() {
		sort(queue);
	}; 
	//删除事件
	document.getElementById("queue").onclick = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		var tagName = target.tagName;
		// == 两表达式的类型不同,转换类型后比较
		if (tagName == 'SPAN') { 
			queue.removeChild(target);
		}
	};
}
init();