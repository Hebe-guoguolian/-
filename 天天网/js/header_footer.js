$(function(){
  //header-ad的hover效果
    $('.header-ad ul a li').hover(function(){
      $(this).css('background-position-y','-50px')
    },function(){
        $(this).css('background-position-y','0px')
    })
  //header-infor的hover效果
    $('.infor-in-right .first li:gt(2)').hover(function(){
        $(this).find('i').html(' ');
        $(this).find('i').html('<i class="iconfont">&#xe61b;</i>').css({
            position: 'relative',
            top:-2
        });
        $(this).css({
            background:'white',
            border:'1px solid #ccc',
            'box-sizing':'border-box'
        });
        $(this).find('ul').slideDown();
    },function(){
        $(this).find('i').html(' ');
        $(this).find('i').html('<i class="iconfont">&#xe66f;</i>')
        $(this).css({
            background:'none',
            border:'none'
        });
        $(this).find('ul').stop().slideUp();
    });
    $('.infor-in-right .first li:gt(2) li').hover(function(){
        $(this).css({
            border:'none'
        })
    })
    //input获取焦点的时候，字消失
    $('.des-search input').focus(function(){
       $(this).prop('placeholder',' ');
    })
    $('.des-search input').blur(function(){
       $(this).prop('placeholder','301盛典来了');
    })
    //购物车的hover事件
    $('.des-search .gou').hover(function(){
        $(this).css({
            background:'#666',
            color:'#fff',
        });
        $(this).find('.arrow').html(' ');
        $(this).find('.arrow').html('<i class="iconfont arrow">&#xe61b;</i>').css({
            position: 'relative',
            top:-2
        });
    },function(){
        $(this).css({
            background:'none',
            color:'#666',
        });
        $(this).find('.arrow').html(' ');
        $(this).find('.arrow').html('<i class="iconfont arrow">&#xe61b;</i>').css({
            position: 'relative',
            top:-2
        });
    })
    //导航事件
    $('.mian-list li:not(:eq(3))').hover(function(){
        $(this).find('a').css('color','#EC3461');
        $(this).find('span').animate({
            width:'100%',
            left:0,
        },500)
    },function(){
        $(this).find('a').css('color','#000');
        $(this).find('span').animate({
            width:'0',
            left:'50%'
        },0)
    });
    $('.mian-list li').eq(2).hover(function(){
       $(this).find('.des').slideDown(100);
        $(this).find('.des').find('a').css('color','#2b2b2b');
    },function(){
        $(this).find('.des').slideUp(0);
    })






























})
