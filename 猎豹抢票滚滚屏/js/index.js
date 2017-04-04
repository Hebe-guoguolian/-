$(function(){
    //监听li 的点击事件
    var index=0;
    $('.gps li').click(function () {
        $(this).addClass('cur').siblings().removeClass('cur');
       index = $(this).index();
        $('section').eq(index).show().siblings('section').hide();
        setTimeout(function(){
            $('section').eq(index).removeClass('current').siblings('section').addClass('current');
        },50)

    });
    //监听滚轮滑动事件
    var timer=null;
    $(window).mousewheel(function (e,d) {
        clearTimeout(timer);
        timer=setTimeout(function () {
            index-=d;
            if(index>3){
                index=3;
            }else if(index<0){
                index=0;
            }
            $('.gps li').eq(index).addClass('cur').siblings().removeClass('cur');
            $('section').eq(index).show().siblings('section').hide();
            setTimeout(function(){
                $('section').eq(index).removeClass('current').siblings('section').addClass('current');
            },50)

        },1000)
    });























})
