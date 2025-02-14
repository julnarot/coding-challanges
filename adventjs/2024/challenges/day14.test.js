import { test, expect } from 'vitest';
import { minMovesToStables } from './day14';

test('Unit test 01', () => {
    expect(minMovesToStables([2, 6, 9], [3, 8, 5])).toEqual(3);
})

test('Unit test 02', () => {
    expect(minMovesToStables([1, 1, 3], [1, 8, 4])).toEqual(8);
})

test('Unit test 03', () => {
    expect(minMovesToStables([5, 15, 10], [8, 18, 12])).toEqual(8);
})

test('Unit test 04', () => {
    expect(minMovesToStables([30, 20, 10], [35, 25, 15])).toEqual(15);
})