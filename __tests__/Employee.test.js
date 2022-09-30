// Calls Employee.js
const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
    const employeeTest = new Employee("Jonathan", 274, "lipatajonathan274@gmail.com");

    expect(employeeTest.name).toEqual("Jonathan");
    expect(employeeTest.id).toEqual(274);
    expect(employeeTest.email).toEqual("lipatajonathan274@gmail.com");
});


test("gets employee's name", () => {
    const employeeTest = new Employee("Jonathan", 274, "lipatajonathan274@gmail.com");

    expect(employeeTest.getName()).toEqual("Jonathan");
});

test("gets employee's id", () => {
    const employeeTest = new Employee("Jonathan", 274, "lipatajonathan274@gmail.com");

    expect(employeeTest.getId()).toEqual(274);
});

test("gets employee's email", () => {
    const employeeTest = new Employee("Jonathan", 274, "lipatajonathan274@gmail.com");

    expect(employeeTest.getEmail()).toEqual("lipatajonathan274@gmail.com");
});

test("gets employee's role", () => {
    const employeeTest = new Employee("Jonathan", "274", "lipatajonathan274@gmail.com");

    expect(employeeTest.getRole()).toEqual("Employee");
})