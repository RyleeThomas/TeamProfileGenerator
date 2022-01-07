const Employee = require('../lib/Employee.js');

test('Creates a new employee object', () => {
    const employee = new Employee("Dave",'12345','dave@example.com');
    
    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('12345');
    expect(employee.email).toBe('dave@example.com');
})

test('gets employee Name', () => {
    const employee = new Employee('Dave','12345','dave@example.com');

    expect(employee.getName()).toBe('Dave');
})

test('gets employee ID', () => {
    const employee = new Employee('Dave','12345','dave@example.com');

    expect(employee.getId()).toBe('12345');
})

test('gets employee Email', () => {
    const employee = new Employee('Dave','12345','dave@example.com');

    expect(employee.getEmail()).toBe('dave@example.com');
})

test('gets employee Role', () => {
    const employee = new Employee('Dave','12345','dave@example.com');

    expect(employee.getRole()).toBe('Employee');
})

