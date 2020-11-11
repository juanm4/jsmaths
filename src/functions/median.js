'use strict';
exports.__esModule = true;
exports.median = void 0;
var exceptions_1 = require('../exceptions/exceptions');
var utils_1 = require('../utils/utils');
exports.median = function (list) {
    if (list.length === 0) throw new Error(exceptions_1.Exceptions.ARRAY_EMPTY);
    var sortedList = utils_1.sortList(list);
    var middleIndex = sortedList.length / 2;
    if (Number.isInteger(middleIndex)) {
        return [sortedList[middleIndex - 1], sortedList[middleIndex]];
    } else {
        return [sortedList[Math.floor(middleIndex)]];
    }
};
//# sourceMappingURL=median.js.map
