app_main.controller("homeController",function($rootScope,$scope,$route,$http,$routeParams,$location){
	$scope.home = "";
	$scope.list = "";
	$http.get("/home").success(function(a){
		console.log(a);
		$scope.home = a;
	});
	$http.get("/list").success(function(a){
		console.log(a);
		$scope.list = a;
	});
});
