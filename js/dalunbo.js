$.ajax({
    type:"get",
    url:"php/aaa.php",
    data:"ttdata=dalunbodata",
    success:function(res){
        var dalunbostr="";
        JSON.parse(res).forEach(item => {
            dalunbostr+=`<li style="opacity:${item.opc}" class="firstlb"><img src="images/${item.img}" alt=""></li>`
        });
        fflb.innerHTML=dalunbostr;

// 切换函数
var fstlb=document.getElementsByClassName("firstlb")
    function jdlunbo(){
            for(var t=0;t<fstlb.length;t++){
            fstlb[t].style.opacity=0;
        }
        fstlb[i].style.opacity=1;

        }
    // 定时器移动
    var i=0;
    var timer=setInterval(function(){
            if(i>=7){
                i=-1;
            }
            i++;
            dianbianse()
            jdlunbo()
    },4000)


    // 左右标志点击移动
    next.onclick=function(){
        if(i>=7){
            i=-1
        }
        i++;
        dianbianse()
        jdlunbo()
    }
    pre.onclick=function(){
        if(i<=0){
            i=8
        }
        i--;
        dianbianse()
        jdlunbo()
    }


    // 绑定圆点触摸移动
    var lis=document.querySelectorAll(".smdianbaba li")
    for(var k=0;k<lis.length;k++){
        lis[k].lululu=k;
        lis[k].onmouseover=function(){
            i=this.lululu;
            jdlunbo()
            dianbianse()
        }
    }

// 清除其他，设置当前圆点颜色函数
function dianbianse(){
    for(var j=0;j<lis.length;j++){
        lis[j].className="diergeys";
    }
    lis[i].className="diyigeys";
    
}

// 触摸暂停定时器
boxxlb.onmouseover=function(){
    clearInterval(timer)
    // next.style.display="block"
    // pre.style.display="block"
}
boxxlb.onmouseout=function(){
    timer=setInterval(function(){
            if(i>=7){
                i=-1;
            }
            i++;
            dianbianse()
            jdlunbo()
    },4000)
    // next.style.display="none"
    // pre.style.display="none"
}
}
})