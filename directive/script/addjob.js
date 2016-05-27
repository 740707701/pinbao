define(["app",
		"resume"
	],function(app){
	app.directive("addjob",["resumeService",function(resumeService){
		return {
			restrict:"E",
			templateUrl:"../directive/html/addjob.html",
			link:function($scope,$element,$attrs){
				//
			}
		};
	}]);
});