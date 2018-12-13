function lunbo7(aa,bb,cc){
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
    var i7=0;
    var timer7=setInterval(function(){
            if(i7>=3){
                qibaba.style.left=0;
                i7=0;
            }
            i7++;
            dianbianse7()
            lunbo7(qibaba,"left",-350*i7)
    },3000)

// 左右点击
    next7.onclick=function(){
        if(i7>=3){
            qibaba.style.left=0;
            i7=0
        }
        i7++;
        dianbianse7()
        lunbo7(qibaba,"left",-350*i7)
    }
    pre7.onclick=function(){
        if(i7<=0){
            qibaba.style.left="-1050px";
            i7=3
        }
        i7--;
        dianbianse7()
        lunbo7(qibaba,"right",-350*i7)
    }


    // diandian
    var lis7=document.querySelectorAll(".qidianbaba div")
    for(var k7=0;k7<lis7.length;k7++){
        lis7[k7].lululu=k7;
        lis7[k7].onmouseover=function(){
            if(this.lululu>=i7){
                lunbo7(qibaba,"left",-350*this.lululu)
            }else{
                lunbo7(qibaba,"right",-350*this.lululu)
            }
            i7=this.lululu;
            dianbianse7()
        }
    }


function dianbianse7(){
    for(var j7=0;j7<lis7.length;j7++){
        lis7[j7].className="qidian2";
    }
    lis7[i7===3?0:i7].className="qidian1";
    
}

qizuye.onmouseover=function(){
    clearInterval(timer7)
}
qizuye.onmouseout=function(){
    timer7=setInterval(function(){
            if(i7>=3){
                qibaba.style.left=0;
                i7=0;
            }
            i7++;
            dianbianse7()
            lunbo7(qibaba,"left",-350*i7)
    },3000)
}