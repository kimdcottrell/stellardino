import {
  G,
  _,
  k,
  l
} from "./chunk-3KBIWU5U.js";
import "./chunk-EQCVQC35.js";

// node_modules/.deno/preact-render-to-string@6.5.13/node_modules/preact-render-to-string/dist/index.module.js
var n = /[\s\n\\/='"\0<>]/;
var o = /^(xlink|xmlns|xml)([A-Z])/;
var i = /^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/;
var a = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/;
var c = /* @__PURE__ */ new Set(["draggable", "spellcheck"]);
var s = /["&<]/;
function l2(e) {
  if (0 === e.length || false === s.test(e)) return e;
  for (var t = 0, r = 0, n2 = "", o2 = ""; r < e.length; r++) {
    switch (e.charCodeAt(r)) {
      case 34:
        o2 = "&quot;";
        break;
      case 38:
        o2 = "&amp;";
        break;
      case 60:
        o2 = "&lt;";
        break;
      default:
        continue;
    }
    r !== t && (n2 += e.slice(t, r)), n2 += o2, t = r + 1;
  }
  return r !== t && (n2 += e.slice(t, r)), n2;
}
var u = {};
var f = /* @__PURE__ */ new Set(["animation-iteration-count", "border-image-outset", "border-image-slice", "border-image-width", "box-flex", "box-flex-group", "box-ordinal-group", "column-count", "fill-opacity", "flex", "flex-grow", "flex-negative", "flex-order", "flex-positive", "flex-shrink", "flood-opacity", "font-weight", "grid-column", "grid-row", "line-clamp", "line-height", "opacity", "order", "orphans", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-miterlimit", "stroke-opacity", "stroke-width", "tab-size", "widows", "z-index", "zoom"]);
var p = /[A-Z]/g;
function h(e) {
  var t = "";
  for (var r in e) {
    var n2 = e[r];
    if (null != n2 && "" !== n2) {
      var o2 = "-" == r[0] ? r : u[r] || (u[r] = r.replace(p, "-$&").toLowerCase()), i2 = ";";
      "number" != typeof n2 || o2.startsWith("--") || f.has(o2) || (i2 = "px;"), t = t + o2 + ":" + n2 + i2;
    }
  }
  return t || void 0;
}
function d() {
  this.__d = true;
}
function v(e, t) {
  return { __v: e, context: t, props: e.props, setState: d, forceUpdate: d, __d: true, __h: new Array(0) };
}
function _2(e, t, r) {
  if (!e.s) {
    if (r instanceof m) {
      if (!r.s) return void (r.o = _2.bind(null, e, t));
      1 & t && (t = r.s), r = r.v;
    }
    if (r && r.then) return void r.then(_2.bind(null, e, t), _2.bind(null, e, 2));
    e.s = t, e.v = r;
    const n2 = e.o;
    n2 && n2(e);
  }
}
var m = function() {
  function e() {
  }
  return e.prototype.then = function(t, r) {
    var n2 = new e(), o2 = this.s;
    if (o2) {
      var i2 = 1 & o2 ? t : r;
      if (i2) {
        try {
          _2(n2, 1, i2(this.v));
        } catch (e2) {
          _2(n2, 2, e2);
        }
        return n2;
      }
      return this;
    }
    return this.o = function(e2) {
      try {
        var o3 = e2.v;
        1 & e2.s ? _2(n2, 1, t ? t(o3) : o3) : r ? _2(n2, 1, r(o3)) : _2(n2, 2, o3);
      } catch (e3) {
        _2(n2, 2, e3);
      }
    }, n2;
  }, e;
}();
function y(e) {
  return e instanceof m && 1 & e.s;
}
function g(e, t, r) {
  for (var n2; ; ) {
    var o2 = e();
    if (y(o2) && (o2 = o2.v), !o2) return i2;
    if (o2.then) {
      n2 = 0;
      break;
    }
    var i2 = r();
    if (i2 && i2.then) {
      if (!y(i2)) {
        n2 = 1;
        break;
      }
      i2 = i2.s;
    }
    if (t) {
      var a2 = t();
      if (a2 && a2.then && !y(a2)) {
        n2 = 2;
        break;
      }
    }
  }
  var c2 = new m(), s2 = _2.bind(null, c2, 2);
  return (0 === n2 ? o2.then(u2) : 1 === n2 ? i2.then(l3) : a2.then(f2)).then(void 0, s2), c2;
  function l3(n3) {
    i2 = n3;
    do {
      if (t && (a2 = t()) && a2.then && !y(a2)) return void a2.then(f2).then(void 0, s2);
      if (!(o2 = e()) || y(o2) && !o2.v) return void _2(c2, 1, i2);
      if (o2.then) return void o2.then(u2).then(void 0, s2);
      y(i2 = r()) && (i2 = i2.v);
    } while (!i2 || !i2.then);
    i2.then(l3).then(void 0, s2);
  }
  function u2(e2) {
    e2 ? (i2 = r()) && i2.then ? i2.then(l3).then(void 0, s2) : l3(i2) : _2(c2, 1, i2);
  }
  function f2() {
    (o2 = e()) ? o2.then ? o2.then(u2).then(void 0, s2) : u2(o2) : _2(c2, 1, i2);
  }
}
function b(e, t) {
  try {
    var r = e();
  } catch (e2) {
    return t(true, e2);
  }
  return r && r.then ? r.then(t.bind(null, false), t.bind(null, true)) : t(false, r);
}
var k2;
var w;
var x;
var C;
var A = function(n2, o2) {
  try {
    var i2 = l.__s;
    l.__s = true, k2 = l.__b, w = l.diffed, x = l.__r, C = l.unmount;
    var a2 = _(k, null);
    return a2.__k = [n2], Promise.resolve(b(function() {
      return Promise.resolve(U(n2, o2 || S, false, void 0, a2, true, void 0)).then(function(e) {
        var t, r = function() {
          if (E(e)) {
            var r2 = function() {
              var e2 = o3.join(j);
              return t = 1, e2;
            }, n3 = 0, o3 = e, i3 = g(function() {
              return !!o3.some(function(e2) {
                return e2 && "function" == typeof e2.then;
              }) && n3++ < 25;
            }, void 0, function() {
              return Promise.resolve(Promise.all(o3)).then(function(e2) {
                o3 = e2.flat();
              });
            });
            return i3 && i3.then ? i3.then(r2) : r2();
          }
        }();
        return r && r.then ? r.then(function(r2) {
          return t ? r2 : e;
        }) : t ? r : e;
      });
    }, function(t, r) {
      if (l.__c && l.__c(n2, L), l.__s = i2, L.length = 0, t) throw r;
      return r;
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};
var S = {};
var L = [];
var E = Array.isArray;
var T = Object.assign;
var j = "";
function P(e, t) {
  var r, n2 = e.type, o2 = true;
  return e.__c ? (o2 = false, (r = e.__c).state = r.__s) : r = new n2(e.props, t), e.__c = r, r.__v = e, r.props = e.props, r.context = t, r.__d = true, null == r.state && (r.state = S), null == r.__s && (r.__s = r.state), n2.getDerivedStateFromProps ? r.state = T({}, r.state, n2.getDerivedStateFromProps(r.props, r.state)) : o2 && r.componentWillMount ? (r.componentWillMount(), r.state = r.__s !== r.state ? r.__s : r.state) : !o2 && r.componentWillUpdate && r.componentWillUpdate(), x && x(e), r.render(r.props, r.state, t);
}
function U(t, s2, u2, f2, p2, d2, _3) {
  if (null == t || true === t || false === t || t === j) return j;
  var m2 = typeof t;
  if ("object" != m2) return "function" == m2 ? j : "string" == m2 ? l2(t) : t + j;
  if (E(t)) {
    var y2, g2 = j;
    p2.__k = t;
    for (var b2 = t.length, A2 = 0; A2 < b2; A2++) {
      var L2 = t[A2];
      if (null != L2 && "boolean" != typeof L2) {
        var D, F = U(L2, s2, u2, f2, p2, d2, _3);
        "string" == typeof F ? g2 += F : (y2 || (y2 = new Array(b2)), g2 && y2.push(g2), g2 = j, E(F) ? (D = y2).push.apply(D, F) : y2.push(F));
      }
    }
    return y2 ? (g2 && y2.push(g2), y2) : g2;
  }
  if (void 0 !== t.constructor) return j;
  t.__ = p2, k2 && k2(t);
  var M = t.type, W = t.props;
  if ("function" == typeof M) {
    var $, z, H, N = s2;
    if (M === k) {
      if ("tpl" in W) {
        for (var q = j, B = 0; B < W.tpl.length; B++) if (q += W.tpl[B], W.exprs && B < W.exprs.length) {
          var I = W.exprs[B];
          if (null == I) continue;
          "object" != typeof I || void 0 !== I.constructor && !E(I) ? q += I : q += U(I, s2, u2, f2, t, d2, _3);
        }
        return q;
      }
      if ("UNSTABLE_comment" in W) return "<!--" + l2(W.UNSTABLE_comment) + "-->";
      z = W.children;
    } else {
      if (null != ($ = M.contextType)) {
        var O = s2[$.__c];
        N = O ? O.props.value : $.__;
      }
      var R = M.prototype && "function" == typeof M.prototype.render;
      if (R) z = P(t, N), H = t.__c;
      else {
        t.__c = H = v(t, N);
        for (var V = 0; H.__d && V++ < 25; ) H.__d = false, x && x(t), z = M.call(H, W, N);
        H.__d = true;
      }
      if (null != H.getChildContext && (s2 = T({}, s2, H.getChildContext())), R && l.errorBoundaries && (M.getDerivedStateFromError || H.componentDidCatch)) {
        z = null != z && z.type === k && null == z.key && null == z.props.tpl ? z.props.children : z;
        try {
          return U(z, s2, u2, f2, t, d2, _3);
        } catch (e) {
          return M.getDerivedStateFromError && (H.__s = M.getDerivedStateFromError(e)), H.componentDidCatch && H.componentDidCatch(e, S), H.__d ? (z = P(t, s2), null != (H = t.__c).getChildContext && (s2 = T({}, s2, H.getChildContext())), U(z = null != z && z.type === k && null == z.key && null == z.props.tpl ? z.props.children : z, s2, u2, f2, t, d2, _3)) : j;
        } finally {
          w && w(t), C && C(t);
        }
      }
    }
    z = null != z && z.type === k && null == z.key && null == z.props.tpl ? z.props.children : z;
    try {
      var K = U(z, s2, u2, f2, t, d2, _3);
      return w && w(t), l.unmount && l.unmount(t), K;
    } catch (r) {
      if (!d2 && _3 && _3.onError) {
        var G2 = _3.onError(r, t, function(e, t2) {
          return U(e, s2, u2, f2, t2, d2, _3);
        });
        if (void 0 !== G2) return G2;
        var J = l.__e;
        return J && J(r, t), j;
      }
      if (!d2) throw r;
      if (!r || "function" != typeof r.then) throw r;
      return r.then(function e() {
        try {
          return U(z, s2, u2, f2, t, d2, _3);
        } catch (r2) {
          if (!r2 || "function" != typeof r2.then) throw r2;
          return r2.then(function() {
            return U(z, s2, u2, f2, t, d2, _3);
          }, e);
        }
      });
    }
  }
  var Q, X = "<" + M, Y = j;
  for (var ee in W) {
    var te = W[ee];
    if ("function" != typeof te || "class" === ee || "className" === ee) {
      switch (ee) {
        case "children":
          Q = te;
          continue;
        case "key":
        case "ref":
        case "__self":
        case "__source":
          continue;
        case "htmlFor":
          if ("for" in W) continue;
          ee = "for";
          break;
        case "className":
          if ("class" in W) continue;
          ee = "class";
          break;
        case "defaultChecked":
          ee = "checked";
          break;
        case "defaultSelected":
          ee = "selected";
          break;
        case "defaultValue":
        case "value":
          switch (ee = "value", M) {
            case "textarea":
              Q = te;
              continue;
            case "select":
              f2 = te;
              continue;
            case "option":
              f2 != te || "selected" in W || (X += " selected");
          }
          break;
        case "dangerouslySetInnerHTML":
          Y = te && te.__html;
          continue;
        case "style":
          "object" == typeof te && (te = h(te));
          break;
        case "acceptCharset":
          ee = "accept-charset";
          break;
        case "httpEquiv":
          ee = "http-equiv";
          break;
        default:
          if (o.test(ee)) ee = ee.replace(o, "$1:$2").toLowerCase();
          else {
            if (n.test(ee)) continue;
            "-" !== ee[4] && !c.has(ee) || null == te ? u2 ? a.test(ee) && (ee = "panose1" === ee ? "panose-1" : ee.replace(/([A-Z])/g, "-$1").toLowerCase()) : i.test(ee) && (ee = ee.toLowerCase()) : te += j;
          }
      }
      null != te && false !== te && (X = true === te || te === j ? X + " " + ee : X + " " + ee + '="' + ("string" == typeof te ? l2(te) : te + j) + '"');
    }
  }
  if (n.test(M)) throw new Error(M + " is not a valid HTML tag name in " + X + ">");
  if (Y || ("string" == typeof Q ? Y = l2(Q) : null != Q && false !== Q && true !== Q && (Y = U(Q, s2, "svg" === M || "foreignObject" !== M && u2, f2, t, d2, _3))), w && w(t), C && C(t), !Y && Z.has(M)) return X + "/>";
  var re = "</" + M + ">", ne = X + ">";
  return E(Y) ? [ne].concat(Y, [re]) : "string" != typeof Y ? [ne, Y, re] : ne + Y + re;
}
var Z = /* @__PURE__ */ new Set(["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]);

// node_modules/.deno/preact-iso@2.9.0/node_modules/preact-iso/src/prerender.js
var vnodeHook;
var old = l.vnode;
l.vnode = (vnode) => {
  if (old) old(vnode);
  if (vnodeHook) vnodeHook(vnode);
};
async function prerender(vnode, options) {
  options = options || {};
  const props = options.props;
  if (typeof vnode === "function") {
    vnode = _(vnode, props);
  } else if (props) {
    vnode = G(vnode, props);
  }
  let links = /* @__PURE__ */ new Set();
  vnodeHook = ({ type, props: props2 }) => {
    if (type === "a" && props2 && props2.href && (!props2.target || props2.target === "_self")) {
      links.add(props2.href);
    }
  };
  try {
    let html = await A(vnode);
    html += `<script type="isodata"><\/script>`;
    return { html, links };
  } finally {
    vnodeHook = null;
  }
}
function locationStub(path) {
  globalThis.location = {};
  const u2 = new URL(path, "http://localhost");
  for (const i2 in u2) {
    try {
      globalThis.location[i2] = /to[A-Z]/.test(i2) ? u2[i2].bind(u2) : String(u2[i2]);
    } catch {
    }
  }
}
export {
  prerender as default,
  locationStub
};
//# sourceMappingURL=prerender-ZNSK6VQZ.js.map
