import { percentile } from '../functions/percentile';
import { Exceptions } from '../exceptions/exceptions';

test('Percentile', () => {
    const list1 = [35, 20, 15, 50, 40];
    const list2 = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];
    const list3 = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20];
    const list4 = [3];
    const list5 = [10, 13, 15, 16, 20, 3, 6, 7, 7, 15, 19, 13, 13, 8, 19, 35, 22, 17, 19, 19, 12, 21, 9, 9, 12];

    const list6 = [16, 10, 12, 8, 15, 18, 20, 9, 11, 1, 13, 17, 9, 10, 14];

    expect(percentile(list1, 30)).toEqual(20);
    expect(percentile(list1, 30)).toEqual(20);
    expect(percentile(list1, 40)).toEqual(20);
    expect(percentile(list1, 50)).toEqual(35);
    expect(percentile(list1, 100)).toEqual(50);

    expect(percentile(list2, 25)).toEqual(7);
    expect(percentile(list2, 50)).toEqual(8);
    expect(percentile(list2, 75)).toEqual(15);
    expect(percentile(list2, 100)).toEqual(20);

    expect(percentile(list3, 25)).toEqual(7);
    expect(percentile(list3, 50)).toEqual(9);
    expect(percentile(list3, 75)).toEqual(15);
    expect(percentile(list3, 100)).toEqual(20);

    expect(percentile(list4, 25)).toEqual(3);
    expect(percentile(list4, 50)).toEqual(3);
    expect(percentile(list4, 75)).toEqual(3);
    expect(percentile(list4, 100)).toEqual(3);

    expect(percentile(list5, 95)).toEqual(22);

    expect(percentile(list6, 40)).toEqual(10);

    expect(() => {
        percentile([], 40);
    }).toThrowError(Exceptions.ARRAY_EMPTY);

    expect(() => {
        percentile([0], -1);
    }).toThrowError(Exceptions.PERCENT_OUT_OF_RANGE);

    expect(() => {
        percentile([0], 101);
    }).toThrowError(Exceptions.PERCENT_OUT_OF_RANGE);
});
