import { Exceptions } from '../exceptions/exceptions';
import { median } from '../functions/median';

test('Median', () => {
    const list1 = [35, 20, 15, 50, 40];
    const list2 = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];
    const list3 = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20];
    const list4 = [3, 1];
    const list5 = [3];

    expect(median(list1)).toEqual([35]);
    expect(median(list2)).toEqual([8, 10]);
    expect(median(list3)).toEqual([9]);
    expect(median(list4)).toEqual([1, 3]);
    expect(median(list5)).toEqual([3]);

    expect(() => {
        median([]);
    }).toThrowError(Exceptions.ARRAY_EMPTY);
});
