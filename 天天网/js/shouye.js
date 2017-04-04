
$(function () {
    /***************************轮播图********************************/
    var index = 0;
    var timer = null;
    var minute = 59;
    var second = 59;
    var millisecond = 900;
    autoPlay();
    /*鼠标放到点上去切换图片*/
    $(".banner .point a").on("mouseover",function () {
        clearInterval(timer);
        index = $(this).index();
        $(".banner .point a").eq(index).children().addClass("cur").parent().siblings().children().removeClass("cur");
        $(".banner .pics li").eq(index).fadeIn(500).show().siblings().fadeOut(500).hide();
    });
    $(".banner .pics").hover(function () {
        clearInterval(timer);
    },function () {
        autoPlay();
    });

    /*时间*/
    /*分*/
    setInterval(function () {
        minute-=1;
        if (minute<0){
            minute = 59;
        }
        $(".oneHour .time span").eq(0).html(''+minute+'');
    },60000)
    /*秒*/
    setInterval(function () {
        second-=1;
        if (second<0){
            second = 59;
        }
        $(".oneHour .time span").eq(1).html(''+second+'');
    },1000)
    /*十分之一秒*/
    setInterval(function () {
        millisecond-=100;
        if (millisecond<0){
            millisecond = 900;
        }
        $(".oneHour .time span").eq(2).html(''+parseInt(millisecond/100)+'');
    },100)

    /*下边框*/
    $(".status a").hover(function () {
        $(this).children().css({"border-bottom":"2px solid #ED1D61"}).parent().siblings().children().css({"border-bottom":"0px"})
    })

    var div = document.querySelectorAll("div");
    div.ondblclick= function () {
        alert(0)
    }
    function autoPlay(){
        timer = setInterval(function () {
            index++;
            if (index>5){
                index = 0;
            }
            $(".banner .point a").eq(index).children().addClass("cur").parent().siblings().children().removeClass("cur");
            $(".banner .pics li").eq(index).fadeIn(500).show().siblings().fadeOut(500).hide();
        },3500)
    }
    /*右侧黑边登录界面*/
    $(".right-black .user").hover(function () {
        $(".right-black .user_in").show();
    },function () {
        $(".right-black .user_in").hide();
    })
    $(".right-black .user .user_in .close").click(function () {
        $(".right-black .user_in").fadeOut(100);
    })
    
    /*返回顶部*/
    $(".right-black .toTop").click(function () {
        $("html body").animate({scrollTop:0},300)
    })

    /*左侧导航*/
    $(window).on("scroll",function () {
        var scroll_top = $(window).scrollTop();
        if(scroll_top >= 400){
            $(".left-nav").show()
        }else{
            $(".left-nav").hide()
        }
    })
    $(".left-nav li").click(function (e) {
        e.preventDefault();
        $(this).addClass("cur").siblings().removeClass("cur")
    })
    $(".left-nav li:eq(0)").click(function (e) {
        e.preventDefault();
        setTimeout(function () {
            scrollTo(0,700);
        },300)
    })
    $(".left-nav li:eq(1)").click(function (e) {
        e.preventDefault();
        setTimeout(function () {
            scrollTo(0,1355);
        },300)
    })
    $(".left-nav li:eq(2)").click(function (e) {
        e.preventDefault();
        setTimeout(function () {
            scrollTo(0,1900);
        },300)
    })
    $(".left-nav li:eq(3)").click(function (e) {
        e.preventDefault();
        setTimeout(function () {
            scrollTo(0,4200);
        },300)
    })
    $(".left-nav li:eq(4)").click(function (e) {
        e.preventDefault();
        setTimeout(function () {
            scrollTo(0,5333);
        },300)
    })




















})

