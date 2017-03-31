angular.module('app').controller('authorDetailController',['$scope','httpTool','$state',function($scope,httpTool,$state){
    var url = 'http://localhost/app/authorDetail.php';
    $scope.isloading = true;
    httpTool.getData({
       url:url,
       method:'jsonp',
       params:null
    },function(res){
        $scope.detail = res.author;
        $scope.datalist = res.posts;
        $scope.isloading = false;
    },function(err){
        console.log(err);
        $scope.isloading = false;
    })
    $scope.back = function(){
        window.history.back();
    };
    $state.go('author.detail.artical');

}])
