//定义一个存放照片位置的数组，可以放任意个，在这里放3个
var arr = new Array();
var n = 55; //图片数量
for(var num = 0; num<n; num++) {
	arr[num] = "./img/精选"+String(num+1)+".jpg";
}

function changeImg() {
	
	var i = Math.floor(Math.random() * n);		// 返回 0 至 n-1 之间的整数
    // document.body.style.backgroundImage = "url(" + arr[i] + ")";  //显示对应的图片
	// $("document.body").fadeIn(3000);
	// $("body").fadeIn(1000);
	$("#background").fadeOut(1000);
	setTimeout(function () {
		$("#background").css("display", "none").css("background-image", "url(" + arr[i] + ")").fadeIn(1000); 
		}, 1000);
	
	// $("body").fadeOut();
	// $("body").css("background-image", "url(" + arr[i] + ")");
}

//setInterval(code,millisec,lang) 
//按照指定的周期（以毫秒计）来调用函数或计算表达式。方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
//code	必需。要调用的函数或要执行的代码串。
//millisec	必须。周期性执行或调用 code 之间的时间间隔，以毫秒计。
//lang	可选。 JScript | VBScript | JavaScript

setInterval("changeImg()", 60000);