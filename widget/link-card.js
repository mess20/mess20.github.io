//img-card
    $('.img-card img').attr('ready','false');
    $('.img-card img').each(function(){
    var ready = $(this).attr('ready');
    if(ready=='false'){
    var alt = $(this).attr('alt');
    var html = '<div class=\'link-content\'>'+alt+'</div>'
    $(this).after(html);
    $(this).attr('ready','true');
    }
})
//link-card-pro
    $('.link-card-pro').attr('ready','false');
    $('.link-card-pro').each(function(){
    var ready = $(this).attr('ready');
    if(ready=='false'){
    var alt = $(this).html();
    var src = $(this).attr('pre');
    var html = "<img src=\'"+src+"\' alt=\'"+alt+"\'><div class=\'link-content\'><p>"+alt+"</p></div>";
    $(this).html(html);
    $(this).attr('ready','true')
    }
})
