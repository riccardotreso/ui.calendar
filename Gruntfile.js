module.exports = function (grunt) {
    "use strict";

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    //connect - local server
    grunt.registerTask('serve', ['connect']);
    
    // Project configuration.
    grunt.initConfig({
        connect : {
            server : {
                options : {
                    port : 8000,
                    open : true,
                    debug : true,
                    keepalive : true,
                    hostname : '*',
                    base : "."
                }
            }
        }
    });
};