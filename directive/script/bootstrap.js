define(["app"],function(app){
	app.directive("bootstrap",[function(){
		return {
			restrict:"E",
			templateUrl:"../directive/html/bootstrap.html",
			link:function($scope,$element,$attrs){
				//
			}
		}
	}])
});