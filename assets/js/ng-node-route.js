app_main.controller("nodeRouteController",function($rootScope,$scope,$route,$http,$location,$timeout){
	$http.get("/list").success(function(a){
		console.log(a);
	}).error(function(a){
		
	});
	
	$http.post("/save",{
		username:"post 朱德超"
	}).success(function(a){
		console.log(a);
	});
});