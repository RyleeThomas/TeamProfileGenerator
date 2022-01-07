const Manager = require('../lib/Manager.js');

test('Creates a new Manager object', () => {
    const manager = new Manager("Dave",'12345','dave@example.com', '12345');
    
    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe('12345');
    expect(manager.email).toBe('dave@example.com');
    expect(manager.office).toBe('12345');
})

test('gets Manager Role', () => {
    const manager = new Manager('Dave','12345','dave@example.com', '12345');

    expect(manager.getRole()).toBe('Manager');
})