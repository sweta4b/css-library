"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ShadowCard(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: " card-with-shadow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "shadow-card"
  }, children));
}
var _default = ShadowCard;
exports.default = _default;