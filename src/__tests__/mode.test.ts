import { Exceptions } from '../exceptions/exceptions';
import { mode } from '../functions/mode';

test('Mode', () => {
    const list1 = [35, 20, 15, 50, 40];
    const list2 = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];
    const list3 = [3, 6, 7, 8, 8, 9, 9, 10, 10, 13, 15, 16, 20];
    const list4 = [3, 1];
    const list5 = [3];

    expect(mode(list1)).toEqual([]);
    expect(mode(list2)).toEqual([8]);
    expect(mode(list3)).toEqual([8, 9, 10]);
    expect(mode(list4)).toEqual([]);
    expect(mode(list5)).toEqual([]);
});
