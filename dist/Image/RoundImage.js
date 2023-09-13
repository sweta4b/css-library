"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Image.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function RoundImage(_ref) {
  var src = _ref.src;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    alt: "",
    onError: function onError(e) {
      e.target.onerror = null;
      e.target.src = "../fallback.img.png";
    },
    className: "round-image"
  }));
}
var _default = RoundImage;
exports.default = _default;