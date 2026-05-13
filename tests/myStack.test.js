const stack = require('../src/stack');

test('pop removes the last pushed element', () => {
    stack.push("A");
    stack.push("B");
    const removed = stack.pop();

    expect(removed).toBe("B");        // ska ta bort översta elementet
    expect(stack.peek()).toBe("A");   // A ska nu ligga överst
});
