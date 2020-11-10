"use strict";
exports.__esModule = true;
var range_1 = require("../functions/range");
var exceptions_1 = require("../exceptions/exceptions");
test('Range', function () {
    var list1 = [35, 20, 15, 50, 40];
    var list2 = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];
    var list3 = [5, 4];
    var list4 = [3];
    expect(range_1.range(list1)).toEqual([15, 50]);
    expect(range_1.range(list2)).toEqual([3, 20]);
    expect(range_1.range(list3)).toEqual([4, 5]);
    expect(range_1.range(list4)).toEqual([3, 3]);
    expect(function () {
        range_1.range([]);
    }).toThrowError(exceptions_1.Exceptions.ARRAY_EMPTY);
});
//# sourceMappingURL=range.test.js.map