import {describe, it, expect} from 'vitest';
import {diffs} from './diff';

describe('Diff filter 1', () => {
    it('finds absolute difference between current and previous value', () => {
        const input = [4, 2, 8, 3, 9, 4, 10, 5, 11, 6];
        const expected = [4, 2, 6, 5, 6, 5, 6, 5, 6, 5];
        expect(diffs(input)).toEqual(expected);
    });
});

describe('Diff filter 2', () => {
    it('finds absolute difference between current and previous value', () => {
        const input = [4, 2, 8, 3, 9, 4, 10, 5, 11, 6];
        const expected = [4, 2, 6, 5, 6, 5, 6, 5, 6, 5];
        expect(diffs(input)).toEqual(expected);
    });
});