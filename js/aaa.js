// 大轮播右侧三张图的获取
$.ajax({
    type:"get",
    url:"php/aaa.php",
    data:"ttdata=santudata",
    success:function(res){
        var santustr="";
        JSON.parse(res).forEach(item => {
            santustr+=`<div class="tu31"><a href="javascript:;"><img src="images/${item.img}" alt=""></a></div>`
        });
        $(".santu").html(santustr);
    }
})
// 全球好物日图片获取
$.ajax({
    type:"get",
    url:"php/aaa.php",
    data:"ttdata=asdzldata",
    success:function(res){
        var asdzlstr="";
        JSON.parse(res).forEach(item => {
            asdzlstr+=`<li><a href="javascript:;"><img src="images/${item.img}" alt=""></a></li>`
        });
        $(".asdzl").html(asdzlstr);
    }
})
$.ajax({
    type:"get",
    url:"php/aaa.php",
    data:"ttdata=asdxdata",
    success:function(res){
        var asdxstr="";
        JSON.parse(res).forEach(item => {
            asdxstr+=`<li><a href="javascript:;"><img src="images/${item.img}" alt=""></a></li>`
        });
        $(".asdx").html(asdxstr);
    }
})
// banner右侧促销新闻获取
$.ajax({
    type:"get",
    url:"php/aaa.php",
    data:"ttdata=cuxiaodata",
    success:function(res){
        var cuxiaostr="";
        JSON.parse(res).forEach(item => {
            cuxiaostr+=`<a href="javascript:;">
            <h6>${item.content}</h6>
        </a>`
        });
        $("#zizi").html(cuxiaostr);
    }
})
// banner右侧公告信息获取
$.ajax({
    type:"get",
    url:"php/aaa.php",
    data:"ttdata=gonggaodata",
    success:function(res){
        var gonggaostr="";
        JSON.parse(res).forEach(item => {
            gonggaostr+=`<a href="javascript:;">
            <h6>${item.content}</h6>
        </a>`
        });
        $("#zizi1").html(gonggaostr);
    }
})
// 大商品列表
$.ajax({
    type:"get",
    url:"php/aaa.php",
    data:"ttdata=listdata",
    success:function(res){
        var liststr="";
        JSON.parse(res).forEach(item => {
            liststr+=` <li class="xiaolist">
            <a href="javascript:;">
            <img src="images/${item.imgurl}" alt="">
            <p class="pp">${item.content}</p>
            <p class="pp2">￥${item.price}</p>
            </a>
            <div class="gengduo">
                <a href="javascript:;"><p class="zxs">找相似</p></a>
            </div>
        </li>`
        });
        $(".dalist").html(liststr);
    }
})