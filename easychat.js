
$("body").append("<div id=\"b1\" style=\"display:none;width:50px;height:50px;background:rgba(11, 243, 201,0.5);border-radius:30px;position:fixed;right:30px;bottom:130px;\"></div><div id=\"b\" style=\"width:50px;height:50px;background:rgb(11, 243, 201);border-radius:30px;position:fixed;right:30px;bottom:130px;\"></div><div id=\"cp\" style=\"margin-left:-50px;border-radius:15px;padding-top:32px;padding-bottom:32px;padding-left:19px;color:#000;font-size:19px;font-weight:700;width:0;height:50vh;background:rgba(255,245,225,1);position:fixed;left:0;bottom:50px;display:flex;flex-direction:column;justify-content:space-around;transition: all 0.25s;\">    <div style=\"display:flex;align-items:center;justify-content:space-around;\"><div>上传图片</div><div class=\"f\" style=\"margin-left:15px;width:50px;height:30px;background:rgb(255,245,225);border:solid black 5px;border-radius:30px;\"></div><div id=\"o1-7\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;left:-45px;bottom:0px;\"></div><div id=\"o2-7\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;bottom:0px;left:-26px;\"></div></div>    <div style=\"display:flex;align-items:center;justify-content:space-around;\"><div>自动续房</div><div class=\"f\" style=\"margin-left:15px;width:50px;height:30px;background:rgb(255,245,225);border:solid black 5px;border-radius:30px;\"></div><div id=\"o1-1\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;left:-45px;bottom:0px;\"></div><div id=\"o2-1\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;bottom:0px;left:-26px;\"></div></div>     <div style=\"display:flex;align-items:center;justify-content:space-around;\"><div>自动小字</div><div class=\"f\" style=\"margin-left:15px;width:50px;height:30px;background:rgb(255,245,225);border:solid black 5px;border-radius:30px;\"></div><div id=\"o1-2\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;left:-45px;bottom:0px;\"></div><div id=\"o2-2\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;bottom:0px;left:-26px;\"></div></div>     <div style=\"display:flex;align-items:center;justify-content:space-around;\"><div>进房提示</div><div class=\"f\" style=\"margin-left:15px;width:50px;height:30px;background:rgb(255,245,225);border:solid black 5px;border-radius:30px;\"></div><div id=\"o1-3\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;left:-45px;bottom:0px;\"></div><div id=\"o2-3\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;bottom:0px;left:-26px;\"></div></div>      <div style=\"display:flex;align-items:center;justify-content:space-around;\"><div>更换背景</div><div class=\"f\" style=\"margin-left:15px;width:50px;height:30px;background:rgb(255,245,225);border:solid black 5px;border-radius:30px;\"></div><div id=\"o1-4\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;left:-45px;bottom:0px;\"></div><div id=\"o2-4\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;bottom:0px;left:-26px;\"></div></div>    <div style=\"display:flex;align-items:center;justify-content:space-around;\"><div>更换字体</div><div class=\"f\" style=\"margin-left:15px;width:50px;height:30px;background:rgb(255,245,225);border:solid black 5px;border-radius:30px;\"></div><div id=\"o1-5\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;left:-45px;bottom:0px;\"></div><div id=\"o2-5\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;bottom:0px;left:-26px;\"></div></div>     <div style=\"display:flex;align-items:center;justify-content:space-around;\"><div>字体大小</div><div class=\"f\" style=\"margin-left:15px;width:50px;height:30px;background:rgb(255,245,225);border:solid black 5px;border-radius:30px;\"></div><div id=\"o1-6\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;left:-45px;bottom:0px;\"></div><div id=\"o2-6\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;bottom:0px;left:-26px;\"></div></div>      <div style=\"display:flex;align-items:center;justify-content:space-around;\"><div>字体颜色</div><div class=\"f\" style=\"margin-left:15px;width:50px;height:30px;background:rgb(255,245,225);border:solid black 5px;border-radius:30px;\"></div><div id=\"o1-8\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;left:-45px;bottom:0px;\"></div><div id=\"o2-8\" style=\"width:20px;height:20px;background:rgb(0,0,0);border-radius:20px;position:relative;bottom:0px;left:-26px;\"></div></div>  </div>")

$('#b').one('click', function() {
$("#o2-1").css({"display":"none"})
$("#o2-2").css({"display":"none"});
$("#o2-3").css({"display":"none"});
$("#o2-4").css({"display":"none"});
$("#o2-5").css({"display":"none"});
$("#o2-6").css({"display":"none"});
$("#o2-7").css({"display":"none"});
$("#o2-8").css({"display":"none"});
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

//上传图片


$("#o1-7").click(function(){
$("#o2-7").css({"display":"block"});
$("#o1-7").css({"display":"none"});
$("body").append("<div id=\"tuchuang\" style=\"background:rgba(255,255,245,0.9);border:solid rgba(200,200,160,0.4) 0.1px;padding:30px 20px;position:fixed;top:20vh;bottom:40vh;right:5vw;left:45vw;border-radius:10px;box-shadow:10px 10px 30px rgba(250,250,245,0.3);\">   <a href=\"https://imgtu.com/\">路过图床</a><br> <a href=\"https://imgurl.org/\">imgURL</a><br> <a href=\"https://imgbb.com/\">imgBB</a><br> <a href=\"https://postimg.cc/\">postimage</a><br> <a href=\"https://niupic.com/\">牛图网</a><br> <a href=\"http://i.miaosu.bid/\">妙速图床</a><br> <a href=\"https://imgkr.com/\">图壳</a><br> <a href=\"https://catbox.moe/\">Catbox</a><br> <a href=\"https://jpg.dog/\">Doge先生</a><br> <a href=\"https://imgs.top/\">映画の图床</a><br>  </div>");


$("#o2-7").click(function(){
$("#o1-7").css({"display":"block"});
$("#o2-7").css({"display":"none"});
$('#tuchuang').remove();
});


});







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


$("body").append("<div id=\"select\" style=\"position:fixed;top:40vh;left:22vw\"><button id=\"option1\" style=\"font-weight:600;border:none;border-radius:30px;background:lightblue;box-shadow:rgba(100,100,255,0.2) 5px 5px 5px 0px;padding:5px 15px;\">图片URL</button><button id=\"option2\" style=\"font-weight:600;margin-left:10px;border:none;border-radius:30px;background:lightblue;box-shadow:rgba(200,200,250,0.3) 5px 5px 5px 0px;padding:5px 15px;\">上传图片</button></div>");

$("#option1").click( function(){
$("#select").remove();
var url = prompt("请输入图片的URL（.jpg等结尾）","");
$("body").css({"background":"url(' "+url+" ') no-repeat"});

$("body").css({"background-size":"cover"});
$("body").css({"background-attachment":"fixed"});	
var c1=setInterval(function(){
$(".tail-mask").css({"display":"none"});	
$(".tail-wrap").css({"display":"none"});	
},100);


$("#o2-4").click(function(){
$("#o1-4").css({"display":"block"});
$("#o2-4").css({"display":"none"});
$("body").css({"background":"black"});

clearInterval(c1);
$(".tail-mask").css({"display":"block"});	
$(".tail-wrap").css({"display":"block"});	
})


});



$("#option2").click( function(){
$("#select").remove();
$("body").append("<label id=\"label\" style=\"border-radius:30px;background:lightblue;box-shadow:rgba(100,100,255,0.2) 5px 5px 5px 0px;padding:5px 15px;position:fixed;top:40vh;left:30vw;right:30vw\">点击选择图片<input type=\"file\"  id=\"imagefile\" style=\"display:none;\" onchange=\"imgChange(this)\" ></label>");

})
//option2


});



function imgChange(img) {  
const reader = new FileReader();   
reader.readAsDataURL(img.files[0]);
reader.onload = function(){			
$("body").css({"background":"url(' "+reader.result +" ') no-repeat"});
$("body").css({"background-size":"cover"});
$("body").css({"background-attachment":"fixed"});	
var c1=setInterval(function(){
$(".tail-mask").css({"display":"none"});	
$(".tail-wrap").css({"display":"none"});	
},100);
$("#label").remove()
}

$("#o2-4").click(function(){
$("#o1-4").css({"display":"block"});
$("#o2-4").css({"display":"none"});
$("body").css({"background":"black"});
clearInterval(c1);
$(".tail-mask").css({"display":"block"});	
$(".tail-wrap").css({"display":"block"});
})




}


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





//字体大小
$("#o1-6").click(function(){
$("#o2-6").css({"display":"block"});
$("#o1-6").css({"display":"none"});
var size = prompt("请输入字体大小（例：16px，1.5rem）","");
$("body").css({"font-size":size});	
});
$("#o2-6").click(function(){
$("#o1-6").css({"display":"block"});
$("#o2-6").css({"display":"none"});
$("body").css({"font-size":"16px"});	
});


//字体颜色

$("#o1-8").click(function(){
$("#o2-8").css({"display":"block"});
$("#o1-8").css({"display":"none"});
var color = prompt("请输入字体颜色","");
$("body").css({"color":color});	
var e = setInterval(function(){
$("p.body.select-text").css({"color":color});	
}, 100);

$("#o2-8").click(function(){
$("#o1-8").css({"display":"block"});
$("#o2-8").css({"display":"none"});
$("body").css({"color":"#FFF"});
$("p.body.select-text").css({"color":"#FFF"});	
clearInterval(e);	
});


});




//星空背景
function star(){
$("body").css({"background":"url('https://s1.328888.xyz/2022/07/17/NUpWF.jpg') no-repeat"});	
$("body").css({"background-size":"cover"});
$("body").css({"background-attachment":"fixed"});	
};









