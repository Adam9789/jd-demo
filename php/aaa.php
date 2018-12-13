<?php
$ttdata=$_GET["ttdata"];
$dalunbodata='[{"opc":"1","img":"jsy.jpg"},{"opc":"0","img":"jsy2.jpg"},{"opc":"0","img":"jsy3.jpg"},
                {"opc":"0","img":"jsy4.jpg"},{"opc":"0","img":"jsy5.jpg"},{"opc":"0","img":"jsy6.jpg"},
                {"opc":"0","img":"jsy7.jpg"},{"opc":"0","img":"jsy8.jpg"}]';
$santudata='[{"img":"manjian.jpg"},{"img":"manjian2.jpg"},{"img":"manjian3.jpg"}]';
$erlunbodata='[{"img":"xxx2.jpg","content":"【二手9成新】小米（MI）...","price":"1368.00","preprice":"1888.00"},
            {"img":"xxx3.jpg","content":"狄派 4g独显/绝地求生吃鸡...","price":"2196.00","preprice":"2699.00"},
            {"img":"xxx4.jpg","content":"EBER 平衡车儿童成人两轮...","price":"599.00","preprice":"799.00"},
            {"img":"xxx5.jpg","content":"天语（K-TOUCH）T3直板...","price":"128.00","preprice":"158.00"},
            {"img":"xxx22.jpg","content":"【二手9成新】小米（MI）...","price":"1368.00","preprice":"1888.00"},
            {"img":"xxx23.jpg","content":"【二手9成新】小米（MI）...","price":"1368.00","preprice":"1888.00"},
            {"img":"xxx24.jpg","content":"【二手9成新】小米（MI）...","price":"1368.00","preprice":"1888.00"},
            {"img":"xxx25.jpg","content":"【二手9成新】小米（MI）...","price":"1368.00","preprice":"1888.00"},
            {"img":"xxx32.jpg","content":"【二手9成新】小米（MI）...","price":"1368.00","preprice":"1888.00"},
            {"img":"xxx33.jpg","content":"【二手9成新】小米（MI）...","price":"1368.00","preprice":"1888.00"},
            {"img":"xxx34.jpg","content":"【二手9成新】小米（MI）...","price":"1368.00","preprice":"1888.00"},
            {"img":"xxx35.jpg","content":"【二手9成新】小米（MI）...","price":"1368.00","preprice":"1888.00"},
            {"img":"xxx42.jpg","content":"【二手9成新】小米（MI）...","price":"1368.00","preprice":"1888.00"},
            {"img":"xxx43.jpg","content":"【二手9成新】小米（MI）...","price":"1368.00","preprice":"1888.00"},
            {"img":"xxx44.jpg","content":"【二手9成新】小米（MI）...","price":"1368.00","preprice":"1888.00"},
            {"img":"xxx45.jpg","content":"【二手9成新】小米（MI）...","price":"1368.00","preprice":"1888.00"},
            {"img":"xxx2.jpg","content":"【二手9成新】小米（MI）...","price":"1368.00","preprice":"1888.00"},
            {"img":"xxx3.jpg","content":"狄派 4g独显/绝地求生吃鸡...","price":"2196.00","preprice":"2699.00"},
            {"img":"xxx4.jpg","content":"EBER 平衡车儿童成人两轮...","price":"599.00","preprice":"799.00"},
            {"img":"xxx5.jpg","content":"天语（K-TOUCH）T3直板...","price":"128.00","preprice":"158.00"}]';
$sanlunbodata='[{"img":"xxx6.jpg"},{"img":"xxx666.jpg"},{"img":"xxx6.jpg"}]';
$asdzldata='[{"img":"as1.jpg"},{"img":"as2.jpg"},{"img":"as3.jpg"},{"img":"as4.jpg"},{"img":"as5.jpg"},
            {"img":"as6.jpg"},{"img":"as7.jpg"},{"img":"as8.jpg"},{"img":"as9.jpg"},{"img":"as10.jpg"}]';
$asdxdata='[{"img":"as11.jpg"},{"img":"as12.jpg"},{"img":"as13.jpg"},{"img":"as14.jpg"}]';
$cuxiaodata='[{"content":"超值预售1元最高抵1111"},{"content":"99元投影机限量砍到手"},{"content":"你的家，智能了吗？"},
            {"content":"吃货大作战 199减120"}]';
$gonggaodata='[{"content":"京东图书勋章体系改版公告"},{"content":"京东PLUS会员权益更新及会费调整"},{"content":"京东启用全新客服电话“950618”"},
            {"content":"关于召回普利司通（天津）轮胎有限公司2个规格乘用车轮胎的公告"}]';
$listdata='[{"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488},
            {"imgurl":"1.jpg","content":"华为（HUAWEI） P20 Pro 全面屏手机 宝石蓝 全网通 6G+64G","price":4488}]';
$shumingdata='[{"img":"shu1.jpg","name":"JavaScript从入门到精通（标准版）","price":"63.40"},
            {"img":"shu2.jpg","name":"CSS权威指南（第3版）","price":"44.40"},
            {"img":"shu3.jpg","name":"Vue.js实战","price":"62.40"},
            {"img":"shu4.jpg","name":"Python编程（第4版 套装上下册）","price":"157.00"},
            {"img":"shu5.jpg","name":"JavaScript语言精粹（修订版）","price":"42.10"},
            {"img":"shu6.jpg","name":"Python基础教程（第3版）","price":"80.90"},
            {"img":"shu7.jpg","name":"Java从入门到精通（第4版 附光盘）","price":"57.70"},
            {"img":"shu8.jpg","name":"算法导论（原书第3版）/计算机科学丛书","price":"102.50"},
            {"img":"shu9.jpg","name":"深度学习","price":"137.30"},
            {"img":"shu10.jpg","name":"编写可维护的JavaScript","price":"49.00"},
            {"img":"shu11.jpg","name":"JavaScript从入门到精通（第2版）（配光盘）（软件开发视频大讲堂）","price":"64.60"},
            {"img":"shu12.jpg","name":"高性能JavaScript","price":"55.90"},
            {"img":"shu13.jpg","name":"JavaScript设计模式","price":"43.60"},
            {"img":"shu14.jpg","name":"零基础学JavaScript（全彩版  附光盘  小白实战手册）","price":"56.40"},
            {"img":"shu15.jpg","name":"JavaScript忍者秘籍  第2版","price":"88.10"},
            {"img":"shu16.jpg","name":"Angular权威教程","price":"86.00"}]';

if($ttdata=="dalunbodata"){
    echo $dalunbodata;
}else if($ttdata=="santudata"){
    echo $santudata;
}else if($ttdata=="erlunbodata"){
    echo $erlunbodata;
}else if($ttdata=="sanlunbodata"){
    echo $sanlunbodata;
}else if($ttdata=="asdzldata"){
    echo $asdzldata;
}else if($ttdata=="asdxdata"){
    echo $asdxdata;
}else if($ttdata=="cuxiaodata"){
    echo $cuxiaodata;
}else if($ttdata=="gonggaodata"){
    echo $gonggaodata;
}else if($ttdata=="listdata"){
    echo $listdata;
}else if($ttdata=="shumingdata"){
    echo $shumingdata;
}
?>