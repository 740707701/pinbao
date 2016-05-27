define(["app",
		"resume"
	],function(app){
	app.directive("addsite",["resumeService",function(resumeService){
		return {
			restrict:"E",
			templateUrl:"../directive/html/addsite.html",
			link:function($scope,$element,$attrs){
				//
			}
		};
	}]);
});