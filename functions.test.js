const { returnTwo, greeting, add } = require('./functions')

test('returns 2', () => {expect(returnTwo()).toBe(2)})

test('returns Hello (user)!', () => {expect(greeting('James')).toBe('Hello James!'),expect(greeting('Jill')).toBe('Hello Jill!')})

test('returns sum of both inputs', () => {expect(add(2, 1)).toBe(3),expect(add(5, 9)).toBe(14)})