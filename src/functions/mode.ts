export const mode = (list: number[]): number[] => {
    const modes: number[] = [];
    const count: number[] = [];
    let maxValue = 0;
    let i;

    list.forEach((num, index) => {
        count[num] = (count[num] || 0) + 1;
        if (count[num] > maxValue) maxValue = count[num];
        i = index;
    });

    for (i in count) {
        // eslint-disable-next-line no-prototype-builtins
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxValue && maxValue > 1) {
                modes.push(Number(i));
            }
        }
    }
    return modes;
};
