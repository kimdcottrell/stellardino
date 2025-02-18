import {
  A,
  F,
  P,
  T,
  _,
  b as b2,
  g as g2,
  h,
  p,
  q,
  x as x2,
  y
} from "./chunk-KWIGLLDT.js";
import {
  D,
  E,
  G,
  H,
  J,
  b,
  g,
  k,
  l,
  x
} from "./chunk-PRDEP7ZQ.js";
import "./chunk-EQCVQC35.js";

// node_modules/.deno/preact@10.25.4/node_modules/preact/compat/dist/compat.module.js
function g3(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function E2(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return true;
  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return true;
  return false;
}
function C(n, t) {
  var e = t(), r = h({ t: { __: e, u: t } }), u = r[0].t, o = r[1];
  return _(function() {
    u.__ = e, u.u = t, x3(u) && o({ t: u });
  }, [n, e, t]), y(function() {
    return x3(u) && o({ t: u }), n(function() {
      x3(u) && o({ t: u });
    });
  }, [n]), e;
}
function x3(n) {
  var t, e, r = n.u, u = n.__;
  try {
    var o = r();
    return !((t = u) === (e = o) && (0 !== t || 1 / t == 1 / e) || t != t && e != e);
  } catch (n2) {
    return true;
  }
}
function R(n) {
  n();
}
function w(n) {
  return n;
}
function k2() {
  return [false, R];
}
var I = _;
function N(n, t) {
  this.props = n, this.context = t;
}
function M(n, e) {
  function r(n2) {
    var t = this.props.ref, r2 = t == n2.ref;
    return !r2 && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n2) || !r2 : E2(this.props, n2);
  }
  function u(e2) {
    return this.shouldComponentUpdate = r, g(n, e2);
  }
  return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = true, u.__f = true, u;
}
(N.prototype = new x()).isPureReactComponent = true, N.prototype.shouldComponentUpdate = function(n, t) {
  return E2(this.props, n) || E2(this.state, t);
};
var T2 = l.__b;
l.__b = function(n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), T2 && T2(n);
};
var A2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function D2(n) {
  function t(t2) {
    var e = g3({}, t2);
    return delete e.ref, n(e, t2.ref || null);
  }
  return t.$$typeof = A2, t.render = t, t.prototype.isReactComponent = t.__f = true, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
var L = function(n, t) {
  return null == n ? null : H(H(n).map(t));
};
var O = { map: L, forEach: L, count: function(n) {
  return n ? H(n).length : 0;
}, only: function(n) {
  var t = H(n);
  if (1 !== t.length) throw "Children.only";
  return t[0];
}, toArray: H };
var F2 = l.__e;
l.__e = function(n, t, e, r) {
  if (n.then) {
    for (var u, o = t; o = o.__; ) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
  }
  F2(n, t, e, r);
};
var U = l.unmount;
function V(n, t, e) {
  return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function(n2) {
    "function" == typeof n2.__c && n2.__c();
  }), n.__c.__H = null), null != (n = g3({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function(n2) {
    return V(n2, t, e);
  })), n;
}
function W(n, t, e) {
  return n && e && (n.__v = null, n.__k = n.__k && n.__k.map(function(n2) {
    return W(n2, t, e);
  }), n.__c && n.__c.__P === t && (n.__e && e.appendChild(n.__e), n.__c.__e = true, n.__c.__P = e)), n;
}
function P2() {
  this.__u = 0, this.o = null, this.__b = null;
}
function j(n) {
  var t = n.__.__c;
  return t && t.__a && t.__a(n);
}
function z(n) {
  var e, r, u;
  function o(o2) {
    if (e || (e = n()).then(function(n2) {
      r = n2.default || n2;
    }, function(n2) {
      u = n2;
    }), u) throw u;
    if (!r) throw e;
    return g(r, o2);
  }
  return o.displayName = "Lazy", o.__f = true, o;
}
function B() {
  this.i = null, this.l = null;
}
l.unmount = function(n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && 32 & n.__u && (n.type = null), U && U(n);
}, (P2.prototype = new x()).__c = function(n, t) {
  var e = t.__c, r = this;
  null == r.o && (r.o = []), r.o.push(e);
  var u = j(r.__v), o = false, i = function() {
    o || (o = true, e.__R = null, u ? u(c) : c());
  };
  e.__R = i;
  var c = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var n2 = r.state.__a;
        r.__v.__k[0] = W(n2, n2.__c.__P, n2.__c.__O);
      }
      var t2;
      for (r.setState({ __a: r.__b = null }); t2 = r.o.pop(); ) t2.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), n.then(i, i);
}, P2.prototype.componentWillUnmount = function() {
  this.o = [];
}, P2.prototype.render = function(n, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), o = this.__v.__k[0].__c;
      this.__v.__k[0] = V(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  var i = e.__a && g(k, null, n.fallback);
  return i && (i.__u &= -33), [g(k, null, e.__a ? null : n.children), i];
};
var H2 = function(n, t, e) {
  if (++e[1] === e[0] && n.l.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for (e = n.i; e; ) {
    for (; e.length > 3; ) e.pop()();
    if (e[1] < e[0]) break;
    n.i = e = e[2];
  }
};
function Z(n) {
  return this.getChildContext = function() {
    return n.context;
  }, n.children;
}
function Y(n) {
  var e = this, r = n.h;
  e.componentWillUnmount = function() {
    D(null, e.v), e.v = null, e.h = null;
  }, e.h && e.h !== r && e.componentWillUnmount(), e.v || (e.h = r, e.v = { nodeType: 1, parentNode: r, childNodes: [], contains: function() {
    return true;
  }, appendChild: function(n2) {
    this.childNodes.push(n2), e.h.appendChild(n2);
  }, insertBefore: function(n2, t) {
    this.childNodes.push(n2), e.h.insertBefore(n2, t);
  }, removeChild: function(n2) {
    this.childNodes.splice(this.childNodes.indexOf(n2) >>> 1, 1), e.h.removeChild(n2);
  } }), D(g(Z, { context: e.context }, n.__v), e.v);
}
function $(n, e) {
  var r = g(Y, { __v: n, h: e });
  return r.containerInfo = e, r;
}
(B.prototype = new x()).__a = function(n) {
  var t = this, e = j(t.__v), r = t.l.get(n);
  return r[0]++, function(u) {
    var o = function() {
      t.props.revealOrder ? (r.push(u), H2(t, n, r)) : u();
    };
    e ? e(o) : o();
  };
}, B.prototype.render = function(n) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = H(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
  for (var e = t.length; e--; ) this.l.set(t[e], this.i = [1, 0, this.i]);
  return n.children;
}, B.prototype.componentDidUpdate = B.prototype.componentDidMount = function() {
  var n = this;
  this.l.forEach(function(t, e) {
    H2(n, e, t);
  });
};
var q2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
var G2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var J2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
var K = /[A-Z0-9]/g;
var Q = "undefined" != typeof document;
var X = function(n) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n);
};
function nn(n, t, e) {
  return null == t.__k && (t.textContent = ""), D(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function tn(n, t, e) {
  return E(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
x.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(x.prototype, t, { configurable: true, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(n) {
    Object.defineProperty(this, t, { configurable: true, writable: true, value: n });
  } });
});
var en = l.event;
function rn() {
}
function un() {
  return this.cancelBubble;
}
function on() {
  return this.defaultPrevented;
}
l.event = function(n) {
  return en && (n = en(n)), n.persist = rn, n.isPropagationStopped = un, n.isDefaultPrevented = on, n.nativeEvent = n;
};
var cn;
var ln = { enumerable: false, configurable: true, get: function() {
  return this.class;
} };
var fn = l.vnode;
l.vnode = function(n) {
  "string" == typeof n.type && function(n2) {
    var t = n2.props, e = n2.type, u = {}, o = -1 === e.indexOf("-");
    for (var i in t) {
      var c = t[i];
      if (!("value" === i && "defaultValue" in t && null == c || Q && "children" === i && "noscript" === e || "class" === i || "className" === i)) {
        var l2 = i.toLowerCase();
        "defaultValue" === i && "value" in t && null == t.value ? i = "value" : "download" === i && true === c ? c = "" : "translate" === l2 && "no" === c ? c = false : "o" === l2[0] && "n" === l2[1] ? "ondoubleclick" === l2 ? i = "ondblclick" : "onchange" !== l2 || "input" !== e && "textarea" !== e || X(t.type) ? "onfocus" === l2 ? i = "onfocusin" : "onblur" === l2 ? i = "onfocusout" : J2.test(i) && (i = l2) : l2 = i = "oninput" : o && G2.test(i) ? i = i.replace(K, "-$&").toLowerCase() : null === c && (c = void 0), "oninput" === l2 && u[i = l2] && (i = "oninputCapture"), u[i] = c;
      }
    }
    "select" == e && u.multiple && Array.isArray(u.value) && (u.value = H(t.children).forEach(function(n3) {
      n3.props.selected = -1 != u.value.indexOf(n3.props.value);
    })), "select" == e && null != u.defaultValue && (u.value = H(t.children).forEach(function(n3) {
      n3.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n3.props.value) : u.defaultValue == n3.props.value;
    })), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", ln)) : (t.className && !t.class || t.class && t.className) && (u.class = u.className = t.className), n2.props = u;
  }(n), n.$$typeof = q2, fn && fn(n);
};
var an = l.__r;
l.__r = function(n) {
  an && an(n), cn = n.__c;
};
var sn = l.diffed;
l.diffed = function(n) {
  sn && sn(n);
  var t = n.props, e = n.__e;
  null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value), cn = null;
};
var hn = { ReactCurrentDispatcher: { current: { readContext: function(n) {
  return cn.__n[n.__c].props.value;
}, useCallback: q, useContext: x2, useDebugValue: P, useDeferredValue: w, useEffect: y, useId: g2, useImperativeHandle: F, useInsertionEffect: I, useLayoutEffect: _, useMemo: T, useReducer: p, useRef: A, useState: h, useSyncExternalStore: C, useTransition: k2 } } };
var vn = "18.3.1";
function dn(n) {
  return g.bind(null, n);
}
function pn(n) {
  return !!n && n.$$typeof === q2;
}
function mn(n) {
  return pn(n) && n.type === k;
}
function yn(n) {
  return !!n && !!n.displayName && ("string" == typeof n.displayName || n.displayName instanceof String) && n.displayName.startsWith("Memo(");
}
function _n(n) {
  return pn(n) ? G.apply(null, arguments) : n;
}
function bn(n) {
  return !!n.__k && (D(null, n), true);
}
function Sn(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}
var gn = function(n, t) {
  return n(t);
};
var En = function(n, t) {
  return n(t);
};
var Cn = k;
var xn = pn;
var Rn = { useState: h, useId: g2, useReducer: p, useEffect: y, useLayoutEffect: _, useInsertionEffect: I, useTransition: k2, useDeferredValue: w, useSyncExternalStore: C, startTransition: R, useRef: A, useImperativeHandle: F, useMemo: T, useCallback: q, useContext: x2, useDebugValue: P, version: "18.3.1", Children: O, render: nn, hydrate: tn, unmountComponentAtNode: bn, createPortal: $, createElement: g, createContext: J, createFactory: dn, cloneElement: _n, createRef: b, Fragment: k, isValidElement: pn, isElement: xn, isFragment: mn, isMemo: yn, findDOMNode: Sn, Component: x, PureComponent: N, memo: M, forwardRef: D2, flushSync: En, unstable_batchedUpdates: gn, StrictMode: Cn, Suspense: P2, SuspenseList: B, lazy: z, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn };
export {
  O as Children,
  x as Component,
  k as Fragment,
  N as PureComponent,
  Cn as StrictMode,
  P2 as Suspense,
  B as SuspenseList,
  hn as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  _n as cloneElement,
  J as createContext,
  g as createElement,
  dn as createFactory,
  $ as createPortal,
  b as createRef,
  Rn as default,
  Sn as findDOMNode,
  En as flushSync,
  D2 as forwardRef,
  tn as hydrate,
  xn as isElement,
  mn as isFragment,
  yn as isMemo,
  pn as isValidElement,
  z as lazy,
  M as memo,
  nn as render,
  R as startTransition,
  bn as unmountComponentAtNode,
  gn as unstable_batchedUpdates,
  q as useCallback,
  x2 as useContext,
  P as useDebugValue,
  w as useDeferredValue,
  y as useEffect,
  b2 as useErrorBoundary,
  g2 as useId,
  F as useImperativeHandle,
  I as useInsertionEffect,
  _ as useLayoutEffect,
  T as useMemo,
  p as useReducer,
  A as useRef,
  h as useState,
  C as useSyncExternalStore,
  k2 as useTransition,
  vn as version
};
//# sourceMappingURL=react.js.map
