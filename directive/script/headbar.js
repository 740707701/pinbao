define(["app"],function(app){
	app.directive("headbar",[function(){
		return {
			restrict:"E",
			templateUrl:"../directive/html/headbar.html",
			link:function($scope,$element,$attrs){
				//
			}
		}
	}]);
});