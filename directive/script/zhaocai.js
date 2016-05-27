define(["app",
		"resume"
	],function(app){
	app.directive("zhaocai",["resumeService",function(resumeService){
		return {
			restrict:"E",
			templateUrl:"../directive/html/zhaocai.html",
			link:function($scope,$element,$attrs){
				//
			}
		};
	}]);
});