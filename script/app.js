define(["angular",
	"angularRoute",
	"angularSanitize",
	"angularMd5",
	"cookie",
	"jquery",
	"underscore",
	"angularBootstrap",
	"angularBootstrapTpls",
	"angularValidation",
	"angularValidationRule",
	"angualrUiSelect"
	],function(_0,_1,_2,cookie,$,_6,_7,_8){
	var myApp = angular.module("myApp",["ngRoute",
										"ngSanitize",
										"angular-md5",
										"ui.bootstrap",
										"ui.bootstrap.tpls",
										"validation",
										"validation.rule",
										"ui.select"
										]
		);
	return myApp;
});