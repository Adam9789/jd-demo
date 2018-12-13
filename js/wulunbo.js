function lunbo5(aa,bb,cc){
        clearInterval(aa.timer)
        if(bb==="left"){
            aa.timer=setInterval(function(){
                    aa.style.left=aa.offsetLeft-4+"px";
                    if(aa.offsetLeft<=cc){
                            aa.style.left=cc+"px";
                            clearInterval(aa.timer)
                    }
            })

        }else{
            aa.timer=setInterval(function(){
                    aa.style.left=aa.offsetLeft+4+"px";
                    if(aa.offsetLeft>=cc){
                            aa.style.left=cc+"px";
                            clearInterval(aa.timer)
                    }
            })
        }
    }


     // 定时器
    var i5=0;
    var timer5=setInterval(function(){
            if(i5>=3){
                fen1400390.style.left=0;
                i5=0;
            }
            i5++;
            dianbianse5()
            lunbo5(fen1400390,"left",-350*i5)
    },3000)

// 左右点击
    next5.onclick=function(){
        if(i5>=3){
            fen1400390.style.left=0;
            i5=0
        }
        i5++;
        dianbianse5()
        lunbo5(fen1400390,"left",-350*i5)
    }
    pre5.onclick=function(){
        if(i5<=0){
            fen1400390.style.left="-1050px";
            i5=3
        }
        i5--;
        dianbianse5()
        lunbo5(fen1400390,"right",-350*i5)
    }


    // diandian
    var wudian=document.querySelectorAll(".fenwudianbaba div")
    for(var kwu=0;kwu<wudian.length;kwu++){
        wudian[kwu].lululu=kwu;
        wudian[kwu].onmouseover=function(){
            if(this.lululu>=i5){
                lunbo5(fen1400390,"left",-350*this.lululu)
            }else{
                lunbo5(fen1400390,"right",-350*this.lululu)
            }
            i5=this.lululu;
            dianbianse5()
        }
    }


function dianbianse5(){
    for(var j5=0;j5<wudian.length;j5++){
        wudian[j5].className="fenwudian2";
    }
    wudian[i5===3?0:i5].className="fenwudian1";
    
}

fending390.onmouseover=function(){
    clearInterval(timer5)
}
fending390.onmouseout=function(){
    timer5=setInterval(function(){
            if(i5>=3){
                fen1400390.style.left=0;
                i5=0;
            }
            i5++;
            dianbianse5()
            lunbo5(fen1400390,"left",-350*i5)
    },3000)
}