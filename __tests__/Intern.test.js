const Intern = require('../lib/Intern.js');

test('Creates a new Intern object', () => {
    const int = new Intern("Dave",'12345','dave@example.com', 'UNC');
    
    expect(int.name).toBe('Dave');
    expect(int.id).toBe('12345');
    expect(int.email).toBe('dave@example.com');
    expect(int.school).toBe('UNC');
})

test('gets intern school', () => {
    const int = new Intern('Dave','12345','dave@example.com', 'UNC');

    expect(int.getSchool()).toBe('UNC');
})

test('gets Intern Role', () => {
    const int = new Intern('Dave','12345','dave@example.com', 'UNC');

    expect(int.getRole()).toBe('Intern');
})