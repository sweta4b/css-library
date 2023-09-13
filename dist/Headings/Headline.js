"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Headline.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Headline(_ref) {
  var size = _ref.size,
    children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("p", {
    className: size
  }, children);
}
var _default = Headline;
exports.default = _default;