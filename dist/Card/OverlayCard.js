"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Card.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function OverlayCard(_ref) {
  var children = _ref.children,
    src = _ref.src;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card card-with-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "overlay"
  }, children), /*#__PURE__*/_react.default.createElement("img", {
    className: "overlay-image",
    src: src,
    alt: "Image"
  }));
}
var _default = OverlayCard;
exports.default = _default;