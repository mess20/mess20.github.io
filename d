<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
</script>

<style>
body{
background:black;
}
#b,#b1{
width:100px;
height:100px;
background:rgb(11, 243, 81);
border-radius:50px;
position:fixed;
right:50px;
bottom:150px;
}
#cp{
width:0;
height:100vh;
background:white;
position:fixed;
left:0;
top:0px;
display:flex;
overflow:hidden;
flex-direction:column;
justify-content:space-around;
transition: all 2s;
}
#cp div{
display:flex;
align-items:center;
justify-content:space-around;
font-size:40px;
}
div.f{
width:100px;
height:50px;
background:rgb(255, 255, 255);
border:solid black 10px;
border-radius:50px;
}
#o1-1,#o1-2,#o1-3,#o1-4{
width:40px;
height:40px;
background:rgb(11, 243, 81);
border-radius:50px;
position:relative;
left:-115px;
bottom:0px;
}
#o2-1,#o2-2,#o2-3,#o2-4{
width:40px;
height:40px;
background:rgb(0,0,0);
border-radius:50px;
position:relative;
bottom:0px;
left:-65px;
}


</style>


<div id="b1" style="display:none;"></div>


<div id="b"></div>
<div id="cp">



<div>
<div>自动蓄房</div>
<div class="f"></div>
<div id="o1-1"></div>
<div id="o2-1"></div>
</div>

<div>
<div>自动小字</div>
<div class="f"></div>
<div id="o1-2"></div>
<div id="o2-2"></div>
</div>

<div>
<div>进房提示</div>
<div class="f"></div>
<div id="o1-3"></div>
<div id="o2-3"></div>
</div>

<div>
<div>更改背景</div>
<div class="f"></div>
<div id="o1-4"></div>
<div id="o2-4"></div>
</div>


</div>




<script>


$("#b").click(function(){
$("#b").css({"display":"none"});
$("#b1").css({"display":"block"});
$("#cp").css({"width":"40vw"});
$("#o2-1").css({"display":"none"});
$("#o2-2").css({"display":"none"});
$("#o2-3").css({"display":"none"});
$("#o2-4").css({"display":"none"});
});

$("#b1").click(function(){ 
$("#b1").css({"display":"none"});
$("#b").css({"display":"block"});
$("#cp").css({"width":"0"});
});


$("#o1-1").click(function(){
f1();
$("#o2-1").css({"display":"block"});
$("#o1-1").css({"display":"none"});
});
$("#o2-1").click(function(){
$("#o1-1").css({"display":"block"});
$("#o2-1").css({"display":"none"});
});

$("#o1-2").click(function(){
$("#o2-2").css({"display":"block"});
$("#o1-2").css({"display":"none"});
});
$("#o2-2").click(function(){
$("#o1-2").css({"display":"block"});
$("#o2-2").css({"display":"none"});
});

$("#o1-3").click(function(){
$("#o2-3").css({"display":"block"});
$("#o1-3").css({"display":"none"});
});
$("#o2-3").click(function(){
$("#o1-3").css({"display":"block"});
$("#o2-3").css({"display":"none"});
});

$("#o1-4").click(function(){
$("#o2-4").css({"display":"block"});
$("#o1-4").css({"display":"none"});
});
$("#o2-4").click(function(){
$("#o1-4").css({"display":"block"});
$("#o2-4").css({"display":"none"});
})


//自动蓄房
setInterval(function f1(){
$("#form-settings-room-name").val("挂机 + @hdyy");$("#form-settings-room-name-save").click();}, 1200000);
setTimeout(function(){
setInterval(function(){
$("#form-settings-room-name").val("挂机 + @hdyy ");$("#form-settings-room-name-save").click();}, 1200000);
},600000)
}

//自动小字
$(".room-submit-btn")[0].onclick=function f2() {                  
var m = $("[name='message']").val();
$("[name='message']").val ("/me"+m);$("[name='post']").submit();
}

//进房提示
$('#talks').bind('DOMNodeInserted', function f3(){
if($("div#talks>:first-child").attr("class") == "talk join system")
{window.alert("Someone entered room.")} });

//更改背景
function f4(){
$("body").css({"background":"url('https://s1.328888.xyz/2022/07/17/NUpWF.jpg') no-repeat"});	
$("body").css({"background-size":"cover"});
$("body").css({"background-attachment":"fixed"});	
}
</script>





