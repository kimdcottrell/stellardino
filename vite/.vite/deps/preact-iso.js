import {
  A,
  T,
  _ as _2,
  d,
  h,
  x
} from "./chunk-JSEXYL22.js";
import {
  D,
  E,
  G,
  H,
  J,
  _,
  l
} from "./chunk-3KBIWU5U.js";
import "./chunk-EQCVQC35.js";

// node_modules/.deno/preact-iso@2.9.0/node_modules/preact-iso/src/router.js
var push;
var scope;
var UPDATE = (state, url) => {
  push = void 0;
  if (url && url.type === "click") {
    if (url.ctrlKey || url.metaKey || url.altKey || url.shiftKey || url.button !== 0) {
      return state;
    }
    const link = url.target.closest("a[href]"), href = link && link.getAttribute("href");
    if (!link || link.origin != location.origin || /^#/.test(href) || !/^(_?self)?$/i.test(link.target) || scope && (typeof scope == "string" ? !href.startsWith(scope) : !scope.test(href))) {
      return state;
    }
    push = true;
    url.preventDefault();
    url = link.href.replace(location.origin, "");
  } else if (typeof url === "string") {
    push = true;
  } else if (url && url.url) {
    push = !url.replace;
    url = url.url;
  } else {
    url = location.pathname + location.search;
  }
  if (push === true) history.pushState(null, "", url);
  else if (push === false) history.replaceState(null, "", url);
  return url;
};
var exec = (url, route, matches = {}) => {
  url = url.split("/").filter(Boolean);
  route = (route || "").split("/").filter(Boolean);
  if (!matches.params) matches.params = {};
  for (let i = 0, val, rest; i < Math.max(url.length, route.length); i++) {
    let [, m, param, flag] = (route[i] || "").match(/^(:?)(.*?)([+*?]?)$/);
    val = url[i];
    if (!m && param == val) continue;
    if (!m && val && flag == "*") {
      matches.rest = "/" + url.slice(i).map(decodeURIComponent).join("/");
      break;
    }
    if (!m || !val && flag != "?" && flag != "*") return;
    rest = flag == "+" || flag == "*";
    if (rest) val = url.slice(i).map(decodeURIComponent).join("/") || void 0;
    else if (val) val = decodeURIComponent(val);
    matches.params[param] = val;
    if (!(param in matches)) matches[param] = val;
    if (rest) break;
  }
  return matches;
};
function LocationProvider(props) {
  const [url, route] = h(UPDATE, props.url || location.pathname + location.search);
  if (props.scope) scope = props.scope;
  const wasPush = push === true;
  const value = T(() => {
    const u = new URL(url, location.origin);
    const path = u.pathname.replace(/\/+$/g, "") || "/";
    return {
      url,
      path,
      query: Object.fromEntries(u.searchParams),
      route: (url2, replace) => route({ url: url2, replace }),
      wasPush
    };
  }, [url]);
  _2(() => {
    addEventListener("click", route);
    addEventListener("popstate", route);
    return () => {
      removeEventListener("click", route);
      removeEventListener("popstate", route);
    };
  }, []);
  return _(LocationProvider.ctx.Provider, { value }, props.children);
}
var RESOLVED = Promise.resolve();
function Router(props) {
  const [c, update] = h((c2) => c2 + 1, 0);
  const { url, query, wasPush, path } = useLocation();
  const { rest = path, params = {} } = x(RouteContext);
  const isLoading = A(false);
  const prevRoute = A(path);
  const count = A(0);
  const cur = (
    /** @type {RefObject<VNode<any>>} */
    A()
  );
  const prev = (
    /** @type {RefObject<VNode<any>>} */
    A()
  );
  const pendingBase = (
    /** @type {RefObject<Element | Text>} */
    A()
  );
  const hasEverCommitted = A(false);
  const didSuspend = (
    /** @type {RefObject<boolean>} */
    A()
  );
  didSuspend.current = false;
  const routeChanged = A(false);
  let pathRoute, defaultRoute, matchProps;
  H(props.children).some((vnode) => {
    const matches = exec(rest, vnode.props.path, matchProps = { ...vnode.props, path: rest, query, params, rest: "" });
    if (matches) return pathRoute = G(vnode, matchProps);
    if (vnode.props.default) defaultRoute = G(vnode, matchProps);
  });
  let incoming = pathRoute || defaultRoute;
  T(() => {
    prev.current = cur.current;
    const outgoing = prev.current && prev.current.props.children;
    if (!outgoing || !incoming || incoming.type !== outgoing.type || incoming.props.component !== outgoing.props.component) {
      if (this.__v && this.__v.__k) this.__v.__k.reverse();
      count.current++;
      routeChanged.current = true;
    } else routeChanged.current = false;
  }, [url]);
  const isHydratingSuspense = cur.current && cur.current.__u & MODE_HYDRATE && cur.current.__u & MODE_SUSPENDED;
  const isHydratingBool = cur.current && cur.current.__h;
  cur.current = /** @type {VNode<any>} */
  _(RouteContext.Provider, { value: matchProps }, incoming);
  if (isHydratingSuspense) {
    cur.current.__u |= MODE_HYDRATE;
    cur.current.__u |= MODE_SUSPENDED;
  } else if (isHydratingBool) {
    cur.current.__h = true;
  }
  const p = prev.current;
  prev.current = null;
  this.__c = (e, suspendedVNode) => {
    didSuspend.current = true;
    prev.current = p;
    if (props.onLoadStart) props.onLoadStart(url);
    isLoading.current = true;
    let c2 = count.current;
    e.then(() => {
      if (c2 !== count.current) return;
      prev.current = null;
      if (cur.current) {
        if (suspendedVNode.__h) {
          cur.current.__h = suspendedVNode.__h;
        }
        if (suspendedVNode.__u & MODE_SUSPENDED) {
          cur.current.__u |= MODE_SUSPENDED;
        }
        if (suspendedVNode.__u & MODE_HYDRATE) {
          cur.current.__u |= MODE_HYDRATE;
        }
      }
      RESOLVED.then(update);
    });
  };
  _2(() => {
    const currentDom = this.__v && this.__v.__e;
    if (didSuspend.current) {
      if (!hasEverCommitted.current && !pendingBase.current) {
        pendingBase.current = currentDom;
      }
      return;
    }
    if (!hasEverCommitted.current && pendingBase.current) {
      if (pendingBase.current !== currentDom) pendingBase.current.remove();
      pendingBase.current = null;
    }
    hasEverCommitted.current = true;
    if (prevRoute.current !== path) {
      if (wasPush) scrollTo(0, 0);
      if (props.onRouteChange) props.onRouteChange(url);
      prevRoute.current = path;
    }
    if (props.onLoadEnd && isLoading.current) props.onLoadEnd(url);
    isLoading.current = false;
  }, [path, wasPush, c]);
  return routeChanged.current ? [_(RenderRef, { r: cur }), _(RenderRef, { r: prev })] : _(RenderRef, { r: cur });
}
var MODE_HYDRATE = 1 << 5;
var MODE_SUSPENDED = 1 << 7;
var RenderRef = ({ r }) => r.current;
Router.Provider = LocationProvider;
LocationProvider.ctx = J(
  /** @type {import('./router.d.ts').LocationHook & { wasPush: boolean }} */
  {}
);
var RouteContext = J(
  /** @type {import('./router.d.ts').RouteHook & { rest: string }} */
  {}
);
var Route = (props) => _(props.component, props);
var useLocation = () => x(LocationProvider.ctx);
var useRoute = () => x(RouteContext);

// node_modules/.deno/preact-iso@2.9.0/node_modules/preact-iso/src/lazy.js
var oldDiff = l.__b;
l.__b = (vnode) => {
  if (vnode.type && vnode.type._forwarded && vnode.ref) {
    vnode.props.ref = vnode.ref;
    vnode.ref = null;
  }
  if (oldDiff) oldDiff(vnode);
};
function lazy(load) {
  let p, c;
  const loadModule = () => load().then((m) => c = m && m.default || m);
  const LazyComponent = (props) => {
    const [, update] = d(0);
    const r = A(c);
    if (!p) p = loadModule();
    if (c !== void 0) return _(c, props);
    if (!r.current) r.current = p.then(() => update(1));
    throw p;
  };
  LazyComponent.preload = () => {
    if (!p) p = loadModule();
    return p;
  };
  LazyComponent._forwarded = true;
  return LazyComponent;
}
var oldCatchError = l.__e;
l.__e = (err, newVNode, oldVNode) => {
  if (err && err.then) {
    let v = newVNode;
    while (v = v.__) {
      if (v.__c && v.__c.__c) {
        if (newVNode.__e == null) {
          newVNode.__e = oldVNode.__e;
          newVNode.__k = oldVNode.__k;
        }
        if (!newVNode.__k) newVNode.__k = [];
        return v.__c.__c(err, newVNode);
      }
    }
  }
  if (oldCatchError) oldCatchError(err, newVNode, oldVNode);
};
function ErrorBoundary(props) {
  this.__c = childDidSuspend;
  this.componentDidCatch = props.onError;
  return props.children;
}
function childDidSuspend(err) {
  err.then(() => this.forceUpdate());
}

// node_modules/.deno/preact-iso@2.9.0/node_modules/preact-iso/src/hydrate.js
var initialized;
function hydrate(jsx, parent) {
  if (typeof window === "undefined") return;
  let isodata = document.querySelector("script[type=isodata]");
  parent = parent || isodata && isodata.parentNode || document.body;
  if (!initialized && isodata) {
    E(jsx, parent);
  } else {
    D(jsx, parent);
  }
  initialized = true;
}

// node_modules/.deno/preact-iso@2.9.0/node_modules/preact-iso/src/index.js
function prerender(vnode, options) {
  return import("./prerender-ZNSK6VQZ.js").then((m) => m.default(vnode, options));
}
export {
  ErrorBoundary,
  LocationProvider,
  Route,
  Router,
  hydrate,
  lazy,
  prerender,
  useLocation,
  useRoute
};
//# sourceMappingURL=preact-iso.js.map
