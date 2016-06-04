define(["app"],function(app){
	app.directive("demo",[function(){
		return {
			restrict:"E",
			templateUrl:"../directive/html/demo.html",
			link:function($scope,$element,$attrs){
				//

				 // Bootstrap Datepicker
			    $scope.form7 = {
			      dt: new Date(),
			      open: function($event) {
			        $scope.form7.status.opened = true;
			      },
			      dateOptions: {
			        formatYear: 'yy',
			        startingDay: 1
			      },
			      status: {
			        opened: false
			      }
			    };

			    $scope.form8 = {
				    country: {},
				    countries: [ // Taken from https://gist.github.com/unceus/6501985
				        {
				          name: 'Åland Islands',
				          code: 'AX'
				        }, {
				          name: 'Albania',
				          code: 'AL'
				        }, {
				          name: 'Algeria',
				          code: 'DZ'
				        },
				    ],
				    disable: function() {
				        $scope.form8.disabled = true;
				    },
				    enable: function() {
				        $scope.form8.disabled = false;
				    },
				    clear: function() {
				        $scope.form8.country.selected = undefined;
				    }
				};

				$scope.success = function(message) {
			      alert('Success ' + message);
			    };

			    $scope.error = function(message) {
			      alert('Error ' + message);
			    };
			}
		}
	}]);
});