module.exports = function(grunt){
	require('load-grunt-tasks')(grunt);
	//配置grunt各种模块的参数
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		//'*'表示包含所有的文件 ,'**'表示包含所有的子目录
		cssmin: {
			minify: { //压缩css文件
				expend:true, //如果设为true，就表示下面文件名的占位符（即*号）都要扩展成具体的文件名。
				cwd:'css/',//需要处理的文件（input）所在的目录。
				src: ['*.css','!*.min.css'],//表示需要处理的文件。如果采用数组形式，数组的每一项就是一个文件名，可以使用通配符。
				dest:'css/',//表示处理后的文件名或所在目录
				ext: '.min.css' //表示处理后的文件后缀名。
			},
			combine: { //合并css文件
				files: {
					'css/bundle.css':['css/*min.css']
				}
			}
		},
		concat: {/*合并文件*/
			options: {
				separator:';',
				stripBanners:true
			},
			directive: {
				src:['directive/script/**.js'],
				dest:'directive/dist/directive-bundle.js'
			},
			controller: {
				src:['controller/script/**.js'],
				dest:'controller/dist/controller-bundle.js'
			},
			service: {
				src:['service/script/**.js'],
				dest:'service/dist/service-bundle.js'
			}
		},
		connect: {/*该模块用于在本机运行一个Web Server*/
			options: {
				port:4000,
				livereload: 35731,
				hostname:'localhost'
			},
			livereload: {
				options: {
					open:'http://<%= connect.options.hostname %>:<%=connect.options.port %>/main.html'
				}
			}
		},
		uglify: {/*压缩以及合并JavaScript文件*/
			options: {  
				mangle: true,
		        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'  
		      },  
		    dist: {  
		        files: {  
		          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']  
		        }  
		    } 
		},
		less: {
			dev:{
				files: {
					"css/bundle.css":'<%= watch.less.files %>'
				}
			}
		},
		watch: {/*监视文件变动，自动执行*/
			livereload: {
				options: {
					livereload:'<%= connect.options.livereload %>'
				},
				files:[
					'main.html',
					'view/**/*.html',
					'directive/**/*.html',
					'directive/script/dest/**/*.js',
					'service/script/dest/**/*.js',
					'controller/script/dest/**/*.js',
					'filter/script/dest/**/*.js'
				]
			},
			less: {
				files:['less/**/*.less','directive/less/**/*.less'],
				tasks:['less']
			},
			directive: {
				files:['directive/script/**/*.js'],
				tasks:["lessChange","concat"]
			},
			filter: {
				files:['filter/script/**/*.js'],
				tasks:["lessChange","concat"]
			},
			service: {
				files:['service/script/**/*.js'],
				tasks:["lessChange","concat"]
			},
			controller: {
				files:['controller/script/**/*.js'],
				tasks:["lessChange","concat"]
			}
		},
		//js代码检查
		jshint: {
			all:[
				'controller/script/**.js',
				'directive/script/**.js',
				'service/script/**.js',
				'script/**.js'
				],
			options: {
				browser:true,
				devel:true
			}
		}
	});

	//从node_modules目录加载模块文件，(加载完成任务所需的模块)
	/*grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');*/
	// 安装load-grunt-tasks 用下面一句替换所有的grunt.loadNpmTasks
	require('load-grunt-tasks')(grunt);

	//定义任务顺序
	grunt.registerTask("lessChange",function(){
		console.log("complie less file...");
	});
	grunt.registerTask("complie",function(){
		grunt.task.run(["lessChange","less","concat"]);
	});
	grunt.registerTask("serve",function(){
		grunt.task.run(["complie","connect:livereload","watch"]);
	});

	//每行registerTask定义一个任务(定义具体的任务)
	grunt.registerTask('check',['jshint']);
	grunt.registerTask('default',["serve"]);


};