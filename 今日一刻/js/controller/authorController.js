angular.module('app').controller('authorController',['$scope','httpTool','$state',function($scope,httpTool,$state){
    var url='http://localhost/app/author.php';
    httpTool.getData({
        url:url,
        method:'jsonp',
        params:null
    },function(res){
        $scope.datalist = res.authors;

    },function(err){
        console.log(err);
    })

    var url1='http://localhost/app/authorR.php';
    httpTool.getData({
        url:url1,
        method:'jsonp',
        params:null
    },function(res){
        $scope.datalist1 = res.authors;

    },function(err){
        console.log(err);
    })
    $state.go('author.show');

}])
