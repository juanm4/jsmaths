import { Exceptions } from '../exceptions/exceptions';

export const mean = (list: number[]): number => {
    if (list.length === 0) throw new Error(Exceptions.ARRAY_EMPTY);
    let sum = 0;
    list.forEach(item => {
        sum += item;
    });
    return sum / list.length;
};
