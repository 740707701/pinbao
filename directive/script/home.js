define(["app",
		"user"
	],function(app){
	app.directive("home",["userService","$rootScope","$location",function(userService,$rootScope,$location){
		return {
			restrict:"E",
			templateUrl:"../directive/html/home.html",
			link:function($scope,$element,$attrs){
				//默认显示登录框
				$scope.loginBox = true;

				//登录
				$scope.login = function(){
					if(!$scope.username || !$scope.password){return;}
					userService.login($scope.username,$scope.password)
					.success(function(data){
						//console.log("login",data);
						$location.path("/zhaocai");
						$rootScope.isLogin = true;
						$rootScope.username = $scope.username;
					})
					.error(function(err,status,data){
						alert("用户名或密码错误,请重新登录");
					})
					
				};

				//注册
				$scope.register = function(){
					userService.register($scope.email,$scope.password,$scope.name,1)
					.success(function(data){
						//console.log("register",data);
					})
					.error(function(err,status,data){
						if(status=="409"){
							alert("用户名已存在!");
						}
					})
				};

			}
		};

	}]);
});