import { Exceptions } from '../exceptions/exceptions';
import { sortList } from '../utils/utils';

export const median = (list: number[]): number[] => {
    if (list.length === 0) throw new Error(Exceptions.ARRAY_EMPTY);
    const sortedList = sortList(list);
    const middleIndex = sortedList.length / 2;
    if (Number.isInteger(middleIndex)) {
        return [sortedList[middleIndex - 1], sortedList[middleIndex]];
    } else {
        return [sortedList[Math.floor(middleIndex)]];
    }
};
