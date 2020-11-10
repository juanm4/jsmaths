"use strict";
exports.__esModule = true;
exports.mean = void 0;
var exceptions_1 = require("../exceptions/exceptions");
exports.mean = function (list) {
    if (list.length === 0)
        throw new Error(exceptions_1.Exceptions.ARRAY_EMPTY);
    var sum = 0;
    list.forEach(function (item) {
        sum += item;
    });
    return sum / list.length;
};
//# sourceMappingURL=mean.js.map