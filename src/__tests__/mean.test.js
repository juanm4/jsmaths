"use strict";
exports.__esModule = true;
var mean_1 = require("../functions/mean");
var exceptions_1 = require("../exceptions/exceptions");
test('Mean', function () {
    var list1 = [35, 20, 15, 50, 40];
    var list2 = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];
    var list3 = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20];
    var list4 = [3];
    var list5 = [];
    expect(mean_1.mean(list1)).toEqual(32);
    expect(mean_1.mean(list2)).toEqual(10.6);
    expect(mean_1.mean(list3)).toBeCloseTo(10.4545454545, 10);
    expect(mean_1.mean(list4)).toEqual(3);
    expect(function () {
        mean_1.mean([]);
    }).toThrowError(exceptions_1.Exceptions.ARRAY_EMPTY);
});
//# sourceMappingURL=mean.test.js.map