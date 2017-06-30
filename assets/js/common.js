var app_main = angular.module("main",["ngRoute"]);
app_main.config(function($routeProvider,$locationProvider,$httpProvider){
	$routeProvider.when("/home",{
		templateUrl:"/home.html",
		controller:"homeController"
	}).otherwise({
		redirectTo: '/home'
	});;
	$httpProvider.defaults.transformRequest=function(obj){
        	var str=[];
       	 	for(var p in obj){
           		str.push(encodeURIComponent(p)+"="+encodeURIComponent(obj[p]));
        	}
        	return str.join("&");
   	};
    	$httpProvider.defaults.headers.post={
        	'Content-Type':'application/x-www-form-urlencoded'
    	};
});
app_main.controller("initController",function($rootScope,$scope,$route,$http){
	console.log("init");
});
