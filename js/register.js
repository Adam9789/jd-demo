// step1
$("#phone").focus(function(){
    $(".tishi1").css("display","block")
    $(this).css("border","1px solid rgb(102,102,102")
    if($(this).val()==""){
        $(".tishi1 span").html("验证完成后，你可以使用该手机登录或找回密码").css("color","#c5c5c5")
        $(".ts1").css("backgroundPosition","0px -100px")
    }
})
$("#phone").blur(function(){
    $(this).css("border","")
    if(!$(this).val()==""){
    if(/^1\d{10}$/.test($(this).val())){
        $(".yes1").css("display","block")
        $(".tishi1").css("display","none")
        $("#phone").focus(function(){
            $(".tishi1").css("display","none")
            $(this).css("border","1px solid rgb(102,102,102")
        })
    }else{
        $(".tishi1").css("display","block")
        $(".ts1").css("backgroundPosition","-17px -100px")
        $(".tishi1 span").html("格式错误").css("color","#f91")
        $(".yes1").css("display","none")
        $("#phone").focus(function(){
            $(".tishi1").css("display","block")
            $(this).css("border","1px solid rgb(102,102,102")
        })
    }
    }else{
    $(".tishi1").css("display","none")
    $(".yes1").css("display","none")
}
})
$(".nextstep1").click(function(){
    if(/^1\d{10}$/.test($("#phone").val())){
        $(".kuang1").css("display","none")
        $(".kuang2").css("display","block")
        $(".proline1").css("backgroundPosition","0px -130px")
        $(".stn1").css("backgroundPosition","0px 0px").html("")
        $(".stn2").css("backgroundPosition","0px -200px").css("color","#fff")
    }else{
        if($("#phone").val()===""){
        $(".tishi1").css("display","block")
        $(".ts1").css("backgroundPosition","-17px -100px")
        $(".tishi1 span").html("请输入手机号").css("color","#f91")
    }
}
})
//step2
$(".username").focus(function(){
    $(".tishi3").css("display","block")
    $(this).css("border","1px solid rgb(102,102,102")
    if($(this).val()==""){
        $(".tishi3 span").html('支持中文、英文、数字、"-"、"_"的组合,4-20个字符').css("color","#c5c5c5")
        $(".ts3").css("backgroundPosition","0px -100px")
    }
})
$(".username").blur(function(){
    $(this).css("border","")
    if(!$(this).val()==""){
    if(/^[A-Za-z0-9_\-\u4e00-\u9fa5]{4,20}$/.test($(this).val())){
        $(".yes3").css("display","block")
        $(".tishi3").css("display","none")
        $(".username").focus(function(){
            $(".tishi3").css("display","none")
            $(this).css("border","1px solid rgb(102,102,102")
        })
    }else{
        if(/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test($(this).val())){
            $(".tishi3 span").html("长度只能在4-20个字符之间").css("color","#f91")
        }else{
            $(".tishi3 span").html('格式错误，仅支持中文、英文、数字、"-"、"_"的组合').css("color","#f91")
        }
        $(".tishi3").css("display","block")
        $(".ts3").css("backgroundPosition","-17px -100px")
        $(".yes3").css("display","none")
        $(".username").focus(function(){
            $(".tishi3").css("display","block")
            $(this).css("border","1px solid rgb(102,102,102")
        })
    }
    }else{
    $(".tishi3").css("display","none")
    $(".yes3").css("display","none")
}
})

$(".password").focus(function(){
    $(".tishi4").css("display","block")
    $(this).css("border","1px solid rgb(102,102,102")
    if($(this).val()==""){
        $(".tishi4 span").html('建议使用字母、数字和符号两种及以上的组合,6-20个字符').css("color","#c5c5c5")
        $(".ts4").css("backgroundPosition","0px -100px")
    }
})
$(".password").blur(function(){
    $(this).css("border","")
    if(!$(this).val()==""){
        if($(".pwagain").val()==""){
        $(".tishi5 span").html("请再次输入密码").css("color","#f91")
        $(".ts5").css("backgroundPosition","-17px -100px")
        $(".tishi5").css("display","block")
        $(".yes5").css("display","none")
        }else{
        if($(".pwagain").val()!==$(this).val()){
        $(".tishi5 span").html("两次密码输入不一致").css("color","#f91")
        $(".ts5").css("backgroundPosition","-17px -100px")
        $(".tishi5").css("display","block")
        $(".yes5").css("display","none")
        }else{
            $(".yes5").css("display","block")
            $(".tishi5").css("display","none")
            $(".pwagain").focus(function(){
                $(".tishi5").css("display","none")
                $(this).css("border","1px solid rgb(102,102,102")
            })
        }
    }
    if(/^\S{6,20}$/.test($(this).val())){
        $(".yes4").css("display","block")
        $(".tishi4").css("display","none")
        $(".password").focus(function(){
            $(".tishi4").css("display","none")
            $(this).css("border","1px solid rgb(102,102,102")
        })
    }else{
        $(".tishi4 span").html("长度只能在6-20个字符之间").css("color","#f91")
        $(".tishi4").css("display","block")
        $(".ts4").css("backgroundPosition","-17px -100px")
        $(".yes4").css("display","none")
        $(".password").focus(function(){
            $(".tishi4").css("display","block")
            $(this).css("border","1px solid rgb(102,102,102")
        })
    }
    }else{
    $(".tishi4").css("display","none")
    $(".yes4").css("display","none")
}
})
$(".pwagain").focus(function(){
    $(".tishi5").css("display","block")
    $(this).css("border","1px solid rgb(102,102,102")
    if($(this).val()==""){
        $(".tishi5 span").html('请再次输入密码').css("color","#c5c5c5")
        $(".ts5").css("backgroundPosition","0px -100px")
    }
})
$(".pwagain").blur(function(){
    $(this).css("border","")
    if(!$(".password").val()==""){
        if($(".pwagain").val()==""){
        $(".tishi5 span").html("请再次输入密码").css("color","#f91")
        $(".ts5").css("backgroundPosition","-17px -100px")
        $(".tishi5").css("display","block")
        $(".yes5").css("display","none")
        }else{
         if($(".pwagain").val()!==$(".password").val()){
        $(".tishi5 span").html("两次密码输入不一致").css("color","#f91")
        $(".ts5").css("backgroundPosition","-17px -100px")
        $(".tishi5").css("display","block")
        $(".yes5").css("display","none")
        }else{
            $(".yes5").css("display","block")
            $(".tishi5").css("display","none")
            $(".pwagain").focus(function(){
                $(".tishi5").css("display","none")
                $(this).css("border","1px solid rgb(102,102,102")
            })
        }
    }
    }else{
    $(".tishi5").css("display","none")
    $(".yes5").css("display","none")
    
}
})
$(".nextstep2").click(function(){
    if(/^[A-Za-z0-9_\-\u4e00-\u9fa5]{4,20}$/.test($(".username").val())&&/^\S{6,20}$/.test($(".password").val())&&$(".pwagain").val()===$(".password").val()){
        $(".kuang2").css("display","none")
        $(".process").css("display","none")
        $(".tt").css("display","block")
        $(".gogo").css("display","block")
        $(".gongxi").html("恭喜您"+$(".username").val())
    }
})
