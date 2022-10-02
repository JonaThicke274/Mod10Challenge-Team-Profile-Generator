// Calls Manager.js
const Manager = require("../lib/Manager.js");

test("creates manager object", () => {
    const managerTest = new Manager("Jonathan", 274, "lipatajonathan274@gmail.com", 420);

    expect(managerTest.officeNumber).toEqual(420);
});

test("gets manager's role", () => {
    const managerTest = new Manager("Jonathan", 274, "lipatajonathan274@gmail.com", 420);

    expect(managerTest.getRole()).toEqual("Manager");
});