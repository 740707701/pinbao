define(["app",
		"confirmlogin",
		"resume"
	],function(app){
	app.directive("zhaocai",["resumeService","$rootScope",function(resumeService,$rootScope){
		return {
			restrict:"E",
			templateUrl:"../directive/html/zhaocai.html",
			link:function($scope,$element,$attrs){
				$scope.typeIndex = 0;

				//获取招聘职位信息
				$scope.getJobs = function(){
					//status=1,正在招聘的职位
					//status=0,历史职位
					resumeService.jobs(1)
					.success(function(data){
						$scope.jobData = data;
						console.log("getJobs",data);
					})
				};
				$scope.getJobs();

				//获取职位详细信息
				$scope.jobDetail = function(jobId){
					resumeService.jobDetail(jobId)
					.success(function(data){
						$scope.jobDetailData = data;
						console.log("jobDetail",data);
					})
				};

				//获取简历类型
				$scope.getType = function(){
					resumeService.types()
					.success(function(data){
						$scope.typeData = data;
						console.log("getType",data);
					})
				};
				$scope.getType();

				//获取分类简历
				/*
					job=1                           #按职位分组
					type=1                          #按自荐、意向、推荐、搜索过滤
					keyword=web                     #按关键字搜索
					status=1                        #按状态分组：待沟通、待面试等
					tag=php&tag=good&tag=beauty     #传多个即选中多个tag 过滤

					分页参数：
					start=0
					limit=10

					eg: /resume/collects?status=1&keyword=web&type=1&start=0&limit=10
				*/
				$scope.getCollects = function(type){
					resumeService.collects(1,2,$scope.keyword,1)
					.success(function(data){
						console.log("getCollects",data);
					})
				};


/***************************************************************************/
				//测试API

				/*$scope.getCollects = function(){
					resumeService.collects(1,2,$scope.keyword,1)
					.success(function(data){
						console.log("getCollects",data);
					})
				};
				$scope.getCollects();*/

				$scope.addJobs = function(){
					resumeService.addJobs("qq","大专","3年","男")
					.success(function(data){
						console.log("addJobs",data);
					})
				};
				//$scope.addJobs();

				$scope.editJob = function(){
					resumeService.editJob(113,"qq","本科","2年","女")
					.success(function(data){
						console.log("editJob",data);
					})
				};
				//$scope.editJob();

				/*$scope.jobDetail = function(){
					resumeService.jobDetail(113)
					.success(function(data){
						console.log("jobDetail",data);
					})
				};
				$scope.jobDetail();*/

				$scope.getStatus = function(){
					resumeService.status()
					.success(function(data){
						console.log("getStatus",data);
					})
				};
				$scope.getStatus();

				/*$scope.getType = function(){
					resumeService.types()
					.success(function(data){
						console.log("getType",data);
					})
				};
				$scope.getType();
				*/
				$scope.getSites = function(){
					resumeService.sites()
					.success(function(data){
						console.log("getSites",data);
					})
				};
				$scope.getSites();

				$scope.addSites = function(){
					resumeService.addSites("cc","cc","cc")
					.success(function(data){
						console.log("addSites",data);
					})
				};
				//$scope.addSites();
			}
		};
	}]);
});