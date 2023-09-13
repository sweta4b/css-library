"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function BadgeCard(_ref) {
  var children = _ref.children,
    badge = _ref.badge;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card card-with-badge"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "badge-in-card"
  }, badge), children);
}
var _default = BadgeCard;
exports.default = _default;