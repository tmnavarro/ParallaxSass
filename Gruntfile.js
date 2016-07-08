


module.exports = function(grunt){

  grunt.initConfig({

    // Compass config
    compass: {
      dist:{
        options: {
          sassDir: 'app/sass',
          cssDir: 'app/css',
          environment: 'production'
        }
      }
    },
    jade: {
      base_path: {
        files: {
          'app/index.html' : ['app/template/*.jade'],
        },
        options: {
          basePath: 'app/template/',
          pretty: true,
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: 'app/javascripts/*.js',
        tasks: []
      },
      sass: {
        files: 'app/sass/*.sass',
        tasks: ['compass']
      },
      html: {
        files: 'app/template/**/*.jade',
        tasks: ['jade']
      },

    },
    connect: {
      server: {
        options: {
          port:3000,
          base: ['./app', './bower_components'],
          hostname: 'localhost',
          livereload: true,
          open: true
        }
      }
    }

  });

  // Npm task
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Register Tasks
  grunt.registerTask('default', ['compass', 'jade', 'connect', 'watch']);

}
