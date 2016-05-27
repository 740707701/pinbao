define(["app"],function(app){
	app.directive("leftsidebar",[function(){
		return {
			restrict:"E",
			templateUrl:"../directive/html/leftsidebar.html",
			link:function($scope,$element,$attrs){
				//
			}
		};
	}]);
});