"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Image.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ResponsiveImage(_ref) {
  var src = _ref.src;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "responsive-img-container"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    alt: "Responsive Image",
    className: "responsive-image"
  }));
}
var _default = ResponsiveImage;
exports.default = _default;