define(["app"],function(app){
	app.directive("pager",[function(){
		return {
			restrict:"E",
			templateUrl:"../directive/html/pager.html",
			link:function($scope,$element,$attrs){
				//
				$scope.prevPage = function(){
					$scope.$emit("prevPage");
				};

				$scope.nextPage = function(){
					$scope.$emit("nextPage");
				};
			}
		}
	}])
})