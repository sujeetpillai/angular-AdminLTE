/**
 * Created by sujeet on 1/28/16.
 */
var app = angular.module('adminlte',['adminlte.controllers','ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{controller:'HomeController',templateUrl:'partials/home.html',title:'Home',icon:'home'}),
    $routeProvider.when('/page',{controller:'PageController',templateUrl:'partials/page.html',title:'Page',icon:'dashboard'}),
        $routeProvider.otherwise({redirectTo:'/'})

}]);