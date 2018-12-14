//领券中心点击轮播选项卡
function lunbo6(aa,bb,cc){
        clearInterval(aa.timer)
        if(bb==="left"){
            aa.timer=setInterval(function(){
                    aa.style.left=aa.offsetLeft-5+"px";
                    if(aa.offsetLeft<=cc){
                            aa.style.left=cc+"px";
                            clearInterval(aa.timer)
                    }
            })

        }else{
            aa.timer=setInterval(function(){
                    aa.style.left=aa.offsetLeft+5+"px";
                    if(aa.offsetLeft>=cc){
                            aa.style.left=cc+"px";
                            clearInterval(aa.timer)
                    }
            })
        }
    }
var i6=0;
var lis6=document.querySelectorAll(".liudianbaba div")
    for(var k6=0;k6<lis6.length;k6++){
        lis6[k6].lululu=k6;
        lis6[k6].onmouseover=function(){
            if(this.lululu>=i6){
                lunbo6(lquanbaba,"left",-350*this.lululu)
            }else{
                lunbo6(lquanbaba,"right",-350*this.lululu)
            }
            i6=this.lululu;
            dianbianse6()
        }
    }


function dianbianse6(){
    for(var j6=0;j6<lis6.length;j6++){
        lis6[j6].className="liudian2";
    }
    lis6[i6].className="liudian1";
    
}