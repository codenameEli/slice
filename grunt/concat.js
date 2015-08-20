module.exports = {

	js: {
		options: {
			sourceMap: true,
		},
		src: [
            '<%= paths.js.base %>/app.js',
			'<%= paths.js.base %>/**/*.js',
		],
		dest: '<%= paths.src.base %>/slice.min.js'
	}
};