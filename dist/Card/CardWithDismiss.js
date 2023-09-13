"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Card.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CardWithDismiss(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card card-with-dismiss"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dismiss-button"
  }, "X"), children);
}
var _default = CardWithDismiss;
exports.default = _default;