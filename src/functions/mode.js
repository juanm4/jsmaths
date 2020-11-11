'use strict';
exports.__esModule = true;
exports.mode = void 0;
exports.mode = function (list) {
    var modes = [];
    var count = [];
    var maxValue = 0;
    var i;
    list.forEach(function (num, index) {
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
//# sourceMappingURL=mode.js.map
