define(["app",
		"confirmlogin",
		"resume"
	],function(app){
	app.directive("addsite",["resumeService","$rootScope",function(resumeService,$rootScope){
		return {
			restrict:"E",
			templateUrl:"../directive/html/addsite.html",
			link:function($scope,$element,$attrs){
				//
				$rootScope.isLogin = true;
			}
		};
	}]);
});