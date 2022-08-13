//a 自适应/c 自定义/m 字体/R 字号/i 隐藏/b 显示
console.log('a 自适应/c 自定义/m 字体/R 字号/i 隐藏/b 显示');
var script = document.createElement('script'); 
script.src = "https://mess20.github.io/DOLLARS-Extension/jquery.js"; document.getElementsByTagName('head')[0].appendChild(script);
setTimeout(function(){
$(function() {
    $('body').keyup(function() {
        if (document.activeElement.localName != "input" && document.activeElement.localName != "select" ) {
            var value = event.keyCode;
            if (value == 65) {
                autofix()
            };
            if (value == 67) {
                customerfix()
            };
            if (value == 77) {
                fontfamily()
            };
            if (value == 82) {
                fontsize()
            };
            if (value == 66) {
                show()
            };
            if (value == 73) {
                hide()
            };
        }
    });
});

function autofix(){
$("*").css({"font-family":"times","font-size":"48px"});
$("html").css({"display":"flex","flex-direction":"column"});
$("body").css({"zoom":"0.4","margin":"0 auto"});
}
function customerfix(){
var input=prompt("input zoom size","");
$("body").css({"zoom":input});
var input=prompt("set body width","");
$("body").css({"width":input});
}
function fontfamily(){
var input=prompt("input font-family","");
$("*").css({"font-family":input});
}
function fontsize(){
var input=prompt("input font-size","");
$("*").css({"font-size":input});
}
function show(){
var input=prompt("select object to show","");
$(input).show();}
function hide(){
var input=prompt("select object to hide","");
$(input).hide();}
},3000)
