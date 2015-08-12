module.exports = {

	dynamic: {

		files: [{

			expand: true,
			src: [
				'<%= paths.src.themes.launchpad %>/**/*.{png,jpg,gif}',
			],
		}]
	}
}