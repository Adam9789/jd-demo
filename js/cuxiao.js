// banner右侧促销和公告选项卡及下面的小红线的移动
function cuxiao(aa,bb,cc){
        clearInterval(aa.timer)
        if(bb==="left"){
            aa.timer=setInterval(function(){
                    aa.style.left=aa.offsetLeft-1+"px";
                    if(aa.offsetLeft<=cc){
                            aa.style.left=cc+"px";
                            clearInterval(aa.timer)
                    }
            },1)

        }else{
            aa.timer=setInterval(function(){
                    aa.style.left=aa.offsetLeft+1+"px";
                    if(aa.offsetLeft>=cc){
                            aa.style.left=cc+"px";
                            clearInterval(aa.timer)
                    }
            },1)
        }
    }
        cxx.onmouseover=function(){
                cuxiao(heng,"left",13)
                zizi.style.display="block"
                zizi1.style.display="none"
            }
    ggg.onmouseover=function(){
                cuxiao(heng,"right",71)
                zizi.style.display="none"
                zizi1.style.display="block"
    }
