module.exports = {

	js: {
		options: {
			sourceMap: true,
		},
		src: [
			'<%= paths.js.base %>/**/*.js',
		],
		dest: '<%= paths.js.base %>/javascript.min.js'
	}
};