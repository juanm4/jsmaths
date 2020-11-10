"use strict";
exports.__esModule = true;
exports.percentile = void 0;
var exceptions_1 = require("../exceptions/exceptions");
var utils_1 = require("../utils/utils");
exports.percentile = function (list, percent) {
    if (list.length === 0)
        throw new Error(exceptions_1.Exceptions.ARRAY_EMPTY);
    if (percent < 0 || percent > 100)
        throw new Error(exceptions_1.Exceptions.PERCENT_OUT_OF_RANGE);
    var listSorted = utils_1.sortList(list.slice());
    if (percent === 0)
        return listSorted[0];
    var kIndex = Math.ceil(listSorted.length * (percent / 100)) - 1;
    return listSorted[kIndex];
};
//# sourceMappingURL=percentile.js.map