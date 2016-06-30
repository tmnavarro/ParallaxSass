


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
        liverelead: true
      },
      js: {
        files: 'app/javascripts/**/*.js',
        tasks: []
      },
      sass: {
        files: 'app/sass/**/*.{scss, sass}',
        tasks: ['compass']
      },
      html: {
        files: 'app/template/**/*.jade',
        tasks: ['jade']
      }
    }

  });

  // Npm task
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register Tasks
  grunt.registerTask('default', ['compass', 'jade', 'watch']);

}
