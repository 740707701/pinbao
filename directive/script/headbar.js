define(["app"],function(app){
	app.directive("headbar",["$rootScope","$location",function($rootScope,$location){
		return {
			restrict:"E",
			templateUrl:"../directive/html/headbar.html",
			link:function($scope,$element,$attrs){
				//
				$scope.linkTo = function(path){
					$location.path(path);
				};
			}
		}
	}]);
});