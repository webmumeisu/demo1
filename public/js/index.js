$(function(){
    $('body').addClass('loaded');
 var i=0
 var clone=$("#top_lunbo li").first().clone();
 $("#top_lunbo").append(clone);
 var size=$("#top_lunbo li").size();
 for(var j=0;j<size-1;j++){
        $("#num").append("<li></li>")
    }
 $("#num li").first().addClass("on")
 var t=setInterval(function(){i++;move();},3000);
 $("#top_lunbo").parent().hover(
     function(){
     clearInterval(t);
    },
     function(){
        t=setInterval(function(){
        i++;
        move();
        },3000)
 });

 $("#num li").hover(function(){
     var index=$(this).index();
     i=index;
     $("#top_lunbo").stop().animate({left:-index*1100},500);
    $(this).addClass("on").siblings().removeClass("on");
});
$("#left").click(function(){
    i--;
    move();
})
$("#right").click(function(){
    i++;
    move();
})
function move(){
    if(i==size){
        $("#top_lunbo").css({left:0});
        i=1;
    }
    if(i==-1){
        $("#top_lunbo").css({left:-(size-1)*1100});
        i=size-2;
    }
    $("#top_lunbo").stop().animate({left:-i*1100},500);
    if(i==size-1){
        $("#num li").eq(0).addClass("on").siblings().removeClass("on")
    }else{
        $("#num li").eq(i).addClass("on").siblings().removeClass("on")
    }
}


$("#xilie>li:gt(0)").not(".myli").on("click",function(){
    var i=$(this).index()
    var kword=$(this).children().first().html()
    console.log(i)
    $(this).toggleClass("mycolor").siblings().removeClass("mycolor")
    
    $.ajax({
        url:"http://localhost:3000/car_core",
        type:"get",
        data:{kword},
        dataType:"json",
        success:function(res){
            console.log(res)
            var html=`<h6><a class="move" href="http://localhost:3000/all_car.html"><span>&gt;</span>${kword}</a></h6>`
            for(var car of res){
            var {id,series,img,title,price}=car;
            html+=`<div class="car">
                <a href="http://localhost:3000/all_car.html"><img src="${img}"></a>
                <div>
                  <h4>${title}</h4>
                  <h5>车型售价 ￥${price}起</h5>
                  <a class="move" href="http://localhost:3000/car_detail.html?lid=${id}"><span>&gt;</span>了解详情</a>
                </div>
              </div>`;
        }
        if(i<=5)
        $("#xilie>li.myli:eq(0)").html(html);
        else
        $("#xilie>li.myli:eq(1)").html(html);

        var j=$("#xilie>li.myli:eq(0)").find("div.car").length;
        var a=$("#xilie>li.myli:eq(1)").find("div.car").length;
        if(i<=5){
            if($("#xilie>li:eq(6)").prevAll().hasClass("mycolor")){
                $("#xilie>li.myli>div.car").fadeIn(1500)
                $("#xilie>li.myli:eq(0)").addClass("bmw").css("height",`${Math.ceil(j/4)*209+19}`)
                $("#xilie>li.myli:eq(1)").removeClass("bmw").css("height",`0`)
                }else{
                    $("#xilie>li.myli:eq(0)").removeClass("bmw").css("height",`0`)
                  
                }
            }
        if(i>6&&i<13){
            if($("#xilie>li:eq(6)").nextAll().hasClass("mycolor")){
                $("#xilie>li.myli>div.car").fadeIn(1500)
                $("#xilie>li.myli:eq(1)").addClass("bmw").css("height",`${Math.ceil(a/4)*209+19}`)
                $("#xilie>li.myli:eq(0)").removeClass("bmw").css("height",`0`)
                }else{
                    $("#xilie>li.myli:eq(1)").removeClass("bmw").css("height",`0`)
                }
        }
        }
        
    })

})

/*
$("#xilie").on("click","li",function(){
    var i=$("#xilie li").index(this)
    var j=$("#xilie>li.myli").eq(`${i-1}`).find("div.car").length;
    var a=$("#xilie>li.myli").eq(`${i-6}`).find("div.car").length;
    $(this).not(".myli").toggleClass("mycolor").siblings().removeClass("mycolor")
// :eq()
    //$("ul#xilie>li.myli").addClass("bmw")
    if(i>0&&i<=5){
    
    if(!$("#xilie>li.myli").eq(`${i-1}`).hasClass("bmw")){
        $("#xilie>li.myli").eq(`${i-1}`).addClass("bmw").css("height",`${Math.ceil(j/4)*209+19}`).siblings(".myli").removeClass("bmw").css("height",`0`)
        }else{
            $("#xilie>li.myli").eq(`${i-1}`).removeClass("bmw").css("height",`0`).siblings(".myli").removeClass("bmw")
        }
    }
    if(i>10&&i<17){
        if(!$("#xilie>li.myli").eq(`${i-6}`).hasClass("bmw")){
            $("#xilie>li.myli").eq(`${i-6}`).addClass("bmw").css("height",`${Math.ceil(a/4)*209+19}`).siblings(".myli").removeClass("bmw").css("height",`0`)
            }else{
                $("#xilie>li.myli").eq(`${i-6}`).removeClass("bmw").css("height",`0`).siblings(".myli").removeClass("bmw")
            }
    }
  })*/

  $("#zhong-lunbo").on("click","span",function(){
      var $span=$(this)
      var $size=$("#zhong-lunbo span").index(this)
      $span.addClass("myspan").siblings().removeClass("myspan").parent().next().children(0).stop().animate({left:`${-$size*1100}px`})
  })

});