$(function(){
    (async function(){
        var res = await $.ajax({
            url:"http://localhost:3000/products",
            type:"get",
            dataType:"json",
            success:function(res){
                console.log(res)
                var html1 = "";
                for(var j=1;j<12;j++){
                    var html2 = "";
                    for(var i=0;i<res.length;i++){
                        if(res[i].lid==j){
                            var {title,img,price} = res[i];
                            html2 +=  `<article class="ds2-models--card-item ds2-models-js--card-item ds2-models-js--card-item-active ds2-cardlist--card medium-4 large-3 columns ds2-js-filter--hatch ds2-active" >
                            <div class="ds2-model-card">
                                <div class="ds2-model-card--image ds2-img-loaded">
                                    <a href="#">
                                        <img class="ds2-image-lazy-loaded" style="height:auto;opacity:1;" src="${img}" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="ds2-model-card--entry">
                                <h4 class="ds2-model-card--title ds2-no-uppercase">${title}
                                </h4>
                                <h5 class="ds2-model-card--price ds2-tracking-tooltip--event">车型售价&nbsp;￥&nbsp;${price}起
                                </h5>
                                <ul class="ds2-linklist">
                                    <li class="ds2-linklist--item">
                                        <a class="ds2-link ds2-icon ds2-icon--arrow-big-r-grey-2 ds2-tracking-js--event" href="#">了解详情</a>
                                    </li>
                                </ul>
                            </div>
                        </article>`
                        }
                    }
                    html1 += `<section id="${j}" class="ds2-models--series ds2-models-js--series row">${html2}</section>`
                } 
                var divCard = $("#show");
                divCard.html(html1);
            }
        })
    
    })();

    //选中框点击选中 再点击失去
    var $ulist = $("#ulist");
    var $showCar = $("#show");
    var kword = [];
    $ulist.on("click","label",function(e){
        e.preventDefault();
        var $input = $(this);
        var kw = $input.html();
        if(!$input.hasClass("ds2-icon--checkbox-checked")){
            $input.addClass("ds2-icon--checkbox-checked")
            //kword += kw+"?"
            kword.push(kw)
        }else{
            $input.removeClass("ds2-icon--checkbox-checked")
            //kword = kword.indexOf(kw).slice();
            for(var i=0;i<kword.length;i++){
                if(kw == kword[i]){
                    kword.splice(i,1)
                }
            }
            //kword.pop();
            //console.log(kword);  
        }
        console.log(kword)
        if(kword != ""){
            $.ajax({
                url:"http://localhost:3000/products",
                type:"get",
                data:{kword},
                dataType:"json",
                success:function(result){
                    //console.log(result)
                    var html1 = "";
                    for(var j=1;j<12;j++){
                        var html2 = "";
                        for(var i=0;i<result.length;i++){
                            if(result[i].lid==j){
                                var {title,img,price} = result[i];
                                html2 +=  `<article class="ds2-models--card-item ds2-models-js--card-item ds2-models-js--card-item-active ds2-cardlist--card medium-4 large-3 columns ds2-js-filter--hatch ds2-active" >
                                <div class="ds2-model-card">
                                    <div class="ds2-model-card--image ds2-img-loaded">
                                        <a href="#">
                                            <img class="ds2-image-lazy-loaded" style="height:auto;opacity:1;" src="${img}" alt="">
                                        </a>
                                    </div>
                                </div>
                                <div class="ds2-model-card--entry">
                                    <h4 class="ds2-model-card--title ds2-no-uppercase">${title}
                                    </h4>
                                    <h5 class="ds2-model-card--price ds2-tracking-tooltip--event">车型售价&nbsp;￥&nbsp;${price}起
                                    </h5>
                                    <ul class="ds2-linklist">
                                        <li class="ds2-linklist--item">
                                            <a class="ds2-link ds2-icon ds2-icon--arrow-big-r-grey-2 ds2-tracking-js--event" href="#">了解详情</a>
                                        </li>
                                    </ul>
                                </div>
                            </article>`
                            }
                        }
                        html1 += `<section id="${j}" class="ds2-models--series ds2-models-js--series row">${html2}</section>`
                    } 
                    var divCard = $("#show");
                    divCard.html(html1);
                }
            })
        }else{
            $.ajax({
                url:"http://localhost:3000/products",
                type:"get",
                dataType:"json",
                success:function(res){
                    //console.log(res)
                    var html1 = "";
                    for(var j=1;j<12;j++){
                        var html2 = "";
                        for(var i=0;i<res.length;i++){
                            if(res[i].lid==j){
                                var {title,img,price} = res[i];
                                html2 +=  `<article class="ds2-models--card-item ds2-models-js--card-item ds2-models-js--card-item-active ds2-cardlist--card medium-4 large-3 columns ds2-js-filter--hatch ds2-active" >
                                <div class="ds2-model-card">
                                    <div class="ds2-model-card--image ds2-img-loaded">
                                        <a href="#">
                                            <img class="ds2-image-lazy-loaded" style="height:auto;opacity:1;" src="${img}" alt="">
                                        </a>
                                    </div>
                                </div>
                                <div class="ds2-model-card--entry">
                                    <h4 class="ds2-model-card--title ds2-no-uppercase">${title}
                                    </h4>
                                    <h5 class="ds2-model-card--price ds2-tracking-tooltip--event">车型售价&nbsp;￥&nbsp;${price}起
                                    </h5>
                                    <ul class="ds2-linklist">
                                        <li class="ds2-linklist--item">
                                            <a class="ds2-link ds2-icon ds2-icon--arrow-big-r-grey-2 ds2-tracking-js--event" href="#">了解详情</a>
                                        </li>
                                    </ul>
                                </div>
                            </article>`
                            }
                        }
                        html1 += `<section id="${j}" class="ds2-models--series ds2-models-js--series row">${html2}</section>`
                    } 
                    var divCard = $("#show");
                    divCard.html(html1);
                }
            })
        }
    })

    
})