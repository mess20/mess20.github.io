//无声续房
setInterval(function(){
$("#form-settings-room-name").val("挂机 + @hdyy");$("#form-settings-room-name-save").click();}, 1200000);

setTimeout(function(){
setInterval(function(){
$("#form-settings-room-name").val("挂机 + @hdyy ");$("#form-settings-room-name-save").click();}, 1200000);
},600000)

//定点报时
setInterval(function(){
    let d = new Date();
    let datetime =d.getHours() + ":" + d.getMinutes();
    $("[name='message']").val ("/me"+datetime);$("[name='post']").submit();}, 600000);

//定时更改房名续房
setInterval(function(){
    let d = new Date();
    let datetime =d.getHours() + ":" + d.getMinutes();
$("#form-settings-room-name").val(datetime+" ");$("#form-settings-room-name-save").click();}, 1200000);


setTimeout(function(){
setInterval(function(){
    let d = new Date();
    let datetime =d.getHours() + ":" + d.getMinutes();
$("#form-settings-room-name").val(datetime);$("#form-settings-room-name-save").click();}, 1200000);
},600000)


//点触发言
$("[name='message']").bind("change", function(){
$("[name='post']").submit();
})

//自动小字
$(".room-submit-btn")[0].onclick=function () {                  
var m = $("[name='message']").val();
$("[name='message']").val ("/me"+m);$("[name='post']").submit();
}

//进房提示
$('#talks').bind('DOMNodeInserted', function(){
if($("div#talks>:first-child").attr("class") == "talk join system")
{window.alert("Someone entered room.")} });

//更改背景
$("body").css({"background":"url('https://s1.328888.xyz/2022/07/17/NUpWF.jpg') no-repeat"});	
$("body").css({"background-size":"cover"});
$("body").css({"background-attachment":"fixed"});

//定时更改描述
setInterval(function(){
    let d = new Date();
    let datetime =d.getHours() + ":" + d.getMinutes();
$("#form-settings-room-description").val("");$("#form-settings-room-description-save").click();}, 600000);


//自动问好
function caoniba(){
var today=new Date();
var s = today.getHours();
if (s>=4 && s<11) {
var times = "早上好";}else if (s>=11 && s<14) {
var times ="中午好";}else if (s>=14 && s<18) {
var times="下午好";}else{
var times="晚上好";}$("[name='message']").val(times);   
$("[name='post']").submit();}
var listen3 = $('#talks');listen3.bind('DOMNodeInserted', function (){if($("div#talks>:first-child").attr("class") == "talk join system"){caoniba();}if ($("#talks > dl:nth-child(1):first-child").attr("class")== "talk san-2x") {
caonibaba();var today=new Date();   $("[name='message']").val("/me现在是"+today);$("[name='post']").submit();}});


//定时投食
setInterval(function(){
    let d = new Date();
    let datetime = d.getHours() + "时" + d.getMinutes()+ "分"+ d.getSeconds()+ "秒";$("[name='message']") .val ("/me现在时间是"+datetime+"，向地面投放一瓶白开，一杯红茶，一杯咖啡，一杯牛奶，一杯柑橘汁， 一箱暖炉，一堆干柴，一缸大米，一根胡萝卜，一颗苹果，一碟沙丁鱼三明治，一块猪肉，一集箱装鲸鱼肉，一袋薯片，一根棒棒糖，一块草莓布丁，一根鸡肉味火腿，一把苍蝇拍，一盘蚊香，一顿火锅。");$("[name='post']").submit();}, 64800000);


	











