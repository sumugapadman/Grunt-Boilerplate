module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'components/*.scss',
        ],
        dest: 'components/style.scss',
      }
    },
    sass: { // sass tasks
      dist: {
        options: {
          style: 'expanded' // we don't want to compress it
        },
        files: {
          'assets/style.css': 'components/style.scss'
        }
      }
    },
    cssmin: { // minifying css task
      dist: {
        files: {
          'assets/style.min.css': 'assets/style.css'
        }
      }
    },

    watch: { // watch task for general work
      sass: {
        files: ['components/**/*.scss'],
        tasks: ['sass']
      },
      styles: {
        files: ['assets/style.css'],
        tasks: ['cssmin']
      }
    }
  });

  // all the plugins that is needed for above tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // registering the default task that we're going to use along with watch
  grunt.registerTask('default', ['sass', 'cssmin','concat']);
}
