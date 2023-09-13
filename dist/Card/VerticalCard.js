"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Card.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function VerticalCard(_ref) {
  var children = _ref.children,
    src = _ref.src;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card vertical-card"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "card-image",
    src: src,
    alt: "Image"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-content"
  }, children));
}
var _default = VerticalCard;
exports.default = _default;