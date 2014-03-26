
describe("Test your new coolstuff class", function() {
    it("should allow you to call the method", function() {
        var a=counter();
        expect(a).not.toBe(null);
    });

    it("should increment every time you call next method", function() {
        var a=counter();
        expect(a.next()).toBe("1");
        expect(a.next()).toBe("2");
        expect(a.next()).toBe("3");
    });

    it("should allow you to modify the prefix", function() {
        var a=counter("meetup");
        expect(a.next()).toBe("meetup1");
    });

    it("should allow you to modify the initialvalue", function() {
        var a=counter("", 1000);
        expect(a.next()).toBe("1000");
    });
});
