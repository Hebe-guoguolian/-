angular.module('app').directive('detail',function(){
    return {
        restrict: 'A',
        replace: false,
        link: function ($childScope, $jQlite, $attributes) {
            // console.log($attributes.detail);
            // console.log($jQlite);
            $jQlite.html($attributes.detail)

        }
    }
})
