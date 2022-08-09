var script = document.createElement('script');
script.src = "https://mess20.github.io/DOLLARS-Extension/jquery.js";
document.getElementsByTagName('head')[0].appendChild(script);
link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css'); document.body.appendChild(link);
setTimeout(function(){
//baidu(https://byokpg.smartapps.baidu.com/pages/*)
$(".swan-web-suspend-button").remove();
//360(https://tieba.baidu.com/*)
$(".nav-bar-bottom").remove();
$(".more-btn-desc").remove();
$(".more-image-desc-text").remove();
$(".only-lz").remove();
$(".comment-box").remove();
$(".recommend-list").remove();
$(".recommend-title").remove();
$(".nav-bar-top").append("<a href=\"https://mbd.baidu.com/ma/s/UGCmY4qW\"><i id=\"search-btn\" class=\"fa fa-telegram\" aria-hidden=\"true\" style=\"position:fixed;right:0.1rem;top:0.06rem;zoom:1.5\"></i></a>");
$("img.img").each(function(){
$(this).hover(function(){
$("img.img").css({"pointer-events":"none"});
var src = $(this)[0].src;
var src = /^http.*tbpicau/.exec(src);
var src = src[0].replace(/\?tbpicau/,"");
$("body").append("<img id=\'imgimg\' src=\' "+src+" \' style=\'position:fixed;top:20vh;left:1.5vw;padding:0;z-index:margin:0;height:60vh;box-shadow:0 0 2000px 2000px rgba(0,0,0,0.9)\'>");
setTimeout(function(){
$('body').bind("click",function(){
$('#imgimg').remove();
$("img.img").css({"pointer-events":"inherit"});
})
},1000)
})
})
},2000)






