'use strict';
exports.__esModule = true;
exports.sortList = void 0;
var compare = function (a, b) {
    return a - b;
};
exports.sortList = function (list, compareFn) {
    if (compareFn === void 0) {
        compareFn = compare;
    }
    return list.sort(compareFn);
};
//# sourceMappingURL=utils.js.map
