module.exports = function (grunt) {

	// load the task
	grunt.loadNpmTasks("grunt-ts");

	// Configure grunt here
	grunt.registerTask("default", ["ts:dev"]);

	grunt.initConfig({
		ts: {
			dev: {
				src: ["app/**/*.ts"],
				html: ["app/**/*.html"],
				reference: "./app/reference.ts",
				out: 'app/app.js',
				watch: '.'
			}
		}
	});



}

