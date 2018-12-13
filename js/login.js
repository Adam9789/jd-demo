saomadl.onclick=function(){
    saomadl.style.color="#e4393c";
    saomadl.style.fontWeight="700";
    saomasc.style.display="block";
    zhanghaodl.style.color="#666";
    zhanghaodl.style.fontWeight="normal";
    zhanghaosc.style.display="none";
}
zhanghaodl.onclick=function(){
    zhanghaodl.style.color="#e4393c";
    zhanghaodl.style.fontWeight="700";
    zhanghaosc.style.display="block";
    saomadl.style.color="#666";
    saomadl.style.fontWeight="normal";
    saomasc.style.display="none";
}


dlu.onclick=function(){
    
        var ajax=new XMLHttpRequest();
        ajax.open("post","../php/login.php",true);
        ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send("user="+yjsj.value+"&password="+mima.value);
        ajax.onreadystatechange=function(){
           if(ajax.readyState===4&&ajax.status===200){
              var res=JSON.parse(ajax.responseText).code;
              
               if(res===0){
                  tishizi.innerHTML="用户名不存在"
                  tishi.style.opacity="1"
                  lb1.style.backgroundPosition="0px -96px"
                  lb2.style.backgroundPosition="-48px -96px"
                  kuang1.style.borderColor="#e4393c"
                  kuang2.style.borderColor="#e4393c"
                  lb1.style.borderColor="#e4393c"
                  lb2.style.borderColor="#e4393c"
               }else if(res===1){
                   if(mima.value===""){
                    tishizi.innerHTML="请输入密码"
                   }else{
                  tishizi.innerHTML="账户名与密码不匹配，请重新输入"
                  kuang1.style.borderColor="#e4393c"
                  lb1.style.borderColor="#e4393c"
                  lb1.style.backgroundPosition="0px -96px"
                }
                  tishi.style.opacity="1"  
                  lb2.style.backgroundPosition="-48px -96px"
                  kuang2.style.borderColor="#e4393c"
                  lb2.style.borderColor="#e4393c"
                
               }else if(res===2){
                  window.location.href="../jd.html"
                  // lb1.style.backgroundPosition="0px -96px"
                  // lb2.style.backgroundPosition="-48px -96px"
               } 
               if(yjsj.value===""&&mima.value===""){
                tishizi.innerHTML="请输入用户名和密码"
                tishi.style.opacity="1"
                lb1.style.backgroundPosition="0px -96px"
                          lb2.style.backgroundPosition="-48px -96px"
                          kuang1.style.borderColor="#e4393c"
                          kuang2.style.borderColor="#e4393c"
                          lb1.style.borderColor="#e4393c"
                          lb2.style.borderColor="#e4393c"
            }else{
                if(yjsj.value===""&&mima.value!==""){
                    tishizi.innerHTML="请输入用户名"
                    lb1.style.backgroundPosition="0px -96px"
                    kuang1.style.borderColor="#e4393c"
                    lb1.style.borderColor="#e4393c"
                }
            }           
           }
        }
    }
    yjsj.onfocus=function(){
        lb1.style.backgroundPosition="0px -48px"
        kuang1.style.borderColor=""
        lb1.style.borderColor=""
    }
    yjsj.onblur=function(){
        lb1.style.backgroundPosition="0px 0px"
    }
    mima.onfocus=function(){
        lb2.style.backgroundPosition="-48px -48px"
        kuang2.style.borderColor=""
        lb2.style.borderColor=""
    }
    mima.onblur=function(){
        lb2.style.backgroundPosition="-48px -0px"
    }
    