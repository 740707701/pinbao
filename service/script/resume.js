define(["app",
		"user",
		"cookie"
	],function(app,cookie){
	app.service("resumeService",["$http","userService",function($http,userService){
		var urlPrefix = "http://139.196.36.81:9800";
		var urlDict = {
			//collects
			status:"/resume/collects/status",
			types:"/resume/collects/types", 
			collects:"/resume/collects", 
			tags:"/resume/collects/tags", 
			collectId:"/resume/collects/{collect_id}", 
			addTags:"resume/collects/{collect_id}/tags", 
			deleteTags:"resume/collects/{collect_id}/tags",

			//jobs
			jobs:"/resume/jobs",
			jobId:"/resume/jobs/{job_id}",

			//sites
			sites:"/resume/sites",
			sitesId:"/resume/sites/{sites_id}"
		};

		var methodDict = {
			post:"POST",
			get:"GET",
			put:"PUT",
			delete:"DELETE"
		};

		//查看简历的状态与数量
		this.status = function(){
			return $http({
				url:urlPrefix+urlDict.status,
				method:methodDict.get,
				params:{
					"token":userService.token()
				}
			});
		};
		/*
			job=1
			不传job，获取全部职位的统计；传job 获取特定职位的统计
		*/
		//查看简历的类型与数量
		this.types = function(jobId){
			return $http({
				url:urlPrefix+urlDict.types,
				method:methodDict.get,
				params:{
					"token":userService.token(),
					"job":jobId
				}
			});
		};
		/*
			job=1                           #按职位分组
			type=1                          #按自荐、意向、推荐、搜索过滤
			keyword=web                     #按关键字搜索
			status=1 (不传)                       #按状态分组：待沟通、待面试等
			tag=php&tag=good&tag=beauty (不传)    #传多个即选中多个tag 过滤

			分页参数：
			start=0
			limit=10

			eg: /resume/collects?status=1&keyword=web&type=1&start=0&limit=10
		*/

		//获取人才库列表
		this.collects = function(job,type,keyword,start,limit){
			var params = {
				"token":userService.token(),
				"job":job,
				"type":type,
				"keyword":keyword,
				"start":start,
				"limit":limit
			};
			return $http({
				url:urlPrefix+urlDict.collects,
				method:methodDict.get,
				params:params
			})
		};
		//获取标签列表
		this.tags = function(){
			return $http({
				url:urlPrefix+urlDict.tags,
				method:method.get,
			})
		};
		//修改人才状态
		this.collectId = function(collectId){
			return $http({
				url:urlPrefix+urlDict.collectId.replace("{collect_id}",collectId)+"?token="+userService.token(),
				method:methodDict.put,
				data: {
					//"token":userService.token()
				}
			})
		};
		//添加备注
		this.addNote = function(note){
			return $http({
				url:urlPrefix+urlDict.collectId.replace("{collect_id}",collectId),
				method:methodDict.put,
				params: {
					"token":userService.token(),
					"note":note
				}
			});
		};
		/*
			["good", "python"]

			传多个即同时添加多个tag
		*/
		//向一个简历添加一个或多个tag
		this.addTags = function(tags){
			return $http({
				url:urlPrefix+urlDict.addTags.replace("{collect_id}",collectId)+"?token="+userService.token(),
				method:methodDict.post,
				data: {
					//"token":userService.token()
				}
			})
		};
		/*
			tag=php
			eg: tag=php&tag=good&tag=beauty
			传多个即删除多个tag
		*/
		//向一个简历删除一个或多个tag
		this.deleteTags = function(tag){
			return $http({
				url:urlPrefix+urlDict.deleteTags.replace("{collect_id}",collectId)+"?token="+userService.token(),
				method:methodDict.delete,
				data: {
					//"token":userService.token()
				}
			})
		};

		//jobs
		//查看正在招聘的职位
		// status=1, 正在招聘的职位,
		//status=0,历史职位
		this.jobs = function(status){
			return $http({
				url:urlPrefix+urlDict.jobs,
				method:methodDict.get,
				params: {
					"token":userService.token(),
					"status":status
				}
			})
		};

		//发布新职位 //报错Missing argument token
		this.addJobs = function(desc,education,experience,gender,job_title,location,salary,status){
			return $http({
				url:urlPrefix+urlDict.jobs+"?token="+userService.token(),
				method:methodDict.post,
				data: {
					"desc":desc,
					"education":education,
					"experience":experience,
					"gender":gender,
					"job_title":job_title,
					"location":location,
					"salary":salary,
					"status":status
					//"token":userService.token()
				}
			})
		};

		//获取职位详情
		this.jobDetail = function(jobId){
			return $http({
				url:urlPrefix+urlDict.jobId.replace("{job_id}",jobId),
				method:methodDict.get,
				params:{
					"token":userService.token(),
				}
			})
		};

		//修改职位 //报错Missing argument token
		this.editJob = function(jobId,desc,education,experience,gender,job_title,location,salary){
			return $http({
				url:urlPrefix+urlDict.jobId.replace("{job_id}",jobId)+"?token="+userService.token(),
				method:methodDict.put,
				data: {
					"desc":desc,
					"education":education,
					"experience":experience,
					"gender":gender,
					"job_title":job_title,
					"location":location,
					"salary":salary
					//"token":userService.token()
				}
			})
		};

		//删除职位
		this.deleteJob = function(jobId){
			return $http({
				url:urlPrefix+urlDict.jobId.replace("{job_id}",jobId),
				method:methodDict.delete,
				data: {
					"token":userService.token()
				}
			})
		};

		//sites 
		//查看网站状态
		this.sites = function(){
			return $http({
				url:urlPrefix+urlDict.sites,
				method:methodDict.get,
				params:{
					"token":userService.token()
				}
			});
		};

		//绑定第三方网站
		this.addSites = function(username,password,rand){
			return $http({
				url:urlPrefix+urlDict.sites+"?token="+userService.token(),
				method:methodDict.post,
				data: {
					"username":username,
					"password":password,
					"rand":rand,
					//"token":userService.token()
				}
			});
		};

		//取消绑定网站
		this.deleteSites = function(){
			return $http({
				url:urlPrefix+urlDict.sites+"?token="+userService.token(),
				method:methodDict.delete,
				data: {
					//"token":userService.token()
				}
			});
		};
	}]);
});