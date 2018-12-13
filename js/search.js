 sch.onkeyup=function(ev){
    if(sch.value!==""){
        schxiala.style.display="block"
        if(ev.keyCode===13){
            window.location.href=`https://search.jd.com/Search?keyword=${sch.value}&enc=utf-8&pvid=831b0f19a0c447b38b685a84fa022261`
        }
    }else{
        schxiala.style.display="none"
        if(ev.keyCode===13){
            window.location.href=`https://search.jd.com/Search?keyword=${sch.placeholder}&enc=utf-8&pvid=831b0f19a0c447b38b685a84fa022261`
        }
    }
    // input.value;
    var soh=document.createElement("script");
    soh.src="https://suggest.taobao.com/sug?code=utf-8&q="+sch.value+"&_ksTS=1542866740021_6609&callback=fn&k=1&area=c2c&bucketid=4";
    document.getElementsByTagName("head")[0].appendChild(soh);
    document.getElementsByTagName("head")[0].removeChild(soh);
 }
 nbtn.onclick=function(){
    if(sch.value!==""){
     window.location.href=`https://search.jd.com/Search?keyword=${sch.value}&enc=utf-8&pvid=831b0f19a0c447b38b685a84fa022261`
 }else{
    window.location.href=`https://search.jd.com/Search?keyword=${sch.placeholder}&enc=utf-8&pvid=831b0f19a0c447b38b685a84fa022261`
 }
}
 
 function fn(data){
     var res=data.result;
     var str="";
     res.forEach(item=>{
        str+=`<div class="scxl">
        <a href="https://search.jd.com/Search?keyword=${item[0]}&enc=utf-8&pvid=831b0f19a0c447b38b685a84fa022261" class="scxl0">${item[0]}</a>
        <span class="scxl1">约${item[1]}个商品</span>
        </div>`
     })
    schxiala.innerHTML=`<p id="gbb">关闭</p>`+str;   
 }
 $("#schxiala").on("click",function(ev){
    $("#sch").val($(ev.target).parent().children().eq(0).html())
 })
 sch.onfocus=function(){
    if(sch.value!==""){
        schxiala.style.display="block"
    }else{
        schxiala.style.display="none"
    }
    var soh=document.createElement("script");
    soh.src="https://suggest.taobao.com/sug?code=utf-8&q="+sch.value+"&_ksTS=1542866740021_6609&callback=fn&k=1&area=c2c&bucketid=4";
    document.getElementsByTagName("head")[0].appendChild(soh);
    document.getElementsByTagName("head")[0].removeChild(soh);
}
sch.onblur=function(){
        setTimeout(function(){
            schxiala.style.display="none"
        },400)
    }