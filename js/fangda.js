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