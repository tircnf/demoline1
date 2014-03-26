module.exports = function(grunt) {
    "use strict";

    grunt.registerTask("meetup", "Log something to stdout", function() {
        grunt.config("asciify.meetup.text", "MeetUP!!");
        grunt.config("asciify.meetup.options.log", "true");
        grunt.config("asciify.meetup.options.font", "3-d");
        grunt.task.run("asciify:meetup"); 
    
    });


}
