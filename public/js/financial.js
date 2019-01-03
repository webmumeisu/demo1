$(function(){
	var Myswiper = new Swiper('.swiper-box .swiper-container', {
	    nextButton: '.swiper-box .swiper-button-next',
	    prevButton: '.swiper-box .swiper-button-prev',
	      pagination: '.swiper-box .swiper-pagination',
	      paginationClickable: true,
	      loop:true,
	      effect: 'cube',
	      grabCursor: true,
          autoplay : 3000,
	      cube: {
	          shadow: true,
	          slideShadows: true,
	          shadowOffset: 50,
	          shadowScale: 0.8
	    },       
	});
	$(".su-plan ul li a").mouseover(function(e){
            e.preventDefault();
        var a = $(this);
        if(!a.parent().is(".su-active")){
                a.parent().addClass("su-active")
        .siblings().removeClass("su-active");
          }
        var i = a.parent().prevAll().length;
          //console.log(i);
        var left = i*190+48;
        $(".su-plan span").css({left});

        var id = $(this).attr('href');
            //console.log(id);
        $(id).addClass('su-plana-active').siblings('.su-plana-active').removeClass('su-plana-active');
          
    });
    function calc_C(){
        var data = [
            {cname:"BMW&nbsp;4i"},
            {cname:"BMW&nbsp;5i"},
            {cname:"BMW&nbsp;6i"},
            {cname:"BMW&nbsp;3i"},
        ];
        var cars = [
            [{"csname":"BMW 4i四箱轿跑","id":1},
             {"csname":"BMW 4i三箱轿跑","id":2},
             {"csname":"BMW 4i五箱轿跑","id":3},],
            [{"csname":"BMW 5i四箱轿跑","id":4},
             {"csname":"BMW 5i五箱轿跑","id":5},],
            [{"csname":"BMW 6i四箱轿跑","id":6},
             {"csname":"BMW 6i三箱轿跑","id":7},
             {"csname":"BMW 6i五箱轿跑","id":8},],
            [{"csname":"BMW 3i五箱轿跑","id":9},]
        ];
        var arr_a = [
            {"ctname":"-请先选择车型-","s_id":0},
            {"ctname":"BMW 4i四箱轿跑 全款购","s_id":1},
            {"ctname":"BMW 4i四箱轿跑 分期购","s_id":1},    
            {"ctname":"BMW 4i三箱轿跑 全款购","s_id":2},    
            {"ctname":"BMW 4i三箱轿跑 分期购","s_id":2},    
            {"ctname":"BMW 4i三箱轿跑 0元购","s_id":2},    
            {"ctname":"BMW 4i五箱轿跑 全款购","s_id":3},    
            {"ctname":"BMW 4i五箱轿跑 分期购","s_id":3},    
            {"ctname":"BMW 5i四箱轿跑 全款购","s_id":4},    
            {"ctname":"BMW 5i五箱轿跑 0元购","s_id":5},    
            {"ctname":"BMW 6i四箱轿跑 全款购","s_id":6},    
            {"ctname":"BMW 6i四箱轿跑 分期购","s_id":6},    
            {"ctname":"BMW 6i三箱轿跑 全款购","s_id":7},    
            {"ctname":"BMW 6i三箱轿跑 分期购","s_id":7},    
            {"ctname":"BMW 6i五箱轿跑 全款购","s_id":8},    
            {"ctname":"BMW 6i五箱轿跑 未上线请联系梅老板","s_id":8},    
            {"ctname":"BMW 3i五箱轿跑 已绝版请联系博物馆","s_id":9},    
            {"ctname":"BMW 3i五箱轿跑 已绝版请联系博物馆","s_id":9},    
        ];
        var change1 = document.getElementById("change1");
        var swiper = new Swiper('.calc .swiper-container', {
            nextButton: '.calc .swiper-button-next',
            prevButton: '.calc .swiper-button-prev',
            slidesPerView: 3,
            //simulateTouch : false,
            spaceBetween: 30,
            //freeMode: true,
            //paginationClickable: true,
            keyboardControl : true,
            loop:true,
            onSlideChangeEnd: function(swiper){
              //清空选择1内所有片段
              change1.innerHTML="";
              //in循环数据data
              for(var i in data){
                   if(swiper.realIndex == i){
                        $(".calc-c>h1").html(""+data[i].cname);
                        //判断i相同值
                        var carS = cars[i]
                        //创建片段
                        var frag = document.createDocumentFragment();
                        frag.appendChild(new Option("-请选择-",0));
                        for(var cs of carS){
                            frag.appendChild(new Option(cs.csname,cs.id));
                        }
                        //插入片段
                        change1.appendChild(frag);
                   } 
               }
               //清空二级联动
               general_select_a(0);
            },
        });
        //加载二级联动
        function general_select_a(c_id){
            var select = $("#change2");
            select.empty();
            var len = arr_a.length;    
            for(var i = 0; i < len; i++){
                if(arr_a[i].s_id == c_id){
                    //console.log(arr_a[i].s_id);
                    var option = '<option value="' + arr_a[i].id + '">'+ arr_a[i].ctname + '</option>';
                    select.append(option); 
                }
            }
        };
        //调用一级变动
        $("#change1").change(function(){
            general_select_a(0);
            var c_id = $(this).val();
            general_select_a(c_id);
            fade();
        });
        $("#change2").click(function(){
            $(".calc-c span").css("display","block");
            fade();
        });
        //查看金融方案
        $("#btn").click(function(){
            fade();
            var i = $("#change1 option:selected").val();
            if(i == 2){
                $(".model_box p").html("预购从速！！！请联系汤老板");
            }else if(i == 3){
                $(".model_box p").html("预购从速！！！请联系阿瑞");
            }else if(i == 4){
                $(".model_box p").html("预购从速！！！请联系胡老板");
            }else if(i == 5){
                $(".model_box p").html("预购从速！！！请联系孙老板");
            }else if(i == 6){
                $(".model_box p").html("预购从速！！！请联系刘老板");
            }else if(i == 7){
                $(".model_box p").html("预购从速！！！请联系徐老板");
            }
            if(i != 0){
                $(".model_box").css("display","block");
            }   
        });
        //取消模态框
        $(".model_box").click(function(){
            $(".model_box").css("display","none");
        });
        //控制span
        function fade(){
            var i = $("#change1 option:selected").val();
            if(i == 0){
                $("#danger_c").css("display","block");
            }else{
                $(".calc-c span").css("display","none");
            }
        }
    }calc_C();
    $(".zixun>div>img").click(function(){
	   var $img = $(this);
	   $img.css("right","-200px");
	   $img.parent().next().css("right","0");
	 })
	 $(".zixun>div>span").click(function(){
	   var $span = $(this);
	   $span.parent().css("right","-200px");
	   $span.parent().prev().children().css("right","0");
	 });
});