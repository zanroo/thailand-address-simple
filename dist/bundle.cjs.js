'use strict';

var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var DEFAULT_CONFIG = {
    database: "https://earthchie.github.io/jquery.Thailand.js/jquery.Thailand.js/database/db.json",
};
function reStructure(database) {
    var data = [];
    var words = [];
    var lookup = [];
    var expanded = [];
    if (database.lookup && database.words) {
        data = database.data;
        words = database.words.split("|");
        lookup = database.lookup.split("|");
    }
    var translate = function (text) {
        function replace(m) {
            var ch = m.charCodeAt(0);
            return words[ch < 97 ? ch - 65 : 26 + ch - 97];
        }
        if (typeof text === "number") {
            text = lookup[text];
        }
        return text.replace(/[A-Z]/gi, replace);
    };
    // decompacted database in hierarchical form of:
    // [["province",[["amphur",[["district",["zip"...]]...]]...]]...]
    data.map(function (provinces) {
        // 2 = geographic database
        var type = provinces.length === 3 ? 2 : 1;
        provinces[type].map(function (amphoes) {
            amphoes[type].map(function (districts) {
                districts[type] = districts[type] instanceof Array ? districts[type] : [districts[type]];
                districts[type].map(function (zipcode) {
                    var entry = {
                        district: translate(districts[0]),
                        amphoe: translate(amphoes[0]),
                        province: translate(provinces[0]),
                        zipcode: zipcode.toString(),
                    };
                    if (type === 2) {
                        entry.district_code = districts[1] || false;
                        entry.amphoe_code = amphoes[1] || false;
                        entry.province_code = provinces[1] || false;
                    }
                    expanded.push(entry);
                });
            });
        });
    });
    return expanded;
}
var ThailandAddressSimple = /** @class */ (function () {
    function ThailandAddressSimple(config) {
        var _this = this;
        this.init = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!/^http(s)?/.test(this.config.database)) return [3 /*break*/, 2];
                        _a = this;
                        _b = reStructure;
                        return [4 /*yield*/, axios__default['default'].get(this.config.database)];
                    case 1:
                        _a.address = _b.apply(void 0, [(_c.sent()).data]);
                        return [3 /*break*/, 3];
                    case 2:
                        if (typeof process === "object") {
                            this.address = reStructure(JSON.parse(require("fs").readFileSync(this.config.database).toString()));
                        }
                        else {
                            throw new Error("url or path is invalid");
                        }
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.search = function (input) {
            var possibles = input.split(" ");
            var stack = possibles
                .filter(function (v, i) { return possibles.indexOf(v) === i; })
                .map(function (txt) { return function (v) {
                return v.zipcode.includes(txt) || v.amphoe.includes(txt) || v.district.includes(txt) || v.province.includes(txt);
            }; });
            return _this.address.filter(function (v) { return stack.every(function (cb) { return cb(v); }); });
        };
        this.searchByDistrict = function (input) {
            return _this.address.filter(function (v) { return v.district.includes(input); });
        };
        this.searchByAmphoe = function (input) {
            return _this.address.filter(function (v) { return v.amphoe.includes(input); });
        };
        this.searchByProvince = function (input) {
            return _this.address.filter(function (v) { return v.province.includes(input); });
        };
        this.searchByZipCode = function (input) {
            return _this.address.filter(function (v) { return v.zipcode.includes(input); });
        };
        this.config = config !== null && config !== void 0 ? config : DEFAULT_CONFIG;
    }
    return ThailandAddressSimple;
}());

module.exports = ThailandAddressSimple;
//# sourceMappingURL=bundle.cjs.js.map
