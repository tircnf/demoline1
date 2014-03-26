module.exports = function(grunt) {
    "use strict";

    grunt.registerTask("meetup", "Log something to stdout", function(message) {

        message=message||"MeetUP!!";
        grunt.config("asciify.meetup.text", message);
        grunt.config("asciify.meetup.options.log", "true");
        grunt.config("asciify.meetup.options.font", "3-d");
        grunt.task.run("asciify:meetup"); 
    
    });


}
