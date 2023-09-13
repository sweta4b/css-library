"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./FloatingButton.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Import your CSS or styling file

function AddFloatingButton() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "floating-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "floating-button-add"
  }, "+"));
}
var _default = AddFloatingButton;
exports.default = _default;