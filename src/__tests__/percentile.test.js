'use strict';
exports.__esModule = true;
var percentile_1 = require('../functions/percentile');
var exceptions_1 = require('../exceptions/exceptions');
test('Percentile', function () {
    var list1 = [35, 20, 15, 50, 40];
    var list2 = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];
    var list3 = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20];
    var list4 = [3];
    var list5 = [10, 13, 15, 16, 20, 3, 6, 7, 7, 15, 19, 13, 13, 8, 19, 35, 22, 17, 19, 19, 12, 21, 9, 9, 12];
    var list6 = [16, 10, 12, 8, 15, 18, 20, 9, 11, 1, 13, 17, 9, 10, 14];
    expect(percentile_1.percentile(list1, 30)).toEqual(20);
    expect(percentile_1.percentile(list1, 30)).toEqual(20);
    expect(percentile_1.percentile(list1, 40)).toEqual(20);
    expect(percentile_1.percentile(list1, 50)).toEqual(35);
    expect(percentile_1.percentile(list1, 100)).toEqual(50);
    expect(percentile_1.percentile(list2, 25)).toEqual(7);
    expect(percentile_1.percentile(list2, 50)).toEqual(8);
    expect(percentile_1.percentile(list2, 75)).toEqual(15);
    expect(percentile_1.percentile(list2, 100)).toEqual(20);
    expect(percentile_1.percentile(list3, 25)).toEqual(7);
    expect(percentile_1.percentile(list3, 50)).toEqual(9);
    expect(percentile_1.percentile(list3, 75)).toEqual(15);
    expect(percentile_1.percentile(list3, 100)).toEqual(20);
    expect(percentile_1.percentile(list4, 25)).toEqual(3);
    expect(percentile_1.percentile(list4, 50)).toEqual(3);
    expect(percentile_1.percentile(list4, 75)).toEqual(3);
    expect(percentile_1.percentile(list4, 100)).toEqual(3);
    expect(percentile_1.percentile(list5, 95)).toEqual(22);
    expect(percentile_1.percentile(list6, 40)).toEqual(10);
    expect(function () {
        percentile_1.percentile([], 40);
    }).toThrowError(exceptions_1.Exceptions.ARRAY_EMPTY);
    expect(function () {
        percentile_1.percentile([0], -1);
    }).toThrowError(exceptions_1.Exceptions.PERCENT_OUT_OF_RANGE);
    expect(function () {
        percentile_1.percentile([0], 101);
    }).toThrowError(exceptions_1.Exceptions.PERCENT_OUT_OF_RANGE);
});
//# sourceMappingURL=percentile.test.js.map
