"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Badge.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Badge(_ref) {
  var children = _ref.children,
    badgeContent = _ref.badgeContent;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "badge-container"
  }, children, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "badge"
  }, /*#__PURE__*/_react.default.createElement("span", null, badgeContent))));
}
var _default = Badge;
exports.default = _default;