import {
  l
} from "./chunk-PRDEP7ZQ.js";

// node_modules/.deno/preact@10.25.4/node_modules/preact/hooks/dist/hooks.module.js
var t;
var r;
var u;
var i;
var o = 0;
var f = [];
var c = l;
var e = c.__b;
var a = c.__r;
var v = c.diffed;
var l2 = c.__c;
var m = c.unmount;
var s = c.__;
function d(n, t2) {
  c.__h && c.__h(r, n, o || t2), o = 0;
  var u2 = r.__H || (r.__H = { __: [], __h: [] });
  return n >= u2.__.length && u2.__.push({}), u2.__[n];
}
function h(n) {
  return o = 1, p(D, n);
}
function p(n, u2, i2) {
  var o2 = d(t++, 2);
  if (o2.t = n, !o2.__c && (o2.__ = [i2 ? i2(u2) : D(void 0, u2), function(n2) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n2);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.u)) {
    var f2 = function(n2, t2, r2) {
      if (!o2.__c.__H) return true;
      var u3 = o2.__c.__H.__.filter(function(n3) {
        return !!n3.__c;
      });
      if (u3.every(function(n3) {
        return !n3.__N;
      })) return !c2 || c2.call(this, n2, t2, r2);
      var i3 = o2.__c.props !== n2;
      return u3.forEach(function(n3) {
        if (n3.__N) {
          var t3 = n3.__[0];
          n3.__ = n3.__N, n3.__N = void 0, t3 !== n3.__[0] && (i3 = true);
        }
      }), c2 && c2.call(this, n2, t2, r2) || i3;
    };
    r.u = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n2, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n2, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n2, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function y(n, u2) {
  var i2 = d(t++, 3);
  !c.__s && C(i2.__H, u2) && (i2.__ = n, i2.i = u2, r.__H.__h.push(i2));
}
function _(n, u2) {
  var i2 = d(t++, 4);
  !c.__s && C(i2.__H, u2) && (i2.__ = n, i2.i = u2, r.__h.push(i2));
}
function A(n) {
  return o = 5, T(function() {
    return { current: n };
  }, []);
}
function F(n, t2, r2) {
  o = 6, _(function() {
    return "function" == typeof n ? (n(t2()), function() {
      return n(null);
    }) : n ? (n.current = t2(), function() {
      return n.current = null;
    }) : void 0;
  }, null == r2 ? r2 : r2.concat(n));
}
function T(n, r2) {
  var u2 = d(t++, 7);
  return C(u2.__H, r2) && (u2.__ = n(), u2.__H = r2, u2.__h = n), u2.__;
}
function q(n, t2) {
  return o = 8, T(function() {
    return n;
  }, t2);
}
function x(n) {
  var u2 = r.context[n.__c], i2 = d(t++, 9);
  return i2.c = n, u2 ? (null == i2.__ && (i2.__ = true, u2.sub(r)), u2.props.value) : n.__;
}
function P(n, t2) {
  c.useDebugValue && c.useDebugValue(t2 ? t2(n) : n);
}
function b(n) {
  var u2 = d(t++, 10), i2 = h();
  return u2.__ = n, r.componentDidCatch || (r.componentDidCatch = function(n2, t2) {
    u2.__ && u2.__(n2, t2), i2[1](n2);
  }), [i2[0], function() {
    i2[1](void 0);
  }];
}
function g() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u2 = r.__v; null !== u2 && !u2.__m && null !== u2.__; ) u2 = u2.__;
    var i2 = u2.__m || (u2.__m = [0, 0]);
    n.__ = "P" + i2[0] + "-" + i2[1]++;
  }
  return n.__;
}
function j() {
  for (var n; n = f.shift(); ) if (n.__P && n.__H) try {
    n.__H.__h.forEach(z), n.__H.__h.forEach(B), n.__H.__h = [];
  } catch (t2) {
    n.__H.__h = [], c.__e(t2, n.__v);
  }
}
c.__b = function(n) {
  r = null, e && e(n);
}, c.__ = function(n, t2) {
  n && t2.__k && t2.__k.__m && (n.__m = t2.__k.__m), s && s(n, t2);
}, c.__r = function(n) {
  a && a(n), t = 0;
  var i2 = (r = n.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n2) {
    n2.__N && (n2.__ = n2.__N), n2.i = n2.__N = void 0;
  })) : (i2.__h.forEach(z), i2.__h.forEach(B), i2.__h = [], t = 0)), u = r;
}, c.diffed = function(n) {
  v && v(n);
  var t2 = n.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== f.push(t2) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j)), t2.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.i = void 0;
  })), u = r = null;
}, c.__c = function(n, t2) {
  t2.some(function(n2) {
    try {
      n2.__h.forEach(z), n2.__h = n2.__h.filter(function(n3) {
        return !n3.__ || B(n3);
      });
    } catch (r2) {
      t2.some(function(n3) {
        n3.__h && (n3.__h = []);
      }), t2 = [], c.__e(r2, n2.__v);
    }
  }), l2 && l2(n, t2);
}, c.unmount = function(n) {
  m && m(n);
  var t2, r2 = n.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n2) {
    try {
      z(n2);
    } catch (n3) {
      t2 = n3;
    }
  }), r2.__H = void 0, t2 && c.__e(t2, r2.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
  var t2, r2 = function() {
    clearTimeout(u2), k && cancelAnimationFrame(t2), setTimeout(n);
  }, u2 = setTimeout(r2, 100);
  k && (t2 = requestAnimationFrame(r2));
}
function z(n) {
  var t2 = r, u2 = n.__c;
  "function" == typeof u2 && (n.__c = void 0, u2()), r = t2;
}
function B(n) {
  var t2 = r;
  n.__c = n.__(), r = t2;
}
function C(n, t2) {
  return !n || n.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n[r2];
  });
}
function D(n, t2) {
  return "function" == typeof t2 ? t2(n) : t2;
}

export {
  h,
  p,
  y,
  _,
  A,
  F,
  T,
  q,
  x,
  P,
  b,
  g
};
//# sourceMappingURL=chunk-KWIGLLDT.js.map
