define(["app",
		"cookie"
	],function(app,cookie){
	app.service("userService",["$http","md5",function($http,md5){
		var urlPrefix = "http://139.196.36.81:9800";
		var urlDict = {
			login:"/resume/users/login",
			register:"/resume/users/register",
			logout:"/resume/users/logout",
			userId:"/resume/users/{userId}",
			password:"/resume/users/password"
		};
		var methodDict = {
			get:"GET",
			post:"POST",
			put:"PUT",
			delete:"DELETE"
		};

		//注册
		this.register = function(email,password,name,role_type){
			return $http({
				url:urlPrefix+urlDict.register,
				method:methodDict.post,
				data: {
					"email":email,
					"password":password,
					"name":name,
					"role_type":role_type
				}
			});
		};

		//登录
		this.login = function(username,password){
			return $http({
				url:urlPrefix+urlDict.login,
				method:methodDict.post,
				data: {
					"username":username,
					"password":password
				}
			});
		};

		//注销
		this.logout = function(){
			return $http({
				url:urlPrefix+urlDict.logout,
				method:methodDict.post
			});
			cookie.remove("token");
			cookie.remove("username");
			cookie.remove("passeord");
		};

		//获取指定用户信息
		this.userId = function(userId){
			return $http({
				url:urlPrefix+urlDict.userId.replace("{userId}",userId),
				method:methodDict.get
			});
		};

		//修改用户信息
		this.changeUserId = function(){
			return $http({
				url:urlPrefix+urlDict.userId.replace("{userId}",userId),
				method:methodDict.put,
				/*data:{
					"name":name,
					"telphone":telphone
				}*/
			});
		};

		//修改密码
		this.password = function(){
			return $http({
				url:urlPrefix+urlDict.password,
				method:methodDict.put
			});
		};

		//token
		this.token = function(token){
			if(token==undefined){
				return cookie.get("token");
			}else {
				cookie.set("token",token);
			}
		};

		this.get = cookie.get.bind(cookie);
		this.set = cookie.set.bind(cookie);
	}])
});