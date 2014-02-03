module.exports = function (grunt) {

	// load the task
	grunt.loadNpmTasks("grunt-ts");

	// Configure grunt here
	grunt.registerTask("default", ["ts:client"]);

	grunt.initConfig({
		ts: {
			client: {
				src: ["app/client/*.ts"],
				html: ["app/views/*.html"],
				reference: "./app/reference.ts",
				out: 'app/app.js',
				watch: '.'
			},
			server: {
				src: ["app/server/*.ts"],
				reference: "./app/server.ts",
				out: 'app/server.js',
				watch: '.'
			}
		}
	});



}

