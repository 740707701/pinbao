define(["app"],function(app){
	app.directive("headbar",["$rootScope","$location","userService",function($rootScope,$location,userService){
		return {
			restrict:"E",
			templateUrl:"../directive/html/headbar.html",
			link:function($scope,$element,$attrs){
				//
				$scope.linkTo = function(path){
					$location.path(path);
				};

				//退出
				$scope.logout = function(){
					var token = userService.get("token");
					userService.logout(token)
					.success(function(data){
						$location.path("/home");
					})
				};
			}
		}
	}]);
});