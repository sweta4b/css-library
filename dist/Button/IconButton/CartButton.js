"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./IconButton.css");
require("font-awesome/css/font-awesome.min.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CartButton() {
  return /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-shopping-cart fa-2x"
  });
}
var _default = CartButton;
exports.default = _default;