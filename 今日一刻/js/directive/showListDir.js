angular.module('app').directive('showList',function(){
    return{
        restrict:'A',
        templateUrl:'../view/template/showList_tpl.html',
        // template:'<h1>kdfjslfhaklj</h1>',
        replace:true
    }
})
/*
angular.module('app').directive('listView',function(){
    return {
        restrict:'A',
        templateUrl:'../view/template/listview_tpl.html',
        replace:true,
    }
})
*/
