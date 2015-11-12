module.exports = {

	js: {
		options: {
			sourceMap: true,
		},
		src: [
            '<%= paths.js.base %>/app.js',
			'<%= paths.js.base %>/services/*.js',
			'<%= paths.js.base %>/controllers/*.js',
			'<%= paths.js.base %>/directives/*.js',
		],
		dest: '<%= paths.src.base %>/slice.min.js'
	}
};