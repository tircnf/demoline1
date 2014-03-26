(function() {
    var counter=function(prefix, initialval) {
        prefix=prefix||"";
        var initialvalue=initialval||1;

        var value=initialvalue-1;

        var that={};

        that.next=function() {
            value++;
            return prefix+value;
        };

        return that;

    };

    window.counter=counter;
})();
