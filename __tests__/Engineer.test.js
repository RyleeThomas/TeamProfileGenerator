const Engineer = require('../lib/Engineer.js');

test('Creates a new Engineer object', () => {
    const eng = new Engineer("Dave",'12345','dave@example.com', 'dave@github.com');
    
    expect(eng.name).toBe('Dave');
    expect(eng.id).toBe('12345');
    expect(eng.email).toBe('dave@example.com');
    expect(eng.github).toBe('dave@github.com');
})

test('gets Engineer github', () => {
    const eng = new Engineer('Dave','12345','dave@example.com', 'dave@github.com');

    expect(eng.getGithub()).toBe('dave@github.com');
})

test('gets Engineer Role', () => {
    const eng = new Engineer('Dave','12345','dave@example.com', 'dave@github.com');

    expect(eng.getRole()).toBe('Engineer');
})