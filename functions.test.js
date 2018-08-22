const functions = require('./functions');

// beforeEach( () => initDatabase());
// afterEach( () => closeDatabase());

// beforeAll( () => initDatabase());
// afterAll( () => closeDatabase());

const nameCheck = () => console.log("Checking Name....");

describe('Checking Names', () => {
    beforeEach( () => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff'
        expect(user).toBe("Jeff");
    })

    test('User is Karen', () => {
        const user = 'Karen'
        expect(user).toBe("Karen");
    })
})

const initDatabase = () => console.log("Database Initialized...");
const closeDatabase = () => console.log("Database closed...");

// TO BE MATCHER
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
})

// NOT TO BE MATCHER
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
})

// TO BE NULL
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})

// TO BE FALSY
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

// OBJECT EQUALITY
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: "Brad",
        lastName: "Traversy"
    });
})

// Less than and greater than
test("Should be under 1600 or greater than 1200", () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
    expect(load1 + load2).toBeGreaterThan(1200);
});

// REGEX
test("There is no I in team", () => {
    expect('team').not.toMatch(/I/);
})

// ARRAYS - Contain
test("Admin should be in usernames", () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})

// ASYNC DATA
test('user fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        });
});

// ASYNC DATA2
test('user fetched USERNAME should be Bret', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.username).toEqual('Bret');
});