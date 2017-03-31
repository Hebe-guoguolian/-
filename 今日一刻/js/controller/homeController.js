angular.module('app').controller('homeController',['$scope','httpTool','$state',function($scope,httpTool,$state){
    var url='http://localhost/app/home.php';

    //1.5之前的版本，1.6之前的要有白名单,所以要去配置http_config
/*
    $http({
        url:url,
        method:'jsonp',
        params:null
    }).then(function(res){
        console.log(res.data);
    }).catch(function(err){
        console.log(err);
    })
    以防版本的变化，所以自己封装一个服务，使代码具有扩展性--》httpTool
*/
    $scope.isloading = true;
    httpTool.getData({
        url:url,
        method:'jsonp',
        params:null
    },function(res){
        $scope.datalist = res.posts;
        $scope.isloading = false;
    },function(err){
    });
    $state.go('home.list');
    $scope.isLoading = false;
}])
