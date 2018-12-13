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
$(".jixukan a").click(function(){
    $(".muluquanbu").css("display","block")
    $(".mulusuolue").css("display","none")
})
$(".shouqiquanbu a").click(function(){
    $(".muluquanbu").css("display","none")
    $(".mulusuolue").css("display","block")
})