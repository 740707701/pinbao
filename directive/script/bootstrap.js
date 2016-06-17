define(["app"],function(app){
	app.directive("bootstrap",[function($uibModal){
		return {
			restrict:"E",
			templateUrl:"../directive/html/bootstrap.html",
			link:function($scope,$element,$attrs){
				//
				$scope.items = [
					"this is number one",
					"this is number two",
					"this is number three"
				];

				$scope.toggled = function(open){
					console.log("Dropdown is now:",open)
				};

				$scope.status = {
					isopen :false
				};

				$scope.toggleDropdown = function($event){
					$event.preventDefault();
					$event.stopPropagation();
					$scope.status.isopen = !$scope.status.isopen;
				};

				$scope.appendToEl = angular.element(document.querySelector("#dropdown-long-content"));
				
				// datepicker
				$scope.today = function(){
					$scope.dt = new Date();
				};
				$scope.today();

				$scope.clear = function(){
					$scope.dt = null;
				};

				$scope.options = {
					customClass:getDayClass,
					minDate:new Date(),
					showWeeks:true
				};

				function disabled(data){
					var date = data.date;
					var mode = data.mode;
					return mode === 'day' &&(date.getDay() === 0|| date.getDay() ===6)
				};
				$scope.toggleMin = function() {
				    $scope.options.minDate = $scope.options.minDate ? null : new Date();
				};

  				$scope.toggleMin();

				$scope.open1 = function() {
				    $scope.popup1.opened = true;
				};

				$scope.open2 = function() {
				    $scope.popup2.opened = true;
				};

				$scope.setDate = function(year, month, day) {
				    $scope.dt = new Date(year, month, day);
				};

				$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
				$scope.format = $scope.formats[0];
				$scope.altInputFormats = ['M!/d!/yyyy'];

				$scope.popup1 = {
				    opened: false
				};

				$scope.popup2 = {
				    opened: false
				};

				var tomorrow = new Date();
				tomorrow.setDate(tomorrow.getDate() + 1);
				var afterTomorrow = new Date();
				afterTomorrow.setDate(tomorrow.getDate() + 1);
				$scope.events = [
				    {
				      date: tomorrow,
				      status: 'full'
				    },
				    {
				      date: afterTomorrow,
				      status: 'partially'
				    }
				];

				function getDayClass(data) {
				    var date = data.date,
				      mode = data.mode;
				    if (mode === 'day') {
				      var dayToCheck = new Date(date).setHours(0,0,0,0);

				      for (var i = 0; i < $scope.events.length; i++) {
				        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

				        if (dayToCheck === currentDay) {
				          return $scope.events[i].status;
				        }
				      }
				    }

				    return '';
				};
				//pager
				/*$scope.totalItems = 64;
				$scope.currentPage = 4;
				$scope.setPage = function(pageNo){
					$scope.currentPage = pageNo;
				};*/

				/*$scope.pageChanged = function(){
					console.log("Page channge to:"+$scope.currentPage);
				};*/

				$scope.maxSize = 5;
				$scope.bigTotalItems = 105;
				$scope.bigCurrentPage = 1;

				//tabs
				 $scope.tabs = [
				    { title:'Dynamic Title 1', content:'Dynamic content 1' },
				    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
				  ];

				  $scope.alertMe = function() {
				    setTimeout(function() {
				      $window.alert('You\'ve selected the alert tab!');
				    });
				  };

				  $scope.model = {
				    name: 'Tabs'
				  };

				  //Collapsed
				  $scope.isCollapsed = false;
				  

				  //progressbar
				  $scope.max = 200;
				  $scope.random = function(){
				  	var value = Math.floor(Math.random()*100+1);
				  	var type;
				  	if(value<25){
				  		type = "success";
				  	}else if(value<50){
				  		type = "info";
				  	}else if(value<75){
				  		type = "warning";
				  	}else{
				  		type = "danger"
				  	};
				  	$scope.showWarning = type == "danger" || type ==="warning";
				  	$scope.dynamic = value;
				  	$scope.type = type;
				  };
				  $scope.random();

				  //alert
				  $scope.alerts = [
				  	{type:"danger",msg:"numberone alert "},
				  	{type:"success",msg:"sucess alert "}
				  ];

				  $scope.addAlert = function(){
				  	$scope.alerts.push({msg:"Another alert!"});
				  };

				  $scope.closeAlert = function(index){
				  	$scope.alerts.splice(index,1);
				  };

				  //Modal

				  /*$scope.ModalItems = ['item1', 'item2', 'item3'];
				  $scope.animationsEnabled = true;

				  $scope.open = function (size) {

				    var modalInstance = $uibModal.open({
				      animation: $scope.animationsEnabled,
				      templateUrl: 'myModalContent.html',
				      controller: 'ModalInstanceCtrl',
				      size: size,
				      resolve: {
				        items: function () {
				          return $scope.items;
				        }
				      }
				    });

				    modalInstance.result.then(function (selectedItem) {
				      $scope.selected = selectedItem;
				    }, function () {
				      $log.info('Modal dismissed at: ' + new Date());
				    });
				  };

				  $scope.toggleAnimation = function () {
				    $scope.animationsEnabled = !$scope.animationsEnabled;
				  };

				  $scope.items = $scope.ModalItems;
				  $scope.selected = {
				    item: $scope.items[0]
				  };

				  $scope.ok = function () {
				    $uibModalInstance.close($scope.selected.item);
				  };

				  $scope.cancel = function () {
				    $uibModalInstance.dismiss('cancel');
				  };*/


				  //Accordion 
				  $scope.oneAtATime = true;
				  $scope.groups = [
				  	{
				  		title:"this is num two title",
				  		content:"this is num two content"
				  	},
				  	{
				  		title:"num three title",
				  		content:"num three content"
				  	}
				  ];

				  $scope.status = {
				  	isCustomHeaderOpen : false,
				  	isFirstOpen : true,
				  	isFirstDisabled : false
				  };


			}
		}
	}])
});