//特色推荐轮播图
function lunbo8(aa,bb,cc){
        clearInterval(aa.timer)
        if(bb==="left"){
            aa.timer=setInterval(function(){
                    aa.style.left=aa.offsetLeft-10+"px";
                    if(aa.offsetLeft<=cc){
                            aa.style.left=cc+"px";
                            clearInterval(aa.timer)
                    }
            })

        }else{
            aa.timer=setInterval(function(){
                    aa.style.left=aa.offsetLeft+10+"px";
                    if(aa.offsetLeft>=cc){
                            aa.style.left=cc+"px";
                            clearInterval(aa.timer)
                    }
            })
        }
    }


     // 定时器
    var i8=0;
    var timer8=setInterval(function(){
            if(i8>=4){
                tuijianbaba.style.left=0;
                i8=0;
            }
            i8++;
            dianbianse8()
            lunbo8(tuijianbaba,"left",-1200*i8)
    },3000)

// 左右点击
    next8.onclick=function(){
        if(i8>=4){
            tuijianbaba.style.left=0;
            i8=0
        }
        i8++;
        dianbianse8()
        lunbo8(tuijianbaba,"left",-1200*i8)
    }
    pre8.onclick=function(){
        if(i8<=0){
            tuijianbaba.style.left="-4800px";
            i8=4
        }
        i8--;
        dianbianse8()
        lunbo8(tuijianbaba,"right",-1200*i8)
    }


    // diandian
    var lis8=document.querySelectorAll(".badianbaba div")
    for(var k8=0;k8<lis8.length;k8++){
        lis8[k8].lululu=k8;
        lis8[k8].onmouseover=function(){
            if(this.lululu>=i8){
                lunbo8(tuijianbaba,"left",-1200*this.lululu)
            }else{
                lunbo8(tuijianbaba,"right",-1200*this.lululu)
            }
            i8=this.lululu;
            dianbianse8()
        }
    }


function dianbianse8(){
    for(var j8=0;j8<lis8.length;j8++){
        lis8[j8].className="badian2";
    }
    lis8[i8===4?0:i8].className="badian1";
    
}

tesetuijian.onmouseover=function(){
    clearInterval(timer8)
}
tesetuijian.onmouseout=function(){
    timer8=setInterval(function(){
            if(i8>=3){
                tuijianbaba.style.left=0;
                i8=0;
            }
            i8++;
            dianbianse8()
            lunbo8(tuijianbaba,"left",-1200*i8)
    },3000)
}