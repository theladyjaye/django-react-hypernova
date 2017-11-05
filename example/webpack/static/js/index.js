webpackJsonp([0],{

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(39), __webpack_require__(40), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, coffee_1, pie_1, hypernova_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    hypernova_react_1.renderReact('Coffee', coffee_1.Coffee);
    hypernova_react_1.renderReact('Pie', pie_1.Pie);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Coffee = (function (_super) {
        __extends(Coffee, _super);
        function Coffee() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Coffee.prototype.log = function () {
            console.log('COFFEE!');
        };
        Coffee.prototype.render = function () {
            return (React.createElement("div", { onClick: this.log.bind(this) },
                "Coffee ",
                this.props.name));
        };
        return Coffee;
    }(React.Component));
    exports.Coffee = Coffee;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Pie = (function (_super) {
        __extends(Pie, _super);
        function Pie() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Pie.prototype.log = function () {
            console.log('PIE!');
        };
        Pie.prototype.render = function () {
            return (React.createElement("div", { onClick: this.log.bind(this) },
                "Pie ",
                this.props.name));
        };
        return Pie;
    }(React.Component));
    exports.Pie = Pie;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

},[38]);
//# sourceMappingURL=index.js.map