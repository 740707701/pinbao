'use strict';
define([
	"angularRoute",
	"app",
	"homeCtrl",
	"zhaocaiCtrl",
	"jucaiCtrl",
	"addjobCtrl",
	"addsiteCtrl",
	"demoCtrl"
	],function(__angularRoute,app){
		var initRoute = function(){
			app.config(["$routeProvider",function($routeProvider){
				console.log("init route....");
				$routeProvider
				.when("/",{
					templateUrl:"view/home.html",
					controller:"homeCtrl"
				})
				.when("/home",{
					templateUrl:"view/home.html",
					controller:"homeCtrl"
				})
				.when("/zhaocai",{
					templateUrl:"view/zhaocai.html",
					controller:"zhaocaiCtrl"
				})
				.when("/jucai",{
					templateUrl:"view/jucai.html",
					controller:"jucaiCtrl"
				})
				.when("/addjob",{
					templateUrl:"view/addjob.html",
					controller:"addjobCtrl"
				})
				.when("/addsite",{
					templateUrl:"view/addsite.html",
					controller:"addsiteCtrl"
				})
				.when("/demo",{
					templateUrl:"view/demo.html",
					controller:"demoCtrl"
				})
				.otherwise({

				});
			}]);
		};
		return {init:initRoute};
	});