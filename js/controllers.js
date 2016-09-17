/**
 * Created by sujeet on 1/28/16.
 */
angular.module('adminlte.controllers',['adminlte.directives'])
.controller('DashboardController',['$scope','$route','notify','siteinfo',function($scope,$route,notify,siteinfo){
        // Access to global site information
        $scope.siteinfo = siteinfo;


        // Datetime
        $scope.now = new Date();

        // Routes for Menu Items
        $scope.link_routes = [];
        for(var r in $route.routes){
            var route = $route.routes[r];
            if(!route.redirectTo && r){
                $scope.link_routes.push(route);
            }
        }
        $scope.$on('$routeChangeSuccess',function(event,current,previous){
            $scope.current_route = current;
            $scope.previous_route = previous;
        });

        // Notifications
        $scope.$watch(function(){return notify.get_notifications()},function(notifications){
            $scope.notifications = notifications;
        });
        $scope.clear_notification = function(index,event){
            notify.flush_notification(index);
            event.stopPropagation();
        };

        // User Information
        $scope.current_user = {
            name: 'John Doe',
            image: 'dist/img/user2-160x160.jpg',
            title: 'Analyst'
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