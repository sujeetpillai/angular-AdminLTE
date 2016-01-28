/**
 * Created by sujeet on 1/28/16.
 */
angular.module('adminlte.controllers',[])

.controller('HomeController',['$scope',function($scope){

    }])
.controller('PageController',['$scope',function($scope){

    }])
.controller('NavController',['$scope','$route',function($scope,$route){
        $scope.link_routes = [];
        //console.log($route.routes);
        for(var r in $route.routes){
            var route = $route.routes[r];
            if(!route.redirectTo && r){
                $scope.link_routes.push(route);
            }
        }

        $scope.$on('$routeChangeSuccess',function(event,current,previous){
            //console.log($scope.current);
            $scope.current_route = current;
        })

}])
