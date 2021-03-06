requirejs.config({
	//默认情况下模块所在目录为js/lib
	baseUrl:"/",
	//当模块id前缀为app时,他便由js/app加载模块文件
	//这个对象的paths属性指定各个模块的加载路径。
	paths: {
		angular:'bower_components/angular/angular',
		angularRoute:"bower_components/angular-route/angular-route.min",
		angularSanitize:"bower_components/angular-sanitize/angular-sanitize.min",
		angularMd5:"bower_components/angular-md5/angular-md5.min",
		underscore:"bower_components/underscore/underscore",
		angularValidation:"bower_components/angular-validation/dist/angular-validation",
		angularValidationRule:"bower_components/angular-validation/dist/angular-validation-rule",
		angularBootstrap:"bower_components/angular-bootstrap/ui-bootstrap",
		angularBootstrapTpls:"bower_components/angular-bootstrap/ui-bootstrap-tpls",
		angualrUiSelect:"bower_components/angular-ui-select/dist/select",
		bootstrap:"bower_components/bootstrap/dist/js/bootstrap",
		angularColorpicker:"bower_components/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module",

		app:"script/app",
		route:"script/route",

		//ctrl
		"homeCtrl":"./controller/script/homeCtrl",
		"jucaiCtrl":"./controller/script/jucaiCtrl",
		"zhaocaiCtrl":"./controller/script/zhaocaiCtrl",
		"addjobCtrl":"./controller/script/addjobCtrl",
		"addsiteCtrl":"./controller/script/addsiteCtrl",
		"demoCtrl":"./controller/script/demoCtrl",
		"bootstrapCtrl":"/controller/script/bootstrapCtrl",

		//directive
		"home":"./directive/script/home",
		"headbar":"./directive/script/headbar",
		"leftsidebar":"./directive/script/leftsidebar",
		"jucai":"./directive/script/jucai",
		"zhaocai":"./directive/script/zhaocai",
		"addjob":"./directive/script/addjob",
		"addsite":"./directive/script/addsite",
		"pager":"./directive/script/pager",
		"demo":"./directive/script/demo",
		"bootstrap":"./directive/script/bootstrap",

		"confirmlogin":"./directive/script/confirmlogin",

		//service 
		"user":"./service/script/user",
		"resume":"./service/script/resume",

		"cookie":"bower_components/cookie/cookie.min",   
		"jquery":"bower_components/jquery/dist/jquery.min"

	},
	//require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，
	//还有一个shim属性，专门用来配置不兼容的模块。
	shim: {
		"angularRoute":["angular"],
		"angularSanitize":{   //angularSanitize依赖angular
		      deps: ["angular"],
		      exports: 'angular-sanitize'
		     },
		"angularMd5":["angular"],
		"angularValidation":["angular"],
		"angularValidationRule":["angular"],
		"angularBootstrap":["angular"],
		"angularBootstrapTpls":["angular"],
		"angualrUiSelect":["angular"],
		"angularColorpicker":["angular"]
	}
});
//开始逻辑
requirejs(["app","route","jquery"],function(app,route,$){
	route.init();
	$(function(){
		angular.bootstrap(document.body,[app.name]);
	});
});