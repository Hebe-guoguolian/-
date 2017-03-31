angular.module('app')
        //首页
        .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider.state('home',{
            url:'/home',
            templateUrl:'../view/home_tpl.html',
            controller:"homeController"
        }).state('home.list',{
            url:'/list',
            template:"<div list-view></div>",
            controller:"homeController"
        }).state('home.detail',{
            url:'/detail/:id',
            templateUrl:'../view/template/homeDetail_tpl.html',
            controller:"homeDetailController"
        });
        $urlRouterProvider.otherwise('home');
    }])


        //作者
        .config(['$stateProvider',function($stateProvider){
        $stateProvider.state('author',{
            url:'/author',
            templateUrl:'../view/author_tpl.html',
            controller:'authorController',
        }).state('author.show',{
            url:'/show',
            template:'<div show-list></div>',
            controller:'authorController',
        }).state('author.detail',{
            url:'/detail',
            templateUrl:'../view/template/authorDetail_tpl.html',
            controller:'authorDetailController',
        }).state('author.detail.artical',{
            url:'/detail.artical',
            template:'<div author-detail></div>',
            controller:'authorDetailController',
        }).state('author.detail.articalDetail',{
            url:'/detail.articalDetail/:id',
            templateUrl:'../view/template/homeDetail_tpl.html',
            controller:'homeDetailController',
        });
    }])
        //栏目
        .config(['$stateProvider',function($stateProvider){
        $stateProvider.state('content',{
            url:'/content',
            templateUrl:'../view/content_tpl.html'
        });
    }])
        //我的
        .config(['$stateProvider',function($stateProvider){
        $stateProvider.state('my',{
            url:'/my',
            templateUrl:'../view/my_tpl.html'
        })
    }])
