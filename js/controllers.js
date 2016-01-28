/**
 * Created by sujeet on 1/28/16.
 */
angular.module('adminlte.controllers',[])
.controller('PageController',['$scope','$route','notify',function($scope,$route,notify){
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

        $scope.$watch(function(){return notify.get_notifications()},function(notifications){
            $scope.notifications = notifications;
        })
        $scope.clear_notification = function(index,event){
            notify.flush_notification(index);
            event.stopPropagation();
        }

}])
    .controller('HomeController',['$scope','notify','$interval',function($scope,notify,$interval){
        $scope.add_notification = function(msg){
            notify(msg,'info');
        }
        function add_random_not(){
            notify(Math.random(),'info');
        }
        $interval(add_random_not,10000);

    }])
    .controller('SecondPageController',['$scope',function($scope){

    }])