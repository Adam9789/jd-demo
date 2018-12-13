 function lunbo4(aa,bb,cc){
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

var zn95=document.querySelectorAll(".znzn390355")
var txxx=document.querySelectorAll(".gwzn li")
    for( var k11=0;k11<txxx.length;k11++){
        txxx[k11].lululu=k11
        txxx[k11].onmouseover=function(){
                for(var t11=0;t11<zn95.length;t11++){
                     zn95[t11].style.display="none";
                     txxx[t11].style.color="#666666"
                }   
            zn95[this.lululu].style.display="block";
            txxx[this.lululu].style.color="#df2622"
        }
    }







var i4=0;
var lisphb=document.querySelectorAll(".z351 .paihang1dianbaba div")
var z351=document.querySelector(".z351 .znzn700330")
    for(var k4=0;k4<lisphb.length;k4++){
        lisphb[k4].lululu=k4;
        lisphb[k4].onmouseover=function(){
            if(this.lululu>=i4){
                lunbo4(z351,"left",-350*this.lululu)
            }else{
                lunbo4(z351,"right",-350*this.lululu)
            }
            i4=this.lululu;
            dianbianse4()
        }
    }
var i42=0;
var lisphb2=document.querySelectorAll(".z352 .paihang1dianbaba div")
var z352=document.querySelector(".z352 .znzn700330")
    for(var k42=0;k42<lisphb2.length;k42++){
        lisphb2[k42].lululu=k42;
        lisphb2[k42].onmouseover=function(){
            if(this.lululu>=i42){
                lunbo4(z352,"left",-350*this.lululu)
            }else{
                lunbo4(z352,"right",-350*this.lululu)
            }
            i42=this.lululu;
            dianbianse42()
        }
    }

var i43=0;
var lisphb3=document.querySelectorAll(".z353 .paihang1dianbaba div")
var z353=document.querySelector(".z353 .znzn700330")
    for(var k43=0;k43<lisphb3.length;k43++){
        lisphb3[k43].lululu=k43;
        lisphb3[k43].onmouseover=function(){
            if(this.lululu>=i43){
                lunbo4(z353,"left",-350*this.lululu)
            }else{
                lunbo4(z353,"right",-350*this.lululu)
            }
            i43=this.lululu;
            dianbianse43()
        }
    }
var i44=0;
var lisphb4=document.querySelectorAll(".z354 .paihang1dianbaba div")
var z354=document.querySelector(".z354 .znzn700330")
    for(var k44=0;k44<lisphb4.length;k44++){
        lisphb4[k44].lululu=k44;
        lisphb4[k44].onmouseover=function(){
            if(this.lululu>=i44){
                lunbo4(z354,"left",-350*this.lululu)
            }else{
                lunbo4(z354,"right",-350*this.lululu)
            }
            i44=this.lululu;
            dianbianse44()
        }
    }
var i45=0;
var lisphb5=document.querySelectorAll(".z355 .paihang1dianbaba div")
var z355=document.querySelector(".z355 .znzn700330")
    for(var k45=0;k45<lisphb5.length;k45++){
        lisphb5[k45].lululu=k45;
        lisphb5[k45].onmouseover=function(){
            if(this.lululu>=i45){
                lunbo4(z355,"left",-350*this.lululu)
            }else{
                lunbo4(z355,"right",-350*this.lululu)
            }
            i45=this.lululu;
            dianbianse45()
        }
    }

function dianbianse4(){
    for(var j4=0;j4<2;j4++){
        lisphb[j4].className="paihang1dian2";
    }
    lisphb[i4].className="paihang1dian1"; 
}
function dianbianse42(){
    for(var j42=0;j42<2;j42++){
        lisphb2[j42].className="paihang1dian2";
    }
    lisphb2[i42].className="paihang1dian1"; 
}
function dianbianse43(){
    for(var j43=0;j43<2;j43++){
        lisphb3[j43].className="paihang1dian2";
    }
    lisphb3[i43].className="paihang1dian1"; 
}
function dianbianse44(){
    for(var j44=0;j44<2;j44++){
        lisphb4[j44].className="paihang1dian2";
    }
    lisphb4[i44].className="paihang1dian1"; 
}
function dianbianse45(){
    for(var j45=0;j45<2;j45++){
        lisphb5[j45].className="paihang1dian2";
    }
    lisphb5[i45].className="paihang1dian1"; 
}