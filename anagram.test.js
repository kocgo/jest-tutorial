const isAnagram = require('./anagram');

test("isAnagram function exists", () => {
    expect(typeof isAnagram).toEqual('function');
})

test('cinema is an anagram of iceman', () => {
    expect(isAnagram('cinema','iceman')).toBeTruthy();
})

test('Dormitory is an anagram of "Dirty room##"', () => {
    expect(isAnagram('Dormitory','Dirty room##')).toBeTruthy();
})

test('Hello is not an anagram of "aloha"', () => {
    expect(isAnagram('Hello','aloha')).toBeFalsy();
})