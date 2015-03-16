module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['js/main.js'],
        dest: 'js/build/global.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/build/all.css': 'css/*.scss'
        }
      }
    },

    'dr-svg-sprites': {
        shapes: {
          options: {
              spriteElementPath: 'img/shapes',
              spritePath: "img/dr-logos-tv-sprite.svg",
              cssPath: "img",
              layout: 'vertical',
              cssSuffix: "scss"
          }
        }
    },

    watch: {
        options: {
          livereload: true,
        },
        src: {
          files: ['js/libs/*.js', 'js/*.js', 'css/*.scss', '*.html'],
          tasks: ['default'],
        }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-svg-sprite');
  grunt.loadNpmTasks('grunt-dr-svg-sprites');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'dr-svg-sprites']);
  grunt.registerTask('run', ['watch']);

};