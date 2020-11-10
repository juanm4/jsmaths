import { range } from '../functions/range';
import { Exceptions } from '../exceptions/exceptions';

test('Range', () => {
    const list1 = [35, 20, 15, 50, 40];
    const list2 = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];
    const list3 = [5, 4];
    const list4 = [3];

    expect(range(list1)).toEqual([15, 50]);
    expect(range(list2)).toEqual([3, 20]);
    expect(range(list3)).toEqual([4, 5]);
    expect(range(list4)).toEqual([3, 3]);

    expect(() => {
        range([]);
    }).toThrowError(Exceptions.ARRAY_EMPTY);
});
