define(["app"],function(app){
	app.directive("leftsidebar",["$location",function($location){
		return {
			restrict:"E",
			templateUrl:"../directive/html/leftsidebar.html",
			link:function($scope,$element,$attrs){

				//
				$scope.linkTo = function(path){
					$location.path(path);
				};

				//
				$scope.data = [
					{"url":"/zhaocai",text:"招才宝","icon":"\ue606","showIndex":0},
					{"url":"/jucai",text:"聚才宝","icon":"\ue601","showIndex":1},
					{"url":"/addjob",text:"发布新职位","icon":"\ue608","showIndex":2},
					{"url":"/addsite",text:"添加新渠道","icon":"\ue608","showIndex":3}
				]
			}
		};
	}]);
});