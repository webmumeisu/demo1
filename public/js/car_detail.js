$(function(){
   if(location.search.indexOf("lid=")!=-1){
        var id=location.search.split("=")[1];
    $.ajax({
        url:"http://localhost:3000/car_detail",
        type:"get",
        data:{id},
        dataType:"json",
        success:function(res){
            // console.log(res[0])
            var {id,series,top_img,html_h1,html_h3,img,sj,sj_img,xn,xn_img,title,price}=res[0];
            var html1=`<img src="${top_img}">
            <div class="before_img">
              <h1>${html_h1}</h1>
              <h3>${html_h3}</h3> 
              <a class="btn btn-primary"data-toggle="modal" data-target=".bs-example-modal-lg">观看影片</a>
              <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                <div class="modal-dialog modal-lg" style="width:960px;top:20%" role="document">
                <div class="modal-content">
                <div class="modal-body">
                <video src="img/video/3.mp4" style="height:100%; width: 100%" controls preload="metadata"></video>
                </div>
                <a class="close" data-dismiss="modal" style="position:absolute;color:black;top:0; right:0;">×</a>
                </div>
                </div>
                </div>
            </div>`
            var lImg=$("#main .l-img")
            lImg.html(html1)
            var html2=`<h1>${title}</h1>
            <h3>车型售价 ¥ ${price} 起</h3>
            <p>所示价格为建议零售价</p>
            <img src="${img}">
            <p>产品车型图片仅供参考，相关具体车型及配置请以当地授权经销商店内为准</p>`;
            var jiesao=$("#main .jiesao")
            jiesao.html(html2)

        }
    })

    $("#lunbo .lunbo").on("click","span",function(){
        var $span=$(this)
        var title=$span.parent().prev().html()
        var $size=$("#lunbo .lunbo span").index(this)
        if(title=="设计与舒适性"){
            $span.addClass("myspan").siblings().removeClass("myspan").parent().next().children(0).stop().animate({left:`${-$size*1100}px`})
        }
        if(title=="性能与动态驾驶"){
            $span.addClass("myspan").siblings().removeClass("myspan").parent().next().children(0).stop().animate({left:`${(-$size+2)*1100}px`})
        }
    })
    $("#make").hover(function(){
        $("#left").stop().animate({"opacity":1},1000)
        $("#right").stop().animate({"opacity":1},1000)
    },function(){
        $("#left").stop().animate({"opacity":0},1000)
        $("#right").stop().animate({"opacity":0},1000)
    })

    var clone=$("#make .bmw-img li").first().clone();
    var clone1=$("#make .bmw-img li").eq(1).clone();
    var clone2=$("#make .bmw-img li").eq(2).clone();
    // 左按钮
    var i=0;
    var ul=$("#make .bmw-img")
    var span=$("#make .img-line span")
    ul.append(clone);
    ul.append(clone1);
    ul.append(clone2);
    var size=$("#make .bmw-img li").length;
     $("#left").click(function(){
         i--;
         move();
        //  console.log(i)
         span.stop().animate({left:(i+1)*72},500)
     })
     $("#right").click(function(){
         i++;
         move();
        //  console.log(i)
         span.stop().animate({left:(i+1)*72},500)

     })
     function move(){
         if(i==size-3){
            ul.css({left:90});
             i=0;
         }
         if(i==-1){
            ul.css({left:-(size-3)*455-365});
            i=size-4;
         }
        //  console.log(i)
         ul.stop().animate({left:-i*455-365},500);
     }
     var index=0
    var ul2=$("#id2 div>ul")
    var clone3=$("#id2 div>ul li").first().clone()
    ul2.append(clone3)
    var size1=ul2.children().length
     ul.on("click","li",function(){
          index=$(this).index()
        //   console.log(index)
        if(index==12){
            index=0
        }else if(index==13){
            index=1
        }else if(index==14){
            index=2
        }
         $("#id1").removeClass("hide").stop().animate({"opacity":0.8},500)
         $("#id2").removeClass("hide").stop().animate({"opacity":1},500)
         $("#left").stop().animate({"opacity":0},1000)
         $("#right").stop().animate({"opacity":0},1000)
         $("#id2 div>ul").css("left",-index*812)
    
    
    $("#mdl_left").click(function(){
        index--;
        move1();
    })
    $("#mdl_right").click(function(){
        index++;
        move1();
    })
})
    $("#close").click(function(){
        $("#id1").addClass("hide").stop(true).animate({"opacity":0})
        $("#id2").addClass("hide").stop(true).animate({"opacity":0})
    })
    function move1(){
        console.log(index)
        if(index==size1){
            ul2.css({left:0});
             index=1;
         }
         if(index==-1){
            ul2.css({left:-(size1-1)*812});
            index=size1-2;
         }
         ul2.stop(true).animate({left:-index*812},500);
    }
}//if
})
