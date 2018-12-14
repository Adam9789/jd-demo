// 详情页放大镜
$(".maintu").mouseover(function(){
    $(".jubukuang").css("display","block")
    $(".dakuang").css("display","block")
    $(".maintu").mousemove(function(ev){
        var x=ev.clientX-$(this).offset().left-88;
        var y=ev.clientY-$(this).offset().top-88+$(window).scrollTop();
        $(".jubukuang").css("top",y+"px").css("left",x+"px");
        $(".datu").css("left",-x*3+"px").css("top",-y*3+"px");
        if ($(".jubukuang").position().left< 0) {
            $(".jubukuang").css("left",0);
            $(".datu").css("left",0);
          } else if ($(".jubukuang").position().left> 175) {
            $(".jubukuang").css("left",175+"px");
            $(".datu").css("left",-525+"px");
          }
          if ($(".jubukuang").position().top< 0) {
            $(".jubukuang").css("top",0);
            $(".datu").css("top",0);
          } else if ($(".jubukuang").position().top> 175) {
            $(".jubukuang").css("top",175+"px");
            $(".datu").css("top",-525+"px");
          }
          if(ev.clientX-$(this).offset().left>=351){
            $(".jubukuang").css("display","none")
            $(".dakuang").css("display","none")
          }
    })
})
$(".maintu").mouseout(function(){
    $(".jubukuang").css("display","none")
    $(".dakuang").css("display","none")
})
//意外保障选择
var flag1=true;
var flag2=true;
$(".prov1").click(function(){
  if(flag1){
  $(this).css("border","2px solid #E3393C").css("padding","0 6px")
}else{
  $(this).css("border","1px solid #ddd").css("padding","1px 7px")
}
flag1=!flag1
})
$(".prov2").click(function(){
  if(flag2){
  $(this).css("border","2px solid #E3393C").css("padding","0 6px")
}else{
  $(this).css("border","1px solid #ddd").css("padding","1px 7px")
}
flag2=!flag2
})

// 详情页简介售后评论选项卡
$(".rightzong li").click(function(){
  $(".rightzong li").attr("class","baili").eq($(this).index()).attr("class","hongli")
  $(".jianjie").css("display","none").eq($(this).index()).css("display","block")
})
// 详情页商品数量选择加减
$(".jia1").click(function(){
  $(".addnum").html(parseInt($(".addnum").html())+1)
})
$(".jian1").click(function(){
  if(parseInt($(".addnum").html())>0){
  $(".addnum").html(parseInt($(".addnum").html())-1)
}
})