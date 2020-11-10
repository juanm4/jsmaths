import { Exceptions } from '../exceptions/exceptions';
import { sortList } from '../utils/utils';

export const range = (list: number[]): number[] => {
    if (list.length === 0) throw new Error(Exceptions.ARRAY_EMPTY);
    const listSorted = sortList(list);
    return [listSorted[0], listSorted[listSorted.length - 1]];
};
