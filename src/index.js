'use strict';
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              Object.defineProperty(o, k2, {
                  enumerable: true,
                  get: function () {
                      return m[k];
                  },
              });
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
          });
exports.__esModule = true;
exports.median = exports.mean = exports.percentile = void 0;
var percentile_1 = require('./functions/percentile');
__createBinding(exports, percentile_1, 'percentile');
var mean_1 = require('./functions/mean');
__createBinding(exports, mean_1, 'mean');
var median_1 = require('./functions/median');
__createBinding(exports, median_1, 'median');
//# sourceMappingURL=index.js.map
