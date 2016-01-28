/**
 * Created by sujeet on 1/28/16.
 */
var app = angular.module('adminlte',['adminlte.controllers','adminlte.filters','ngRoute','ngAnimate']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{controller:'HomeController',templateUrl:'partials/home.html',title:'Home',icon:'home'}),
    $routeProvider.when('/page',{controller:'SecondPageController',templateUrl:'partials/page.html',title:'Page',icon:'dashboard'}),
        $routeProvider.otherwise({redirectTo:'/'})

}]);

app.factory('notify',[function(){
    var notifications = [];
    function notify(notification,category){
        var lookup_class = {'info':'bg-info','warning':'bg-warning','danger':'bg-danger','success':'bg-success'};
        notifications.push({notification:notification,category:category,class:lookup_class[category]});
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