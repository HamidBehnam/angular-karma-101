/**
 * Created by hamidbehnam on 1/25/16.
 */

module.exports = function(grunt) {

    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({

        // get the configuration info from package.json ----------------------------
        // this way we can use things like name and version (pkg.name)
        pkg: grunt.file.readJSON('package.json'),

        // all of our configuration will go here

        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                debug: true// use jshint-stylish to make our errors look and read good
            },

            // when this task is run, lint the Gruntfile and all js files in src
            build: ['src/js/project/**/*.js']
        },
        concat: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/js/project/',
                    src: ['modules/**/*.js', 'modules.content/**/*.js'],
                    dest: 'dist/js/',
                    rename: function (dest, src) {
                        return dest + "dist-ank" + ".js";
                    }
                    //'dist/basic.js': ['src/main.js'],
                    //'dist/with_extras.js': ['src/main.js', 'src/extras.js']
                }]
            }
        },
        less: {
            build: {
                files: {
                    'dist/css/dist-ank.css': 'src/less/ank.less'
                }
            }
        },
        watch: {

            // for stylesheets, watch css and less files
            // only run less and cssmin
            stylesheets: {
                files: ['src/less/*.less'],
                tasks: ['less']
            },
            scripts: {
                files: ['src/js/project/**/*.js'],
                tasks: ['jshint', 'concat', 'jsdoc']
            }
        },
        jsdoc : {
            dist : {
                src: 'src/js/project/**/*.js',
                options: {
                    destination: 'src/js/doc'
                }
            }
        }
    });

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    // we can only load these if they are in our package.json
    // make sure you have run npm install so our app can find these
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-jsdoc');

    grunt.registerTask('all', [
        'less',
        'concat',
        'jshint',
        'jsdoc',
        'watch'
    ]);
};
