define(["app",
		"resume"
	],function(app){
	app.directive("zhaocai",["resumeService","$rootScope",function(resumeService,$rootScope){
		return {
			restrict:"E",
			templateUrl:"../directive/html/zhaocai.html",
			link:function($scope,$element,$attrs){
				//
				$rootScope.isLogin = true;
			}
		};
	}]);
});