import { Exceptions } from '../exceptions/exceptions';
import { sortList } from '../utils/utils';

export const percentile = (list: number[], percent: number): number => {
    if (list.length === 0) throw new Error(Exceptions.ARRAY_EMPTY);
    if (percent < 0 || percent > 100) throw new Error(Exceptions.PERCENT_OUT_OF_RANGE);

    const listSorted = sortList(list.slice());

    if (percent === 0) return listSorted[0];

    const kIndex = Math.ceil(listSorted.length * (percent / 100)) - 1;
    return listSorted[kIndex];
};
