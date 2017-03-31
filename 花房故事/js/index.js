/**
 * Created by Administrator on 2017/2/3.
 */

$(function(){
    //header
    $('#header ul li').mouseover(function(){
        $(this).children().css({
            color:'#90c31f'
        });
        $(this).siblings().children().css({
                color:'#2b2b2b'
        }
        )
    })
    $('#header ul li:eq(1)').mouseenter(function(){
        $(this).find('.second').fadeIn(10);
    });
    $('#header ul li:eq(1)').mouseleave(function(){
        $(this).find('.second').fadeOut(10);
    });
    //固定栏中的li
    $('.fixed ul li:not(:eq(1))').mouseenter(function(){
        $(this).children().animate({
            left:0,
        },500);

    })
    $('.fixed ul li:not(:eq(1))').mouseleave(function(){
        $(this).children().animate({
            left:-124,
        },500)
    })
    $('.fixed ul li:eq(1)').mouseenter(function () {
        $(this).children().css({
            width:135,
            height:290,
            left:58,
            opacity:1
        }).fadeIn(10);
    });
    $('.fixed ul li:eq(1)').mouseleave(function () {
        $(this).children().animate({
            height:0,
            width:0,
            left:193,
            opacity:0.2
        },500);
    });
    //返回顶部
    $('.fixed ul li:last').find('img').click(function(){
        $('html body').scrollTop(0);
    })

    //焦点图
    $('.banner ul li').click(function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        var index = $(this).index();
        $('.banner div img').eq(index).css({
        }).fadeIn(1000).siblings().hide();
    })
    //自动播放
    var index = 0;
    var timer = setInterval(autoPlay,2000);
    $('.banner').mouseenter(function(){
        clearInterval(timer);
    })
    $('.banner').mouseleave(function(){
        timer = setInterval(autoPlay,2000);
    });
    function autoPlay(){
        $('.banner div img').eq(index).css({
        }).fadeIn(100).siblings().hide();
        $('.banner ul li').eq(index).addClass('cur').siblings().removeClass('cur');
        index++;
        if(index>=4){
            index=0;
        }

    }
})
