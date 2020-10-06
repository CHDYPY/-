var num = 6; //歌曲数
var arr = new Array();
arr[0] = "./mp3/弦子-无可取代.wav";
arr[1] = "./mp3/叶炫清-九张机.flac";
arr[2] = "./mp3/汪睿-桃花笑.mp3";
arr[3] = "./mp3/青鸟飞鱼-此生不换.mp3";
arr[4] = "./mp3/胡歌-忘记时间.mp3";
arr[5] = "./mp3/Katie-Sky-Monsters.mp3";
var i = Math.floor(Math.random() * num);
// alert(arr[i]);
$("#audio").attr("src", arr[i]);