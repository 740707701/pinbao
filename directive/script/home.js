define(["app"],function(app){
	app.directive("home",[function(){
		return {
			restrict:"E",
			templateUrl:"../directive/html/home.html",
			link:function($scope,$element,$attrs){
				//
			}
		};

	}]);
});