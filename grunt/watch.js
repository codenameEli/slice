module.exports = {

    js: {
       files: [
           '<%= paths.js.base %>/**/*.js',
       ],
       tasks: [ 'concat' ],
       options: {
           livereload: true,
       },
    },

	// theme: {
	// 	files: [
 //            '<%= paths.src.theme.client %>/**/*',
 //            '!<%= paths.js.src %>/**/*.js', // Ignore, sass_themes handles itself
 //            '!<%= paths.sass.src %>/**/*.scss', // Ignore, js handles itself
 //        ],
 //        tasks: [ 'sync:theme', 'sass:theme', 'concat' ],
	// 	// tasks: [ 'sync:theme' ],
 //        options: {
 //            livereload: true
 //        }
	// },

 //    plugins: {
 //        files: '<%= paths.src.plugin.base %>/**/*',
 //        tasks: [ 'sync:plugins' ],
 //        options: {
 //            livereload: true
 //        }
 //    },

 //    sass_theme: {
 //        files: [
 //            '<%= paths.sass.src %>/**/*.scss',
 //        ],
 //        tasks: [ 'sass:theme' ],
 //        options: {
 //            livereload: true,
 //        },
 //    },

 //    js_theme: {
 //        files: [
 //            '<%= paths.js.src %>/**/*.js',
 //        ],
 //        tasks: [ 'concat' ],
 //        options: {
 //            livereload: true,
 //        },
 //    },

 //    dest_deleted_min: {
 //        files: [
 //            '<%= paths.dest.theme.client %>/resources/js/*.min.js',
 //            '<%= paths.dest.theme.client %>/resources/css/*.min.css',
 //        ],
 //        tasks: [ 'sass:theme', 'concat' ],
 //        options: {
 //            event: 'deleted',
 //        },
 //    },

 //    // dest_deleted_min_css: { // Watch the min css file
 //    //     files: [
 //    //         '<%= paths.sass.dest %>/styles.min.css',
 //    //     ],
 //    //     tasks: [ 'sass:theme' ],
 //    //     options: {
 //    //         event: 'deleted',
 //    //     },
 //    // },

 //    // dest_deleted_min_js: { // Watch the min js file
 //    //     files: [
 //    //         '<%= paths.js.dest %>/*.min.js',
 //    //     ],
 //    //     tasks: [ 'concat' ],
 //    //     options: {
 //    //         event: 'deleted',
 //    //     },
 //    // },

 //    // files: '<%= paths.src.themes.css %>/*',
 //    // tasks: ['newer:sass:dist','newer:sync']

 //    // phplint : {
 //    //     files : '<%= paths.php.files_std %>',
 //    //     tasks : ['phplint', 'sync'],
 //    //     options : {
 //    //         spawn : false
 //    //     }
 //    // },
 //    // // sass_core : {
 //    // //     files : ['<%= paths.sass.base_src %>/**/*.scss'],
 //    // //     tasks : ['sass:core']
 //    // // },
 //    //
 //    // shell: {
 //    //   multiple: {
 //    //       command: [
 //    //           'echo tey',
 //    //           'say chris is a dick',
 //    //       ].join('&&')
 //    //   }
 //    // }
 //    // jshint : {
 //    //     files : '<%= paths.js.files_std %>',
 //    //     tasks : ['jshint:all'],
 //    //     options : {
 //    //         spawn : false
 //    //     }
 //    // },
 //    //
};