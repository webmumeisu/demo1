$(function(){
    $('body').addClass('loaded');
    //1. 动态创建link引用header.css
    $("<link rel='stylesheet' href='css/header.css'>").appendTo("head")
    //2. ajax请求header.html片段
    $.ajax({
      url:"http://localhost:3000/header.html",
      type:"get",
      success:function(res){
        $("#header").replaceWith(res)
    }
    })
    var ul=$("#top-navbar ul")
    ul.on("click","li",function(){
        var a=$(this).children()
        a.addClass("active").parent().siblings().children().removeClass("active")
        console.log(a)
    })
    
})