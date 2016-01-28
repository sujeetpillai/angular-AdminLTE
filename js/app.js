/**
 * Created by sujeet on 1/28/16.
 */
var app = angular.module('adminlte',['adminlte.controllers','ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{controller:'HomeController',templateUrl:'partials/home.html',title:'Home',icon:'home'}),
    $routeProvider.when('/page',{controller:'SecondPageController',templateUrl:'partials/page.html',title:'Page',icon:'dashboard'}),
        $routeProvider.otherwise({redirectTo:'/'})

}]);

app.factory('notify',[function(){
    var notifications = [];
    function notify(notification,category){
        notifications.push({notification:notification,category:category});
    }
    notify.get_notifications = function(){
        return notifications;
    };
    notify.get_and_flush_all_notifications = function(){
        return notifications.splice(0,notifications.length);
    }
    notify.flush_notification = function(index){
        return notifications.splice(index,1);
    }

    return notify;
}])