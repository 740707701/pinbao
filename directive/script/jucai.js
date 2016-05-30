define(["app",
		"confirmlogin",
		"resume"
	],function(app){
	app.directive("jucai",["resumeService",function(resumeService){
		return {
			restrict:"E",
			templateUrl:"../directive/html/jucai.html",
			link:function($scope,$element,$attrs){
				//
			}
		};
	}]);
});