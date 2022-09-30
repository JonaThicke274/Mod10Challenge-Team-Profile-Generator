const Intern = require("../lib/Intern.js")

test("creates intern object", () => {
    const internTest = new Intern("Jonathan", 274, "lipatajonathan274@gmail.com", "George Mason University");

    expect(internTest.school).toEqual("George Mason University");
});

test("gets intern's school", () => {
    const internTest = new Intern("Jonathan", 274, "lipatajonathan274@gmail.com", "George Mason University");

    expect(internTest.getSchool()).toEqual("George Mason University");
});

test("returns intern's role", () => {
    const internTest = new Intern("Jonathan", 274, "lipatajonathan274@gmail.com", "George Mason University");

    expect(internTest.getRole()).toEqual("Intern");
});