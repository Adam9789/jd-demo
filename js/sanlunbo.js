//第三个轮播
//数据获取
$.ajax({
    type: "get",
    url: "php/aaa.php",
    data: "ttdata=sanlunbodata",
    success: function (res) {
        var sanlunbostr = "";
        JSON.parse(res).forEach(item => {
            sanlunbostr += `<div class="sanerzi">
            <a href="javascript:;">
                <img src="images/${item.img}" alt="">
            </a>
        </div>`
        });
        sanbaba.innerHTML = sanlunbostr;
//移动函数
function lunbo3(aa,bb,cc){
        clearInterval(aa.timer)
        if(bb==="left"){
            aa.timer=setInterval(function(){
                    aa.style.left=aa.offsetLeft-2+"px";
                    if(aa.offsetLeft<=cc){
                            aa.style.left=cc+"px";
                            clearInterval(aa.timer)
                    }
            },1)

        }else{
            aa.timer=setInterval(function(){
                    aa.style.left=aa.offsetLeft+2+"px";
                    if(aa.offsetLeft>=cc){
                            aa.style.left=cc+"px";
                            clearInterval(aa.timer)
                    }
            },1)
        }
    }


 var sani=0;
    var timer3=setInterval(function(){
            if(sani>=2){
                sanbaba.style.left=0;
                sani=0;
            }
            sani++;
            lunbo3(sanbaba,"left",-180*sani)
            dianbianse3()
    },4000)

    //原点触摸移动
    var sanli=document.querySelectorAll("#san3dian div")
    for(var k3=0;k3<sanli.length;k3++){
        sanli[k3].index=k3;
        sanli[k3].onmouseover=function(){
            if(this.index>=sani){
                lunbo3(sanbaba,"left",-180*this.index)
            }else{
                lunbo3(sanbaba,"right",-180*this.index)
            }
            sani=this.index;
            dianbianse3()
        }
    }

// 清除其他，设置当前圆点颜色函数
function dianbianse3(){
    for(var sanj=0;sanj<sanli.length;sanj++){
        sanli[sanj].className="sandian2";
    }
    sanli[sani===2?0:sani].className="sandian1";
    
}
    }
})
