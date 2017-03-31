angular.module('app').directive('nav',function(){
    return {
        restrict:'A',
        templateUrl:'../view/template/nav_tpl.html',
        replace:true,
        link:function($childScope,$jQlite,$attributes){
            //设置$JQuery当中的span ,设置内容
           $jQlite.find('span').html($attributes.nav);
           //
            if($attributes.ishidden=='true'){
                $jQlite.find('b').css({'display':'none'});
            }
        }
    }
})
