// banner京东秒杀定时器两小时
function addzero(a){
        if(a<10){
            a="0"+a
        }
        return a;
    }
 var djstime= 7200;    
             timerc = setInterval(function(){
                  if (djstime >= 0) {
                    hours=Math.floor(djstime / 3600);
                      minutes = Math.floor(djstime%3600/60);
                     seconds = Math.floor(djstime % 60);
                    djsxs.innerHTML=addzero(hours);
                    djsfz.innerHTML=addzero(minutes);
                    djsmiao.innerHTML=addzero(seconds);
                    djstime--;
                 } else{
                     djstime=7200;
                 }
             }, 1000); 
