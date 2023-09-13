"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./LinkButton.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function LinkButton(_ref) {
  var href = _ref.href,
    children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("a", {
    className: "link-button",
    href: href,
    target: "_blank",
    rel: "noreferrer"
  }, children);
}
var _default = LinkButton;
exports.default = _default;