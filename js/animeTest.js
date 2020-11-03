var myAnimation = anime({
  // targets: ['.blue', '.green'], //对象
  // translateX: '800px', //水平移动
  // // translateZ: '800px',
  // rotate: 180, //摆动
  // borderRadius: ['0%', '50%'], //边界半径
  // scale: 0.5, //大小
  // duration: 5000, //时间，毫秒
  // loop: true ,//循环
	targets: ['.el'],
	translateX: function(el, i, l) { //第一个参数表示该元素，第二个参数表示下标（从0开始），第三个参数表示元素个数。
		return -250*i*i+350*i+200;
		
	},
	translateY: function(el, i, l) {
		return -200*i+200;
	},
	duration: 2000,
	direction: 'alternate',
	delay: 1000,
	easing: 'easeInOutCubic',
	loop: true,
  
});
