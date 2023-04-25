/*! nouislider - 10.1.0 - 2017-07-28 13:09:54 */

!function (a) { "function" == typeof define && define.amd ? define([], a) : "object" == typeof exports ? module.exports = a() : window.noUiSlider = a() }(function () { "use strict"; function a(a) { return "object" == typeof a && "function" == typeof a.to && "function" == typeof a.from } function b(a) { a.parentElement.removeChild(a) } function c(a) { a.preventDefault() } function d(a) { return a.filter(function (a) { return !this[a] && (this[a] = !0) }, {}) } function e(a, b) { return Math.round(a / b) * b } function f(a, b) { var c = a.getBoundingClientRect(), d = a.ownerDocument, e = d.documentElement, f = o(d); return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (f.x = 0), b ? c.top + f.y - e.clientTop : c.left + f.x - e.clientLeft } function g(a) { return "number" == typeof a && !isNaN(a) && isFinite(a) } function h(a, b, c) { c > 0 && (l(a, b), setTimeout(function () { m(a, b) }, c)) } function i(a) { return Math.max(Math.min(a, 100), 0) } function j(a) { return Array.isArray(a) ? a : [a] } function k(a) { a = String(a); var b = a.split("."); return b.length > 1 ? b[1].length : 0 } function l(a, b) { a.classList ? a.classList.add(b) : a.className += " " + b } function m(a, b) { a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " ") } function n(a, b) { return a.classList ? a.classList.contains(b) : new RegExp("\\b" + b + "\\b").test(a.className) } function o(a) { var b = void 0 !== window.pageXOffset, c = "CSS1Compat" === (a.compatMode || ""); return { x: b ? window.pageXOffset : c ? a.documentElement.scrollLeft : a.body.scrollLeft, y: b ? window.pageYOffset : c ? a.documentElement.scrollTop : a.body.scrollTop } } function p() { return window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" } } function q() { var a = !1; try { var b = Object.defineProperty({}, "passive", { get: function () { a = !0 } }); window.addEventListener("test", null, b) } catch (a) { } return a } function r() { return window.CSS && CSS.supports && CSS.supports("touch-action", "none") } function s(a, b) { return 100 / (b - a) } function t(a, b) { return 100 * b / (a[1] - a[0]) } function u(a, b) { return t(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0]) } function v(a, b) { return b * (a[1] - a[0]) / 100 + a[0] } function w(a, b) { for (var c = 1; a >= b[c];)c += 1; return c } function x(a, b, c) { if (c >= a.slice(-1)[0]) return 100; var d, e, f, g, h = w(c, a); return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], f + u([d, e], c) / s(f, g) } function y(a, b, c) { if (c >= 100) return a.slice(-1)[0]; var d, e, f, g, h = w(c, b); return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], v([d, e], (c - f) * s(f, g)) } function z(a, b, c, d) { if (100 === d) return d; var f, g, h = w(d, a); return c ? (f = a[h - 1], g = a[h], d - f > (g - f) / 2 ? g : f) : b[h - 1] ? a[h - 1] + e(d - a[h - 1], b[h - 1]) : d } function A(a, b, c) { var d; if ("number" == typeof b && (b = [b]), "[object Array]" !== Object.prototype.toString.call(b)) throw new Error("noUiSlider (" + _ + "): 'range' contains invalid value."); if (d = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a), !g(d) || !g(b[0])) throw new Error("noUiSlider (" + _ + "): 'range' value isn't numeric."); c.xPct.push(d), c.xVal.push(b[0]), d ? c.xSteps.push(!isNaN(b[1]) && b[1]) : isNaN(b[1]) || (c.xSteps[0] = b[1]), c.xHighestCompleteStep.push(0) } function B(a, b, c) { if (!b) return !0; c.xSteps[a] = t([c.xVal[a], c.xVal[a + 1]], b) / s(c.xPct[a], c.xPct[a + 1]); var d = (c.xVal[a + 1] - c.xVal[a]) / c.xNumSteps[a], e = Math.ceil(Number(d.toFixed(3)) - 1), f = c.xVal[a] + c.xNumSteps[a] * e; c.xHighestCompleteStep[a] = f } function C(a, b, c) { this.xPct = [], this.xVal = [], this.xSteps = [c || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = b; var d, e = []; for (d in a) a.hasOwnProperty(d) && e.push([a[d], d]); for (e.length && "object" == typeof e[0][0] ? e.sort(function (a, b) { return a[0][0] - b[0][0] }) : e.sort(function (a, b) { return a[0] - b[0] }), d = 0; d < e.length; d++)A(e[d][1], e[d][0], this); for (this.xNumSteps = this.xSteps.slice(0), d = 0; d < this.xNumSteps.length; d++)B(d, this.xNumSteps[d], this) } function D(b) { if (a(b)) return !0; throw new Error("noUiSlider (" + _ + "): 'format' requires 'to' and 'from' methods.") } function E(a, b) { if (!g(b)) throw new Error("noUiSlider (" + _ + "): 'step' is not numeric."); a.singleStep = b } function F(a, b) { if ("object" != typeof b || Array.isArray(b)) throw new Error("noUiSlider (" + _ + "): 'range' is not an object."); if (void 0 === b.min || void 0 === b.max) throw new Error("noUiSlider (" + _ + "): Missing 'min' or 'max' in 'range'."); if (b.min === b.max) throw new Error("noUiSlider (" + _ + "): 'range' 'min' and 'max' cannot be equal."); a.spectrum = new C(b, a.snap, a.singleStep) } function G(a, b) { if (b = j(b), !Array.isArray(b) || !b.length) throw new Error("noUiSlider (" + _ + "): 'start' option is incorrect."); a.handles = b.length, a.start = b } function H(a, b) { if (a.snap = b, "boolean" != typeof b) throw new Error("noUiSlider (" + _ + "): 'snap' option must be a boolean.") } function I(a, b) { if (a.animate = b, "boolean" != typeof b) throw new Error("noUiSlider (" + _ + "): 'animate' option must be a boolean.") } function J(a, b) { if (a.animationDuration = b, "number" != typeof b) throw new Error("noUiSlider (" + _ + "): 'animationDuration' option must be a number.") } function K(a, b) { var c, d = [!1]; if ("lower" === b ? b = [!0, !1] : "upper" === b && (b = [!1, !0]), !0 === b || !1 === b) { for (c = 1; c < a.handles; c++)d.push(b); d.push(!1) } else { if (!Array.isArray(b) || !b.length || b.length !== a.handles + 1) throw new Error("noUiSlider (" + _ + "): 'connect' option doesn't match handle count."); d = b } a.connect = d } function L(a, b) { switch (b) { case "horizontal": a.ort = 0; break; case "vertical": a.ort = 1; break; default: throw new Error("noUiSlider (" + _ + "): 'orientation' option is invalid.") } } function M(a, b) { if (!g(b)) throw new Error("noUiSlider (" + _ + "): 'margin' option must be numeric."); if (0 !== b && (a.margin = a.spectrum.getMargin(b), !a.margin)) throw new Error("noUiSlider (" + _ + "): 'margin' option is only supported on linear sliders.") } function N(a, b) { if (!g(b)) throw new Error("noUiSlider (" + _ + "): 'limit' option must be numeric."); if (a.limit = a.spectrum.getMargin(b), !a.limit || a.handles < 2) throw new Error("noUiSlider (" + _ + "): 'limit' option is only supported on linear sliders with 2 or more handles.") } function O(a, b) { if (!g(b)) throw new Error("noUiSlider (" + _ + "): 'padding' option must be numeric."); if (0 !== b) { if (a.padding = a.spectrum.getMargin(b), !a.padding) throw new Error("noUiSlider (" + _ + "): 'padding' option is only supported on linear sliders."); if (a.padding < 0) throw new Error("noUiSlider (" + _ + "): 'padding' option must be a positive number."); if (a.padding >= 50) throw new Error("noUiSlider (" + _ + "): 'padding' option must be less than half the range.") } } function P(a, b) { switch (b) { case "ltr": a.dir = 0; break; case "rtl": a.dir = 1; break; default: throw new Error("noUiSlider (" + _ + "): 'direction' option was not recognized.") } } function Q(a, b) { if ("string" != typeof b) throw new Error("noUiSlider (" + _ + "): 'behaviour' must be a string containing options."); var c = b.indexOf("tap") >= 0, d = b.indexOf("drag") >= 0, e = b.indexOf("fixed") >= 0, f = b.indexOf("snap") >= 0, g = b.indexOf("hover") >= 0; if (e) { if (2 !== a.handles) throw new Error("noUiSlider (" + _ + "): 'fixed' behaviour must be used with 2 handles"); M(a, a.start[1] - a.start[0]) } a.events = { tap: c || f, drag: d, fixed: e, snap: f, hover: g } } function R(a, b) { if (a.multitouch = b, "boolean" != typeof b) throw new Error("noUiSlider (" + _ + "): 'multitouch' option must be a boolean.") } function S(a, b) { if (!1 !== b) if (!0 === b) { a.tooltips = []; for (var c = 0; c < a.handles; c++)a.tooltips.push(!0) } else { if (a.tooltips = j(b), a.tooltips.length !== a.handles) throw new Error("noUiSlider (" + _ + "): must pass a formatter for all handles."); a.tooltips.forEach(function (a) { if ("boolean" != typeof a && ("object" != typeof a || "function" != typeof a.to)) throw new Error("noUiSlider (" + _ + "): 'tooltips' must be passed a formatter or 'false'.") }) } } function T(a, b) { a.ariaFormat = b, D(b) } function U(a, b) { a.format = b, D(b) } function V(a, b) { if (void 0 !== b && "string" != typeof b && !1 !== b) throw new Error("noUiSlider (" + _ + "): 'cssPrefix' must be a string or `false`."); a.cssPrefix = b } function W(a, b) { if (void 0 !== b && "object" != typeof b) throw new Error("noUiSlider (" + _ + "): 'cssClasses' must be an object."); if ("string" == typeof a.cssPrefix) { a.cssClasses = {}; for (var c in b) b.hasOwnProperty(c) && (a.cssClasses[c] = a.cssPrefix + b[c]) } else a.cssClasses = b } function X(a, b) { if (!0 !== b && !1 !== b) throw new Error("noUiSlider (" + _ + "): 'useRequestAnimationFrame' option should be true (default) or false."); a.useRequestAnimationFrame = b } function Y(a) { var b = { margin: 0, limit: 0, padding: 0, animate: !0, animationDuration: 300, ariaFormat: aa, format: aa }, c = { step: { r: !1, t: E }, start: { r: !0, t: G }, connect: { r: !0, t: K }, direction: { r: !0, t: P }, snap: { r: !1, t: H }, animate: { r: !1, t: I }, animationDuration: { r: !1, t: J }, range: { r: !0, t: F }, orientation: { r: !1, t: L }, margin: { r: !1, t: M }, limit: { r: !1, t: N }, padding: { r: !1, t: O }, behaviour: { r: !0, t: Q }, multitouch: { r: !0, t: R }, ariaFormat: { r: !1, t: T }, format: { r: !1, t: U }, tooltips: { r: !1, t: S }, cssPrefix: { r: !1, t: V }, cssClasses: { r: !1, t: W }, useRequestAnimationFrame: { r: !1, t: X } }, d = { connect: !1, direction: "ltr", behaviour: "tap", multitouch: !1, orientation: "horizontal", cssPrefix: "noUi-", cssClasses: { target: "target", base: "base", origin: "origin", handle: "handle", handleLower: "handle-lower", handleUpper: "handle-upper", horizontal: "horizontal", vertical: "vertical", background: "background", connect: "connect", ltr: "ltr", rtl: "rtl", draggable: "draggable", drag: "state-drag", tap: "state-tap", active: "active", tooltip: "tooltip", pips: "pips", pipsHorizontal: "pips-horizontal", pipsVertical: "pips-vertical", marker: "marker", markerHorizontal: "marker-horizontal", markerVertical: "marker-vertical", markerNormal: "marker-normal", markerLarge: "marker-large", markerSub: "marker-sub", value: "value", valueHorizontal: "value-horizontal", valueVertical: "value-vertical", valueNormal: "value-normal", valueLarge: "value-large", valueSub: "value-sub" }, useRequestAnimationFrame: !0 }; a.format && !a.ariaFormat && (a.ariaFormat = a.format), Object.keys(c).forEach(function (e) { if (void 0 === a[e] && void 0 === d[e]) { if (c[e].r) throw new Error("noUiSlider (" + _ + "): '" + e + "' is required."); return !0 } c[e].t(b, void 0 === a[e] ? d[e] : a[e]) }), b.pips = a.pips; var e = [["left", "top"], ["right", "bottom"]]; return b.style = e[b.dir][b.ort], b.styleOposite = e[b.dir ? 0 : 1][b.ort], b } function Z(a, e, g) { function k(a, b) { var c = wa.createElement("div"); return b && l(c, b), a.appendChild(c), c } function s(a, b) { var c = k(a, e.cssClasses.origin), d = k(c, e.cssClasses.handle); return d.setAttribute("data-handle", b), d.setAttribute("tabindex", "0"), d.setAttribute("role", "slider"), d.setAttribute("aria-orientation", e.ort ? "vertical" : "horizontal"), 0 === b ? l(d, e.cssClasses.handleLower) : b === e.handles - 1 && l(d, e.cssClasses.handleUpper), c } function t(a, b) { return !!b && k(a, e.cssClasses.connect) } function u(a, b) { ia = [], ja = [], ja.push(t(b, a[0])); for (var c = 0; c < e.handles; c++)ia.push(s(b, c)), ra[c] = c, ja.push(t(b, a[c + 1])) } function v(a) { l(a, e.cssClasses.target), 0 === e.dir ? l(a, e.cssClasses.ltr) : l(a, e.cssClasses.rtl), 0 === e.ort ? l(a, e.cssClasses.horizontal) : l(a, e.cssClasses.vertical), ha = k(a, e.cssClasses.base) } function w(a, b) { return !!e.tooltips[b] && k(a.firstChild, e.cssClasses.tooltip) } function x() { var a = ia.map(w); ea("update", function (b, c, d) { if (a[c]) { var f = b[c]; !0 !== e.tooltips[c] && (f = e.tooltips[c].to(d[c])), a[c].innerHTML = f } }) } function y() { ea("update", function (a, b, c, d, f) { ra.forEach(function (a) { var b = ia[a], d = S(qa, a, 0, !0, !0, !0), g = S(qa, a, 100, !0, !0, !0), h = f[a], i = e.ariaFormat.to(c[a]); b.children[0].setAttribute("aria-valuemin", d.toFixed(1)), b.children[0].setAttribute("aria-valuemax", g.toFixed(1)), b.children[0].setAttribute("aria-valuenow", h.toFixed(1)), b.children[0].setAttribute("aria-valuetext", i) }) }) } function z(a, b, c) { if ("range" === a || "steps" === a) return ta.xVal; if ("count" === a) { if (!b) throw new Error("noUiSlider (" + _ + "): 'values' required for mode 'count'."); var d, e = 100 / (b - 1), f = 0; for (b = []; (d = f++ * e) <= 100;)b.push(d); a = "positions" } return "positions" === a ? b.map(function (a) { return ta.fromStepping(c ? ta.getStep(a) : a) }) : "values" === a ? c ? b.map(function (a) { return ta.fromStepping(ta.getStep(ta.toStepping(a))) }) : b : void 0 } function A(a, b, c) { function e(a, b) { return (a + b).toFixed(7) / 1 } var f = {}, g = ta.xVal[0], h = ta.xVal[ta.xVal.length - 1], i = !1, j = !1, k = 0; return c = d(c.slice().sort(function (a, b) { return a - b })), c[0] !== g && (c.unshift(g), i = !0), c[c.length - 1] !== h && (c.push(h), j = !0), c.forEach(function (d, g) { var h, l, m, n, o, p, q, r, s, t, u = d, v = c[g + 1]; if ("steps" === b && (h = ta.xNumSteps[g]), h || (h = v - u), !1 !== u && void 0 !== v) for (h = Math.max(h, 1e-7), l = u; l <= v; l = e(l, h)) { for (n = ta.toStepping(l), o = n - k, r = o / a, s = Math.round(r), t = o / s, m = 1; m <= s; m += 1)p = k + m * t, f[p.toFixed(5)] = ["x", 0]; q = c.indexOf(l) > -1 ? 1 : "steps" === b ? 2 : 0, !g && i && (q = 0), l === v && j || (f[n.toFixed(5)] = [l, q]), k = n } }), f } function B(a, b, c) { function d(a, b) { var c = b === e.cssClasses.value, d = c ? j : m, f = c ? h : i; return b + " " + d[e.ort] + " " + f[a] } function f(a, f) { f[1] = f[1] && b ? b(f[0], f[1]) : f[1]; var h = k(g, !1); h.className = d(f[1], e.cssClasses.marker), h.style[e.style] = a + "%", f[1] && (h = k(g, !1), h.className = d(f[1], e.cssClasses.value), h.style[e.style] = a + "%", h.innerText = c.to(f[0])) } var g = wa.createElement("div"), h = [e.cssClasses.valueNormal, e.cssClasses.valueLarge, e.cssClasses.valueSub], i = [e.cssClasses.markerNormal, e.cssClasses.markerLarge, e.cssClasses.markerSub], j = [e.cssClasses.valueHorizontal, e.cssClasses.valueVertical], m = [e.cssClasses.markerHorizontal, e.cssClasses.markerVertical]; return l(g, e.cssClasses.pips), l(g, 0 === e.ort ? e.cssClasses.pipsHorizontal : e.cssClasses.pipsVertical), Object.keys(a).forEach(function (b) { f(b, a[b]) }), g } function C() { la && (b(la), la = null) } function D(a) { C(); var b = a.mode, c = a.density || 1, d = a.filter || !1, e = a.values || !1, f = a.stepped || !1, g = z(b, e, f), h = A(c, b, g), i = a.format || { to: Math.round }; return la = pa.appendChild(B(h, d, i)) } function E() { var a = ha.getBoundingClientRect(), b = "offset" + ["Width", "Height"][e.ort]; return 0 === e.ort ? a.width || ha[b] : a.height || ha[b] } function F(a, b, c, d) { var f = function (f) { return !pa.hasAttribute("disabled") && (!n(pa, e.cssClasses.tap) && (!!(f = G(f, d.pageOffset, d.target || b)) && (!(a === ma.start && void 0 !== f.buttons && f.buttons > 1) && ((!d.hover || !f.buttons) && (oa || f.preventDefault(), f.calcPoint = f.points[e.ort], void c(f, d)))))) }, g = []; return a.split(" ").forEach(function (a) { b.addEventListener(a, f, !!oa && { passive: !0 }), g.push([a, f]) }), g } function G(a, b, c) { var d, f, g = 0 === a.type.indexOf("touch"), h = 0 === a.type.indexOf("mouse"), i = 0 === a.type.indexOf("pointer"); if (0 === a.type.indexOf("MSPointer") && (i = !0), g && e.multitouch) { var j = function (a) { return a.target === c || c.contains(a.target) }; if ("touchstart" === a.type) { var k = Array.prototype.filter.call(a.touches, j); if (k.length > 1) return !1; d = k[0].pageX, f = k[0].pageY } else { var l = Array.prototype.find.call(a.changedTouches, j); if (!l) return !1; d = l.pageX, f = l.pageY } } else if (g) { if (a.touches.length > 1) return !1; d = a.changedTouches[0].pageX, f = a.changedTouches[0].pageY } return b = b || o(wa), (h || i) && (d = a.clientX + b.x, f = a.clientY + b.y), a.pageOffset = b, a.points = [d, f], a.cursor = h || i, a } function H(a) { var b = a - f(ha, e.ort), c = 100 * b / E(); return e.dir ? 100 - c : c } function I(a) { var b = 100, c = !1; return ia.forEach(function (d, e) { if (!d.hasAttribute("disabled")) { var f = Math.abs(qa[e] - a); f < b && (c = e, b = f) } }), c } function J(a, b, c, d) { var e = c.slice(), f = [!a, a], g = [a, !a]; d = d.slice(), a && d.reverse(), d.length > 1 ? d.forEach(function (a, c) { var d = S(e, a, e[a] + b, f[c], g[c], !1); !1 === d ? b = 0 : (b = d - e[a], e[a] = d) }) : f = g = [!0]; var h = !1; d.forEach(function (a, d) { h = W(a, c[a] + b, f[d], g[d]) || h }), h && d.forEach(function (a) { K("update", a), K("slide", a) }) } function K(a, b, c) { Object.keys(va).forEach(function (d) { var f = d.split(".")[0]; a === f && va[d].forEach(function (a) { a.call(ka, ua.map(e.format.to), b, ua.slice(), c || !1, qa.slice()) }) }) } function L(a, b) { "mouseout" === a.type && "HTML" === a.target.nodeName && null === a.relatedTarget && N(a, b) } function M(a, b) { if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === a.buttons && 0 !== b.buttonsProperty) return N(a, b); var c = (e.dir ? -1 : 1) * (a.calcPoint - b.startCalcPoint); J(c > 0, 100 * c / b.baseSize, b.locations, b.handleNumbers) } function N(a, b) { b.handle && (m(b.handle, e.cssClasses.active), sa -= 1), b.listeners.forEach(function (a) { xa.removeEventListener(a[0], a[1]) }), 0 === sa && (m(pa, e.cssClasses.drag), V(), a.cursor && (ya.style.cursor = "", ya.removeEventListener("selectstart", c))), b.handleNumbers.forEach(function (a) { K("change", a), K("set", a), K("end", a) }) } function O(a, b) { var d; if (1 === b.handleNumbers.length) { var f = ia[b.handleNumbers[0]]; if (f.hasAttribute("disabled")) return !1; d = f.children[0], sa += 1, l(d, e.cssClasses.active) } a.stopPropagation(); var g = [], h = F(ma.move, xa, M, { target: a.target, handle: d, listeners: g, startCalcPoint: a.calcPoint, baseSize: E(), pageOffset: a.pageOffset, handleNumbers: b.handleNumbers, buttonsProperty: a.buttons, locations: qa.slice() }), i = F(ma.end, xa, N, { target: a.target, handle: d, listeners: g, handleNumbers: b.handleNumbers }), j = F("mouseout", xa, L, { target: a.target, handle: d, listeners: g, handleNumbers: b.handleNumbers }); g.push.apply(g, h.concat(i, j)), a.cursor && (ya.style.cursor = getComputedStyle(a.target).cursor, ia.length > 1 && l(pa, e.cssClasses.drag), ya.addEventListener("selectstart", c, !1)), b.handleNumbers.forEach(function (a) { K("start", a) }) } function P(a) { a.stopPropagation(); var b = H(a.calcPoint), c = I(b); if (!1 === c) return !1; e.events.snap || h(pa, e.cssClasses.tap, e.animationDuration), W(c, b, !0, !0), V(), K("slide", c, !0), K("update", c, !0), K("change", c, !0), K("set", c, !0), e.events.snap && O(a, { handleNumbers: [c] }) } function Q(a) { var b = H(a.calcPoint), c = ta.getStep(b), d = ta.fromStepping(c); Object.keys(va).forEach(function (a) { "hover" === a.split(".")[0] && va[a].forEach(function (a) { a.call(ka, d) }) }) } function R(a) { a.fixed || ia.forEach(function (a, b) { F(ma.start, a.children[0], O, { handleNumbers: [b] }) }), a.tap && F(ma.start, ha, P, {}), a.hover && F(ma.move, ha, Q, { hover: !0 }), a.drag && ja.forEach(function (b, c) { if (!1 !== b && 0 !== c && c !== ja.length - 1) { var d = ia[c - 1], f = ia[c], g = [b]; l(b, e.cssClasses.draggable), a.fixed && (g.push(d.children[0]), g.push(f.children[0])), g.forEach(function (a) { F(ma.start, a, O, { handles: [d, f], handleNumbers: [c - 1, c] }) }) } }) } function S(a, b, c, d, f, g) { return ia.length > 1 && (d && b > 0 && (c = Math.max(c, a[b - 1] + e.margin)), f && b < ia.length - 1 && (c = Math.min(c, a[b + 1] - e.margin))), ia.length > 1 && e.limit && (d && b > 0 && (c = Math.min(c, a[b - 1] + e.limit)), f && b < ia.length - 1 && (c = Math.max(c, a[b + 1] - e.limit))), e.padding && (0 === b && (c = Math.max(c, e.padding)), b === ia.length - 1 && (c = Math.min(c, 100 - e.padding))), c = ta.getStep(c), !((c = i(c)) === a[b] && !g) && c } function T(a) { return a + "%" } function U(a, b) { qa[a] = b, ua[a] = ta.fromStepping(b); var c = function () { ia[a].style[e.style] = T(b), X(a), X(a + 1) }; window.requestAnimationFrame && e.useRequestAnimationFrame ? window.requestAnimationFrame(c) : c() } function V() { ra.forEach(function (a) { var b = qa[a] > 50 ? -1 : 1, c = 3 + (ia.length + b * a); ia[a].childNodes[0].style.zIndex = c }) } function W(a, b, c, d) { return !1 !== (b = S(qa, a, b, c, d, !1)) && (U(a, b), !0) } function X(a) { if (ja[a]) { var b = 0, c = 100; 0 !== a && (b = qa[a - 1]), a !== ja.length - 1 && (c = qa[a]), ja[a].style[e.style] = T(b), ja[a].style[e.styleOposite] = T(100 - c) } } function Z(a, b) { null !== a && !1 !== a && ("number" == typeof a && (a = String(a)), !1 === (a = e.format.from(a)) || isNaN(a) || W(b, ta.toStepping(a), !1, !1)) } function $(a, b) { var c = j(a), d = void 0 === qa[0]; b = void 0 === b || !!b, c.forEach(Z), e.animate && !d && h(pa, e.cssClasses.tap, e.animationDuration), ra.forEach(function (a) { W(a, qa[a], !0, !1) }), V(), ra.forEach(function (a) { K("update", a), null !== c[a] && b && K("set", a) }) } function aa(a) { $(e.start, a) } function ba() { var a = ua.map(e.format.to); return 1 === a.length ? a[0] : a } function ca() { for (var a in e.cssClasses) e.cssClasses.hasOwnProperty(a) && m(pa, e.cssClasses[a]); for (; pa.firstChild;)pa.removeChild(pa.firstChild); delete pa.noUiSlider } function da() { return qa.map(function (a, b) { var c = ta.getNearbySteps(a), d = ua[b], e = c.thisStep.step, f = null; !1 !== e && d + e > c.stepAfter.startValue && (e = c.stepAfter.startValue - d), f = d > c.thisStep.startValue ? c.thisStep.step : !1 !== c.stepBefore.step && d - c.stepBefore.highestStep, 100 === a ? e = null : 0 === a && (f = null); var g = ta.countStepDecimals(); return null !== e && !1 !== e && (e = Number(e.toFixed(g))), null !== f && !1 !== f && (f = Number(f.toFixed(g))), [f, e] }) } function ea(a, b) { va[a] = va[a] || [], va[a].push(b), "update" === a.split(".")[0] && ia.forEach(function (a, b) { K("update", b) }) } function fa(a) { var b = a && a.split(".")[0], c = b && a.substring(b.length); Object.keys(va).forEach(function (a) { var d = a.split(".")[0], e = a.substring(d.length); b && b !== d || c && c !== e || delete va[a] }) } function ga(a, b) { var c = ba(), d = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"]; d.forEach(function (b) { void 0 !== a[b] && (g[b] = a[b]) }); var f = Y(g); d.forEach(function (b) { void 0 !== a[b] && (e[b] = f[b]) }), ta = f.spectrum, e.margin = f.margin, e.limit = f.limit, e.padding = f.padding, e.pips && D(e.pips), qa = [], $(a.start || c, b) } var ha, ia, ja, ka, la, ma = p(), na = r(), oa = na && q(), pa = a, qa = [], ra = [], sa = 0, ta = e.spectrum, ua = [], va = {}, wa = a.ownerDocument, xa = wa.documentElement, ya = wa.body; if (pa.noUiSlider) throw new Error("noUiSlider (" + _ + "): Slider was already initialized."); return v(pa), u(e.connect, ha), ka = { destroy: ca, steps: da, on: ea, off: fa, get: ba, set: $, reset: aa, __moveHandles: function (a, b, c) { J(a, b, qa, c) }, options: g, updateOptions: ga, target: pa, removePips: C, pips: D }, R(e.events), $(e.start), e.pips && D(e.pips), e.tooltips && x(), y(), ka } function $(a, b) { if (!a || !a.nodeName) throw new Error("noUiSlider (" + _ + "): create requires a single element, got: " + a); var c = Y(b, a), d = Z(a, c, b); return a.noUiSlider = d, d } var _ = "10.1.0"; C.prototype.getMargin = function (a) { var b = this.xNumSteps[0]; if (b && a / b % 1 != 0) throw new Error("noUiSlider (" + _ + "): 'limit', 'margin' and 'padding' must be divisible by step."); return 2 === this.xPct.length && t(this.xVal, a) }, C.prototype.toStepping = function (a) { return a = x(this.xVal, this.xPct, a) }, C.prototype.fromStepping = function (a) { return y(this.xVal, this.xPct, a) }, C.prototype.getStep = function (a) { return a = z(this.xPct, this.xSteps, this.snap, a) }, C.prototype.getNearbySteps = function (a) { var b = w(a, this.xPct); return { stepBefore: { startValue: this.xVal[b - 2], step: this.xNumSteps[b - 2], highestStep: this.xHighestCompleteStep[b - 2] }, thisStep: { startValue: this.xVal[b - 1], step: this.xNumSteps[b - 1], highestStep: this.xHighestCompleteStep[b - 1] }, stepAfter: { startValue: this.xVal[b - 0], step: this.xNumSteps[b - 0], highestStep: this.xHighestCompleteStep[b - 0] } } }, C.prototype.countStepDecimals = function () { var a = this.xNumSteps.map(k); return Math.max.apply(null, a) }, C.prototype.convert = function (a) { return this.getStep(this.toStepping(a)) }; var aa = { to: function (a) { return void 0 !== a && a.toFixed(2) }, from: Number }; return { version: _, create: $ } });