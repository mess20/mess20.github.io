
$("body").append("<div id=\"b1\" style=\"display:none;width:50px;height:50px;background:rgba(11, 243, 201,0.5);border-radius:30px;position:fixed;right:30px;bottom:130px;\"></div><div id=\"b\" style=\"width:50px;height:45px;background:rgb(11, 243, 201);border-radius:30px;position:fixed;right:30px;bottom:130px;\"></div><div id=\"cp\" style=\"margin-left:-50px;border-radius:15px;padding-top:32px;padding-bottom:32px;padding-left:19px;color:#000;font-size:19px;font-weight:700;width:0;height:40vh;background:rgba(255,245,225,1);position:fixed;left:0;bottom:50px;display:flex;flex-direction:column;justify-content:space-around;transition: all 2s;\"><div style=\"display:flex;align-items:center;justify-content:space-around;\"><div>自动续房</div><div class=\"f\" style=\"margin-left:15px;width:50px;height:30px;background:rgb(255,245,225);border:solid black 5px;border-radius:30px;\"></div><div id=\"o1-1\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;left:-45px;bottom:0px;\"></div><div id=\"o2-1\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;bottom:0px;left:-26px;\"></div></div>  <div style=\"display:flex;align-items:center;justify-content:space-around;\"><div>自动小字</div><div class=\"f\" style=\"margin-left:15px;width:50px;height:30px;background:rgb(255,245,225);border:solid black 5px;border-radius:30px;\"></div><div id=\"o1-2\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;left:-45px;bottom:0px;\"></div><div id=\"o2-2\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;bottom:0px;left:-26px;\"></div></div>  <div style=\"display:flex;align-items:center;justify-content:space-around;\"><div>进房提示</div><div class=\"f\" style=\"margin-left:15px;width:50px;height:30px;background:rgb(255,245,225);border:solid black 5px;border-radius:30px;\"></div><div id=\"o1-3\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;left:-45px;bottom:0px;\"></div><div id=\"o2-3\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;bottom:0px;left:-26px;\"></div></div>   <div style=\"display:flex;align-items:center;justify-content:space-around;\"><div>更换背景</div><div class=\"f\" style=\"margin-left:15px;width:50px;height:30px;background:rgb(255,245,225);border:solid black 5px;border-radius:30px;\"></div><div id=\"o1-4\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;left:-45px;bottom:0px;\"></div><div id=\"o2-4\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;bottom:0px;left:-26px;\"></div></div> <div style=\"display:flex;align-items:center;justify-content:space-around;\"><div>更换字体</div><div class=\"f\" style=\"margin-left:15px;width:50px;height:30px;background:rgb(255,245,225);border:solid black 5px;border-radius:30px;\"></div><div id=\"o1-5\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;left:-45px;bottom:0px;\"></div><div id=\"o2-5\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;bottom:0px;left:-26px;\"></div></div>  </div>")

$('#b').one('click', function() {
$("#o2-1").css({"display":"none"})
$("#o2-2").css({"display":"none"});
$("#o2-3").css({"display":"none"});
$("#o2-4").css({"display":"none"});
$("#o2-5").css({"display":"none"});
});
$("#b").click(function(){
$("#b").css({"display":"none"});
$("#b1").css({"display":"block"});
$("#cp").css({"margin-left":"0"});
$("#cp").css({"width":"50vw"});
});
$("#b1").click(function(){ 
$("#b1").css({"display":"none"});
$("#b").css({"display":"block"});
$("#cp").css({"margin-left":"-50px"})
$("#cp").css({"width":"0"});
});
function a1(){
    let d = new Date();
    let datetime =d.getHours() + ":" + d.getMinutes();   
$("[name='message']").val ("/me"+datetime);$("[name='post']").submit();};

//自动挂房
$("#o1-1").click(function(){
$("#o2-1").css({"display":"block"});
$("#o1-1").css({"display":"none"});
var b1= setInterval("a1();", 600000);
$("#o2-1").click(function(){
$("#o1-1").css({"display":"block"});
$("#o2-1").css({"display":"none"});
clearInterval(b1);
})
});

//自动小字
$("#o1-2").click(function(){
$("#o2-2").css({"display":"block"});
$("#o1-2").css({"display":"none"});
$(".room-submit-btn")[0].onclick=function () {                  
var m = $("[name='message']").val();
$("[name='message']").val ("/me"+m);$("[name='post']").submit();
}
});
$("#o2-2").click(function(){
$("#o1-2").css({"display":"block"});
$("#o2-2").css({"display":"none"});
$(".room-submit-btn")[0].onclick=function () {                  
var m = $("[name='message']").val();
$("[name='message']").val (m);$("[name='post']").submit();
}
});

//进房提示
$("#o1-3").click(function(){
$("#o2-3").css({"display":"block"});
$("#o1-3").css({"display":"none"});
$('#talks').bind('DOMNodeInserted', function(){
if($("div#talks>:first-child").attr("class") == "talk join system")
{window.alert("Someone entered room.")} ;
$("#o2-3").click(function(){
$("#o1-3").css({"display":"block"});
$("#o2-3").css({"display":"none"});
window.alert = function(){return false;}   });
});
});

//更换背景
$("#o1-4").click(function(){
$("#o2-4").css({"display":"block"});
$("#o1-4").css({"display":"none"});
var url = prompt("请输入图片的URL（.jpg等结尾）","");
$("body").css({"background":"url(' "+url+" ') no-repeat"});	
$("body").css({"background-size":"cover"});
$("body").css({"background-attachment":"fixed"});	
});
$("#o2-4").click(function(){
$("#o1-4").css({"display":"block"});
$("#o2-4").css({"display":"none"});
$("body").css({"background":"black"});	
})


//更换字体
$("#o1-5").click(function(){
$("#o2-5").css({"display":"block"});
$("#o1-5").css({"display":"none"});
var font = prompt("请输入字体类型","");
$("body").css({"font-family":font});	
});
$("#o2-5").click(function(){
$("#o1-5").css({"display":"block"});
$("#o2-5").css({"display":"none"});
$("body").css({"font-family":"sans-serif"});	
});

//星空背景
function star(){
$("body").css({"background":"url('https://s1.328888.xyz/2022/07/17/NUpWF.jpg') no-repeat"});	
$("body").css({"background-size":"cover"});
$("body").css({"background-attachment":"fixed"});	
};










