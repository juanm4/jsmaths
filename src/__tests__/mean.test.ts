import { mean } from '../functions/mean';
import { Exceptions } from '../exceptions/exceptions';

test('Mean', () => {
    const list1 = [35, 20, 15, 50, 40];
    const list2 = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];
    const list3 = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20];
    const list4 = [3];
    const list5 = [];

    expect(mean(list1)).toEqual(32);
    expect(mean(list2)).toEqual(10.6);
    expect(mean(list3)).toBeCloseTo(10.4545454545, 10);
    expect(mean(list4)).toEqual(3);

    expect(() => {
        mean([]);
    }).toThrowError(Exceptions.ARRAY_EMPTY);
});
