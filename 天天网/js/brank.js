$(function(){

    //brank 的构造函数
    function Brank (option){
        this._init(option);
    }
    Brank.prototype ={
        constructor:Brank,
        _init:function(option){
            option = option ||{};
            this.width= 720;
            this.height = 210;
            this.background = option.background;
            this.border = '1px solid #ccc';
            this.marginTop = 20;
            this.marginRight = 20;
            this.spanHtml = option.spanHtml;
        },
        render:function(){
            div = $('<div class="brank"></div>');
            $('#con').append( div);
            div.css({
                width:this.width+'px',
                height:this.height +'px',
                background:'url("../images_brank 2/'+ this.background+'.jpg")',
                border:this.border,
                marginTop:this.marginTop+'px',
                marginRight:this.marginRight+'px',
            });
            h4 = $('<h4> <span class="s1">剩余 6天13时<i></i>分<b></b>秒</span><span class="s2">'+this.spanHtml+'</span></h4>');
            div.append(h4);
            h4.css({
                width:720+'px',
                height:30+'px',
                background:'rgba(0,0,0,0.5)',
                marginTop:180+'px',
                lineHeight:30+'px',
                paddingLeft:50+'px',
            });
            $('span').css({
                fontWeight:'normal',
                color:'#fff',
                fontSize:'14px',
            });
            $('.s1').css({
                paddingLeft:'18px',
                background:'url("../images_brank 2/pp_tm.png") no-repeat -74px -55px'
            })
            $('.s2').css({
                marginLeft:'300px'
            });

        },
    }
    var obj = {
        '雅诗兰黛':'-00-ysld-03',
        '资生堂':'-00-zst-01',
        '姬芮':'-00-za-096',
        '雅漾':'-00-yy-061',
        '悦诗风吟':'-00-yshfy-091',
        '伊思':'-00-ys-781',
        '相宜本草':'-00-xybc-096',
        '雪精肌':'-00-xjj-1',
        'SKINFOOD':'-00-sk-074',
        '欧珀莱':'-00-opl-012',
        'OLAY':'-00-oly-08',
        '欧莱雅':'-00-oly-04',
        '妮维雅':'-00-nwy-011',
        '兰芝':'-00-lz-1',
        '蜜丝佛陀':'-00-msft-012',
        '兰蔻':'-00-lk-074',
        '理肤泉':'-00-lfq-011',
        '卡姿兰':'-00-kzl-026',
        '可莱丝':'-00-kls-1',
        '韩束':'-00-hs-03',
        '菲斯小铺':'-00-fsxp-012',
        '丹姿':'-00-dz-091',
        '百雀羚':'-00-bql-015',
        '佰草集':'-00-bcj-021',
        '澳洲2N':'-00-azh-011',
        '阿迪达斯':'-00-adds-096',
        '曼秀雷敦':'-00-mxld-082',
    };

for (var key in obj){
    var box = new Brank({
        background:obj[key],
        spanHtml:key
    })
    box.render();
}
   $('#con .brank').hover(function(){
        $(this).find('h4').css({
            background:'rgba(245,25,113,0.5)'
        });
        $(this).css('border','1px solid #EC3461');
    },function(){
       $(this).find('h4').css({
            background:'rgba(0,0,0,0.5)'
        });
       $(this).css('border','1px solid #ccc');

    })

    var sec = 60;
    $('#con .brank .s1 b').text(sec);
    $('#con .brank .s1 b').css({
        color:'#fff',
        fontWeight:'normal'
    })
    setInterval(function(){
        sec--;
        if(sec<0){
            sec=59;
        }
        if(sec<10){
            sec = '0'+sec;
        }
        $('#con .brank .s1 b').text(sec);
    },1000)

    var min = 59;
    $('#con .brank .s1 i').text(min);
    $('#con .brank .s1 i').css({
        color:'#fff',
        fontStyle:'normal'
    })

    setInterval(function(){
        min--;
        if(min<0){
            min=59;
        }
        if(min<10){
            min = '0'+min;
        }
        $('#con .brank .s1 i').text(min);
    },60000)
})
