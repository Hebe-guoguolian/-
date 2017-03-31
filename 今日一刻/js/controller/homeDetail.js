angular.module('app').controller('homeDetailController',['$scope','$stateParams',function($scope,$stateParams){

    $scope.back = function(){
        window.history.back();
    }
    $scope.dataItem = $scope.datalist[$stateParams.id];
    // console.log($stateParams.id);
    // console.log($scope.dataItem);
    // console.log($scope.datalist[$stateParams.id].content);
}])
