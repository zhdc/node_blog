app_main.controller("initController",function($rootScope,$scope,$route,$http,$location,$timeout){
	$scope.user_name = "";
	$scope.password = "";
	
	$scope.login = function(){
		$http.post("/admin/login/",{
			user_name:$scope.user_name,
			password:$scope.password
		}).success(function(a){
			
		}).error(function(a){
			
		});
	};
});