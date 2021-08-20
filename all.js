<!--Keyword-->
function keyword() {
var anniu =document.getElementById('anniu');   var kaiguan = document.getElementById('kaiguan');
var keyword = "（关键词）";
var k = "<k>" + keyword + "</k>";
var str = document.getElementById("article").innerHTML;
var temp = 1; anniu.addEventListener('click',function(){            
if(temp==1){            
this.className = 'hei';              
temp=0;             
kaiguan.style. border= '2px solid  rgb(11, 243, 81)';                 
document.getElementById("article").innerHTML = str.replace(new RegExp(keyword , "g"), k);
}else{             
this.className = 'bai';             
temp=1;              
kaiguan.style. border= '2px solid black';           
document.getElementById("article").innerHTML = str.replace(new RegExp( k, "g"), keyword);
}})  
}
