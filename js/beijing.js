// header部分左侧地理位置选项卡
$(".chuxianzi0").click(function(){
        $(".chuxianzi0").css("background","").css("color","").eq($(this).parent().index()).css("background","#f10215").css("color","#fff");
        $(".lalabj").html($(".chuxianzi0").eq($(this).parent().index()).html())
    })