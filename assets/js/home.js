app_main.controller("homeController",function($rootScope,$scope,$route,$http,$routeParams,$location){
	$http.get("/home").success(function(a){
		console.log(a);
	});
	$http.get("/home/list").success(function(a){
		console.log(a);
	});
});
