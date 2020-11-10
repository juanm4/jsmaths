const compare = (a: number, b: number): number => {
    return a - b;
};

export const sortList = (list: number[], compareFn = compare): number[] => {
    return list.sort(compareFn);
};
