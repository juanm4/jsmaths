"use strict";
exports.__esModule = true;
exports.range = void 0;
var exceptions_1 = require("../exceptions/exceptions");
var utils_1 = require("../utils/utils");
exports.range = function (list) {
    if (list.length === 0)
        throw new Error(exceptions_1.Exceptions.ARRAY_EMPTY);
    var listSorted = utils_1.sortList(list);
    return [listSorted[0], listSorted[listSorted.length - 1]];
};
//# sourceMappingURL=range.js.map