//详情页下面相关书籍产品的数据引入
$.ajax({
    type:"get",
    url:"../php/aaa.php",
    data:"ttdata=shumingdata",
    success:function(res){
        var shumingstr="";
        JSON.parse(res).forEach(item => {
            shumingstr+=`<li>
            <a href="javascript:;"><img src="../images/${item.img}" alt=""></a>
            <div class="shuming"><a href="javascript:;">${item.name}</a></div>
            <p>￥${item.price}</p>
        </li>`
        });
        $(".drxgcontent").html(shumingstr);
    }
})
// 产品介绍里目录部分的拉取
$(".jixukan a").click(function(){
    $(".muluquanbu").css("display","block")
    $(".mulusuolue").css("display","none")
})
$(".shouqiquanbu a").click(function(){
    $(".muluquanbu").css("display","none")
    $(".mulusuolue").css("display","block")
})