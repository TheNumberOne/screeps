'use strict';

module.exports = function(grunt){
    grunt.loadNPMTasks('grunt-screeps');
    grunt.initConfig({
        screeps: {
            options: require('./private.json'),
            dist: {
                src: 'src/*.js'
            }
        }
    });
};
