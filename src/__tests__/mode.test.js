"use strict";
exports.__esModule = true;
var mode_1 = require("../functions/mode");
test('Mode', function () {
    var list1 = [35, 20, 15, 50, 40];
    var list2 = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];
    var list3 = [3, 6, 7, 8, 8, 9, 9, 10, 10, 13, 15, 16, 20];
    var list4 = [3, 1];
    var list5 = [3];
    expect(mode_1.mode(list1)).toEqual([]);
    expect(mode_1.mode(list2)).toEqual([8]);
    expect(mode_1.mode(list3)).toEqual([8, 9, 10]);
    expect(mode_1.mode(list4)).toEqual([]);
    expect(mode_1.mode(list5)).toEqual([]);
});
//# sourceMappingURL=mode.test.js.map