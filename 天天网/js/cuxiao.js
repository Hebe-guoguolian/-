$(function(){
    //商品的效果
    $('#con ul li').mouseenter(function(){
        $(this).css({
            transform:'translateY(-10px)',
            transition:'all 0.5s'
        });
        $(this).find('.image').css({
            marginTop:0+'px'
        })
        $(this).find('.press').css({
            marginTop:5+'px'
        });
        $(this).find('button').show();
    });
    $('#con ul li').mouseleave(function(){
        $(this).css({
            transform:'translateY(0px)',
        });
        $(this).find('.image').css({
            marginTop:20+'px'
        })
        $(this).find('.press').css({
            marginTop:15+'px'
        });
       $(this).find('button').hide();
    })
    //定位到一定的程度显示
    var leftTop = $('#con').offset().top;
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=leftTop){
            $('.fixed-left').show();
            $('.fixed-right').show();
        }else{
            $('.fixed-left').hide();
            $('.fixed-right').hide();

        }
    })
    //左边定位的效果，点击close
    $('.fixed-left span').click(function(){
        $('.fixed-left').hide();
    })
    //右边定位的效果
    var offsetTop1 = $('.special-area h2')[0].offsetTop;
    var offsetTop2 = $('.free h2')[0].offsetTop;
    var offsetTop3 = $('.pay h2')[0].offsetTop;

    $('.fixed-right ul li').eq(0).click(function(){
        $('html body').animate({
            scrollTop:offsetTop1+'px'
        },1000)

    })
    $('.fixed-right ul li').eq(1).click(function(){
        $('html body').animate({
            scrollTop:offsetTop2+'px'
        },1000)
    })
    $('.fixed-right ul li').eq(2).click(function(){
        $('html body').animate({
            scrollTop:offsetTop3+'px'
        },1000)
    })
    $('.fixed-right ul li').eq(3).click(function(){
            $('html body').animate({
                scrollTop:0+'px'
            },1000)
    })
})
