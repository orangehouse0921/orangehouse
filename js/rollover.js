$(function(){
    $("img.rollover").mouseover(function(){
        $(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_s2$2"))
    }).mouseout(function(){
        $(this).attr("src",$(this).attr("src").replace(/^(.+)_s2(\.[a-z]+)$/, "$1$2"));
    }).each(function(){
        $("<img>").attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_s2$2"))
    })
})
