"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Avatar.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Avatar(_ref) {
  var src = _ref.src,
    size = _ref.size;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    onError: function onError(e) {
      e.target.onerror = null;
      e.target.src = "../avatar.img.png";
    },
    alt: "user",
    className: size
  }));
}
var _default = Avatar;
exports.default = _default;