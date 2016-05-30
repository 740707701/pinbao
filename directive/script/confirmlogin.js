define(["app",
		"user"
	],function(app){
	app.directive("confirmlogin",["$rootScope","userService",function($rootScope,userService){
		return {
			restrict:"A",
			link:function($socpe,$element,$attrs){
				$rootScope.isLogin = true;
				$scope.username = userService.get("username");
				$rootScope.username = $scope.username;
			}
		}
	}])
})