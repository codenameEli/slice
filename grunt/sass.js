module.exports = {

    theme: {
        options: {
            outputStyle : 'nested',
            sourceMap: true,
        },
        files: {
            '<%= paths.sass.dest %>/styles.min.css':
            '<%= paths.sass.src %>/styles.scss'
        }
    }
};