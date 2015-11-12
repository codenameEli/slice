 module.exports = function(grunt) {

	require('time-grunt')(grunt); // Need to require
	require('load-grunt-tasks')(grunt); // Load tasks automatically

	require('load-grunt-config')(grunt, {

	    data: { // Define global variables in here

        pkg: grunt.file.readJSON('package.json'),

  			paths: {

          src: { // Development paths
  					base: 'src',
  				},

          js: {
            base: '<%= paths.src.base %>/js',
          },

          css: {
            base: '<%= paths.src.base %>/css',
          },

  				// dest: { // Production paths
  				// 	base: 'src',
  				// 	theme: {
  				// 		base: '<%= paths.dest.base %>/themes',
      //         client: '<%= paths.dest.theme.base %>/awesome-admin',
  				// 		launchpad: '<%= paths.dest.theme.base %>/ldm-launchpad',
  				// 	},
  				// 	plugin: {
  				// 		base: '<%= paths.dest.base %>/plugins',
      //         client: '<%= paths.dest.plugin.base %>/awesome-admin',
  				// 		launchpad: '<%= paths.dest.plugin.base %>/launchpad-plugin',
  				// 	}
  				// },

  				// // PHP assets
  				// php: {
  				// 	files_std : ['src/**/*.php', '!node_modules/**/*.php', '!vendor/**/*.php'], // Standard file match
      //       files : '<%= paths.php.files_std %>' // Dynamic file match
  				// },

  				// // JavaScript assets
  				// js : {
  				//     base : 'resources/js', //Base dir
  				//     src : '<%= paths.src.theme.client %>/<%= paths.js.base %>', // Development code
  				//     dest : '<%= paths.dest.theme.client %>/<%= paths.js.base %>', // Production code
  				// },

  				// // Sass assets
  				// sass : {
      //         base: 'resources/css',
  				//     src : '<%= paths.src.theme.client %>/<%= paths.sass.base %>', // Source files dir
  				//     dest : '<%= paths.dest.theme.client %>/<%= paths.sass.base %>', // Compiled files dir
  				// }
  			},
	    }
	});
};
