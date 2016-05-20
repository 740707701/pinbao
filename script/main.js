requirejs.config({
	//默认情况下模块所在目录为js/lib
	baseUrl:"/",
	//当模块id前缀为app时,他便由js/app加载模块文件
	//这个对象的paths属性指定各个模块的加载路径。
	path: {
		angular:'bower_components/angular/angular',
		angularRoute:"bower_components/angular-route/angular-route.min",
		angularMd5:"bower_components/angular-md5/angular-md5.min",
		underscore:"bower_components/underscore/underscore",

		route:"script/route",
		app:"script/app",

		//ctrl
		"homeCtrl":"./controller/script/homeCtrl",

		//directive
		"home":"./directive/script/home",

		//service

	},
	//require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，
	//还有一个shim属性，专门用来配置不兼容的模块。
	shim: {
		"angularRoute":["angular"],
		"angularMd5":["angular"]
	}
});
//开始逻辑
requirejs(["jquery","route","app"],function($,route,app){
	route.init();
	$(function(){
		angular.bootstrap(document.body,[app.name]);
	});
});