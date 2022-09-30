const Engineer = require("../lib/Engineer.js");

test("creates engineer object", () => {
    const engineerTest = new Engineer("Jonathan", 274, "lipatajonathan274@gmail.com", "JonaThicke274");

    expect(engineerTest.github).toEqual("JonaThicke274");
});

test("gets engineer's github username", () => {
    const engineerTest = new Engineer("Jonathan", 274, "lipatajonathan274@gmail.com", "JonaThicke274");

    expect(engineerTest.getGithub()).toEqual("JonaThicke274");
});

test("returns engineer's role", () => {
    const engineerTest = new Engineer("Jonathan", 274, "lipatajonathan274@gmail.com", "JonaThicke274");

    expect(engineerTest.getRole()).toEqual("Engineer");
});