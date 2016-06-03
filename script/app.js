define(["angular",
	"angularRoute",
	"angularSanitize",
	"angularMd5",
	"cookie",
	"jquery",
	"underscore",
	"angularBootstrap",
	"angularValidation",
	"angularValidationRule"
	],function(_0,_1,_2,cookie,$,_6,_7,_8){
	var myApp = angular.module("myApp",["ngRoute","ngSanitize","angular-md5","ui.bootstrap","validation","validation.rule"]);
	return myApp;
});