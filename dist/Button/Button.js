"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Button.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Button(_ref) {
  var children = _ref.children,
    variant = _ref.variant;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: variant
  }, children);
}
var _default = Button;
exports.default = _default;