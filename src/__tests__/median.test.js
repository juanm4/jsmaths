"use strict";
exports.__esModule = true;
var exceptions_1 = require("../exceptions/exceptions");
var median_1 = require("../functions/median");
test('Median', function () {
    var list1 = [35, 20, 15, 50, 40];
    var list2 = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];
    var list3 = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20];
    var list4 = [3, 1];
    var list5 = [3];
    expect(median_1.median(list1)).toEqual([35]);
    expect(median_1.median(list2)).toEqual([8, 10]);
    expect(median_1.median(list3)).toEqual([9]);
    expect(median_1.median(list4)).toEqual([1, 3]);
    expect(median_1.median(list5)).toEqual([3]);
    expect(function () {
        median_1.median([]);
    }).toThrowError(exceptions_1.Exceptions.ARRAY_EMPTY);
});
//# sourceMappingURL=median.test.js.map