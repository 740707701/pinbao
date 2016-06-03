define(["app"],function(app){
	app.directive("demo",[function(){
		return {
			restrict:"E",
			templateUrl:"../directive/html/demo.html",
			link:function($scope,$element,$attrs){
				//
			}
		}
	}]);
});