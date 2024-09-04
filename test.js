function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "./BAWIgH33.js",
      "./Cc7YJb6f.js",
      "./entry.izLZMZED.css",
      "./BmfyFNv3.js",
      "./Cpj98o6Y.js",
      "./BneCoJRQ.js",
      "./BCvHeyj9.js",
      "./CsA9qsS3.js",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
import { _ as vu } from "./BCvHeyj9.js";
import {
  h as Lu,
  _ as Ru,
  a as Wa,
  f as en,
  s as pa,
  n as vn,
} from "./BmfyFNv3.js";
import { n as Bn } from "./BneCoJRQ.js";
import {
  aH as Au,
  b8 as Cu,
  r as Da,
  b9 as Du,
  b5 as Eu,
  a2 as Fe,
  bc as Fu,
  aZ as Ir,
  aI as Iu,
  ag as Le,
  a1 as Me,
  aU as Nu,
  ai as Ou,
  Y as Pe,
  ac as Rn,
  aQ as Su,
  a6 as Tt,
  b7 as Tu,
  c as Ue,
  aa as Va,
  V as X,
  $ as Ze,
  bb as Zr,
  a9 as _s,
  a_ as _u,
  W as ae,
  b6 as ba,
  b3 as bu,
  Z as ce,
  F as ct,
  aR as ds,
  J as du,
  _ as fs,
  ab as ft,
  aX as fu,
  a$ as gu,
  aP as hs,
  k as hu,
  a4 as je,
  b1 as ka,
  b2 as ku,
  a3 as le,
  ar as ms,
  w as mu,
  ae as oa,
  M as ps,
  a5 as pu,
  u as q,
  aY as sa,
  X as se,
  a0 as wt,
  b4 as wu,
  d as xt,
  aL as xu,
  b0 as yu,
  ba as zu,
} from "./Cc7YJb6f.js";
import { g as tn } from "./Cpj98o6Y.js";
import { u as Bu } from "./CsA9qsS3.js";
const Pu = {
    class: "bg absolute inset-0 -z-10 transform-gpu blur-3xl overflow-hidden",
    "aria-hidden": "true",
  },
  Mu = xt({
    __name: "LandingBackground",
    setup(e) {
      const t = fu(
          () => new Array(16).fill(0).map(() => [Math.random(), Math.random()]),
          "$OmUX6s3ESK",
        ),
        a = Ue(() =>
          t.value.map(([i, o]) => `${i * 100}% ${o * 100}%`).join(", "),
        );
      function r(i) {
        return Math.random() > 0.5
          ? i + (Math.random() - 0.5) / 2
          : Math.random();
      }
      let n;
      function s() {
        for (let i = 0; i < t.value.length; i++)
          t.value[i] = [r(t.value[i][0]), r(t.value[i][1])];
        n = setTimeout(s, 2e3 + Math.random() * 1e3);
      }
      return (
        hu(() => {
          s(), du(() => clearTimeout(n));
        }),
        (i, o) => (
          X(),
          ae("div", Pu, [
            Ze(
              "div",
              {
                class:
                  "aspect-[1.7] h-full w-full bg-gradient-to-r from-[rgb(var(--color-primary-DEFAULT))] to-white/10 lg:opacity-30 xs:opacity-50",
                style: pu({
                  "clip-path": `polygon(${q(a)})`,
                }),
              },
              null,
              4,
            ),
          ])
        )
      );
    },
  }),
  Hu = fs(Mu, [["__scopeId", "data-v-7cdbeade"]]);
function Pn(e) {
  if (e) throw e;
}
var za = Object.prototype.hasOwnProperty,
  gs = Object.prototype.toString,
  Mn = Object.defineProperty,
  Hn = Object.getOwnPropertyDescriptor,
  Un = function (t) {
    return typeof Array.isArray == "function"
      ? Array.isArray(t)
      : gs.call(t) === "[object Array]";
  },
  jn = function (t) {
    if (!t || gs.call(t) !== "[object Object]") return !1;
    var a = za.call(t, "constructor"),
      r =
        t.constructor &&
        t.constructor.prototype &&
        za.call(t.constructor.prototype, "isPrototypeOf");
    if (t.constructor && !a && !r) return !1;
    var n;
    for (n in t);
    return typeof n > "u" || za.call(t, n);
  },
  qn = function (t, a) {
    Mn && a.name === "__proto__"
      ? Mn(t, a.name, {
          enumerable: !0,
          configurable: !0,
          value: a.newValue,
          writable: !0,
        })
      : (t[a.name] = a.newValue);
  },
  Yn = function (t, a) {
    if (a === "__proto__")
      if (za.call(t, a)) {
        if (Hn) return Hn(t, a).value;
      } else return;
    return t[a];
  },
  Uu = function e() {
    var t,
      a,
      r,
      n,
      s,
      i,
      o = arguments[0],
      u = 1,
      l = arguments.length,
      p = !1;
    for (
      typeof o == "boolean" && ((p = o), (o = arguments[1] || {}), (u = 2)),
        (o == null || (typeof o != "object" && typeof o != "function")) &&
          (o = {});
      u < l;
      ++u
    )
      if (((t = arguments[u]), t != null))
        for (a in t)
          (r = Yn(o, a)),
            (n = Yn(t, a)),
            o !== n &&
              (p && n && (jn(n) || (s = Un(n)))
                ? (s
                    ? ((s = !1), (i = r && Un(r) ? r : []))
                    : (i = r && jn(r) ? r : {}),
                  qn(o, {
                    name: a,
                    newValue: e(p, i, n),
                  }))
                : typeof n < "u" &&
                  qn(o, {
                    name: a,
                    newValue: n,
                  }));
    return o;
  };
const sr = tn(Uu);
function Sr(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function ju() {
  const e = [],
    t = {
      run: a,
      use: r,
    };
  return t;
  function a(...n) {
    let s = -1;
    const i = n.pop();
    if (typeof i != "function")
      throw new TypeError("Expected function as last argument, not " + i);
    o(null, ...n);
    function o(u, ...l) {
      const p = e[++s];
      let h = -1;
      if (u) {
        i(u);
        return;
      }
      for (; ++h < n.length; )
        (l[h] === null || l[h] === void 0) && (l[h] = n[h]);
      (n = l), p ? qu(p, o)(...l) : i(null, ...l);
    }
  }
  function r(n) {
    if (typeof n != "function")
      throw new TypeError("Expected `middelware` to be a function, not " + n);
    return e.push(n), t;
  }
}
function qu(e, t) {
  let a;
  return r;
  function r(...i) {
    const o = e.length > i.length;
    let u;
    o && i.push(n);
    try {
      u = e.apply(this, i);
    } catch (l) {
      const p = l;
      if (o && a) throw p;
      return n(p);
    }
    o ||
      (u && u.then && typeof u.then == "function"
        ? u.then(s, n)
        : u instanceof Error
          ? n(u)
          : s(u));
  }
  function n(i, ...o) {
    a || ((a = !0), t(i, ...o));
  }
  function s(i) {
    n(null, i);
  }
}
function Zt(e) {
  return !e || typeof e != "object"
    ? ""
    : "position" in e || "type" in e
      ? $n(e.position)
      : "start" in e || "end" in e
        ? $n(e)
        : "line" in e || "column" in e
          ? Nr(e)
          : "";
}
function Nr(e) {
  return Vn(e && e.line) + ":" + Vn(e && e.column);
}
function $n(e) {
  return Nr(e && e.start) + "-" + Nr(e && e.end);
}
function Vn(e) {
  return e && typeof e == "number" ? e : 1;
}
class De extends Error {
  constructor(t, a, r) {
    super(), typeof a == "string" && ((r = a), (a = void 0));
    let n = "",
      s = {},
      i = !1;
    if (
      (a &&
        ("line" in a && "column" in a
          ? (s = {
              place: a,
            })
          : "start" in a && "end" in a
            ? (s = {
                place: a,
              })
            : "type" in a
              ? (s = {
                  ancestors: [a],
                  place: a.position,
                })
              : (s = {
                  ...a,
                })),
      typeof t == "string"
        ? (n = t)
        : !s.cause && t && ((i = !0), (n = t.message), (s.cause = t)),
      !s.ruleId && !s.source && typeof r == "string")
    ) {
      const u = r.indexOf(":");
      u === -1
        ? (s.ruleId = r)
        : ((s.source = r.slice(0, u)), (s.ruleId = r.slice(u + 1)));
    }
    if (!s.place && s.ancestors && s.ancestors) {
      const u = s.ancestors[s.ancestors.length - 1];
      u && (s.place = u.position);
    }
    const o = s.place && "start" in s.place ? s.place.start : s.place;
    (this.ancestors = s.ancestors || void 0),
      (this.cause = s.cause || void 0),
      (this.column = o ? o.column : void 0),
      (this.fatal = void 0),
      this.file,
      (this.message = n),
      (this.line = o ? o.line : void 0),
      (this.name = Zt(s.place) || "1:1"),
      (this.place = s.place || void 0),
      (this.reason = this.message),
      (this.ruleId = s.ruleId || void 0),
      (this.source = s.source || void 0),
      (this.stack =
        i && s.cause && typeof s.cause.stack == "string" ? s.cause.stack : ""),
      this.actual,
      this.expected,
      this.note,
      this.url;
  }
}
De.prototype.file = "";
De.prototype.name = "";
De.prototype.reason = "";
De.prototype.message = "";
De.prototype.stack = "";
De.prototype.column = void 0;
De.prototype.line = void 0;
De.prototype.ancestors = void 0;
De.prototype.cause = void 0;
De.prototype.fatal = void 0;
De.prototype.place = void 0;
De.prototype.ruleId = void 0;
De.prototype.source = void 0;
const $e = {
  basename: Yu,
  dirname: $u,
  extname: Vu,
  join: Wu,
  sep: "/",
};
function Yu(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  _a(e);
  let a = 0,
    r = -1,
    n = e.length,
    s;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; n--; )
      if (e.codePointAt(n) === 47) {
        if (s) {
          a = n + 1;
          break;
        }
      } else r < 0 && ((s = !0), (r = n + 1));
    return r < 0 ? "" : e.slice(a, r);
  }
  if (t === e) return "";
  let i = -1,
    o = t.length - 1;
  for (; n--; )
    if (e.codePointAt(n) === 47) {
      if (s) {
        a = n + 1;
        break;
      }
    } else
      i < 0 && ((s = !0), (i = n + 1)),
        o > -1 &&
          (e.codePointAt(n) === t.codePointAt(o--)
            ? o < 0 && (r = n)
            : ((o = -1), (r = i)));
  return a === r ? (r = i) : r < 0 && (r = e.length), e.slice(a, r);
}
function $u(e) {
  if ((_a(e), e.length === 0)) return ".";
  let t = -1,
    a = e.length,
    r;
  for (; --a; )
    if (e.codePointAt(a) === 47) {
      if (r) {
        t = a;
        break;
      }
    } else r || (r = !0);
  return t < 0
    ? e.codePointAt(0) === 47
      ? "/"
      : "."
    : t === 1 && e.codePointAt(0) === 47
      ? "//"
      : e.slice(0, t);
}
function Vu(e) {
  _a(e);
  let t = e.length,
    a = -1,
    r = 0,
    n = -1,
    s = 0,
    i;
  for (; t--; ) {
    const o = e.codePointAt(t);
    if (o === 47) {
      if (i) {
        r = t + 1;
        break;
      }
      continue;
    }
    a < 0 && ((i = !0), (a = t + 1)),
      o === 46 ? (n < 0 ? (n = t) : s !== 1 && (s = 1)) : n > -1 && (s = -1);
  }
  return n < 0 || a < 0 || s === 0 || (s === 1 && n === a - 1 && n === r + 1)
    ? ""
    : e.slice(n, a);
}
function Wu(...e) {
  let t = -1,
    a;
  for (; ++t < e.length; )
    _a(e[t]), e[t] && (a = a === void 0 ? e[t] : a + "/" + e[t]);
  return a === void 0 ? "." : Gu(a);
}
function Gu(e) {
  _a(e);
  const t = e.codePointAt(0) === 47;
  let a = Qu(e, !t);
  return (
    a.length === 0 && !t && (a = "."),
    a.length > 0 && e.codePointAt(e.length - 1) === 47 && (a += "/"),
    t ? "/" + a : a
  );
}
function Qu(e, t) {
  let a = "",
    r = 0,
    n = -1,
    s = 0,
    i = -1,
    o,
    u;
  for (; ++i <= e.length; ) {
    if (i < e.length) o = e.codePointAt(i);
    else {
      if (o === 47) break;
      o = 47;
    }
    if (o === 47) {
      if (!(n === i - 1 || s === 1))
        if (n !== i - 1 && s === 2) {
          if (
            a.length < 2 ||
            r !== 2 ||
            a.codePointAt(a.length - 1) !== 46 ||
            a.codePointAt(a.length - 2) !== 46
          ) {
            if (a.length > 2) {
              if (((u = a.lastIndexOf("/")), u !== a.length - 1)) {
                u < 0
                  ? ((a = ""), (r = 0))
                  : ((a = a.slice(0, u)),
                    (r = a.length - 1 - a.lastIndexOf("/"))),
                  (n = i),
                  (s = 0);
                continue;
              }
            } else if (a.length > 0) {
              (a = ""), (r = 0), (n = i), (s = 0);
              continue;
            }
          }
          t && ((a = a.length > 0 ? a + "/.." : ".."), (r = 2));
        } else
          a.length > 0
            ? (a += "/" + e.slice(n + 1, i))
            : (a = e.slice(n + 1, i)),
            (r = i - n - 1);
      (n = i), (s = 0);
    } else o === 46 && s > -1 ? s++ : (s = -1);
  }
  return a;
}
function _a(e) {
  if (typeof e != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
const Xu = {
  cwd: Ku,
};
function Ku() {
  return "/";
}
function Fr(e) {
  return !!(
    e !== null &&
    typeof e == "object" &&
    "href" in e &&
    e.href &&
    "protocol" in e &&
    e.protocol &&
    e.auth === void 0
  );
}
function Ju(e) {
  if (typeof e == "string") e = new URL(e);
  else if (!Fr(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        "`",
    );
    throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw ((t.code = "ERR_INVALID_URL_SCHEME"), t);
  }
  return Zu(e);
}
function Zu(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin',
    );
    throw ((r.code = "ERR_INVALID_FILE_URL_HOST"), r);
  }
  const t = e.pathname;
  let a = -1;
  for (; ++a < t.length; )
    if (t.codePointAt(a) === 37 && t.codePointAt(a + 1) === 50) {
      const r = t.codePointAt(a + 2);
      if (r === 70 || r === 102) {
        const n = new TypeError(
          "File URL path must not include encoded / characters",
        );
        throw ((n.code = "ERR_INVALID_FILE_URL_PATH"), n);
      }
    }
  return decodeURIComponent(t);
}
const or = ["history", "path", "basename", "stem", "extname", "dirname"];
class el {
  constructor(t) {
    let a;
    t
      ? Fr(t)
        ? (a = {
            path: t,
          })
        : typeof t == "string" || tl(t)
          ? (a = {
              value: t,
            })
          : (a = t)
      : (a = {}),
      (this.cwd = Xu.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored;
    let r = -1;
    for (; ++r < or.length; ) {
      const s = or[r];
      s in a &&
        a[s] !== void 0 &&
        a[s] !== null &&
        (this[s] = s === "history" ? [...a[s]] : a[s]);
    }
    let n;
    for (n in a) or.includes(n) || (this[n] = a[n]);
  }
  get basename() {
    return typeof this.path == "string" ? $e.basename(this.path) : void 0;
  }
  set basename(t) {
    ur(t, "basename"),
      cr(t, "basename"),
      (this.path = $e.join(this.dirname || "", t));
  }
  get dirname() {
    return typeof this.path == "string" ? $e.dirname(this.path) : void 0;
  }
  set dirname(t) {
    Wn(this.basename, "dirname"), (this.path = $e.join(t || "", this.basename));
  }
  get extname() {
    return typeof this.path == "string" ? $e.extname(this.path) : void 0;
  }
  set extname(t) {
    if ((cr(t, "extname"), Wn(this.dirname, "extname"), t)) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = $e.join(this.dirname, this.stem + (t || ""));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    Fr(t) && (t = Ju(t)),
      ur(t, "path"),
      this.path !== t && this.history.push(t);
  }
  get stem() {
    return typeof this.path == "string"
      ? $e.basename(this.path, this.extname)
      : void 0;
  }
  set stem(t) {
    ur(t, "stem"),
      cr(t, "stem"),
      (this.path = $e.join(this.dirname || "", t + (this.extname || "")));
  }
  fail(t, a, r) {
    const n = this.message(t, a, r);
    throw ((n.fatal = !0), n);
  }
  info(t, a, r) {
    const n = this.message(t, a, r);
    return (n.fatal = void 0), n;
  }
  message(t, a, r) {
    const n = new De(t, a, r);
    return (
      this.path && ((n.name = this.path + ":" + n.name), (n.file = this.path)),
      (n.fatal = !1),
      this.messages.push(n),
      n
    );
  }
  toString(t) {
    return this.value === void 0
      ? ""
      : typeof this.value == "string"
        ? this.value
        : new TextDecoder(t || void 0).decode(this.value);
  }
}
function cr(e, t) {
  if (e && e.includes($e.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + $e.sep + "`",
    );
}
function ur(e, t) {
  if (!e) throw new Error("`" + t + "` cannot be empty");
}
function Wn(e, t) {
  if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function tl(e) {
  return !!(
    e &&
    typeof e == "object" &&
    "byteLength" in e &&
    "byteOffset" in e
  );
}
const al = function (e) {
    const r = this.constructor.prototype,
      n = r[e],
      s = function () {
        return n.apply(s, arguments);
      };
    Object.setPrototypeOf(s, r);
    const i = Object.getOwnPropertyNames(n);
    for (const o of i) {
      const u = Object.getOwnPropertyDescriptor(n, o);
      u && Object.defineProperty(s, o, u);
    }
    return s;
  },
  rl = {}.hasOwnProperty;
class an extends al {
  constructor() {
    super("copy"),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = ju());
  }
  copy() {
    const t = new an();
    let a = -1;
    for (; ++a < this.attachers.length; ) {
      const r = this.attachers[a];
      t.use(...r);
    }
    return t.data(sr(!0, {}, this.namespace)), t;
  }
  data(t, a) {
    return typeof t == "string"
      ? arguments.length === 2
        ? (hr("data", this.frozen), (this.namespace[t] = a), this)
        : (rl.call(this.namespace, t) && this.namespace[t]) || void 0
      : t
        ? (hr("data", this.frozen), (this.namespace = t), this)
        : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const t = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [a, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1) continue;
      r[0] === !0 && (r[0] = void 0);
      const n = a.call(t, ...r);
      typeof n == "function" && this.transformers.use(n);
    }
    return (
      (this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this
    );
  }
  parse(t) {
    this.freeze();
    const a = wa(t),
      r = this.parser || this.Parser;
    return lr("parse", r), r(String(a), a);
  }
  process(t, a) {
    const r = this;
    return (
      this.freeze(),
      lr("process", this.parser || this.Parser),
      fr("process", this.compiler || this.Compiler),
      a ? n(void 0, a) : new Promise(n)
    );
    function n(s, i) {
      const o = wa(t),
        u = r.parse(o);
      r.run(u, o, function (p, h, f) {
        if (p || !h || !f) return l(p);
        const _ = h,
          y = r.stringify(_, f);
        sl(y) ? (f.value = y) : (f.result = y), l(p, f);
      });
      function l(p, h) {
        p || !h ? i(p) : s ? s(h) : a(void 0, h);
      }
    }
  }
  processSync(t) {
    let a = !1,
      r;
    return (
      this.freeze(),
      lr("processSync", this.parser || this.Parser),
      fr("processSync", this.compiler || this.Compiler),
      this.process(t, n),
      Qn("processSync", "process", a),
      r
    );
    function n(s, i) {
      (a = !0), Pn(s), (r = i);
    }
  }
  run(t, a, r) {
    Gn(t), this.freeze();
    const n = this.transformers;
    return (
      !r && typeof a == "function" && ((r = a), (a = void 0)),
      r ? s(void 0, r) : new Promise(s)
    );
    function s(i, o) {
      const u = wa(a);
      n.run(t, u, l);
      function l(p, h, f) {
        const _ = h || t;
        p ? o(p) : i ? i(_) : r(void 0, _, f);
      }
    }
  }
  runSync(t, a) {
    let r = !1,
      n;
    return this.run(t, a, s), Qn("runSync", "run", r), n;
    function s(i, o) {
      Pn(i), (n = o), (r = !0);
    }
  }
  stringify(t, a) {
    this.freeze();
    const r = wa(a),
      n = this.compiler || this.Compiler;
    return fr("stringify", n), Gn(t), n(t, r);
  }
  use(t, ...a) {
    const r = this.attachers,
      n = this.namespace;
    if ((hr("use", this.frozen), t != null))
      if (typeof t == "function") u(t, a);
      else if (typeof t == "object") Array.isArray(t) ? o(t) : i(t);
      else throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function s(l) {
      if (typeof l == "function") u(l, []);
      else if (typeof l == "object")
        if (Array.isArray(l)) {
          const [p, ...h] = l;
          u(p, h);
        } else i(l);
      else throw new TypeError("Expected usable value, not `" + l + "`");
    }
    function i(l) {
      if (!("plugins" in l) && !("settings" in l))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither",
        );
      o(l.plugins), l.settings && (n.settings = sr(!0, n.settings, l.settings));
    }
    function o(l) {
      let p = -1;
      if (l != null)
        if (Array.isArray(l))
          for (; ++p < l.length; ) {
            const h = l[p];
            s(h);
          }
        else throw new TypeError("Expected a list of plugins, not `" + l + "`");
    }
    function u(l, p) {
      let h = -1,
        f = -1;
      for (; ++h < r.length; )
        if (r[h][0] === l) {
          f = h;
          break;
        }
      if (f === -1) r.push([l, ...p]);
      else if (p.length > 0) {
        let [_, ...y] = p;
        const b = r[f][1];
        Sr(b) && Sr(_) && (_ = sr(!0, b, _)), (r[f] = [l, _, ...y]);
      }
    }
  }
}
const nl = new an().freeze();
function lr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function fr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function hr(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.",
    );
}
function Gn(e) {
  if (!Sr(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Qn(e, t, a) {
  if (!a)
    throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function wa(e) {
  return il(e) ? e : new el(e);
}
function il(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function sl(e) {
  return typeof e == "string" || ol(e);
}
function ol(e) {
  return !!(
    e &&
    typeof e == "object" &&
    "byteLength" in e &&
    "byteOffset" in e
  );
}
const cl = {};
function rn(e, t) {
  const a = t || cl,
    r = typeof a.includeImageAlt == "boolean" ? a.includeImageAlt : !0,
    n = typeof a.includeHtml == "boolean" ? a.includeHtml : !0;
  return ys(e, r, n);
}
function ys(e, t, a) {
  if (ul(e)) {
    if ("value" in e) return e.type === "html" && !a ? "" : e.value;
    if (t && "alt" in e && e.alt) return e.alt;
    if ("children" in e) return Xn(e.children, t, a);
  }
  return Array.isArray(e) ? Xn(e, t, a) : "";
}
function Xn(e, t, a) {
  const r = [];
  let n = -1;
  for (; ++n < e.length; ) r[n] = ys(e[n], t, a);
  return r.join("");
}
function ul(e) {
  return !!(e && typeof e == "object");
}
const Kn = document.createElement("i");
function ca(e) {
  const t = "&" + e + ";";
  Kn.innerHTML = t;
  const a = Kn.textContent;
  return (a.charCodeAt(a.length - 1) === 59 && e !== "semi") || a === t
    ? !1
    : a;
}
function Se(e, t, a, r) {
  const n = e.length;
  let s = 0,
    i;
  if (
    (t < 0 ? (t = -t > n ? 0 : n + t) : (t = t > n ? n : t),
    (a = a > 0 ? a : 0),
    r.length < 1e4)
  )
    (i = Array.from(r)), i.unshift(t, a), e.splice(...i);
  else
    for (a && e.splice(t, a); s < r.length; )
      (i = r.slice(s, s + 1e4)),
        i.unshift(t, 0),
        e.splice(...i),
        (s += 1e4),
        (t += 1e4);
}
function Oe(e, t) {
  return e.length > 0 ? (Se(e, e.length, 0, t), e) : t;
}
const Jn = {}.hasOwnProperty;
function ks(e) {
  const t = {};
  let a = -1;
  for (; ++a < e.length; ) ll(t, e[a]);
  return t;
}
function ll(e, t) {
  let a;
  for (a in t) {
    const n = (Jn.call(e, a) ? e[a] : void 0) || (e[a] = {}),
      s = t[a];
    let i;
    if (s)
      for (i in s) {
        Jn.call(n, i) || (n[i] = []);
        const o = s[i];
        fl(n[i], Array.isArray(o) ? o : o ? [o] : []);
      }
  }
}
function fl(e, t) {
  let a = -1;
  const r = [];
  for (; ++a < t.length; ) (t[a].add === "after" ? e : r).push(t[a]);
  Se(e, 0, 0, r);
}
function bs(e, t) {
  const a = Number.parseInt(e, t);
  return a < 9 ||
    a === 11 ||
    (a > 13 && a < 32) ||
    (a > 126 && a < 160) ||
    (a > 55295 && a < 57344) ||
    (a > 64975 && a < 65008) ||
    (a & 65535) === 65535 ||
    (a & 65535) === 65534 ||
    a > 1114111
    ? "�"
    : String.fromCodePoint(a);
}
function qe(e) {
  return e
    .replace(/[\t\n\r ]+/g, " ")
    .replace(/^ | $/g, "")
    .toLowerCase()
    .toUpperCase();
}
const me = dt(/[A-Za-z]/),
  pe = dt(/[\dA-Za-z]/),
  hl = dt(/[#-'*+\--9=?A-Z^-~]/);
function Fa(e) {
  return e !== null && (e < 32 || e === 127);
}
const Or = dt(/\d/),
  dl = dt(/[\dA-Fa-f]/),
  pl = dt(/[!-/:-@[-`{-~]/);
function $(e) {
  return e !== null && e < -2;
}
function re(e) {
  return e !== null && (e < 0 || e === 32);
}
function K(e) {
  return e === -2 || e === -1 || e === 32;
}
const Ga = dt(new RegExp("\\p{P}|\\p{S}", "u")),
  Ct = dt(/\s/);
function dt(e) {
  return t;
  function t(a) {
    return a !== null && a > -1 && e.test(String.fromCharCode(a));
  }
}
function pt(e) {
  const t = [];
  let a = -1,
    r = 0,
    n = 0;
  for (; ++a < e.length; ) {
    const s = e.charCodeAt(a);
    let i = "";
    if (s === 37 && pe(e.charCodeAt(a + 1)) && pe(e.charCodeAt(a + 2))) n = 2;
    else if (s < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s)) ||
        (i = String.fromCharCode(s));
    else if (s > 55295 && s < 57344) {
      const o = e.charCodeAt(a + 1);
      s < 56320 && o > 56319 && o < 57344
        ? ((i = String.fromCharCode(s, o)), (n = 1))
        : (i = "�");
    } else i = String.fromCharCode(s);
    i &&
      (t.push(e.slice(r, a), encodeURIComponent(i)), (r = a + n + 1), (i = "")),
      n && ((a += n), (n = 0));
  }
  return t.join("") + e.slice(r);
}
function G(e, t, a, r) {
  const n = r ? r - 1 : Number.POSITIVE_INFINITY;
  let s = 0;
  return i;
  function i(u) {
    return K(u) ? (e.enter(a), o(u)) : t(u);
  }
  function o(u) {
    return K(u) && s++ < n ? (e.consume(u), o) : (e.exit(a), t(u));
  }
}
const _l = {
  tokenize: ml,
};
function ml(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, n);
  let a;
  return t;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(o),
      e.exit("lineEnding"),
      G(e, t, "linePrefix")
    );
  }
  function n(o) {
    return e.enter("paragraph"), s(o);
  }
  function s(o) {
    const u = e.enter("chunkText", {
      contentType: "text",
      previous: a,
    });
    return a && (a.next = u), (a = u), i(o);
  }
  function i(o) {
    if (o === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(o);
      return;
    }
    return $(o) ? (e.consume(o), e.exit("chunkText"), s) : (e.consume(o), i);
  }
}
const gl = {
    tokenize: yl,
  },
  Zn = {
    tokenize: kl,
  };
function yl(e) {
  const t = this,
    a = [];
  let r = 0,
    n,
    s,
    i;
  return o;
  function o(O) {
    if (r < a.length) {
      const M = a[r];
      return (t.containerState = M[1]), e.attempt(M[0].continuation, u, l)(O);
    }
    return l(O);
  }
  function u(O) {
    if ((r++, t.containerState._closeFlow)) {
      (t.containerState._closeFlow = void 0), n && I();
      const M = t.events.length;
      let N = M,
        d;
      for (; N--; )
        if (t.events[N][0] === "exit" && t.events[N][1].type === "chunkFlow") {
          d = t.events[N][1].end;
          break;
        }
      T(r);
      let z = M;
      for (; z < t.events.length; )
        (t.events[z][1].end = Object.assign({}, d)), z++;
      return (
        Se(t.events, N + 1, 0, t.events.slice(M)), (t.events.length = z), l(O)
      );
    }
    return o(O);
  }
  function l(O) {
    if (r === a.length) {
      if (!n) return f(O);
      if (n.currentConstruct && n.currentConstruct.concrete) return y(O);
      t.interrupt = !!(n.currentConstruct && !n._gfmTableDynamicInterruptHack);
    }
    return (t.containerState = {}), e.check(Zn, p, h)(O);
  }
  function p(O) {
    return n && I(), T(r), f(O);
  }
  function h(O) {
    return (
      (t.parser.lazy[t.now().line] = r !== a.length), (i = t.now().offset), y(O)
    );
  }
  function f(O) {
    return (t.containerState = {}), e.attempt(Zn, _, y)(O);
  }
  function _(O) {
    return r++, a.push([t.currentConstruct, t.containerState]), f(O);
  }
  function y(O) {
    if (O === null) {
      n && I(), T(0), e.consume(O);
      return;
    }
    return (
      (n = n || t.parser.flow(t.now())),
      e.enter("chunkFlow", {
        contentType: "flow",
        previous: s,
        _tokenizer: n,
      }),
      b(O)
    );
  }
  function b(O) {
    if (O === null) {
      C(e.exit("chunkFlow"), !0), T(0), e.consume(O);
      return;
    }
    return $(O)
      ? (e.consume(O),
        C(e.exit("chunkFlow")),
        (r = 0),
        (t.interrupt = void 0),
        o)
      : (e.consume(O), b);
  }
  function C(O, M) {
    const N = t.sliceStream(O);
    if (
      (M && N.push(null),
      (O.previous = s),
      s && (s.next = O),
      (s = O),
      n.defineSkip(O.start),
      n.write(N),
      t.parser.lazy[O.start.line])
    ) {
      let d = n.events.length;
      for (; d--; )
        if (
          n.events[d][1].start.offset < i &&
          (!n.events[d][1].end || n.events[d][1].end.offset > i)
        )
          return;
      const z = t.events.length;
      let U = z,
        V,
        D;
      for (; U--; )
        if (t.events[U][0] === "exit" && t.events[U][1].type === "chunkFlow") {
          if (V) {
            D = t.events[U][1].end;
            break;
          }
          V = !0;
        }
      for (T(r), d = z; d < t.events.length; )
        (t.events[d][1].end = Object.assign({}, D)), d++;
      Se(t.events, U + 1, 0, t.events.slice(z)), (t.events.length = d);
    }
  }
  function T(O) {
    let M = a.length;
    for (; M-- > O; ) {
      const N = a[M];
      (t.containerState = N[1]), N[0].exit.call(t, e);
    }
    a.length = O;
  }
  function I() {
    n.write([null]),
      (s = void 0),
      (n = void 0),
      (t.containerState._closeFlow = void 0);
  }
}
function kl(e, t, a) {
  return G(
    e,
    e.attempt(this.parser.constructs.document, t, a),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
  );
}
function Oa(e) {
  if (e === null || re(e) || Ct(e)) return 1;
  if (Ga(e)) return 2;
}
function Qa(e, t, a) {
  const r = [];
  let n = -1;
  for (; ++n < e.length; ) {
    const s = e[n].resolveAll;
    s && !r.includes(s) && ((t = s(t, a)), r.push(s));
  }
  return t;
}
const Lr = {
  name: "attention",
  tokenize: wl,
  resolveAll: bl,
};
function bl(e, t) {
  let a = -1,
    r,
    n,
    s,
    i,
    o,
    u,
    l,
    p;
  for (; ++a < e.length; )
    if (
      e[a][0] === "enter" &&
      e[a][1].type === "attentionSequence" &&
      e[a][1]._close
    ) {
      for (r = a; r--; )
        if (
          e[r][0] === "exit" &&
          e[r][1].type === "attentionSequence" &&
          e[r][1]._open &&
          t.sliceSerialize(e[r][1]).charCodeAt(0) ===
            t.sliceSerialize(e[a][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[a][1]._open) &&
            (e[a][1].end.offset - e[a][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[a][1].end.offset -
                e[a][1].start.offset) %
              3
            )
          )
            continue;
          u =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[a][1].end.offset - e[a][1].start.offset > 1
              ? 2
              : 1;
          const h = Object.assign({}, e[r][1].end),
            f = Object.assign({}, e[a][1].start);
          ei(h, -u),
            ei(f, u),
            (i = {
              type: u > 1 ? "strongSequence" : "emphasisSequence",
              start: h,
              end: Object.assign({}, e[r][1].end),
            }),
            (o = {
              type: u > 1 ? "strongSequence" : "emphasisSequence",
              start: Object.assign({}, e[a][1].start),
              end: f,
            }),
            (s = {
              type: u > 1 ? "strongText" : "emphasisText",
              start: Object.assign({}, e[r][1].end),
              end: Object.assign({}, e[a][1].start),
            }),
            (n = {
              type: u > 1 ? "strong" : "emphasis",
              start: Object.assign({}, i.start),
              end: Object.assign({}, o.end),
            }),
            (e[r][1].end = Object.assign({}, i.start)),
            (e[a][1].start = Object.assign({}, o.end)),
            (l = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (l = Oe(l, [
                ["enter", e[r][1], t],
                ["exit", e[r][1], t],
              ])),
            (l = Oe(l, [
              ["enter", n, t],
              ["enter", i, t],
              ["exit", i, t],
              ["enter", s, t],
            ])),
            (l = Oe(
              l,
              Qa(t.parser.constructs.insideSpan.null, e.slice(r + 1, a), t),
            )),
            (l = Oe(l, [
              ["exit", s, t],
              ["enter", o, t],
              ["exit", o, t],
              ["exit", n, t],
            ])),
            e[a][1].end.offset - e[a][1].start.offset
              ? ((p = 2),
                (l = Oe(l, [
                  ["enter", e[a][1], t],
                  ["exit", e[a][1], t],
                ])))
              : (p = 0),
            Se(e, r - 1, a - r + 3, l),
            (a = r + l.length - p - 2);
          break;
        }
    }
  for (a = -1; ++a < e.length; )
    e[a][1].type === "attentionSequence" && (e[a][1].type = "data");
  return e;
}
function wl(e, t) {
  const a = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    n = Oa(r);
  let s;
  return i;
  function i(u) {
    return (s = u), e.enter("attentionSequence"), o(u);
  }
  function o(u) {
    if (u === s) return e.consume(u), o;
    const l = e.exit("attentionSequence"),
      p = Oa(u),
      h = !p || (p === 2 && n) || a.includes(u),
      f = !n || (n === 2 && p) || a.includes(r);
    return (
      (l._open = !!(s === 42 ? h : h && (n || !f))),
      (l._close = !!(s === 42 ? f : f && (p || !h))),
      t(u)
    );
  }
}
function ei(e, t) {
  (e.column += t), (e.offset += t), (e._bufferIndex += t);
}
const El = {
  name: "autolink",
  tokenize: Tl,
};
function Tl(e, t, a) {
  let r = 0;
  return n;
  function n(_) {
    return (
      e.enter("autolink"),
      e.enter("autolinkMarker"),
      e.consume(_),
      e.exit("autolinkMarker"),
      e.enter("autolinkProtocol"),
      s
    );
  }
  function s(_) {
    return me(_) ? (e.consume(_), i) : l(_);
  }
  function i(_) {
    return _ === 43 || _ === 45 || _ === 46 || pe(_) ? ((r = 1), o(_)) : l(_);
  }
  function o(_) {
    return _ === 58
      ? (e.consume(_), (r = 0), u)
      : (_ === 43 || _ === 45 || _ === 46 || pe(_)) && r++ < 32
        ? (e.consume(_), o)
        : ((r = 0), l(_));
  }
  function u(_) {
    return _ === 62
      ? (e.exit("autolinkProtocol"),
        e.enter("autolinkMarker"),
        e.consume(_),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        t)
      : _ === null || _ === 32 || _ === 60 || Fa(_)
        ? a(_)
        : (e.consume(_), u);
  }
  function l(_) {
    return _ === 64 ? (e.consume(_), p) : hl(_) ? (e.consume(_), l) : a(_);
  }
  function p(_) {
    return pe(_) ? h(_) : a(_);
  }
  function h(_) {
    return _ === 46
      ? (e.consume(_), (r = 0), p)
      : _ === 62
        ? ((e.exit("autolinkProtocol").type = "autolinkEmail"),
          e.enter("autolinkMarker"),
          e.consume(_),
          e.exit("autolinkMarker"),
          e.exit("autolink"),
          t)
        : f(_);
  }
  function f(_) {
    if ((_ === 45 || pe(_)) && r++ < 63) {
      const y = _ === 45 ? f : h;
      return e.consume(_), y;
    }
    return a(_);
  }
}
const ma = {
  tokenize: Al,
  partial: !0,
};
function Al(e, t, a) {
  return r;
  function r(s) {
    return K(s) ? G(e, n, "linePrefix")(s) : n(s);
  }
  function n(s) {
    return s === null || $(s) ? t(s) : a(s);
  }
}
const ws = {
  name: "blockQuote",
  tokenize: Cl,
  continuation: {
    tokenize: xl,
  },
  exit: Dl,
};
function Cl(e, t, a) {
  const r = this;
  return n;
  function n(i) {
    if (i === 62) {
      const o = r.containerState;
      return (
        o.open ||
          (e.enter("blockQuote", {
            _container: !0,
          }),
          (o.open = !0)),
        e.enter("blockQuotePrefix"),
        e.enter("blockQuoteMarker"),
        e.consume(i),
        e.exit("blockQuoteMarker"),
        s
      );
    }
    return a(i);
  }
  function s(i) {
    return K(i)
      ? (e.enter("blockQuotePrefixWhitespace"),
        e.consume(i),
        e.exit("blockQuotePrefixWhitespace"),
        e.exit("blockQuotePrefix"),
        t)
      : (e.exit("blockQuotePrefix"), t(i));
  }
}
function xl(e, t, a) {
  const r = this;
  return n;
  function n(i) {
    return K(i)
      ? G(
          e,
          s,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented")
            ? void 0
            : 4,
        )(i)
      : s(i);
  }
  function s(i) {
    return e.attempt(ws, t, a)(i);
  }
}
function Dl(e) {
  e.exit("blockQuote");
}
const Es = {
  name: "characterEscape",
  tokenize: zl,
};
function zl(e, t, a) {
  return r;
  function r(s) {
    return (
      e.enter("characterEscape"),
      e.enter("escapeMarker"),
      e.consume(s),
      e.exit("escapeMarker"),
      n
    );
  }
  function n(s) {
    return pl(s)
      ? (e.enter("characterEscapeValue"),
        e.consume(s),
        e.exit("characterEscapeValue"),
        e.exit("characterEscape"),
        t)
      : a(s);
  }
}
const Ts = {
  name: "characterReference",
  tokenize: Il,
};
function Il(e, t, a) {
  const r = this;
  let n = 0,
    s,
    i;
  return o;
  function o(h) {
    return (
      e.enter("characterReference"),
      e.enter("characterReferenceMarker"),
      e.consume(h),
      e.exit("characterReferenceMarker"),
      u
    );
  }
  function u(h) {
    return h === 35
      ? (e.enter("characterReferenceMarkerNumeric"),
        e.consume(h),
        e.exit("characterReferenceMarkerNumeric"),
        l)
      : (e.enter("characterReferenceValue"), (s = 31), (i = pe), p(h));
  }
  function l(h) {
    return h === 88 || h === 120
      ? (e.enter("characterReferenceMarkerHexadecimal"),
        e.consume(h),
        e.exit("characterReferenceMarkerHexadecimal"),
        e.enter("characterReferenceValue"),
        (s = 6),
        (i = dl),
        p)
      : (e.enter("characterReferenceValue"), (s = 7), (i = Or), p(h));
  }
  function p(h) {
    if (h === 59 && n) {
      const f = e.exit("characterReferenceValue");
      return i === pe && !ca(r.sliceSerialize(f))
        ? a(h)
        : (e.enter("characterReferenceMarker"),
          e.consume(h),
          e.exit("characterReferenceMarker"),
          e.exit("characterReference"),
          t);
    }
    return i(h) && n++ < s ? (e.consume(h), p) : a(h);
  }
}
const ti = {
    tokenize: Nl,
    partial: !0,
  },
  Rr = {
    name: "codeFenced",
    tokenize: Sl,
    concrete: !0,
  };
function Sl(e, t, a) {
  const r = this,
    n = {
      tokenize: N,
      partial: !0,
    };
  let s = 0,
    i = 0,
    o;
  return u;
  function u(d) {
    return l(d);
  }
  function l(d) {
    const z = r.events[r.events.length - 1];
    return (
      (s =
        z && z[1].type === "linePrefix"
          ? z[2].sliceSerialize(z[1], !0).length
          : 0),
      (o = d),
      e.enter("codeFenced"),
      e.enter("codeFencedFence"),
      e.enter("codeFencedFenceSequence"),
      p(d)
    );
  }
  function p(d) {
    return d === o
      ? (i++, e.consume(d), p)
      : i < 3
        ? a(d)
        : (e.exit("codeFencedFenceSequence"),
          K(d) ? G(e, h, "whitespace")(d) : h(d));
  }
  function h(d) {
    return d === null || $(d)
      ? (e.exit("codeFencedFence"), r.interrupt ? t(d) : e.check(ti, b, M)(d))
      : (e.enter("codeFencedFenceInfo"),
        e.enter("chunkString", {
          contentType: "string",
        }),
        f(d));
  }
  function f(d) {
    return d === null || $(d)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), h(d))
      : K(d)
        ? (e.exit("chunkString"),
          e.exit("codeFencedFenceInfo"),
          G(e, _, "whitespace")(d))
        : d === 96 && d === o
          ? a(d)
          : (e.consume(d), f);
  }
  function _(d) {
    return d === null || $(d)
      ? h(d)
      : (e.enter("codeFencedFenceMeta"),
        e.enter("chunkString", {
          contentType: "string",
        }),
        y(d));
  }
  function y(d) {
    return d === null || $(d)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), h(d))
      : d === 96 && d === o
        ? a(d)
        : (e.consume(d), y);
  }
  function b(d) {
    return e.attempt(n, M, C)(d);
  }
  function C(d) {
    return e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), T;
  }
  function T(d) {
    return s > 0 && K(d) ? G(e, I, "linePrefix", s + 1)(d) : I(d);
  }
  function I(d) {
    return d === null || $(d)
      ? e.check(ti, b, M)(d)
      : (e.enter("codeFlowValue"), O(d));
  }
  function O(d) {
    return d === null || $(d)
      ? (e.exit("codeFlowValue"), I(d))
      : (e.consume(d), O);
  }
  function M(d) {
    return e.exit("codeFenced"), t(d);
  }
  function N(d, z, U) {
    let V = 0;
    return D;
    function D(B) {
      return d.enter("lineEnding"), d.consume(B), d.exit("lineEnding"), S;
    }
    function S(B) {
      return (
        d.enter("codeFencedFence"),
        K(B)
          ? G(
              d,
              P,
              "linePrefix",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4,
            )(B)
          : P(B)
      );
    }
    function P(B) {
      return B === o ? (d.enter("codeFencedFenceSequence"), Q(B)) : U(B);
    }
    function Q(B) {
      return B === o
        ? (V++, d.consume(B), Q)
        : V >= i
          ? (d.exit("codeFencedFenceSequence"),
            K(B) ? G(d, te, "whitespace")(B) : te(B))
          : U(B);
    }
    function te(B) {
      return B === null || $(B) ? (d.exit("codeFencedFence"), z(B)) : U(B);
    }
  }
}
function Nl(e, t, a) {
  const r = this;
  return n;
  function n(i) {
    return i === null
      ? a(i)
      : (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), s);
  }
  function s(i) {
    return r.parser.lazy[r.now().line] ? a(i) : t(i);
  }
}
const dr = {
    name: "codeIndented",
    tokenize: Ol,
  },
  Fl = {
    tokenize: Ll,
    partial: !0,
  };
function Ol(e, t, a) {
  const r = this;
  return n;
  function n(l) {
    return e.enter("codeIndented"), G(e, s, "linePrefix", 5)(l);
  }
  function s(l) {
    const p = r.events[r.events.length - 1];
    return p &&
      p[1].type === "linePrefix" &&
      p[2].sliceSerialize(p[1], !0).length >= 4
      ? i(l)
      : a(l);
  }
  function i(l) {
    return l === null
      ? u(l)
      : $(l)
        ? e.attempt(Fl, i, u)(l)
        : (e.enter("codeFlowValue"), o(l));
  }
  function o(l) {
    return l === null || $(l)
      ? (e.exit("codeFlowValue"), i(l))
      : (e.consume(l), o);
  }
  function u(l) {
    return e.exit("codeIndented"), t(l);
  }
}
function Ll(e, t, a) {
  const r = this;
  return n;
  function n(i) {
    return r.parser.lazy[r.now().line]
      ? a(i)
      : $(i)
        ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n)
        : G(e, s, "linePrefix", 5)(i);
  }
  function s(i) {
    const o = r.events[r.events.length - 1];
    return o &&
      o[1].type === "linePrefix" &&
      o[2].sliceSerialize(o[1], !0).length >= 4
      ? t(i)
      : $(i)
        ? n(i)
        : a(i);
  }
}
const Rl = {
  name: "codeText",
  tokenize: Pl,
  resolve: vl,
  previous: Bl,
};
function vl(e) {
  let t = e.length - 4,
    a = 3,
    r,
    n;
  if (
    (e[a][1].type === "lineEnding" || e[a][1].type === "space") &&
    (e[t][1].type === "lineEnding" || e[t][1].type === "space")
  ) {
    for (r = a; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        (e[a][1].type = "codeTextPadding"),
          (e[t][1].type = "codeTextPadding"),
          (a += 2),
          (t -= 2);
        break;
      }
  }
  for (r = a - 1, t++; ++r <= t; )
    n === void 0
      ? r !== t && e[r][1].type !== "lineEnding" && (n = r)
      : (r === t || e[r][1].type === "lineEnding") &&
        ((e[n][1].type = "codeTextData"),
        r !== n + 2 &&
          ((e[n][1].end = e[r - 1][1].end),
          e.splice(n + 2, r - n - 2),
          (t -= r - n - 2),
          (r = n + 2)),
        (n = void 0));
  return e;
}
function Bl(e) {
  return (
    e !== 96 ||
    this.events[this.events.length - 1][1].type === "characterEscape"
  );
}
function Pl(e, t, a) {
  let r = 0,
    n,
    s;
  return i;
  function i(h) {
    return e.enter("codeText"), e.enter("codeTextSequence"), o(h);
  }
  function o(h) {
    return h === 96
      ? (e.consume(h), r++, o)
      : (e.exit("codeTextSequence"), u(h));
  }
  function u(h) {
    return h === null
      ? a(h)
      : h === 32
        ? (e.enter("space"), e.consume(h), e.exit("space"), u)
        : h === 96
          ? ((s = e.enter("codeTextSequence")), (n = 0), p(h))
          : $(h)
            ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), u)
            : (e.enter("codeTextData"), l(h));
  }
  function l(h) {
    return h === null || h === 32 || h === 96 || $(h)
      ? (e.exit("codeTextData"), u(h))
      : (e.consume(h), l);
  }
  function p(h) {
    return h === 96
      ? (e.consume(h), n++, p)
      : n === r
        ? (e.exit("codeTextSequence"), e.exit("codeText"), t(h))
        : ((s.type = "codeTextData"), l(h));
  }
}
function As(e) {
  const t = {};
  let a = -1,
    r,
    n,
    s,
    i,
    o,
    u,
    l;
  for (; ++a < e.length; ) {
    for (; a in t; ) a = t[a];
    if (
      ((r = e[a]),
      a &&
        r[1].type === "chunkFlow" &&
        e[a - 1][1].type === "listItemPrefix" &&
        ((u = r[1]._tokenizer.events),
        (s = 0),
        s < u.length && u[s][1].type === "lineEndingBlank" && (s += 2),
        s < u.length && u[s][1].type === "content"))
    )
      for (; ++s < u.length && u[s][1].type !== "content"; )
        u[s][1].type === "chunkText" &&
          ((u[s][1]._isInFirstContentOfListItem = !0), s++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Ml(e, a)), (a = t[a]), (l = !0));
    else if (r[1]._container) {
      for (
        s = a, n = void 0;
        s-- &&
        ((i = e[s]),
        i[1].type === "lineEnding" || i[1].type === "lineEndingBlank");

      )
        i[0] === "enter" &&
          (n && (e[n][1].type = "lineEndingBlank"),
          (i[1].type = "lineEnding"),
          (n = s));
      n &&
        ((r[1].end = Object.assign({}, e[n][1].start)),
        (o = e.slice(n, a)),
        o.unshift(r),
        Se(e, n, a - n + 1, o));
    }
  }
  return !l;
}
function Ml(e, t) {
  const a = e[t][1],
    r = e[t][2];
  let n = t - 1;
  const s = [],
    i = a._tokenizer || r.parser[a.contentType](a.start),
    o = i.events,
    u = [],
    l = {};
  let p,
    h,
    f = -1,
    _ = a,
    y = 0,
    b = 0;
  const C = [b];
  for (; _; ) {
    for (; e[++n][1] !== _; );
    s.push(n),
      _._tokenizer ||
        ((p = r.sliceStream(_)),
        _.next || p.push(null),
        h && i.defineSkip(_.start),
        _._isInFirstContentOfListItem &&
          (i._gfmTasklistFirstContentOfListItem = !0),
        i.write(p),
        _._isInFirstContentOfListItem &&
          (i._gfmTasklistFirstContentOfListItem = void 0)),
      (h = _),
      (_ = _.next);
  }
  for (_ = a; ++f < o.length; )
    o[f][0] === "exit" &&
      o[f - 1][0] === "enter" &&
      o[f][1].type === o[f - 1][1].type &&
      o[f][1].start.line !== o[f][1].end.line &&
      ((b = f + 1),
      C.push(b),
      (_._tokenizer = void 0),
      (_.previous = void 0),
      (_ = _.next));
  for (
    i.events = [],
      _ ? ((_._tokenizer = void 0), (_.previous = void 0)) : C.pop(),
      f = C.length;
    f--;

  ) {
    const T = o.slice(C[f], C[f + 1]),
      I = s.pop();
    u.unshift([I, I + T.length - 1]), Se(e, I, 2, T);
  }
  for (f = -1; ++f < u.length; )
    (l[y + u[f][0]] = y + u[f][1]), (y += u[f][1] - u[f][0] - 1);
  return l;
}
const Hl = {
    tokenize: ql,
    resolve: jl,
  },
  Ul = {
    tokenize: Yl,
    partial: !0,
  };
function jl(e) {
  return As(e), e;
}
function ql(e, t) {
  let a;
  return r;
  function r(o) {
    return (
      e.enter("content"),
      (a = e.enter("chunkContent", {
        contentType: "content",
      })),
      n(o)
    );
  }
  function n(o) {
    return o === null ? s(o) : $(o) ? e.check(Ul, i, s)(o) : (e.consume(o), n);
  }
  function s(o) {
    return e.exit("chunkContent"), e.exit("content"), t(o);
  }
  function i(o) {
    return (
      e.consume(o),
      e.exit("chunkContent"),
      (a.next = e.enter("chunkContent", {
        contentType: "content",
        previous: a,
      })),
      (a = a.next),
      n
    );
  }
}
function Yl(e, t, a) {
  const r = this;
  return n;
  function n(i) {
    return (
      e.exit("chunkContent"),
      e.enter("lineEnding"),
      e.consume(i),
      e.exit("lineEnding"),
      G(e, s, "linePrefix")
    );
  }
  function s(i) {
    if (i === null || $(i)) return a(i);
    const o = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") &&
      o &&
      o[1].type === "linePrefix" &&
      o[2].sliceSerialize(o[1], !0).length >= 4
      ? t(i)
      : e.interrupt(r.parser.constructs.flow, a, t)(i);
  }
}
function Cs(e, t, a, r, n, s, i, o, u) {
  const l = u || Number.POSITIVE_INFINITY;
  let p = 0;
  return h;
  function h(T) {
    return T === 60
      ? (e.enter(r), e.enter(n), e.enter(s), e.consume(T), e.exit(s), f)
      : T === null || T === 32 || T === 41 || Fa(T)
        ? a(T)
        : (e.enter(r),
          e.enter(i),
          e.enter(o),
          e.enter("chunkString", {
            contentType: "string",
          }),
          b(T));
  }
  function f(T) {
    return T === 62
      ? (e.enter(s), e.consume(T), e.exit(s), e.exit(n), e.exit(r), t)
      : (e.enter(o),
        e.enter("chunkString", {
          contentType: "string",
        }),
        _(T));
  }
  function _(T) {
    return T === 62
      ? (e.exit("chunkString"), e.exit(o), f(T))
      : T === null || T === 60 || $(T)
        ? a(T)
        : (e.consume(T), T === 92 ? y : _);
  }
  function y(T) {
    return T === 60 || T === 62 || T === 92 ? (e.consume(T), _) : _(T);
  }
  function b(T) {
    return !p && (T === null || T === 41 || re(T))
      ? (e.exit("chunkString"), e.exit(o), e.exit(i), e.exit(r), t(T))
      : p < l && T === 40
        ? (e.consume(T), p++, b)
        : T === 41
          ? (e.consume(T), p--, b)
          : T === null || T === 32 || T === 40 || Fa(T)
            ? a(T)
            : (e.consume(T), T === 92 ? C : b);
  }
  function C(T) {
    return T === 40 || T === 41 || T === 92 ? (e.consume(T), b) : b(T);
  }
}
function xs(e, t, a, r, n, s) {
  const i = this;
  let o = 0,
    u;
  return l;
  function l(_) {
    return e.enter(r), e.enter(n), e.consume(_), e.exit(n), e.enter(s), p;
  }
  function p(_) {
    return o > 999 ||
      _ === null ||
      _ === 91 ||
      (_ === 93 && !u) ||
      (_ === 94 && !o && "_hiddenFootnoteSupport" in i.parser.constructs)
      ? a(_)
      : _ === 93
        ? (e.exit(s), e.enter(n), e.consume(_), e.exit(n), e.exit(r), t)
        : $(_)
          ? (e.enter("lineEnding"), e.consume(_), e.exit("lineEnding"), p)
          : (e.enter("chunkString", {
              contentType: "string",
            }),
            h(_));
  }
  function h(_) {
    return _ === null || _ === 91 || _ === 93 || $(_) || o++ > 999
      ? (e.exit("chunkString"), p(_))
      : (e.consume(_), u || (u = !K(_)), _ === 92 ? f : h);
  }
  function f(_) {
    return _ === 91 || _ === 92 || _ === 93 ? (e.consume(_), o++, h) : h(_);
  }
}
function Ds(e, t, a, r, n, s) {
  let i;
  return o;
  function o(f) {
    return f === 34 || f === 39 || f === 40
      ? (e.enter(r),
        e.enter(n),
        e.consume(f),
        e.exit(n),
        (i = f === 40 ? 41 : f),
        u)
      : a(f);
  }
  function u(f) {
    return f === i
      ? (e.enter(n), e.consume(f), e.exit(n), e.exit(r), t)
      : (e.enter(s), l(f));
  }
  function l(f) {
    return f === i
      ? (e.exit(s), u(i))
      : f === null
        ? a(f)
        : $(f)
          ? (e.enter("lineEnding"),
            e.consume(f),
            e.exit("lineEnding"),
            G(e, l, "linePrefix"))
          : (e.enter("chunkString", {
              contentType: "string",
            }),
            p(f));
  }
  function p(f) {
    return f === i || f === null || $(f)
      ? (e.exit("chunkString"), l(f))
      : (e.consume(f), f === 92 ? h : p);
  }
  function h(f) {
    return f === i || f === 92 ? (e.consume(f), p) : p(f);
  }
}
function Ve(e, t) {
  let a;
  return r;
  function r(n) {
    return $(n)
      ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), (a = !0), r)
      : K(n)
        ? G(e, r, a ? "linePrefix" : "lineSuffix")(n)
        : t(n);
  }
}
const $l = {
    name: "definition",
    tokenize: Wl,
  },
  Vl = {
    tokenize: Gl,
    partial: !0,
  };
function Wl(e, t, a) {
  const r = this;
  let n;
  return s;
  function s(_) {
    return e.enter("definition"), i(_);
  }
  function i(_) {
    return xs.call(
      r,
      e,
      o,
      a,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString",
    )(_);
  }
  function o(_) {
    return (
      (n = qe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
      _ === 58
        ? (e.enter("definitionMarker"),
          e.consume(_),
          e.exit("definitionMarker"),
          u)
        : a(_)
    );
  }
  function u(_) {
    return re(_) ? Ve(e, l)(_) : l(_);
  }
  function l(_) {
    return Cs(
      e,
      p,
      a,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString",
    )(_);
  }
  function p(_) {
    return e.attempt(Vl, h, h)(_);
  }
  function h(_) {
    return K(_) ? G(e, f, "whitespace")(_) : f(_);
  }
  function f(_) {
    return _ === null || $(_)
      ? (e.exit("definition"), r.parser.defined.push(n), t(_))
      : a(_);
  }
}
function Gl(e, t, a) {
  return r;
  function r(o) {
    return re(o) ? Ve(e, n)(o) : a(o);
  }
  function n(o) {
    return Ds(
      e,
      s,
      a,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString",
    )(o);
  }
  function s(o) {
    return K(o) ? G(e, i, "whitespace")(o) : i(o);
  }
  function i(o) {
    return o === null || $(o) ? t(o) : a(o);
  }
}
const Ql = {
  name: "hardBreakEscape",
  tokenize: Xl,
};
function Xl(e, t, a) {
  return r;
  function r(s) {
    return e.enter("hardBreakEscape"), e.consume(s), n;
  }
  function n(s) {
    return $(s) ? (e.exit("hardBreakEscape"), t(s)) : a(s);
  }
}
const Kl = {
  name: "headingAtx",
  tokenize: Zl,
  resolve: Jl,
};
function Jl(e, t) {
  let a = e.length - 2,
    r = 3,
    n,
    s;
  return (
    e[r][1].type === "whitespace" && (r += 2),
    a - 2 > r && e[a][1].type === "whitespace" && (a -= 2),
    e[a][1].type === "atxHeadingSequence" &&
      (r === a - 1 || (a - 4 > r && e[a - 2][1].type === "whitespace")) &&
      (a -= r + 1 === a ? 2 : 4),
    a > r &&
      ((n = {
        type: "atxHeadingText",
        start: e[r][1].start,
        end: e[a][1].end,
      }),
      (s = {
        type: "chunkText",
        start: e[r][1].start,
        end: e[a][1].end,
        contentType: "text",
      }),
      Se(e, r, a - r + 1, [
        ["enter", n, t],
        ["enter", s, t],
        ["exit", s, t],
        ["exit", n, t],
      ])),
    e
  );
}
function Zl(e, t, a) {
  let r = 0;
  return n;
  function n(p) {
    return e.enter("atxHeading"), s(p);
  }
  function s(p) {
    return e.enter("atxHeadingSequence"), i(p);
  }
  function i(p) {
    return p === 35 && r++ < 6
      ? (e.consume(p), i)
      : p === null || re(p)
        ? (e.exit("atxHeadingSequence"), o(p))
        : a(p);
  }
  function o(p) {
    return p === 35
      ? (e.enter("atxHeadingSequence"), u(p))
      : p === null || $(p)
        ? (e.exit("atxHeading"), t(p))
        : K(p)
          ? G(e, o, "whitespace")(p)
          : (e.enter("atxHeadingText"), l(p));
  }
  function u(p) {
    return p === 35 ? (e.consume(p), u) : (e.exit("atxHeadingSequence"), o(p));
  }
  function l(p) {
    return p === null || p === 35 || re(p)
      ? (e.exit("atxHeadingText"), o(p))
      : (e.consume(p), l);
  }
}
const ef = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ],
  ai = ["pre", "script", "style", "textarea"],
  tf = {
    name: "htmlFlow",
    tokenize: sf,
    resolveTo: nf,
    concrete: !0,
  },
  af = {
    tokenize: cf,
    partial: !0,
  },
  rf = {
    tokenize: of,
    partial: !0,
  };
function nf(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); );
  return (
    t > 1 &&
      e[t - 2][1].type === "linePrefix" &&
      ((e[t][1].start = e[t - 2][1].start),
      (e[t + 1][1].start = e[t - 2][1].start),
      e.splice(t - 2, 2)),
    e
  );
}
function sf(e, t, a) {
  const r = this;
  let n, s, i, o, u;
  return l;
  function l(E) {
    return p(E);
  }
  function p(E) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(E), h;
  }
  function h(E) {
    return E === 33
      ? (e.consume(E), f)
      : E === 47
        ? (e.consume(E), (s = !0), b)
        : E === 63
          ? (e.consume(E), (n = 3), r.interrupt ? t : w)
          : me(E)
            ? (e.consume(E), (i = String.fromCharCode(E)), C)
            : a(E);
  }
  function f(E) {
    return E === 45
      ? (e.consume(E), (n = 2), _)
      : E === 91
        ? (e.consume(E), (n = 5), (o = 0), y)
        : me(E)
          ? (e.consume(E), (n = 4), r.interrupt ? t : w)
          : a(E);
  }
  function _(E) {
    return E === 45 ? (e.consume(E), r.interrupt ? t : w) : a(E);
  }
  function y(E) {
    const Re = "CDATA[";
    return E === Re.charCodeAt(o++)
      ? (e.consume(E), o === Re.length ? (r.interrupt ? t : P) : y)
      : a(E);
  }
  function b(E) {
    return me(E) ? (e.consume(E), (i = String.fromCharCode(E)), C) : a(E);
  }
  function C(E) {
    if (E === null || E === 47 || E === 62 || re(E)) {
      const Re = E === 47,
        _t = i.toLowerCase();
      return !Re && !s && ai.includes(_t)
        ? ((n = 1), r.interrupt ? t(E) : P(E))
        : ef.includes(i.toLowerCase())
          ? ((n = 6), Re ? (e.consume(E), T) : r.interrupt ? t(E) : P(E))
          : ((n = 7),
            r.interrupt && !r.parser.lazy[r.now().line]
              ? a(E)
              : s
                ? I(E)
                : O(E));
    }
    return E === 45 || pe(E)
      ? (e.consume(E), (i += String.fromCharCode(E)), C)
      : a(E);
  }
  function T(E) {
    return E === 62 ? (e.consume(E), r.interrupt ? t : P) : a(E);
  }
  function I(E) {
    return K(E) ? (e.consume(E), I) : D(E);
  }
  function O(E) {
    return E === 47
      ? (e.consume(E), D)
      : E === 58 || E === 95 || me(E)
        ? (e.consume(E), M)
        : K(E)
          ? (e.consume(E), O)
          : D(E);
  }
  function M(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || pe(E)
      ? (e.consume(E), M)
      : N(E);
  }
  function N(E) {
    return E === 61 ? (e.consume(E), d) : K(E) ? (e.consume(E), N) : O(E);
  }
  function d(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96
      ? a(E)
      : E === 34 || E === 39
        ? (e.consume(E), (u = E), z)
        : K(E)
          ? (e.consume(E), d)
          : U(E);
  }
  function z(E) {
    return E === u
      ? (e.consume(E), (u = null), V)
      : E === null || $(E)
        ? a(E)
        : (e.consume(E), z);
  }
  function U(E) {
    return E === null ||
      E === 34 ||
      E === 39 ||
      E === 47 ||
      E === 60 ||
      E === 61 ||
      E === 62 ||
      E === 96 ||
      re(E)
      ? N(E)
      : (e.consume(E), U);
  }
  function V(E) {
    return E === 47 || E === 62 || K(E) ? O(E) : a(E);
  }
  function D(E) {
    return E === 62 ? (e.consume(E), S) : a(E);
  }
  function S(E) {
    return E === null || $(E) ? P(E) : K(E) ? (e.consume(E), S) : a(E);
  }
  function P(E) {
    return E === 45 && n === 2
      ? (e.consume(E), Y)
      : E === 60 && n === 1
        ? (e.consume(E), A)
        : E === 62 && n === 4
          ? (e.consume(E), Te)
          : E === 63 && n === 3
            ? (e.consume(E), w)
            : E === 93 && n === 5
              ? (e.consume(E), ie)
              : $(E) && (n === 6 || n === 7)
                ? (e.exit("htmlFlowData"), e.check(af, Ne, Q)(E))
                : E === null || $(E)
                  ? (e.exit("htmlFlowData"), Q(E))
                  : (e.consume(E), P);
  }
  function Q(E) {
    return e.check(rf, te, Ne)(E);
  }
  function te(E) {
    return e.enter("lineEnding"), e.consume(E), e.exit("lineEnding"), B;
  }
  function B(E) {
    return E === null || $(E) ? Q(E) : (e.enter("htmlFlowData"), P(E));
  }
  function Y(E) {
    return E === 45 ? (e.consume(E), w) : P(E);
  }
  function A(E) {
    return E === 47 ? (e.consume(E), (i = ""), J) : P(E);
  }
  function J(E) {
    if (E === 62) {
      const Re = i.toLowerCase();
      return ai.includes(Re) ? (e.consume(E), Te) : P(E);
    }
    return me(E) && i.length < 8
      ? (e.consume(E), (i += String.fromCharCode(E)), J)
      : P(E);
  }
  function ie(E) {
    return E === 93 ? (e.consume(E), w) : P(E);
  }
  function w(E) {
    return E === 62
      ? (e.consume(E), Te)
      : E === 45 && n === 2
        ? (e.consume(E), w)
        : P(E);
  }
  function Te(E) {
    return E === null || $(E)
      ? (e.exit("htmlFlowData"), Ne(E))
      : (e.consume(E), Te);
  }
  function Ne(E) {
    return e.exit("htmlFlow"), t(E);
  }
}
function of(e, t, a) {
  const r = this;
  return n;
  function n(i) {
    return $(i)
      ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), s)
      : a(i);
  }
  function s(i) {
    return r.parser.lazy[r.now().line] ? a(i) : t(i);
  }
}
function cf(e, t, a) {
  return r;
  function r(n) {
    return (
      e.enter("lineEnding"),
      e.consume(n),
      e.exit("lineEnding"),
      e.attempt(ma, t, a)
    );
  }
}
const uf = {
  name: "htmlText",
  tokenize: lf,
};
function lf(e, t, a) {
  const r = this;
  let n, s, i;
  return o;
  function o(w) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(w), u;
  }
  function u(w) {
    return w === 33
      ? (e.consume(w), l)
      : w === 47
        ? (e.consume(w), N)
        : w === 63
          ? (e.consume(w), O)
          : me(w)
            ? (e.consume(w), U)
            : a(w);
  }
  function l(w) {
    return w === 45
      ? (e.consume(w), p)
      : w === 91
        ? (e.consume(w), (s = 0), y)
        : me(w)
          ? (e.consume(w), I)
          : a(w);
  }
  function p(w) {
    return w === 45 ? (e.consume(w), _) : a(w);
  }
  function h(w) {
    return w === null
      ? a(w)
      : w === 45
        ? (e.consume(w), f)
        : $(w)
          ? ((i = h), A(w))
          : (e.consume(w), h);
  }
  function f(w) {
    return w === 45 ? (e.consume(w), _) : h(w);
  }
  function _(w) {
    return w === 62 ? Y(w) : w === 45 ? f(w) : h(w);
  }
  function y(w) {
    const Te = "CDATA[";
    return w === Te.charCodeAt(s++)
      ? (e.consume(w), s === Te.length ? b : y)
      : a(w);
  }
  function b(w) {
    return w === null
      ? a(w)
      : w === 93
        ? (e.consume(w), C)
        : $(w)
          ? ((i = b), A(w))
          : (e.consume(w), b);
  }
  function C(w) {
    return w === 93 ? (e.consume(w), T) : b(w);
  }
  function T(w) {
    return w === 62 ? Y(w) : w === 93 ? (e.consume(w), T) : b(w);
  }
  function I(w) {
    return w === null || w === 62
      ? Y(w)
      : $(w)
        ? ((i = I), A(w))
        : (e.consume(w), I);
  }
  function O(w) {
    return w === null
      ? a(w)
      : w === 63
        ? (e.consume(w), M)
        : $(w)
          ? ((i = O), A(w))
          : (e.consume(w), O);
  }
  function M(w) {
    return w === 62 ? Y(w) : O(w);
  }
  function N(w) {
    return me(w) ? (e.consume(w), d) : a(w);
  }
  function d(w) {
    return w === 45 || pe(w) ? (e.consume(w), d) : z(w);
  }
  function z(w) {
    return $(w) ? ((i = z), A(w)) : K(w) ? (e.consume(w), z) : Y(w);
  }
  function U(w) {
    return w === 45 || pe(w)
      ? (e.consume(w), U)
      : w === 47 || w === 62 || re(w)
        ? V(w)
        : a(w);
  }
  function V(w) {
    return w === 47
      ? (e.consume(w), Y)
      : w === 58 || w === 95 || me(w)
        ? (e.consume(w), D)
        : $(w)
          ? ((i = V), A(w))
          : K(w)
            ? (e.consume(w), V)
            : Y(w);
  }
  function D(w) {
    return w === 45 || w === 46 || w === 58 || w === 95 || pe(w)
      ? (e.consume(w), D)
      : S(w);
  }
  function S(w) {
    return w === 61
      ? (e.consume(w), P)
      : $(w)
        ? ((i = S), A(w))
        : K(w)
          ? (e.consume(w), S)
          : V(w);
  }
  function P(w) {
    return w === null || w === 60 || w === 61 || w === 62 || w === 96
      ? a(w)
      : w === 34 || w === 39
        ? (e.consume(w), (n = w), Q)
        : $(w)
          ? ((i = P), A(w))
          : K(w)
            ? (e.consume(w), P)
            : (e.consume(w), te);
  }
  function Q(w) {
    return w === n
      ? (e.consume(w), (n = void 0), B)
      : w === null
        ? a(w)
        : $(w)
          ? ((i = Q), A(w))
          : (e.consume(w), Q);
  }
  function te(w) {
    return w === null ||
      w === 34 ||
      w === 39 ||
      w === 60 ||
      w === 61 ||
      w === 96
      ? a(w)
      : w === 47 || w === 62 || re(w)
        ? V(w)
        : (e.consume(w), te);
  }
  function B(w) {
    return w === 47 || w === 62 || re(w) ? V(w) : a(w);
  }
  function Y(w) {
    return w === 62
      ? (e.consume(w), e.exit("htmlTextData"), e.exit("htmlText"), t)
      : a(w);
  }
  function A(w) {
    return (
      e.exit("htmlTextData"),
      e.enter("lineEnding"),
      e.consume(w),
      e.exit("lineEnding"),
      J
    );
  }
  function J(w) {
    return K(w)
      ? G(
          e,
          ie,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented")
            ? void 0
            : 4,
        )(w)
      : ie(w);
  }
  function ie(w) {
    return e.enter("htmlTextData"), i(w);
  }
}
const nn = {
    name: "labelEnd",
    tokenize: mf,
    resolveTo: _f,
    resolveAll: pf,
  },
  ff = {
    tokenize: gf,
  },
  hf = {
    tokenize: yf,
  },
  df = {
    tokenize: kf,
  };
function pf(e) {
  let t = -1;
  for (; ++t < e.length; ) {
    const a = e[t][1];
    (a.type === "labelImage" ||
      a.type === "labelLink" ||
      a.type === "labelEnd") &&
      (e.splice(t + 1, a.type === "labelImage" ? 4 : 2),
      (a.type = "data"),
      t++);
  }
  return e;
}
function _f(e, t) {
  let a = e.length,
    r = 0,
    n,
    s,
    i,
    o;
  for (; a--; )
    if (((n = e[a][1]), s)) {
      if (n.type === "link" || (n.type === "labelLink" && n._inactive)) break;
      e[a][0] === "enter" && n.type === "labelLink" && (n._inactive = !0);
    } else if (i) {
      if (
        e[a][0] === "enter" &&
        (n.type === "labelImage" || n.type === "labelLink") &&
        !n._balanced &&
        ((s = a), n.type !== "labelLink")
      ) {
        r = 2;
        break;
      }
    } else n.type === "labelEnd" && (i = a);
  const u = {
      type: e[s][1].type === "labelLink" ? "link" : "image",
      start: Object.assign({}, e[s][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    },
    l = {
      type: "label",
      start: Object.assign({}, e[s][1].start),
      end: Object.assign({}, e[i][1].end),
    },
    p = {
      type: "labelText",
      start: Object.assign({}, e[s + r + 2][1].end),
      end: Object.assign({}, e[i - 2][1].start),
    };
  return (
    (o = [
      ["enter", u, t],
      ["enter", l, t],
    ]),
    (o = Oe(o, e.slice(s + 1, s + r + 3))),
    (o = Oe(o, [["enter", p, t]])),
    (o = Oe(
      o,
      Qa(t.parser.constructs.insideSpan.null, e.slice(s + r + 4, i - 3), t),
    )),
    (o = Oe(o, [["exit", p, t], e[i - 2], e[i - 1], ["exit", l, t]])),
    (o = Oe(o, e.slice(i + 1))),
    (o = Oe(o, [["exit", u, t]])),
    Se(e, s, e.length, o),
    e
  );
}
function mf(e, t, a) {
  const r = this;
  let n = r.events.length,
    s,
    i;
  for (; n--; )
    if (
      (r.events[n][1].type === "labelImage" ||
        r.events[n][1].type === "labelLink") &&
      !r.events[n][1]._balanced
    ) {
      s = r.events[n][1];
      break;
    }
  return o;
  function o(f) {
    return s
      ? s._inactive
        ? h(f)
        : ((i = r.parser.defined.includes(
            qe(
              r.sliceSerialize({
                start: s.end,
                end: r.now(),
              }),
            ),
          )),
          e.enter("labelEnd"),
          e.enter("labelMarker"),
          e.consume(f),
          e.exit("labelMarker"),
          e.exit("labelEnd"),
          u)
      : a(f);
  }
  function u(f) {
    return f === 40
      ? e.attempt(ff, p, i ? p : h)(f)
      : f === 91
        ? e.attempt(hf, p, i ? l : h)(f)
        : i
          ? p(f)
          : h(f);
  }
  function l(f) {
    return e.attempt(df, p, h)(f);
  }
  function p(f) {
    return t(f);
  }
  function h(f) {
    return (s._balanced = !0), a(f);
  }
}
function gf(e, t, a) {
  return r;
  function r(h) {
    return (
      e.enter("resource"),
      e.enter("resourceMarker"),
      e.consume(h),
      e.exit("resourceMarker"),
      n
    );
  }
  function n(h) {
    return re(h) ? Ve(e, s)(h) : s(h);
  }
  function s(h) {
    return h === 41
      ? p(h)
      : Cs(
          e,
          i,
          o,
          "resourceDestination",
          "resourceDestinationLiteral",
          "resourceDestinationLiteralMarker",
          "resourceDestinationRaw",
          "resourceDestinationString",
          32,
        )(h);
  }
  function i(h) {
    return re(h) ? Ve(e, u)(h) : p(h);
  }
  function o(h) {
    return a(h);
  }
  function u(h) {
    return h === 34 || h === 39 || h === 40
      ? Ds(
          e,
          l,
          a,
          "resourceTitle",
          "resourceTitleMarker",
          "resourceTitleString",
        )(h)
      : p(h);
  }
  function l(h) {
    return re(h) ? Ve(e, p)(h) : p(h);
  }
  function p(h) {
    return h === 41
      ? (e.enter("resourceMarker"),
        e.consume(h),
        e.exit("resourceMarker"),
        e.exit("resource"),
        t)
      : a(h);
  }
}
function yf(e, t, a) {
  const r = this;
  return n;
  function n(o) {
    return xs.call(
      r,
      e,
      s,
      i,
      "reference",
      "referenceMarker",
      "referenceString",
    )(o);
  }
  function s(o) {
    return r.parser.defined.includes(
      qe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)),
    )
      ? t(o)
      : a(o);
  }
  function i(o) {
    return a(o);
  }
}
function kf(e, t, a) {
  return r;
  function r(s) {
    return (
      e.enter("reference"),
      e.enter("referenceMarker"),
      e.consume(s),
      e.exit("referenceMarker"),
      n
    );
  }
  function n(s) {
    return s === 93
      ? (e.enter("referenceMarker"),
        e.consume(s),
        e.exit("referenceMarker"),
        e.exit("reference"),
        t)
      : a(s);
  }
}
const bf = {
  name: "labelStartImage",
  tokenize: wf,
  resolveAll: nn.resolveAll,
};
function wf(e, t, a) {
  const r = this;
  return n;
  function n(o) {
    return (
      e.enter("labelImage"),
      e.enter("labelImageMarker"),
      e.consume(o),
      e.exit("labelImageMarker"),
      s
    );
  }
  function s(o) {
    return o === 91
      ? (e.enter("labelMarker"),
        e.consume(o),
        e.exit("labelMarker"),
        e.exit("labelImage"),
        i)
      : a(o);
  }
  function i(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
      ? a(o)
      : t(o);
  }
}
const Ef = {
  name: "labelStartLink",
  tokenize: Tf,
  resolveAll: nn.resolveAll,
};
function Tf(e, t, a) {
  const r = this;
  return n;
  function n(i) {
    return (
      e.enter("labelLink"),
      e.enter("labelMarker"),
      e.consume(i),
      e.exit("labelMarker"),
      e.exit("labelLink"),
      s
    );
  }
  function s(i) {
    return i === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
      ? a(i)
      : t(i);
  }
}
const pr = {
  name: "lineEnding",
  tokenize: Af,
};
function Af(e, t) {
  return a;
  function a(r) {
    return (
      e.enter("lineEnding"),
      e.consume(r),
      e.exit("lineEnding"),
      G(e, t, "linePrefix")
    );
  }
}
const Ia = {
  name: "thematicBreak",
  tokenize: Cf,
};
function Cf(e, t, a) {
  let r = 0,
    n;
  return s;
  function s(l) {
    return e.enter("thematicBreak"), i(l);
  }
  function i(l) {
    return (n = l), o(l);
  }
  function o(l) {
    return l === n
      ? (e.enter("thematicBreakSequence"), u(l))
      : r >= 3 && (l === null || $(l))
        ? (e.exit("thematicBreak"), t(l))
        : a(l);
  }
  function u(l) {
    return l === n
      ? (e.consume(l), r++, u)
      : (e.exit("thematicBreakSequence"),
        K(l) ? G(e, o, "whitespace")(l) : o(l));
  }
}
const Ce = {
    name: "list",
    tokenize: zf,
    continuation: {
      tokenize: If,
    },
    exit: Nf,
  },
  xf = {
    tokenize: Ff,
    partial: !0,
  },
  Df = {
    tokenize: Sf,
    partial: !0,
  };
function zf(e, t, a) {
  const r = this,
    n = r.events[r.events.length - 1];
  let s =
      n && n[1].type === "linePrefix"
        ? n[2].sliceSerialize(n[1], !0).length
        : 0,
    i = 0;
  return o;
  function o(_) {
    const y =
      r.containerState.type ||
      (_ === 42 || _ === 43 || _ === 45 ? "listUnordered" : "listOrdered");
    if (
      y === "listUnordered"
        ? !r.containerState.marker || _ === r.containerState.marker
        : Or(_)
    ) {
      if (
        (r.containerState.type ||
          ((r.containerState.type = y),
          e.enter(y, {
            _container: !0,
          })),
        y === "listUnordered")
      )
        return (
          e.enter("listItemPrefix"),
          _ === 42 || _ === 45 ? e.check(Ia, a, l)(_) : l(_)
        );
      if (!r.interrupt || _ === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(_);
    }
    return a(_);
  }
  function u(_) {
    return Or(_) && ++i < 10
      ? (e.consume(_), u)
      : (!r.interrupt || i < 2) &&
          (r.containerState.marker
            ? _ === r.containerState.marker
            : _ === 41 || _ === 46)
        ? (e.exit("listItemValue"), l(_))
        : a(_);
  }
  function l(_) {
    return (
      e.enter("listItemMarker"),
      e.consume(_),
      e.exit("listItemMarker"),
      (r.containerState.marker = r.containerState.marker || _),
      e.check(ma, r.interrupt ? a : p, e.attempt(xf, f, h))
    );
  }
  function p(_) {
    return (r.containerState.initialBlankLine = !0), s++, f(_);
  }
  function h(_) {
    return K(_)
      ? (e.enter("listItemPrefixWhitespace"),
        e.consume(_),
        e.exit("listItemPrefixWhitespace"),
        f)
      : a(_);
  }
  function f(_) {
    return (
      (r.containerState.size =
        s + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
      t(_)
    );
  }
}
function If(e, t, a) {
  const r = this;
  return (r.containerState._closeFlow = void 0), e.check(ma, n, s);
  function n(o) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines ||
        r.containerState.initialBlankLine),
      G(e, t, "listItemIndent", r.containerState.size + 1)(o)
    );
  }
  function s(o) {
    return r.containerState.furtherBlankLines || !K(o)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        i(o))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(Df, t, i)(o));
  }
  function i(o) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      G(
        e,
        e.attempt(Ce, t, a),
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
      )(o)
    );
  }
}
function Sf(e, t, a) {
  const r = this;
  return G(e, n, "listItemIndent", r.containerState.size + 1);
  function n(s) {
    const i = r.events[r.events.length - 1];
    return i &&
      i[1].type === "listItemIndent" &&
      i[2].sliceSerialize(i[1], !0).length === r.containerState.size
      ? t(s)
      : a(s);
  }
}
function Nf(e) {
  e.exit(this.containerState.type);
}
function Ff(e, t, a) {
  const r = this;
  return G(
    e,
    n,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5,
  );
  function n(s) {
    const i = r.events[r.events.length - 1];
    return !K(s) && i && i[1].type === "listItemPrefixWhitespace" ? t(s) : a(s);
  }
}
const ri = {
  name: "setextUnderline",
  tokenize: Lf,
  resolveTo: Of,
};
function Of(e, t) {
  let a = e.length,
    r,
    n,
    s;
  for (; a--; )
    if (e[a][0] === "enter") {
      if (e[a][1].type === "content") {
        r = a;
        break;
      }
      e[a][1].type === "paragraph" && (n = a);
    } else
      e[a][1].type === "content" && e.splice(a, 1),
        !s && e[a][1].type === "definition" && (s = a);
  const i = {
    type: "setextHeading",
    start: Object.assign({}, e[n][1].start),
    end: Object.assign({}, e[e.length - 1][1].end),
  };
  return (
    (e[n][1].type = "setextHeadingText"),
    s
      ? (e.splice(n, 0, ["enter", i, t]),
        e.splice(s + 1, 0, ["exit", e[r][1], t]),
        (e[r][1].end = Object.assign({}, e[s][1].end)))
      : (e[r][1] = i),
    e.push(["exit", i, t]),
    e
  );
}
function Lf(e, t, a) {
  const r = this;
  let n;
  return s;
  function s(l) {
    let p = r.events.length,
      h;
    for (; p--; )
      if (
        r.events[p][1].type !== "lineEnding" &&
        r.events[p][1].type !== "linePrefix" &&
        r.events[p][1].type !== "content"
      ) {
        h = r.events[p][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || h)
      ? (e.enter("setextHeadingLine"), (n = l), i(l))
      : a(l);
  }
  function i(l) {
    return e.enter("setextHeadingLineSequence"), o(l);
  }
  function o(l) {
    return l === n
      ? (e.consume(l), o)
      : (e.exit("setextHeadingLineSequence"),
        K(l) ? G(e, u, "lineSuffix")(l) : u(l));
  }
  function u(l) {
    return l === null || $(l) ? (e.exit("setextHeadingLine"), t(l)) : a(l);
  }
}
const Rf = {
  tokenize: vf,
};
function vf(e) {
  const t = this,
    a = e.attempt(
      ma,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        n,
        G(
          e,
          e.attempt(this.parser.constructs.flow, n, e.attempt(Hl, n)),
          "linePrefix",
        ),
      ),
    );
  return a;
  function r(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return (
      e.enter("lineEndingBlank"),
      e.consume(s),
      e.exit("lineEndingBlank"),
      (t.currentConstruct = void 0),
      a
    );
  }
  function n(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(s),
      e.exit("lineEnding"),
      (t.currentConstruct = void 0),
      a
    );
  }
}
const Bf = {
    resolveAll: Is(),
  },
  Pf = zs("string"),
  Mf = zs("text");
function zs(e) {
  return {
    tokenize: t,
    resolveAll: Is(e === "text" ? Hf : void 0),
  };
  function t(a) {
    const r = this,
      n = this.parser.constructs[e],
      s = a.attempt(n, i, o);
    return i;
    function i(p) {
      return l(p) ? s(p) : o(p);
    }
    function o(p) {
      if (p === null) {
        a.consume(p);
        return;
      }
      return a.enter("data"), a.consume(p), u;
    }
    function u(p) {
      return l(p) ? (a.exit("data"), s(p)) : (a.consume(p), u);
    }
    function l(p) {
      if (p === null) return !0;
      const h = n[p];
      let f = -1;
      if (h)
        for (; ++f < h.length; ) {
          const _ = h[f];
          if (!_.previous || _.previous.call(r, r.previous)) return !0;
        }
      return !1;
    }
  }
}
function Is(e) {
  return t;
  function t(a, r) {
    let n = -1,
      s;
    for (; ++n <= a.length; )
      s === void 0
        ? a[n] && a[n][1].type === "data" && ((s = n), n++)
        : (!a[n] || a[n][1].type !== "data") &&
          (n !== s + 2 &&
            ((a[s][1].end = a[n - 1][1].end),
            a.splice(s + 2, n - s - 2),
            (n = s + 2)),
          (s = void 0));
    return e ? e(a, r) : a;
  }
}
function Hf(e, t) {
  let a = 0;
  for (; ++a <= e.length; )
    if (
      (a === e.length || e[a][1].type === "lineEnding") &&
      e[a - 1][1].type === "data"
    ) {
      const r = e[a - 1][1],
        n = t.sliceStream(r);
      let s = n.length,
        i = -1,
        o = 0,
        u;
      for (; s--; ) {
        const l = n[s];
        if (typeof l == "string") {
          for (i = l.length; l.charCodeAt(i - 1) === 32; ) o++, i--;
          if (i) break;
          i = -1;
        } else if (l === -2) (u = !0), o++;
        else if (l !== -1) {
          s++;
          break;
        }
      }
      if (o) {
        const l = {
          type:
            a === e.length || u || o < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: r.end.line,
            column: r.end.column - o,
            offset: r.end.offset - o,
            _index: r.start._index + s,
            _bufferIndex: s ? i : r.start._bufferIndex + i,
          },
          end: Object.assign({}, r.end),
        };
        (r.end = Object.assign({}, l.start)),
          r.start.offset === r.end.offset
            ? Object.assign(r, l)
            : (e.splice(a, 0, ["enter", l, t], ["exit", l, t]), (a += 2));
      }
      a++;
    }
  return e;
}
function Uf(e, t, a) {
  let r = Object.assign(
    a
      ? Object.assign({}, a)
      : {
          line: 1,
          column: 1,
          offset: 0,
        },
    {
      _index: 0,
      _bufferIndex: -1,
    },
  );
  const n = {},
    s = [];
  let i = [],
    o = [];
  const u = {
      consume: I,
      enter: O,
      exit: M,
      attempt: z(N),
      check: z(d),
      interrupt: z(d, {
        interrupt: !0,
      }),
    },
    l = {
      previous: null,
      code: null,
      containerState: {},
      events: [],
      parser: e,
      sliceStream: _,
      sliceSerialize: f,
      now: y,
      defineSkip: b,
      write: h,
    };
  let p = t.tokenize.call(l, u);
  return t.resolveAll && s.push(t), l;
  function h(S) {
    return (
      (i = Oe(i, S)),
      C(),
      i[i.length - 1] !== null
        ? []
        : (U(t, 0), (l.events = Qa(s, l.events, l)), l.events)
    );
  }
  function f(S, P) {
    return qf(_(S), P);
  }
  function _(S) {
    return jf(i, S);
  }
  function y() {
    const { line: S, column: P, offset: Q, _index: te, _bufferIndex: B } = r;
    return {
      line: S,
      column: P,
      offset: Q,
      _index: te,
      _bufferIndex: B,
    };
  }
  function b(S) {
    (n[S.line] = S.column), D();
  }
  function C() {
    let S;
    for (; r._index < i.length; ) {
      const P = i[r._index];
      if (typeof P == "string")
        for (
          S = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === S && r._bufferIndex < P.length;

        )
          T(P.charCodeAt(r._bufferIndex));
      else T(P);
    }
  }
  function T(S) {
    p = p(S);
  }
  function I(S) {
    $(S)
      ? (r.line++, (r.column = 1), (r.offset += S === -3 ? 2 : 1), D())
      : S !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === i[r._index].length &&
            ((r._bufferIndex = -1), r._index++)),
      (l.previous = S);
  }
  function O(S, P) {
    const Q = P || {};
    return (
      (Q.type = S),
      (Q.start = y()),
      l.events.push(["enter", Q, l]),
      o.push(Q),
      Q
    );
  }
  function M(S) {
    const P = o.pop();
    return (P.end = y()), l.events.push(["exit", P, l]), P;
  }
  function N(S, P) {
    U(S, P.from);
  }
  function d(S, P) {
    P.restore();
  }
  function z(S, P) {
    return Q;
    function Q(te, B, Y) {
      let A, J, ie, w;
      return Array.isArray(te) ? Ne(te) : "tokenize" in te ? Ne([te]) : Te(te);
      function Te(ye) {
        return Yt;
        function Yt(nt) {
          const zt = nt !== null && ye[nt],
            mt = nt !== null && ye.null,
            ir = [
              ...(Array.isArray(zt) ? zt : zt ? [zt] : []),
              ...(Array.isArray(mt) ? mt : mt ? [mt] : []),
            ];
          return Ne(ir)(nt);
        }
      }
      function Ne(ye) {
        return (A = ye), (J = 0), ye.length === 0 ? Y : E(ye[J]);
      }
      function E(ye) {
        return Yt;
        function Yt(nt) {
          return (
            (w = V()),
            (ie = ye),
            ye.partial || (l.currentConstruct = ye),
            ye.name && l.parser.constructs.disable.null.includes(ye.name)
              ? _t()
              : ye.tokenize.call(
                  P ? Object.assign(Object.create(l), P) : l,
                  u,
                  Re,
                  _t,
                )(nt)
          );
        }
      }
      function Re(ye) {
        return S(ie, w), B;
      }
      function _t(ye) {
        return w.restore(), ++J < A.length ? E(A[J]) : Y;
      }
    }
  }
  function U(S, P) {
    S.resolveAll && !s.includes(S) && s.push(S),
      S.resolve &&
        Se(l.events, P, l.events.length - P, S.resolve(l.events.slice(P), l)),
      S.resolveTo && (l.events = S.resolveTo(l.events, l));
  }
  function V() {
    const S = y(),
      P = l.previous,
      Q = l.currentConstruct,
      te = l.events.length,
      B = Array.from(o);
    return {
      restore: Y,
      from: te,
    };
    function Y() {
      (r = S),
        (l.previous = P),
        (l.currentConstruct = Q),
        (l.events.length = te),
        (o = B),
        D();
    }
  }
  function D() {
    r.line in n &&
      r.column < 2 &&
      ((r.column = n[r.line]), (r.offset += n[r.line] - 1));
  }
}
function jf(e, t) {
  const a = t.start._index,
    r = t.start._bufferIndex,
    n = t.end._index,
    s = t.end._bufferIndex;
  let i;
  if (a === n) i = [e[a].slice(r, s)];
  else {
    if (((i = e.slice(a, n)), r > -1)) {
      const o = i[0];
      typeof o == "string" ? (i[0] = o.slice(r)) : i.shift();
    }
    s > 0 && i.push(e[n].slice(0, s));
  }
  return i;
}
function qf(e, t) {
  let a = -1;
  const r = [];
  let n;
  for (; ++a < e.length; ) {
    const s = e[a];
    let i;
    if (typeof s == "string") i = s;
    else
      switch (s) {
        case -5: {
          i = "\r";
          break;
        }
        case -4: {
          i = `
`;
          break;
        }
        case -3: {
          i = `\r
`;
          break;
        }
        case -2: {
          i = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && n) continue;
          i = " ";
          break;
        }
        default:
          i = String.fromCharCode(s);
      }
    (n = s === -2), r.push(i);
  }
  return r.join("");
}
const Yf = {
    42: Ce,
    43: Ce,
    45: Ce,
    48: Ce,
    49: Ce,
    50: Ce,
    51: Ce,
    52: Ce,
    53: Ce,
    54: Ce,
    55: Ce,
    56: Ce,
    57: Ce,
    62: ws,
  },
  $f = {
    91: $l,
  },
  Vf = {
    [-2]: dr,
    [-1]: dr,
    32: dr,
  },
  Wf = {
    35: Kl,
    42: Ia,
    45: [ri, Ia],
    60: tf,
    61: ri,
    95: Ia,
    96: Rr,
    126: Rr,
  },
  Gf = {
    38: Ts,
    92: Es,
  },
  Qf = {
    [-5]: pr,
    [-4]: pr,
    [-3]: pr,
    33: bf,
    38: Ts,
    42: Lr,
    60: [El, uf],
    91: Ef,
    92: [Ql, Es],
    93: nn,
    95: Lr,
    96: Rl,
  },
  Xf = {
    null: [Lr, Bf],
  },
  Kf = {
    null: [42, 95],
  },
  Jf = {
    null: [],
  },
  Zf = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: Kf,
        contentInitial: $f,
        disable: Jf,
        document: Yf,
        flow: Wf,
        flowInitial: Vf,
        insideSpan: Xf,
        string: Gf,
        text: Qf,
      },
      Symbol.toStringTag,
      {
        value: "Module",
      },
    ),
  );
function eh(e) {
  const a = ks([Zf, ...((e || {}).extensions || [])]),
    r = {
      defined: [],
      lazy: {},
      constructs: a,
      content: n(_l),
      document: n(gl),
      flow: n(Rf),
      string: n(Pf),
      text: n(Mf),
    };
  return r;
  function n(s) {
    return i;
    function i(o) {
      return Uf(r, s, o);
    }
  }
}
function th(e) {
  for (; !As(e); );
  return e;
}
const ni = /[\0\t\n\r]/g;
function ah() {
  let e = 1,
    t = "",
    a = !0,
    r;
  return n;
  function n(s, i, o) {
    const u = [];
    let l, p, h, f, _;
    for (
      s =
        t +
        (typeof s == "string"
          ? s.toString()
          : new TextDecoder(i || void 0).decode(s)),
        h = 0,
        t = "",
        a && (s.charCodeAt(0) === 65279 && h++, (a = void 0));
      h < s.length;

    ) {
      if (
        ((ni.lastIndex = h),
        (l = ni.exec(s)),
        (f = l && l.index !== void 0 ? l.index : s.length),
        (_ = s.charCodeAt(f)),
        !l)
      ) {
        t = s.slice(h);
        break;
      }
      if (_ === 10 && h === f && r) u.push(-3), (r = void 0);
      else
        switch (
          (r && (u.push(-5), (r = void 0)),
          h < f && (u.push(s.slice(h, f)), (e += f - h)),
          _)
        ) {
          case 0: {
            u.push(65533), e++;
            break;
          }
          case 9: {
            for (p = Math.ceil(e / 4) * 4, u.push(-2); e++ < p; ) u.push(-1);
            break;
          }
          case 10: {
            u.push(-4), (e = 1);
            break;
          }
          default:
            (r = !0), (e = 1);
        }
      h = f + 1;
    }
    return o && (r && u.push(-5), t && u.push(t), u.push(null)), u;
  }
}
const rh = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function nh(e) {
  return e.replace(rh, ih);
}
function ih(e, t, a) {
  if (t) return t;
  if (a.charCodeAt(0) === 35) {
    const n = a.charCodeAt(1),
      s = n === 120 || n === 88;
    return bs(a.slice(s ? 2 : 1), s ? 16 : 10);
  }
  return ca(a) || e;
}
const Ss = {}.hasOwnProperty;
function sh(e, t, a) {
  return (
    typeof t != "string" && ((a = t), (t = void 0)),
    oh(a)(
      th(
        eh(a)
          .document()
          .write(ah()(e, t, !0)),
      ),
    )
  );
}
function oh(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: s(On),
      autolinkProtocol: V,
      autolinkEmail: V,
      atxHeading: s(Sn),
      blockQuote: s(zt),
      characterEscape: V,
      characterReference: V,
      codeFenced: s(mt),
      codeFencedFenceInfo: i,
      codeFencedFenceMeta: i,
      codeIndented: s(mt, i),
      codeText: s(ir, i),
      codeTextData: V,
      data: V,
      codeFlowValue: V,
      definition: s(ru),
      definitionDestinationString: i,
      definitionLabelString: i,
      definitionTitleString: i,
      emphasis: s(nu),
      hardBreakEscape: s(Nn),
      hardBreakTrailing: s(Nn),
      htmlFlow: s(Fn, i),
      htmlFlowData: V,
      htmlText: s(Fn, i),
      htmlTextData: V,
      image: s(iu),
      label: i,
      link: s(On),
      listItem: s(su),
      listItemValue: f,
      listOrdered: s(Ln, h),
      listUnordered: s(Ln),
      paragraph: s(ou),
      reference: E,
      referenceString: i,
      resourceDestinationString: i,
      resourceTitleString: i,
      setextHeading: s(Sn),
      strong: s(cu),
      thematicBreak: s(lu),
    },
    exit: {
      atxHeading: u(),
      atxHeadingSequence: N,
      autolink: u(),
      autolinkEmail: nt,
      autolinkProtocol: Yt,
      blockQuote: u(),
      characterEscapeValue: D,
      characterReferenceMarkerHexadecimal: _t,
      characterReferenceMarkerNumeric: _t,
      characterReferenceValue: ye,
      codeFenced: u(C),
      codeFencedFence: b,
      codeFencedFenceInfo: _,
      codeFencedFenceMeta: y,
      codeFlowValue: D,
      codeIndented: u(T),
      codeText: u(B),
      codeTextData: D,
      data: D,
      definition: u(),
      definitionDestinationString: M,
      definitionLabelString: I,
      definitionTitleString: O,
      emphasis: u(),
      hardBreakEscape: u(P),
      hardBreakTrailing: u(P),
      htmlFlow: u(Q),
      htmlFlowData: D,
      htmlText: u(te),
      htmlTextData: D,
      image: u(A),
      label: ie,
      labelText: J,
      lineEnding: S,
      link: u(Y),
      listItem: u(),
      listOrdered: u(),
      listUnordered: u(),
      paragraph: u(),
      referenceString: Re,
      resourceDestinationString: w,
      resourceTitleString: Te,
      resource: Ne,
      setextHeading: u(U),
      setextHeadingLineSequence: z,
      setextHeadingText: d,
      strong: u(),
      thematicBreak: u(),
    },
  };
  Ns(t, (e || {}).mdastExtensions || []);
  const a = {};
  return r;
  function r(R) {
    let j = {
      type: "root",
      children: [],
    };
    const Z = {
        stack: [j],
        tokenStack: [],
        config: t,
        enter: o,
        exit: l,
        buffer: i,
        resume: p,
        data: a,
      },
      ne = [];
    let oe = -1;
    for (; ++oe < R.length; )
      if (R[oe][1].type === "listOrdered" || R[oe][1].type === "listUnordered")
        if (R[oe][0] === "enter") ne.push(oe);
        else {
          const ve = ne.pop();
          oe = n(R, ve, oe);
        }
    for (oe = -1; ++oe < R.length; ) {
      const ve = t[R[oe][0]];
      Ss.call(ve, R[oe][1].type) &&
        ve[R[oe][1].type].call(
          Object.assign(
            {
              sliceSerialize: R[oe][2].sliceSerialize,
            },
            Z,
          ),
          R[oe][1],
        );
    }
    if (Z.tokenStack.length > 0) {
      const ve = Z.tokenStack[Z.tokenStack.length - 1];
      (ve[1] || ii).call(Z, void 0, ve[0]);
    }
    for (
      j.position = {
        start: it(
          R.length > 0
            ? R[0][1].start
            : {
                line: 1,
                column: 1,
                offset: 0,
              },
        ),
        end: it(
          R.length > 0
            ? R[R.length - 2][1].end
            : {
                line: 1,
                column: 1,
                offset: 0,
              },
        ),
      },
        oe = -1;
      ++oe < t.transforms.length;

    )
      j = t.transforms[oe](j) || j;
    return j;
  }
  function n(R, j, Z) {
    let ne = j - 1,
      oe = -1,
      ve = !1,
      gt,
      Xe,
      $t,
      Vt;
    for (; ++ne <= Z; ) {
      const ze = R[ne];
      switch (ze[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ze[0] === "enter" ? oe++ : oe--, (Vt = void 0);
          break;
        }
        case "lineEndingBlank": {
          ze[0] === "enter" &&
            (gt && !Vt && !oe && !$t && ($t = ne), (Vt = void 0));
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Vt = void 0;
      }
      if (
        (!oe && ze[0] === "enter" && ze[1].type === "listItemPrefix") ||
        (oe === -1 &&
          ze[0] === "exit" &&
          (ze[1].type === "listUnordered" || ze[1].type === "listOrdered"))
      ) {
        if (gt) {
          let It = ne;
          for (Xe = void 0; It--; ) {
            const Ke = R[It];
            if (
              Ke[1].type === "lineEnding" ||
              Ke[1].type === "lineEndingBlank"
            ) {
              if (Ke[0] === "exit") continue;
              Xe && ((R[Xe][1].type = "lineEndingBlank"), (ve = !0)),
                (Ke[1].type = "lineEnding"),
                (Xe = It);
            } else if (
              !(
                Ke[1].type === "linePrefix" ||
                Ke[1].type === "blockQuotePrefix" ||
                Ke[1].type === "blockQuotePrefixWhitespace" ||
                Ke[1].type === "blockQuoteMarker" ||
                Ke[1].type === "listItemIndent"
              )
            )
              break;
          }
          $t && (!Xe || $t < Xe) && (gt._spread = !0),
            (gt.end = Object.assign({}, Xe ? R[Xe][1].start : ze[1].end)),
            R.splice(Xe || ne, 0, ["exit", gt, ze[2]]),
            ne++,
            Z++;
        }
        if (ze[1].type === "listItemPrefix") {
          const It = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ze[1].start),
            end: void 0,
          };
          (gt = It),
            R.splice(ne, 0, ["enter", It, ze[2]]),
            ne++,
            Z++,
            ($t = void 0),
            (Vt = !0);
        }
      }
    }
    return (R[j][1]._spread = ve), Z;
  }
  function s(R, j) {
    return Z;
    function Z(ne) {
      o.call(this, R(ne), ne), j && j.call(this, ne);
    }
  }
  function i() {
    this.stack.push({
      type: "fragment",
      children: [],
    });
  }
  function o(R, j, Z) {
    this.stack[this.stack.length - 1].children.push(R),
      this.stack.push(R),
      this.tokenStack.push([j, Z]),
      (R.position = {
        start: it(j.start),
        end: void 0,
      });
  }
  function u(R) {
    return j;
    function j(Z) {
      R && R.call(this, Z), l.call(this, Z);
    }
  }
  function l(R, j) {
    const Z = this.stack.pop(),
      ne = this.tokenStack.pop();
    if (ne)
      ne[0].type !== R.type &&
        (j ? j.call(this, R, ne[0]) : (ne[1] || ii).call(this, R, ne[0]));
    else
      throw new Error(
        "Cannot close `" +
          R.type +
          "` (" +
          Zt({
            start: R.start,
            end: R.end,
          }) +
          "): it’s not open",
      );
    Z.position.end = it(R.end);
  }
  function p() {
    return rn(this.stack.pop());
  }
  function h() {
    this.data.expectingFirstListItemValue = !0;
  }
  function f(R) {
    if (this.data.expectingFirstListItemValue) {
      const j = this.stack[this.stack.length - 2];
      (j.start = Number.parseInt(this.sliceSerialize(R), 10)),
        (this.data.expectingFirstListItemValue = void 0);
    }
  }
  function _() {
    const R = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.lang = R;
  }
  function y() {
    const R = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.meta = R;
  }
  function b() {
    this.data.flowCodeInside ||
      (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function C() {
    const R = this.resume(),
      j = this.stack[this.stack.length - 1];
    (j.value = R.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")),
      (this.data.flowCodeInside = void 0);
  }
  function T() {
    const R = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.value = R.replace(/(\r?\n|\r)$/g, "");
  }
  function I(R) {
    const j = this.resume(),
      Z = this.stack[this.stack.length - 1];
    (Z.label = j), (Z.identifier = qe(this.sliceSerialize(R)).toLowerCase());
  }
  function O() {
    const R = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.title = R;
  }
  function M() {
    const R = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.url = R;
  }
  function N(R) {
    const j = this.stack[this.stack.length - 1];
    if (!j.depth) {
      const Z = this.sliceSerialize(R).length;
      j.depth = Z;
    }
  }
  function d() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function z(R) {
    const j = this.stack[this.stack.length - 1];
    j.depth = this.sliceSerialize(R).codePointAt(0) === 61 ? 1 : 2;
  }
  function U() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function V(R) {
    const Z = this.stack[this.stack.length - 1].children;
    let ne = Z[Z.length - 1];
    (!ne || ne.type !== "text") &&
      ((ne = uu()),
      (ne.position = {
        start: it(R.start),
        end: void 0,
      }),
      Z.push(ne)),
      this.stack.push(ne);
  }
  function D(R) {
    const j = this.stack.pop();
    (j.value += this.sliceSerialize(R)), (j.position.end = it(R.end));
  }
  function S(R) {
    const j = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const Z = j.children[j.children.length - 1];
      (Z.position.end = it(R.end)), (this.data.atHardBreak = void 0);
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      t.canContainEols.includes(j.type) &&
      (V.call(this, R), D.call(this, R));
  }
  function P() {
    this.data.atHardBreak = !0;
  }
  function Q() {
    const R = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.value = R;
  }
  function te() {
    const R = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.value = R;
  }
  function B() {
    const R = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.value = R;
  }
  function Y() {
    const R = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const j = this.data.referenceType || "shortcut";
      (R.type += "Reference"),
        (R.referenceType = j),
        delete R.url,
        delete R.title;
    } else delete R.identifier, delete R.label;
    this.data.referenceType = void 0;
  }
  function A() {
    const R = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const j = this.data.referenceType || "shortcut";
      (R.type += "Reference"),
        (R.referenceType = j),
        delete R.url,
        delete R.title;
    } else delete R.identifier, delete R.label;
    this.data.referenceType = void 0;
  }
  function J(R) {
    const j = this.sliceSerialize(R),
      Z = this.stack[this.stack.length - 2];
    (Z.label = nh(j)), (Z.identifier = qe(j).toLowerCase());
  }
  function ie() {
    const R = this.stack[this.stack.length - 1],
      j = this.resume(),
      Z = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), Z.type === "link")) {
      const ne = R.children;
      Z.children = ne;
    } else Z.alt = j;
  }
  function w() {
    const R = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.url = R;
  }
  function Te() {
    const R = this.resume(),
      j = this.stack[this.stack.length - 1];
    j.title = R;
  }
  function Ne() {
    this.data.inReference = void 0;
  }
  function E() {
    this.data.referenceType = "collapsed";
  }
  function Re(R) {
    const j = this.resume(),
      Z = this.stack[this.stack.length - 1];
    (Z.label = j),
      (Z.identifier = qe(this.sliceSerialize(R)).toLowerCase()),
      (this.data.referenceType = "full");
  }
  function _t(R) {
    this.data.characterReferenceType = R.type;
  }
  function ye(R) {
    const j = this.sliceSerialize(R),
      Z = this.data.characterReferenceType;
    let ne;
    Z
      ? ((ne = bs(j, Z === "characterReferenceMarkerNumeric" ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (ne = ca(j));
    const oe = this.stack.pop();
    (oe.value += ne), (oe.position.end = it(R.end));
  }
  function Yt(R) {
    D.call(this, R);
    const j = this.stack[this.stack.length - 1];
    j.url = this.sliceSerialize(R);
  }
  function nt(R) {
    D.call(this, R);
    const j = this.stack[this.stack.length - 1];
    j.url = "mailto:" + this.sliceSerialize(R);
  }
  function zt() {
    return {
      type: "blockquote",
      children: [],
    };
  }
  function mt() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: "",
    };
  }
  function ir() {
    return {
      type: "inlineCode",
      value: "",
    };
  }
  function ru() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: "",
    };
  }
  function nu() {
    return {
      type: "emphasis",
      children: [],
    };
  }
  function Sn() {
    return {
      type: "heading",
      depth: 0,
      children: [],
    };
  }
  function Nn() {
    return {
      type: "break",
    };
  }
  function Fn() {
    return {
      type: "html",
      value: "",
    };
  }
  function iu() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null,
    };
  }
  function On() {
    return {
      type: "link",
      title: null,
      url: "",
      children: [],
    };
  }
  function Ln(R) {
    return {
      type: "list",
      ordered: R.type === "listOrdered",
      start: null,
      spread: R._spread,
      children: [],
    };
  }
  function su(R) {
    return {
      type: "listItem",
      spread: R._spread,
      checked: null,
      children: [],
    };
  }
  function ou() {
    return {
      type: "paragraph",
      children: [],
    };
  }
  function cu() {
    return {
      type: "strong",
      children: [],
    };
  }
  function uu() {
    return {
      type: "text",
      value: "",
    };
  }
  function lu() {
    return {
      type: "thematicBreak",
    };
  }
}
function it(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset,
  };
}
function Ns(e, t) {
  let a = -1;
  for (; ++a < t.length; ) {
    const r = t[a];
    Array.isArray(r) ? Ns(e, r) : ch(e, r);
  }
}
function ch(e, t) {
  let a;
  for (a in t)
    if (Ss.call(t, a))
      switch (a) {
        case "canContainEols": {
          const r = t[a];
          r && e[a].push(...r);
          break;
        }
        case "transforms": {
          const r = t[a];
          r && e[a].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[a];
          r && Object.assign(e[a], r);
          break;
        }
      }
}
function ii(e, t) {
  throw e
    ? new Error(
        "Cannot close `" +
          e.type +
          "` (" +
          Zt({
            start: e.start,
            end: e.end,
          }) +
          "): a different token (`" +
          t.type +
          "`, " +
          Zt({
            start: t.start,
            end: t.end,
          }) +
          ") is open",
      )
    : new Error(
        "Cannot close document, a token (`" +
          t.type +
          "`, " +
          Zt({
            start: t.start,
            end: t.end,
          }) +
          ") is still open",
      );
}
function uh(e) {
  const t = this;
  t.parser = a;
  function a(r) {
    return sh(r, {
      ...t.data("settings"),
      ...e,
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || [],
    });
  }
}
function lh(e, t) {
  const a = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0),
  };
  return e.patch(t, a), e.applyData(t, a);
}
function fh(e, t) {
  const a = {
    type: "element",
    tagName: "br",
    properties: {},
    children: [],
  };
  return (
    e.patch(t, a),
    [
      e.applyData(t, a),
      {
        type: "text",
        value: `
`,
      },
    ]
  );
}
function hh(e, t) {
  const a = t.value
      ? t.value +
        `
`
      : "",
    r = {};
  t.lang && (r.className = ["language-" + t.lang]);
  let n = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [
      {
        type: "text",
        value: a,
      },
    ],
  };
  return (
    t.meta &&
      (n.data = {
        meta: t.meta,
      }),
    e.patch(t, n),
    (n = e.applyData(t, n)),
    (n = {
      type: "element",
      tagName: "pre",
      properties: {},
      children: [n],
    }),
    e.patch(t, n),
    n
  );
}
function dh(e, t) {
  const a = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, a), e.applyData(t, a);
}
function ph(e, t) {
  const a = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, a), e.applyData(t, a);
}
function _h(e, t) {
  const a =
      typeof e.options.clobberPrefix == "string"
        ? e.options.clobberPrefix
        : "user-content-",
    r = String(t.identifier).toUpperCase(),
    n = pt(r.toLowerCase()),
    s = e.footnoteOrder.indexOf(r);
  let i,
    o = e.footnoteCounts.get(r);
  o === void 0
    ? ((o = 0), e.footnoteOrder.push(r), (i = e.footnoteOrder.length))
    : (i = s + 1),
    (o += 1),
    e.footnoteCounts.set(r, o);
  const u = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + a + "fn-" + n,
      id: a + "fnref-" + n + (o > 1 ? "-" + o : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"],
    },
    children: [
      {
        type: "text",
        value: String(i),
      },
    ],
  };
  e.patch(t, u);
  const l = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [u],
  };
  return e.patch(t, l), e.applyData(t, l);
}
function mh(e, t) {
  const a = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, a), e.applyData(t, a);
}
function gh(e, t) {
  if (e.options.allowDangerousHtml) {
    const a = {
      type: "raw",
      value: t.value,
    };
    return e.patch(t, a), e.applyData(t, a);
  }
}
function Fs(e, t) {
  const a = t.referenceType;
  let r = "]";
  if (
    (a === "collapsed"
      ? (r += "[]")
      : a === "full" && (r += "[" + (t.label || t.identifier) + "]"),
    t.type === "imageReference")
  )
    return [
      {
        type: "text",
        value: "![" + t.alt + r,
      },
    ];
  const n = e.all(t),
    s = n[0];
  s && s.type === "text"
    ? (s.value = "[" + s.value)
    : n.unshift({
        type: "text",
        value: "[",
      });
  const i = n[n.length - 1];
  return (
    i && i.type === "text"
      ? (i.value += r)
      : n.push({
          type: "text",
          value: r,
        }),
    n
  );
}
function yh(e, t) {
  const a = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(a);
  if (!r) return Fs(e, t);
  const n = {
    src: pt(r.url || ""),
    alt: t.alt,
  };
  r.title !== null && r.title !== void 0 && (n.title = r.title);
  const s = {
    type: "element",
    tagName: "img",
    properties: n,
    children: [],
  };
  return e.patch(t, s), e.applyData(t, s);
}
function kh(e, t) {
  const a = {
    src: pt(t.url),
  };
  t.alt !== null && t.alt !== void 0 && (a.alt = t.alt),
    t.title !== null && t.title !== void 0 && (a.title = t.title);
  const r = {
    type: "element",
    tagName: "img",
    properties: a,
    children: [],
  };
  return e.patch(t, r), e.applyData(t, r);
}
function bh(e, t) {
  const a = {
    type: "text",
    value: t.value.replace(/\r?\n|\r/g, " "),
  };
  e.patch(t, a);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [a],
  };
  return e.patch(t, r), e.applyData(t, r);
}
function wh(e, t) {
  const a = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(a);
  if (!r) return Fs(e, t);
  const n = {
    href: pt(r.url || ""),
  };
  r.title !== null && r.title !== void 0 && (n.title = r.title);
  const s = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t),
  };
  return e.patch(t, s), e.applyData(t, s);
}
function Eh(e, t) {
  const a = {
    href: pt(t.url),
  };
  t.title !== null && t.title !== void 0 && (a.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: a,
    children: e.all(t),
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Th(e, t, a) {
  const r = e.all(t),
    n = a ? Ah(a) : Os(t),
    s = {},
    i = [];
  if (typeof t.checked == "boolean") {
    const p = r[0];
    let h;
    p && p.type === "element" && p.tagName === "p"
      ? (h = p)
      : ((h = {
          type: "element",
          tagName: "p",
          properties: {},
          children: [],
        }),
        r.unshift(h)),
      h.children.length > 0 &&
        h.children.unshift({
          type: "text",
          value: " ",
        }),
      h.children.unshift({
        type: "element",
        tagName: "input",
        properties: {
          type: "checkbox",
          checked: t.checked,
          disabled: !0,
        },
        children: [],
      }),
      (s.className = ["task-list-item"]);
  }
  let o = -1;
  for (; ++o < r.length; ) {
    const p = r[o];
    (n || o !== 0 || p.type !== "element" || p.tagName !== "p") &&
      i.push({
        type: "text",
        value: `
`,
      }),
      p.type === "element" && p.tagName === "p" && !n
        ? i.push(...p.children)
        : i.push(p);
  }
  const u = r[r.length - 1];
  u &&
    (n || u.type !== "element" || u.tagName !== "p") &&
    i.push({
      type: "text",
      value: `
`,
    });
  const l = {
    type: "element",
    tagName: "li",
    properties: s,
    children: i,
  };
  return e.patch(t, l), e.applyData(t, l);
}
function Ah(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const a = e.children;
    let r = -1;
    for (; !t && ++r < a.length; ) t = Os(a[r]);
  }
  return t;
}
function Os(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Ch(e, t) {
  const a = {},
    r = e.all(t);
  let n = -1;
  for (
    typeof t.start == "number" && t.start !== 1 && (a.start = t.start);
    ++n < r.length;

  ) {
    const i = r[n];
    if (
      i.type === "element" &&
      i.tagName === "li" &&
      i.properties &&
      Array.isArray(i.properties.className) &&
      i.properties.className.includes("task-list-item")
    ) {
      a.className = ["contains-task-list"];
      break;
    }
  }
  const s = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: a,
    children: e.wrap(r, !0),
  };
  return e.patch(t, s), e.applyData(t, s);
}
function xh(e, t) {
  const a = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Dh(e, t) {
  const a = {
    type: "root",
    children: e.wrap(e.all(t)),
  };
  return e.patch(t, a), e.applyData(t, a);
}
function zh(e, t) {
  const a = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, a), e.applyData(t, a);
}
const Xa = Ls("end"),
  at = Ls("start");
function Ls(e) {
  return t;
  function t(a) {
    const r = (a && a.position && a.position[e]) || {};
    if (
      typeof r.line == "number" &&
      r.line > 0 &&
      typeof r.column == "number" &&
      r.column > 0
    )
      return {
        line: r.line,
        column: r.column,
        offset:
          typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0,
      };
  }
}
function Ih(e) {
  const t = at(e),
    a = Xa(e);
  if (t && a)
    return {
      start: t,
      end: a,
    };
}
function Sh(e, t) {
  const a = e.all(t),
    r = a.shift(),
    n = [];
  if (r) {
    const i = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0),
    };
    e.patch(t.children[0], i), n.push(i);
  }
  if (a.length > 0) {
    const i = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: e.wrap(a, !0),
      },
      o = at(t.children[1]),
      u = Xa(t.children[t.children.length - 1]);
    o &&
      u &&
      (i.position = {
        start: o,
        end: u,
      }),
      n.push(i);
  }
  const s = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(n, !0),
  };
  return e.patch(t, s), e.applyData(t, s);
}
function Nh(e, t, a) {
  const r = a ? a.children : void 0,
    s = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td",
    i = a && a.type === "table" ? a.align : void 0,
    o = i ? i.length : t.children.length;
  let u = -1;
  const l = [];
  for (; ++u < o; ) {
    const h = t.children[u],
      f = {},
      _ = i ? i[u] : void 0;
    _ && (f.align = _);
    let y = {
      type: "element",
      tagName: s,
      properties: f,
      children: [],
    };
    h && ((y.children = e.all(h)), e.patch(h, y), (y = e.applyData(h, y))),
      l.push(y);
  }
  const p = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(l, !0),
  };
  return e.patch(t, p), e.applyData(t, p);
}
function Fh(e, t) {
  const a = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, a), e.applyData(t, a);
}
const si = 9,
  oi = 32;
function Oh(e) {
  const t = String(e),
    a = /\r?\n|\r/g;
  let r = a.exec(t),
    n = 0;
  const s = [];
  for (; r; )
    s.push(ci(t.slice(n, r.index), n > 0, !0), r[0]),
      (n = r.index + r[0].length),
      (r = a.exec(t));
  return s.push(ci(t.slice(n), n > 0, !1)), s.join("");
}
function ci(e, t, a) {
  let r = 0,
    n = e.length;
  if (t) {
    let s = e.codePointAt(r);
    for (; s === si || s === oi; ) r++, (s = e.codePointAt(r));
  }
  if (a) {
    let s = e.codePointAt(n - 1);
    for (; s === si || s === oi; ) n--, (s = e.codePointAt(n - 1));
  }
  return n > r ? e.slice(r, n) : "";
}
function Lh(e, t) {
  const a = {
    type: "text",
    value: Oh(String(t.value)),
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Rh(e, t) {
  const a = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: [],
  };
  return e.patch(t, a), e.applyData(t, a);
}
const vh = {
  blockquote: lh,
  break: fh,
  code: hh,
  delete: dh,
  emphasis: ph,
  footnoteReference: _h,
  heading: mh,
  html: gh,
  imageReference: yh,
  image: kh,
  inlineCode: bh,
  linkReference: wh,
  link: Eh,
  listItem: Th,
  list: Ch,
  paragraph: xh,
  root: Dh,
  strong: zh,
  table: Sh,
  tableCell: Fh,
  tableRow: Nh,
  text: Lh,
  thematicBreak: Rh,
  toml: Ea,
  yaml: Ea,
  definition: Ea,
  footnoteDefinition: Ea,
};
function Ea() {}
const Rs = -1,
  Ka = 0,
  La = 1,
  Ra = 2,
  sn = 3,
  on = 4,
  cn = 5,
  un = 6,
  vs = 7,
  Bs = 8,
  ui = typeof self == "object" ? self : globalThis,
  Bh = (e, t) => {
    const a = (n, s) => (e.set(s, n), n),
      r = (n) => {
        if (e.has(n)) return e.get(n);
        const [s, i] = t[n];
        switch (s) {
          case Ka:
          case Rs:
            return a(i, n);
          case La: {
            const o = a([], n);
            for (const u of i) o.push(r(u));
            return o;
          }
          case Ra: {
            const o = a({}, n);
            for (const [u, l] of i) o[r(u)] = r(l);
            return o;
          }
          case sn:
            return a(new Date(i), n);
          case on: {
            const { source: o, flags: u } = i;
            return a(new RegExp(o, u), n);
          }
          case cn: {
            const o = a(new Map(), n);
            for (const [u, l] of i) o.set(r(u), r(l));
            return o;
          }
          case un: {
            const o = a(new Set(), n);
            for (const u of i) o.add(r(u));
            return o;
          }
          case vs: {
            const { name: o, message: u } = i;
            return a(new ui[o](u), n);
          }
          case Bs:
            return a(BigInt(i), n);
          case "BigInt":
            return a(Object(BigInt(i)), n);
        }
        return a(new ui[s](i), n);
      };
    return r;
  },
  li = (e) => Bh(new Map(), e)(0),
  St = "",
  { toString: Ph } = {},
  { keys: Mh } = Object,
  Wt = (e) => {
    const t = typeof e;
    if (t !== "object" || !e) return [Ka, t];
    const a = Ph.call(e).slice(8, -1);
    switch (a) {
      case "Array":
        return [La, St];
      case "Object":
        return [Ra, St];
      case "Date":
        return [sn, St];
      case "RegExp":
        return [on, St];
      case "Map":
        return [cn, St];
      case "Set":
        return [un, St];
    }
    return a.includes("Array")
      ? [La, a]
      : a.includes("Error")
        ? [vs, a]
        : [Ra, a];
  },
  Ta = ([e, t]) => e === Ka && (t === "function" || t === "symbol"),
  Hh = (e, t, a, r) => {
    const n = (i, o) => {
        const u = r.push(i) - 1;
        return a.set(o, u), u;
      },
      s = (i) => {
        if (a.has(i)) return a.get(i);
        let [o, u] = Wt(i);
        switch (o) {
          case Ka: {
            let p = i;
            switch (u) {
              case "bigint":
                (o = Bs), (p = i.toString());
                break;
              case "function":
              case "symbol":
                if (e) throw new TypeError("unable to serialize " + u);
                p = null;
                break;
              case "undefined":
                return n([Rs], i);
            }
            return n([o, p], i);
          }
          case La: {
            if (u) return n([u, [...i]], i);
            const p = [],
              h = n([o, p], i);
            for (const f of i) p.push(s(f));
            return h;
          }
          case Ra: {
            if (u)
              switch (u) {
                case "BigInt":
                  return n([u, i.toString()], i);
                case "Boolean":
                case "Number":
                case "String":
                  return n([u, i.valueOf()], i);
              }
            if (t && "toJSON" in i) return s(i.toJSON());
            const p = [],
              h = n([o, p], i);
            for (const f of Mh(i))
              (e || !Ta(Wt(i[f]))) && p.push([s(f), s(i[f])]);
            return h;
          }
          case sn:
            return n([o, i.toISOString()], i);
          case on: {
            const { source: p, flags: h } = i;
            return n(
              [
                o,
                {
                  source: p,
                  flags: h,
                },
              ],
              i,
            );
          }
          case cn: {
            const p = [],
              h = n([o, p], i);
            for (const [f, _] of i)
              (e || !(Ta(Wt(f)) || Ta(Wt(_)))) && p.push([s(f), s(_)]);
            return h;
          }
          case un: {
            const p = [],
              h = n([o, p], i);
            for (const f of i) (e || !Ta(Wt(f))) && p.push(s(f));
            return h;
          }
        }
        const { message: l } = i;
        return n(
          [
            o,
            {
              name: u,
              message: l,
            },
          ],
          i,
        );
      };
    return s;
  },
  fi = (e, { json: t, lossy: a } = {}) => {
    const r = [];
    return Hh(!(t || a), !!t, new Map(), r)(e), r;
  },
  Je =
    typeof structuredClone == "function"
      ? (e, t) =>
          t && ("json" in t || "lossy" in t) ? li(fi(e, t)) : structuredClone(e)
      : (e, t) => li(fi(e, t));
function Uh(e, t) {
  const a = [
    {
      type: "text",
      value: "↩",
    },
  ];
  return (
    t > 1 &&
      a.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [
          {
            type: "text",
            value: String(t),
          },
        ],
      }),
    a
  );
}
function jh(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function qh(e) {
  const t =
      typeof e.options.clobberPrefix == "string"
        ? e.options.clobberPrefix
        : "user-content-",
    a = e.options.footnoteBackContent || Uh,
    r = e.options.footnoteBackLabel || jh,
    n = e.options.footnoteLabel || "Footnotes",
    s = e.options.footnoteLabelTagName || "h2",
    i = e.options.footnoteLabelProperties || {
      className: ["sr-only"],
    },
    o = [];
  let u = -1;
  for (; ++u < e.footnoteOrder.length; ) {
    const l = e.footnoteById.get(e.footnoteOrder[u]);
    if (!l) continue;
    const p = e.all(l),
      h = String(l.identifier).toUpperCase(),
      f = pt(h.toLowerCase());
    let _ = 0;
    const y = [],
      b = e.footnoteCounts.get(h);
    for (; b !== void 0 && ++_ <= b; ) {
      y.length > 0 &&
        y.push({
          type: "text",
          value: " ",
        });
      let I = typeof a == "string" ? a : a(u, _);
      typeof I == "string" &&
        (I = {
          type: "text",
          value: I,
        }),
        y.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + t + "fnref-" + f + (_ > 1 ? "-" + _ : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof r == "string" ? r : r(u, _),
            className: ["data-footnote-backref"],
          },
          children: Array.isArray(I) ? I : [I],
        });
    }
    const C = p[p.length - 1];
    if (C && C.type === "element" && C.tagName === "p") {
      const I = C.children[C.children.length - 1];
      I && I.type === "text"
        ? (I.value += " ")
        : C.children.push({
            type: "text",
            value: " ",
          }),
        C.children.push(...y);
    } else p.push(...y);
    const T = {
      type: "element",
      tagName: "li",
      properties: {
        id: t + "fn-" + f,
      },
      children: e.wrap(p, !0),
    };
    e.patch(l, T), o.push(T);
  }
  if (o.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: {
        dataFootnotes: !0,
        className: ["footnotes"],
      },
      children: [
        {
          type: "element",
          tagName: s,
          properties: {
            ...Je(i),
            id: "footnote-label",
          },
          children: [
            {
              type: "text",
              value: n,
            },
          ],
        },
        {
          type: "text",
          value: `
`,
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(o, !0),
        },
        {
          type: "text",
          value: `
`,
        },
      ],
    };
}
const Ja = function (e) {
  if (e == null) return Wh;
  if (typeof e == "function") return Za(e);
  if (typeof e == "object") return Array.isArray(e) ? Yh(e) : $h(e);
  if (typeof e == "string") return Vh(e);
  throw new Error("Expected function, string, or object as test");
};
function Yh(e) {
  const t = [];
  let a = -1;
  for (; ++a < e.length; ) t[a] = Ja(e[a]);
  return Za(r);
  function r(...n) {
    let s = -1;
    for (; ++s < t.length; ) if (t[s].apply(this, n)) return !0;
    return !1;
  }
}
function $h(e) {
  const t = e;
  return Za(a);
  function a(r) {
    const n = r;
    let s;
    for (s in e) if (n[s] !== t[s]) return !1;
    return !0;
  }
}
function Vh(e) {
  return Za(t);
  function t(a) {
    return a && a.type === e;
  }
}
function Za(e) {
  return t;
  function t(a, r, n) {
    return !!(
      Gh(a) && e.call(this, a, typeof r == "number" ? r : void 0, n || void 0)
    );
  }
}
function Wh() {
  return !0;
}
function Gh(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Ps = [],
  Qh = !0,
  vr = !1,
  Xh = "skip";
function Ms(e, t, a, r) {
  let n;
  typeof t == "function" && typeof a != "function"
    ? ((r = a), (a = t))
    : (n = t);
  const s = Ja(n),
    i = r ? -1 : 1;
  o(e, void 0, [])();
  function o(u, l, p) {
    const h = u && typeof u == "object" ? u : {};
    if (typeof h.type == "string") {
      const _ =
        typeof h.tagName == "string"
          ? h.tagName
          : typeof h.name == "string"
            ? h.name
            : void 0;
      Object.defineProperty(f, "name", {
        value: "node (" + (u.type + (_ ? "<" + _ + ">" : "")) + ")",
      });
    }
    return f;
    function f() {
      let _ = Ps,
        y,
        b,
        C;
      if (
        (!t || s(u, l, p[p.length - 1] || void 0)) &&
        ((_ = Kh(a(u, p))), _[0] === vr)
      )
        return _;
      if ("children" in u && u.children) {
        const T = u;
        if (T.children && _[0] !== Xh)
          for (
            b = (r ? T.children.length : -1) + i, C = p.concat(T);
            b > -1 && b < T.children.length;

          ) {
            const I = T.children[b];
            if (((y = o(I, b, C)()), y[0] === vr)) return y;
            b = typeof y[1] == "number" ? y[1] : b + i;
          }
      }
      return _;
    }
  }
}
function Kh(e) {
  return Array.isArray(e)
    ? e
    : typeof e == "number"
      ? [Qh, e]
      : e == null
        ? Ps
        : [e];
}
function et(e, t, a, r) {
  let n, s, i;
  typeof t == "function" && typeof a != "function"
    ? ((s = void 0), (i = t), (n = a))
    : ((s = t), (i = a), (n = r)),
    Ms(e, s, o, n);
  function o(u, l) {
    const p = l[l.length - 1],
      h = p ? p.children.indexOf(u) : void 0;
    return i(u, h, p);
  }
}
const Br = {}.hasOwnProperty,
  Jh = {};
function Zh(e, t) {
  const a = t || Jh,
    r = new Map(),
    n = new Map(),
    s = new Map(),
    i = {
      ...vh,
      ...a.handlers,
    },
    o = {
      all: l,
      applyData: td,
      definitionById: r,
      footnoteById: n,
      footnoteCounts: s,
      footnoteOrder: [],
      handlers: i,
      one: u,
      options: a,
      patch: ed,
      wrap: rd,
    };
  return (
    et(e, function (p) {
      if (p.type === "definition" || p.type === "footnoteDefinition") {
        const h = p.type === "definition" ? r : n,
          f = String(p.identifier).toUpperCase();
        h.has(f) || h.set(f, p);
      }
    }),
    o
  );
  function u(p, h) {
    const f = p.type,
      _ = o.handlers[f];
    if (Br.call(o.handlers, f) && _) return _(o, p, h);
    if (o.options.passThrough && o.options.passThrough.includes(f)) {
      if ("children" in p) {
        const { children: b, ...C } = p,
          T = Je(C);
        return (T.children = o.all(p)), T;
      }
      return Je(p);
    }
    return (o.options.unknownHandler || ad)(o, p, h);
  }
  function l(p) {
    const h = [];
    if ("children" in p) {
      const f = p.children;
      let _ = -1;
      for (; ++_ < f.length; ) {
        const y = o.one(f[_], p);
        if (y) {
          if (
            _ &&
            f[_ - 1].type === "break" &&
            (!Array.isArray(y) && y.type === "text" && (y.value = hi(y.value)),
            !Array.isArray(y) && y.type === "element")
          ) {
            const b = y.children[0];
            b && b.type === "text" && (b.value = hi(b.value));
          }
          Array.isArray(y) ? h.push(...y) : h.push(y);
        }
      }
    }
    return h;
  }
}
function ed(e, t) {
  e.position && (t.position = Ih(e));
}
function td(e, t) {
  let a = t;
  if (e && e.data) {
    const r = e.data.hName,
      n = e.data.hChildren,
      s = e.data.hProperties;
    if (typeof r == "string")
      if (a.type === "element") a.tagName = r;
      else {
        const i = "children" in a ? a.children : [a];
        a = {
          type: "element",
          tagName: r,
          properties: {},
          children: i,
        };
      }
    a.type === "element" && s && Object.assign(a.properties, Je(s)),
      "children" in a &&
        a.children &&
        n !== null &&
        n !== void 0 &&
        (a.children = n);
  }
  return a;
}
function ad(e, t) {
  const a = t.data || {},
    r =
      "value" in t && !(Br.call(a, "hProperties") || Br.call(a, "hChildren"))
        ? {
            type: "text",
            value: t.value,
          }
        : {
            type: "element",
            tagName: "div",
            properties: {},
            children: e.all(t),
          };
  return e.patch(t, r), e.applyData(t, r);
}
function rd(e, t) {
  const a = [];
  let r = -1;
  for (
    t &&
    a.push({
      type: "text",
      value: `
`,
    });
    ++r < e.length;

  )
    r &&
      a.push({
        type: "text",
        value: `
`,
      }),
      a.push(e[r]);
  return (
    t &&
      e.length > 0 &&
      a.push({
        type: "text",
        value: `
`,
      }),
    a
  );
}
function hi(e) {
  let t = 0,
    a = e.charCodeAt(t);
  for (; a === 9 || a === 32; ) t++, (a = e.charCodeAt(t));
  return e.slice(t);
}
function di(e, t) {
  const a = Zh(e, t),
    r = a.one(e, void 0),
    n = qh(a),
    s = Array.isArray(r)
      ? {
          type: "root",
          children: r,
        }
      : r || {
          type: "root",
          children: [],
        };
  return (
    n &&
      s.children.push(
        {
          type: "text",
          value: `
`,
        },
        n,
      ),
    s
  );
}
function nd(e, t) {
  return e && "run" in e
    ? async function (a, r) {
        const n = di(a, {
          file: r,
          ...t,
        });
        await e.run(n, r);
      }
    : function (a, r) {
        return di(a, {
          file: r,
          ...(t || e),
        });
      };
}
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function Hs(e) {
  return typeof e > "u" || e === null;
}
function id(e) {
  return typeof e == "object" && e !== null;
}
function sd(e) {
  return Array.isArray(e) ? e : Hs(e) ? [] : [e];
}
function od(e, t) {
  var a, r, n, s;
  if (t)
    for (s = Object.keys(t), a = 0, r = s.length; a < r; a += 1)
      (n = s[a]), (e[n] = t[n]);
  return e;
}
function cd(e, t) {
  var a = "",
    r;
  for (r = 0; r < t; r += 1) a += e;
  return a;
}
function ud(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
var ld = Hs,
  fd = id,
  hd = sd,
  dd = cd,
  pd = ud,
  _d = od,
  de = {
    isNothing: ld,
    isObject: fd,
    toArray: hd,
    repeat: dd,
    isNegativeZero: pd,
    extend: _d,
  };
function Us(e, t) {
  var a = "",
    r = e.reason || "(unknown reason)";
  return e.mark
    ? (e.mark.name && (a += 'in "' + e.mark.name + '" '),
      (a += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")"),
      !t &&
        e.mark.snippet &&
        (a +=
          `

` + e.mark.snippet),
      r + " " + a)
    : r;
}
function ua(e, t) {
  Error.call(this),
    (this.name = "YAMLException"),
    (this.reason = e),
    (this.mark = t),
    (this.message = Us(this, !1)),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack || "");
}
ua.prototype = Object.create(Error.prototype);
ua.prototype.constructor = ua;
ua.prototype.toString = function (t) {
  return this.name + ": " + Us(this, t);
};
var Ee = ua;
function _r(e, t, a, r, n) {
  var s = "",
    i = "",
    o = Math.floor(n / 2) - 1;
  return (
    r - t > o && ((s = " ... "), (t = r - o + s.length)),
    a - r > o && ((i = " ..."), (a = r + o - i.length)),
    {
      str: s + e.slice(t, a).replace(/\t/g, "→") + i,
      pos: r - t + s.length,
    }
  );
}
function mr(e, t) {
  return de.repeat(" ", t - e.length) + e;
}
function md(e, t) {
  if (((t = Object.create(t || null)), !e.buffer)) return null;
  t.maxLength || (t.maxLength = 79),
    typeof t.indent != "number" && (t.indent = 1),
    typeof t.linesBefore != "number" && (t.linesBefore = 3),
    typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (
    var a = /\r?\n|\r|\0/g, r = [0], n = [], s, i = -1;
    (s = a.exec(e.buffer));

  )
    n.push(s.index),
      r.push(s.index + s[0].length),
      e.position <= s.index && i < 0 && (i = r.length - 2);
  i < 0 && (i = r.length - 1);
  var o = "",
    u,
    l,
    p = Math.min(e.line + t.linesAfter, n.length).toString().length,
    h = t.maxLength - (t.indent + p + 3);
  for (u = 1; u <= t.linesBefore && !(i - u < 0); u++)
    (l = _r(e.buffer, r[i - u], n[i - u], e.position - (r[i] - r[i - u]), h)),
      (o =
        de.repeat(" ", t.indent) +
        mr((e.line - u + 1).toString(), p) +
        " | " +
        l.str +
        `
` +
        o);
  for (
    l = _r(e.buffer, r[i], n[i], e.position, h),
      o +=
        de.repeat(" ", t.indent) +
        mr((e.line + 1).toString(), p) +
        " | " +
        l.str +
        `
`,
      o +=
        de.repeat("-", t.indent + p + 3 + l.pos) +
        `^
`,
      u = 1;
    u <= t.linesAfter && !(i + u >= n.length);
    u++
  )
    (l = _r(e.buffer, r[i + u], n[i + u], e.position - (r[i] - r[i + u]), h)),
      (o +=
        de.repeat(" ", t.indent) +
        mr((e.line + u + 1).toString(), p) +
        " | " +
        l.str +
        `
`);
  return o.replace(/\n$/, "");
}
var gd = md,
  yd = [
    "kind",
    "multi",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "representName",
    "defaultStyle",
    "styleAliases",
  ],
  kd = ["scalar", "sequence", "mapping"];
function bd(e) {
  var t = {};
  return (
    e !== null &&
      Object.keys(e).forEach(function (a) {
        e[a].forEach(function (r) {
          t[String(r)] = a;
        });
      }),
    t
  );
}
function wd(e, t) {
  if (
    ((t = t || {}),
    Object.keys(t).forEach(function (a) {
      if (yd.indexOf(a) === -1)
        throw new Ee(
          'Unknown option "' +
            a +
            '" is met in definition of "' +
            e +
            '" YAML type.',
        );
    }),
    (this.options = t),
    (this.tag = e),
    (this.kind = t.kind || null),
    (this.resolve =
      t.resolve ||
      function () {
        return !0;
      }),
    (this.construct =
      t.construct ||
      function (a) {
        return a;
      }),
    (this.instanceOf = t.instanceOf || null),
    (this.predicate = t.predicate || null),
    (this.represent = t.represent || null),
    (this.representName = t.representName || null),
    (this.defaultStyle = t.defaultStyle || null),
    (this.multi = t.multi || !1),
    (this.styleAliases = bd(t.styleAliases || null)),
    kd.indexOf(this.kind) === -1)
  )
    throw new Ee(
      'Unknown kind "' +
        this.kind +
        '" is specified for "' +
        e +
        '" YAML type.',
    );
}
var ke = wd;
function pi(e, t) {
  var a = [];
  return (
    e[t].forEach(function (r) {
      var n = a.length;
      a.forEach(function (s, i) {
        s.tag === r.tag && s.kind === r.kind && s.multi === r.multi && (n = i);
      }),
        (a[n] = r);
    }),
    a
  );
}
function Ed() {
  var e = {
      scalar: {},
      sequence: {},
      mapping: {},
      fallback: {},
      multi: {
        scalar: [],
        sequence: [],
        mapping: [],
        fallback: [],
      },
    },
    t,
    a;
  function r(n) {
    n.multi
      ? (e.multi[n.kind].push(n), e.multi.fallback.push(n))
      : (e[n.kind][n.tag] = e.fallback[n.tag] = n);
  }
  for (t = 0, a = arguments.length; t < a; t += 1) arguments[t].forEach(r);
  return e;
}
function Pr(e) {
  return this.extend(e);
}
Pr.prototype.extend = function (t) {
  var a = [],
    r = [];
  if (t instanceof ke) r.push(t);
  else if (Array.isArray(t)) r = r.concat(t);
  else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit)))
    t.implicit && (a = a.concat(t.implicit)),
      t.explicit && (r = r.concat(t.explicit));
  else
    throw new Ee(
      "Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })",
    );
  a.forEach(function (s) {
    if (!(s instanceof ke))
      throw new Ee(
        "Specified list of YAML types (or a single Type object) contains a non-Type object.",
      );
    if (s.loadKind && s.loadKind !== "scalar")
      throw new Ee(
        "There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.",
      );
    if (s.multi)
      throw new Ee(
        "There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.",
      );
  }),
    r.forEach(function (s) {
      if (!(s instanceof ke))
        throw new Ee(
          "Specified list of YAML types (or a single Type object) contains a non-Type object.",
        );
    });
  var n = Object.create(Pr.prototype);
  return (
    (n.implicit = (this.implicit || []).concat(a)),
    (n.explicit = (this.explicit || []).concat(r)),
    (n.compiledImplicit = pi(n, "implicit")),
    (n.compiledExplicit = pi(n, "explicit")),
    (n.compiledTypeMap = Ed(n.compiledImplicit, n.compiledExplicit)),
    n
  );
};
var js = Pr,
  qs = new ke("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function (e) {
      return e !== null ? e : "";
    },
  }),
  Ys = new ke("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function (e) {
      return e !== null ? e : [];
    },
  }),
  $s = new ke("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: function (e) {
      return e !== null ? e : {};
    },
  }),
  Vs = new js({
    explicit: [qs, Ys, $s],
  });
function Td(e) {
  if (e === null) return !0;
  var t = e.length;
  return (
    (t === 1 && e === "~") ||
    (t === 4 && (e === "null" || e === "Null" || e === "NULL"))
  );
}
function Ad() {
  return null;
}
function Cd(e) {
  return e === null;
}
var Ws = new ke("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Td,
  construct: Ad,
  predicate: Cd,
  represent: {
    canonical: function () {
      return "~";
    },
    lowercase: function () {
      return "null";
    },
    uppercase: function () {
      return "NULL";
    },
    camelcase: function () {
      return "Null";
    },
    empty: function () {
      return "";
    },
  },
  defaultStyle: "lowercase",
});
function xd(e) {
  if (e === null) return !1;
  var t = e.length;
  return (
    (t === 4 && (e === "true" || e === "True" || e === "TRUE")) ||
    (t === 5 && (e === "false" || e === "False" || e === "FALSE"))
  );
}
function Dd(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
function zd(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
var Gs = new ke("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: xd,
  construct: Dd,
  predicate: zd,
  represent: {
    lowercase: function (e) {
      return e ? "true" : "false";
    },
    uppercase: function (e) {
      return e ? "TRUE" : "FALSE";
    },
    camelcase: function (e) {
      return e ? "True" : "False";
    },
  },
  defaultStyle: "lowercase",
});
function Id(e) {
  return (48 <= e && e <= 57) || (65 <= e && e <= 70) || (97 <= e && e <= 102);
}
function Sd(e) {
  return 48 <= e && e <= 55;
}
function Nd(e) {
  return 48 <= e && e <= 57;
}
function Fd(e) {
  if (e === null) return !1;
  var t = e.length,
    a = 0,
    r = !1,
    n;
  if (!t) return !1;
  if (((n = e[a]), (n === "-" || n === "+") && (n = e[++a]), n === "0")) {
    if (a + 1 === t) return !0;
    if (((n = e[++a]), n === "b")) {
      for (a++; a < t; a++)
        if (((n = e[a]), n !== "_")) {
          if (n !== "0" && n !== "1") return !1;
          r = !0;
        }
      return r && n !== "_";
    }
    if (n === "x") {
      for (a++; a < t; a++)
        if (((n = e[a]), n !== "_")) {
          if (!Id(e.charCodeAt(a))) return !1;
          r = !0;
        }
      return r && n !== "_";
    }
    if (n === "o") {
      for (a++; a < t; a++)
        if (((n = e[a]), n !== "_")) {
          if (!Sd(e.charCodeAt(a))) return !1;
          r = !0;
        }
      return r && n !== "_";
    }
  }
  if (n === "_") return !1;
  for (; a < t; a++)
    if (((n = e[a]), n !== "_")) {
      if (!Nd(e.charCodeAt(a))) return !1;
      r = !0;
    }
  return !(!r || n === "_");
}
function Od(e) {
  var t = e,
    a = 1,
    r;
  if (
    (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")),
    (r = t[0]),
    (r === "-" || r === "+") &&
      (r === "-" && (a = -1), (t = t.slice(1)), (r = t[0])),
    t === "0")
  )
    return 0;
  if (r === "0") {
    if (t[1] === "b") return a * parseInt(t.slice(2), 2);
    if (t[1] === "x") return a * parseInt(t.slice(2), 16);
    if (t[1] === "o") return a * parseInt(t.slice(2), 8);
  }
  return a * parseInt(t, 10);
}
function Ld(e) {
  return (
    Object.prototype.toString.call(e) === "[object Number]" &&
    e % 1 === 0 &&
    !de.isNegativeZero(e)
  );
}
var Qs = new ke("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: Fd,
    construct: Od,
    predicate: Ld,
    represent: {
      binary: function (e) {
        return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
      },
      octal: function (e) {
        return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
      },
      decimal: function (e) {
        return e.toString(10);
      },
      hexadecimal: function (e) {
        return e >= 0
          ? "0x" + e.toString(16).toUpperCase()
          : "-0x" + e.toString(16).toUpperCase().slice(1);
      },
    },
    defaultStyle: "decimal",
    styleAliases: {
      binary: [2, "bin"],
      octal: [8, "oct"],
      decimal: [10, "dec"],
      hexadecimal: [16, "hex"],
    },
  }),
  Rd = new RegExp(
    "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$",
  );
function vd(e) {
  return !(e === null || !Rd.test(e) || e[e.length - 1] === "_");
}
function Bd(e) {
  var t, a;
  return (
    (t = e.replace(/_/g, "").toLowerCase()),
    (a = t[0] === "-" ? -1 : 1),
    "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)),
    t === ".inf"
      ? a === 1
        ? Number.POSITIVE_INFINITY
        : Number.NEGATIVE_INFINITY
      : t === ".nan"
        ? NaN
        : a * parseFloat(t, 10)
  );
}
var Pd = /^[-+]?[0-9]+e/;
function Md(e, t) {
  var a;
  if (isNaN(e))
    switch (t) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (de.isNegativeZero(e)) return "-0.0";
  return (a = e.toString(10)), Pd.test(a) ? a.replace("e", ".e") : a;
}
function Hd(e) {
  return (
    Object.prototype.toString.call(e) === "[object Number]" &&
    (e % 1 !== 0 || de.isNegativeZero(e))
  );
}
var Xs = new ke("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: vd,
    construct: Bd,
    predicate: Hd,
    represent: Md,
    defaultStyle: "lowercase",
  }),
  Ks = Vs.extend({
    implicit: [Ws, Gs, Qs, Xs],
  }),
  Js = Ks,
  Zs = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
  eo = new RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$",
  );
function Ud(e) {
  return e === null ? !1 : Zs.exec(e) !== null || eo.exec(e) !== null;
}
function jd(e) {
  var t,
    a,
    r,
    n,
    s,
    i,
    o,
    u = 0,
    l = null,
    p,
    h,
    f;
  if (((t = Zs.exec(e)), t === null && (t = eo.exec(e)), t === null))
    throw new Error("Date resolve error");
  if (((a = +t[1]), (r = +t[2] - 1), (n = +t[3]), !t[4]))
    return new Date(Date.UTC(a, r, n));
  if (((s = +t[4]), (i = +t[5]), (o = +t[6]), t[7])) {
    for (u = t[7].slice(0, 3); u.length < 3; ) u += "0";
    u = +u;
  }
  return (
    t[9] &&
      ((p = +t[10]),
      (h = +(t[11] || 0)),
      (l = (p * 60 + h) * 6e4),
      t[9] === "-" && (l = -l)),
    (f = new Date(Date.UTC(a, r, n, s, i, o, u))),
    l && f.setTime(f.getTime() - l),
    f
  );
}
function qd(e) {
  return e.toISOString();
}
var to = new ke("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: Ud,
  construct: jd,
  instanceOf: Date,
  represent: qd,
});
function Yd(e) {
  return e === "<<" || e === null;
}
var ao = new ke("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: Yd,
  }),
  ln = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function $d(e) {
  if (e === null) return !1;
  var t,
    a,
    r = 0,
    n = e.length,
    s = ln;
  for (a = 0; a < n; a++)
    if (((t = s.indexOf(e.charAt(a))), !(t > 64))) {
      if (t < 0) return !1;
      r += 6;
    }
  return r % 8 === 0;
}
function Vd(e) {
  var t,
    a,
    r = e.replace(/[\r\n=]/g, ""),
    n = r.length,
    s = ln,
    i = 0,
    o = [];
  for (t = 0; t < n; t++)
    t % 4 === 0 &&
      t &&
      (o.push((i >> 16) & 255), o.push((i >> 8) & 255), o.push(i & 255)),
      (i = (i << 6) | s.indexOf(r.charAt(t)));
  return (
    (a = (n % 4) * 6),
    a === 0
      ? (o.push((i >> 16) & 255), o.push((i >> 8) & 255), o.push(i & 255))
      : a === 18
        ? (o.push((i >> 10) & 255), o.push((i >> 2) & 255))
        : a === 12 && o.push((i >> 4) & 255),
    new Uint8Array(o)
  );
}
function Wd(e) {
  var t = "",
    a = 0,
    r,
    n,
    s = e.length,
    i = ln;
  for (r = 0; r < s; r++)
    r % 3 === 0 &&
      r &&
      ((t += i[(a >> 18) & 63]),
      (t += i[(a >> 12) & 63]),
      (t += i[(a >> 6) & 63]),
      (t += i[a & 63])),
      (a = (a << 8) + e[r]);
  return (
    (n = s % 3),
    n === 0
      ? ((t += i[(a >> 18) & 63]),
        (t += i[(a >> 12) & 63]),
        (t += i[(a >> 6) & 63]),
        (t += i[a & 63]))
      : n === 2
        ? ((t += i[(a >> 10) & 63]),
          (t += i[(a >> 4) & 63]),
          (t += i[(a << 2) & 63]),
          (t += i[64]))
        : n === 1 &&
          ((t += i[(a >> 2) & 63]),
          (t += i[(a << 4) & 63]),
          (t += i[64]),
          (t += i[64])),
    t
  );
}
function Gd(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
var ro = new ke("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: $d,
    construct: Vd,
    predicate: Gd,
    represent: Wd,
  }),
  Qd = Object.prototype.hasOwnProperty,
  Xd = Object.prototype.toString;
function Kd(e) {
  if (e === null) return !0;
  var t = [],
    a,
    r,
    n,
    s,
    i,
    o = e;
  for (a = 0, r = o.length; a < r; a += 1) {
    if (((n = o[a]), (i = !1), Xd.call(n) !== "[object Object]")) return !1;
    for (s in n)
      if (Qd.call(n, s))
        if (!i) i = !0;
        else return !1;
    if (!i) return !1;
    if (t.indexOf(s) === -1) t.push(s);
    else return !1;
  }
  return !0;
}
function Jd(e) {
  return e !== null ? e : [];
}
var no = new ke("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: Kd,
    construct: Jd,
  }),
  Zd = Object.prototype.toString;
function ep(e) {
  if (e === null) return !0;
  var t,
    a,
    r,
    n,
    s,
    i = e;
  for (s = new Array(i.length), t = 0, a = i.length; t < a; t += 1) {
    if (
      ((r = i[t]),
      Zd.call(r) !== "[object Object]" ||
        ((n = Object.keys(r)), n.length !== 1))
    )
      return !1;
    s[t] = [n[0], r[n[0]]];
  }
  return !0;
}
function tp(e) {
  if (e === null) return [];
  var t,
    a,
    r,
    n,
    s,
    i = e;
  for (s = new Array(i.length), t = 0, a = i.length; t < a; t += 1)
    (r = i[t]), (n = Object.keys(r)), (s[t] = [n[0], r[n[0]]]);
  return s;
}
var io = new ke("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: ep,
    construct: tp,
  }),
  ap = Object.prototype.hasOwnProperty;
function rp(e) {
  if (e === null) return !0;
  var t,
    a = e;
  for (t in a) if (ap.call(a, t) && a[t] !== null) return !1;
  return !0;
}
function np(e) {
  return e !== null ? e : {};
}
var so = new ke("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: rp,
    construct: np,
  }),
  fn = Js.extend({
    implicit: [to, ao],
    explicit: [ro, no, io, so],
  }),
  ht = Object.prototype.hasOwnProperty,
  va = 1,
  oo = 2,
  co = 3,
  Ba = 4,
  gr = 1,
  ip = 2,
  _i = 3,
  sp =
    /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
  op = /[\x85\u2028\u2029]/,
  cp = /[,\[\]\{\}]/,
  uo = /^(?:!|!!|![a-z\-]+!)$/i,
  lo =
    /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function mi(e) {
  return Object.prototype.toString.call(e);
}
function Ge(e) {
  return e === 10 || e === 13;
}
function At(e) {
  return e === 9 || e === 32;
}
function xe(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
function vt(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function up(e) {
  var t;
  return 48 <= e && e <= 57
    ? e - 48
    : ((t = e | 32), 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
function lp(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function fp(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
function gi(e) {
  return e === 48
    ? "\0"
    : e === 97
      ? "\x07"
      : e === 98
        ? "\b"
        : e === 116 || e === 9
          ? "	"
          : e === 110
            ? `
`
            : e === 118
              ? "\v"
              : e === 102
                ? "\f"
                : e === 114
                  ? "\r"
                  : e === 101
                    ? "\x1B"
                    : e === 32
                      ? " "
                      : e === 34
                        ? '"'
                        : e === 47
                          ? "/"
                          : e === 92
                            ? "\\"
                            : e === 78
                              ? ""
                              : e === 95
                                ? " "
                                : e === 76
                                  ? "\u2028"
                                  : e === 80
                                    ? "\u2029"
                                    : "";
}
function hp(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : String.fromCharCode(
        ((e - 65536) >> 10) + 55296,
        ((e - 65536) & 1023) + 56320,
      );
}
var fo = new Array(256),
  ho = new Array(256);
for (var Nt = 0; Nt < 256; Nt++) (fo[Nt] = gi(Nt) ? 1 : 0), (ho[Nt] = gi(Nt));
function dp(e, t) {
  (this.input = e),
    (this.filename = t.filename || null),
    (this.schema = t.schema || fn),
    (this.onWarning = t.onWarning || null),
    (this.legacy = t.legacy || !1),
    (this.json = t.json || !1),
    (this.listener = t.listener || null),
    (this.implicitTypes = this.schema.compiledImplicit),
    (this.typeMap = this.schema.compiledTypeMap),
    (this.length = e.length),
    (this.position = 0),
    (this.line = 0),
    (this.lineStart = 0),
    (this.lineIndent = 0),
    (this.firstTabInLine = -1),
    (this.documents = []);
}
function po(e, t) {
  var a = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart,
  };
  return (a.snippet = gd(a)), new Ee(t, a);
}
function W(e, t) {
  throw po(e, t);
}
function Pa(e, t) {
  e.onWarning && e.onWarning.call(null, po(e, t));
}
var yi = {
  YAML: function (t, a, r) {
    var n, s, i;
    t.version !== null && W(t, "duplication of %YAML directive"),
      r.length !== 1 && W(t, "YAML directive accepts exactly one argument"),
      (n = /^([0-9]+)\.([0-9]+)$/.exec(r[0])),
      n === null && W(t, "ill-formed argument of the YAML directive"),
      (s = parseInt(n[1], 10)),
      (i = parseInt(n[2], 10)),
      s !== 1 && W(t, "unacceptable YAML version of the document"),
      (t.version = r[0]),
      (t.checkLineBreaks = i < 2),
      i !== 1 && i !== 2 && Pa(t, "unsupported YAML version of the document");
  },
  TAG: function (t, a, r) {
    var n, s;
    r.length !== 2 && W(t, "TAG directive accepts exactly two arguments"),
      (n = r[0]),
      (s = r[1]),
      uo.test(n) ||
        W(t, "ill-formed tag handle (first argument) of the TAG directive"),
      ht.call(t.tagMap, n) &&
        W(
          t,
          'there is a previously declared suffix for "' + n + '" tag handle',
        ),
      lo.test(s) ||
        W(t, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      s = decodeURIComponent(s);
    } catch {
      W(t, "tag prefix is malformed: " + s);
    }
    t.tagMap[n] = s;
  },
};
function ut(e, t, a, r) {
  var n, s, i, o;
  if (t < a) {
    if (((o = e.input.slice(t, a)), r))
      for (n = 0, s = o.length; n < s; n += 1)
        (i = o.charCodeAt(n)),
          i === 9 ||
            (32 <= i && i <= 1114111) ||
            W(e, "expected valid JSON character");
    else sp.test(o) && W(e, "the stream contains non-printable characters");
    e.result += o;
  }
}
function ki(e, t, a, r) {
  var n, s, i, o;
  for (
    de.isObject(a) ||
      W(e, "cannot merge mappings; the provided source object is unacceptable"),
      n = Object.keys(a),
      i = 0,
      o = n.length;
    i < o;
    i += 1
  )
    (s = n[i]), ht.call(t, s) || ((t[s] = a[s]), (r[s] = !0));
}
function Bt(e, t, a, r, n, s, i, o, u) {
  var l, p;
  if (Array.isArray(n))
    for (n = Array.prototype.slice.call(n), l = 0, p = n.length; l < p; l += 1)
      Array.isArray(n[l]) &&
        W(e, "nested arrays are not supported inside keys"),
        typeof n == "object" &&
          mi(n[l]) === "[object Object]" &&
          (n[l] = "[object Object]");
  if (
    (typeof n == "object" &&
      mi(n) === "[object Object]" &&
      (n = "[object Object]"),
    (n = String(n)),
    t === null && (t = {}),
    r === "tag:yaml.org,2002:merge")
  )
    if (Array.isArray(s))
      for (l = 0, p = s.length; l < p; l += 1) ki(e, t, s[l], a);
    else ki(e, t, s, a);
  else
    !e.json &&
      !ht.call(a, n) &&
      ht.call(t, n) &&
      ((e.line = i || e.line),
      (e.lineStart = o || e.lineStart),
      (e.position = u || e.position),
      W(e, "duplicated mapping key")),
      n === "__proto__"
        ? Object.defineProperty(t, n, {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: s,
          })
        : (t[n] = s),
      delete a[n];
  return t;
}
function hn(e) {
  var t;
  (t = e.input.charCodeAt(e.position)),
    t === 10
      ? e.position++
      : t === 13
        ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++)
        : W(e, "a line break is expected"),
    (e.line += 1),
    (e.lineStart = e.position),
    (e.firstTabInLine = -1);
}
function he(e, t, a) {
  for (var r = 0, n = e.input.charCodeAt(e.position); n !== 0; ) {
    for (; At(n); )
      n === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position),
        (n = e.input.charCodeAt(++e.position));
    if (t && n === 35)
      do n = e.input.charCodeAt(++e.position);
      while (n !== 10 && n !== 13 && n !== 0);
    if (Ge(n))
      for (
        hn(e), n = e.input.charCodeAt(e.position), r++, e.lineIndent = 0;
        n === 32;

      )
        e.lineIndent++, (n = e.input.charCodeAt(++e.position));
    else break;
  }
  return (
    a !== -1 && r !== 0 && e.lineIndent < a && Pa(e, "deficient indentation"), r
  );
}
function er(e) {
  var t = e.position,
    a;
  return (
    (a = e.input.charCodeAt(t)),
    !!(
      (a === 45 || a === 46) &&
      a === e.input.charCodeAt(t + 1) &&
      a === e.input.charCodeAt(t + 2) &&
      ((t += 3), (a = e.input.charCodeAt(t)), a === 0 || xe(a))
    )
  );
}
function dn(e, t) {
  t === 1
    ? (e.result += " ")
    : t > 1 &&
      (e.result += de.repeat(
        `
`,
        t - 1,
      ));
}
function pp(e, t, a) {
  var r,
    n,
    s,
    i,
    o,
    u,
    l,
    p,
    h = e.kind,
    f = e.result,
    _;
  if (
    ((_ = e.input.charCodeAt(e.position)),
    xe(_) ||
      vt(_) ||
      _ === 35 ||
      _ === 38 ||
      _ === 42 ||
      _ === 33 ||
      _ === 124 ||
      _ === 62 ||
      _ === 39 ||
      _ === 34 ||
      _ === 37 ||
      _ === 64 ||
      _ === 96 ||
      ((_ === 63 || _ === 45) &&
        ((n = e.input.charCodeAt(e.position + 1)), xe(n) || (a && vt(n)))))
  )
    return !1;
  for (
    e.kind = "scalar", e.result = "", s = i = e.position, o = !1;
    _ !== 0;

  ) {
    if (_ === 58) {
      if (((n = e.input.charCodeAt(e.position + 1)), xe(n) || (a && vt(n))))
        break;
    } else if (_ === 35) {
      if (((r = e.input.charCodeAt(e.position - 1)), xe(r))) break;
    } else {
      if ((e.position === e.lineStart && er(e)) || (a && vt(_))) break;
      if (Ge(_))
        if (
          ((u = e.line),
          (l = e.lineStart),
          (p = e.lineIndent),
          he(e, !1, -1),
          e.lineIndent >= t)
        ) {
          (o = !0), (_ = e.input.charCodeAt(e.position));
          continue;
        } else {
          (e.position = i), (e.line = u), (e.lineStart = l), (e.lineIndent = p);
          break;
        }
    }
    o && (ut(e, s, i, !1), dn(e, e.line - u), (s = i = e.position), (o = !1)),
      At(_) || (i = e.position + 1),
      (_ = e.input.charCodeAt(++e.position));
  }
  return ut(e, s, i, !1), e.result ? !0 : ((e.kind = h), (e.result = f), !1);
}
function _p(e, t) {
  var a, r, n;
  if (((a = e.input.charCodeAt(e.position)), a !== 39)) return !1;
  for (
    e.kind = "scalar", e.result = "", e.position++, r = n = e.position;
    (a = e.input.charCodeAt(e.position)) !== 0;

  )
    if (a === 39)
      if (
        (ut(e, r, e.position, !0),
        (a = e.input.charCodeAt(++e.position)),
        a === 39)
      )
        (r = e.position), e.position++, (n = e.position);
      else return !0;
    else
      Ge(a)
        ? (ut(e, r, n, !0), dn(e, he(e, !1, t)), (r = n = e.position))
        : e.position === e.lineStart && er(e)
          ? W(e, "unexpected end of the document within a single quoted scalar")
          : (e.position++, (n = e.position));
  W(e, "unexpected end of the stream within a single quoted scalar");
}
function mp(e, t) {
  var a, r, n, s, i, o;
  if (((o = e.input.charCodeAt(e.position)), o !== 34)) return !1;
  for (
    e.kind = "scalar", e.result = "", e.position++, a = r = e.position;
    (o = e.input.charCodeAt(e.position)) !== 0;

  ) {
    if (o === 34) return ut(e, a, e.position, !0), e.position++, !0;
    if (o === 92) {
      if (
        (ut(e, a, e.position, !0),
        (o = e.input.charCodeAt(++e.position)),
        Ge(o))
      )
        he(e, !1, t);
      else if (o < 256 && fo[o]) (e.result += ho[o]), e.position++;
      else if ((i = lp(o)) > 0) {
        for (n = i, s = 0; n > 0; n--)
          (o = e.input.charCodeAt(++e.position)),
            (i = up(o)) >= 0
              ? (s = (s << 4) + i)
              : W(e, "expected hexadecimal character");
        (e.result += hp(s)), e.position++;
      } else W(e, "unknown escape sequence");
      a = r = e.position;
    } else
      Ge(o)
        ? (ut(e, a, r, !0), dn(e, he(e, !1, t)), (a = r = e.position))
        : e.position === e.lineStart && er(e)
          ? W(e, "unexpected end of the document within a double quoted scalar")
          : (e.position++, (r = e.position));
  }
  W(e, "unexpected end of the stream within a double quoted scalar");
}
function gp(e, t) {
  var a = !0,
    r,
    n,
    s,
    i = e.tag,
    o,
    u = e.anchor,
    l,
    p,
    h,
    f,
    _,
    y = Object.create(null),
    b,
    C,
    T,
    I;
  if (((I = e.input.charCodeAt(e.position)), I === 91))
    (p = 93), (_ = !1), (o = []);
  else if (I === 123) (p = 125), (_ = !0), (o = {});
  else return !1;
  for (
    e.anchor !== null && (e.anchorMap[e.anchor] = o),
      I = e.input.charCodeAt(++e.position);
    I !== 0;

  ) {
    if ((he(e, !0, t), (I = e.input.charCodeAt(e.position)), I === p))
      return (
        e.position++,
        (e.tag = i),
        (e.anchor = u),
        (e.kind = _ ? "mapping" : "sequence"),
        (e.result = o),
        !0
      );
    a
      ? I === 44 && W(e, "expected the node content, but found ','")
      : W(e, "missed comma between flow collection entries"),
      (C = b = T = null),
      (h = f = !1),
      I === 63 &&
        ((l = e.input.charCodeAt(e.position + 1)),
        xe(l) && ((h = f = !0), e.position++, he(e, !0, t))),
      (r = e.line),
      (n = e.lineStart),
      (s = e.position),
      Mt(e, t, va, !1, !0),
      (C = e.tag),
      (b = e.result),
      he(e, !0, t),
      (I = e.input.charCodeAt(e.position)),
      (f || e.line === r) &&
        I === 58 &&
        ((h = !0),
        (I = e.input.charCodeAt(++e.position)),
        he(e, !0, t),
        Mt(e, t, va, !1, !0),
        (T = e.result)),
      _
        ? Bt(e, o, y, C, b, T, r, n, s)
        : h
          ? o.push(Bt(e, null, y, C, b, T, r, n, s))
          : o.push(b),
      he(e, !0, t),
      (I = e.input.charCodeAt(e.position)),
      I === 44 ? ((a = !0), (I = e.input.charCodeAt(++e.position))) : (a = !1);
  }
  W(e, "unexpected end of the stream within a flow collection");
}
function yp(e, t) {
  var a,
    r,
    n = gr,
    s = !1,
    i = !1,
    o = t,
    u = 0,
    l = !1,
    p,
    h;
  if (((h = e.input.charCodeAt(e.position)), h === 124)) r = !1;
  else if (h === 62) r = !0;
  else return !1;
  for (e.kind = "scalar", e.result = ""; h !== 0; )
    if (((h = e.input.charCodeAt(++e.position)), h === 43 || h === 45))
      gr === n
        ? (n = h === 43 ? _i : ip)
        : W(e, "repeat of a chomping mode identifier");
    else if ((p = fp(h)) >= 0)
      p === 0
        ? W(
            e,
            "bad explicit indentation width of a block scalar; it cannot be less than one",
          )
        : i
          ? W(e, "repeat of an indentation width identifier")
          : ((o = t + p - 1), (i = !0));
    else break;
  if (At(h)) {
    do h = e.input.charCodeAt(++e.position);
    while (At(h));
    if (h === 35)
      do h = e.input.charCodeAt(++e.position);
      while (!Ge(h) && h !== 0);
  }
  for (; h !== 0; ) {
    for (
      hn(e), e.lineIndent = 0, h = e.input.charCodeAt(e.position);
      (!i || e.lineIndent < o) && h === 32;

    )
      e.lineIndent++, (h = e.input.charCodeAt(++e.position));
    if ((!i && e.lineIndent > o && (o = e.lineIndent), Ge(h))) {
      u++;
      continue;
    }
    if (e.lineIndent < o) {
      n === _i
        ? (e.result += de.repeat(
            `
`,
            s ? 1 + u : u,
          ))
        : n === gr &&
          s &&
          (e.result += `
`);
      break;
    }
    for (
      r
        ? At(h)
          ? ((l = !0),
            (e.result += de.repeat(
              `
`,
              s ? 1 + u : u,
            )))
          : l
            ? ((l = !1),
              (e.result += de.repeat(
                `
`,
                u + 1,
              )))
            : u === 0
              ? s && (e.result += " ")
              : (e.result += de.repeat(
                  `
`,
                  u,
                ))
        : (e.result += de.repeat(
            `
`,
            s ? 1 + u : u,
          )),
        s = !0,
        i = !0,
        u = 0,
        a = e.position;
      !Ge(h) && h !== 0;

    )
      h = e.input.charCodeAt(++e.position);
    ut(e, a, e.position, !1);
  }
  return !0;
}
function bi(e, t) {
  var a,
    r = e.tag,
    n = e.anchor,
    s = [],
    i,
    o = !1,
    u;
  if (e.firstTabInLine !== -1) return !1;
  for (
    e.anchor !== null && (e.anchorMap[e.anchor] = s),
      u = e.input.charCodeAt(e.position);
    u !== 0 &&
    (e.firstTabInLine !== -1 &&
      ((e.position = e.firstTabInLine),
      W(e, "tab characters must not be used in indentation")),
    !(u !== 45 || ((i = e.input.charCodeAt(e.position + 1)), !xe(i))));

  ) {
    if (((o = !0), e.position++, he(e, !0, -1) && e.lineIndent <= t)) {
      s.push(null), (u = e.input.charCodeAt(e.position));
      continue;
    }
    if (
      ((a = e.line),
      Mt(e, t, co, !1, !0),
      s.push(e.result),
      he(e, !0, -1),
      (u = e.input.charCodeAt(e.position)),
      (e.line === a || e.lineIndent > t) && u !== 0)
    )
      W(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t) break;
  }
  return o
    ? ((e.tag = r), (e.anchor = n), (e.kind = "sequence"), (e.result = s), !0)
    : !1;
}
function kp(e, t, a) {
  var r,
    n,
    s,
    i,
    o,
    u,
    l = e.tag,
    p = e.anchor,
    h = {},
    f = Object.create(null),
    _ = null,
    y = null,
    b = null,
    C = !1,
    T = !1,
    I;
  if (e.firstTabInLine !== -1) return !1;
  for (
    e.anchor !== null && (e.anchorMap[e.anchor] = h),
      I = e.input.charCodeAt(e.position);
    I !== 0;

  ) {
    if (
      (!C &&
        e.firstTabInLine !== -1 &&
        ((e.position = e.firstTabInLine),
        W(e, "tab characters must not be used in indentation")),
      (r = e.input.charCodeAt(e.position + 1)),
      (s = e.line),
      (I === 63 || I === 58) && xe(r))
    )
      I === 63
        ? (C && (Bt(e, h, f, _, y, null, i, o, u), (_ = y = b = null)),
          (T = !0),
          (C = !0),
          (n = !0))
        : C
          ? ((C = !1), (n = !0))
          : W(
              e,
              "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line",
            ),
        (e.position += 1),
        (I = r);
    else {
      if (
        ((i = e.line),
        (o = e.lineStart),
        (u = e.position),
        !Mt(e, a, oo, !1, !0))
      )
        break;
      if (e.line === s) {
        for (I = e.input.charCodeAt(e.position); At(I); )
          I = e.input.charCodeAt(++e.position);
        if (I === 58)
          (I = e.input.charCodeAt(++e.position)),
            xe(I) ||
              W(
                e,
                "a whitespace character is expected after the key-value separator within a block mapping",
              ),
            C && (Bt(e, h, f, _, y, null, i, o, u), (_ = y = b = null)),
            (T = !0),
            (C = !1),
            (n = !1),
            (_ = e.tag),
            (y = e.result);
        else if (T)
          W(e, "can not read an implicit mapping pair; a colon is missed");
        else return (e.tag = l), (e.anchor = p), !0;
      } else if (T)
        W(
          e,
          "can not read a block mapping entry; a multiline key may not be an implicit key",
        );
      else return (e.tag = l), (e.anchor = p), !0;
    }
    if (
      ((e.line === s || e.lineIndent > t) &&
        (C && ((i = e.line), (o = e.lineStart), (u = e.position)),
        Mt(e, t, Ba, !0, n) && (C ? (y = e.result) : (b = e.result)),
        C || (Bt(e, h, f, _, y, b, i, o, u), (_ = y = b = null)),
        he(e, !0, -1),
        (I = e.input.charCodeAt(e.position))),
      (e.line === s || e.lineIndent > t) && I !== 0)
    )
      W(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t) break;
  }
  return (
    C && Bt(e, h, f, _, y, null, i, o, u),
    T && ((e.tag = l), (e.anchor = p), (e.kind = "mapping"), (e.result = h)),
    T
  );
}
function bp(e) {
  var t,
    a = !1,
    r = !1,
    n,
    s,
    i;
  if (((i = e.input.charCodeAt(e.position)), i !== 33)) return !1;
  if (
    (e.tag !== null && W(e, "duplication of a tag property"),
    (i = e.input.charCodeAt(++e.position)),
    i === 60
      ? ((a = !0), (i = e.input.charCodeAt(++e.position)))
      : i === 33
        ? ((r = !0), (n = "!!"), (i = e.input.charCodeAt(++e.position)))
        : (n = "!"),
    (t = e.position),
    a)
  ) {
    do i = e.input.charCodeAt(++e.position);
    while (i !== 0 && i !== 62);
    e.position < e.length
      ? ((s = e.input.slice(t, e.position)),
        (i = e.input.charCodeAt(++e.position)))
      : W(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; i !== 0 && !xe(i); )
      i === 33 &&
        (r
          ? W(e, "tag suffix cannot contain exclamation marks")
          : ((n = e.input.slice(t - 1, e.position + 1)),
            uo.test(n) ||
              W(e, "named tag handle cannot contain such characters"),
            (r = !0),
            (t = e.position + 1))),
        (i = e.input.charCodeAt(++e.position));
    (s = e.input.slice(t, e.position)),
      cp.test(s) && W(e, "tag suffix cannot contain flow indicator characters");
  }
  s && !lo.test(s) && W(e, "tag name cannot contain such characters: " + s);
  try {
    s = decodeURIComponent(s);
  } catch {
    W(e, "tag name is malformed: " + s);
  }
  return (
    a
      ? (e.tag = s)
      : ht.call(e.tagMap, n)
        ? (e.tag = e.tagMap[n] + s)
        : n === "!"
          ? (e.tag = "!" + s)
          : n === "!!"
            ? (e.tag = "tag:yaml.org,2002:" + s)
            : W(e, 'undeclared tag handle "' + n + '"'),
    !0
  );
}
function wp(e) {
  var t, a;
  if (((a = e.input.charCodeAt(e.position)), a !== 38)) return !1;
  for (
    e.anchor !== null && W(e, "duplication of an anchor property"),
      a = e.input.charCodeAt(++e.position),
      t = e.position;
    a !== 0 && !xe(a) && !vt(a);

  )
    a = e.input.charCodeAt(++e.position);
  return (
    e.position === t &&
      W(e, "name of an anchor node must contain at least one character"),
    (e.anchor = e.input.slice(t, e.position)),
    !0
  );
}
function Ep(e) {
  var t, a, r;
  if (((r = e.input.charCodeAt(e.position)), r !== 42)) return !1;
  for (
    r = e.input.charCodeAt(++e.position), t = e.position;
    r !== 0 && !xe(r) && !vt(r);

  )
    r = e.input.charCodeAt(++e.position);
  return (
    e.position === t &&
      W(e, "name of an alias node must contain at least one character"),
    (a = e.input.slice(t, e.position)),
    ht.call(e.anchorMap, a) || W(e, 'unidentified alias "' + a + '"'),
    (e.result = e.anchorMap[a]),
    he(e, !0, -1),
    !0
  );
}
function Mt(e, t, a, r, n) {
  var s,
    i,
    o,
    u = 1,
    l = !1,
    p = !1,
    h,
    f,
    _,
    y,
    b,
    C;
  if (
    (e.listener !== null && e.listener("open", e),
    (e.tag = null),
    (e.anchor = null),
    (e.kind = null),
    (e.result = null),
    (s = i = o = Ba === a || co === a),
    r &&
      he(e, !0, -1) &&
      ((l = !0),
      e.lineIndent > t
        ? (u = 1)
        : e.lineIndent === t
          ? (u = 0)
          : e.lineIndent < t && (u = -1)),
    u === 1)
  )
    for (; bp(e) || wp(e); )
      he(e, !0, -1)
        ? ((l = !0),
          (o = s),
          e.lineIndent > t
            ? (u = 1)
            : e.lineIndent === t
              ? (u = 0)
              : e.lineIndent < t && (u = -1))
        : (o = !1);
  if (
    (o && (o = l || n),
    (u === 1 || Ba === a) &&
      (va === a || oo === a ? (b = t) : (b = t + 1),
      (C = e.position - e.lineStart),
      u === 1
        ? (o && (bi(e, C) || kp(e, C, b))) || gp(e, b)
          ? (p = !0)
          : ((i && yp(e, b)) || _p(e, b) || mp(e, b)
              ? (p = !0)
              : Ep(e)
                ? ((p = !0),
                  (e.tag !== null || e.anchor !== null) &&
                    W(e, "alias node should not have any properties"))
                : pp(e, b, va === a) &&
                  ((p = !0), e.tag === null && (e.tag = "?")),
            e.anchor !== null && (e.anchorMap[e.anchor] = e.result))
        : u === 0 && (p = o && bi(e, C))),
    e.tag === null)
  )
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (
      e.result !== null &&
        e.kind !== "scalar" &&
        W(
          e,
          'unacceptable node kind for !<?> tag; it should be "scalar", not "' +
            e.kind +
            '"',
        ),
        h = 0,
        f = e.implicitTypes.length;
      h < f;
      h += 1
    )
      if (((y = e.implicitTypes[h]), y.resolve(e.result))) {
        (e.result = y.construct(e.result)),
          (e.tag = y.tag),
          e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (ht.call(e.typeMap[e.kind || "fallback"], e.tag))
      y = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (
        y = null,
          _ = e.typeMap.multi[e.kind || "fallback"],
          h = 0,
          f = _.length;
        h < f;
        h += 1
      )
        if (e.tag.slice(0, _[h].tag.length) === _[h].tag) {
          y = _[h];
          break;
        }
    y || W(e, "unknown tag !<" + e.tag + ">"),
      e.result !== null &&
        y.kind !== e.kind &&
        W(
          e,
          "unacceptable node kind for !<" +
            e.tag +
            '> tag; it should be "' +
            y.kind +
            '", not "' +
            e.kind +
            '"',
        ),
      y.resolve(e.result, e.tag)
        ? ((e.result = y.construct(e.result, e.tag)),
          e.anchor !== null && (e.anchorMap[e.anchor] = e.result))
        : W(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return (
    e.listener !== null && e.listener("close", e),
    e.tag !== null || e.anchor !== null || p
  );
}
function Tp(e) {
  var t = e.position,
    a,
    r,
    n,
    s = !1,
    i;
  for (
    e.version = null,
      e.checkLineBreaks = e.legacy,
      e.tagMap = Object.create(null),
      e.anchorMap = Object.create(null);
    (i = e.input.charCodeAt(e.position)) !== 0 &&
    (he(e, !0, -1),
    (i = e.input.charCodeAt(e.position)),
    !(e.lineIndent > 0 || i !== 37));

  ) {
    for (
      s = !0, i = e.input.charCodeAt(++e.position), a = e.position;
      i !== 0 && !xe(i);

    )
      i = e.input.charCodeAt(++e.position);
    for (
      r = e.input.slice(a, e.position),
        n = [],
        r.length < 1 &&
          W(e, "directive name must not be less than one character in length");
      i !== 0;

    ) {
      for (; At(i); ) i = e.input.charCodeAt(++e.position);
      if (i === 35) {
        do i = e.input.charCodeAt(++e.position);
        while (i !== 0 && !Ge(i));
        break;
      }
      if (Ge(i)) break;
      for (a = e.position; i !== 0 && !xe(i); )
        i = e.input.charCodeAt(++e.position);
      n.push(e.input.slice(a, e.position));
    }
    i !== 0 && hn(e),
      ht.call(yi, r)
        ? yi[r](e, r, n)
        : Pa(e, 'unknown document directive "' + r + '"');
  }
  if (
    (he(e, !0, -1),
    e.lineIndent === 0 &&
    e.input.charCodeAt(e.position) === 45 &&
    e.input.charCodeAt(e.position + 1) === 45 &&
    e.input.charCodeAt(e.position + 2) === 45
      ? ((e.position += 3), he(e, !0, -1))
      : s && W(e, "directives end mark is expected"),
    Mt(e, e.lineIndent - 1, Ba, !1, !0),
    he(e, !0, -1),
    e.checkLineBreaks &&
      op.test(e.input.slice(t, e.position)) &&
      Pa(e, "non-ASCII line breaks are interpreted as content"),
    e.documents.push(e.result),
    e.position === e.lineStart && er(e))
  ) {
    e.input.charCodeAt(e.position) === 46 && ((e.position += 3), he(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    W(e, "end of the stream or a document separator is expected");
  else return;
}
function _o(e, t) {
  (e = String(e)),
    (t = t || {}),
    e.length !== 0 &&
      (e.charCodeAt(e.length - 1) !== 10 &&
        e.charCodeAt(e.length - 1) !== 13 &&
        (e += `
`),
      e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var a = new dp(e, t),
    r = e.indexOf("\0");
  for (
    r !== -1 && ((a.position = r), W(a, "null byte is not allowed in input")),
      a.input += "\0";
    a.input.charCodeAt(a.position) === 32;

  )
    (a.lineIndent += 1), (a.position += 1);
  for (; a.position < a.length - 1; ) Tp(a);
  return a.documents;
}
function Ap(e, t, a) {
  t !== null && typeof t == "object" && typeof a > "u" && ((a = t), (t = null));
  var r = _o(e, a);
  if (typeof t != "function") return r;
  for (var n = 0, s = r.length; n < s; n += 1) t(r[n]);
}
function Cp(e, t) {
  var a = _o(e, t);
  if (a.length !== 0) {
    if (a.length === 1) return a[0];
    throw new Ee("expected a single document in the stream, but found more");
  }
}
var xp = Ap,
  Dp = Cp,
  mo = {
    loadAll: xp,
    load: Dp,
  },
  go = Object.prototype.toString,
  yo = Object.prototype.hasOwnProperty,
  pn = 65279,
  zp = 9,
  la = 10,
  Ip = 13,
  Sp = 32,
  Np = 33,
  Fp = 34,
  Mr = 35,
  Op = 37,
  Lp = 38,
  Rp = 39,
  vp = 42,
  ko = 44,
  Bp = 45,
  Ma = 58,
  Pp = 61,
  Mp = 62,
  Hp = 63,
  Up = 64,
  bo = 91,
  wo = 93,
  jp = 96,
  Eo = 123,
  qp = 124,
  To = 125,
  be = {};
be[0] = "\\0";
be[7] = "\\a";
be[8] = "\\b";
be[9] = "\\t";
be[10] = "\\n";
be[11] = "\\v";
be[12] = "\\f";
be[13] = "\\r";
be[27] = "\\e";
be[34] = '\\"';
be[92] = "\\\\";
be[133] = "\\N";
be[160] = "\\_";
be[8232] = "\\L";
be[8233] = "\\P";
var Yp = [
    "y",
    "Y",
    "yes",
    "Yes",
    "YES",
    "on",
    "On",
    "ON",
    "n",
    "N",
    "no",
    "No",
    "NO",
    "off",
    "Off",
    "OFF",
  ],
  $p = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function Vp(e, t) {
  var a, r, n, s, i, o, u;
  if (t === null) return {};
  for (a = {}, r = Object.keys(t), n = 0, s = r.length; n < s; n += 1)
    (i = r[n]),
      (o = String(t[i])),
      i.slice(0, 2) === "!!" && (i = "tag:yaml.org,2002:" + i.slice(2)),
      (u = e.compiledTypeMap.fallback[i]),
      u && yo.call(u.styleAliases, o) && (o = u.styleAliases[o]),
      (a[i] = o);
  return a;
}
function Wp(e) {
  var t, a, r;
  if (((t = e.toString(16).toUpperCase()), e <= 255)) (a = "x"), (r = 2);
  else if (e <= 65535) (a = "u"), (r = 4);
  else if (e <= 4294967295) (a = "U"), (r = 8);
  else
    throw new Ee(
      "code point within a string may not be greater than 0xFFFFFFFF",
    );
  return "\\" + a + de.repeat("0", r - t.length) + t;
}
var Gp = 1,
  fa = 2;
function Qp(e) {
  (this.schema = e.schema || fn),
    (this.indent = Math.max(1, e.indent || 2)),
    (this.noArrayIndent = e.noArrayIndent || !1),
    (this.skipInvalid = e.skipInvalid || !1),
    (this.flowLevel = de.isNothing(e.flowLevel) ? -1 : e.flowLevel),
    (this.styleMap = Vp(this.schema, e.styles || null)),
    (this.sortKeys = e.sortKeys || !1),
    (this.lineWidth = e.lineWidth || 80),
    (this.noRefs = e.noRefs || !1),
    (this.noCompatMode = e.noCompatMode || !1),
    (this.condenseFlow = e.condenseFlow || !1),
    (this.quotingType = e.quotingType === '"' ? fa : Gp),
    (this.forceQuotes = e.forceQuotes || !1),
    (this.replacer = typeof e.replacer == "function" ? e.replacer : null),
    (this.implicitTypes = this.schema.compiledImplicit),
    (this.explicitTypes = this.schema.compiledExplicit),
    (this.tag = null),
    (this.result = ""),
    (this.duplicates = []),
    (this.usedDuplicates = null);
}
function wi(e, t) {
  for (
    var a = de.repeat(" ", t), r = 0, n = -1, s = "", i, o = e.length;
    r < o;

  )
    (n = e.indexOf(
      `
`,
      r,
    )),
      n === -1
        ? ((i = e.slice(r)), (r = o))
        : ((i = e.slice(r, n + 1)), (r = n + 1)),
      i.length &&
        i !==
          `
` &&
        (s += a),
      (s += i);
  return s;
}
function Hr(e, t) {
  return (
    `
` + de.repeat(" ", e.indent * t)
  );
}
function Xp(e, t) {
  var a, r, n;
  for (a = 0, r = e.implicitTypes.length; a < r; a += 1)
    if (((n = e.implicitTypes[a]), n.resolve(t))) return !0;
  return !1;
}
function Ha(e) {
  return e === Sp || e === zp;
}
function ha(e) {
  return (
    (32 <= e && e <= 126) ||
    (161 <= e && e <= 55295 && e !== 8232 && e !== 8233) ||
    (57344 <= e && e <= 65533 && e !== pn) ||
    (65536 <= e && e <= 1114111)
  );
}
function Ei(e) {
  return ha(e) && e !== pn && e !== Ip && e !== la;
}
function Ti(e, t, a) {
  var r = Ei(e),
    n = r && !Ha(e);
  return (
    ((a ? r : r && e !== ko && e !== bo && e !== wo && e !== Eo && e !== To) &&
      e !== Mr &&
      !(t === Ma && !n)) ||
    (Ei(t) && !Ha(t) && e === Mr) ||
    (t === Ma && n)
  );
}
function Kp(e) {
  return (
    ha(e) &&
    e !== pn &&
    !Ha(e) &&
    e !== Bp &&
    e !== Hp &&
    e !== Ma &&
    e !== ko &&
    e !== bo &&
    e !== wo &&
    e !== Eo &&
    e !== To &&
    e !== Mr &&
    e !== Lp &&
    e !== vp &&
    e !== Np &&
    e !== qp &&
    e !== Pp &&
    e !== Mp &&
    e !== Rp &&
    e !== Fp &&
    e !== Op &&
    e !== Up &&
    e !== jp
  );
}
function Jp(e) {
  return !Ha(e) && e !== Ma;
}
function Kt(e, t) {
  var a = e.charCodeAt(t),
    r;
  return a >= 55296 &&
    a <= 56319 &&
    t + 1 < e.length &&
    ((r = e.charCodeAt(t + 1)), r >= 56320 && r <= 57343)
    ? (a - 55296) * 1024 + r - 56320 + 65536
    : a;
}
function Ao(e) {
  var t = /^\n* /;
  return t.test(e);
}
var Co = 1,
  Ur = 2,
  xo = 3,
  Do = 4,
  Ot = 5;
function Zp(e, t, a, r, n, s, i, o) {
  var u,
    l = 0,
    p = null,
    h = !1,
    f = !1,
    _ = r !== -1,
    y = -1,
    b = Kp(Kt(e, 0)) && Jp(Kt(e, e.length - 1));
  if (t || i)
    for (u = 0; u < e.length; l >= 65536 ? (u += 2) : u++) {
      if (((l = Kt(e, u)), !ha(l))) return Ot;
      (b = b && Ti(l, p, o)), (p = l);
    }
  else {
    for (u = 0; u < e.length; l >= 65536 ? (u += 2) : u++) {
      if (((l = Kt(e, u)), l === la))
        (h = !0),
          _ && ((f = f || (u - y - 1 > r && e[y + 1] !== " ")), (y = u));
      else if (!ha(l)) return Ot;
      (b = b && Ti(l, p, o)), (p = l);
    }
    f = f || (_ && u - y - 1 > r && e[y + 1] !== " ");
  }
  return !h && !f
    ? b && !i && !n(e)
      ? Co
      : s === fa
        ? Ot
        : Ur
    : a > 9 && Ao(e)
      ? Ot
      : i
        ? s === fa
          ? Ot
          : Ur
        : f
          ? Do
          : xo;
}
function e_(e, t, a, r, n) {
  e.dump = (function () {
    if (t.length === 0) return e.quotingType === fa ? '""' : "''";
    if (!e.noCompatMode && (Yp.indexOf(t) !== -1 || $p.test(t)))
      return e.quotingType === fa ? '"' + t + '"' : "'" + t + "'";
    var s = e.indent * Math.max(1, a),
      i =
        e.lineWidth === -1
          ? -1
          : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - s),
      o = r || (e.flowLevel > -1 && a >= e.flowLevel);
    function u(l) {
      return Xp(e, l);
    }
    switch (Zp(t, o, e.indent, i, u, e.quotingType, e.forceQuotes && !r, n)) {
      case Co:
        return t;
      case Ur:
        return "'" + t.replace(/'/g, "''") + "'";
      case xo:
        return "|" + Ai(t, e.indent) + Ci(wi(t, s));
      case Do:
        return ">" + Ai(t, e.indent) + Ci(wi(t_(t, i), s));
      case Ot:
        return '"' + a_(t) + '"';
      default:
        throw new Ee("impossible error: invalid scalar style");
    }
  })();
}
function Ai(e, t) {
  var a = Ao(e) ? String(t) : "",
    r =
      e[e.length - 1] ===
      `
`,
    n =
      r &&
      (e[e.length - 2] ===
        `
` ||
        e ===
          `
`),
    s = n ? "+" : r ? "" : "-";
  return (
    a +
    s +
    `
`
  );
}
function Ci(e) {
  return e[e.length - 1] ===
    `
`
    ? e.slice(0, -1)
    : e;
}
function t_(e, t) {
  for (
    var a = /(\n+)([^\n]*)/g,
      r = (function () {
        var l = e.indexOf(`
`);
        return (
          (l = l !== -1 ? l : e.length), (a.lastIndex = l), xi(e.slice(0, l), t)
        );
      })(),
      n =
        e[0] ===
          `
` || e[0] === " ",
      s,
      i;
    (i = a.exec(e));

  ) {
    var o = i[1],
      u = i[2];
    (s = u[0] === " "),
      (r +=
        o +
        (!n && !s && u !== ""
          ? `
`
          : "") +
        xi(u, t)),
      (n = s);
  }
  return r;
}
function xi(e, t) {
  if (e === "" || e[0] === " ") return e;
  for (var a = / [^ ]/g, r, n = 0, s, i = 0, o = 0, u = ""; (r = a.exec(e)); )
    (o = r.index),
      o - n > t &&
        ((s = i > n ? i : o),
        (u +=
          `
` + e.slice(n, s)),
        (n = s + 1)),
      (i = o);
  return (
    (u += `
`),
    e.length - n > t && i > n
      ? (u +=
          e.slice(n, i) +
          `
` +
          e.slice(i + 1))
      : (u += e.slice(n)),
    u.slice(1)
  );
}
function a_(e) {
  for (var t = "", a = 0, r, n = 0; n < e.length; a >= 65536 ? (n += 2) : n++)
    (a = Kt(e, n)),
      (r = be[a]),
      !r && ha(a)
        ? ((t += e[n]), a >= 65536 && (t += e[n + 1]))
        : (t += r || Wp(a));
  return t;
}
function r_(e, t, a) {
  var r = "",
    n = e.tag,
    s,
    i,
    o;
  for (s = 0, i = a.length; s < i; s += 1)
    (o = a[s]),
      e.replacer && (o = e.replacer.call(a, String(s), o)),
      (tt(e, t, o, !1, !1) || (typeof o > "u" && tt(e, t, null, !1, !1))) &&
        (r !== "" && (r += "," + (e.condenseFlow ? "" : " ")), (r += e.dump));
  (e.tag = n), (e.dump = "[" + r + "]");
}
function Di(e, t, a, r) {
  var n = "",
    s = e.tag,
    i,
    o,
    u;
  for (i = 0, o = a.length; i < o; i += 1)
    (u = a[i]),
      e.replacer && (u = e.replacer.call(a, String(i), u)),
      (tt(e, t + 1, u, !0, !0, !1, !0) ||
        (typeof u > "u" && tt(e, t + 1, null, !0, !0, !1, !0))) &&
        ((!r || n !== "") && (n += Hr(e, t)),
        e.dump && la === e.dump.charCodeAt(0) ? (n += "-") : (n += "- "),
        (n += e.dump));
  (e.tag = s), (e.dump = n || "[]");
}
function n_(e, t, a) {
  var r = "",
    n = e.tag,
    s = Object.keys(a),
    i,
    o,
    u,
    l,
    p;
  for (i = 0, o = s.length; i < o; i += 1)
    (p = ""),
      r !== "" && (p += ", "),
      e.condenseFlow && (p += '"'),
      (u = s[i]),
      (l = a[u]),
      e.replacer && (l = e.replacer.call(a, u, l)),
      tt(e, t, u, !1, !1) &&
        (e.dump.length > 1024 && (p += "? "),
        (p +=
          e.dump +
          (e.condenseFlow ? '"' : "") +
          ":" +
          (e.condenseFlow ? "" : " ")),
        tt(e, t, l, !1, !1) && ((p += e.dump), (r += p)));
  (e.tag = n), (e.dump = "{" + r + "}");
}
function i_(e, t, a, r) {
  var n = "",
    s = e.tag,
    i = Object.keys(a),
    o,
    u,
    l,
    p,
    h,
    f;
  if (e.sortKeys === !0) i.sort();
  else if (typeof e.sortKeys == "function") i.sort(e.sortKeys);
  else if (e.sortKeys) throw new Ee("sortKeys must be a boolean or a function");
  for (o = 0, u = i.length; o < u; o += 1)
    (f = ""),
      (!r || n !== "") && (f += Hr(e, t)),
      (l = i[o]),
      (p = a[l]),
      e.replacer && (p = e.replacer.call(a, l, p)),
      tt(e, t + 1, l, !0, !0, !0) &&
        ((h =
          (e.tag !== null && e.tag !== "?") ||
          (e.dump && e.dump.length > 1024)),
        h && (e.dump && la === e.dump.charCodeAt(0) ? (f += "?") : (f += "? ")),
        (f += e.dump),
        h && (f += Hr(e, t)),
        tt(e, t + 1, p, !0, h) &&
          (e.dump && la === e.dump.charCodeAt(0) ? (f += ":") : (f += ": "),
          (f += e.dump),
          (n += f)));
  (e.tag = s), (e.dump = n || "{}");
}
function zi(e, t, a) {
  var r, n, s, i, o, u;
  for (
    n = a ? e.explicitTypes : e.implicitTypes, s = 0, i = n.length;
    s < i;
    s += 1
  )
    if (
      ((o = n[s]),
      (o.instanceOf || o.predicate) &&
        (!o.instanceOf ||
          (typeof t == "object" && t instanceof o.instanceOf)) &&
        (!o.predicate || o.predicate(t)))
    ) {
      if (
        (a
          ? o.multi && o.representName
            ? (e.tag = o.representName(t))
            : (e.tag = o.tag)
          : (e.tag = "?"),
        o.represent)
      ) {
        if (
          ((u = e.styleMap[o.tag] || o.defaultStyle),
          go.call(o.represent) === "[object Function]")
        )
          r = o.represent(t, u);
        else if (yo.call(o.represent, u)) r = o.represent[u](t, u);
        else
          throw new Ee(
            "!<" + o.tag + '> tag resolver accepts not "' + u + '" style',
          );
        e.dump = r;
      }
      return !0;
    }
  return !1;
}
function tt(e, t, a, r, n, s, i) {
  (e.tag = null), (e.dump = a), zi(e, a, !1) || zi(e, a, !0);
  var o = go.call(e.dump),
    u = r,
    l;
  r && (r = e.flowLevel < 0 || e.flowLevel > t);
  var p = o === "[object Object]" || o === "[object Array]",
    h,
    f;
  if (
    (p && ((h = e.duplicates.indexOf(a)), (f = h !== -1)),
    ((e.tag !== null && e.tag !== "?") || f || (e.indent !== 2 && t > 0)) &&
      (n = !1),
    f && e.usedDuplicates[h])
  )
    e.dump = "*ref_" + h;
  else {
    if (
      (p && f && !e.usedDuplicates[h] && (e.usedDuplicates[h] = !0),
      o === "[object Object]")
    )
      r && Object.keys(e.dump).length !== 0
        ? (i_(e, t, e.dump, n), f && (e.dump = "&ref_" + h + e.dump))
        : (n_(e, t, e.dump), f && (e.dump = "&ref_" + h + " " + e.dump));
    else if (o === "[object Array]")
      r && e.dump.length !== 0
        ? (e.noArrayIndent && !i && t > 0
            ? Di(e, t - 1, e.dump, n)
            : Di(e, t, e.dump, n),
          f && (e.dump = "&ref_" + h + e.dump))
        : (r_(e, t, e.dump), f && (e.dump = "&ref_" + h + " " + e.dump));
    else if (o === "[object String]") e.tag !== "?" && e_(e, e.dump, t, s, u);
    else {
      if (o === "[object Undefined]") return !1;
      if (e.skipInvalid) return !1;
      throw new Ee("unacceptable kind of an object to dump " + o);
    }
    e.tag !== null &&
      e.tag !== "?" &&
      ((l = encodeURI(e.tag[0] === "!" ? e.tag.slice(1) : e.tag).replace(
        /!/g,
        "%21",
      )),
      e.tag[0] === "!"
        ? (l = "!" + l)
        : l.slice(0, 18) === "tag:yaml.org,2002:"
          ? (l = "!!" + l.slice(18))
          : (l = "!<" + l + ">"),
      (e.dump = l + " " + e.dump));
  }
  return !0;
}
function s_(e, t) {
  var a = [],
    r = [],
    n,
    s;
  for (jr(e, a, r), n = 0, s = r.length; n < s; n += 1)
    t.duplicates.push(a[r[n]]);
  t.usedDuplicates = new Array(s);
}
function jr(e, t, a) {
  var r, n, s;
  if (e !== null && typeof e == "object")
    if (((n = t.indexOf(e)), n !== -1)) a.indexOf(n) === -1 && a.push(n);
    else if ((t.push(e), Array.isArray(e)))
      for (n = 0, s = e.length; n < s; n += 1) jr(e[n], t, a);
    else
      for (r = Object.keys(e), n = 0, s = r.length; n < s; n += 1)
        jr(e[r[n]], t, a);
}
function o_(e, t) {
  t = t || {};
  var a = new Qp(t);
  a.noRefs || s_(e, a);
  var r = e;
  return (
    a.replacer &&
      (r = a.replacer.call(
        {
          "": r,
        },
        "",
        r,
      )),
    tt(a, 0, r, !0, !0)
      ? a.dump +
        `
`
      : ""
  );
}
var c_ = o_,
  u_ = {
    dump: c_,
  };
function _n(e, t) {
  return function () {
    throw new Error(
      "Function yaml." +
        e +
        " is removed in js-yaml 4. Use yaml." +
        t +
        " instead, which is now safe by default.",
    );
  };
}
var l_ = ke,
  f_ = js,
  h_ = Vs,
  d_ = Ks,
  p_ = Js,
  __ = fn,
  m_ = mo.load,
  g_ = mo.loadAll,
  y_ = u_.dump,
  k_ = Ee,
  b_ = {
    binary: ro,
    float: Xs,
    map: $s,
    null: Ws,
    pairs: io,
    set: so,
    timestamp: to,
    bool: Gs,
    int: Qs,
    merge: ao,
    omap: no,
    seq: Ys,
    str: qs,
  },
  w_ = _n("safeLoad", "load"),
  E_ = _n("safeLoadAll", "loadAll"),
  T_ = _n("safeDump", "dump"),
  zo = {
    Type: l_,
    Schema: f_,
    FAILSAFE_SCHEMA: h_,
    JSON_SCHEMA: d_,
    CORE_SCHEMA: p_,
    DEFAULT_SCHEMA: __,
    load: m_,
    loadAll: g_,
    dump: y_,
    YAMLException: k_,
    types: b_,
    safeLoad: w_,
    safeLoadAll: E_,
    safeDump: T_,
  };
function Io(e) {
  return (
    e &&
    e.constructor &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e)
  );
}
function So(e) {
  return e;
}
function A_(e, t) {
  t = t || {};
  const a = t.delimiter || ".",
    r = t.maxDepth,
    n = t.transformKey || So,
    s = {};
  function i(o, u, l) {
    (l = l || 1),
      Object.keys(o).forEach(function (p) {
        const h = o[p],
          f = t.safe && Array.isArray(h),
          _ = Object.prototype.toString.call(h),
          y = Io(h),
          b = _ === "[object Object]" || _ === "[object Array]",
          C = u ? u + a + n(p) : n(p);
        if (!f && !y && b && Object.keys(h).length && (!t.maxDepth || l < r))
          return i(h, C, l + 1);
        s[C] = h;
      });
  }
  return i(e), s;
}
function mn(e, t) {
  t = t || {};
  const a = t.delimiter || ".",
    r = t.overwrite || !1,
    n = t.transformKey || So,
    s = {};
  if (Io(e) || Object.prototype.toString.call(e) !== "[object Object]")
    return e;
  function o(p) {
    const h = Number(p);
    return isNaN(h) || p.indexOf(".") !== -1 || t.object ? p : h;
  }
  function u(p, h, f) {
    return Object.keys(f).reduce(function (_, y) {
      return (_[p + a + y] = f[y]), _;
    }, h);
  }
  function l(p) {
    const h = Object.prototype.toString.call(p),
      f = h === "[object Array]",
      _ = h === "[object Object]";
    if (p) {
      if (f) return !p.length;
      if (_) return !Object.keys(p).length;
    } else return !0;
  }
  return (
    (e = Object.keys(e).reduce(function (p, h) {
      const f = Object.prototype.toString.call(e[h]);
      return !(f === "[object Object]" || f === "[object Array]") || l(e[h])
        ? ((p[h] = e[h]), p)
        : u(h, p, A_(e[h], t));
    }, {})),
    Object.keys(e).forEach(function (p) {
      const h = p.split(a).map(n);
      let f = o(h.shift()),
        _ = o(h[0]),
        y = s;
      for (; _ !== void 0; ) {
        if (f === "__proto__") return;
        const b = Object.prototype.toString.call(y[f]),
          C = b === "[object Object]" || b === "[object Array]";
        if (!r && !C && typeof y[f] < "u") return;
        ((r && !C) || (!r && y[f] == null)) &&
          (y[f] = typeof _ == "number" && !t.object ? [] : {}),
          (y = y[f]),
          h.length > 0 && ((f = o(h.shift())), (_ = o(h[0])));
      }
      y[f] = mn(e[p], t);
    }),
    s
  );
}
const C_ = /["&'<>`]/g,
  x_ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  D_ = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
  z_ = /[|\\{}()[\]^$+*?.]/g,
  Ii = new WeakMap();
function I_(e, t) {
  if (
    ((e = e.replace(t.subset ? S_(t.subset) : C_, r)), t.subset || t.escapeOnly)
  )
    return e;
  return e.replace(x_, a).replace(D_, r);
  function a(n, s, i) {
    return t.format(
      (n.charCodeAt(0) - 55296) * 1024 + n.charCodeAt(1) - 56320 + 65536,
      i.charCodeAt(s + 2),
      t,
    );
  }
  function r(n, s, i) {
    return t.format(n.charCodeAt(0), i.charCodeAt(s + 1), t);
  }
}
function S_(e) {
  let t = Ii.get(e);
  return t || ((t = N_(e)), Ii.set(e, t)), t;
}
function N_(e) {
  const t = [];
  let a = -1;
  for (; ++a < e.length; ) t.push(e[a].replace(z_, "\\$&"));
  return new RegExp("(?:" + t.join("|") + ")", "g");
}
const F_ = [
  "AElig",
  "AMP",
  "Aacute",
  "Acirc",
  "Agrave",
  "Aring",
  "Atilde",
  "Auml",
  "COPY",
  "Ccedil",
  "ETH",
  "Eacute",
  "Ecirc",
  "Egrave",
  "Euml",
  "GT",
  "Iacute",
  "Icirc",
  "Igrave",
  "Iuml",
  "LT",
  "Ntilde",
  "Oacute",
  "Ocirc",
  "Ograve",
  "Oslash",
  "Otilde",
  "Ouml",
  "QUOT",
  "REG",
  "THORN",
  "Uacute",
  "Ucirc",
  "Ugrave",
  "Uuml",
  "Yacute",
  "aacute",
  "acirc",
  "acute",
  "aelig",
  "agrave",
  "amp",
  "aring",
  "atilde",
  "auml",
  "brvbar",
  "ccedil",
  "cedil",
  "cent",
  "copy",
  "curren",
  "deg",
  "divide",
  "eacute",
  "ecirc",
  "egrave",
  "eth",
  "euml",
  "frac12",
  "frac14",
  "frac34",
  "gt",
  "iacute",
  "icirc",
  "iexcl",
  "igrave",
  "iquest",
  "iuml",
  "laquo",
  "lt",
  "macr",
  "micro",
  "middot",
  "nbsp",
  "not",
  "ntilde",
  "oacute",
  "ocirc",
  "ograve",
  "ordf",
  "ordm",
  "oslash",
  "otilde",
  "ouml",
  "para",
  "plusmn",
  "pound",
  "quot",
  "raquo",
  "reg",
  "sect",
  "shy",
  "sup1",
  "sup2",
  "sup3",
  "szlig",
  "thorn",
  "times",
  "uacute",
  "ucirc",
  "ugrave",
  "uml",
  "uuml",
  "yacute",
  "yen",
  "yuml",
];
function O_(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function L_(e, t) {
  return I_(
    e,
    Object.assign(
      {
        format: O_,
      },
      t,
    ),
  );
}
const Si = {}.hasOwnProperty;
function No(e, t) {
  const a = t || {};
  function r(n, ...s) {
    let i = r.invalid;
    const o = r.handlers;
    if (n && Si.call(n, e)) {
      const u = String(n[e]);
      i = Si.call(o, u) ? o[u] : r.unknown;
    }
    if (i) return i.call(this, n, ...s);
  }
  return (
    (r.handlers = a.handlers || {}),
    (r.invalid = a.invalid),
    (r.unknown = a.unknown),
    r
  );
}
function R_(e, t, a, r) {
  const n = a.enter("blockquote"),
    s = a.createTracker(r);
  s.move("> "), s.shift(2);
  const i = a.indentLines(a.containerFlow(e, s.current()), v_);
  return n(), i;
}
function v_(e, t, a) {
  return ">" + (a ? "" : " ") + e;
}
function B_(e, t) {
  return Ni(e, t.inConstruct, !0) && !Ni(e, t.notInConstruct, !1);
}
function Ni(e, t, a) {
  if ((typeof t == "string" && (t = [t]), !t || t.length === 0)) return a;
  let r = -1;
  for (; ++r < t.length; ) if (e.includes(t[r])) return !0;
  return !1;
}
function Fi(e, t, a, r) {
  let n = -1;
  for (; ++n < a.unsafe.length; )
    if (
      a.unsafe[n].character ===
        `
` &&
      B_(a.stack, a.unsafe[n])
    )
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function P_(e, t) {
  const a = String(e);
  let r = a.indexOf(t),
    n = r,
    s = 0,
    i = 0;
  if (typeof t != "string") throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === n ? ++s > i && (i = s) : (s = 1),
      (n = r + t.length),
      (r = a.indexOf(t, n));
  return i;
}
function M_(e, t) {
  return !!(
    t.options.fences === !1 &&
    e.value &&
    !e.lang &&
    /[^ \r\n]/.test(e.value) &&
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value)
  );
}
function H_(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" +
        t +
        "` for `options.fence`, expected `` ` `` or `~`",
    );
  return t;
}
function U_(e, t, a, r) {
  const n = H_(a),
    s = e.value || "",
    i = n === "`" ? "GraveAccent" : "Tilde";
  if (M_(e, a)) {
    const h = a.enter("codeIndented"),
      f = a.indentLines(s, j_);
    return h(), f;
  }
  const o = a.createTracker(r),
    u = n.repeat(Math.max(P_(s, n) + 1, 3)),
    l = a.enter("codeFenced");
  let p = o.move(u);
  if (e.lang) {
    const h = a.enter(`codeFencedLang${i}`);
    (p += o.move(
      a.safe(e.lang, {
        before: p,
        after: " ",
        encode: ["`"],
        ...o.current(),
      }),
    )),
      h();
  }
  if (e.lang && e.meta) {
    const h = a.enter(`codeFencedMeta${i}`);
    (p += o.move(" ")),
      (p += o.move(
        a.safe(e.meta, {
          before: p,
          after: `
`,
          encode: ["`"],
          ...o.current(),
        }),
      )),
      h();
  }
  return (
    (p += o.move(`
`)),
    s &&
      (p += o.move(
        s +
          `
`,
      )),
    (p += o.move(u)),
    l(),
    p
  );
}
function j_(e, t, a) {
  return (a ? "" : "    ") + e;
}
function gn(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" +
        t +
        "` for `options.quote`, expected `\"`, or `'`",
    );
  return t;
}
function q_(e, t, a, r) {
  const n = gn(a),
    s = n === '"' ? "Quote" : "Apostrophe",
    i = a.enter("definition");
  let o = a.enter("label");
  const u = a.createTracker(r);
  let l = u.move("[");
  return (
    (l += u.move(
      a.safe(a.associationId(e), {
        before: l,
        after: "]",
        ...u.current(),
      }),
    )),
    (l += u.move("]: ")),
    o(),
    !e.url || /[\0- \u007F]/.test(e.url)
      ? ((o = a.enter("destinationLiteral")),
        (l += u.move("<")),
        (l += u.move(
          a.safe(e.url, {
            before: l,
            after: ">",
            ...u.current(),
          }),
        )),
        (l += u.move(">")))
      : ((o = a.enter("destinationRaw")),
        (l += u.move(
          a.safe(e.url, {
            before: l,
            after: e.title
              ? " "
              : `
`,
            ...u.current(),
          }),
        ))),
    o(),
    e.title &&
      ((o = a.enter(`title${s}`)),
      (l += u.move(" " + n)),
      (l += u.move(
        a.safe(e.title, {
          before: l,
          after: n,
          ...u.current(),
        }),
      )),
      (l += u.move(n)),
      o()),
    i(),
    l
  );
}
function Y_(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" +
        t +
        "` for `options.emphasis`, expected `*`, or `_`",
    );
  return t;
}
Fo.peek = $_;
function Fo(e, t, a, r) {
  const n = Y_(a),
    s = a.enter("emphasis"),
    i = a.createTracker(r);
  let o = i.move(n);
  return (
    (o += i.move(
      a.containerPhrasing(e, {
        before: o,
        after: n,
        ...i.current(),
      }),
    )),
    (o += i.move(n)),
    s(),
    o
  );
}
function $_(e, t, a) {
  return a.options.emphasis || "*";
}
function V_(e, t) {
  let a = !1;
  return (
    et(e, function (r) {
      if (("value" in r && /\r?\n|\r/.test(r.value)) || r.type === "break")
        return (a = !0), vr;
    }),
    !!((!e.depth || e.depth < 3) && rn(e) && (t.options.setext || a))
  );
}
function W_(e, t, a, r) {
  const n = Math.max(Math.min(6, e.depth || 1), 1),
    s = a.createTracker(r);
  if (V_(e, a)) {
    const p = a.enter("headingSetext"),
      h = a.enter("phrasing"),
      f = a.containerPhrasing(e, {
        ...s.current(),
        before: `
`,
        after: `
`,
      });
    return (
      h(),
      p(),
      f +
        `
` +
        (n === 1 ? "=" : "-").repeat(
          f.length -
            (Math.max(
              f.lastIndexOf("\r"),
              f.lastIndexOf(`
`),
            ) +
              1),
        )
    );
  }
  const i = "#".repeat(n),
    o = a.enter("headingAtx"),
    u = a.enter("phrasing");
  s.move(i + " ");
  let l = a.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...s.current(),
  });
  return (
    /^[\t ]/.test(l) &&
      (l =
        "&#x" + l.charCodeAt(0).toString(16).toUpperCase() + ";" + l.slice(1)),
    (l = l ? i + " " + l : i),
    a.options.closeAtx && (l += " " + i),
    u(),
    o(),
    l
  );
}
Oo.peek = G_;
function Oo(e) {
  return e.value || "";
}
function G_() {
  return "<";
}
Lo.peek = Q_;
function Lo(e, t, a, r) {
  const n = gn(a),
    s = n === '"' ? "Quote" : "Apostrophe",
    i = a.enter("image");
  let o = a.enter("label");
  const u = a.createTracker(r);
  let l = u.move("![");
  return (
    (l += u.move(
      a.safe(e.alt, {
        before: l,
        after: "]",
        ...u.current(),
      }),
    )),
    (l += u.move("](")),
    o(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((o = a.enter("destinationLiteral")),
        (l += u.move("<")),
        (l += u.move(
          a.safe(e.url, {
            before: l,
            after: ">",
            ...u.current(),
          }),
        )),
        (l += u.move(">")))
      : ((o = a.enter("destinationRaw")),
        (l += u.move(
          a.safe(e.url, {
            before: l,
            after: e.title ? " " : ")",
            ...u.current(),
          }),
        ))),
    o(),
    e.title &&
      ((o = a.enter(`title${s}`)),
      (l += u.move(" " + n)),
      (l += u.move(
        a.safe(e.title, {
          before: l,
          after: n,
          ...u.current(),
        }),
      )),
      (l += u.move(n)),
      o()),
    (l += u.move(")")),
    i(),
    l
  );
}
function Q_() {
  return "!";
}
Ro.peek = X_;
function Ro(e, t, a, r) {
  const n = e.referenceType,
    s = a.enter("imageReference");
  let i = a.enter("label");
  const o = a.createTracker(r);
  let u = o.move("![");
  const l = a.safe(e.alt, {
    before: u,
    after: "]",
    ...o.current(),
  });
  (u += o.move(l + "][")), i();
  const p = a.stack;
  (a.stack = []), (i = a.enter("reference"));
  const h = a.safe(a.associationId(e), {
    before: u,
    after: "]",
    ...o.current(),
  });
  return (
    i(),
    (a.stack = p),
    s(),
    n === "full" || !l || l !== h
      ? (u += o.move(h + "]"))
      : n === "shortcut"
        ? (u = u.slice(0, -1))
        : (u += o.move("]")),
    u
  );
}
function X_() {
  return "!";
}
vo.peek = K_;
function vo(e, t, a) {
  let r = e.value || "",
    n = "`",
    s = -1;
  for (; new RegExp("(^|[^`])" + n + "([^`]|$)").test(r); ) n += "`";
  for (
    /[^ \r\n]/.test(r) &&
    ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
    (r = " " + r + " ");
    ++s < a.unsafe.length;

  ) {
    const i = a.unsafe[s],
      o = a.compilePattern(i);
    let u;
    if (i.atBreak)
      for (; (u = o.exec(r)); ) {
        let l = u.index;
        r.charCodeAt(l) === 10 && r.charCodeAt(l - 1) === 13 && l--,
          (r = r.slice(0, l) + " " + r.slice(u.index + 1));
      }
  }
  return n + r + n;
}
function K_() {
  return "`";
}
function Bo(e, t) {
  const a = rn(e);
  return !!(
    !t.options.resourceLink &&
    e.url &&
    !e.title &&
    e.children &&
    e.children.length === 1 &&
    e.children[0].type === "text" &&
    (a === e.url || "mailto:" + a === e.url) &&
    /^[a-z][a-z+.-]+:/i.test(e.url) &&
    !/[\0- <>\u007F]/.test(e.url)
  );
}
Po.peek = J_;
function Po(e, t, a, r) {
  const n = gn(a),
    s = n === '"' ? "Quote" : "Apostrophe",
    i = a.createTracker(r);
  let o, u;
  if (Bo(e, a)) {
    const p = a.stack;
    (a.stack = []), (o = a.enter("autolink"));
    let h = i.move("<");
    return (
      (h += i.move(
        a.containerPhrasing(e, {
          before: h,
          after: ">",
          ...i.current(),
        }),
      )),
      (h += i.move(">")),
      o(),
      (a.stack = p),
      h
    );
  }
  (o = a.enter("link")), (u = a.enter("label"));
  let l = i.move("[");
  return (
    (l += i.move(
      a.containerPhrasing(e, {
        before: l,
        after: "](",
        ...i.current(),
      }),
    )),
    (l += i.move("](")),
    u(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((u = a.enter("destinationLiteral")),
        (l += i.move("<")),
        (l += i.move(
          a.safe(e.url, {
            before: l,
            after: ">",
            ...i.current(),
          }),
        )),
        (l += i.move(">")))
      : ((u = a.enter("destinationRaw")),
        (l += i.move(
          a.safe(e.url, {
            before: l,
            after: e.title ? " " : ")",
            ...i.current(),
          }),
        ))),
    u(),
    e.title &&
      ((u = a.enter(`title${s}`)),
      (l += i.move(" " + n)),
      (l += i.move(
        a.safe(e.title, {
          before: l,
          after: n,
          ...i.current(),
        }),
      )),
      (l += i.move(n)),
      u()),
    (l += i.move(")")),
    o(),
    l
  );
}
function J_(e, t, a) {
  return Bo(e, a) ? "<" : "[";
}
Mo.peek = Z_;
function Mo(e, t, a, r) {
  const n = e.referenceType,
    s = a.enter("linkReference");
  let i = a.enter("label");
  const o = a.createTracker(r);
  let u = o.move("[");
  const l = a.containerPhrasing(e, {
    before: u,
    after: "]",
    ...o.current(),
  });
  (u += o.move(l + "][")), i();
  const p = a.stack;
  (a.stack = []), (i = a.enter("reference"));
  const h = a.safe(a.associationId(e), {
    before: u,
    after: "]",
    ...o.current(),
  });
  return (
    i(),
    (a.stack = p),
    s(),
    n === "full" || !l || l !== h
      ? (u += o.move(h + "]"))
      : n === "shortcut"
        ? (u = u.slice(0, -1))
        : (u += o.move("]")),
    u
  );
}
function Z_() {
  return "[";
}
function yn(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" +
        t +
        "` for `options.bullet`, expected `*`, `+`, or `-`",
    );
  return t;
}
function em(e) {
  const t = yn(e),
    a = e.options.bulletOther;
  if (!a) return t === "*" ? "-" : "*";
  if (a !== "*" && a !== "+" && a !== "-")
    throw new Error(
      "Cannot serialize items with `" +
        a +
        "` for `options.bulletOther`, expected `*`, `+`, or `-`",
    );
  if (a === t)
    throw new Error(
      "Expected `bullet` (`" +
        t +
        "`) and `bulletOther` (`" +
        a +
        "`) to be different",
    );
  return a;
}
function tm(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" +
        t +
        "` for `options.bulletOrdered`, expected `.` or `)`",
    );
  return t;
}
function Ho(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" +
        t +
        "` for `options.rule`, expected `*`, `-`, or `_`",
    );
  return t;
}
function am(e, t, a, r) {
  const n = a.enter("list"),
    s = a.bulletCurrent;
  let i = e.ordered ? tm(a) : yn(a);
  const o = e.ordered ? (i === "." ? ")" : ".") : em(a);
  let u = t && a.bulletLastUsed ? i === a.bulletLastUsed : !1;
  if (!e.ordered) {
    const p = e.children ? e.children[0] : void 0;
    if (
      ((i === "*" || i === "-") &&
        p &&
        (!p.children || !p.children[0]) &&
        a.stack[a.stack.length - 1] === "list" &&
        a.stack[a.stack.length - 2] === "listItem" &&
        a.stack[a.stack.length - 3] === "list" &&
        a.stack[a.stack.length - 4] === "listItem" &&
        a.indexStack[a.indexStack.length - 1] === 0 &&
        a.indexStack[a.indexStack.length - 2] === 0 &&
        a.indexStack[a.indexStack.length - 3] === 0 &&
        (u = !0),
      Ho(a) === i && p)
    ) {
      let h = -1;
      for (; ++h < e.children.length; ) {
        const f = e.children[h];
        if (
          f &&
          f.type === "listItem" &&
          f.children &&
          f.children[0] &&
          f.children[0].type === "thematicBreak"
        ) {
          u = !0;
          break;
        }
      }
    }
  }
  u && (i = o), (a.bulletCurrent = i);
  const l = a.containerFlow(e, r);
  return (a.bulletLastUsed = i), (a.bulletCurrent = s), n(), l;
}
function rm(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" +
        t +
        "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`",
    );
  return t;
}
function nm(e, t, a, r) {
  const n = rm(a);
  let s = a.bulletCurrent || yn(a);
  t &&
    t.type === "list" &&
    t.ordered &&
    (s =
      (typeof t.start == "number" && t.start > -1 ? t.start : 1) +
      (a.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) +
      s);
  let i = s.length + 1;
  (n === "tab" ||
    (n === "mixed" && ((t && t.type === "list" && t.spread) || e.spread))) &&
    (i = Math.ceil(i / 4) * 4);
  const o = a.createTracker(r);
  o.move(s + " ".repeat(i - s.length)), o.shift(i);
  const u = a.enter("listItem"),
    l = a.indentLines(a.containerFlow(e, o.current()), p);
  return u(), l;
  function p(h, f, _) {
    return f
      ? (_ ? "" : " ".repeat(i)) + h
      : (_ ? s : s + " ".repeat(i - s.length)) + h;
  }
}
function im(e, t, a, r) {
  const n = a.enter("paragraph"),
    s = a.enter("phrasing"),
    i = a.containerPhrasing(e, r);
  return s(), n(), i;
}
const sm = Ja([
  "break",
  "delete",
  "emphasis",
  "footnote",
  "footnoteReference",
  "image",
  "imageReference",
  "inlineCode",
  "inlineMath",
  "link",
  "linkReference",
  "mdxJsxTextElement",
  "mdxTextExpression",
  "strong",
  "text",
  "textDirective",
]);
function om(e, t, a, r) {
  return (
    e.children.some(function (i) {
      return sm(i);
    })
      ? a.containerPhrasing
      : a.containerFlow
  ).call(a, e, r);
}
function cm(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" +
        t +
        "` for `options.strong`, expected `*`, or `_`",
    );
  return t;
}
Uo.peek = um;
function Uo(e, t, a, r) {
  const n = cm(a),
    s = a.enter("strong"),
    i = a.createTracker(r);
  let o = i.move(n + n);
  return (
    (o += i.move(
      a.containerPhrasing(e, {
        before: o,
        after: n,
        ...i.current(),
      }),
    )),
    (o += i.move(n + n)),
    s(),
    o
  );
}
function um(e, t, a) {
  return a.options.strong || "*";
}
function lm(e, t, a, r) {
  return a.safe(e.value, r);
}
function fm(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" +
        t +
        "` for `options.ruleRepetition`, expected `3` or more",
    );
  return t;
}
function hm(e, t, a) {
  const r = (Ho(a) + (a.options.ruleSpaces ? " " : "")).repeat(fm(a));
  return a.options.ruleSpaces ? r.slice(0, -1) : r;
}
const kt = {
    blockquote: R_,
    break: Fi,
    code: U_,
    definition: q_,
    emphasis: Fo,
    hardBreak: Fi,
    heading: W_,
    html: Oo,
    image: Lo,
    imageReference: Ro,
    inlineCode: vo,
    link: Po,
    linkReference: Mo,
    list: am,
    listItem: nm,
    paragraph: im,
    root: om,
    strong: Uo,
    text: lm,
    thematicBreak: hm,
  },
  Oi = {
    0: "�",
    128: "€",
    130: "‚",
    131: "ƒ",
    132: "„",
    133: "…",
    134: "†",
    135: "‡",
    136: "ˆ",
    137: "‰",
    138: "Š",
    139: "‹",
    140: "Œ",
    142: "Ž",
    145: "‘",
    146: "’",
    147: "“",
    148: "”",
    149: "•",
    150: "–",
    151: "—",
    152: "˜",
    153: "™",
    154: "š",
    155: "›",
    156: "œ",
    158: "ž",
    159: "Ÿ",
  };
function jo(e) {
  const t = typeof e == "string" ? e.charCodeAt(0) : e;
  return t >= 48 && t <= 57;
}
function dm(e) {
  const t = typeof e == "string" ? e.charCodeAt(0) : e;
  return (t >= 97 && t <= 102) || (t >= 65 && t <= 70) || (t >= 48 && t <= 57);
}
function pm(e) {
  const t = typeof e == "string" ? e.charCodeAt(0) : e;
  return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
}
function Li(e) {
  return pm(e) || jo(e);
}
const Ft = String.fromCharCode,
  _m = [
    "",
    "Named character references must be terminated by a semicolon",
    "Numeric character references must be terminated by a semicolon",
    "Named character references cannot be empty",
    "Numeric character references cannot be empty",
    "Named character references must be known",
    "Numeric character references cannot be disallowed",
    "Numeric character references cannot be outside the permissible Unicode range",
  ];
function yr(e, t = {}) {
  const a =
      typeof t.additional == "string"
        ? t.additional.charCodeAt(0)
        : t.additional,
    r = [];
  let n = 0,
    s = -1,
    i = "",
    o,
    u;
  t.position &&
    ("start" in t.position || "indent" in t.position
      ? ((u = t.position.indent), (o = t.position.start))
      : (o = t.position));
  let l = (o ? o.line : 0) || 1,
    p = (o ? o.column : 0) || 1,
    h = _(),
    f;
  for (n--; ++n <= e.length; )
    if (
      (f === 10 && (p = (u ? u[s] : 0) || 1), (f = e.charCodeAt(n)), f === 38)
    ) {
      const C = e.charCodeAt(n + 1);
      if (
        C === 9 ||
        C === 10 ||
        C === 12 ||
        C === 32 ||
        C === 38 ||
        C === 60 ||
        Number.isNaN(C) ||
        (a && C === a)
      ) {
        (i += Ft(f)), p++;
        continue;
      }
      const T = n + 1;
      let I = T,
        O = T,
        M;
      if (C === 35) {
        O = ++I;
        const P = e.charCodeAt(O);
        P === 88 || P === 120
          ? ((M = "hexadecimal"), (O = ++I))
          : (M = "decimal");
      } else M = "named";
      let N = "",
        d = "",
        z = "";
      const U = M === "named" ? Li : M === "decimal" ? jo : dm;
      for (O--; ++O <= e.length; ) {
        const P = e.charCodeAt(O);
        if (!U(P)) break;
        (z += Ft(P)), M === "named" && F_.includes(z) && ((N = z), (d = ca(z)));
      }
      let V = e.charCodeAt(O) === 59;
      if (V) {
        O++;
        const P = M === "named" ? ca(z) : !1;
        P && ((N = z), (d = P));
      }
      let D = 1 + O - T,
        S = "";
      if (!(!V && t.nonTerminated === !1))
        if (!z) M !== "named" && y(4, D);
        else if (M === "named") {
          if (V && !d) y(5, 1);
          else if (
            (N !== z && ((O = I + N.length), (D = 1 + O - I), (V = !1)), !V)
          ) {
            const P = N ? 1 : 3;
            if (t.attribute) {
              const Q = e.charCodeAt(O);
              Q === 61 ? (y(P, D), (d = "")) : Li(Q) ? (d = "") : y(P, D);
            } else y(P, D);
          }
          S = d;
        } else {
          V || y(2, D);
          let P = Number.parseInt(z, M === "hexadecimal" ? 16 : 10);
          if (mm(P)) y(7, D), (S = Ft(65533));
          else if (P in Oi) y(6, D), (S = Oi[P]);
          else {
            let Q = "";
            gm(P) && y(6, D),
              P > 65535 &&
                ((P -= 65536),
                (Q += Ft((P >>> 10) | 55296)),
                (P = 56320 | (P & 1023))),
              (S = Q + Ft(P));
          }
        }
      if (S) {
        b(), (h = _()), (n = O - 1), (p += O - T + 1), r.push(S);
        const P = _();
        P.offset++,
          t.reference &&
            t.reference.call(
              t.referenceContext,
              S,
              {
                start: h,
                end: P,
              },
              e.slice(T - 1, O),
            ),
          (h = P);
      } else (z = e.slice(T - 1, O)), (i += z), (p += z.length), (n = O - 1);
    } else
      f === 10 && (l++, s++, (p = 0)),
        Number.isNaN(f) ? b() : ((i += Ft(f)), p++);
  return r.join("");
  function _() {
    return {
      line: l,
      column: p,
      offset: n + ((o ? o.offset : 0) || 0),
    };
  }
  function y(C, T) {
    let I;
    t.warning &&
      ((I = _()),
      (I.column += T),
      (I.offset += T),
      t.warning.call(t.warningContext, _m[C], I, C));
  }
  function b() {
    i &&
      (r.push(i),
      t.text &&
        t.text.call(t.textContext, i, {
          start: h,
          end: _(),
        }),
      (i = ""));
  }
}
function mm(e) {
  return (e >= 55296 && e <= 57343) || e > 1114111;
}
function gm(e) {
  return (
    (e >= 1 && e <= 8) ||
    e === 11 ||
    (e >= 13 && e <= 31) ||
    (e >= 127 && e <= 159) ||
    (e >= 64976 && e <= 65007) ||
    (e & 65535) === 65535 ||
    (e & 65535) === 65534
  );
}
const Ua = "---";
function ym(e, t = "") {
  return Object.keys(e).length
    ? ((e = mn(e || {}, {})),
      [
        Ua,
        zo
          .dump(e, {
            lineWidth: -1,
          })
          .trim(),
        Ua,
        t,
      ].join(`
`))
    : "";
}
function qo(e) {
  let t = {};
  if (e.startsWith(Ua)) {
    const a = e.indexOf(
      `
` + Ua,
    );
    if (a !== -1) {
      const r = e.slice(4, a);
      r && ((t = zo.load(r)), (e = e.slice(a + 4)));
    }
  }
  return {
    content: e,
    data: mn(t || {}, {}),
  };
}
function ja(e) {
  const t = e || {},
    a = t.now || {};
  let r = t.lineShift || 0,
    n = a.line || 1,
    s = a.column || 1;
  return {
    move: u,
    current: i,
    shift: o,
  };
  function i() {
    return {
      now: {
        line: n,
        column: s,
      },
      lineShift: r,
    };
  }
  function o(l) {
    r += l;
  }
  function u(l = "") {
    const p = l.split(/\r?\n|\r/g),
      h = p[p.length - 1];
    return (
      (n += p.length - 1),
      (s = p.length === 1 ? s + h.length : 1 + h.length + r),
      l
    );
  }
}
function km(e, t, a = {}) {
  const r = t.indexStack,
    n = e.children || [],
    s = ja(a),
    i = [];
  let o = -1;
  for (r.push(-1); ++o < n.length; ) {
    const u = n[o];
    (r[r.length - 1] = o),
      i.push(
        s.move(
          t.handle(u, e, t, {
            before: "",
            after: "",
            ...s.current(),
          }),
        ),
      );
  }
  return r.pop(), i.join("");
}
function bm(e, t, a = {}) {
  const r = t.indexStack,
    n = e.children || [],
    s = ja(a),
    i = [];
  let o = -1;
  for (r.push(-1); ++o < n.length; ) {
    const l = n[o];
    (r[r.length - 1] = o),
      i.push(
        s.move(
          t.handle(l, e, t, {
            before: `
`,
            after: `
`,
            ...s.current(),
          }),
        ),
      ),
      l.type !== "list" && (t.bulletLastUsed = void 0),
      o < n.length - 1 && i.push(s.move(u(l, n[o + 1])));
  }
  return r.pop(), i.join("");
  function u(l, p) {
    let h = t.join.length;
    for (; h--; ) {
      const f = t.join[h](l, p, e, t);
      if (f === !0 || f === 1) break;
      if (typeof f == "number")
        return `
`.repeat(1 + f);
      if (f === !1)
        return `

<!---->

`;
    }
    return `

`;
  }
}
function wm(e, t, a) {
  const r = t.indexStack,
    n = e.children || [],
    s = [];
  let i = -1,
    o = a.before;
  r.push(-1);
  let u = ja(a);
  for (; ++i < n.length; ) {
    const l = n[i];
    let p;
    if (((r[r.length - 1] = i), i + 1 < n.length)) {
      let h = t.handle.handlers[n[i + 1].type];
      h && h.peek && (h = h.peek),
        (p = h
          ? h(n[i + 1], e, t, {
              before: "",
              after: "",
              ...u.current(),
            }).charAt(0)
          : "");
    } else p = a.after;
    s.length > 0 &&
      (o === "\r" ||
        o ===
          `
`) &&
      l.type === "html" &&
      ((s[s.length - 1] = s[s.length - 1].replace(/(\r?\n|\r)$/, " ")),
      (o = " "),
      (u = ja(a)),
      u.move(s.join(""))),
      s.push(
        u.move(
          t.handle(l, e, t, {
            ...u.current(),
            before: o,
            after: p,
          }),
        ),
      ),
      (o = s[s.length - 1].slice(-1));
  }
  return r.pop(), s.join("");
}
function Em(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" +
        t +
        "` for `options.quote`, expected `\"`, or `'`",
    );
  return t;
}
const qa = [
    "componentContainerSection",
    "componentContainerDataSection",
    "containerComponent",
    "leafComponent",
  ],
  Tm = {}.hasOwnProperty,
  Ri = /^[^\t\n\r "#'.<=>`}]+$/,
  Am = 2;
function vi(e) {
  if (!e._compiled) {
    const t =
      (e.atBreak ? "[\\r\\n][\\t ]*" : "") +
      (e.before ? "(?:" + e.before + ")" : "");
    e._compiled = new RegExp(
      (t ? "(" + t + ")" : "") +
        (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") +
        e.character +
        (e.after ? "(?:" + e.after + ")" : ""),
      "g",
    );
  }
  return e._compiled;
}
const Cm = (e = {}) => {
    const t = (p) => {
      var h, f;
      (h = e == null ? void 0 : e.experimental) != null &&
        h.autoUnwrap &&
        (f = p.mdc) != null &&
        f.unwrapped &&
        (p.children = [
          {
            type: p.mdc.unwrapped,
            children: p.children.filter((_) => !qa.includes(_.type)),
          },
          ...p.children.filter((_) => qa.includes(_.type)),
        ]);
    };
    function a(p, h, f) {
      return (
        (f.indexStack = f.stack),
        t(p),
        `#${p.name}
${u(p, f)}`.trim()
      );
    }
    function r(p, h, f) {
      let _;
      f.indexStack = f.stack;
      const y = f.enter(p.type);
      if (p.name === "span") _ = `[${u(p, f)}]${o(p, f)}`;
      else if (p.name === "binding") {
        const b = p.attributes || {};
        _ = b.defaultValue
          ? `{{ ${b.value} || '${b.defaultValue}' }}`
          : `{{ ${b.value} }}`;
      } else _ = ":" + (p.name || "") + i(p, f) + o(p, f);
      return y(), _;
    }
    let n = 0;
    function s(p, h, f) {
      var N;
      f.indexStack = f.stack;
      const _ = ":".repeat(Am + n);
      n += 1;
      const y = f.enter(p.type);
      let b = _ + (p.name || "") + i(p, f);
      const C = o(p, f),
        T = p.fmAttributes || {};
      (b + C).length > 80 ||
      Object.keys(T).length > 0 ||
      ((N = p.children) != null &&
        N.some((d) => d.type === "componentContainerSection"))
        ? Object.assign(T, p.attributes)
        : (b += C);
      let I;
      if (Object.keys(T).length > 0) {
        const d = Object.entries(T)
          .sort(([z], [U]) => z.localeCompare(U))
          .reduce((z, [U, V]) => {
            if (U != null && U.startsWith(":")) {
              try {
                V = JSON.parse(V);
              } catch {}
              U = U.slice(1);
            }
            return (z[U] = V), z;
          }, {});
        b +=
          `
` + ym(d).trim();
      }
      const O = p.children.filter(
          (d) => d.type !== "componentContainerSection",
        ),
        M = p.children.filter((d) => d.type === "componentContainerSection");
      return (
        (p.children = [...O, ...M]),
        t(p),
        p.type === "containerComponent" &&
          ((I = u(p, f)),
          I &&
            (b +=
              `
` + I),
          (b +=
            `
` + _),
          n > 1 &&
            (b = b
              .split(
                `
`,
              )
              .map((d) => "  " + d).join(`
`))),
        (n -= 1),
        y(),
        b
      );
    }
    s.peek = function () {
      return ":";
    };
    function i(p, h) {
      let f = p;
      if (p.type === "containerComponent") {
        if (!l(p)) return "";
        f = p.children[0];
      }
      const _ = h.enter("label"),
        y = h.enter(p.type + "Label"),
        b = wm(f, h, {
          before: "[",
          after: "]",
        });
      return y(), _(), b ? "[" + b + "]" : "";
    }
    function o(p, h) {
      const f = Em(h),
        _ =
          p.type === "textComponent"
            ? [f]
            : [
                f,
                `
`,
                "\r",
              ],
        y = Object.fromEntries(
          Object.entries(p.attributes || {}).sort(([z], [U]) =>
            z.localeCompare(U),
          ),
        ),
        b = [];
      let C,
        T = "",
        I = "",
        O,
        M,
        N;
      for (M in y)
        if (Tm.call(y, M) && y[M] != null)
          if (((O = String(y[M])), M === "id"))
            C = Ri.test(O) ? "#" + O : d("id", O);
          else if (M === "class") {
            for (
              O = O.split(/[\t\n\r ]+/g), T = [], I = [], N = -1;
              ++N < O.length;

            )
              (Ri.test(O[N]) ? I : T).push(O[N]);
            (T = T.length ? d("class", T.join(" ")) : ""),
              (I = I.length ? "." + I.join(".") : "");
          } else
            M.startsWith(":") && O === "true"
              ? b.push(M.slice(1))
              : b.push(d(M, O));
      return (
        T && b.unshift(T),
        I && b.unshift(I),
        C && b.unshift(C),
        b.length ? "{" + b.join(" ") + "}" : ""
      );
      function d(z, U) {
        return (
          z +
          "=" +
          f +
          L_(U, {
            subset: _,
          }) +
          f
        );
      }
    }
    function u(p, h) {
      const f = l(p)
        ? Object.assign({}, p, {
            children: p.children.slice(1),
          })
        : p;
      return p.type === "textComponent" ? km(f, h) : bm(f, h);
    }
    function l(p) {
      return (
        p.children &&
        p.children[0] &&
        p.children[0].data &&
        p.children[0].data.componentLabel
      );
    }
    return {
      compilePattern: vi,
      unsafe: [
        {
          character: "\r",
          inConstruct: ["leafComponentLabel", "containerComponentLabel"],
        },
        {
          character: `
`,
          inConstruct: ["leafComponentLabel", "containerComponentLabel"],
        },
        {
          before: "[^:]",
          character: ":",
          after: "[A-Za-z]",
          inConstruct: ["phrasing"],
        },
        {
          atBreak: !0,
          character: ":",
          after: ":",
        },
      ],
      handlers: {
        containerComponent: s,
        textComponent: r,
        componentContainerSection: a,
        image: (p, h, f, _) => kt.image(p, h, f, _) + o(p, f),
        link: (p, h, f, _) => kt.link(p, h, f, _) + o(p, f),
        strong: (p, h, f, _) => kt.strong(p, h, f, _) + o(p, f),
        inlineCode: (p, h, f) => (
          (f.compilePattern = f.compilePattern || vi),
          kt.inlineCode(p, h, f) + o(p, f)
        ),
        emphasis: (p, h, f, _) => kt.emphasis(p, h, f, _) + o(p, f),
      },
    };
  },
  xm = (e = {}) => {
    const t = ["textComponent"],
      a = (B) => {
        var Y;
        if (
          (Y = e.experimental) != null &&
          Y.autoUnwrap &&
          qa.includes(B.type)
        ) {
          const A = B.children.filter(
            (J) => J.type !== "componentContainerSection",
          );
          if (A.length === 1 && !qa.includes(A[0].type)) {
            const J = B.children.indexOf(A[0]);
            B.children.splice(J, 1, ...A[0].children),
              (B.mdc = B.mdc || {}),
              (B.mdc.unwrapped = A[0].type);
          }
        }
      },
      r = {
        componentContainer: o,
        componentContainerSection: l,
        componentContainerDataSection: p,
        componentContainerAttributes: d,
        componentContainerLabel: M,
        bindingContent: s,
        componentLeaf: y,
        componentLeafAttributes: d,
        componentText: C,
        textSpan: b,
        componentTextAttributes: d,
      },
      n = {
        bindingContent: i,
        componentContainerSectionTitle: _,
        listUnordered: Q,
        listOrdered: Q,
        listItem: Q,
        componentContainerSection: h,
        componentContainerDataSection: f,
        componentContainer: u,
        componentContainerAttributeClassValue: U,
        componentContainerAttributeIdValue: z,
        componentContainerAttributeName: D,
        componentContainerAttributeValue: V,
        componentContainerAttributes: S,
        componentContainerLabel: N,
        componentContainerName: I,
        componentContainerAttributeInitializerMarker() {
          const B = this.data.componentAttributes;
          B[B.length - 1][1] = "";
        },
        componentLeaf: P,
        componentLeafAttributeClassValue: U,
        componentLeafAttributeIdValue: z,
        componentLeafAttributeName: D,
        componentLeafAttributeValue: V,
        componentLeafAttributes: S,
        componentLeafName: O,
        componentText: P,
        textSpan: P,
        componentTextAttributeClassValue: U,
        componentTextAttributeIdValue: z,
        componentTextAttributeName: D,
        componentTextAttributeValue: V,
        componentTextAttributes: S,
        componentTextName: I,
      };
    function s(B) {
      var J;
      const A = /([^|]*)(?:\|\|\s*'(.*)')?/.exec(this.sliceSerialize(B));
      this.enter(
        {
          type: "textComponent",
          name: "binding",
          attributes: {
            value: (J = A == null ? void 0 : A[1]) == null ? void 0 : J.trim(),
            defaultValue: A == null ? void 0 : A[2],
          },
        },
        B,
      );
    }
    function i(B) {
      this.exit(B);
    }
    function o(B) {
      T.call(this, "containerComponent", B);
    }
    function u(B) {
      const Y = this.stack[this.stack.length - 1];
      if (Y.children.length > 1) {
        const A = Y.children.find((J) => J.rawData);
        Y.rawData = A == null ? void 0 : A.rawData;
      }
      a(Y),
        (Y.children = Y.children.flatMap((A) => {
          var J, ie;
          return A.rawData
            ? []
            : A.name === "default" || !A.name
              ? ((J = A.mdc) != null &&
                  J.unwrapped &&
                  ((Y.mdc = Y.mdc || {}),
                  (Y.mdc.unwrapped =
                    (ie = A.mdc) == null ? void 0 : ie.unwrapped)),
                A.children)
              : ((A.data = {
                  hName: "component-slot",
                  hProperties: {
                    ...A.attributes,
                    [`v-slot:${A.name}`]: "",
                  },
                }),
                A);
        })),
        this.exit(B);
    }
    function l(B) {
      T.call(this, "componentContainerSection", B);
    }
    function p(B) {
      T.call(this, "componentContainerDataSection", B);
    }
    function h(B) {
      const Y = this.stack[this.stack.length - 1];
      te.call(this, Y), a(Y), this.exit(B);
    }
    function f(B) {
      let Y = this.stack[this.stack.length - 1];
      (Y = te.call(this, Y)),
        Y.type === "componentContainerDataSection" &&
          ((Y.rawData = this.sliceSerialize(B)), this.exit(B));
    }
    function _(B) {
      var Y;
      this.stack[this.stack.length - 1].name =
        (Y = this.sliceSerialize(B)) == null ? void 0 : Y.trim();
    }
    function y(B) {
      T.call(this, "leafComponent", B);
    }
    function b(B) {
      this.enter(
        {
          type: "textComponent",
          name: "span",
          attributes: {},
          children: [],
        },
        B,
      );
    }
    function C(B) {
      T.call(this, "textComponent", B);
    }
    function T(B, Y) {
      this.enter(
        {
          type: B,
          name: "",
          attributes: {},
          children: [],
        },
        Y,
      );
    }
    function I(B) {
      this.stack[this.stack.length - 1].name = sa(this.sliceSerialize(B));
    }
    function O(B) {
      this.stack[this.stack.length - 1].name = this.sliceSerialize(B);
    }
    function M(B) {
      this.enter(
        {
          type: "paragraph",
          data: {
            componentLabel: !0,
          },
          children: [],
        },
        B,
      );
    }
    function N(B) {
      this.exit(B);
    }
    function d() {
      (this.data.componentAttributes = []), this.buffer();
    }
    function z(B) {
      this.data.componentAttributes.push(["id", yr(this.sliceSerialize(B))]);
    }
    function U(B) {
      this.data.componentAttributes.push(["class", yr(this.sliceSerialize(B))]);
    }
    function V(B) {
      const Y = this.data.componentAttributes;
      Y[Y.length - 1][1] = yr(this.sliceSerialize(B));
    }
    function D(B) {
      this.data.componentAttributes.push([this.sliceSerialize(B), !0]);
    }
    function S() {
      var w, Te;
      const B = this.data.componentAttributes,
        Y = {};
      let A = -1,
        J;
      for (; ++A < B.length; ) {
        J = B[A];
        const Ne = sa(J[0]);
        Ne === "class" && Y.class ? (Y.class += " " + J[1]) : (Y[Ne] = J[1]);
      }
      (this.data.componentAttributes = B), this.resume();
      let ie = this.stack[this.stack.length - 1];
      if (ie.type !== "textComponent" || ie.name === "span")
        for (
          ;
          !((w = ie.position) != null && w.end) &&
          ((Te = ie.children) == null ? void 0 : Te.length) > 0;

        )
          ie = ie.children[ie.children.length - 1];
      ie.attributes = Y;
    }
    function P(B) {
      this.exit(B);
    }
    function Q(B) {
      const [Y] = this.tokenStack[this.tokenStack.length - 1];
      Y.type === B.type && this.exit(B);
    }
    function te(B) {
      for (; B.type === "listItem" || B.type === "list"; ) {
        const [Y] = this.tokenStack[this.tokenStack.length - 1];
        this.exit(Y), (B = this.stack[this.stack.length - 1]);
      }
      return B;
    }
    return {
      canContainEols: t,
      enter: r,
      exit: n,
    };
  },
  Dm = 2,
  zm = 3,
  Bi = 35,
  Im = 1,
  v = {
    EOF: null,
    space: 32,
    quotationMark: 34,
    hash: 35,
    apostrophe: 39,
    openingParentheses: 40,
    closingParentheses: 41,
    star: 42,
    comma: 44,
    dash: 45,
    dot: 46,
    colon: 58,
    LessThan: 60,
    equals: 61,
    greaterThan: 62,
    uppercaseX: 88,
    openingSquareBracket: 91,
    backSlash: 92,
    closingSquareBracket: 93,
    underscore: 95,
    backTick: 96,
    lowercaseX: 120,
    openingCurlyBracket: 123,
    closingCurlyBracket: 125,
  };
function kn(e, t, a, r, n, s, i) {
  let o = 0,
    u = 0;
  return l;
  function l(b) {
    if (b !== v.openingSquareBracket) throw new Error("expected `[`");
    return e.enter(r), e.enter(n), e.consume(b), e.exit(n), p;
  }
  function p(b) {
    return b === v.closingSquareBracket
      ? (e.enter(n), e.consume(b), e.exit(n), e.exit(r), t)
      : (e.enter(s), h(b));
  }
  function h(b) {
    return b === v.EOF || o > 999
      ? a(b)
      : b === v.closingSquareBracket && !u--
        ? _(b)
        : $(b)
          ? i
            ? a(b)
            : (e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), h)
          : (e.enter("chunkText", {
              contentType: "text",
            }),
            f(b));
  }
  function f(b) {
    return b === v.EOF || $(b) || o > 999
      ? (e.exit("chunkText"), h(b))
      : b === v.openingSquareBracket && ++u > 3
        ? a(b)
        : b === v.closingSquareBracket && !u--
          ? (e.exit("chunkText"), _(b))
          : (e.consume(b), b === v.backSlash ? y : f);
  }
  function _(b) {
    return e.exit(s), e.enter(n), e.consume(b), e.exit(n), e.exit(r), t;
  }
  function y(b) {
    return b === v.openingSquareBracket ||
      b === v.backSlash ||
      b === v.closingSquareBracket
      ? (e.consume(b), o++, f)
      : f(b);
  }
}
const Sm = {
    tokenize: Lm,
    partial: !0,
  },
  Nm = {
    tokenize: vm,
    partial: !0,
  },
  Fm = {
    tokenize: Bm,
    partial: !0,
  };
function Om(e, t, a) {
  const r = this;
  return n;
  function n(u) {
    if (u !== v.openingSquareBracket) throw new Error("expected `[`");
    return r.previous === v.EOF && r._gfmTasklistFirstContentOfListItem
      ? e.check(Nm, a, s)(u)
      : r.previous === v.openingSquareBracket
        ? a(u)
        : e.check(Fm, a, s)(u);
  }
  function s(u) {
    return e.enter("textSpan"), e.attempt(Sm, i, a)(u);
  }
  function i(u) {
    return u === v.openingParentheses || u === v.openingSquareBracket
      ? a(u)
      : o(u);
  }
  function o(u) {
    return e.exit("textSpan"), t(u);
  }
}
function Lm(e, t, a) {
  return kn(
    e,
    t,
    a,
    "componentTextLabel",
    "componentTextLabelMarker",
    "componentTextLabelString",
  );
}
const Rm = {
  tokenize: Om,
};
function vm(e, t, a) {
  return r;
  function r(s) {
    return e.enter("formGfmTaskCheckbox"), e.consume(s), n;
  }
  function n(s) {
    return K(s) || s === v.uppercaseX || s === v.lowercaseX
      ? (e.consume(s), n)
      : s === v.closingSquareBracket
        ? (e.exit("formGfmTaskCheckbox"), t(s))
        : a(s);
  }
}
function Bm(e, t, a) {
  return r;
  function r(s) {
    return e.enter("doubleBracket"), e.consume(s), n;
  }
  function n(s) {
    return s !== v.openingSquareBracket
      ? a(s)
      : (e.exit("doubleBracket"), t(s));
  }
}
function bn(e, t, a, r, n, s, i, o, u, l, p, h, f, _, y) {
  let b, C;
  return T;
  function T(A) {
    return e.enter(r), e.enter(n), e.consume(A), e.exit(n), I;
  }
  function I(A) {
    return A === v.hash
      ? ((b = i), O(A))
      : A === v.dot
        ? ((b = o), O(A))
        : A === v.colon || A === v.underscore || me(A)
          ? (e.enter(s), e.enter(u), e.consume(A), A === v.colon ? d : U)
          : y && K(A)
            ? G(e, I, "whitespace")(A)
            : !y && re(A)
              ? Ve(e, I)(A)
              : Y(A);
  }
  function O(A) {
    return (
      e.enter(s),
      e.enter(b),
      e.enter(b + "Marker"),
      e.consume(A),
      e.exit(b + "Marker"),
      M
    );
  }
  function M(A) {
    return A === v.EOF ||
      A === v.quotationMark ||
      A === v.hash ||
      A === v.apostrophe ||
      A === v.dot ||
      A === v.LessThan ||
      A === v.equals ||
      A === v.greaterThan ||
      A === v.backTick ||
      A === v.closingCurlyBracket ||
      re(A)
      ? a(A)
      : (e.enter(b + "Value"), e.consume(A), N);
  }
  function N(A) {
    return A === v.EOF ||
      A === v.quotationMark ||
      A === v.apostrophe ||
      A === v.LessThan ||
      A === v.equals ||
      A === v.greaterThan ||
      A === v.backTick
      ? a(A)
      : A === v.hash || A === v.dot || A === v.closingCurlyBracket || re(A)
        ? (e.exit(b + "Value"), e.exit(b), e.exit(s), I(A))
        : (e.consume(A), N);
  }
  function d(A) {
    return A === v.dash || pe(A)
      ? (e.consume(A), d)
      : (e.exit(u),
        y && K(A)
          ? G(e, z, "whitespace")(A)
          : !y && re(A)
            ? Ve(e, z)(A)
            : z(A));
  }
  function z(A) {
    return A === v.equals
      ? (e.enter(l), e.consume(A), e.exit(l), D)
      : (e.exit(s), a(A));
  }
  function U(A) {
    return A === v.dash ||
      A === v.dot ||
      A === v.colon ||
      A === v.underscore ||
      pe(A)
      ? (e.consume(A), U)
      : (e.exit(u),
        y && K(A)
          ? G(e, V, "whitespace")(A)
          : !y && re(A)
            ? Ve(e, V)(A)
            : V(A));
  }
  function V(A) {
    return A === v.equals
      ? (e.enter(l), e.consume(A), e.exit(l), D)
      : (e.exit(s), I(A));
  }
  function D(A) {
    return A === v.EOF ||
      A === v.LessThan ||
      A === v.equals ||
      A === v.greaterThan ||
      A === v.backTick ||
      A === v.closingCurlyBracket ||
      (y && $(A))
      ? a(A)
      : A === v.quotationMark || A === v.apostrophe
        ? (e.enter(p), e.enter(f), e.consume(A), e.exit(f), (C = A), P)
        : y && K(A)
          ? G(e, D, "whitespace")(A)
          : !y && re(A)
            ? Ve(e, D)(A)
            : (e.enter(h), e.enter(_), e.consume(A), (C = void 0), S);
  }
  function S(A) {
    return A === v.EOF ||
      A === v.quotationMark ||
      A === v.apostrophe ||
      A === v.LessThan ||
      A === v.equals ||
      A === v.greaterThan ||
      A === v.backTick
      ? a(A)
      : A === v.closingCurlyBracket || re(A)
        ? (e.exit(_), e.exit(h), e.exit(s), I(A))
        : (e.consume(A), S);
  }
  function P(A) {
    return A === C
      ? (e.enter(f), e.consume(A), e.exit(f), e.exit(p), e.exit(s), B)
      : (e.enter(h), Q(A));
  }
  function Q(A) {
    return A === C
      ? (e.exit(h), P(A))
      : A === v.EOF
        ? a(A)
        : $(A)
          ? y
            ? a(A)
            : Ve(e, Q)(A)
          : (e.enter(_), e.consume(A), te);
  }
  function te(A) {
    return A === C || A === v.EOF || $(A)
      ? (e.exit(_), Q(A))
      : (e.consume(A), te);
  }
  function B(A) {
    return A === v.closingCurlyBracket || re(A) ? I(A) : Y(A);
  }
  function Y(A) {
    return A === v.closingCurlyBracket
      ? (e.enter(n), e.consume(A), e.exit(n), e.exit(r), t)
      : a(A);
  }
}
const Pm = {
    tokenize: Um,
    partial: !0,
  },
  Mm = ["textSpan", "attentionSequence", "codeText", "link", "image"];
function Hm(e, t, a) {
  const r = this;
  return n;
  function n(s) {
    if (s !== v.openingCurlyBracket) throw new Error("expected `{`");
    const i = r.events[r.events.length - 1];
    return $(r.previous) || !i || !Mm.includes(i[1].type)
      ? a(s)
      : e.attempt(Pm, t, a)(s);
  }
}
function Um(e, t, a) {
  return bn(
    e,
    t,
    a,
    "componentTextAttributes",
    "componentTextAttributesMarker",
    "componentTextAttribute",
    "componentTextAttributeId",
    "componentTextAttributeClass",
    "componentTextAttributeName",
    "componentTextAttributeInitializerMarker",
    "componentTextAttributeValueLiteral",
    "componentTextAttributeValue",
    "componentTextAttributeValueMarker",
    "componentTextAttributeValueData",
  );
}
const jm = {
  tokenize: Hm,
};
function qm(e, t, a) {
  return r;
  function r(s) {
    return s !== v.closingCurlyBracket
      ? a(s)
      : (e.exit("bindingContent"), e.enter("bindingFence"), e.consume(s), n);
  }
  function n(s) {
    return s !== v.closingCurlyBracket
      ? a(s)
      : (e.consume(s), e.exit("bindingFence"), t);
  }
}
function Ym(e, t, a) {
  return r;
  function r(o) {
    if (o !== v.openingCurlyBracket) throw new Error("expected `{`");
    return e.enter("bindingFence"), e.consume(o), n;
  }
  function n(o) {
    return o !== v.openingCurlyBracket
      ? a(o)
      : (e.consume(o), e.exit("bindingFence"), e.enter("bindingContent"), s);
  }
  function s(o) {
    return o === v.closingCurlyBracket
      ? e.attempt(
          {
            tokenize: qm,
            partial: !0,
          },
          i,
          (u) => (e.consume(u), s),
        )(o)
      : (e.consume(o), s);
  }
  function i(o) {
    return t(o);
  }
}
const $m = {
  tokenize: Ym,
};
function Yo(e, t, a, r) {
  const n = this;
  return s;
  function s(o) {
    return me(o) ? (e.enter(r), e.consume(o), i) : a(o);
  }
  function i(o) {
    return o === v.dash || o === v.underscore || pe(o)
      ? (e.consume(o), i)
      : (e.exit(r), n.previous === v.underscore ? a(o) : t(o));
  }
}
const Pi = {
    tokenize: Wm,
    partial: !0,
  },
  Mi = {
    tokenize: Gm,
    partial: !0,
  };
function $o(e) {
  return (
    e !== v.colon ||
    this.events[this.events.length - 1][1].type === "characterEscape"
  );
}
function Vm(e, t, a) {
  const r = this;
  return n;
  function n(l) {
    if (l !== v.colon) throw new Error("expected `:`");
    if (
      r.previous !== null &&
      !re(r.previous) &&
      ![v.openingSquareBracket, v.star, v.underscore].includes(r.previous)
    )
      return a(l);
    if (!$o.call(r, r.previous)) throw new Error("expected correct previous");
    return (
      e.enter("componentText"),
      e.enter("componentTextMarker"),
      e.consume(l),
      e.exit("componentTextMarker"),
      Yo.call(r, e, s, a, "componentTextName")
    );
  }
  function s(l) {
    return l === v.colon
      ? a(l)
      : l === v.openingSquareBracket
        ? e.attempt(Pi, o, o)(l)
        : l === v.openingCurlyBracket
          ? e.attempt(Mi, i, i)(l)
          : u(l);
  }
  function i(l) {
    return l === v.openingSquareBracket ? e.attempt(Pi, o, o)(l) : u(l);
  }
  function o(l) {
    return l === v.openingCurlyBracket ? e.attempt(Mi, u, u)(l) : u(l);
  }
  function u(l) {
    return e.exit("componentText"), t(l);
  }
}
function Wm(e, t, a) {
  return kn(
    e,
    t,
    a,
    "componentTextLabel",
    "componentTextLabelMarker",
    "componentTextLabelString",
  );
}
function Gm(e, t, a) {
  return bn(
    e,
    t,
    a,
    "componentTextAttributes",
    "componentTextAttributesMarker",
    "componentTextAttribute",
    "componentTextAttributeId",
    "componentTextAttributeClass",
    "componentTextAttributeName",
    "componentTextAttributeInitializerMarker",
    "componentTextAttributeValueLiteral",
    "componentTextAttributeValue",
    "componentTextAttributeValueMarker",
    "componentTextAttributeValueData",
  );
}
const Vo = {
  tokenize: Vm,
  previous: $o,
};
function Wo(e) {
  let t = -1,
    a = 0;
  for (; ++t < e.length; ) a += typeof e[t] == "string" ? e[t].length : 1;
  return a;
}
function Qm(e, t) {
  const a = e[e.length - 1];
  return !a || a[1].type !== t ? 0 : Wo(a[2].sliceStream(a[1]));
}
function qr(e) {
  let t = 0,
    a = e.length - 1,
    r = e[a];
  for (; a >= 0 && r && r[1].type === "linePrefix" && r[0] === "exit"; )
    (t += Wo(r[2].sliceStream(r[1]))), (a -= 1), (r = e[a]);
  return t;
}
const Xm = (e) => {
    const t = {
      isOpen: !1,
      enter: (a) => {
        const r = t.isOpen;
        return (
          t.exit(a),
          a.enter(e),
          (t.isOpen = !0),
          () => {
            t.isOpen = r;
          }
        );
      },
      enterOnce: (a) => {
        const r = t.isOpen;
        return (
          t.isOpen || (a.enter(e), (t.isOpen = !0)),
          () => {
            t.isOpen = r;
          }
        );
      },
      exit: (a) => {
        const r = t.isOpen;
        return (
          t.isOpen && (a.exit(e), (t.isOpen = !1)),
          () => {
            t.isOpen = r;
          }
        );
      },
    };
    return t;
  },
  Km = {
    tokenize: Jm,
    partial: !0,
  };
function Jm(e, t, a) {
  let r = 0;
  return n;
  function n(i) {
    return e.enter("codeFenced"), s(i);
  }
  function s(i) {
    return i === v.backTick
      ? (r++, e.consume(i), s)
      : (e.exit("codeFenced"), r >= 3 ? t(i) : a(i));
  }
}
function Zm(e, t, a, r, n) {
  let s;
  return e.attempt(
    {
      tokenize: i,
      partial: !0,
    },
    o,
    r,
  );
  function i(h, f, _) {
    const y = this;
    let b = 0,
      C = 0;
    return I;
    function T(M) {
      return K(M) ? (h.consume(M), (C += 1), T) : (h.exit("space"), I(M));
    }
    function I(M) {
      return K(M)
        ? (h.enter("space"), T(M))
        : (C === 0 && (C = qr(y.events)),
          h.enter("componentContainerSectionSequence"),
          O(M));
    }
    function O(M) {
      return M === v.dash || K(M)
        ? (h.consume(M), b++, O)
        : b < zm || C !== n || !$(M)
          ? _(M)
          : (h.exit("componentContainerSectionSequence"),
            G(h, f, "whitespace")(M));
    }
  }
  function o(h) {
    return (
      e.enter("componentContainerDataSection"),
      e.attempt(
        {
          tokenize: i,
          partial: !0,
        },
        p,
        u,
      )(h)
    );
  }
  function u(h) {
    if (h === null)
      return (
        e.exit("componentContainerDataSection"),
        e.exit("componentContainer"),
        t(h)
      );
    const f = e.enter("chunkDocument", {
      contentType: "document",
      previous: s,
    });
    return s && (s.next = f), (s = f), l(h);
  }
  function l(h) {
    return h === null
      ? (e.exit("chunkDocument"),
        e.exit("componentContainerDataSection"),
        e.exit("componentContainer"),
        t(h))
      : $(h)
        ? (e.consume(h),
          e.exit("chunkDocument"),
          e.attempt(
            {
              tokenize: i,
              partial: !0,
            },
            p,
            u,
          ))
        : (e.consume(h), l);
  }
  function p(h) {
    return e.exit("componentContainerDataSection"), G(e, r, "whitespace")(h);
  }
}
const eg = {
    tokenize: rg,
    partial: !0,
  },
  tg = {
    tokenize: ng,
    partial: !0,
  };
function ag(e, t, a) {
  const r = this,
    n = qr(this.events);
  let s = 0,
    i;
  const o = [];
  let u = !0,
    l = !1;
  const p = Xm("componentContainerSection");
  return h;
  function h(S) {
    if (S !== v.colon) throw new Error("expected `:`");
    return (
      e.enter("componentContainer"),
      e.enter("componentContainerFence"),
      e.enter("componentContainerSequence"),
      b(S)
    );
  }
  function f(S, P, Q) {
    let te = 0,
      B = 0,
      Y;
    return A;
    function A(ie) {
      return (
        (B = qr(r.events)),
        (Y = p.exit(S)),
        S.enter("componentContainerSectionSequence"),
        J(ie)
      );
    }
    function J(ie) {
      return ie === Bi
        ? (S.consume(ie), te++, J)
        : te !== Im || B !== n || !me(ie)
          ? (Y(), Q(ie))
          : (S.exit("componentContainerSectionSequence"),
            G(S, P, "whitespace")(ie));
    }
  }
  function _(S) {
    return (
      p.enter(e),
      $(S)
        ? G(e, d, "whitespace")(S)
        : (e.enter("componentContainerSectionTitle"), y(S))
    );
  }
  function y(S) {
    return $(S)
      ? (e.exit("componentContainerSectionTitle"), G(e, d, "linePrefix", 4)(S))
      : (e.consume(S), y);
  }
  function b(S) {
    return S === v.colon
      ? (e.consume(S), s++, b)
      : s < Dm
        ? a(S)
        : (e.exit("componentContainerSequence"),
          Yo.call(r, e, C, a, "componentContainerName")(S));
  }
  function C(S) {
    return S === v.openingSquareBracket ? e.attempt(eg, T, T)(S) : T(S);
  }
  function T(S) {
    return S === v.openingCurlyBracket ? e.attempt(tg, I, I)(S) : I(S);
  }
  function I(S) {
    return G(e, O, "whitespace")(S);
  }
  function O(S) {
    return (
      e.exit("componentContainerFence"),
      S === null
        ? (e.exit("componentContainer"), t(S))
        : $(S)
          ? (e.enter("lineEnding"),
            e.consume(S),
            e.exit("lineEnding"),
            r.interrupt ? t : M)
          : a(S)
    );
  }
  function M(S) {
    return S === null
      ? (e.exit("componentContainer"), t(S))
      : u && (S === v.dash || K(S))
        ? ((u = !1), Zm(e, t, a, M, n)(S))
        : (e.enter("componentContainerContent"), d(S));
  }
  function N(S) {
    return S === null
      ? V(S)
      : S === v.backTick
        ? e.check(Km, (P) => ((l = !l), z(P)), z)(S)
        : l
          ? z(S)
          : !o.length && (S === Bi || S === v.space)
            ? e.attempt(
                {
                  tokenize: f,
                  partial: !0,
                },
                _,
                z,
              )(S)
            : S === v.colon
              ? e.attempt(
                  {
                    tokenize: D,
                    partial: !0,
                  },
                  V,
                  z,
                )(S)
              : z(S);
  }
  function d(S) {
    return S === null ? V(S) : n ? G(e, N, "linePrefix", n + 1)(S) : N(S);
  }
  function z(S) {
    if (S === null) return V(S);
    p.enterOnce(e);
    const P = e.enter("chunkDocument", {
      contentType: "document",
      previous: i,
    });
    return i && (i.next = P), (i = P), U(S);
  }
  function U(S) {
    return S === null
      ? (e.exit("chunkDocument"), V(S))
      : $(S)
        ? (e.consume(S), e.exit("chunkDocument"), d)
        : (e.consume(S), U);
  }
  function V(S) {
    return (
      p.exit(e),
      e.exit("componentContainerContent"),
      e.exit("componentContainer"),
      t(S)
    );
  }
  function D(S, P, Q) {
    let te = 0;
    return G(S, B, "linePrefix", 4);
    function B(J) {
      return (
        S.enter("componentContainerFence"),
        S.enter("componentContainerSequence"),
        Y(J)
      );
    }
    function Y(J) {
      return J === v.colon
        ? (S.consume(J), te++, Y)
        : o.length
          ? (te === o[o.length - 1] && o.pop(), Q(J))
          : te !== s
            ? Q(J)
            : (S.exit("componentContainerSequence"), G(S, A, "whitespace")(J));
    }
    function A(J) {
      return J === null || $(J)
        ? (S.exit("componentContainerFence"), P(J))
        : (o.push(te), Q(J));
    }
  }
}
function rg(e, t, a) {
  return kn(
    e,
    t,
    a,
    "componentContainerLabel",
    "componentContainerLabelMarker",
    "componentContainerLabelString",
    !0,
  );
}
function ng(e, t, a) {
  return bn(
    e,
    t,
    a,
    "componentContainerAttributes",
    "componentContainerAttributesMarker",
    "componentContainerAttribute",
    "componentContainerAttributeId",
    "componentContainerAttributeClass",
    "componentContainerAttributeName",
    "componentContainerAttributeInitializerMarker",
    "componentContainerAttributeValueLiteral",
    "componentContainerAttributeValue",
    "componentContainerAttributeValueMarker",
    "componentContainerAttributeValueData",
    !0,
  );
}
const Go = {
  tokenize: ag,
  concrete: !0,
};
function ig(e, t, a) {
  const r = this;
  return G(e, n, "linePrefix");
  function n(s) {
    if (Qm(r.events, "linePrefix") < 4) return a(s);
    switch (s) {
      case v.backTick:
        return Rr.tokenize.call(r, e, t, a)(s);
      case v.colon:
        return Go.tokenize.call(r, e, t, a)(s);
      default:
        return a(s);
    }
  }
}
const kr = {
  tokenize: ig,
};
function sg(e, t, a) {
  const r = this,
    n = Vo.tokenize.call(r, e, G(e, i, "linePrefix"), a);
  return G(e, s, "linePrefix");
  function s(o) {
    return o === v.colon ? n(o) : a(o);
  }
  function i(o) {
    return $(o) || o === v.EOF ? t(o) : a(o);
  }
}
const og = {
  tokenize: sg,
};
function cg() {
  return {
    text: {
      [v.colon]: Vo,
      [v.openingSquareBracket]: [Rm],
      [v.openingCurlyBracket]: [$m, jm],
    },
    flow: {
      [v.colon]: [Go, og],
    },
    flowInitial: {
      "-2": kr,
      "-1": kr,
      [v.space]: kr,
    },
  };
}
const ug = (e) => `---
${e}
---`,
  lg = function (e = {}) {
    var r;
    const t = this.data();
    a("micromarkExtensions", cg()),
      a("fromMarkdownExtensions", xm(e)),
      a("toMarkdownExtensions", Cm(e));
    function a(n, s) {
      t[n] || (t[n] = []), t[n].push(s);
    }
    return (r = e == null ? void 0 : e.components) != null && r.length
      ? async (n, { data: s }) => {
          const i = [];
          return (
            et(
              n,
              ["textComponent", "leafComponent", "containerComponent"],
              (o) => {
                Hi(o);
                const { instance: u, options: l } =
                  e.components.find((p) => p.name === o.name) || {};
                u && i.push(u(l)(o, s));
              },
            ),
            await Promise.all(i),
            n
          );
        }
      : (n) => {
          et(
            n,
            ["textComponent", "leafComponent", "containerComponent"],
            (s) => {
              Hi(s);
            },
          );
        };
  };
function Hi(e) {
  const t = e.data || (e.data = {});
  (e.fmAttributes = fg(e)),
    (t.hName = sa(e.name)),
    (t.hProperties = hg({
      ...e.attributes,
      ...e.fmAttributes,
    }));
}
function fg(e) {
  if (!e.rawData) return {};
  const t = e.rawData.replace(/\s-+$/, ""),
    { data: a } = qo(ug(t));
  return a;
}
function hg(e) {
  const t = Object.entries(e).map(([a, r]) =>
    a.startsWith(":")
      ? [a, r]
      : typeof r == "string"
        ? [a, r]
        : [`:${a}`, JSON.stringify(r)],
  );
  return Object.fromEntries(t);
}
const Ui = async (e, t = {}) => {
  const a = Object.entries(t).filter((r) => r[1] !== !1);
  for (const r of a) {
    const n =
      r[1].instance ||
      (await Ir(() => import(r[0]), [], import.meta.url).then(
        (s) => s.default || s,
      ));
    e.use(n, r[1].options);
  }
};
function dg(e) {
  return "children" in e ? Qo(e) : "value" in e ? e.value : "";
}
function pg(e) {
  return e.type === "text" ? e.value : "children" in e ? Qo(e) : "";
}
function Qo(e) {
  let t = -1;
  const a = [];
  for (; ++t < e.children.length; ) a[t] = pg(e.children[t]);
  return a.join("");
}
const _g =
    /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,
  mg = Object.hasOwnProperty;
class gg {
  constructor() {
    this.occurrences, this.reset();
  }
  slug(t, a) {
    const r = this;
    let n = yg(t, a === !0);
    const s = n;
    for (; mg.call(r.occurrences, n); )
      r.occurrences[s]++, (n = s + "-" + r.occurrences[s]);
    return (r.occurrences[n] = 0), n;
  }
  reset() {
    this.occurrences = Object.create(null);
  }
}
function yg(e, t) {
  return typeof e != "string"
    ? ""
    : (t || (e = e.toLowerCase()), e.replace(_g, "").replace(/ /g, "-"));
}
const kg = [
    "javascript:",
    "data:text/html",
    "vbscript:",
    "data:text/javascript",
    "data:text/vbscript",
    "data:text/css",
    "data:text/plain",
    "data:text/xml",
  ],
  bg = (e, t) =>
    e.startsWith("on")
      ? !1
      : e === "href" || e === "src"
        ? !kg.some((a) => t.toLowerCase().startsWith(a))
        : !0,
  wg = (e, t) =>
    t
      ? ((t = Object.fromEntries(
          Object.entries(t).filter(([a, r]) => {
            const n = bg(a, r);
            return (
              n ||
                console.warn(
                  `[@nuxtjs/mdc] removing unsafe attribute: ${a}="${r}"`,
                ),
              n
            );
          }),
        )),
        e === "pre" &&
          typeof t.highlights == "string" &&
          (t.highlights = t.highlights.split(" ").map((a) => parseInt(a))),
        t)
      : {};
function Eg(e = {}) {
  const t = new gg();
  function a(r, n) {
    var s, i, o, u, l;
    if (r.type === "root")
      return {
        type: "root",
        children: r.children.map((p) => a(p, r)).filter(Boolean),
      };
    if (r.type === "element") {
      if (
        r.tagName === "p" &&
        r.children.every((h) => h.type === "text" && /^\s*$/.test(h.value))
      )
        return null;
      if (r.tagName === "li") {
        let h = !1;
        r.children =
          (s = r.children) == null
            ? void 0
            : s.flatMap((f) =>
                f.type === "element" && f.tagName === "p"
                  ? (h &&
                      f.children.unshift({
                        type: "element",
                        tagName: "br",
                        properties: {},
                        children: [],
                      }),
                    (h = !0),
                    f.children)
                  : f,
              );
      }
      (i = r.tagName) != null &&
        i.match(/^h\d$/) &&
        ((r.properties = r.properties || {}),
        (r.properties.id = String(
          ((o = r.properties) == null ? void 0 : o.id) || t.slug(dg(r)),
        )
          .replace(/-+/g, "-")
          .replace(/^-|-$/g, "")
          .replace(/^(\d)/, "_$1"))),
        r.tagName === "component-slot" && (r.tagName = "template");
      const p = (
        r.tagName === "template" && (u = r.content) != null && u.children.length
          ? r.content.children
          : r.children
      )
        .map((h) => a(h, r))
        .filter(Boolean);
      return {
        type: "element",
        tag: r.tagName,
        props: wg(r.tagName, r.properties),
        children: p,
      };
    }
    return r.type === "text" &&
      (r.value !==
        `
` ||
        ((l = n == null ? void 0 : n.properties) != null &&
          l.emptyLinePlaceholder))
      ? {
          type: "text",
          value: r.value,
        }
      : e.keepComments && r.type === "comment"
        ? {
            type: "comment",
            value: r.value,
          }
        : null;
  }
  this.Compiler = (r) => {
    const n = a(r);
    let s;
    const i = r.children.findIndex((o) => {
      var u;
      return (
        o.type === "comment" &&
        ((u = o.value) == null ? void 0 : u.trim()) === "more"
      );
    });
    if (
      i !== -1 &&
      ((s = a({
        type: "root",
        children: r.children.slice(0, i),
      })),
      s.children.find((o) => o.type === "element" && o.tag === "pre"))
    ) {
      const o = n.children[n.children.length - 1];
      o.type === "element" && o.tag === "style" && s.children.push(o);
    }
    return {
      body: n,
      excerpt: s,
    };
  };
}
function Tg(e, t) {
  const a = {
    type: "element",
    tagName: "em",
    properties: t.attributes || {},
    children: e.all(t),
  };
  return e.patch(t, a), e.applyData(t, a);
}
const ji = /[\t\n\r]/g;
function Ag(e, t = 4) {
  const a = [];
  let r = 0,
    n = 0,
    s = -1;
  if (typeof e != "string") throw new TypeError("detab expected string");
  for (; n < e.length; ) {
    ji.lastIndex = n;
    const i = ji.exec(e),
      o = i ? i.index : e.length;
    if (e.codePointAt(o) === 9) {
      const u = t - ((s + o - n + 1) % t);
      a.push(e.slice(r, o), " ".repeat(u)), (s += o - n + u), (r = o + 1);
    } else s = -1;
    n = o + 1;
  }
  return a.push(e.slice(r)), a.join("");
}
function Cg(e) {
  if (!(e != null && e.trim()))
    return {
      language: void 0,
      highlights: void 0,
      filename: void 0,
      meta: void 0,
    };
  const t = e.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/),
    a = e.match(/{([^}]*)}/),
    r = e.match(/\[((\\]|[^\]])*)\]/),
    n = e
      .replace((t == null ? void 0 : t[0]) ?? "", "")
      .replace((a == null ? void 0 : a[0]) ?? "", "")
      .replace((r == null ? void 0 : r[0]) ?? "", "")
      .trim();
  return {
    language: (t == null ? void 0 : t[0]) || void 0,
    highlights: xg((a == null ? void 0 : a[1]) || void 0),
    filename: (r == null ? void 0 : r[1].replace(/\\]/g, "]")) || void 0,
    meta: n,
  };
}
function xg(e) {
  const t = String(e || "")
    .split(",")
    .filter(Boolean)
    .flatMap((a) => {
      const [r, n] = a
        .trim()
        .split("-")
        .map((s) => Number(s.trim()));
      return Array.from({
        length: (n || r) - r + 1,
      }).map((s, i) => r + i);
    });
  return t.length ? t : void 0;
}
const Dg = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function Xo(e) {
  const t = String(e).match(Dg);
  return t && t[1];
}
const zg = (e, t) => {
  const a = (t.lang || "") + " " + (t.meta || ""),
    { language: r, highlights: n, filename: s, meta: i } = Cg(a),
    o = t.value
      ? Ag(
          t.value +
            `
`,
        )
      : "";
  let u = {
    type: "element",
    tagName: "code",
    properties: {
      __ignoreMap: "",
    },
    children: [
      {
        type: "text",
        value: o,
      },
    ],
  };
  i &&
    (u.data = {
      meta: i,
    }),
    e.patch(t, u),
    (u = e.applyData(t, u));
  const l = {
    language: r,
    filename: s,
    highlights: n,
    meta: i,
    code: o,
  };
  return (
    r && (l.className = ["language-" + r]),
    (u = {
      type: "element",
      tagName: "pre",
      properties: l,
      children: [u],
    }),
    e.patch(t, u),
    u
  );
};
function Ig(e, t) {
  var r;
  const a = Xo(t.value);
  if (
    (a && /[A-Z]/.test(a) && (t.value = t.value.replace(a, sa(a))),
    e.dangerous || ((r = e.options) != null && r.allowDangerousHtml))
  ) {
    const n = {
      type: "raw",
      value: t.value,
    };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Sg(e, t) {
  const a = {
    ...(t.attributes || {}),
    href: pt(t.url),
  };
  t.title !== null && t.title !== void 0 && (a.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: a,
    children: e.all(t),
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Ng(e, t) {
  const a = {},
    r = e.all(t);
  let n = -1;
  for (
    typeof t.start == "number" && t.start !== 1 && (a.start = t.start);
    ++n < r.length;

  ) {
    const i = r[n];
    if (
      i.type === "element" &&
      i.tagName === "li" &&
      i.properties &&
      Array.isArray(i.properties.className) &&
      i.properties.className.includes("task-list-item")
    ) {
      a.className = ["contains-task-list"];
      break;
    }
  }
  (t.children || []).some((i) => typeof i.checked == "boolean") &&
    (a.className = ["contains-task-list"]);
  const s = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: a,
    children: e.wrap(r, !0),
  };
  return e.patch(t, s), e.applyData(t, s);
}
function Fg(e, t) {
  if (t.children && t.children[0] && t.children[0].type === "html") {
    const r = sa(Xo(t.children[0].value) || "div");
    if (!Lu.includes(r)) return e.all(t);
  }
  const a = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Og(e, t) {
  const a = {
    ...t.attributes,
    src: pt(t.url),
  };
  t.alt !== null && t.alt !== void 0 && (a.alt = t.alt),
    t.title !== null && t.title !== void 0 && (a.title = t.title);
  const r = {
    type: "element",
    tagName: "img",
    properties: a,
    children: [],
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Lg(e, t) {
  const a = {
    type: "element",
    tagName: "strong",
    properties: t.attributes || {},
    children: e.all(t),
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Rg(e, t) {
  var i, o;
  const a =
      ((i = t.attributes) == null ? void 0 : i.language) ||
      ((o = t.attributes) == null ? void 0 : o.lang),
    r = {
      type: "text",
      value: t.value.replace(/\r?\n|\r/g, " "),
    };
  e.patch(t, r);
  const n = {
      type: "element",
      tagName: "code",
      properties: t.attributes || {},
      children: [r],
    },
    s = (n.properties.class || "").split(" ");
  return (
    delete n.properties.class,
    a &&
      ((n.properties.language = a),
      delete n.properties.lang,
      s.push("language-" + a)),
    (n.properties.className = s.join(" ")),
    e.patch(t, n),
    e.applyData(t, n)
  );
}
function vg(e, t) {
  var r;
  const a = {
    type: "element",
    tagName: t.name,
    properties: {
      ...t.attributes,
      ...((r = t.data) == null ? void 0 : r.hProperties),
    },
    children: e.all(t),
  };
  return (
    e.patch(t, a),
    (a.attributes = t.attributes),
    (a.fmAttributes = t.fmAttributes),
    a
  );
}
const Bg = {
  emphasis: Tg,
  code: zg,
  link: Sg,
  paragraph: Fg,
  html: Ig,
  list: Ng,
  image: Og,
  strong: Lg,
  inlineCode: Rg,
  containerComponent: vg,
};
var Yr = {
  exports: {},
};
(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0,
  });
  const a = [
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array",
  ];
  function r(d) {
    return a.includes(d);
  }
  const n = [
    "Function",
    "Generator",
    "AsyncGenerator",
    "GeneratorFunction",
    "AsyncGeneratorFunction",
    "AsyncFunction",
    "Observable",
    "Array",
    "Buffer",
    "Blob",
    "Object",
    "RegExp",
    "Date",
    "Error",
    "Map",
    "Set",
    "WeakMap",
    "WeakSet",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "DataView",
    "Promise",
    "URL",
    "FormData",
    "URLSearchParams",
    "HTMLElement",
    ...a,
  ];
  function s(d) {
    return n.includes(d);
  }
  const i = [
    "null",
    "undefined",
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
  ];
  function o(d) {
    return i.includes(d);
  }
  function u(d) {
    return (z) => typeof z === d;
  }
  const { toString: l } = Object.prototype,
    p = (d) => {
      const z = l.call(d).slice(8, -1);
      if (/HTML\w+Element/.test(z) && f.domElement(d)) return "HTMLElement";
      if (s(z)) return z;
    },
    h = (d) => (z) => p(z) === d;
  function f(d) {
    if (d === null) return "null";
    switch (typeof d) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return "number";
      case "boolean":
        return "boolean";
      case "function":
        return "Function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
    }
    if (f.observable(d)) return "Observable";
    if (f.array(d)) return "Array";
    if (f.buffer(d)) return "Buffer";
    const z = p(d);
    if (z) return z;
    if (d instanceof String || d instanceof Boolean || d instanceof Number)
      throw new TypeError(
        "Please don't use object wrappers for primitive types",
      );
    return "Object";
  }
  (f.undefined = u("undefined")), (f.string = u("string"));
  const _ = u("number");
  (f.number = (d) => _(d) && !f.nan(d)),
    (f.bigint = u("bigint")),
    (f.function_ = u("function")),
    (f.null_ = (d) => d === null),
    (f.class_ = (d) => f.function_(d) && d.toString().startsWith("class ")),
    (f.boolean = (d) => d === !0 || d === !1),
    (f.symbol = u("symbol")),
    (f.numericString = (d) =>
      f.string(d) && !f.emptyStringOrWhitespace(d) && !Number.isNaN(Number(d))),
    (f.array = (d, z) =>
      Array.isArray(d) ? (f.function_(z) ? d.every(z) : !0) : !1),
    (f.buffer = (d) => {
      var z, U, V, D;
      return (D =
        (V =
          (U = (z = d) === null || z === void 0 ? void 0 : z.constructor) ===
            null || U === void 0
            ? void 0
            : U.isBuffer) === null || V === void 0
          ? void 0
          : V.call(U, d)) !== null && D !== void 0
        ? D
        : !1;
    }),
    (f.blob = (d) => h("Blob")(d)),
    (f.nullOrUndefined = (d) => f.null_(d) || f.undefined(d)),
    (f.object = (d) => !f.null_(d) && (typeof d == "object" || f.function_(d))),
    (f.iterable = (d) => {
      var z;
      return f.function_(
        (z = d) === null || z === void 0 ? void 0 : z[Symbol.iterator],
      );
    }),
    (f.asyncIterable = (d) => {
      var z;
      return f.function_(
        (z = d) === null || z === void 0 ? void 0 : z[Symbol.asyncIterator],
      );
    }),
    (f.generator = (d) => {
      var z, U;
      return (
        f.iterable(d) &&
        f.function_((z = d) === null || z === void 0 ? void 0 : z.next) &&
        f.function_((U = d) === null || U === void 0 ? void 0 : U.throw)
      );
    }),
    (f.asyncGenerator = (d) =>
      f.asyncIterable(d) && f.function_(d.next) && f.function_(d.throw)),
    (f.nativePromise = (d) => h("Promise")(d));
  const y = (d) => {
    var z, U;
    return (
      f.function_((z = d) === null || z === void 0 ? void 0 : z.then) &&
      f.function_((U = d) === null || U === void 0 ? void 0 : U.catch)
    );
  };
  (f.promise = (d) => f.nativePromise(d) || y(d)),
    (f.generatorFunction = h("GeneratorFunction")),
    (f.asyncGeneratorFunction = (d) => p(d) === "AsyncGeneratorFunction"),
    (f.asyncFunction = (d) => p(d) === "AsyncFunction"),
    (f.boundFunction = (d) => f.function_(d) && !d.hasOwnProperty("prototype")),
    (f.regExp = h("RegExp")),
    (f.date = h("Date")),
    (f.error = h("Error")),
    (f.map = (d) => h("Map")(d)),
    (f.set = (d) => h("Set")(d)),
    (f.weakMap = (d) => h("WeakMap")(d)),
    (f.weakSet = (d) => h("WeakSet")(d)),
    (f.int8Array = h("Int8Array")),
    (f.uint8Array = h("Uint8Array")),
    (f.uint8ClampedArray = h("Uint8ClampedArray")),
    (f.int16Array = h("Int16Array")),
    (f.uint16Array = h("Uint16Array")),
    (f.int32Array = h("Int32Array")),
    (f.uint32Array = h("Uint32Array")),
    (f.float32Array = h("Float32Array")),
    (f.float64Array = h("Float64Array")),
    (f.bigInt64Array = h("BigInt64Array")),
    (f.bigUint64Array = h("BigUint64Array")),
    (f.arrayBuffer = h("ArrayBuffer")),
    (f.sharedArrayBuffer = h("SharedArrayBuffer")),
    (f.dataView = h("DataView")),
    (f.enumCase = (d, z) => Object.values(z).includes(d)),
    (f.directInstanceOf = (d, z) => Object.getPrototypeOf(d) === z.prototype),
    (f.urlInstance = (d) => h("URL")(d)),
    (f.urlString = (d) => {
      if (!f.string(d)) return !1;
      try {
        return new URL(d), !0;
      } catch {
        return !1;
      }
    }),
    (f.truthy = (d) => !!d),
    (f.falsy = (d) => !d),
    (f.nan = (d) => Number.isNaN(d)),
    (f.primitive = (d) => f.null_(d) || o(typeof d)),
    (f.integer = (d) => Number.isInteger(d)),
    (f.safeInteger = (d) => Number.isSafeInteger(d)),
    (f.plainObject = (d) => {
      if (l.call(d) !== "[object Object]") return !1;
      const z = Object.getPrototypeOf(d);
      return z === null || z === Object.getPrototypeOf({});
    }),
    (f.typedArray = (d) => r(p(d)));
  const b = (d) => f.safeInteger(d) && d >= 0;
  (f.arrayLike = (d) =>
    !f.nullOrUndefined(d) && !f.function_(d) && b(d.length)),
    (f.inRange = (d, z) => {
      if (f.number(z)) return d >= Math.min(0, z) && d <= Math.max(z, 0);
      if (f.array(z) && z.length === 2)
        return d >= Math.min(...z) && d <= Math.max(...z);
      throw new TypeError(`Invalid range: ${JSON.stringify(z)}`);
    });
  const C = 1,
    T = ["innerHTML", "ownerDocument", "style", "attributes", "nodeValue"];
  (f.domElement = (d) =>
    f.object(d) &&
    d.nodeType === C &&
    f.string(d.nodeName) &&
    !f.plainObject(d) &&
    T.every((z) => z in d)),
    (f.observable = (d) => {
      var z, U, V, D;
      return d
        ? d ===
            ((U = (z = d)[Symbol.observable]) === null || U === void 0
              ? void 0
              : U.call(z)) ||
            d ===
              ((D = (V = d)["@@observable"]) === null || D === void 0
                ? void 0
                : D.call(V))
        : !1;
    }),
    (f.nodeStream = (d) =>
      f.object(d) && f.function_(d.pipe) && !f.observable(d)),
    (f.infinite = (d) => d === 1 / 0 || d === -1 / 0);
  const I = (d) => (z) => f.integer(z) && Math.abs(z % 2) === d;
  (f.evenInteger = I(0)),
    (f.oddInteger = I(1)),
    (f.emptyArray = (d) => f.array(d) && d.length === 0),
    (f.nonEmptyArray = (d) => f.array(d) && d.length > 0),
    (f.emptyString = (d) => f.string(d) && d.length === 0);
  const O = (d) => f.string(d) && !/\S/.test(d);
  (f.emptyStringOrWhitespace = (d) => f.emptyString(d) || O(d)),
    (f.nonEmptyString = (d) => f.string(d) && d.length > 0),
    (f.nonEmptyStringAndNotWhitespace = (d) =>
      f.string(d) && !f.emptyStringOrWhitespace(d)),
    (f.emptyObject = (d) =>
      f.object(d) && !f.map(d) && !f.set(d) && Object.keys(d).length === 0),
    (f.nonEmptyObject = (d) =>
      f.object(d) && !f.map(d) && !f.set(d) && Object.keys(d).length > 0),
    (f.emptySet = (d) => f.set(d) && d.size === 0),
    (f.nonEmptySet = (d) => f.set(d) && d.size > 0),
    (f.emptyMap = (d) => f.map(d) && d.size === 0),
    (f.nonEmptyMap = (d) => f.map(d) && d.size > 0),
    (f.propertyKey = (d) => f.any([f.string, f.number, f.symbol], d)),
    (f.formData = (d) => h("FormData")(d)),
    (f.urlSearchParams = (d) => h("URLSearchParams")(d));
  const M = (d, z, U) => {
    if (!f.function_(z))
      throw new TypeError(`Invalid predicate: ${JSON.stringify(z)}`);
    if (U.length === 0) throw new TypeError("Invalid number of values");
    return d.call(U, z);
  };
  (f.any = (d, ...z) =>
    (f.array(d) ? d : [d]).some((V) => M(Array.prototype.some, V, z))),
    (f.all = (d, ...z) => M(Array.prototype.every, d, z));
  const N = (d, z, U, V = {}) => {
    if (!d) {
      const { multipleValues: D } = V,
        S = D
          ? `received values of types ${[...new Set(U.map((P) => `\`${f(P)}\``))].join(", ")}`
          : `received value of type \`${f(U)}\``;
      throw new TypeError(`Expected value which is \`${z}\`, ${S}.`);
    }
  };
  (t.assert = {
    undefined: (d) => N(f.undefined(d), "undefined", d),
    string: (d) => N(f.string(d), "string", d),
    number: (d) => N(f.number(d), "number", d),
    bigint: (d) => N(f.bigint(d), "bigint", d),
    function_: (d) => N(f.function_(d), "Function", d),
    null_: (d) => N(f.null_(d), "null", d),
    class_: (d) => N(f.class_(d), "Class", d),
    boolean: (d) => N(f.boolean(d), "boolean", d),
    symbol: (d) => N(f.symbol(d), "symbol", d),
    numericString: (d) => N(f.numericString(d), "string with a number", d),
    array: (d, z) => {
      N(f.array(d), "Array", d), z && d.forEach(z);
    },
    buffer: (d) => N(f.buffer(d), "Buffer", d),
    blob: (d) => N(f.blob(d), "Blob", d),
    nullOrUndefined: (d) => N(f.nullOrUndefined(d), "null or undefined", d),
    object: (d) => N(f.object(d), "Object", d),
    iterable: (d) => N(f.iterable(d), "Iterable", d),
    asyncIterable: (d) => N(f.asyncIterable(d), "AsyncIterable", d),
    generator: (d) => N(f.generator(d), "Generator", d),
    asyncGenerator: (d) => N(f.asyncGenerator(d), "AsyncGenerator", d),
    nativePromise: (d) => N(f.nativePromise(d), "native Promise", d),
    promise: (d) => N(f.promise(d), "Promise", d),
    generatorFunction: (d) => N(f.generatorFunction(d), "GeneratorFunction", d),
    asyncGeneratorFunction: (d) =>
      N(f.asyncGeneratorFunction(d), "AsyncGeneratorFunction", d),
    asyncFunction: (d) => N(f.asyncFunction(d), "AsyncFunction", d),
    boundFunction: (d) => N(f.boundFunction(d), "Function", d),
    regExp: (d) => N(f.regExp(d), "RegExp", d),
    date: (d) => N(f.date(d), "Date", d),
    error: (d) => N(f.error(d), "Error", d),
    map: (d) => N(f.map(d), "Map", d),
    set: (d) => N(f.set(d), "Set", d),
    weakMap: (d) => N(f.weakMap(d), "WeakMap", d),
    weakSet: (d) => N(f.weakSet(d), "WeakSet", d),
    int8Array: (d) => N(f.int8Array(d), "Int8Array", d),
    uint8Array: (d) => N(f.uint8Array(d), "Uint8Array", d),
    uint8ClampedArray: (d) => N(f.uint8ClampedArray(d), "Uint8ClampedArray", d),
    int16Array: (d) => N(f.int16Array(d), "Int16Array", d),
    uint16Array: (d) => N(f.uint16Array(d), "Uint16Array", d),
    int32Array: (d) => N(f.int32Array(d), "Int32Array", d),
    uint32Array: (d) => N(f.uint32Array(d), "Uint32Array", d),
    float32Array: (d) => N(f.float32Array(d), "Float32Array", d),
    float64Array: (d) => N(f.float64Array(d), "Float64Array", d),
    bigInt64Array: (d) => N(f.bigInt64Array(d), "BigInt64Array", d),
    bigUint64Array: (d) => N(f.bigUint64Array(d), "BigUint64Array", d),
    arrayBuffer: (d) => N(f.arrayBuffer(d), "ArrayBuffer", d),
    sharedArrayBuffer: (d) => N(f.sharedArrayBuffer(d), "SharedArrayBuffer", d),
    dataView: (d) => N(f.dataView(d), "DataView", d),
    enumCase: (d, z) => N(f.enumCase(d, z), "EnumCase", d),
    urlInstance: (d) => N(f.urlInstance(d), "URL", d),
    urlString: (d) => N(f.urlString(d), "string with a URL", d),
    truthy: (d) => N(f.truthy(d), "truthy", d),
    falsy: (d) => N(f.falsy(d), "falsy", d),
    nan: (d) => N(f.nan(d), "NaN", d),
    primitive: (d) => N(f.primitive(d), "primitive", d),
    integer: (d) => N(f.integer(d), "integer", d),
    safeInteger: (d) => N(f.safeInteger(d), "integer", d),
    plainObject: (d) => N(f.plainObject(d), "plain object", d),
    typedArray: (d) => N(f.typedArray(d), "TypedArray", d),
    arrayLike: (d) => N(f.arrayLike(d), "array-like", d),
    domElement: (d) => N(f.domElement(d), "HTMLElement", d),
    observable: (d) => N(f.observable(d), "Observable", d),
    nodeStream: (d) => N(f.nodeStream(d), "Node.js Stream", d),
    infinite: (d) => N(f.infinite(d), "infinite number", d),
    emptyArray: (d) => N(f.emptyArray(d), "empty array", d),
    nonEmptyArray: (d) => N(f.nonEmptyArray(d), "non-empty array", d),
    emptyString: (d) => N(f.emptyString(d), "empty string", d),
    emptyStringOrWhitespace: (d) =>
      N(f.emptyStringOrWhitespace(d), "empty string or whitespace", d),
    nonEmptyString: (d) => N(f.nonEmptyString(d), "non-empty string", d),
    nonEmptyStringAndNotWhitespace: (d) =>
      N(
        f.nonEmptyStringAndNotWhitespace(d),
        "non-empty string and not whitespace",
        d,
      ),
    emptyObject: (d) => N(f.emptyObject(d), "empty object", d),
    nonEmptyObject: (d) => N(f.nonEmptyObject(d), "non-empty object", d),
    emptySet: (d) => N(f.emptySet(d), "empty set", d),
    nonEmptySet: (d) => N(f.nonEmptySet(d), "non-empty set", d),
    emptyMap: (d) => N(f.emptyMap(d), "empty map", d),
    nonEmptyMap: (d) => N(f.nonEmptyMap(d), "non-empty map", d),
    propertyKey: (d) => N(f.propertyKey(d), "PropertyKey", d),
    formData: (d) => N(f.formData(d), "FormData", d),
    urlSearchParams: (d) => N(f.urlSearchParams(d), "URLSearchParams", d),
    evenInteger: (d) => N(f.evenInteger(d), "even integer", d),
    oddInteger: (d) => N(f.oddInteger(d), "odd integer", d),
    directInstanceOf: (d, z) => N(f.directInstanceOf(d, z), "T", d),
    inRange: (d, z) => N(f.inRange(d, z), "in range", d),
    any: (d, ...z) =>
      N(f.any(d, ...z), "predicate returns truthy for any value", z, {
        multipleValues: !0,
      }),
    all: (d, ...z) =>
      N(f.all(d, ...z), "predicate returns truthy for all values", z, {
        multipleValues: !0,
      }),
  }),
    Object.defineProperties(f, {
      class: {
        value: f.class_,
      },
      function: {
        value: f.function_,
      },
      null: {
        value: f.null_,
      },
    }),
    Object.defineProperties(t.assert, {
      class: {
        value: t.assert.class_,
      },
      function: {
        value: t.assert.function_,
      },
      null: {
        value: t.assert.null_,
      },
    }),
    (t.default = f),
    (e.exports = f),
    (e.exports.default = f),
    (e.exports.assert = t.assert);
})(Yr, Yr.exports);
var Pg = Yr.exports;
const Mg = {
    keywords: ["face", "smile", "happy", "joy", ":D", "grin"],
    char: "😀",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Hg = {
    keywords: ["face", "grimace", "teeth"],
    char: "😬",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ug = {
    keywords: ["face", "happy", "smile", "joy", "kawaii"],
    char: "😁",
    fitzpatrick_scale: !1,
    category: "people",
  },
  jg = {
    keywords: ["face", "cry", "tears", "weep", "happy", "happytears", "haha"],
    char: "😂",
    fitzpatrick_scale: !1,
    category: "people",
  },
  qg = {
    keywords: ["face", "rolling", "floor", "laughing", "lol", "haha"],
    char: "🤣",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Yg = {
    keywords: ["face", "celebration", "woohoo"],
    char: "🥳",
    fitzpatrick_scale: !1,
    category: "people",
  },
  $g = {
    keywords: ["face", "happy", "joy", "haha", ":D", ":)", "smile", "funny"],
    char: "😃",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Vg = {
    keywords: [
      "face",
      "happy",
      "joy",
      "funny",
      "haha",
      "laugh",
      "like",
      ":D",
      ":)",
    ],
    char: "😄",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Wg = {
    keywords: ["face", "hot", "happy", "laugh", "sweat", "smile", "relief"],
    char: "😅",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Gg = {
    keywords: [
      "happy",
      "joy",
      "lol",
      "satisfied",
      "haha",
      "face",
      "glad",
      "XD",
      "laugh",
    ],
    char: "😆",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Qg = {
    keywords: ["face", "angel", "heaven", "halo"],
    char: "😇",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Xg = {
    keywords: ["face", "happy", "mischievous", "secret", ";)", "smile", "eye"],
    char: "😉",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Kg = {
    keywords: [
      "face",
      "smile",
      "happy",
      "flushed",
      "crush",
      "embarrassed",
      "shy",
      "joy",
    ],
    char: "😊",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Jg = {
    keywords: ["face", "smile"],
    char: "🙂",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Zg = {
    keywords: ["face", "flipped", "silly", "smile"],
    char: "🙃",
    fitzpatrick_scale: !1,
    category: "people",
  },
  e0 = {
    keywords: ["face", "blush", "massage", "happiness"],
    char: "☺️",
    fitzpatrick_scale: !1,
    category: "people",
  },
  t0 = {
    keywords: [
      "happy",
      "joy",
      "tongue",
      "smile",
      "face",
      "silly",
      "yummy",
      "nom",
      "delicious",
      "savouring",
    ],
    char: "😋",
    fitzpatrick_scale: !1,
    category: "people",
  },
  a0 = {
    keywords: ["face", "relaxed", "phew", "massage", "happiness"],
    char: "😌",
    fitzpatrick_scale: !1,
    category: "people",
  },
  r0 = {
    keywords: [
      "face",
      "love",
      "like",
      "affection",
      "valentines",
      "infatuation",
      "crush",
      "heart",
    ],
    char: "😍",
    fitzpatrick_scale: !1,
    category: "people",
  },
  n0 = {
    keywords: [
      "face",
      "love",
      "like",
      "affection",
      "valentines",
      "infatuation",
      "crush",
      "hearts",
      "adore",
    ],
    char: "🥰",
    fitzpatrick_scale: !1,
    category: "people",
  },
  i0 = {
    keywords: [
      "face",
      "love",
      "like",
      "affection",
      "valentines",
      "infatuation",
      "kiss",
    ],
    char: "😘",
    fitzpatrick_scale: !1,
    category: "people",
  },
  s0 = {
    keywords: [
      "love",
      "like",
      "face",
      "3",
      "valentines",
      "infatuation",
      "kiss",
    ],
    char: "😗",
    fitzpatrick_scale: !1,
    category: "people",
  },
  o0 = {
    keywords: ["face", "affection", "valentines", "infatuation", "kiss"],
    char: "😙",
    fitzpatrick_scale: !1,
    category: "people",
  },
  c0 = {
    keywords: [
      "face",
      "love",
      "like",
      "affection",
      "valentines",
      "infatuation",
      "kiss",
    ],
    char: "😚",
    fitzpatrick_scale: !1,
    category: "people",
  },
  u0 = {
    keywords: [
      "face",
      "prank",
      "childish",
      "playful",
      "mischievous",
      "smile",
      "wink",
      "tongue",
    ],
    char: "😜",
    fitzpatrick_scale: !1,
    category: "people",
  },
  l0 = {
    keywords: ["face", "goofy", "crazy"],
    char: "🤪",
    fitzpatrick_scale: !1,
    category: "people",
  },
  f0 = {
    keywords: [
      "face",
      "distrust",
      "scepticism",
      "disapproval",
      "disbelief",
      "surprise",
    ],
    char: "🤨",
    fitzpatrick_scale: !1,
    category: "people",
  },
  h0 = {
    keywords: ["face", "stuffy", "wealthy"],
    char: "🧐",
    fitzpatrick_scale: !1,
    category: "people",
  },
  d0 = {
    keywords: ["face", "prank", "playful", "mischievous", "smile", "tongue"],
    char: "😝",
    fitzpatrick_scale: !1,
    category: "people",
  },
  p0 = {
    keywords: [
      "face",
      "prank",
      "childish",
      "playful",
      "mischievous",
      "smile",
      "tongue",
    ],
    char: "😛",
    fitzpatrick_scale: !1,
    category: "people",
  },
  _0 = {
    keywords: ["face", "rich", "dollar", "money"],
    char: "🤑",
    fitzpatrick_scale: !1,
    category: "people",
  },
  m0 = {
    keywords: ["face", "nerdy", "geek", "dork"],
    char: "🤓",
    fitzpatrick_scale: !1,
    category: "people",
  },
  g0 = {
    keywords: ["face", "cool", "smile", "summer", "beach", "sunglass"],
    char: "😎",
    fitzpatrick_scale: !1,
    category: "people",
  },
  y0 = {
    keywords: ["face", "smile", "starry", "eyes", "grinning"],
    char: "🤩",
    fitzpatrick_scale: !1,
    category: "people",
  },
  k0 = {
    keywords: ["face"],
    char: "🤡",
    fitzpatrick_scale: !1,
    category: "people",
  },
  b0 = {
    keywords: ["face", "cowgirl", "hat"],
    char: "🤠",
    fitzpatrick_scale: !1,
    category: "people",
  },
  w0 = {
    keywords: ["face", "smile", "hug"],
    char: "🤗",
    fitzpatrick_scale: !1,
    category: "people",
  },
  E0 = {
    keywords: ["face", "smile", "mean", "prank", "smug", "sarcasm"],
    char: "😏",
    fitzpatrick_scale: !1,
    category: "people",
  },
  T0 = {
    keywords: ["face", "hellokitty"],
    char: "😶",
    fitzpatrick_scale: !1,
    category: "people",
  },
  A0 = {
    keywords: ["indifference", "meh", ":|", "neutral"],
    char: "😐",
    fitzpatrick_scale: !1,
    category: "people",
  },
  C0 = {
    keywords: ["face", "indifferent", "-_-", "meh", "deadpan"],
    char: "😑",
    fitzpatrick_scale: !1,
    category: "people",
  },
  x0 = {
    keywords: [
      "indifference",
      "bored",
      "straight face",
      "serious",
      "sarcasm",
      "unimpressed",
      "skeptical",
      "dubious",
      "side_eye",
    ],
    char: "😒",
    fitzpatrick_scale: !1,
    category: "people",
  },
  D0 = {
    keywords: ["face", "eyeroll", "frustrated"],
    char: "🙄",
    fitzpatrick_scale: !1,
    category: "people",
  },
  z0 = {
    keywords: ["face", "hmmm", "think", "consider"],
    char: "🤔",
    fitzpatrick_scale: !1,
    category: "people",
  },
  I0 = {
    keywords: ["face", "lie", "pinocchio"],
    char: "🤥",
    fitzpatrick_scale: !1,
    category: "people",
  },
  S0 = {
    keywords: ["face", "whoops", "shock", "surprise"],
    char: "🤭",
    fitzpatrick_scale: !1,
    category: "people",
  },
  N0 = {
    keywords: ["face", "quiet", "shhh"],
    char: "🤫",
    fitzpatrick_scale: !1,
    category: "people",
  },
  F0 = {
    keywords: [
      "face",
      "swearing",
      "cursing",
      "cussing",
      "profanity",
      "expletive",
    ],
    char: "🤬",
    fitzpatrick_scale: !1,
    category: "people",
  },
  O0 = {
    keywords: ["face", "shocked", "mind", "blown"],
    char: "🤯",
    fitzpatrick_scale: !1,
    category: "people",
  },
  L0 = {
    keywords: ["face", "blush", "shy", "flattered"],
    char: "😳",
    fitzpatrick_scale: !1,
    category: "people",
  },
  R0 = {
    keywords: ["face", "sad", "upset", "depressed", ":("],
    char: "😞",
    fitzpatrick_scale: !1,
    category: "people",
  },
  v0 = {
    keywords: ["face", "concern", "nervous", ":("],
    char: "😟",
    fitzpatrick_scale: !1,
    category: "people",
  },
  B0 = {
    keywords: ["mad", "face", "annoyed", "frustrated"],
    char: "😠",
    fitzpatrick_scale: !1,
    category: "people",
  },
  P0 = {
    keywords: ["angry", "mad", "hate", "despise"],
    char: "😡",
    fitzpatrick_scale: !1,
    category: "people",
  },
  M0 = {
    keywords: ["face", "sad", "depressed", "upset"],
    char: "😔",
    fitzpatrick_scale: !1,
    category: "people",
  },
  H0 = {
    keywords: ["face", "indifference", "huh", "weird", "hmmm", ":/"],
    char: "😕",
    fitzpatrick_scale: !1,
    category: "people",
  },
  U0 = {
    keywords: ["face", "frowning", "disappointed", "sad", "upset"],
    char: "🙁",
    fitzpatrick_scale: !1,
    category: "people",
  },
  j0 = {
    keywords: ["face", "sad", "upset", "frown"],
    char: "☹",
    fitzpatrick_scale: !1,
    category: "people",
  },
  q0 = {
    keywords: ["face", "sick", "no", "upset", "oops"],
    char: "😣",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Y0 = {
    keywords: ["face", "confused", "sick", "unwell", "oops", ":S"],
    char: "😖",
    fitzpatrick_scale: !1,
    category: "people",
  },
  $0 = {
    keywords: ["sick", "whine", "upset", "frustrated"],
    char: "😫",
    fitzpatrick_scale: !1,
    category: "people",
  },
  V0 = {
    keywords: ["face", "tired", "sleepy", "sad", "frustrated", "upset"],
    char: "😩",
    fitzpatrick_scale: !1,
    category: "people",
  },
  W0 = {
    keywords: ["face", "begging", "mercy"],
    char: "🥺",
    fitzpatrick_scale: !1,
    category: "people",
  },
  G0 = {
    keywords: ["face", "gas", "phew", "proud", "pride"],
    char: "😤",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Q0 = {
    keywords: ["face", "surprise", "impressed", "wow", "whoa", ":O"],
    char: "😮",
    fitzpatrick_scale: !1,
    category: "people",
  },
  X0 = {
    keywords: ["face", "munch", "scared", "omg"],
    char: "😱",
    fitzpatrick_scale: !1,
    category: "people",
  },
  K0 = {
    keywords: ["face", "scared", "terrified", "nervous", "oops", "huh"],
    char: "😨",
    fitzpatrick_scale: !1,
    category: "people",
  },
  J0 = {
    keywords: ["face", "nervous", "sweat"],
    char: "😰",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Z0 = {
    keywords: ["face", "woo", "shh"],
    char: "😯",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ey = {
    keywords: ["face", "aw", "what"],
    char: "😦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ty = {
    keywords: ["face", "stunned", "nervous"],
    char: "😧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ay = {
    keywords: ["face", "tears", "sad", "depressed", "upset", ":'("],
    char: "😢",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ry = {
    keywords: ["face", "phew", "sweat", "nervous"],
    char: "😥",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ny = {
    keywords: ["face"],
    char: "🤤",
    fitzpatrick_scale: !1,
    category: "people",
  },
  iy = {
    keywords: ["face", "tired", "rest", "nap"],
    char: "😪",
    fitzpatrick_scale: !1,
    category: "people",
  },
  sy = {
    keywords: ["face", "hot", "sad", "tired", "exercise"],
    char: "😓",
    fitzpatrick_scale: !1,
    category: "people",
  },
  oy = {
    keywords: ["face", "feverish", "heat", "red", "sweating"],
    char: "🥵",
    fitzpatrick_scale: !1,
    category: "people",
  },
  cy = {
    keywords: ["face", "blue", "freezing", "frozen", "frostbite", "icicles"],
    char: "🥶",
    fitzpatrick_scale: !1,
    category: "people",
  },
  uy = {
    keywords: ["face", "cry", "tears", "sad", "upset", "depressed"],
    char: "😭",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ly = {
    keywords: ["spent", "unconscious", "xox", "dizzy"],
    char: "😵",
    fitzpatrick_scale: !1,
    category: "people",
  },
  fy = {
    keywords: ["face", "xox", "surprised", "poisoned"],
    char: "😲",
    fitzpatrick_scale: !1,
    category: "people",
  },
  hy = {
    keywords: ["face", "sealed", "zipper", "secret"],
    char: "🤐",
    fitzpatrick_scale: !1,
    category: "people",
  },
  dy = {
    keywords: ["face", "vomit", "gross", "green", "sick", "throw up", "ill"],
    char: "🤢",
    fitzpatrick_scale: !1,
    category: "people",
  },
  py = {
    keywords: ["face", "gesundheit", "sneeze", "sick", "allergy"],
    char: "🤧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  _y = {
    keywords: ["face", "sick"],
    char: "🤮",
    fitzpatrick_scale: !1,
    category: "people",
  },
  my = {
    keywords: ["face", "sick", "ill", "disease"],
    char: "😷",
    fitzpatrick_scale: !1,
    category: "people",
  },
  gy = {
    keywords: ["sick", "temperature", "thermometer", "cold", "fever"],
    char: "🤒",
    fitzpatrick_scale: !1,
    category: "people",
  },
  yy = {
    keywords: ["injured", "clumsy", "bandage", "hurt"],
    char: "🤕",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ky = {
    keywords: ["face", "dizzy", "intoxicated", "tipsy", "wavy"],
    char: "🥴",
    fitzpatrick_scale: !1,
    category: "people",
  },
  by = {
    keywords: ["face", "tired", "sleepy", "night", "zzz"],
    char: "😴",
    fitzpatrick_scale: !1,
    category: "people",
  },
  wy = {
    keywords: ["sleepy", "tired", "dream"],
    char: "💤",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ey = {
    keywords: ["hankey", "shitface", "fail", "turd", "shit"],
    char: "💩",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ty = {
    keywords: ["devil", "horns"],
    char: "😈",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ay = {
    keywords: ["devil", "angry", "horns"],
    char: "👿",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Cy = {
    keywords: [
      "monster",
      "red",
      "mask",
      "halloween",
      "scary",
      "creepy",
      "devil",
      "demon",
      "japanese",
      "ogre",
    ],
    char: "👹",
    fitzpatrick_scale: !1,
    category: "people",
  },
  xy = {
    keywords: [
      "red",
      "evil",
      "mask",
      "monster",
      "scary",
      "creepy",
      "japanese",
      "goblin",
    ],
    char: "👺",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Dy = {
    keywords: ["dead", "skeleton", "creepy", "death"],
    char: "💀",
    fitzpatrick_scale: !1,
    category: "people",
  },
  zy = {
    keywords: ["halloween", "spooky", "scary"],
    char: "👻",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Iy = {
    keywords: ["UFO", "paul", "weird", "outer_space"],
    char: "👽",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Sy = {
    keywords: ["computer", "machine", "bot"],
    char: "🤖",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ny = {
    keywords: ["animal", "cats", "happy", "smile"],
    char: "😺",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Fy = {
    keywords: ["animal", "cats", "smile"],
    char: "😸",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Oy = {
    keywords: ["animal", "cats", "haha", "happy", "tears"],
    char: "😹",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ly = {
    keywords: [
      "animal",
      "love",
      "like",
      "affection",
      "cats",
      "valentines",
      "heart",
    ],
    char: "😻",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ry = {
    keywords: ["animal", "cats", "smirk"],
    char: "😼",
    fitzpatrick_scale: !1,
    category: "people",
  },
  vy = {
    keywords: ["animal", "cats", "kiss"],
    char: "😽",
    fitzpatrick_scale: !1,
    category: "people",
  },
  By = {
    keywords: ["animal", "cats", "munch", "scared", "scream"],
    char: "🙀",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Py = {
    keywords: ["animal", "tears", "weep", "sad", "cats", "upset", "cry"],
    char: "😿",
    fitzpatrick_scale: !1,
    category: "people",
  },
  My = {
    keywords: ["animal", "cats"],
    char: "😾",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Hy = {
    keywords: ["hands", "gesture", "cupped", "prayer"],
    char: "🤲",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Uy = {
    keywords: ["gesture", "hooray", "yea", "celebration", "hands"],
    char: "🙌",
    fitzpatrick_scale: !0,
    category: "people",
  },
  jy = {
    keywords: ["hands", "praise", "applause", "congrats", "yay"],
    char: "👏",
    fitzpatrick_scale: !0,
    category: "people",
  },
  qy = {
    keywords: [
      "hands",
      "gesture",
      "goodbye",
      "solong",
      "farewell",
      "hello",
      "hi",
      "palm",
    ],
    char: "👋",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Yy = {
    keywords: ["hands", "gesture"],
    char: "🤙",
    fitzpatrick_scale: !0,
    category: "people",
  },
  $y = {
    keywords: ["angry", "violence", "fist", "hit", "attack", "hand"],
    char: "👊",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Vy = {
    keywords: ["fingers", "hand", "grasp"],
    char: "✊",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Wy = {
    keywords: ["hand", "fistbump"],
    char: "🤛",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Gy = {
    keywords: ["hand", "fistbump"],
    char: "🤜",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Qy = {
    keywords: ["fingers", "ohyeah", "hand", "peace", "victory", "two"],
    char: "✌",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Xy = {
    keywords: ["fingers", "limbs", "perfect", "ok", "okay"],
    char: "👌",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Ky = {
    keywords: ["fingers", "stop", "highfive", "palm", "ban"],
    char: "✋",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Jy = {
    keywords: ["fingers", "raised", "backhand"],
    char: "🤚",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Zy = {
    keywords: ["fingers", "butterfly", "hands", "open"],
    char: "👐",
    fitzpatrick_scale: !0,
    category: "people",
  },
  ek = {
    keywords: ["arm", "flex", "hand", "summer", "strong", "biceps"],
    char: "💪",
    fitzpatrick_scale: !0,
    category: "people",
  },
  tk = {
    keywords: ["please", "hope", "wish", "namaste", "highfive"],
    char: "🙏",
    fitzpatrick_scale: !0,
    category: "people",
  },
  ak = {
    keywords: ["kick", "stomp"],
    char: "🦶",
    fitzpatrick_scale: !0,
    category: "people",
  },
  rk = {
    keywords: ["kick", "limb"],
    char: "🦵",
    fitzpatrick_scale: !0,
    category: "people",
  },
  nk = {
    keywords: ["agreement", "shake"],
    char: "🤝",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ik = {
    keywords: ["hand", "fingers", "direction", "up"],
    char: "☝",
    fitzpatrick_scale: !0,
    category: "people",
  },
  sk = {
    keywords: ["fingers", "hand", "direction", "up"],
    char: "👆",
    fitzpatrick_scale: !0,
    category: "people",
  },
  ok = {
    keywords: ["fingers", "hand", "direction", "down"],
    char: "👇",
    fitzpatrick_scale: !0,
    category: "people",
  },
  ck = {
    keywords: ["direction", "fingers", "hand", "left"],
    char: "👈",
    fitzpatrick_scale: !0,
    category: "people",
  },
  uk = {
    keywords: ["fingers", "hand", "direction", "right"],
    char: "👉",
    fitzpatrick_scale: !0,
    category: "people",
  },
  lk = {
    keywords: ["hand", "fingers", "rude", "middle", "flipping"],
    char: "🖕",
    fitzpatrick_scale: !0,
    category: "people",
  },
  fk = {
    keywords: ["hand", "fingers", "palm"],
    char: "🖐",
    fitzpatrick_scale: !0,
    category: "people",
  },
  hk = {
    keywords: ["hand", "fingers", "gesture"],
    char: "🤟",
    fitzpatrick_scale: !0,
    category: "people",
  },
  dk = {
    keywords: ["hand", "fingers", "evil_eye", "sign_of_horns", "rock_on"],
    char: "🤘",
    fitzpatrick_scale: !0,
    category: "people",
  },
  pk = {
    keywords: ["good", "lucky"],
    char: "🤞",
    fitzpatrick_scale: !0,
    category: "people",
  },
  _k = {
    keywords: ["hand", "fingers", "spock", "star trek"],
    char: "🖖",
    fitzpatrick_scale: !0,
    category: "people",
  },
  mk = {
    keywords: ["lower_left_ballpoint_pen", "stationery", "write", "compose"],
    char: "✍",
    fitzpatrick_scale: !0,
    category: "people",
  },
  gk = {
    keywords: ["camera", "phone"],
    char: "🤳",
    fitzpatrick_scale: !0,
    category: "people",
  },
  yk = {
    keywords: ["beauty", "manicure", "finger", "fashion", "nail"],
    char: "💅",
    fitzpatrick_scale: !0,
    category: "people",
  },
  kk = {
    keywords: ["mouth", "kiss"],
    char: "👄",
    fitzpatrick_scale: !1,
    category: "people",
  },
  bk = {
    keywords: ["teeth", "dentist"],
    char: "🦷",
    fitzpatrick_scale: !1,
    category: "people",
  },
  wk = {
    keywords: ["mouth", "playful"],
    char: "👅",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ek = {
    keywords: ["face", "hear", "sound", "listen"],
    char: "👂",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Tk = {
    keywords: ["smell", "sniff"],
    char: "👃",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Ak = {
    keywords: ["face", "look", "see", "watch", "stare"],
    char: "👁",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ck = {
    keywords: ["look", "watch", "stalk", "peek", "see"],
    char: "👀",
    fitzpatrick_scale: !1,
    category: "people",
  },
  xk = {
    keywords: ["smart", "intelligent"],
    char: "🧠",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Dk = {
    keywords: ["user", "person", "human"],
    char: "👤",
    fitzpatrick_scale: !1,
    category: "people",
  },
  zk = {
    keywords: ["user", "person", "human", "group", "team"],
    char: "👥",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ik = {
    keywords: ["user", "person", "human", "sing", "say", "talk"],
    char: "🗣",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Sk = {
    keywords: ["child", "boy", "girl", "toddler"],
    char: "👶",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Nk = {
    keywords: ["gender-neutral", "young"],
    char: "🧒",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Fk = {
    keywords: ["man", "male", "guy", "teenager"],
    char: "👦",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Ok = {
    keywords: ["female", "woman", "teenager"],
    char: "👧",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Lk = {
    keywords: ["gender-neutral", "person"],
    char: "🧑",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Rk = {
    keywords: [
      "mustache",
      "father",
      "dad",
      "guy",
      "classy",
      "sir",
      "moustache",
    ],
    char: "👨",
    fitzpatrick_scale: !0,
    category: "people",
  },
  vk = {
    keywords: ["female", "girls", "lady"],
    char: "👩",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Bk = {
    keywords: ["woman", "female", "girl", "blonde", "person"],
    char: "👱‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Pk = {
    keywords: ["man", "male", "boy", "blonde", "guy", "person"],
    char: "👱",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Mk = {
    keywords: ["person", "bewhiskered"],
    char: "🧔",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Hk = {
    keywords: ["human", "elder", "senior", "gender-neutral"],
    char: "🧓",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Uk = {
    keywords: ["human", "male", "men", "old", "elder", "senior"],
    char: "👴",
    fitzpatrick_scale: !0,
    category: "people",
  },
  jk = {
    keywords: ["human", "female", "women", "lady", "old", "elder", "senior"],
    char: "👵",
    fitzpatrick_scale: !0,
    category: "people",
  },
  qk = {
    keywords: ["male", "boy", "chinese"],
    char: "👲",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Yk = {
    keywords: ["female", "hijab", "mantilla", "tichel"],
    char: "🧕",
    fitzpatrick_scale: !0,
    category: "people",
  },
  $k = {
    keywords: ["female", "indian", "hinduism", "arabs", "woman"],
    char: "👳‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Vk = {
    keywords: ["male", "indian", "hinduism", "arabs"],
    char: "👳",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Wk = {
    keywords: [
      "woman",
      "police",
      "law",
      "legal",
      "enforcement",
      "arrest",
      "911",
      "female",
    ],
    char: "👮‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Gk = {
    keywords: ["man", "police", "law", "legal", "enforcement", "arrest", "911"],
    char: "👮",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Qk = {
    keywords: [
      "female",
      "human",
      "wip",
      "build",
      "construction",
      "worker",
      "labor",
      "woman",
    ],
    char: "👷‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Xk = {
    keywords: [
      "male",
      "human",
      "wip",
      "guy",
      "build",
      "construction",
      "worker",
      "labor",
    ],
    char: "👷",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Kk = {
    keywords: ["uk", "gb", "british", "female", "royal", "woman"],
    char: "💂‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Jk = {
    keywords: ["uk", "gb", "british", "male", "guy", "royal"],
    char: "💂",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Zk = {
    keywords: ["human", "spy", "detective", "female", "woman"],
    char: "🕵️‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  eb = {
    keywords: ["human", "spy", "detective"],
    char: "🕵",
    fitzpatrick_scale: !0,
    category: "people",
  },
  tb = {
    keywords: ["doctor", "nurse", "therapist", "healthcare", "woman", "human"],
    char: "👩‍⚕️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  ab = {
    keywords: ["doctor", "nurse", "therapist", "healthcare", "man", "human"],
    char: "👨‍⚕️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  rb = {
    keywords: ["rancher", "gardener", "woman", "human"],
    char: "👩‍🌾",
    fitzpatrick_scale: !0,
    category: "people",
  },
  nb = {
    keywords: ["rancher", "gardener", "man", "human"],
    char: "👨‍🌾",
    fitzpatrick_scale: !0,
    category: "people",
  },
  ib = {
    keywords: ["chef", "woman", "human"],
    char: "👩‍🍳",
    fitzpatrick_scale: !0,
    category: "people",
  },
  sb = {
    keywords: ["chef", "man", "human"],
    char: "👨‍🍳",
    fitzpatrick_scale: !0,
    category: "people",
  },
  ob = {
    keywords: ["graduate", "woman", "human"],
    char: "👩‍🎓",
    fitzpatrick_scale: !0,
    category: "people",
  },
  cb = {
    keywords: ["graduate", "man", "human"],
    char: "👨‍🎓",
    fitzpatrick_scale: !0,
    category: "people",
  },
  ub = {
    keywords: ["rockstar", "entertainer", "woman", "human"],
    char: "👩‍🎤",
    fitzpatrick_scale: !0,
    category: "people",
  },
  lb = {
    keywords: ["rockstar", "entertainer", "man", "human"],
    char: "👨‍🎤",
    fitzpatrick_scale: !0,
    category: "people",
  },
  fb = {
    keywords: ["instructor", "professor", "woman", "human"],
    char: "👩‍🏫",
    fitzpatrick_scale: !0,
    category: "people",
  },
  hb = {
    keywords: ["instructor", "professor", "man", "human"],
    char: "👨‍🏫",
    fitzpatrick_scale: !0,
    category: "people",
  },
  db = {
    keywords: ["assembly", "industrial", "woman", "human"],
    char: "👩‍🏭",
    fitzpatrick_scale: !0,
    category: "people",
  },
  pb = {
    keywords: ["assembly", "industrial", "man", "human"],
    char: "👨‍🏭",
    fitzpatrick_scale: !0,
    category: "people",
  },
  _b = {
    keywords: [
      "coder",
      "developer",
      "engineer",
      "programmer",
      "software",
      "woman",
      "human",
      "laptop",
      "computer",
    ],
    char: "👩‍💻",
    fitzpatrick_scale: !0,
    category: "people",
  },
  mb = {
    keywords: [
      "coder",
      "developer",
      "engineer",
      "programmer",
      "software",
      "man",
      "human",
      "laptop",
      "computer",
    ],
    char: "👨‍💻",
    fitzpatrick_scale: !0,
    category: "people",
  },
  gb = {
    keywords: ["business", "manager", "woman", "human"],
    char: "👩‍💼",
    fitzpatrick_scale: !0,
    category: "people",
  },
  yb = {
    keywords: ["business", "manager", "man", "human"],
    char: "👨‍💼",
    fitzpatrick_scale: !0,
    category: "people",
  },
  kb = {
    keywords: ["plumber", "woman", "human", "wrench"],
    char: "👩‍🔧",
    fitzpatrick_scale: !0,
    category: "people",
  },
  bb = {
    keywords: ["plumber", "man", "human", "wrench"],
    char: "👨‍🔧",
    fitzpatrick_scale: !0,
    category: "people",
  },
  wb = {
    keywords: [
      "biologist",
      "chemist",
      "engineer",
      "physicist",
      "woman",
      "human",
    ],
    char: "👩‍🔬",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Eb = {
    keywords: ["biologist", "chemist", "engineer", "physicist", "man", "human"],
    char: "👨‍🔬",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Tb = {
    keywords: ["painter", "woman", "human"],
    char: "👩‍🎨",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Ab = {
    keywords: ["painter", "man", "human"],
    char: "👨‍🎨",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Cb = {
    keywords: ["fireman", "woman", "human"],
    char: "👩‍🚒",
    fitzpatrick_scale: !0,
    category: "people",
  },
  xb = {
    keywords: ["fireman", "man", "human"],
    char: "👨‍🚒",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Db = {
    keywords: ["aviator", "plane", "woman", "human"],
    char: "👩‍✈️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  zb = {
    keywords: ["aviator", "plane", "man", "human"],
    char: "👨‍✈️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Ib = {
    keywords: ["space", "rocket", "woman", "human"],
    char: "👩‍🚀",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Sb = {
    keywords: ["space", "rocket", "man", "human"],
    char: "👨‍🚀",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Nb = {
    keywords: ["justice", "court", "woman", "human"],
    char: "👩‍⚖️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Fb = {
    keywords: ["justice", "court", "man", "human"],
    char: "👨‍⚖️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Ob = {
    keywords: ["woman", "female", "good", "heroine", "superpowers"],
    char: "🦸‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Lb = {
    keywords: ["man", "male", "good", "hero", "superpowers"],
    char: "🦸‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Rb = {
    keywords: [
      "woman",
      "female",
      "evil",
      "bad",
      "criminal",
      "heroine",
      "superpowers",
    ],
    char: "🦹‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  vb = {
    keywords: ["man", "male", "evil", "bad", "criminal", "hero", "superpowers"],
    char: "🦹‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Bb = {
    keywords: ["woman", "female", "xmas", "mother christmas"],
    char: "🤶",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Pb = {
    keywords: ["festival", "man", "male", "xmas", "father christmas"],
    char: "🎅",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Mb = {
    keywords: ["woman", "female", "mage", "witch"],
    char: "🧙‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Hb = {
    keywords: ["man", "male", "mage", "sorcerer"],
    char: "🧙‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Ub = {
    keywords: ["woman", "female"],
    char: "🧝‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  jb = {
    keywords: ["man", "male"],
    char: "🧝‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  qb = {
    keywords: ["woman", "female"],
    char: "🧛‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Yb = {
    keywords: ["man", "male", "dracula"],
    char: "🧛‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  $b = {
    keywords: ["woman", "female", "undead", "walking dead"],
    char: "🧟‍♀️",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Vb = {
    keywords: ["man", "male", "dracula", "undead", "walking dead"],
    char: "🧟‍♂️",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Wb = {
    keywords: ["woman", "female"],
    char: "🧞‍♀️",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Gb = {
    keywords: ["man", "male"],
    char: "🧞‍♂️",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Qb = {
    keywords: ["woman", "female", "merwoman", "ariel"],
    char: "🧜‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Xb = {
    keywords: ["man", "male", "triton"],
    char: "🧜‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Kb = {
    keywords: ["woman", "female"],
    char: "🧚‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Jb = {
    keywords: ["man", "male"],
    char: "🧚‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  Zb = {
    keywords: ["heaven", "wings", "halo"],
    char: "👼",
    fitzpatrick_scale: !0,
    category: "people",
  },
  e1 = {
    keywords: ["baby"],
    char: "🤰",
    fitzpatrick_scale: !0,
    category: "people",
  },
  t1 = {
    keywords: ["nursing", "baby"],
    char: "🤱",
    fitzpatrick_scale: !0,
    category: "people",
  },
  a1 = {
    keywords: ["girl", "woman", "female", "blond", "crown", "royal", "queen"],
    char: "👸",
    fitzpatrick_scale: !0,
    category: "people",
  },
  r1 = {
    keywords: ["boy", "man", "male", "crown", "royal", "king"],
    char: "🤴",
    fitzpatrick_scale: !0,
    category: "people",
  },
  n1 = {
    keywords: ["couple", "marriage", "wedding", "woman", "bride"],
    char: "👰",
    fitzpatrick_scale: !0,
    category: "people",
  },
  i1 = {
    keywords: ["couple", "marriage", "wedding", "groom"],
    char: "🤵",
    fitzpatrick_scale: !0,
    category: "people",
  },
  s1 = {
    keywords: ["woman", "walking", "exercise", "race", "running", "female"],
    char: "🏃‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  o1 = {
    keywords: ["man", "walking", "exercise", "race", "running"],
    char: "🏃",
    fitzpatrick_scale: !0,
    category: "people",
  },
  c1 = {
    keywords: ["human", "feet", "steps", "woman", "female"],
    char: "🚶‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  u1 = {
    keywords: ["human", "feet", "steps"],
    char: "🚶",
    fitzpatrick_scale: !0,
    category: "people",
  },
  l1 = {
    keywords: ["female", "girl", "woman", "fun"],
    char: "💃",
    fitzpatrick_scale: !0,
    category: "people",
  },
  f1 = {
    keywords: ["male", "boy", "fun", "dancer"],
    char: "🕺",
    fitzpatrick_scale: !0,
    category: "people",
  },
  h1 = {
    keywords: ["female", "bunny", "women", "girls"],
    char: "👯",
    fitzpatrick_scale: !1,
    category: "people",
  },
  d1 = {
    keywords: ["male", "bunny", "men", "boys"],
    char: "👯‍♂️",
    fitzpatrick_scale: !1,
    category: "people",
  },
  p1 = {
    keywords: [
      "pair",
      "people",
      "human",
      "love",
      "date",
      "dating",
      "like",
      "affection",
      "valentines",
      "marriage",
    ],
    char: "👫",
    fitzpatrick_scale: !1,
    category: "people",
  },
  _1 = {
    keywords: [
      "pair",
      "couple",
      "love",
      "like",
      "bromance",
      "friendship",
      "people",
      "human",
    ],
    char: "👬",
    fitzpatrick_scale: !1,
    category: "people",
  },
  m1 = {
    keywords: [
      "pair",
      "friendship",
      "couple",
      "love",
      "like",
      "female",
      "people",
      "human",
    ],
    char: "👭",
    fitzpatrick_scale: !1,
    category: "people",
  },
  g1 = {
    keywords: ["woman", "female", "girl"],
    char: "🙇‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  y1 = {
    keywords: ["man", "male", "boy"],
    char: "🙇",
    fitzpatrick_scale: !0,
    category: "people",
  },
  k1 = {
    keywords: ["man", "male", "boy", "disbelief"],
    char: "🤦‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  b1 = {
    keywords: ["woman", "female", "girl", "disbelief"],
    char: "🤦‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  w1 = {
    keywords: ["woman", "female", "girl", "confused", "indifferent", "doubt"],
    char: "🤷",
    fitzpatrick_scale: !0,
    category: "people",
  },
  E1 = {
    keywords: ["man", "male", "boy", "confused", "indifferent", "doubt"],
    char: "🤷‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  T1 = {
    keywords: ["female", "girl", "woman", "human", "information"],
    char: "💁",
    fitzpatrick_scale: !0,
    category: "people",
  },
  A1 = {
    keywords: ["male", "boy", "man", "human", "information"],
    char: "💁‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  C1 = {
    keywords: ["female", "girl", "woman", "nope"],
    char: "🙅",
    fitzpatrick_scale: !0,
    category: "people",
  },
  x1 = {
    keywords: ["male", "boy", "man", "nope"],
    char: "🙅‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  D1 = {
    keywords: ["women", "girl", "female", "pink", "human", "woman"],
    char: "🙆",
    fitzpatrick_scale: !0,
    category: "people",
  },
  z1 = {
    keywords: ["men", "boy", "male", "blue", "human", "man"],
    char: "🙆‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  I1 = {
    keywords: ["female", "girl", "woman"],
    char: "🙋",
    fitzpatrick_scale: !0,
    category: "people",
  },
  S1 = {
    keywords: ["male", "boy", "man"],
    char: "🙋‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  N1 = {
    keywords: ["female", "girl", "woman"],
    char: "🙎",
    fitzpatrick_scale: !0,
    category: "people",
  },
  F1 = {
    keywords: ["male", "boy", "man"],
    char: "🙎‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  O1 = {
    keywords: [
      "female",
      "girl",
      "woman",
      "sad",
      "depressed",
      "discouraged",
      "unhappy",
    ],
    char: "🙍",
    fitzpatrick_scale: !0,
    category: "people",
  },
  L1 = {
    keywords: [
      "male",
      "boy",
      "man",
      "sad",
      "depressed",
      "discouraged",
      "unhappy",
    ],
    char: "🙍‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  R1 = {
    keywords: ["female", "girl", "woman"],
    char: "💇",
    fitzpatrick_scale: !0,
    category: "people",
  },
  v1 = {
    keywords: ["male", "boy", "man"],
    char: "💇‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  B1 = {
    keywords: ["female", "girl", "woman", "head"],
    char: "💆",
    fitzpatrick_scale: !0,
    category: "people",
  },
  P1 = {
    keywords: ["male", "boy", "man", "head"],
    char: "💆‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  M1 = {
    keywords: ["female", "woman", "spa", "steamroom", "sauna"],
    char: "🧖‍♀️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  H1 = {
    keywords: ["male", "man", "spa", "steamroom", "sauna"],
    char: "🧖‍♂️",
    fitzpatrick_scale: !0,
    category: "people",
  },
  U1 = {
    keywords: [
      "pair",
      "love",
      "like",
      "affection",
      "human",
      "dating",
      "valentines",
      "marriage",
    ],
    char: "💑",
    fitzpatrick_scale: !1,
    category: "people",
  },
  j1 = {
    keywords: [
      "pair",
      "love",
      "like",
      "affection",
      "human",
      "dating",
      "valentines",
      "marriage",
    ],
    char: "👩‍❤️‍👩",
    fitzpatrick_scale: !1,
    category: "people",
  },
  q1 = {
    keywords: [
      "pair",
      "love",
      "like",
      "affection",
      "human",
      "dating",
      "valentines",
      "marriage",
    ],
    char: "👨‍❤️‍👨",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Y1 = {
    keywords: ["pair", "valentines", "love", "like", "dating", "marriage"],
    char: "💏",
    fitzpatrick_scale: !1,
    category: "people",
  },
  $1 = {
    keywords: ["pair", "valentines", "love", "like", "dating", "marriage"],
    char: "👩‍❤️‍💋‍👩",
    fitzpatrick_scale: !1,
    category: "people",
  },
  V1 = {
    keywords: ["pair", "valentines", "love", "like", "dating", "marriage"],
    char: "👨‍❤️‍💋‍👨",
    fitzpatrick_scale: !1,
    category: "people",
  },
  W1 = {
    keywords: [
      "home",
      "parents",
      "child",
      "mom",
      "dad",
      "father",
      "mother",
      "people",
      "human",
    ],
    char: "👪",
    fitzpatrick_scale: !1,
    category: "people",
  },
  G1 = {
    keywords: ["home", "parents", "people", "human", "child"],
    char: "👨‍👩‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Q1 = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👨‍👩‍👧‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  X1 = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👨‍👩‍👦‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  K1 = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👨‍👩‍👧‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  J1 = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👩‍👩‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Z1 = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👩‍👩‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ew = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👩‍👩‍👧‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  tw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👩‍👩‍👦‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  aw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👩‍👩‍👧‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  rw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👨‍👨‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  nw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👨‍👨‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  iw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👨‍👨‍👧‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  sw = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👨‍👨‍👦‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ow = {
    keywords: ["home", "parents", "people", "human", "children"],
    char: "👨‍👨‍👧‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  cw = {
    keywords: ["home", "parent", "people", "human", "child"],
    char: "👩‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  uw = {
    keywords: ["home", "parent", "people", "human", "child"],
    char: "👩‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  lw = {
    keywords: ["home", "parent", "people", "human", "children"],
    char: "👩‍👧‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  fw = {
    keywords: ["home", "parent", "people", "human", "children"],
    char: "👩‍👦‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  hw = {
    keywords: ["home", "parent", "people", "human", "children"],
    char: "👩‍👧‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  dw = {
    keywords: ["home", "parent", "people", "human", "child"],
    char: "👨‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  pw = {
    keywords: ["home", "parent", "people", "human", "child"],
    char: "👨‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  _w = {
    keywords: ["home", "parent", "people", "human", "children"],
    char: "👨‍👧‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  mw = {
    keywords: ["home", "parent", "people", "human", "children"],
    char: "👨‍👦‍👦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  gw = {
    keywords: ["home", "parent", "people", "human", "children"],
    char: "👨‍👧‍👧",
    fitzpatrick_scale: !1,
    category: "people",
  },
  yw = {
    keywords: ["ball", "crochet", "knit"],
    char: "🧶",
    fitzpatrick_scale: !1,
    category: "people",
  },
  kw = {
    keywords: ["needle", "sewing", "spool", "string"],
    char: "🧵",
    fitzpatrick_scale: !1,
    category: "people",
  },
  bw = {
    keywords: ["jacket"],
    char: "🧥",
    fitzpatrick_scale: !1,
    category: "people",
  },
  ww = {
    keywords: ["doctor", "experiment", "scientist", "chemist"],
    char: "🥼",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ew = {
    keywords: ["fashion", "shopping_bags", "female"],
    char: "👚",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Tw = {
    keywords: ["fashion", "cloth", "casual", "shirt", "tee"],
    char: "👕",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Aw = {
    keywords: ["fashion", "shopping"],
    char: "👖",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Cw = {
    keywords: ["shirt", "suitup", "formal", "fashion", "cloth", "business"],
    char: "👔",
    fitzpatrick_scale: !1,
    category: "people",
  },
  xw = {
    keywords: ["clothes", "fashion", "shopping"],
    char: "👗",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Dw = {
    keywords: [
      "swimming",
      "female",
      "woman",
      "girl",
      "fashion",
      "beach",
      "summer",
    ],
    char: "👙",
    fitzpatrick_scale: !1,
    category: "people",
  },
  zw = {
    keywords: ["dress", "fashion", "women", "female", "japanese"],
    char: "👘",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Iw = {
    keywords: ["female", "girl", "fashion", "woman"],
    char: "💄",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Sw = {
    keywords: ["face", "lips", "love", "like", "affection", "valentines"],
    char: "💋",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Nw = {
    keywords: ["feet", "tracking", "walking", "beach"],
    char: "👣",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Fw = {
    keywords: ["ballet", "slip-on", "slipper"],
    char: "🥿",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ow = {
    keywords: ["fashion", "shoes", "female", "pumps", "stiletto"],
    char: "👠",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Lw = {
    keywords: ["shoes", "fashion", "flip flops"],
    char: "👡",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Rw = {
    keywords: ["shoes", "fashion"],
    char: "👢",
    fitzpatrick_scale: !1,
    category: "people",
  },
  vw = {
    keywords: ["fashion", "male"],
    char: "👞",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Bw = {
    keywords: ["shoes", "sports", "sneakers"],
    char: "👟",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Pw = {
    keywords: ["backpacking", "camping", "hiking"],
    char: "🥾",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Mw = {
    keywords: ["stockings", "clothes"],
    char: "🧦",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Hw = {
    keywords: ["hands", "winter", "clothes"],
    char: "🧤",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Uw = {
    keywords: ["neck", "winter", "clothes"],
    char: "🧣",
    fitzpatrick_scale: !1,
    category: "people",
  },
  jw = {
    keywords: ["fashion", "accessories", "female", "lady", "spring"],
    char: "👒",
    fitzpatrick_scale: !1,
    category: "people",
  },
  qw = {
    keywords: ["magic", "gentleman", "classy", "circus"],
    char: "🎩",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Yw = {
    keywords: ["cap", "baseball"],
    char: "🧢",
    fitzpatrick_scale: !1,
    category: "people",
  },
  $w = {
    keywords: ["construction", "build"],
    char: "⛑",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Vw = {
    keywords: [
      "school",
      "college",
      "degree",
      "university",
      "graduation",
      "cap",
      "hat",
      "legal",
      "learn",
      "education",
    ],
    char: "🎓",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Ww = {
    keywords: ["king", "kod", "leader", "royalty", "lord"],
    char: "👑",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Gw = {
    keywords: ["student", "education", "bag", "backpack"],
    char: "🎒",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Qw = {
    keywords: ["packing", "travel"],
    char: "🧳",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Xw = {
    keywords: ["bag", "accessories", "shopping"],
    char: "👝",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Kw = {
    keywords: ["fashion", "accessories", "money", "sales", "shopping"],
    char: "👛",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Jw = {
    keywords: ["fashion", "accessory", "accessories", "shopping"],
    char: "👜",
    fitzpatrick_scale: !1,
    category: "people",
  },
  Zw = {
    keywords: [
      "business",
      "documents",
      "work",
      "law",
      "legal",
      "job",
      "career",
    ],
    char: "💼",
    fitzpatrick_scale: !1,
    category: "people",
  },
  eE = {
    keywords: ["fashion", "accessories", "eyesight", "nerdy", "dork", "geek"],
    char: "👓",
    fitzpatrick_scale: !1,
    category: "people",
  },
  tE = {
    keywords: ["face", "cool", "accessories"],
    char: "🕶",
    fitzpatrick_scale: !1,
    category: "people",
  },
  aE = {
    keywords: ["eyes", "protection", "safety"],
    char: "🥽",
    fitzpatrick_scale: !1,
    category: "people",
  },
  rE = {
    keywords: [
      "wedding",
      "propose",
      "marriage",
      "valentines",
      "diamond",
      "fashion",
      "jewelry",
      "gem",
      "engagement",
    ],
    char: "💍",
    fitzpatrick_scale: !1,
    category: "people",
  },
  nE = {
    keywords: ["weather", "rain", "drizzle"],
    char: "🌂",
    fitzpatrick_scale: !1,
    category: "people",
  },
  iE = {
    keywords: [
      "animal",
      "friend",
      "nature",
      "woof",
      "puppy",
      "pet",
      "faithful",
    ],
    char: "🐶",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  sE = {
    keywords: ["animal", "meow", "nature", "pet", "kitten"],
    char: "🐱",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  oE = {
    keywords: ["animal", "nature", "cheese_wedge", "rodent"],
    char: "🐭",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  cE = {
    keywords: ["animal", "nature"],
    char: "🐹",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  uE = {
    keywords: ["animal", "nature", "pet", "spring", "magic", "bunny"],
    char: "🐰",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  lE = {
    keywords: ["animal", "nature", "face"],
    char: "🦊",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  fE = {
    keywords: ["animal", "nature", "wild"],
    char: "🐻",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  hE = {
    keywords: ["animal", "nature", "panda"],
    char: "🐼",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  dE = {
    keywords: ["animal", "nature"],
    char: "🐨",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  pE = {
    keywords: ["animal", "cat", "danger", "wild", "nature", "roar"],
    char: "🐯",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  _E = {
    keywords: ["animal", "nature"],
    char: "🦁",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  mE = {
    keywords: ["beef", "ox", "animal", "nature", "moo", "milk"],
    char: "🐮",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  gE = {
    keywords: ["animal", "oink", "nature"],
    char: "🐷",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  yE = {
    keywords: ["animal", "oink"],
    char: "🐽",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  kE = {
    keywords: ["animal", "nature", "croak", "toad"],
    char: "🐸",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  bE = {
    keywords: ["animal", "nature", "ocean", "sea"],
    char: "🦑",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  wE = {
    keywords: ["animal", "creature", "ocean", "sea", "nature", "beach"],
    char: "🐙",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  EE = {
    keywords: ["animal", "ocean", "nature", "seafood"],
    char: "🦐",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  TE = {
    keywords: ["animal", "nature", "circus"],
    char: "🐵",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  AE = {
    keywords: ["animal", "nature", "circus"],
    char: "🦍",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  CE = {
    keywords: ["monkey", "animal", "nature", "haha"],
    char: "🙈",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  xE = {
    keywords: ["animal", "monkey", "nature"],
    char: "🙉",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  DE = {
    keywords: ["monkey", "animal", "nature", "omg"],
    char: "🙊",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  zE = {
    keywords: ["animal", "nature", "banana", "circus"],
    char: "🐒",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  IE = {
    keywords: ["animal", "cluck", "nature", "bird"],
    char: "🐔",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  SE = {
    keywords: ["animal", "nature"],
    char: "🐧",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  NE = {
    keywords: ["animal", "nature", "fly", "tweet", "spring"],
    char: "🐦",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  FE = {
    keywords: ["animal", "chicken", "bird"],
    char: "🐤",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  OE = {
    keywords: ["animal", "chicken", "egg", "born", "baby", "bird"],
    char: "🐣",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  LE = {
    keywords: ["animal", "chicken", "baby", "bird"],
    char: "🐥",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  RE = {
    keywords: ["animal", "nature", "bird", "mallard"],
    char: "🦆",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  vE = {
    keywords: ["animal", "nature", "bird"],
    char: "🦅",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  BE = {
    keywords: ["animal", "nature", "bird", "hoot"],
    char: "🦉",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  PE = {
    keywords: ["animal", "nature", "blind", "vampire"],
    char: "🦇",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  ME = {
    keywords: ["animal", "nature", "wild"],
    char: "🐺",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  HE = {
    keywords: ["animal", "nature"],
    char: "🐗",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  UE = {
    keywords: ["animal", "brown", "nature"],
    char: "🐴",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  jE = {
    keywords: ["animal", "nature", "mystical"],
    char: "🦄",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  qE = {
    keywords: ["animal", "insect", "nature", "bug", "spring", "honey"],
    char: "🐝",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  YE = {
    keywords: ["animal", "insect", "nature", "worm"],
    char: "🐛",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  $E = {
    keywords: ["animal", "insect", "nature", "caterpillar"],
    char: "🦋",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  VE = {
    keywords: ["slow", "animal", "shell"],
    char: "🐌",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  WE = {
    keywords: ["animal", "insect", "nature", "ladybug"],
    char: "🐞",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  GE = {
    keywords: ["animal", "insect", "nature", "bug"],
    char: "🐜",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  QE = {
    keywords: ["animal", "cricket", "chirp"],
    char: "🦗",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  XE = {
    keywords: ["animal", "arachnid"],
    char: "🕷",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  KE = {
    keywords: ["animal", "arachnid"],
    char: "🦂",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  JE = {
    keywords: ["animal", "crustacean"],
    char: "🦀",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  ZE = {
    keywords: ["animal", "evil", "nature", "hiss", "python"],
    char: "🐍",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  eT = {
    keywords: ["animal", "nature", "reptile"],
    char: "🦎",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  tT = {
    keywords: [
      "animal",
      "nature",
      "dinosaur",
      "brachiosaurus",
      "brontosaurus",
      "diplodocus",
      "extinct",
    ],
    char: "🦕",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  aT = {
    keywords: ["animal", "slow", "nature", "tortoise"],
    char: "🐢",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  rT = {
    keywords: ["animal", "swim", "ocean", "beach", "nemo"],
    char: "🐠",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  nT = {
    keywords: ["animal", "food", "nature"],
    char: "🐟",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  iT = {
    keywords: ["animal", "nature", "food", "sea", "ocean"],
    char: "🐡",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  sT = {
    keywords: [
      "animal",
      "nature",
      "fish",
      "sea",
      "ocean",
      "flipper",
      "fins",
      "beach",
    ],
    char: "🐬",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  oT = {
    keywords: [
      "animal",
      "nature",
      "fish",
      "sea",
      "ocean",
      "jaws",
      "fins",
      "beach",
    ],
    char: "🦈",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  cT = {
    keywords: ["animal", "nature", "sea", "ocean"],
    char: "🐳",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  uT = {
    keywords: ["animal", "nature", "sea", "ocean"],
    char: "🐋",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  lT = {
    keywords: ["animal", "nature", "reptile", "lizard", "alligator"],
    char: "🐊",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  fT = {
    keywords: ["animal", "nature"],
    char: "🐆",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  hT = {
    keywords: ["animal", "nature", "stripes", "safari"],
    char: "🦓",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  dT = {
    keywords: ["animal", "nature", "roar"],
    char: "🐅",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  pT = {
    keywords: ["animal", "nature", "ox", "cow"],
    char: "🐃",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  _T = {
    keywords: ["animal", "cow", "beef"],
    char: "🐂",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  mT = {
    keywords: ["beef", "ox", "animal", "nature", "moo", "milk"],
    char: "🐄",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  gT = {
    keywords: ["animal", "nature", "horns", "venison"],
    char: "🦌",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  yT = {
    keywords: ["animal", "hot", "desert", "hump"],
    char: "🐪",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  kT = {
    keywords: ["animal", "nature", "hot", "desert", "hump"],
    char: "🐫",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  bT = {
    keywords: ["animal", "nature", "spots", "safari"],
    char: "🦒",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  wT = {
    keywords: ["animal", "nature", "nose", "th", "circus"],
    char: "🐘",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  ET = {
    keywords: ["animal", "nature", "horn"],
    char: "🦏",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  TT = {
    keywords: ["animal", "nature"],
    char: "🐐",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  AT = {
    keywords: ["animal", "sheep", "nature"],
    char: "🐏",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  CT = {
    keywords: ["animal", "nature", "wool", "shipit"],
    char: "🐑",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  xT = {
    keywords: ["animal", "gamble", "luck"],
    char: "🐎",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  DT = {
    keywords: ["animal", "nature"],
    char: "🐖",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  zT = {
    keywords: ["animal", "mouse", "rodent"],
    char: "🐀",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  IT = {
    keywords: ["animal", "nature", "rodent"],
    char: "🐁",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  ST = {
    keywords: ["animal", "nature", "chicken"],
    char: "🐓",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  NT = {
    keywords: ["animal", "bird"],
    char: "🦃",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  FT = {
    keywords: ["animal", "bird"],
    char: "🕊",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  OT = {
    keywords: ["animal", "nature", "friend", "doge", "pet", "faithful"],
    char: "🐕",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  LT = {
    keywords: ["dog", "animal", "101", "nature", "pet"],
    char: "🐩",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  RT = {
    keywords: ["animal", "meow", "pet", "cats"],
    char: "🐈",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  vT = {
    keywords: ["animal", "nature", "pet", "magic", "spring"],
    char: "🐇",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  BT = {
    keywords: ["animal", "nature", "rodent", "squirrel"],
    char: "🐿",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  PT = {
    keywords: ["animal", "nature", "spiny"],
    char: "🦔",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  MT = {
    keywords: ["animal", "nature"],
    char: "🦝",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  HT = {
    keywords: ["animal", "nature", "alpaca"],
    char: "🦙",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  UT = {
    keywords: ["animal", "nature"],
    char: "🦛",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  jT = {
    keywords: ["animal", "nature", "australia", "joey", "hop", "marsupial"],
    char: "🦘",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  qT = {
    keywords: ["animal", "nature", "honey"],
    char: "🦡",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  YT = {
    keywords: ["animal", "nature", "bird"],
    char: "🦢",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  $T = {
    keywords: ["animal", "nature", "peahen", "bird"],
    char: "🦚",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  VT = {
    keywords: ["animal", "nature", "bird", "pirate", "talk"],
    char: "🦜",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  WT = {
    keywords: ["animal", "nature", "bisque", "claws", "seafood"],
    char: "🦞",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  GT = {
    keywords: ["animal", "nature", "insect", "malaria"],
    char: "🦟",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  QT = {
    keywords: ["animal", "tracking", "footprints", "dog", "cat", "pet", "feet"],
    char: "🐾",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  XT = {
    keywords: ["animal", "myth", "nature", "chinese", "green"],
    char: "🐉",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  KT = {
    keywords: ["animal", "myth", "nature", "chinese", "green"],
    char: "🐲",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  JT = {
    keywords: ["vegetable", "plant", "nature"],
    char: "🌵",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  ZT = {
    keywords: ["festival", "vacation", "december", "xmas", "celebration"],
    char: "🎄",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  eA = {
    keywords: ["plant", "nature"],
    char: "🌲",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  tA = {
    keywords: ["plant", "nature"],
    char: "🌳",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  aA = {
    keywords: [
      "plant",
      "vegetable",
      "nature",
      "summer",
      "beach",
      "mojito",
      "tropical",
    ],
    char: "🌴",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  rA = {
    keywords: ["plant", "nature", "grass", "lawn", "spring"],
    char: "🌱",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  nA = {
    keywords: ["vegetable", "plant", "medicine", "weed", "grass", "lawn"],
    char: "🌿",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  iA = {
    keywords: ["vegetable", "plant", "nature", "irish", "clover"],
    char: "☘",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  sA = {
    keywords: ["vegetable", "plant", "nature", "lucky", "irish"],
    char: "🍀",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  oA = {
    keywords: ["plant", "nature", "vegetable", "panda", "pine_decoration"],
    char: "🎍",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  cA = {
    keywords: ["plant", "nature", "branch", "summer"],
    char: "🎋",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  uA = {
    keywords: [
      "nature",
      "plant",
      "tree",
      "vegetable",
      "grass",
      "lawn",
      "spring",
    ],
    char: "🍃",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  lA = {
    keywords: ["nature", "plant", "vegetable", "leaves"],
    char: "🍂",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  fA = {
    keywords: ["nature", "plant", "vegetable", "ca", "fall"],
    char: "🍁",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  hA = {
    keywords: ["nature", "plant"],
    char: "🌾",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  dA = {
    keywords: ["plant", "vegetable", "flowers", "beach"],
    char: "🌺",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  pA = {
    keywords: ["nature", "plant", "fall"],
    char: "🌻",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  _A = {
    keywords: ["flowers", "valentines", "love", "spring"],
    char: "🌹",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  mA = {
    keywords: ["plant", "nature", "flower"],
    char: "🥀",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  gA = {
    keywords: ["flowers", "plant", "nature", "summer", "spring"],
    char: "🌷",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  yA = {
    keywords: ["nature", "flowers", "yellow"],
    char: "🌼",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  kA = {
    keywords: ["nature", "plant", "spring", "flower"],
    char: "🌸",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  bA = {
    keywords: ["flowers", "nature", "spring"],
    char: "💐",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  wA = {
    keywords: ["plant", "vegetable"],
    char: "🍄",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  EA = {
    keywords: ["food", "squirrel"],
    char: "🌰",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  TA = {
    keywords: ["halloween", "light", "pumpkin", "creepy", "fall"],
    char: "🎃",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  AA = {
    keywords: ["nature", "sea", "beach"],
    char: "🐚",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  CA = {
    keywords: ["animal", "insect", "arachnid", "silk"],
    char: "🕸",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  xA = {
    keywords: ["globe", "world", "USA", "international"],
    char: "🌎",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  DA = {
    keywords: ["globe", "world", "international"],
    char: "🌍",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  zA = {
    keywords: ["globe", "world", "east", "international"],
    char: "🌏",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  IA = {
    keywords: [
      "nature",
      "yellow",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌕",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  SA = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
      "waxing_gibbous_moon",
    ],
    char: "🌖",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  NA = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌗",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  FA = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌘",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  OA = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌑",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  LA = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌒",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  RA = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌓",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  vA = {
    keywords: [
      "nature",
      "night",
      "sky",
      "gray",
      "twilight",
      "planet",
      "space",
      "evening",
      "sleep",
    ],
    char: "🌔",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  BA = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌚",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  PA = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌝",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  MA = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌛",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  HA = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
    ],
    char: "🌜",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  UA = {
    keywords: ["nature", "morning", "sky"],
    char: "🌞",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  jA = {
    keywords: ["night", "sleep", "sky", "evening", "magic"],
    char: "🌙",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  qA = {
    keywords: ["night", "yellow"],
    char: "⭐",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  YA = {
    keywords: ["night", "sparkle", "awesome", "good", "magic"],
    char: "🌟",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  $A = {
    keywords: ["star", "sparkle", "shoot", "magic"],
    char: "💫",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  VA = {
    keywords: ["stars", "shine", "shiny", "cool", "awesome", "good", "magic"],
    char: "✨",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  WA = {
    keywords: ["space"],
    char: "☄",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  GA = {
    keywords: ["weather", "nature", "brightness", "summer", "beach", "spring"],
    char: "☀️",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  QA = {
    keywords: ["weather"],
    char: "🌤",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  XA = {
    keywords: ["weather", "nature", "cloudy", "morning", "fall", "spring"],
    char: "⛅",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  KA = {
    keywords: ["weather"],
    char: "🌥",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  JA = {
    keywords: ["weather"],
    char: "🌦",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  ZA = {
    keywords: ["weather", "sky"],
    char: "☁️",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  e2 = {
    keywords: ["weather"],
    char: "🌧",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  t2 = {
    keywords: ["weather", "lightning"],
    char: "⛈",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  a2 = {
    keywords: ["weather", "thunder"],
    char: "🌩",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  r2 = {
    keywords: ["thunder", "weather", "lightning bolt", "fast"],
    char: "⚡",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  n2 = {
    keywords: ["hot", "cook", "flame"],
    char: "🔥",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  i2 = {
    keywords: ["bomb", "explode", "explosion", "collision", "blown"],
    char: "💥",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  s2 = {
    keywords: ["winter", "season", "cold", "weather", "christmas", "xmas"],
    char: "❄️",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  o2 = {
    keywords: ["weather"],
    char: "🌨",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  c2 = {
    keywords: [
      "winter",
      "season",
      "cold",
      "weather",
      "christmas",
      "xmas",
      "frozen",
      "without_snow",
    ],
    char: "⛄",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  u2 = {
    keywords: [
      "winter",
      "season",
      "cold",
      "weather",
      "christmas",
      "xmas",
      "frozen",
    ],
    char: "☃",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  l2 = {
    keywords: ["gust", "air"],
    char: "🌬",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  f2 = {
    keywords: ["wind", "air", "fast", "shoo", "fart", "smoke", "puff"],
    char: "💨",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  h2 = {
    keywords: ["weather", "cyclone", "twister"],
    char: "🌪",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  d2 = {
    keywords: ["weather"],
    char: "🌫",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  p2 = {
    keywords: ["weather", "spring"],
    char: "☂",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  _2 = {
    keywords: ["rainy", "weather", "spring"],
    char: "☔",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  m2 = {
    keywords: ["water", "drip", "faucet", "spring"],
    char: "💧",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  g2 = {
    keywords: ["water", "drip", "oops"],
    char: "💦",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  y2 = {
    keywords: ["sea", "water", "wave", "nature", "tsunami", "disaster"],
    char: "🌊",
    fitzpatrick_scale: !1,
    category: "animals_and_nature",
  },
  k2 = {
    keywords: ["fruit", "nature"],
    char: "🍏",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  b2 = {
    keywords: ["fruit", "mac", "school"],
    char: "🍎",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  w2 = {
    keywords: ["fruit", "nature", "food"],
    char: "🍐",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  E2 = {
    keywords: ["food", "fruit", "nature", "orange"],
    char: "🍊",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  T2 = {
    keywords: ["fruit", "nature"],
    char: "🍋",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  A2 = {
    keywords: ["fruit", "food", "monkey"],
    char: "🍌",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  C2 = {
    keywords: ["fruit", "food", "picnic", "summer"],
    char: "🍉",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  x2 = {
    keywords: ["fruit", "food", "wine"],
    char: "🍇",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  D2 = {
    keywords: ["fruit", "food", "nature"],
    char: "🍓",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  z2 = {
    keywords: ["fruit", "nature", "food"],
    char: "🍈",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  I2 = {
    keywords: ["food", "fruit"],
    char: "🍒",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  S2 = {
    keywords: ["fruit", "nature", "food"],
    char: "🍑",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  N2 = {
    keywords: ["fruit", "nature", "food"],
    char: "🍍",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  F2 = {
    keywords: ["fruit", "nature", "food", "palm"],
    char: "🥥",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  O2 = {
    keywords: ["fruit", "food"],
    char: "🥝",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  L2 = {
    keywords: ["fruit", "food", "tropical"],
    char: "🥭",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  R2 = {
    keywords: ["fruit", "food"],
    char: "🥑",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  v2 = {
    keywords: ["fruit", "food", "vegetable"],
    char: "🥦",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  B2 = {
    keywords: ["fruit", "vegetable", "nature", "food"],
    char: "🍅",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  P2 = {
    keywords: ["vegetable", "nature", "food", "aubergine"],
    char: "🍆",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  M2 = {
    keywords: ["fruit", "food", "pickle"],
    char: "🥒",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  H2 = {
    keywords: ["vegetable", "food", "orange"],
    char: "🥕",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  U2 = {
    keywords: ["food", "spicy", "chilli", "chili"],
    char: "🌶",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  j2 = {
    keywords: ["food", "tuber", "vegatable", "starch"],
    char: "🥔",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  q2 = {
    keywords: ["food", "vegetable", "plant"],
    char: "🌽",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Y2 = {
    keywords: [
      "food",
      "vegetable",
      "plant",
      "bok choy",
      "cabbage",
      "kale",
      "lettuce",
    ],
    char: "🥬",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  $2 = {
    keywords: ["food", "nature"],
    char: "🍠",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  V2 = {
    keywords: ["food", "nut"],
    char: "🥜",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  W2 = {
    keywords: ["bees", "sweet", "kitchen"],
    char: "🍯",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  G2 = {
    keywords: ["food", "bread", "french"],
    char: "🥐",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Q2 = {
    keywords: ["food", "wheat", "breakfast", "toast"],
    char: "🍞",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  X2 = {
    keywords: ["food", "bread", "french"],
    char: "🥖",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  K2 = {
    keywords: ["food", "bread", "bakery", "schmear"],
    char: "🥯",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  J2 = {
    keywords: ["food", "bread", "twisted"],
    char: "🥨",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  Z2 = {
    keywords: ["food", "chadder"],
    char: "🧀",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  eC = {
    keywords: ["food", "chicken", "breakfast"],
    char: "🥚",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  tC = {
    keywords: ["food", "breakfast", "pork", "pig", "meat"],
    char: "🥓",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  aC = {
    keywords: ["food", "cow", "meat", "cut", "chop", "lambchop", "porkchop"],
    char: "🥩",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  rC = {
    keywords: ["food", "breakfast", "flapjacks", "hotcakes"],
    char: "🥞",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  nC = {
    keywords: ["food", "meat", "drumstick", "bird", "chicken", "turkey"],
    char: "🍗",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  iC = {
    keywords: ["good", "food", "drumstick"],
    char: "🍖",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  sC = {
    keywords: ["skeleton"],
    char: "🦴",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  oC = {
    keywords: ["food", "animal", "appetizer", "summer"],
    char: "🍤",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  cC = {
    keywords: ["food", "breakfast", "kitchen", "egg"],
    char: "🍳",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  uC = {
    keywords: [
      "meat",
      "fast food",
      "beef",
      "cheeseburger",
      "mcdonalds",
      "burger king",
    ],
    char: "🍔",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  lC = {
    keywords: ["chips", "snack", "fast food"],
    char: "🍟",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  fC = {
    keywords: ["food", "flatbread", "stuffed", "gyro"],
    char: "🥙",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  hC = {
    keywords: ["food", "frankfurter"],
    char: "🌭",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  dC = {
    keywords: ["food", "party"],
    char: "🍕",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  pC = {
    keywords: ["food", "lunch", "bread"],
    char: "🥪",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  _C = {
    keywords: ["food", "soup"],
    char: "🥫",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  mC = {
    keywords: ["food", "italian", "noodle"],
    char: "🍝",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  gC = {
    keywords: ["food", "mexican"],
    char: "🌮",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  yC = {
    keywords: ["food", "mexican"],
    char: "🌯",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  kC = {
    keywords: ["food", "healthy", "lettuce"],
    char: "🥗",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  bC = {
    keywords: ["food", "cooking", "casserole", "paella"],
    char: "🥘",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  wC = {
    keywords: ["food", "japanese", "noodle", "chopsticks"],
    char: "🍜",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  EC = {
    keywords: ["food", "meat", "soup"],
    char: "🍲",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  TC = {
    keywords: [
      "food",
      "japan",
      "sea",
      "beach",
      "narutomaki",
      "pink",
      "swirl",
      "kamaboko",
      "surimi",
      "ramen",
    ],
    char: "🍥",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  AC = {
    keywords: ["food", "prophecy"],
    char: "🥠",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  CC = {
    keywords: ["food", "fish", "japanese", "rice"],
    char: "🍣",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  xC = {
    keywords: ["food", "japanese", "box"],
    char: "🍱",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  DC = {
    keywords: ["food", "spicy", "hot", "indian"],
    char: "🍛",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  zC = {
    keywords: ["food", "japanese"],
    char: "🍙",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  IC = {
    keywords: ["food", "china", "asian"],
    char: "🍚",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  SC = {
    keywords: ["food", "japanese"],
    char: "🍘",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  NC = {
    keywords: ["food", "japanese"],
    char: "🍢",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  FC = {
    keywords: ["food", "dessert", "sweet", "japanese", "barbecue", "meat"],
    char: "🍡",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  OC = {
    keywords: ["hot", "dessert", "summer"],
    char: "🍧",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  LC = {
    keywords: ["food", "hot", "dessert"],
    char: "🍨",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  RC = {
    keywords: ["food", "hot", "dessert", "summer"],
    char: "🍦",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  vC = {
    keywords: ["food", "dessert", "pastry"],
    char: "🥧",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  BC = {
    keywords: ["food", "dessert"],
    char: "🍰",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  PC = {
    keywords: ["food", "dessert", "bakery", "sweet"],
    char: "🧁",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  MC = {
    keywords: ["food", "autumn"],
    char: "🥮",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  HC = {
    keywords: ["food", "dessert", "cake"],
    char: "🎂",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  UC = {
    keywords: ["dessert", "food"],
    char: "🍮",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  jC = {
    keywords: ["snack", "dessert", "sweet", "lolly"],
    char: "🍬",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  qC = {
    keywords: ["food", "snack", "candy", "sweet"],
    char: "🍭",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  YC = {
    keywords: ["food", "snack", "dessert", "sweet"],
    char: "🍫",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  $C = {
    keywords: ["food", "movie theater", "films", "snack"],
    char: "🍿",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  VC = {
    keywords: ["food", "empanada", "pierogi", "potsticker"],
    char: "🥟",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  WC = {
    keywords: ["food", "dessert", "snack", "sweet", "donut"],
    char: "🍩",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  GC = {
    keywords: ["food", "snack", "oreo", "chocolate", "sweet", "dessert"],
    char: "🍪",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  QC = {
    keywords: ["beverage", "drink", "cow"],
    char: "🥛",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  XC = {
    keywords: [
      "relax",
      "beverage",
      "drink",
      "drunk",
      "party",
      "pub",
      "summer",
      "alcohol",
      "booze",
    ],
    char: "🍺",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  KC = {
    keywords: [
      "relax",
      "beverage",
      "drink",
      "drunk",
      "party",
      "pub",
      "summer",
      "alcohol",
      "booze",
    ],
    char: "🍻",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  JC = {
    keywords: [
      "beverage",
      "drink",
      "party",
      "alcohol",
      "celebrate",
      "cheers",
      "wine",
      "champagne",
      "toast",
    ],
    char: "🥂",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  ZC = {
    keywords: ["drink", "beverage", "drunk", "alcohol", "booze"],
    char: "🍷",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  e3 = {
    keywords: [
      "drink",
      "beverage",
      "drunk",
      "alcohol",
      "liquor",
      "booze",
      "bourbon",
      "scotch",
      "whisky",
      "glass",
      "shot",
    ],
    char: "🥃",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  t3 = {
    keywords: ["drink", "drunk", "alcohol", "beverage", "booze", "mojito"],
    char: "🍸",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  a3 = {
    keywords: [
      "beverage",
      "cocktail",
      "summer",
      "beach",
      "alcohol",
      "booze",
      "mojito",
    ],
    char: "🍹",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  r3 = {
    keywords: ["drink", "wine", "bottle", "celebration"],
    char: "🍾",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  n3 = {
    keywords: [
      "wine",
      "drink",
      "drunk",
      "beverage",
      "japanese",
      "alcohol",
      "booze",
    ],
    char: "🍶",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  i3 = {
    keywords: ["drink", "bowl", "breakfast", "green", "british"],
    char: "🍵",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  s3 = {
    keywords: ["drink", "soda"],
    char: "🥤",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  o3 = {
    keywords: ["beverage", "caffeine", "latte", "espresso"],
    char: "☕",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  c3 = {
    keywords: ["food", "container", "milk"],
    char: "🍼",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  u3 = {
    keywords: ["condiment", "shaker"],
    char: "🧂",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  l3 = {
    keywords: ["cutlery", "kitchen", "tableware"],
    char: "🥄",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  f3 = {
    keywords: ["cutlery", "kitchen"],
    char: "🍴",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  h3 = {
    keywords: ["food", "eat", "meal", "lunch", "dinner", "restaurant"],
    char: "🍽",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  d3 = {
    keywords: ["food", "breakfast", "cereal", "oatmeal", "porridge"],
    char: "🥣",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  p3 = {
    keywords: ["food", "leftovers"],
    char: "🥡",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  _3 = {
    keywords: ["food"],
    char: "🥢",
    fitzpatrick_scale: !1,
    category: "food_and_drink",
  },
  m3 = {
    keywords: ["sports", "football"],
    char: "⚽",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  g3 = {
    keywords: ["sports", "balls", "NBA"],
    char: "🏀",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  y3 = {
    keywords: ["sports", "balls", "NFL"],
    char: "🏈",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  k3 = {
    keywords: ["sports", "balls"],
    char: "⚾",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  b3 = {
    keywords: ["sports", "balls"],
    char: "🥎",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  w3 = {
    keywords: ["sports", "balls", "green"],
    char: "🎾",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  E3 = {
    keywords: ["sports", "balls"],
    char: "🏐",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  T3 = {
    keywords: ["sports", "team"],
    char: "🏉",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  A3 = {
    keywords: ["sports", "frisbee", "ultimate"],
    char: "🥏",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  C3 = {
    keywords: ["sports", "business", "flag", "hole", "summer"],
    char: "⛳",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  x3 = {
    keywords: ["sports", "business", "woman", "female"],
    char: "🏌️‍♀️",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  D3 = {
    keywords: ["sports", "business"],
    char: "🏌",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  z3 = {
    keywords: ["sports", "pingpong"],
    char: "🏓",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  I3 = {
    keywords: ["sports"],
    char: "🏸",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  S3 = {
    keywords: ["sports"],
    char: "🥅",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  N3 = {
    keywords: ["sports"],
    char: "🏒",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  F3 = {
    keywords: ["sports"],
    char: "🏑",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  O3 = {
    keywords: ["sports", "ball", "stick"],
    char: "🥍",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  L3 = {
    keywords: ["sports"],
    char: "🏏",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  R3 = {
    keywords: ["sports", "winter", "cold", "snow"],
    char: "🎿",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  v3 = {
    keywords: ["sports", "winter", "snow"],
    char: "⛷",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  B3 = {
    keywords: ["sports", "winter"],
    char: "🏂",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  P3 = {
    keywords: ["sports", "fencing", "sword"],
    char: "🤺",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  M3 = {
    keywords: ["sports", "wrestlers"],
    char: "🤼‍♀️",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  H3 = {
    keywords: ["sports", "wrestlers"],
    char: "🤼‍♂️",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  U3 = {
    keywords: ["gymnastics"],
    char: "🤸‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  j3 = {
    keywords: ["gymnastics"],
    char: "🤸‍♂️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  q3 = {
    keywords: ["sports"],
    char: "🤾‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Y3 = {
    keywords: ["sports"],
    char: "🤾‍♂️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  $3 = {
    keywords: ["sports"],
    char: "⛸",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  V3 = {
    keywords: ["sports"],
    char: "🥌",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  W3 = {
    keywords: ["board"],
    char: "🛹",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  G3 = {
    keywords: ["sleigh", "luge", "toboggan"],
    char: "🛷",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Q3 = {
    keywords: ["sports"],
    char: "🏹",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  X3 = {
    keywords: ["food", "hobby", "summer"],
    char: "🎣",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  K3 = {
    keywords: ["sports", "fighting"],
    char: "🥊",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  J3 = {
    keywords: ["judo", "karate", "taekwondo"],
    char: "🥋",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Z3 = {
    keywords: ["sports", "hobby", "water", "ship", "woman", "female"],
    char: "🚣‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  ex = {
    keywords: ["sports", "hobby", "water", "ship"],
    char: "🚣",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  tx = {
    keywords: ["sports", "hobby", "woman", "female", "rock"],
    char: "🧗‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  ax = {
    keywords: ["sports", "hobby", "man", "male", "rock"],
    char: "🧗‍♂️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  rx = {
    keywords: [
      "sports",
      "exercise",
      "human",
      "athlete",
      "water",
      "summer",
      "woman",
      "female",
    ],
    char: "🏊‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  nx = {
    keywords: ["sports", "exercise", "human", "athlete", "water", "summer"],
    char: "🏊",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  ix = {
    keywords: ["sports", "pool"],
    char: "🤽‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  sx = {
    keywords: ["sports", "pool"],
    char: "🤽‍♂️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  ox = {
    keywords: [
      "woman",
      "female",
      "meditation",
      "yoga",
      "serenity",
      "zen",
      "mindfulness",
    ],
    char: "🧘‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  cx = {
    keywords: [
      "man",
      "male",
      "meditation",
      "yoga",
      "serenity",
      "zen",
      "mindfulness",
    ],
    char: "🧘‍♂️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  ux = {
    keywords: ["sports", "ocean", "sea", "summer", "beach", "woman", "female"],
    char: "🏄‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  lx = {
    keywords: ["sports", "ocean", "sea", "summer", "beach"],
    char: "🏄",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  fx = {
    keywords: ["clean", "shower", "bathroom"],
    char: "🛀",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  hx = {
    keywords: ["sports", "human", "woman", "female"],
    char: "⛹️‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  dx = {
    keywords: ["sports", "human"],
    char: "⛹",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  px = {
    keywords: ["sports", "training", "exercise", "woman", "female"],
    char: "🏋️‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  _x = {
    keywords: ["sports", "training", "exercise"],
    char: "🏋",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  mx = {
    keywords: ["sports", "bike", "exercise", "hipster", "woman", "female"],
    char: "🚴‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  gx = {
    keywords: ["sports", "bike", "exercise", "hipster"],
    char: "🚴",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  yx = {
    keywords: [
      "transportation",
      "sports",
      "human",
      "race",
      "bike",
      "woman",
      "female",
    ],
    char: "🚵‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  kx = {
    keywords: ["transportation", "sports", "human", "race", "bike"],
    char: "🚵",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  bx = {
    keywords: ["animal", "betting", "competition", "gambling", "luck"],
    char: "🏇",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  wx = {
    keywords: ["suit", "business", "levitate", "hover", "jump"],
    char: "🕴",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Ex = {
    keywords: ["win", "award", "contest", "place", "ftw", "ceremony"],
    char: "🏆",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Tx = {
    keywords: ["play", "pageant"],
    char: "🎽",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Ax = {
    keywords: ["award", "winning"],
    char: "🏅",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Cx = {
    keywords: ["award", "winning", "army"],
    char: "🎖",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  xx = {
    keywords: ["sports", "cause", "support", "awareness"],
    char: "🎗",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Dx = {
    keywords: ["flower", "decoration", "military"],
    char: "🏵",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  zx = {
    keywords: ["event", "concert", "pass"],
    char: "🎫",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Ix = {
    keywords: ["sports", "concert", "entrance"],
    char: "🎟",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Sx = {
    keywords: ["acting", "theater", "drama"],
    char: "🎭",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Nx = {
    keywords: ["design", "paint", "draw", "colors"],
    char: "🎨",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Fx = {
    keywords: ["festival", "carnival", "party"],
    char: "🎪",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Ox = {
    keywords: ["juggle", "balance", "skill", "multitask"],
    char: "🤹‍♀️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Lx = {
    keywords: ["juggle", "balance", "skill", "multitask"],
    char: "🤹‍♂️",
    fitzpatrick_scale: !0,
    category: "activity",
  },
  Rx = {
    keywords: ["sound", "music", "PA", "sing", "talkshow"],
    char: "🎤",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  vx = {
    keywords: ["music", "score", "gadgets"],
    char: "🎧",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Bx = {
    keywords: ["treble", "clef", "compose"],
    char: "🎼",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Px = {
    keywords: ["piano", "instrument", "compose"],
    char: "🎹",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Mx = {
    keywords: ["music", "instrument", "drumsticks", "snare"],
    char: "🥁",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Hx = {
    keywords: ["music", "instrument", "jazz", "blues"],
    char: "🎷",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Ux = {
    keywords: ["music", "brass"],
    char: "🎺",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  jx = {
    keywords: ["music", "instrument"],
    char: "🎸",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  qx = {
    keywords: ["music", "instrument", "orchestra", "symphony"],
    char: "🎻",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Yx = {
    keywords: ["movie", "film", "record"],
    char: "🎬",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  $x = {
    keywords: ["play", "console", "PS4", "controller"],
    char: "🎮",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Vx = {
    keywords: ["game", "arcade", "play"],
    char: "👾",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Wx = {
    keywords: ["game", "play", "bar", "target", "bullseye"],
    char: "🎯",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Gx = {
    keywords: ["dice", "random", "tabletop", "play", "luck"],
    char: "🎲",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Qx = {
    keywords: ["expendable"],
    char: "♟",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Xx = {
    keywords: ["bet", "gamble", "vegas", "fruit machine", "luck", "casino"],
    char: "🎰",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Kx = {
    keywords: ["interlocking", "puzzle", "piece"],
    char: "🧩",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Jx = {
    keywords: ["sports", "fun", "play"],
    char: "🎳",
    fitzpatrick_scale: !1,
    category: "activity",
  },
  Zx = {
    keywords: ["red", "transportation", "vehicle"],
    char: "🚗",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  eD = {
    keywords: ["uber", "vehicle", "cars", "transportation"],
    char: "🚕",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  tD = {
    keywords: ["transportation", "vehicle"],
    char: "🚙",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  aD = {
    keywords: ["car", "vehicle", "transportation"],
    char: "🚌",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  rD = {
    keywords: ["bart", "transportation", "vehicle"],
    char: "🚎",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  nD = {
    keywords: ["sports", "race", "fast", "formula", "f1"],
    char: "🏎",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  iD = {
    keywords: [
      "vehicle",
      "cars",
      "transportation",
      "law",
      "legal",
      "enforcement",
    ],
    char: "🚓",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  sD = {
    keywords: ["health", "911", "hospital"],
    char: "🚑",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  oD = {
    keywords: ["transportation", "cars", "vehicle"],
    char: "🚒",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  cD = {
    keywords: ["vehicle", "car", "transportation"],
    char: "🚐",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  uD = {
    keywords: ["cars", "transportation"],
    char: "🚚",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  lD = {
    keywords: ["vehicle", "cars", "transportation", "express"],
    char: "🚛",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  fD = {
    keywords: ["vehicle", "car", "farming", "agriculture"],
    char: "🚜",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  hD = {
    keywords: ["vehicle", "kick", "razor"],
    char: "🛴",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  dD = {
    keywords: ["race", "sports", "fast"],
    char: "🏍",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  pD = {
    keywords: ["sports", "bicycle", "exercise", "hipster"],
    char: "🚲",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  _D = {
    keywords: ["vehicle", "vespa", "sasha"],
    char: "🛵",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  mD = {
    keywords: [
      "police",
      "ambulance",
      "911",
      "emergency",
      "alert",
      "error",
      "pinged",
      "law",
      "legal",
    ],
    char: "🚨",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  gD = {
    keywords: ["vehicle", "law", "legal", "enforcement", "911"],
    char: "🚔",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  yD = {
    keywords: ["vehicle", "transportation"],
    char: "🚍",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  kD = {
    keywords: ["car", "vehicle", "transportation"],
    char: "🚘",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  bD = {
    keywords: ["vehicle", "cars", "uber"],
    char: "🚖",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  wD = {
    keywords: ["transportation", "vehicle", "ski"],
    char: "🚡",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  ED = {
    keywords: ["transportation", "vehicle", "ski"],
    char: "🚠",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  TD = {
    keywords: ["vehicle", "transportation"],
    char: "🚟",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  AD = {
    keywords: ["transportation", "vehicle"],
    char: "🚃",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  CD = {
    keywords: ["transportation", "vehicle", "carriage", "public", "travel"],
    char: "🚋",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  xD = {
    keywords: ["transportation", "vehicle"],
    char: "🚝",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  DD = {
    keywords: ["transportation", "vehicle"],
    char: "🚄",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  zD = {
    keywords: [
      "transportation",
      "vehicle",
      "speed",
      "fast",
      "public",
      "travel",
    ],
    char: "🚅",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  ID = {
    keywords: ["transportation", "vehicle"],
    char: "🚈",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  SD = {
    keywords: ["transportation", "vehicle"],
    char: "🚞",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  ND = {
    keywords: ["transportation", "vehicle", "train"],
    char: "🚂",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  FD = {
    keywords: ["transportation", "vehicle"],
    char: "🚆",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  OD = {
    keywords: ["transportation", "blue-square", "mrt", "underground", "tube"],
    char: "🚇",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  LD = {
    keywords: ["transportation", "vehicle"],
    char: "🚊",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  RD = {
    keywords: ["transportation", "vehicle", "public"],
    char: "🚉",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  vD = {
    keywords: ["transportation", "vehicle", "ufo"],
    char: "🛸",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  BD = {
    keywords: ["transportation", "vehicle", "fly"],
    char: "🚁",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  PD = {
    keywords: ["flight", "transportation", "fly", "vehicle"],
    char: "🛩",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  MD = {
    keywords: ["vehicle", "transportation", "flight", "fly"],
    char: "✈️",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  HD = {
    keywords: ["airport", "flight", "landing"],
    char: "🛫",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  UD = {
    keywords: ["airport", "flight", "boarding"],
    char: "🛬",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  jD = {
    keywords: ["ship", "summer", "transportation", "water", "sailing"],
    char: "⛵",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  qD = {
    keywords: ["ship"],
    char: "🛥",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  YD = {
    keywords: ["ship", "transportation", "vehicle", "summer"],
    char: "🚤",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  $D = {
    keywords: ["boat", "ship", "yacht"],
    char: "⛴",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  VD = {
    keywords: ["yacht", "cruise", "ferry"],
    char: "🛳",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  WD = {
    keywords: [
      "launch",
      "ship",
      "staffmode",
      "NASA",
      "outer space",
      "outer_space",
      "fly",
    ],
    char: "🚀",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  GD = {
    keywords: ["communication", "gps", "orbit", "spaceflight", "NASA", "ISS"],
    char: "🛰",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  QD = {
    keywords: ["sit", "airplane", "transport", "bus", "flight", "fly"],
    char: "💺",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  XD = {
    keywords: ["boat", "paddle", "water", "ship"],
    char: "🛶",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  KD = {
    keywords: ["ship", "ferry", "sea", "boat"],
    char: "⚓",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  JD = {
    keywords: ["wip", "progress", "caution", "warning"],
    char: "🚧",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  ZD = {
    keywords: ["gas station", "petroleum"],
    char: "⛽",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  e6 = {
    keywords: ["transportation", "wait"],
    char: "🚏",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  t6 = {
    keywords: ["transportation", "driving"],
    char: "🚦",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  a6 = {
    keywords: ["transportation", "signal"],
    char: "🚥",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  r6 = {
    keywords: ["contest", "finishline", "race", "gokart"],
    char: "🏁",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  n6 = {
    keywords: ["transportation", "titanic", "deploy"],
    char: "🚢",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  i6 = {
    keywords: ["photo", "carnival", "londoneye"],
    char: "🎡",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  s6 = {
    keywords: ["carnival", "playground", "photo", "fun"],
    char: "🎢",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  o6 = {
    keywords: ["photo", "carnival"],
    char: "🎠",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  c6 = {
    keywords: ["wip", "working", "progress"],
    char: "🏗",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  u6 = {
    keywords: ["photo", "mountain"],
    char: "🌁",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  l6 = {
    keywords: ["photo", "japanese"],
    char: "🗼",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  f6 = {
    keywords: ["building", "industry", "pollution", "smoke"],
    char: "🏭",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  h6 = {
    keywords: ["photo", "summer", "water", "fresh"],
    char: "⛲",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  d6 = {
    keywords: ["photo", "japan", "asia", "tsukimi"],
    char: "🎑",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  p6 = {
    keywords: ["photo", "nature", "environment"],
    char: "⛰",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  _6 = {
    keywords: ["photo", "nature", "environment", "winter", "cold"],
    char: "🏔",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  m6 = {
    keywords: ["photo", "mountain", "nature", "japanese"],
    char: "🗻",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  g6 = {
    keywords: ["photo", "nature", "disaster"],
    char: "🌋",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  y6 = {
    keywords: ["nation", "country", "japanese", "asia"],
    char: "🗾",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  k6 = {
    keywords: ["photo", "outdoors", "tent"],
    char: "🏕",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  b6 = {
    keywords: ["photo", "camping", "outdoors"],
    char: "⛺",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  w6 = {
    keywords: ["photo", "environment", "nature"],
    char: "🏞",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  E6 = {
    keywords: ["road", "cupertino", "interstate", "highway"],
    char: "🛣",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  T6 = {
    keywords: ["train", "transportation"],
    char: "🛤",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  A6 = {
    keywords: ["morning", "view", "vacation", "photo"],
    char: "🌅",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  C6 = {
    keywords: ["view", "vacation", "photo"],
    char: "🌄",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  x6 = {
    keywords: ["photo", "warm", "saharah"],
    char: "🏜",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  D6 = {
    keywords: ["weather", "summer", "sunny", "sand", "mojito"],
    char: "🏖",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  z6 = {
    keywords: ["photo", "tropical", "mojito"],
    char: "🏝",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  I6 = {
    keywords: ["photo", "good morning", "dawn"],
    char: "🌇",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  S6 = {
    keywords: ["photo", "evening", "sky", "buildings"],
    char: "🌆",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  N6 = {
    keywords: ["photo", "night life", "urban"],
    char: "🏙",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  F6 = {
    keywords: ["evening", "city", "downtown"],
    char: "🌃",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  O6 = {
    keywords: ["photo", "sanfrancisco"],
    char: "🌉",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  L6 = {
    keywords: ["photo", "space", "stars"],
    char: "🌌",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  R6 = {
    keywords: ["night", "photo"],
    char: "🌠",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  v6 = {
    keywords: ["stars", "night", "shine"],
    char: "🎇",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  B6 = {
    keywords: ["photo", "festival", "carnival", "congratulations"],
    char: "🎆",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  P6 = {
    keywords: ["nature", "happy", "unicorn_face", "photo", "sky", "spring"],
    char: "🌈",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  M6 = {
    keywords: ["buildings", "photo"],
    char: "🏘",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  H6 = {
    keywords: ["building", "royalty", "history"],
    char: "🏰",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  U6 = {
    keywords: ["photo", "building"],
    char: "🏯",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  j6 = {
    keywords: ["photo", "place", "sports", "concert", "venue"],
    char: "🏟",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  q6 = {
    keywords: ["american", "newyork"],
    char: "🗽",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  Y6 = {
    keywords: ["building", "home"],
    char: "🏠",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  $6 = {
    keywords: ["home", "plant", "nature"],
    char: "🏡",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  V6 = {
    keywords: ["abandon", "evict", "broken", "building"],
    char: "🏚",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  W6 = {
    keywords: ["building", "bureau", "work"],
    char: "🏢",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  G6 = {
    keywords: ["building", "shopping", "mall"],
    char: "🏬",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  Q6 = {
    keywords: ["building", "envelope", "communication"],
    char: "🏣",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  X6 = {
    keywords: ["building", "email"],
    char: "🏤",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  K6 = {
    keywords: ["building", "health", "surgery", "doctor"],
    char: "🏥",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  J6 = {
    keywords: ["building", "money", "sales", "cash", "business", "enterprise"],
    char: "🏦",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  Z6 = {
    keywords: ["building", "accomodation", "checkin"],
    char: "🏨",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  ez = {
    keywords: ["building", "shopping", "groceries"],
    char: "🏪",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  tz = {
    keywords: ["building", "student", "education", "learn", "teach"],
    char: "🏫",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  az = {
    keywords: ["like", "affection", "dating"],
    char: "🏩",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  rz = {
    keywords: [
      "love",
      "like",
      "affection",
      "couple",
      "marriage",
      "bride",
      "groom",
    ],
    char: "💒",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  nz = {
    keywords: ["art", "culture", "history"],
    char: "🏛",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  iz = {
    keywords: ["building", "religion", "christ"],
    char: "⛪",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  sz = {
    keywords: ["islam", "worship", "minaret"],
    char: "🕌",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  oz = {
    keywords: ["judaism", "worship", "temple", "jewish"],
    char: "🕍",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  cz = {
    keywords: ["mecca", "mosque", "islam"],
    char: "🕋",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  uz = {
    keywords: ["temple", "japan", "kyoto"],
    char: "⛩",
    fitzpatrick_scale: !1,
    category: "travel_and_places",
  },
  lz = {
    keywords: ["time", "accessories"],
    char: "⌚",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  fz = {
    keywords: ["technology", "apple", "gadgets", "dial"],
    char: "📱",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  hz = {
    keywords: ["iphone", "incoming"],
    char: "📲",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  dz = {
    keywords: ["technology", "laptop", "screen", "display", "monitor"],
    char: "💻",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  pz = {
    keywords: ["technology", "computer", "type", "input", "text"],
    char: "⌨",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  _z = {
    keywords: ["technology", "computing", "screen"],
    char: "🖥",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  mz = {
    keywords: ["paper", "ink"],
    char: "🖨",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  gz = {
    keywords: ["click"],
    char: "🖱",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  yz = {
    keywords: ["technology", "trackpad"],
    char: "🖲",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  kz = {
    keywords: ["game", "play"],
    char: "🕹",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  bz = {
    keywords: ["tool"],
    char: "🗜",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  wz = {
    keywords: ["technology", "record", "data", "disk", "90s"],
    char: "💽",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Ez = {
    keywords: ["oldschool", "technology", "save", "90s", "80s"],
    char: "💾",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Tz = {
    keywords: ["technology", "dvd", "disk", "disc", "90s"],
    char: "💿",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Az = {
    keywords: ["cd", "disk", "disc"],
    char: "📀",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Cz = {
    keywords: ["record", "video", "oldschool", "90s", "80s"],
    char: "📼",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  xz = {
    keywords: ["gadgets", "photography"],
    char: "📷",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Dz = {
    keywords: ["photography", "gadgets"],
    char: "📸",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  zz = {
    keywords: ["film", "record"],
    char: "📹",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Iz = {
    keywords: ["film", "record"],
    char: "🎥",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Sz = {
    keywords: ["video", "tape", "record", "movie"],
    char: "📽",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Nz = {
    keywords: ["movie"],
    char: "🎞",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Fz = {
    keywords: ["technology", "communication", "dial"],
    char: "📞",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Oz = {
    keywords: ["technology", "communication", "dial", "telephone"],
    char: "☎️",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Lz = {
    keywords: ["bbcall", "oldschool", "90s"],
    char: "📟",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Rz = {
    keywords: ["communication", "technology"],
    char: "📠",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  vz = {
    keywords: ["technology", "program", "oldschool", "show", "television"],
    char: "📺",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Bz = {
    keywords: ["communication", "music", "podcast", "program"],
    char: "📻",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Pz = {
    keywords: ["sing", "recording", "artist", "talkshow"],
    char: "🎙",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Mz = {
    keywords: ["scale"],
    char: "🎚",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Hz = {
    keywords: ["dial"],
    char: "🎛",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Uz = {
    keywords: ["magnetic", "navigation", "orienteering"],
    char: "🧭",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  jz = {
    keywords: ["time", "deadline"],
    char: "⏱",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  qz = {
    keywords: ["alarm"],
    char: "⏲",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Yz = {
    keywords: ["time", "wake"],
    char: "⏰",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  $z = {
    keywords: ["time"],
    char: "🕰",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Vz = {
    keywords: ["oldschool", "time", "countdown"],
    char: "⏳",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Wz = {
    keywords: ["time", "clock", "oldschool", "limit", "exam", "quiz", "test"],
    char: "⌛",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Gz = {
    keywords: ["communication", "future", "radio", "space"],
    char: "📡",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Qz = {
    keywords: ["power", "energy", "sustain"],
    char: "🔋",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Xz = {
    keywords: ["charger", "power"],
    char: "🔌",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Kz = {
    keywords: ["light", "electricity", "idea"],
    char: "💡",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Jz = {
    keywords: ["dark", "camping", "sight", "night"],
    char: "🔦",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  Zz = {
    keywords: ["fire", "wax"],
    char: "🕯",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  eI = {
    keywords: ["quench"],
    char: "🧯",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  tI = {
    keywords: ["bin", "trash", "rubbish", "garbage", "toss"],
    char: "🗑",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  aI = {
    keywords: ["barrell"],
    char: "🛢",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  rI = {
    keywords: ["dollar", "bills", "payment", "sale"],
    char: "💸",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  nI = {
    keywords: ["money", "sales", "bill", "currency"],
    char: "💵",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  iI = {
    keywords: ["money", "sales", "japanese", "dollar", "currency"],
    char: "💴",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  sI = {
    keywords: ["money", "sales", "dollar", "currency"],
    char: "💶",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  oI = {
    keywords: [
      "british",
      "sterling",
      "money",
      "sales",
      "bills",
      "uk",
      "england",
      "currency",
    ],
    char: "💷",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  cI = {
    keywords: ["dollar", "payment", "coins", "sale"],
    char: "💰",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  uI = {
    keywords: ["money", "sales", "dollar", "bill", "payment", "shopping"],
    char: "💳",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  lI = {
    keywords: ["blue", "ruby", "diamond", "jewelry"],
    char: "💎",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  fI = {
    keywords: ["law", "fairness", "weight"],
    char: "⚖",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  hI = {
    keywords: ["tools", "diy", "fix", "maintainer", "mechanic"],
    char: "🧰",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  dI = {
    keywords: ["tools", "diy", "ikea", "fix", "maintainer"],
    char: "🔧",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  pI = {
    keywords: ["tools", "build", "create"],
    char: "🔨",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  _I = {
    keywords: ["tools", "build", "create"],
    char: "⚒",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  mI = {
    keywords: ["tools", "build", "create"],
    char: "🛠",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  gI = {
    keywords: ["tools", "dig"],
    char: "⛏",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  yI = {
    keywords: ["handy", "tools", "fix"],
    char: "🔩",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  kI = {
    keywords: ["cog"],
    char: "⚙",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  bI = {
    keywords: ["bricks"],
    char: "🧱",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  wI = {
    keywords: ["lock", "arrest"],
    char: "⛓",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  EI = {
    keywords: ["attraction", "magnetic"],
    char: "🧲",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  TI = {
    keywords: ["violence", "weapon", "pistol", "revolver"],
    char: "🔫",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  AI = {
    keywords: ["boom", "explode", "explosion", "terrorism"],
    char: "💣",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  CI = {
    keywords: ["dynamite", "boom", "explode", "explosion", "explosive"],
    char: "🧨",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  xI = {
    keywords: ["knife", "blade", "cutlery", "kitchen", "weapon"],
    char: "🔪",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  DI = {
    keywords: ["weapon"],
    char: "🗡",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  zI = {
    keywords: ["weapon"],
    char: "⚔",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  II = {
    keywords: ["protection", "security"],
    char: "🛡",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  SI = {
    keywords: ["kills", "tobacco", "cigarette", "joint", "smoke"],
    char: "🚬",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  NI = {
    keywords: [
      "poison",
      "danger",
      "deadly",
      "scary",
      "death",
      "pirate",
      "evil",
    ],
    char: "☠",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  FI = {
    keywords: [
      "vampire",
      "dead",
      "die",
      "death",
      "rip",
      "graveyard",
      "cemetery",
      "casket",
      "funeral",
      "box",
    ],
    char: "⚰",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  OI = {
    keywords: ["dead", "die", "death", "rip", "ashes"],
    char: "⚱",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  LI = {
    keywords: ["vase", "jar"],
    char: "🏺",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  RI = {
    keywords: ["disco", "party", "magic", "circus", "fortune_teller"],
    char: "🔮",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  vI = {
    keywords: ["dhikr", "religious"],
    char: "📿",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  BI = {
    keywords: ["bead", "charm"],
    char: "🧿",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  PI = {
    keywords: ["hair", "salon", "style"],
    char: "💈",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  MI = {
    keywords: ["distilling", "science", "experiment", "chemistry"],
    char: "⚗",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  HI = {
    keywords: ["stars", "space", "zoom", "science", "astronomy"],
    char: "🔭",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  UI = {
    keywords: ["laboratory", "experiment", "zoomin", "science", "study"],
    char: "🔬",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  jI = {
    keywords: ["embarrassing"],
    char: "🕳",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  qI = {
    keywords: ["health", "medicine", "doctor", "pharmacy", "drug"],
    char: "💊",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  YI = {
    keywords: [
      "health",
      "hospital",
      "drugs",
      "blood",
      "medicine",
      "needle",
      "doctor",
      "nurse",
    ],
    char: "💉",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  $I = {
    keywords: ["biologist", "genetics", "life"],
    char: "🧬",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  VI = {
    keywords: ["amoeba", "bacteria", "germs"],
    char: "🦠",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  WI = {
    keywords: ["bacteria", "biology", "culture", "lab"],
    char: "🧫",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  GI = {
    keywords: ["chemistry", "experiment", "lab", "science"],
    char: "🧪",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  QI = {
    keywords: ["weather", "temperature", "hot", "cold"],
    char: "🌡",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  XI = {
    keywords: ["cleaning", "sweeping", "witch"],
    char: "🧹",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  KI = {
    keywords: ["laundry"],
    char: "🧺",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  JI = {
    keywords: ["roll"],
    char: "🧻",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  ZI = {
    keywords: ["sale", "tag"],
    char: "🏷",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  eS = {
    keywords: ["favorite", "label", "save"],
    char: "🔖",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  tS = {
    keywords: ["restroom", "wc", "washroom", "bathroom", "potty"],
    char: "🚽",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  aS = {
    keywords: ["clean", "water", "bathroom"],
    char: "🚿",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  rS = {
    keywords: ["clean", "shower", "bathroom"],
    char: "🛁",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  nS = {
    keywords: ["bar", "bathing", "cleaning", "lather"],
    char: "🧼",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  iS = {
    keywords: ["absorbing", "cleaning", "porous"],
    char: "🧽",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  sS = {
    keywords: ["moisturizer", "sunscreen"],
    char: "🧴",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  oS = {
    keywords: ["lock", "door", "password"],
    char: "🔑",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  cS = {
    keywords: ["lock", "door", "password"],
    char: "🗝",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  uS = {
    keywords: ["read", "chill"],
    char: "🛋",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  lS = {
    keywords: ["bed", "rest"],
    char: "🛌",
    fitzpatrick_scale: !0,
    category: "objects",
  },
  fS = {
    keywords: ["sleep", "rest"],
    char: "🛏",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  hS = {
    keywords: ["house", "entry", "exit"],
    char: "🚪",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  dS = {
    keywords: ["service"],
    char: "🛎",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  pS = {
    keywords: ["plush", "stuffed"],
    char: "🧸",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  _S = {
    keywords: ["photography"],
    char: "🖼",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  mS = {
    keywords: ["location", "direction"],
    char: "🗺",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  gS = {
    keywords: ["weather", "summer"],
    char: "⛱",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  yS = {
    keywords: ["rock", "easter island", "moai"],
    char: "🗿",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  kS = {
    keywords: ["mall", "buy", "purchase"],
    char: "🛍",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  bS = {
    keywords: ["trolley"],
    char: "🛒",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  wS = {
    keywords: ["party", "celebration", "birthday", "circus"],
    char: "🎈",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  ES = {
    keywords: ["fish", "japanese", "koinobori", "carp", "banner"],
    char: "🎏",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  TS = {
    keywords: ["decoration", "pink", "girl", "bowtie"],
    char: "🎀",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  AS = {
    keywords: ["present", "birthday", "christmas", "xmas"],
    char: "🎁",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  CS = {
    keywords: ["festival", "party", "birthday", "circus"],
    char: "🎊",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  xS = {
    keywords: [
      "party",
      "congratulations",
      "birthday",
      "magic",
      "circus",
      "celebration",
    ],
    char: "🎉",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  DS = {
    keywords: ["japanese", "toy", "kimono"],
    char: "🎎",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  zS = {
    keywords: ["nature", "ding", "spring", "bell"],
    char: "🎐",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  IS = {
    keywords: ["japanese", "nation", "country", "border"],
    char: "🎌",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  SS = {
    keywords: ["light", "paper", "halloween", "spooky"],
    char: "🏮",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  NS = {
    keywords: ["gift"],
    char: "🧧",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  FS = {
    keywords: ["letter", "postal", "inbox", "communication"],
    char: "✉️",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  OS = {
    keywords: ["email", "communication"],
    char: "📩",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  LS = {
    keywords: ["email", "inbox"],
    char: "📨",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  RS = {
    keywords: ["email", "like", "affection", "envelope", "valentines"],
    char: "💌",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  vS = {
    keywords: ["email", "letter", "envelope"],
    char: "📮",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  BS = {
    keywords: ["email", "communication", "inbox"],
    char: "📪",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  PS = {
    keywords: ["email", "inbox", "communication"],
    char: "📫",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  MS = {
    keywords: ["email", "inbox", "communication"],
    char: "📬",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  HS = {
    keywords: ["email", "inbox"],
    char: "📭",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  US = {
    keywords: ["instrument", "music"],
    char: "📯",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  jS = {
    keywords: ["email", "documents"],
    char: "📥",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  qS = {
    keywords: ["inbox", "email"],
    char: "📤",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  YS = {
    keywords: ["documents", "ancient", "history", "paper"],
    char: "📜",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  $S = {
    keywords: ["documents", "office", "paper"],
    char: "📃",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  VS = {
    keywords: ["favorite", "save", "order", "tidy"],
    char: "📑",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  WS = {
    keywords: ["accounting", "expenses"],
    char: "🧾",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  GS = {
    keywords: ["graph", "presentation", "stats"],
    char: "📊",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  QS = {
    keywords: [
      "graph",
      "presentation",
      "stats",
      "recovery",
      "business",
      "economics",
      "money",
      "sales",
      "good",
      "success",
    ],
    char: "📈",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  XS = {
    keywords: [
      "graph",
      "presentation",
      "stats",
      "recession",
      "business",
      "economics",
      "money",
      "sales",
      "bad",
      "failure",
    ],
    char: "📉",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  KS = {
    keywords: ["documents", "office", "paper", "information"],
    char: "📄",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  JS = {
    keywords: ["calendar", "schedule"],
    char: "📅",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  ZS = {
    keywords: ["schedule", "date", "planning"],
    char: "📆",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  eN = {
    keywords: ["date", "schedule", "planning"],
    char: "🗓",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  tN = {
    keywords: ["business", "stationery"],
    char: "📇",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  aN = {
    keywords: ["business", "stationery"],
    char: "🗃",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  rN = {
    keywords: ["election", "vote"],
    char: "🗳",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  nN = {
    keywords: ["filing", "organizing"],
    char: "🗄",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  iN = {
    keywords: ["stationery", "documents"],
    char: "📋",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  sN = {
    keywords: ["memo", "stationery"],
    char: "🗒",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  oN = {
    keywords: ["documents", "business", "office"],
    char: "📁",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  cN = {
    keywords: ["documents", "load"],
    char: "📂",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  uN = {
    keywords: ["organizing", "business", "stationery"],
    char: "🗂",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  lN = {
    keywords: ["press", "headline"],
    char: "🗞",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  fN = {
    keywords: ["press", "headline"],
    char: "📰",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  hN = {
    keywords: ["stationery", "record", "notes", "paper", "study"],
    char: "📓",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  dN = {
    keywords: ["read", "library", "knowledge", "textbook", "learn"],
    char: "📕",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  pN = {
    keywords: ["read", "library", "knowledge", "study"],
    char: "📗",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  _N = {
    keywords: ["read", "library", "knowledge", "learn", "study"],
    char: "📘",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  mN = {
    keywords: ["read", "library", "knowledge", "textbook", "study"],
    char: "📙",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  gN = {
    keywords: ["classroom", "notes", "record", "paper", "study"],
    char: "📔",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  yN = {
    keywords: ["notes", "paper"],
    char: "📒",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  kN = {
    keywords: ["literature", "library", "study"],
    char: "📚",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  bN = {
    keywords: [
      "book",
      "read",
      "library",
      "knowledge",
      "literature",
      "learn",
      "study",
    ],
    char: "📖",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  wN = {
    keywords: ["diaper"],
    char: "🧷",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  EN = {
    keywords: ["rings", "url"],
    char: "🔗",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  TN = {
    keywords: ["documents", "stationery"],
    char: "📎",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  AN = {
    keywords: ["documents", "stationery"],
    char: "🖇",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  CN = {
    keywords: ["stationery", "cut"],
    char: "✂️",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  xN = {
    keywords: ["stationery", "math", "architect", "sketch"],
    char: "📐",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  DN = {
    keywords: [
      "stationery",
      "calculate",
      "length",
      "math",
      "school",
      "drawing",
      "architect",
      "sketch",
    ],
    char: "📏",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  zN = {
    keywords: ["calculation"],
    char: "🧮",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  IN = {
    keywords: ["stationery", "mark", "here"],
    char: "📌",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  SN = {
    keywords: ["stationery", "location", "map", "here"],
    char: "📍",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  NN = {
    keywords: ["mark", "milestone", "place"],
    char: "🚩",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  FN = {
    keywords: ["losing", "loser", "lost", "surrender", "give up", "fail"],
    char: "🏳",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  ON = {
    keywords: ["pirate"],
    char: "🏴",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  LN = {
    keywords: [
      "flag",
      "rainbow",
      "pride",
      "gay",
      "lgbt",
      "glbt",
      "queer",
      "homosexual",
      "lesbian",
      "bisexual",
      "transgender",
    ],
    char: "🏳️‍🌈",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  RN = {
    keywords: ["security", "privacy"],
    char: "🔐",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  vN = {
    keywords: ["security", "password", "padlock"],
    char: "🔒",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  BN = {
    keywords: ["privacy", "security"],
    char: "🔓",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  PN = {
    keywords: ["security", "secret"],
    char: "🔏",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  MN = {
    keywords: ["stationery", "writing", "write"],
    char: "🖊",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  HN = {
    keywords: ["stationery", "writing", "write"],
    char: "🖋",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  UN = {
    keywords: ["pen", "stationery", "writing", "write"],
    char: "✒️",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  jN = {
    keywords: [
      "write",
      "documents",
      "stationery",
      "pencil",
      "paper",
      "writing",
      "legal",
      "exam",
      "quiz",
      "test",
      "study",
      "compose",
    ],
    char: "📝",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  qN = {
    keywords: ["stationery", "write", "paper", "writing", "school", "study"],
    char: "✏️",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  YN = {
    keywords: ["drawing", "creativity"],
    char: "🖍",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  $N = {
    keywords: ["drawing", "creativity", "art"],
    char: "🖌",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  VN = {
    keywords: ["search", "zoom", "find", "detective"],
    char: "🔍",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  WN = {
    keywords: ["search", "zoom", "find", "detective"],
    char: "🔎",
    fitzpatrick_scale: !1,
    category: "objects",
  },
  GN = {
    keywords: ["love", "like", "valentines"],
    char: "❤️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  QN = {
    keywords: ["love", "like", "affection", "valentines"],
    char: "🧡",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  XN = {
    keywords: ["love", "like", "affection", "valentines"],
    char: "💛",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  KN = {
    keywords: ["love", "like", "affection", "valentines"],
    char: "💚",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  JN = {
    keywords: ["love", "like", "affection", "valentines"],
    char: "💙",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  ZN = {
    keywords: ["love", "like", "affection", "valentines"],
    char: "💜",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  e4 = {
    keywords: ["evil"],
    char: "🖤",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  t4 = {
    keywords: ["sad", "sorry", "break", "heart", "heartbreak"],
    char: "💔",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  a4 = {
    keywords: ["decoration", "love"],
    char: "❣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  r4 = {
    keywords: ["love", "like", "affection", "valentines", "heart"],
    char: "💕",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  n4 = {
    keywords: ["love", "like", "affection", "valentines"],
    char: "💞",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  i4 = {
    keywords: ["love", "like", "affection", "valentines", "pink", "heart"],
    char: "💓",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  s4 = {
    keywords: ["like", "love", "affection", "valentines", "pink"],
    char: "💗",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  o4 = {
    keywords: ["love", "like", "affection", "valentines"],
    char: "💖",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  c4 = {
    keywords: ["love", "like", "heart", "affection", "valentines"],
    char: "💘",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  u4 = {
    keywords: ["love", "valentines"],
    char: "💝",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  l4 = {
    keywords: ["purple-square", "love", "like"],
    char: "💟",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  f4 = {
    keywords: ["hippie"],
    char: "☮",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  h4 = {
    keywords: ["christianity"],
    char: "✝",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  d4 = {
    keywords: ["islam"],
    char: "☪",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  p4 = {
    keywords: ["hinduism", "buddhism", "sikhism", "jainism"],
    char: "🕉",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  _4 = {
    keywords: ["hinduism", "buddhism", "sikhism", "jainism"],
    char: "☸",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  m4 = {
    keywords: ["judaism"],
    char: "✡",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  g4 = {
    keywords: ["purple-square", "religion", "jewish", "hexagram"],
    char: "🔯",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  y4 = {
    keywords: ["hanukkah", "candles", "jewish"],
    char: "🕎",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  k4 = {
    keywords: ["balance"],
    char: "☯",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  b4 = {
    keywords: ["suppedaneum", "religion"],
    char: "☦",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  w4 = {
    keywords: ["religion", "church", "temple", "prayer"],
    char: "🛐",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  E4 = {
    keywords: ["sign", "purple-square", "constellation", "astrology"],
    char: "⛎",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  T4 = {
    keywords: ["sign", "purple-square", "zodiac", "astrology"],
    char: "♈",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  A4 = {
    keywords: ["purple-square", "sign", "zodiac", "astrology"],
    char: "♉",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  C4 = {
    keywords: ["sign", "zodiac", "purple-square", "astrology"],
    char: "♊",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  x4 = {
    keywords: ["sign", "zodiac", "purple-square", "astrology"],
    char: "♋",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  D4 = {
    keywords: ["sign", "purple-square", "zodiac", "astrology"],
    char: "♌",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  z4 = {
    keywords: ["sign", "zodiac", "purple-square", "astrology"],
    char: "♍",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  I4 = {
    keywords: ["sign", "purple-square", "zodiac", "astrology"],
    char: "♎",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  S4 = {
    keywords: ["sign", "zodiac", "purple-square", "astrology", "scorpio"],
    char: "♏",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  N4 = {
    keywords: ["sign", "zodiac", "purple-square", "astrology"],
    char: "♐",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  F4 = {
    keywords: ["sign", "zodiac", "purple-square", "astrology"],
    char: "♑",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  O4 = {
    keywords: ["sign", "purple-square", "zodiac", "astrology"],
    char: "♒",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  L4 = {
    keywords: ["purple-square", "sign", "zodiac", "astrology"],
    char: "♓",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  R4 = {
    keywords: ["purple-square", "words"],
    char: "🆔",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  v4 = {
    keywords: ["science", "physics", "chemistry"],
    char: "⚛",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  B4 = {
    keywords: ["kanji", "japanese", "chinese", "empty", "sky", "blue-square"],
    char: "🈳",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  P4 = {
    keywords: ["cut", "divide", "chinese", "kanji", "pink-square"],
    char: "🈹",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  M4 = {
    keywords: ["nuclear", "danger"],
    char: "☢",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  H4 = {
    keywords: ["danger"],
    char: "☣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  U4 = {
    keywords: ["mute", "orange-square", "silence", "quiet"],
    char: "📴",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  j4 = {
    keywords: ["orange-square", "phone"],
    char: "📳",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  q4 = {
    keywords: ["orange-square", "chinese", "have", "kanji"],
    char: "🈶",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  Y4 = {
    keywords: ["nothing", "chinese", "kanji", "japanese", "orange-square"],
    char: "🈚",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  $4 = {
    keywords: ["chinese", "japanese", "kanji", "orange-square"],
    char: "🈸",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  V4 = {
    keywords: ["japanese", "opening hours", "orange-square"],
    char: "🈺",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  W4 = {
    keywords: [
      "chinese",
      "month",
      "moon",
      "japanese",
      "orange-square",
      "kanji",
    ],
    char: "🈷️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  G4 = {
    keywords: ["orange-square", "shape", "polygon"],
    char: "✴️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  Q4 = {
    keywords: ["words", "orange-square"],
    char: "🆚",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  X4 = {
    keywords: [
      "ok",
      "good",
      "chinese",
      "kanji",
      "agree",
      "yes",
      "orange-circle",
    ],
    char: "🉑",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  K4 = {
    keywords: ["japanese", "spring"],
    char: "💮",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  J4 = {
    keywords: ["chinese", "kanji", "obtain", "get", "circle"],
    char: "🉐",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  Z4 = {
    keywords: ["privacy", "chinese", "sshh", "kanji", "red-circle"],
    char: "㊙️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  eF = {
    keywords: ["chinese", "kanji", "japanese", "red-circle"],
    char: "㊗️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  tF = {
    keywords: ["japanese", "chinese", "join", "kanji", "red-square"],
    char: "🈴",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  aF = {
    keywords: ["full", "chinese", "japanese", "red-square", "kanji"],
    char: "🈵",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  rF = {
    keywords: [
      "kanji",
      "japanese",
      "chinese",
      "forbidden",
      "limit",
      "restricted",
      "red-square",
    ],
    char: "🈲",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  nF = {
    keywords: ["red-square", "alphabet", "letter"],
    char: "🅰️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  iF = {
    keywords: ["red-square", "alphabet", "letter"],
    char: "🅱️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  sF = {
    keywords: ["red-square", "alphabet"],
    char: "🆎",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  oF = {
    keywords: ["alphabet", "words", "red-square"],
    char: "🆑",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  cF = {
    keywords: ["alphabet", "red-square", "letter"],
    char: "🅾️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  uF = {
    keywords: ["help", "red-square", "words", "emergency", "911"],
    char: "🆘",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  lF = {
    keywords: [
      "limit",
      "security",
      "privacy",
      "bad",
      "denied",
      "stop",
      "circle",
    ],
    char: "⛔",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  fF = {
    keywords: ["fire", "forbid"],
    char: "📛",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  hF = {
    keywords: ["forbid", "stop", "limit", "denied", "disallow", "circle"],
    char: "🚫",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  dF = {
    keywords: ["no", "delete", "remove", "cancel", "red"],
    char: "❌",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  pF = {
    keywords: ["circle", "round"],
    char: "⭕",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  _F = {
    keywords: ["stop"],
    char: "🛑",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  mF = {
    keywords: ["angry", "mad"],
    char: "💢",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  gF = {
    keywords: ["bath", "warm", "relax"],
    char: "♨️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  yF = {
    keywords: ["rules", "crossing", "walking", "circle"],
    char: "🚷",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  kF = {
    keywords: ["trash", "bin", "garbage", "circle"],
    char: "🚯",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  bF = {
    keywords: ["cyclist", "prohibited", "circle"],
    char: "🚳",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  wF = {
    keywords: ["18", "drink", "pub", "night", "minor", "circle"],
    char: "🔞",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  EF = {
    keywords: ["iphone", "mute", "circle"],
    char: "📵",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  TF = {
    keywords: [
      "heavy_exclamation_mark",
      "danger",
      "surprise",
      "punctuation",
      "wow",
      "warning",
    ],
    char: "❗",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  AF = {
    keywords: ["surprise", "punctuation", "gray", "wow", "warning"],
    char: "❕",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  CF = {
    keywords: ["doubt", "confused"],
    char: "❓",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  xF = {
    keywords: ["doubts", "gray", "huh", "confused"],
    char: "❔",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  DF = {
    keywords: ["exclamation", "surprise"],
    char: "‼️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  zF = {
    keywords: ["wat", "punctuation", "surprise"],
    char: "⁉️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  IF = {
    keywords: ["sun", "afternoon", "warm", "summer"],
    char: "🔅",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  SF = {
    keywords: ["sun", "light"],
    char: "🔆",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  NF = {
    keywords: ["weapon", "spear"],
    char: "🔱",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  FF = {
    keywords: ["decorative", "scout"],
    char: "⚜",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  OF = {
    keywords: [
      "graph",
      "presentation",
      "stats",
      "business",
      "economics",
      "bad",
    ],
    char: "〽️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  LF = {
    keywords: ["exclamation", "wip", "alert", "error", "problem", "issue"],
    char: "⚠️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  RF = {
    keywords: [
      "school",
      "warning",
      "danger",
      "sign",
      "driving",
      "yellow-diamond",
    ],
    char: "🚸",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  vF = {
    keywords: ["badge", "shield"],
    char: "🔰",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  BF = {
    keywords: ["arrow", "environment", "garbage", "trash"],
    char: "♻️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  PF = {
    keywords: ["chinese", "point", "green-square", "kanji"],
    char: "🈯",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  MF = {
    keywords: ["green-square", "graph", "presentation", "stats"],
    char: "💹",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  HF = {
    keywords: ["stars", "green-square", "awesome", "good", "fireworks"],
    char: "❇️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  UF = {
    keywords: ["star", "sparkle", "green-square"],
    char: "✳️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  jF = {
    keywords: ["x", "green-square", "no", "deny"],
    char: "❎",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  qF = {
    keywords: [
      "green-square",
      "ok",
      "agree",
      "vote",
      "election",
      "answer",
      "tick",
    ],
    char: "✅",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  YF = {
    keywords: ["jewel", "blue", "gem", "crystal", "fancy"],
    char: "💠",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  $F = {
    keywords: [
      "weather",
      "swirl",
      "blue",
      "cloud",
      "vortex",
      "spiral",
      "whirlpool",
      "spin",
      "tornado",
      "hurricane",
      "typhoon",
    ],
    char: "🌀",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  VF = {
    keywords: ["tape", "cassette"],
    char: "➿",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  WF = {
    keywords: [
      "earth",
      "international",
      "world",
      "internet",
      "interweb",
      "i18n",
    ],
    char: "🌐",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  GF = {
    keywords: ["alphabet", "blue-circle", "letter"],
    char: "Ⓜ️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  QF = {
    keywords: ["money", "sales", "cash", "blue-square", "payment", "bank"],
    char: "🏧",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  XF = {
    keywords: ["japanese", "blue-square", "katakana"],
    char: "🈂️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  KF = {
    keywords: ["custom", "blue-square"],
    char: "🛂",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  JF = {
    keywords: ["passport", "border", "blue-square"],
    char: "🛃",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  ZF = {
    keywords: ["blue-square", "airport", "transport"],
    char: "🛄",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  eO = {
    keywords: ["blue-square", "travel"],
    char: "🛅",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  tO = {
    keywords: ["blue-square", "disabled", "a11y", "accessibility"],
    char: "♿",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  aO = {
    keywords: ["cigarette", "blue-square", "smell", "smoke"],
    char: "🚭",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  rO = {
    keywords: ["toilet", "restroom", "blue-square"],
    char: "🚾",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  nO = {
    keywords: ["cars", "blue-square", "alphabet", "letter"],
    char: "🅿️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  iO = {
    keywords: ["blue-square", "liquid", "restroom", "cleaning", "faucet"],
    char: "🚰",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  sO = {
    keywords: ["toilet", "restroom", "wc", "blue-square", "gender", "male"],
    char: "🚹",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  oO = {
    keywords: [
      "purple-square",
      "woman",
      "female",
      "toilet",
      "loo",
      "restroom",
      "gender",
    ],
    char: "🚺",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  cO = {
    keywords: ["orange-square", "child"],
    char: "🚼",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  uO = {
    keywords: ["blue-square", "toilet", "refresh", "wc", "gender"],
    char: "🚻",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  lO = {
    keywords: ["blue-square", "sign", "human", "info"],
    char: "🚮",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  fO = {
    keywords: [
      "blue-square",
      "record",
      "film",
      "movie",
      "curtain",
      "stage",
      "theater",
    ],
    char: "🎦",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  hO = {
    keywords: [
      "blue-square",
      "reception",
      "phone",
      "internet",
      "connection",
      "wifi",
      "bluetooth",
      "bars",
    ],
    char: "📶",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  dO = {
    keywords: ["blue-square", "here", "katakana", "japanese", "destination"],
    char: "🈁",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  pO = {
    keywords: ["blue-square", "words", "shape", "icon"],
    char: "🆖",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  _O = {
    keywords: ["good", "agree", "yes", "blue-square"],
    char: "🆗",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  mO = {
    keywords: ["blue-square", "above", "high"],
    char: "🆙",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  gO = {
    keywords: ["words", "blue-square"],
    char: "🆒",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  yO = {
    keywords: ["blue-square", "words"],
    char: "🆓",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  kO = {
    keywords: ["0", "numbers", "blue-square", "null"],
    char: "0️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  bO = {
    keywords: ["blue-square", "numbers", "1"],
    char: "1️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  wO = {
    keywords: ["numbers", "2", "prime", "blue-square"],
    char: "2️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  EO = {
    keywords: ["3", "numbers", "prime", "blue-square"],
    char: "3️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  TO = {
    keywords: ["4", "numbers", "blue-square"],
    char: "4️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  AO = {
    keywords: ["5", "numbers", "blue-square", "prime"],
    char: "5️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  CO = {
    keywords: ["6", "numbers", "blue-square"],
    char: "6️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  xO = {
    keywords: ["7", "numbers", "blue-square", "prime"],
    char: "7️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  DO = {
    keywords: ["8", "blue-square", "numbers"],
    char: "8️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  zO = {
    keywords: ["blue-square", "numbers", "9"],
    char: "9️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  IO = {
    keywords: ["numbers", "10", "blue-square"],
    char: "🔟",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  SO = {
    keywords: ["star", "keycap"],
    char: "*⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  NO = {
    keywords: ["blue-square"],
    char: "⏏️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  FO = {
    keywords: ["blue-square", "right", "direction", "play"],
    char: "▶️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  OO = {
    keywords: ["pause", "blue-square"],
    char: "⏸",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  LO = {
    keywords: ["forward", "next", "blue-square"],
    char: "⏭",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  RO = {
    keywords: ["blue-square"],
    char: "⏹",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  vO = {
    keywords: ["blue-square"],
    char: "⏺",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  BO = {
    keywords: ["blue-square", "play", "pause"],
    char: "⏯",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  PO = {
    keywords: ["backward"],
    char: "⏮",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  MO = {
    keywords: ["blue-square", "play", "speed", "continue"],
    char: "⏩",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  HO = {
    keywords: ["play", "blue-square"],
    char: "⏪",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  UO = {
    keywords: ["blue-square", "shuffle", "music", "random"],
    char: "🔀",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  jO = {
    keywords: ["loop", "record"],
    char: "🔁",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  qO = {
    keywords: ["blue-square", "loop"],
    char: "🔂",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  YO = {
    keywords: ["blue-square", "left", "direction"],
    char: "◀️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  $O = {
    keywords: [
      "blue-square",
      "triangle",
      "direction",
      "point",
      "forward",
      "top",
    ],
    char: "🔼",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  VO = {
    keywords: ["blue-square", "direction", "bottom"],
    char: "🔽",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  WO = {
    keywords: ["blue-square", "direction", "top"],
    char: "⏫",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  GO = {
    keywords: ["blue-square", "direction", "bottom"],
    char: "⏬",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  QO = {
    keywords: ["blue-square", "next"],
    char: "➡️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  XO = {
    keywords: ["blue-square", "previous", "back"],
    char: "⬅️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  KO = {
    keywords: ["blue-square", "continue", "top", "direction"],
    char: "⬆️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  JO = {
    keywords: ["blue-square", "direction", "bottom"],
    char: "⬇️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  ZO = {
    keywords: ["blue-square", "point", "direction", "diagonal", "northeast"],
    char: "↗️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  eL = {
    keywords: ["blue-square", "direction", "diagonal", "southeast"],
    char: "↘️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  tL = {
    keywords: ["blue-square", "direction", "diagonal", "southwest"],
    char: "↙️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  aL = {
    keywords: ["blue-square", "point", "direction", "diagonal", "northwest"],
    char: "↖️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  rL = {
    keywords: ["blue-square", "direction", "way", "vertical"],
    char: "↕️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  nL = {
    keywords: ["shape", "direction", "horizontal", "sideways"],
    char: "↔️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  iL = {
    keywords: ["blue-square", "sync", "cycle"],
    char: "🔄",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  sL = {
    keywords: ["blue-square", "return", "rotate", "direction"],
    char: "↪️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  oL = {
    keywords: ["back", "return", "blue-square", "undo", "enter"],
    char: "↩️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  cL = {
    keywords: ["blue-square", "direction", "top"],
    char: "⤴️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  uL = {
    keywords: ["blue-square", "direction", "bottom"],
    char: "⤵️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  lL = {
    keywords: ["symbol", "blue-square", "twitter"],
    char: "#️⃣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  fL = {
    keywords: ["blue-square", "alphabet", "letter"],
    char: "ℹ️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  hL = {
    keywords: ["blue-square", "alphabet"],
    char: "🔤",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  dL = {
    keywords: ["blue-square", "alphabet"],
    char: "🔡",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  pL = {
    keywords: ["alphabet", "words", "blue-square"],
    char: "🔠",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  _L = {
    keywords: [
      "blue-square",
      "music",
      "note",
      "ampersand",
      "percent",
      "glyphs",
      "characters",
    ],
    char: "🔣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  mL = {
    keywords: ["score", "tone", "sound"],
    char: "🎵",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  gL = {
    keywords: ["music", "score"],
    char: "🎶",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  yL = {
    keywords: ["draw", "line", "moustache", "mustache", "squiggle", "scribble"],
    char: "〰️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  kL = {
    keywords: ["scribble", "draw", "shape", "squiggle"],
    char: "➰",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  bL = {
    keywords: ["ok", "nike", "answer", "yes", "tick"],
    char: "✔️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  wL = {
    keywords: ["sync", "cycle", "round", "repeat"],
    char: "🔃",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  EL = {
    keywords: ["math", "calculation", "addition", "more", "increase"],
    char: "➕",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  TL = {
    keywords: ["math", "calculation", "subtract", "less"],
    char: "➖",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  AL = {
    keywords: ["divide", "math", "calculation"],
    char: "➗",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  CL = {
    keywords: ["math", "calculation"],
    char: "✖️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  xL = {
    keywords: ["forever"],
    char: "♾",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  DL = {
    keywords: ["money", "sales", "payment", "currency", "buck"],
    char: "💲",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  zL = {
    keywords: ["money", "sales", "dollar", "travel"],
    char: "💱",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  IL = {
    keywords: ["ip", "license", "circle", "law", "legal"],
    char: "©️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  SL = {
    keywords: ["alphabet", "circle"],
    char: "®️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  NL = {
    keywords: ["trademark", "brand", "law", "legal"],
    char: "™️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  FL = {
    keywords: ["words", "arrow"],
    char: "🔚",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  OL = {
    keywords: ["arrow", "words", "return"],
    char: "🔙",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  LL = {
    keywords: ["arrow", "words"],
    char: "🔛",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  RL = {
    keywords: ["words", "blue-square"],
    char: "🔝",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  vL = {
    keywords: ["arrow", "words"],
    char: "🔜",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  BL = {
    keywords: [
      "ok",
      "agree",
      "confirm",
      "black-square",
      "vote",
      "election",
      "yes",
      "tick",
    ],
    char: "☑️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  PL = {
    keywords: ["input", "old", "music", "circle"],
    char: "🔘",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  ML = {
    keywords: ["shape", "round"],
    char: "⚪",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  HL = {
    keywords: ["shape", "button", "round"],
    char: "⚫",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  UL = {
    keywords: ["shape", "error", "danger"],
    char: "🔴",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  jL = {
    keywords: ["shape", "icon", "button"],
    char: "🔵",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  qL = {
    keywords: ["shape", "jewel", "gem"],
    char: "🔸",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  YL = {
    keywords: ["shape", "jewel", "gem"],
    char: "🔹",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  $L = {
    keywords: ["shape", "jewel", "gem"],
    char: "🔶",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  VL = {
    keywords: ["shape", "jewel", "gem"],
    char: "🔷",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  WL = {
    keywords: ["shape", "direction", "up", "top"],
    char: "🔺",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  GL = {
    keywords: ["shape", "icon"],
    char: "▪️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  QL = {
    keywords: ["shape", "icon"],
    char: "▫️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  XL = {
    keywords: ["shape", "icon", "button"],
    char: "⬛",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  KL = {
    keywords: ["shape", "icon", "stone", "button"],
    char: "⬜",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  JL = {
    keywords: ["shape", "direction", "bottom"],
    char: "🔻",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  ZL = {
    keywords: ["shape", "button", "icon"],
    char: "◼️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  e8 = {
    keywords: ["shape", "stone", "icon"],
    char: "◻️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  t8 = {
    keywords: ["icon", "shape", "button"],
    char: "◾",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  a8 = {
    keywords: ["shape", "stone", "icon", "button"],
    char: "◽",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  r8 = {
    keywords: ["shape", "input", "frame"],
    char: "🔲",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  n8 = {
    keywords: ["shape", "input"],
    char: "🔳",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  i8 = {
    keywords: ["sound", "volume", "silence", "broadcast"],
    char: "🔈",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  s8 = {
    keywords: ["volume", "speaker", "broadcast"],
    char: "🔉",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  o8 = {
    keywords: ["volume", "noise", "noisy", "speaker", "broadcast"],
    char: "🔊",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  c8 = {
    keywords: ["sound", "volume", "silence", "quiet"],
    char: "🔇",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  u8 = {
    keywords: ["sound", "speaker", "volume"],
    char: "📣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  l8 = {
    keywords: ["volume", "sound"],
    char: "📢",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  f8 = {
    keywords: ["sound", "notification", "christmas", "xmas", "chime"],
    char: "🔔",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  h8 = {
    keywords: ["sound", "volume", "mute", "quiet", "silent"],
    char: "🔕",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  d8 = {
    keywords: ["poker", "cards", "game", "play", "magic"],
    char: "🃏",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  p8 = {
    keywords: ["game", "play", "chinese", "kanji"],
    char: "🀄",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  _8 = {
    keywords: ["poker", "cards", "suits", "magic"],
    char: "♠️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  m8 = {
    keywords: ["poker", "cards", "magic", "suits"],
    char: "♣️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  g8 = {
    keywords: ["poker", "cards", "magic", "suits"],
    char: "♥️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  y8 = {
    keywords: ["poker", "cards", "magic", "suits"],
    char: "♦️",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  k8 = {
    keywords: ["game", "sunset", "red"],
    char: "🎴",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  b8 = {
    keywords: ["bubble", "cloud", "speech", "thinking", "dream"],
    char: "💭",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  w8 = {
    keywords: ["caption", "speech", "thinking", "mad"],
    char: "🗯",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  E8 = {
    keywords: ["bubble", "words", "message", "talk", "chatting"],
    char: "💬",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  T8 = {
    keywords: ["words", "message", "talk", "chatting"],
    char: "🗨",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  A8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕐",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  C8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕑",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  x8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕒",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  D8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕓",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  z8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕔",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  I8 = {
    keywords: ["time", "late", "early", "schedule", "dawn", "dusk"],
    char: "🕕",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  S8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕖",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  N8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕗",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  F8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕘",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  O8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕙",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  L8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕚",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  R8 = {
    keywords: [
      "time",
      "noon",
      "midnight",
      "midday",
      "late",
      "early",
      "schedule",
    ],
    char: "🕛",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  v8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕜",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  B8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕝",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  P8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕞",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  M8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕟",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  H8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕠",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  U8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕡",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  j8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕢",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  q8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕣",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  Y8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕤",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  $8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕥",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  V8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕦",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  W8 = {
    keywords: ["time", "late", "early", "schedule"],
    char: "🕧",
    fitzpatrick_scale: !1,
    category: "symbols",
  },
  G8 = {
    keywords: ["af", "flag", "nation", "country", "banner"],
    char: "🇦🇫",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Q8 = {
    keywords: ["Åland", "islands", "flag", "nation", "country", "banner"],
    char: "🇦🇽",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  X8 = {
    keywords: ["al", "flag", "nation", "country", "banner"],
    char: "🇦🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  K8 = {
    keywords: ["dz", "flag", "nation", "country", "banner"],
    char: "🇩🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  J8 = {
    keywords: ["american", "ws", "flag", "nation", "country", "banner"],
    char: "🇦🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Z8 = {
    keywords: ["ad", "flag", "nation", "country", "banner"],
    char: "🇦🇩",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  eR = {
    keywords: ["ao", "flag", "nation", "country", "banner"],
    char: "🇦🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  tR = {
    keywords: ["ai", "flag", "nation", "country", "banner"],
    char: "🇦🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  aR = {
    keywords: ["aq", "flag", "nation", "country", "banner"],
    char: "🇦🇶",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  rR = {
    keywords: ["antigua", "barbuda", "flag", "nation", "country", "banner"],
    char: "🇦🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  nR = {
    keywords: ["ar", "flag", "nation", "country", "banner"],
    char: "🇦🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  iR = {
    keywords: ["am", "flag", "nation", "country", "banner"],
    char: "🇦🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  sR = {
    keywords: ["aw", "flag", "nation", "country", "banner"],
    char: "🇦🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  oR = {
    keywords: ["au", "flag", "nation", "country", "banner"],
    char: "🇦🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  cR = {
    keywords: ["at", "flag", "nation", "country", "banner"],
    char: "🇦🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  uR = {
    keywords: ["az", "flag", "nation", "country", "banner"],
    char: "🇦🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  lR = {
    keywords: ["bs", "flag", "nation", "country", "banner"],
    char: "🇧🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  fR = {
    keywords: ["bh", "flag", "nation", "country", "banner"],
    char: "🇧🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  hR = {
    keywords: ["bd", "flag", "nation", "country", "banner"],
    char: "🇧🇩",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  dR = {
    keywords: ["bb", "flag", "nation", "country", "banner"],
    char: "🇧🇧",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  pR = {
    keywords: ["by", "flag", "nation", "country", "banner"],
    char: "🇧🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  _R = {
    keywords: ["be", "flag", "nation", "country", "banner"],
    char: "🇧🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  mR = {
    keywords: ["bz", "flag", "nation", "country", "banner"],
    char: "🇧🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  gR = {
    keywords: ["bj", "flag", "nation", "country", "banner"],
    char: "🇧🇯",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  yR = {
    keywords: ["bm", "flag", "nation", "country", "banner"],
    char: "🇧🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  kR = {
    keywords: ["bt", "flag", "nation", "country", "banner"],
    char: "🇧🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  bR = {
    keywords: ["bo", "flag", "nation", "country", "banner"],
    char: "🇧🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  wR = {
    keywords: ["bonaire", "flag", "nation", "country", "banner"],
    char: "🇧🇶",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  ER = {
    keywords: ["bosnia", "herzegovina", "flag", "nation", "country", "banner"],
    char: "🇧🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  TR = {
    keywords: ["bw", "flag", "nation", "country", "banner"],
    char: "🇧🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  AR = {
    keywords: ["br", "flag", "nation", "country", "banner"],
    char: "🇧🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  CR = {
    keywords: [
      "british",
      "indian",
      "ocean",
      "territory",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇮🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  xR = {
    keywords: [
      "british",
      "virgin",
      "islands",
      "bvi",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇻🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  DR = {
    keywords: ["bn", "darussalam", "flag", "nation", "country", "banner"],
    char: "🇧🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  zR = {
    keywords: ["bg", "flag", "nation", "country", "banner"],
    char: "🇧🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  IR = {
    keywords: ["burkina", "faso", "flag", "nation", "country", "banner"],
    char: "🇧🇫",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  SR = {
    keywords: ["bi", "flag", "nation", "country", "banner"],
    char: "🇧🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  NR = {
    keywords: ["cabo", "verde", "flag", "nation", "country", "banner"],
    char: "🇨🇻",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  FR = {
    keywords: ["kh", "flag", "nation", "country", "banner"],
    char: "🇰🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  OR = {
    keywords: ["cm", "flag", "nation", "country", "banner"],
    char: "🇨🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  LR = {
    keywords: ["ca", "flag", "nation", "country", "banner"],
    char: "🇨🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  RR = {
    keywords: ["canary", "islands", "flag", "nation", "country", "banner"],
    char: "🇮🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  vR = {
    keywords: ["cayman", "islands", "flag", "nation", "country", "banner"],
    char: "🇰🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  BR = {
    keywords: [
      "central",
      "african",
      "republic",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇨🇫",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  PR = {
    keywords: ["td", "flag", "nation", "country", "banner"],
    char: "🇹🇩",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  MR = {
    keywords: ["flag", "nation", "country", "banner"],
    char: "🇨🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  HR = {
    keywords: [
      "china",
      "chinese",
      "prc",
      "flag",
      "country",
      "nation",
      "banner",
    ],
    char: "🇨🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  UR = {
    keywords: ["christmas", "island", "flag", "nation", "country", "banner"],
    char: "🇨🇽",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  jR = {
    keywords: [
      "cocos",
      "keeling",
      "islands",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇨🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  qR = {
    keywords: ["co", "flag", "nation", "country", "banner"],
    char: "🇨🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  YR = {
    keywords: ["km", "flag", "nation", "country", "banner"],
    char: "🇰🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  $R = {
    keywords: ["congo", "flag", "nation", "country", "banner"],
    char: "🇨🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  VR = {
    keywords: [
      "congo",
      "democratic",
      "republic",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇨🇩",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  WR = {
    keywords: ["cook", "islands", "flag", "nation", "country", "banner"],
    char: "🇨🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  GR = {
    keywords: ["costa", "rica", "flag", "nation", "country", "banner"],
    char: "🇨🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  QR = {
    keywords: ["hr", "flag", "nation", "country", "banner"],
    char: "🇭🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  XR = {
    keywords: ["cu", "flag", "nation", "country", "banner"],
    char: "🇨🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  KR = {
    keywords: ["curaçao", "flag", "nation", "country", "banner"],
    char: "🇨🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  JR = {
    keywords: ["cy", "flag", "nation", "country", "banner"],
    char: "🇨🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  ZR = {
    keywords: ["cz", "flag", "nation", "country", "banner"],
    char: "🇨🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  e5 = {
    keywords: ["dk", "flag", "nation", "country", "banner"],
    char: "🇩🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  t5 = {
    keywords: ["dj", "flag", "nation", "country", "banner"],
    char: "🇩🇯",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  a5 = {
    keywords: ["dm", "flag", "nation", "country", "banner"],
    char: "🇩🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  r5 = {
    keywords: ["dominican", "republic", "flag", "nation", "country", "banner"],
    char: "🇩🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  n5 = {
    keywords: ["ec", "flag", "nation", "country", "banner"],
    char: "🇪🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  i5 = {
    keywords: ["eg", "flag", "nation", "country", "banner"],
    char: "🇪🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  s5 = {
    keywords: ["el", "salvador", "flag", "nation", "country", "banner"],
    char: "🇸🇻",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  o5 = {
    keywords: ["equatorial", "gn", "flag", "nation", "country", "banner"],
    char: "🇬🇶",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  c5 = {
    keywords: ["er", "flag", "nation", "country", "banner"],
    char: "🇪🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  u5 = {
    keywords: ["ee", "flag", "nation", "country", "banner"],
    char: "🇪🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  l5 = {
    keywords: ["et", "flag", "nation", "country", "banner"],
    char: "🇪🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  f5 = {
    keywords: ["european", "union", "flag", "banner"],
    char: "🇪🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  h5 = {
    keywords: [
      "falkland",
      "islands",
      "malvinas",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇫🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  d5 = {
    keywords: ["faroe", "islands", "flag", "nation", "country", "banner"],
    char: "🇫🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  p5 = {
    keywords: ["fj", "flag", "nation", "country", "banner"],
    char: "🇫🇯",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  _5 = {
    keywords: ["fi", "flag", "nation", "country", "banner"],
    char: "🇫🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  m5 = {
    keywords: ["banner", "flag", "nation", "france", "french", "country"],
    char: "🇫🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  g5 = {
    keywords: ["french", "guiana", "flag", "nation", "country", "banner"],
    char: "🇬🇫",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  y5 = {
    keywords: ["french", "polynesia", "flag", "nation", "country", "banner"],
    char: "🇵🇫",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  k5 = {
    keywords: [
      "french",
      "southern",
      "territories",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇹🇫",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  b5 = {
    keywords: ["ga", "flag", "nation", "country", "banner"],
    char: "🇬🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  w5 = {
    keywords: ["gm", "flag", "nation", "country", "banner"],
    char: "🇬🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  E5 = {
    keywords: ["ge", "flag", "nation", "country", "banner"],
    char: "🇬🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  T5 = {
    keywords: ["german", "nation", "flag", "country", "banner"],
    char: "🇩🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  A5 = {
    keywords: ["gh", "flag", "nation", "country", "banner"],
    char: "🇬🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  C5 = {
    keywords: ["gi", "flag", "nation", "country", "banner"],
    char: "🇬🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  x5 = {
    keywords: ["gr", "flag", "nation", "country", "banner"],
    char: "🇬🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  D5 = {
    keywords: ["gl", "flag", "nation", "country", "banner"],
    char: "🇬🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  z5 = {
    keywords: ["gd", "flag", "nation", "country", "banner"],
    char: "🇬🇩",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  I5 = {
    keywords: ["gp", "flag", "nation", "country", "banner"],
    char: "🇬🇵",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  S5 = {
    keywords: ["gu", "flag", "nation", "country", "banner"],
    char: "🇬🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  N5 = {
    keywords: ["gt", "flag", "nation", "country", "banner"],
    char: "🇬🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  F5 = {
    keywords: ["gg", "flag", "nation", "country", "banner"],
    char: "🇬🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  O5 = {
    keywords: ["gn", "flag", "nation", "country", "banner"],
    char: "🇬🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  L5 = {
    keywords: ["gw", "bissau", "flag", "nation", "country", "banner"],
    char: "🇬🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  R5 = {
    keywords: ["gy", "flag", "nation", "country", "banner"],
    char: "🇬🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  v5 = {
    keywords: ["ht", "flag", "nation", "country", "banner"],
    char: "🇭🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  B5 = {
    keywords: ["hn", "flag", "nation", "country", "banner"],
    char: "🇭🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  P5 = {
    keywords: ["hong", "kong", "flag", "nation", "country", "banner"],
    char: "🇭🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  M5 = {
    keywords: ["hu", "flag", "nation", "country", "banner"],
    char: "🇭🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  H5 = {
    keywords: ["is", "flag", "nation", "country", "banner"],
    char: "🇮🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  U5 = {
    keywords: ["in", "flag", "nation", "country", "banner"],
    char: "🇮🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  j5 = {
    keywords: ["flag", "nation", "country", "banner"],
    char: "🇮🇩",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  q5 = {
    keywords: [
      "iran,",
      "islamic",
      "republic",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇮🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Y5 = {
    keywords: ["iq", "flag", "nation", "country", "banner"],
    char: "🇮🇶",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  $5 = {
    keywords: ["ie", "flag", "nation", "country", "banner"],
    char: "🇮🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  V5 = {
    keywords: ["isle", "man", "flag", "nation", "country", "banner"],
    char: "🇮🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  W5 = {
    keywords: ["il", "flag", "nation", "country", "banner"],
    char: "🇮🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  G5 = {
    keywords: ["italy", "flag", "nation", "country", "banner"],
    char: "🇮🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Q5 = {
    keywords: ["ivory", "coast", "flag", "nation", "country", "banner"],
    char: "🇨🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  X5 = {
    keywords: ["jm", "flag", "nation", "country", "banner"],
    char: "🇯🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  K5 = {
    keywords: ["japanese", "nation", "flag", "country", "banner"],
    char: "🇯🇵",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  J5 = {
    keywords: ["je", "flag", "nation", "country", "banner"],
    char: "🇯🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Z5 = {
    keywords: ["jo", "flag", "nation", "country", "banner"],
    char: "🇯🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  e9 = {
    keywords: ["kz", "flag", "nation", "country", "banner"],
    char: "🇰🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  t9 = {
    keywords: ["ke", "flag", "nation", "country", "banner"],
    char: "🇰🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  a9 = {
    keywords: ["ki", "flag", "nation", "country", "banner"],
    char: "🇰🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  r9 = {
    keywords: ["xk", "flag", "nation", "country", "banner"],
    char: "🇽🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  n9 = {
    keywords: ["kw", "flag", "nation", "country", "banner"],
    char: "🇰🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  i9 = {
    keywords: ["kg", "flag", "nation", "country", "banner"],
    char: "🇰🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  s9 = {
    keywords: [
      "lao",
      "democratic",
      "republic",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇱🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  o9 = {
    keywords: ["lv", "flag", "nation", "country", "banner"],
    char: "🇱🇻",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  c9 = {
    keywords: ["lb", "flag", "nation", "country", "banner"],
    char: "🇱🇧",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  u9 = {
    keywords: ["ls", "flag", "nation", "country", "banner"],
    char: "🇱🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  l9 = {
    keywords: ["lr", "flag", "nation", "country", "banner"],
    char: "🇱🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  f9 = {
    keywords: ["ly", "flag", "nation", "country", "banner"],
    char: "🇱🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  h9 = {
    keywords: ["li", "flag", "nation", "country", "banner"],
    char: "🇱🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  d9 = {
    keywords: ["lt", "flag", "nation", "country", "banner"],
    char: "🇱🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  p9 = {
    keywords: ["lu", "flag", "nation", "country", "banner"],
    char: "🇱🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  _9 = {
    keywords: ["macao", "flag", "nation", "country", "banner"],
    char: "🇲🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  m9 = {
    keywords: ["macedonia,", "flag", "nation", "country", "banner"],
    char: "🇲🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  g9 = {
    keywords: ["mg", "flag", "nation", "country", "banner"],
    char: "🇲🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  y9 = {
    keywords: ["mw", "flag", "nation", "country", "banner"],
    char: "🇲🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  k9 = {
    keywords: ["my", "flag", "nation", "country", "banner"],
    char: "🇲🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  b9 = {
    keywords: ["mv", "flag", "nation", "country", "banner"],
    char: "🇲🇻",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  w9 = {
    keywords: ["ml", "flag", "nation", "country", "banner"],
    char: "🇲🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  E9 = {
    keywords: ["mt", "flag", "nation", "country", "banner"],
    char: "🇲🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  T9 = {
    keywords: ["marshall", "islands", "flag", "nation", "country", "banner"],
    char: "🇲🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  A9 = {
    keywords: ["mq", "flag", "nation", "country", "banner"],
    char: "🇲🇶",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  C9 = {
    keywords: ["mr", "flag", "nation", "country", "banner"],
    char: "🇲🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  x9 = {
    keywords: ["mu", "flag", "nation", "country", "banner"],
    char: "🇲🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  D9 = {
    keywords: ["yt", "flag", "nation", "country", "banner"],
    char: "🇾🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  z9 = {
    keywords: ["mx", "flag", "nation", "country", "banner"],
    char: "🇲🇽",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  I9 = {
    keywords: [
      "micronesia,",
      "federated",
      "states",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇫🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  S9 = {
    keywords: ["moldova,", "republic", "flag", "nation", "country", "banner"],
    char: "🇲🇩",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  N9 = {
    keywords: ["mc", "flag", "nation", "country", "banner"],
    char: "🇲🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  F9 = {
    keywords: ["mn", "flag", "nation", "country", "banner"],
    char: "🇲🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  O9 = {
    keywords: ["me", "flag", "nation", "country", "banner"],
    char: "🇲🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  L9 = {
    keywords: ["ms", "flag", "nation", "country", "banner"],
    char: "🇲🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  R9 = {
    keywords: ["ma", "flag", "nation", "country", "banner"],
    char: "🇲🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  v9 = {
    keywords: ["mz", "flag", "nation", "country", "banner"],
    char: "🇲🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  B9 = {
    keywords: ["mm", "flag", "nation", "country", "banner"],
    char: "🇲🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  P9 = {
    keywords: ["na", "flag", "nation", "country", "banner"],
    char: "🇳🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  M9 = {
    keywords: ["nr", "flag", "nation", "country", "banner"],
    char: "🇳🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  H9 = {
    keywords: ["np", "flag", "nation", "country", "banner"],
    char: "🇳🇵",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  U9 = {
    keywords: ["nl", "flag", "nation", "country", "banner"],
    char: "🇳🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  j9 = {
    keywords: ["new", "caledonia", "flag", "nation", "country", "banner"],
    char: "🇳🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  q9 = {
    keywords: ["new", "zealand", "flag", "nation", "country", "banner"],
    char: "🇳🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Y9 = {
    keywords: ["ni", "flag", "nation", "country", "banner"],
    char: "🇳🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  $9 = {
    keywords: ["ne", "flag", "nation", "country", "banner"],
    char: "🇳🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  V9 = {
    keywords: ["flag", "nation", "country", "banner"],
    char: "🇳🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  W9 = {
    keywords: ["nu", "flag", "nation", "country", "banner"],
    char: "🇳🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  G9 = {
    keywords: ["norfolk", "island", "flag", "nation", "country", "banner"],
    char: "🇳🇫",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Q9 = {
    keywords: [
      "northern",
      "mariana",
      "islands",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇲🇵",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  X9 = {
    keywords: ["north", "korea", "nation", "flag", "country", "banner"],
    char: "🇰🇵",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  K9 = {
    keywords: ["no", "flag", "nation", "country", "banner"],
    char: "🇳🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  J9 = {
    keywords: ["om_symbol", "flag", "nation", "country", "banner"],
    char: "🇴🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Z9 = {
    keywords: ["pk", "flag", "nation", "country", "banner"],
    char: "🇵🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  ev = {
    keywords: ["pw", "flag", "nation", "country", "banner"],
    char: "🇵🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  tv = {
    keywords: [
      "palestine",
      "palestinian",
      "territories",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇵🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  av = {
    keywords: ["pa", "flag", "nation", "country", "banner"],
    char: "🇵🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  rv = {
    keywords: ["papua", "new", "guinea", "flag", "nation", "country", "banner"],
    char: "🇵🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  nv = {
    keywords: ["py", "flag", "nation", "country", "banner"],
    char: "🇵🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  iv = {
    keywords: ["pe", "flag", "nation", "country", "banner"],
    char: "🇵🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  sv = {
    keywords: ["ph", "flag", "nation", "country", "banner"],
    char: "🇵🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  ov = {
    keywords: ["pitcairn", "flag", "nation", "country", "banner"],
    char: "🇵🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  cv = {
    keywords: ["pl", "flag", "nation", "country", "banner"],
    char: "🇵🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  uv = {
    keywords: ["pt", "flag", "nation", "country", "banner"],
    char: "🇵🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  lv = {
    keywords: ["puerto", "rico", "flag", "nation", "country", "banner"],
    char: "🇵🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  fv = {
    keywords: ["qa", "flag", "nation", "country", "banner"],
    char: "🇶🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  hv = {
    keywords: ["réunion", "flag", "nation", "country", "banner"],
    char: "🇷🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  dv = {
    keywords: ["ro", "flag", "nation", "country", "banner"],
    char: "🇷🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  pv = {
    keywords: ["russian", "federation", "flag", "nation", "country", "banner"],
    char: "🇷🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  _v = {
    keywords: ["rw", "flag", "nation", "country", "banner"],
    char: "🇷🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  mv = {
    keywords: ["saint", "barthélemy", "flag", "nation", "country", "banner"],
    char: "🇧🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  gv = {
    keywords: [
      "saint",
      "helena",
      "ascension",
      "tristan",
      "cunha",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇸🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  yv = {
    keywords: [
      "saint",
      "kitts",
      "nevis",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇰🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  kv = {
    keywords: ["saint", "lucia", "flag", "nation", "country", "banner"],
    char: "🇱🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  bv = {
    keywords: [
      "saint",
      "pierre",
      "miquelon",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇵🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  wv = {
    keywords: [
      "saint",
      "vincent",
      "grenadines",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇻🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Ev = {
    keywords: ["ws", "flag", "nation", "country", "banner"],
    char: "🇼🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Tv = {
    keywords: ["san", "marino", "flag", "nation", "country", "banner"],
    char: "🇸🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Av = {
    keywords: [
      "sao",
      "tome",
      "principe",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇸🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Cv = {
    keywords: ["flag", "nation", "country", "banner"],
    char: "🇸🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  xv = {
    keywords: ["sn", "flag", "nation", "country", "banner"],
    char: "🇸🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Dv = {
    keywords: ["rs", "flag", "nation", "country", "banner"],
    char: "🇷🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  zv = {
    keywords: ["sc", "flag", "nation", "country", "banner"],
    char: "🇸🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Iv = {
    keywords: ["sierra", "leone", "flag", "nation", "country", "banner"],
    char: "🇸🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Sv = {
    keywords: ["sg", "flag", "nation", "country", "banner"],
    char: "🇸🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Nv = {
    keywords: [
      "sint",
      "maarten",
      "dutch",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇸🇽",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Fv = {
    keywords: ["sk", "flag", "nation", "country", "banner"],
    char: "🇸🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Ov = {
    keywords: ["si", "flag", "nation", "country", "banner"],
    char: "🇸🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Lv = {
    keywords: ["solomon", "islands", "flag", "nation", "country", "banner"],
    char: "🇸🇧",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Rv = {
    keywords: ["so", "flag", "nation", "country", "banner"],
    char: "🇸🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  vv = {
    keywords: ["south", "africa", "flag", "nation", "country", "banner"],
    char: "🇿🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Bv = {
    keywords: [
      "south",
      "georgia",
      "sandwich",
      "islands",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇬🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Pv = {
    keywords: ["south", "korea", "nation", "flag", "country", "banner"],
    char: "🇰🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Mv = {
    keywords: ["south", "sd", "flag", "nation", "country", "banner"],
    char: "🇸🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Hv = {
    keywords: ["spain", "flag", "nation", "country", "banner"],
    char: "🇪🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Uv = {
    keywords: ["sri", "lanka", "flag", "nation", "country", "banner"],
    char: "🇱🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  jv = {
    keywords: ["sd", "flag", "nation", "country", "banner"],
    char: "🇸🇩",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  qv = {
    keywords: ["sr", "flag", "nation", "country", "banner"],
    char: "🇸🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Yv = {
    keywords: ["sz", "flag", "nation", "country", "banner"],
    char: "🇸🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  $v = {
    keywords: ["se", "flag", "nation", "country", "banner"],
    char: "🇸🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Vv = {
    keywords: ["ch", "flag", "nation", "country", "banner"],
    char: "🇨🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Wv = {
    keywords: [
      "syrian",
      "arab",
      "republic",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇸🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Gv = {
    keywords: ["tw", "flag", "nation", "country", "banner"],
    char: "🇹🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Qv = {
    keywords: ["tj", "flag", "nation", "country", "banner"],
    char: "🇹🇯",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Xv = {
    keywords: [
      "tanzania,",
      "united",
      "republic",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇹🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Kv = {
    keywords: ["th", "flag", "nation", "country", "banner"],
    char: "🇹🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Jv = {
    keywords: ["timor", "leste", "flag", "nation", "country", "banner"],
    char: "🇹🇱",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  Zv = {
    keywords: ["tg", "flag", "nation", "country", "banner"],
    char: "🇹🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  eB = {
    keywords: ["tk", "flag", "nation", "country", "banner"],
    char: "🇹🇰",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  tB = {
    keywords: ["to", "flag", "nation", "country", "banner"],
    char: "🇹🇴",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  aB = {
    keywords: ["trinidad", "tobago", "flag", "nation", "country", "banner"],
    char: "🇹🇹",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  rB = {
    keywords: ["tn", "flag", "nation", "country", "banner"],
    char: "🇹🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  nB = {
    keywords: ["turkey", "flag", "nation", "country", "banner"],
    char: "🇹🇷",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  iB = {
    keywords: ["flag", "nation", "country", "banner"],
    char: "🇹🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  sB = {
    keywords: [
      "turks",
      "caicos",
      "islands",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇹🇨",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  oB = {
    keywords: ["flag", "nation", "country", "banner"],
    char: "🇹🇻",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  cB = {
    keywords: ["ug", "flag", "nation", "country", "banner"],
    char: "🇺🇬",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  uB = {
    keywords: ["ua", "flag", "nation", "country", "banner"],
    char: "🇺🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  lB = {
    keywords: [
      "united",
      "arab",
      "emirates",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇦🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  fB = {
    keywords: [
      "united",
      "kingdom",
      "great",
      "britain",
      "northern",
      "ireland",
      "flag",
      "nation",
      "country",
      "banner",
      "british",
      "UK",
      "english",
      "england",
      "union jack",
    ],
    char: "🇬🇧",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  hB = {
    keywords: ["flag", "english"],
    char: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  dB = {
    keywords: ["flag", "scottish"],
    char: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  pB = {
    keywords: ["flag", "welsh"],
    char: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  _B = {
    keywords: [
      "united",
      "states",
      "america",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇺🇸",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  mB = {
    keywords: [
      "virgin",
      "islands",
      "us",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇻🇮",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  gB = {
    keywords: ["uy", "flag", "nation", "country", "banner"],
    char: "🇺🇾",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  yB = {
    keywords: ["uz", "flag", "nation", "country", "banner"],
    char: "🇺🇿",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  kB = {
    keywords: ["vu", "flag", "nation", "country", "banner"],
    char: "🇻🇺",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  bB = {
    keywords: ["vatican", "city", "flag", "nation", "country", "banner"],
    char: "🇻🇦",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  wB = {
    keywords: [
      "ve",
      "bolivarian",
      "republic",
      "flag",
      "nation",
      "country",
      "banner",
    ],
    char: "🇻🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  EB = {
    keywords: ["viet", "nam", "flag", "nation", "country", "banner"],
    char: "🇻🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  TB = {
    keywords: ["wallis", "futuna", "flag", "nation", "country", "banner"],
    char: "🇼🇫",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  AB = {
    keywords: ["western", "sahara", "flag", "nation", "country", "banner"],
    char: "🇪🇭",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  CB = {
    keywords: ["ye", "flag", "nation", "country", "banner"],
    char: "🇾🇪",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  xB = {
    keywords: ["zm", "flag", "nation", "country", "banner"],
    char: "🇿🇲",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  DB = {
    keywords: ["zw", "flag", "nation", "country", "banner"],
    char: "🇿🇼",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  zB = {
    keywords: ["un", "flag", "banner"],
    char: "🇺🇳",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  IB = {
    keywords: ["skull", "crossbones", "flag", "banner"],
    char: "🏴‍☠️",
    fitzpatrick_scale: !1,
    category: "flags",
  },
  SB = {
    100: {
      keywords: [
        "score",
        "perfect",
        "numbers",
        "century",
        "exam",
        "quiz",
        "test",
        "pass",
        "hundred",
      ],
      char: "💯",
      fitzpatrick_scale: !1,
      category: "symbols",
    },
    1234: {
      keywords: ["numbers", "blue-square"],
      char: "🔢",
      fitzpatrick_scale: !1,
      category: "symbols",
    },
    grinning: Mg,
    grimacing: Hg,
    grin: Ug,
    joy: jg,
    rofl: qg,
    partying: Yg,
    smiley: $g,
    smile: Vg,
    sweat_smile: Wg,
    laughing: Gg,
    innocent: Qg,
    wink: Xg,
    blush: Kg,
    slightly_smiling_face: Jg,
    upside_down_face: Zg,
    relaxed: e0,
    yum: t0,
    relieved: a0,
    heart_eyes: r0,
    smiling_face_with_three_hearts: n0,
    kissing_heart: i0,
    kissing: s0,
    kissing_smiling_eyes: o0,
    kissing_closed_eyes: c0,
    stuck_out_tongue_winking_eye: u0,
    zany: l0,
    raised_eyebrow: f0,
    monocle: h0,
    stuck_out_tongue_closed_eyes: d0,
    stuck_out_tongue: p0,
    money_mouth_face: _0,
    nerd_face: m0,
    sunglasses: g0,
    star_struck: y0,
    clown_face: k0,
    cowboy_hat_face: b0,
    hugs: w0,
    smirk: E0,
    no_mouth: T0,
    neutral_face: A0,
    expressionless: C0,
    unamused: x0,
    roll_eyes: D0,
    thinking: z0,
    lying_face: I0,
    hand_over_mouth: S0,
    shushing: N0,
    symbols_over_mouth: F0,
    exploding_head: O0,
    flushed: L0,
    disappointed: R0,
    worried: v0,
    angry: B0,
    rage: P0,
    pensive: M0,
    confused: H0,
    slightly_frowning_face: U0,
    frowning_face: j0,
    persevere: q0,
    confounded: Y0,
    tired_face: $0,
    weary: V0,
    pleading: W0,
    triumph: G0,
    open_mouth: Q0,
    scream: X0,
    fearful: K0,
    cold_sweat: J0,
    hushed: Z0,
    frowning: ey,
    anguished: ty,
    cry: ay,
    disappointed_relieved: ry,
    drooling_face: ny,
    sleepy: iy,
    sweat: sy,
    hot: oy,
    cold: cy,
    sob: uy,
    dizzy_face: ly,
    astonished: fy,
    zipper_mouth_face: hy,
    nauseated_face: dy,
    sneezing_face: py,
    vomiting: _y,
    mask: my,
    face_with_thermometer: gy,
    face_with_head_bandage: yy,
    woozy: ky,
    sleeping: by,
    zzz: wy,
    poop: Ey,
    smiling_imp: Ty,
    imp: Ay,
    japanese_ogre: Cy,
    japanese_goblin: xy,
    skull: Dy,
    ghost: zy,
    alien: Iy,
    robot: Sy,
    smiley_cat: Ny,
    smile_cat: Fy,
    joy_cat: Oy,
    heart_eyes_cat: Ly,
    smirk_cat: Ry,
    kissing_cat: vy,
    scream_cat: By,
    crying_cat_face: Py,
    pouting_cat: My,
    palms_up: Hy,
    raised_hands: Uy,
    clap: jy,
    wave: qy,
    call_me_hand: Yy,
    "+1": {
      keywords: [
        "thumbsup",
        "yes",
        "awesome",
        "good",
        "agree",
        "accept",
        "cool",
        "hand",
        "like",
      ],
      char: "👍",
      fitzpatrick_scale: !0,
      category: "people",
    },
    "-1": {
      keywords: ["thumbsdown", "no", "dislike", "hand"],
      char: "👎",
      fitzpatrick_scale: !0,
      category: "people",
    },
    facepunch: $y,
    fist: Vy,
    fist_left: Wy,
    fist_right: Gy,
    v: Qy,
    ok_hand: Xy,
    raised_hand: Ky,
    raised_back_of_hand: Jy,
    open_hands: Zy,
    muscle: ek,
    pray: tk,
    foot: ak,
    leg: rk,
    handshake: nk,
    point_up: ik,
    point_up_2: sk,
    point_down: ok,
    point_left: ck,
    point_right: uk,
    fu: lk,
    raised_hand_with_fingers_splayed: fk,
    love_you: hk,
    metal: dk,
    crossed_fingers: pk,
    vulcan_salute: _k,
    writing_hand: mk,
    selfie: gk,
    nail_care: yk,
    lips: kk,
    tooth: bk,
    tongue: wk,
    ear: Ek,
    nose: Tk,
    eye: Ak,
    eyes: Ck,
    brain: xk,
    bust_in_silhouette: Dk,
    busts_in_silhouette: zk,
    speaking_head: Ik,
    baby: Sk,
    child: Nk,
    boy: Fk,
    girl: Ok,
    adult: Lk,
    man: Rk,
    woman: vk,
    blonde_woman: Bk,
    blonde_man: Pk,
    bearded_person: Mk,
    older_adult: Hk,
    older_man: Uk,
    older_woman: jk,
    man_with_gua_pi_mao: qk,
    woman_with_headscarf: Yk,
    woman_with_turban: $k,
    man_with_turban: Vk,
    policewoman: Wk,
    policeman: Gk,
    construction_worker_woman: Qk,
    construction_worker_man: Xk,
    guardswoman: Kk,
    guardsman: Jk,
    female_detective: Zk,
    male_detective: eb,
    woman_health_worker: tb,
    man_health_worker: ab,
    woman_farmer: rb,
    man_farmer: nb,
    woman_cook: ib,
    man_cook: sb,
    woman_student: ob,
    man_student: cb,
    woman_singer: ub,
    man_singer: lb,
    woman_teacher: fb,
    man_teacher: hb,
    woman_factory_worker: db,
    man_factory_worker: pb,
    woman_technologist: _b,
    man_technologist: mb,
    woman_office_worker: gb,
    man_office_worker: yb,
    woman_mechanic: kb,
    man_mechanic: bb,
    woman_scientist: wb,
    man_scientist: Eb,
    woman_artist: Tb,
    man_artist: Ab,
    woman_firefighter: Cb,
    man_firefighter: xb,
    woman_pilot: Db,
    man_pilot: zb,
    woman_astronaut: Ib,
    man_astronaut: Sb,
    woman_judge: Nb,
    man_judge: Fb,
    woman_superhero: Ob,
    man_superhero: Lb,
    woman_supervillain: Rb,
    man_supervillain: vb,
    mrs_claus: Bb,
    santa: Pb,
    sorceress: Mb,
    wizard: Hb,
    woman_elf: Ub,
    man_elf: jb,
    woman_vampire: qb,
    man_vampire: Yb,
    woman_zombie: $b,
    man_zombie: Vb,
    woman_genie: Wb,
    man_genie: Gb,
    mermaid: Qb,
    merman: Xb,
    woman_fairy: Kb,
    man_fairy: Jb,
    angel: Zb,
    pregnant_woman: e1,
    breastfeeding: t1,
    princess: a1,
    prince: r1,
    bride_with_veil: n1,
    man_in_tuxedo: i1,
    running_woman: s1,
    running_man: o1,
    walking_woman: c1,
    walking_man: u1,
    dancer: l1,
    man_dancing: f1,
    dancing_women: h1,
    dancing_men: d1,
    couple: p1,
    two_men_holding_hands: _1,
    two_women_holding_hands: m1,
    bowing_woman: g1,
    bowing_man: y1,
    man_facepalming: k1,
    woman_facepalming: b1,
    woman_shrugging: w1,
    man_shrugging: E1,
    tipping_hand_woman: T1,
    tipping_hand_man: A1,
    no_good_woman: C1,
    no_good_man: x1,
    ok_woman: D1,
    ok_man: z1,
    raising_hand_woman: I1,
    raising_hand_man: S1,
    pouting_woman: N1,
    pouting_man: F1,
    frowning_woman: O1,
    frowning_man: L1,
    haircut_woman: R1,
    haircut_man: v1,
    massage_woman: B1,
    massage_man: P1,
    woman_in_steamy_room: M1,
    man_in_steamy_room: H1,
    couple_with_heart_woman_man: U1,
    couple_with_heart_woman_woman: j1,
    couple_with_heart_man_man: q1,
    couplekiss_man_woman: Y1,
    couplekiss_woman_woman: $1,
    couplekiss_man_man: V1,
    family_man_woman_boy: W1,
    family_man_woman_girl: G1,
    family_man_woman_girl_boy: Q1,
    family_man_woman_boy_boy: X1,
    family_man_woman_girl_girl: K1,
    family_woman_woman_boy: J1,
    family_woman_woman_girl: Z1,
    family_woman_woman_girl_boy: ew,
    family_woman_woman_boy_boy: tw,
    family_woman_woman_girl_girl: aw,
    family_man_man_boy: rw,
    family_man_man_girl: nw,
    family_man_man_girl_boy: iw,
    family_man_man_boy_boy: sw,
    family_man_man_girl_girl: ow,
    family_woman_boy: cw,
    family_woman_girl: uw,
    family_woman_girl_boy: lw,
    family_woman_boy_boy: fw,
    family_woman_girl_girl: hw,
    family_man_boy: dw,
    family_man_girl: pw,
    family_man_girl_boy: _w,
    family_man_boy_boy: mw,
    family_man_girl_girl: gw,
    yarn: yw,
    thread: kw,
    coat: bw,
    labcoat: ww,
    womans_clothes: Ew,
    tshirt: Tw,
    jeans: Aw,
    necktie: Cw,
    dress: xw,
    bikini: Dw,
    kimono: zw,
    lipstick: Iw,
    kiss: Sw,
    footprints: Nw,
    flat_shoe: Fw,
    high_heel: Ow,
    sandal: Lw,
    boot: Rw,
    mans_shoe: vw,
    athletic_shoe: Bw,
    hiking_boot: Pw,
    socks: Mw,
    gloves: Hw,
    scarf: Uw,
    womans_hat: jw,
    tophat: qw,
    billed_hat: Yw,
    rescue_worker_helmet: $w,
    mortar_board: Vw,
    crown: Ww,
    school_satchel: Gw,
    luggage: Qw,
    pouch: Xw,
    purse: Kw,
    handbag: Jw,
    briefcase: Zw,
    eyeglasses: eE,
    dark_sunglasses: tE,
    goggles: aE,
    ring: rE,
    closed_umbrella: nE,
    dog: iE,
    cat: sE,
    mouse: oE,
    hamster: cE,
    rabbit: uE,
    fox_face: lE,
    bear: fE,
    panda_face: hE,
    koala: dE,
    tiger: pE,
    lion: _E,
    cow: mE,
    pig: gE,
    pig_nose: yE,
    frog: kE,
    squid: bE,
    octopus: wE,
    shrimp: EE,
    monkey_face: TE,
    gorilla: AE,
    see_no_evil: CE,
    hear_no_evil: xE,
    speak_no_evil: DE,
    monkey: zE,
    chicken: IE,
    penguin: SE,
    bird: NE,
    baby_chick: FE,
    hatching_chick: OE,
    hatched_chick: LE,
    duck: RE,
    eagle: vE,
    owl: BE,
    bat: PE,
    wolf: ME,
    boar: HE,
    horse: UE,
    unicorn: jE,
    honeybee: qE,
    bug: YE,
    butterfly: $E,
    snail: VE,
    beetle: WE,
    ant: GE,
    grasshopper: QE,
    spider: XE,
    scorpion: KE,
    crab: JE,
    snake: ZE,
    lizard: eT,
    "t-rex": {
      keywords: ["animal", "nature", "dinosaur", "tyrannosaurus", "extinct"],
      char: "🦖",
      fitzpatrick_scale: !1,
      category: "animals_and_nature",
    },
    sauropod: tT,
    turtle: aT,
    tropical_fish: rT,
    fish: nT,
    blowfish: iT,
    dolphin: sT,
    shark: oT,
    whale: cT,
    whale2: uT,
    crocodile: lT,
    leopard: fT,
    zebra: hT,
    tiger2: dT,
    water_buffalo: pT,
    ox: _T,
    cow2: mT,
    deer: gT,
    dromedary_camel: yT,
    camel: kT,
    giraffe: bT,
    elephant: wT,
    rhinoceros: ET,
    goat: TT,
    ram: AT,
    sheep: CT,
    racehorse: xT,
    pig2: DT,
    rat: zT,
    mouse2: IT,
    rooster: ST,
    turkey: NT,
    dove: FT,
    dog2: OT,
    poodle: LT,
    cat2: RT,
    rabbit2: vT,
    chipmunk: BT,
    hedgehog: PT,
    raccoon: MT,
    llama: HT,
    hippopotamus: UT,
    kangaroo: jT,
    badger: qT,
    swan: YT,
    peacock: $T,
    parrot: VT,
    lobster: WT,
    mosquito: GT,
    paw_prints: QT,
    dragon: XT,
    dragon_face: KT,
    cactus: JT,
    christmas_tree: ZT,
    evergreen_tree: eA,
    deciduous_tree: tA,
    palm_tree: aA,
    seedling: rA,
    herb: nA,
    shamrock: iA,
    four_leaf_clover: sA,
    bamboo: oA,
    tanabata_tree: cA,
    leaves: uA,
    fallen_leaf: lA,
    maple_leaf: fA,
    ear_of_rice: hA,
    hibiscus: dA,
    sunflower: pA,
    rose: _A,
    wilted_flower: mA,
    tulip: gA,
    blossom: yA,
    cherry_blossom: kA,
    bouquet: bA,
    mushroom: wA,
    chestnut: EA,
    jack_o_lantern: TA,
    shell: AA,
    spider_web: CA,
    earth_americas: xA,
    earth_africa: DA,
    earth_asia: zA,
    full_moon: IA,
    waning_gibbous_moon: SA,
    last_quarter_moon: NA,
    waning_crescent_moon: FA,
    new_moon: OA,
    waxing_crescent_moon: LA,
    first_quarter_moon: RA,
    waxing_gibbous_moon: vA,
    new_moon_with_face: BA,
    full_moon_with_face: PA,
    first_quarter_moon_with_face: MA,
    last_quarter_moon_with_face: HA,
    sun_with_face: UA,
    crescent_moon: jA,
    star: qA,
    star2: YA,
    dizzy: $A,
    sparkles: VA,
    comet: WA,
    sunny: GA,
    sun_behind_small_cloud: QA,
    partly_sunny: XA,
    sun_behind_large_cloud: KA,
    sun_behind_rain_cloud: JA,
    cloud: ZA,
    cloud_with_rain: e2,
    cloud_with_lightning_and_rain: t2,
    cloud_with_lightning: a2,
    zap: r2,
    fire: n2,
    boom: i2,
    snowflake: s2,
    cloud_with_snow: o2,
    snowman: c2,
    snowman_with_snow: u2,
    wind_face: l2,
    dash: f2,
    tornado: h2,
    fog: d2,
    open_umbrella: p2,
    umbrella: _2,
    droplet: m2,
    sweat_drops: g2,
    ocean: y2,
    green_apple: k2,
    apple: b2,
    pear: w2,
    tangerine: E2,
    lemon: T2,
    banana: A2,
    watermelon: C2,
    grapes: x2,
    strawberry: D2,
    melon: z2,
    cherries: I2,
    peach: S2,
    pineapple: N2,
    coconut: F2,
    kiwi_fruit: O2,
    mango: L2,
    avocado: R2,
    broccoli: v2,
    tomato: B2,
    eggplant: P2,
    cucumber: M2,
    carrot: H2,
    hot_pepper: U2,
    potato: j2,
    corn: q2,
    leafy_greens: Y2,
    sweet_potato: $2,
    peanuts: V2,
    honey_pot: W2,
    croissant: G2,
    bread: Q2,
    baguette_bread: X2,
    bagel: K2,
    pretzel: J2,
    cheese: Z2,
    egg: eC,
    bacon: tC,
    steak: aC,
    pancakes: rC,
    poultry_leg: nC,
    meat_on_bone: iC,
    bone: sC,
    fried_shrimp: oC,
    fried_egg: cC,
    hamburger: uC,
    fries: lC,
    stuffed_flatbread: fC,
    hotdog: hC,
    pizza: dC,
    sandwich: pC,
    canned_food: _C,
    spaghetti: mC,
    taco: gC,
    burrito: yC,
    green_salad: kC,
    shallow_pan_of_food: bC,
    ramen: wC,
    stew: EC,
    fish_cake: TC,
    fortune_cookie: AC,
    sushi: CC,
    bento: xC,
    curry: DC,
    rice_ball: zC,
    rice: IC,
    rice_cracker: SC,
    oden: NC,
    dango: FC,
    shaved_ice: OC,
    ice_cream: LC,
    icecream: RC,
    pie: vC,
    cake: BC,
    cupcake: PC,
    moon_cake: MC,
    birthday: HC,
    custard: UC,
    candy: jC,
    lollipop: qC,
    chocolate_bar: YC,
    popcorn: $C,
    dumpling: VC,
    doughnut: WC,
    cookie: GC,
    milk_glass: QC,
    beer: XC,
    beers: KC,
    clinking_glasses: JC,
    wine_glass: ZC,
    tumbler_glass: e3,
    cocktail: t3,
    tropical_drink: a3,
    champagne: r3,
    sake: n3,
    tea: i3,
    cup_with_straw: s3,
    coffee: o3,
    baby_bottle: c3,
    salt: u3,
    spoon: l3,
    fork_and_knife: f3,
    plate_with_cutlery: h3,
    bowl_with_spoon: d3,
    takeout_box: p3,
    chopsticks: _3,
    soccer: m3,
    basketball: g3,
    football: y3,
    baseball: k3,
    softball: b3,
    tennis: w3,
    volleyball: E3,
    rugby_football: T3,
    flying_disc: A3,
    "8ball": {
      keywords: ["pool", "hobby", "game", "luck", "magic"],
      char: "🎱",
      fitzpatrick_scale: !1,
      category: "activity",
    },
    golf: C3,
    golfing_woman: x3,
    golfing_man: D3,
    ping_pong: z3,
    badminton: I3,
    goal_net: S3,
    ice_hockey: N3,
    field_hockey: F3,
    lacrosse: O3,
    cricket: L3,
    ski: R3,
    skier: v3,
    snowboarder: B3,
    person_fencing: P3,
    women_wrestling: M3,
    men_wrestling: H3,
    woman_cartwheeling: U3,
    man_cartwheeling: j3,
    woman_playing_handball: q3,
    man_playing_handball: Y3,
    ice_skate: $3,
    curling_stone: V3,
    skateboard: W3,
    sled: G3,
    bow_and_arrow: Q3,
    fishing_pole_and_fish: X3,
    boxing_glove: K3,
    martial_arts_uniform: J3,
    rowing_woman: Z3,
    rowing_man: ex,
    climbing_woman: tx,
    climbing_man: ax,
    swimming_woman: rx,
    swimming_man: nx,
    woman_playing_water_polo: ix,
    man_playing_water_polo: sx,
    woman_in_lotus_position: ox,
    man_in_lotus_position: cx,
    surfing_woman: ux,
    surfing_man: lx,
    bath: fx,
    basketball_woman: hx,
    basketball_man: dx,
    weight_lifting_woman: px,
    weight_lifting_man: _x,
    biking_woman: mx,
    biking_man: gx,
    mountain_biking_woman: yx,
    mountain_biking_man: kx,
    horse_racing: bx,
    business_suit_levitating: wx,
    trophy: Ex,
    running_shirt_with_sash: Tx,
    medal_sports: Ax,
    medal_military: Cx,
    "1st_place_medal": {
      keywords: ["award", "winning", "first"],
      char: "🥇",
      fitzpatrick_scale: !1,
      category: "activity",
    },
    "2nd_place_medal": {
      keywords: ["award", "second"],
      char: "🥈",
      fitzpatrick_scale: !1,
      category: "activity",
    },
    "3rd_place_medal": {
      keywords: ["award", "third"],
      char: "🥉",
      fitzpatrick_scale: !1,
      category: "activity",
    },
    reminder_ribbon: xx,
    rosette: Dx,
    ticket: zx,
    tickets: Ix,
    performing_arts: Sx,
    art: Nx,
    circus_tent: Fx,
    woman_juggling: Ox,
    man_juggling: Lx,
    microphone: Rx,
    headphones: vx,
    musical_score: Bx,
    musical_keyboard: Px,
    drum: Mx,
    saxophone: Hx,
    trumpet: Ux,
    guitar: jx,
    violin: qx,
    clapper: Yx,
    video_game: $x,
    space_invader: Vx,
    dart: Wx,
    game_die: Gx,
    chess_pawn: Qx,
    slot_machine: Xx,
    jigsaw: Kx,
    bowling: Jx,
    red_car: Zx,
    taxi: eD,
    blue_car: tD,
    bus: aD,
    trolleybus: rD,
    racing_car: nD,
    police_car: iD,
    ambulance: sD,
    fire_engine: oD,
    minibus: cD,
    truck: uD,
    articulated_lorry: lD,
    tractor: fD,
    kick_scooter: hD,
    motorcycle: dD,
    bike: pD,
    motor_scooter: _D,
    rotating_light: mD,
    oncoming_police_car: gD,
    oncoming_bus: yD,
    oncoming_automobile: kD,
    oncoming_taxi: bD,
    aerial_tramway: wD,
    mountain_cableway: ED,
    suspension_railway: TD,
    railway_car: AD,
    train: CD,
    monorail: xD,
    bullettrain_side: DD,
    bullettrain_front: zD,
    light_rail: ID,
    mountain_railway: SD,
    steam_locomotive: ND,
    train2: FD,
    metro: OD,
    tram: LD,
    station: RD,
    flying_saucer: vD,
    helicopter: BD,
    small_airplane: PD,
    airplane: MD,
    flight_departure: HD,
    flight_arrival: UD,
    sailboat: jD,
    motor_boat: qD,
    speedboat: YD,
    ferry: $D,
    passenger_ship: VD,
    rocket: WD,
    artificial_satellite: GD,
    seat: QD,
    canoe: XD,
    anchor: KD,
    construction: JD,
    fuelpump: ZD,
    busstop: e6,
    vertical_traffic_light: t6,
    traffic_light: a6,
    checkered_flag: r6,
    ship: n6,
    ferris_wheel: i6,
    roller_coaster: s6,
    carousel_horse: o6,
    building_construction: c6,
    foggy: u6,
    tokyo_tower: l6,
    factory: f6,
    fountain: h6,
    rice_scene: d6,
    mountain: p6,
    mountain_snow: _6,
    mount_fuji: m6,
    volcano: g6,
    japan: y6,
    camping: k6,
    tent: b6,
    national_park: w6,
    motorway: E6,
    railway_track: T6,
    sunrise: A6,
    sunrise_over_mountains: C6,
    desert: x6,
    beach_umbrella: D6,
    desert_island: z6,
    city_sunrise: I6,
    city_sunset: S6,
    cityscape: N6,
    night_with_stars: F6,
    bridge_at_night: O6,
    milky_way: L6,
    stars: R6,
    sparkler: v6,
    fireworks: B6,
    rainbow: P6,
    houses: M6,
    european_castle: H6,
    japanese_castle: U6,
    stadium: j6,
    statue_of_liberty: q6,
    house: Y6,
    house_with_garden: $6,
    derelict_house: V6,
    office: W6,
    department_store: G6,
    post_office: Q6,
    european_post_office: X6,
    hospital: K6,
    bank: J6,
    hotel: Z6,
    convenience_store: ez,
    school: tz,
    love_hotel: az,
    wedding: rz,
    classical_building: nz,
    church: iz,
    mosque: sz,
    synagogue: oz,
    kaaba: cz,
    shinto_shrine: uz,
    watch: lz,
    iphone: fz,
    calling: hz,
    computer: dz,
    keyboard: pz,
    desktop_computer: _z,
    printer: mz,
    computer_mouse: gz,
    trackball: yz,
    joystick: kz,
    clamp: bz,
    minidisc: wz,
    floppy_disk: Ez,
    cd: Tz,
    dvd: Az,
    vhs: Cz,
    camera: xz,
    camera_flash: Dz,
    video_camera: zz,
    movie_camera: Iz,
    film_projector: Sz,
    film_strip: Nz,
    telephone_receiver: Fz,
    phone: Oz,
    pager: Lz,
    fax: Rz,
    tv: vz,
    radio: Bz,
    studio_microphone: Pz,
    level_slider: Mz,
    control_knobs: Hz,
    compass: Uz,
    stopwatch: jz,
    timer_clock: qz,
    alarm_clock: Yz,
    mantelpiece_clock: $z,
    hourglass_flowing_sand: Vz,
    hourglass: Wz,
    satellite: Gz,
    battery: Qz,
    electric_plug: Xz,
    bulb: Kz,
    flashlight: Jz,
    candle: Zz,
    fire_extinguisher: eI,
    wastebasket: tI,
    oil_drum: aI,
    money_with_wings: rI,
    dollar: nI,
    yen: iI,
    euro: sI,
    pound: oI,
    moneybag: cI,
    credit_card: uI,
    gem: lI,
    balance_scale: fI,
    toolbox: hI,
    wrench: dI,
    hammer: pI,
    hammer_and_pick: _I,
    hammer_and_wrench: mI,
    pick: gI,
    nut_and_bolt: yI,
    gear: kI,
    brick: bI,
    chains: wI,
    magnet: EI,
    gun: TI,
    bomb: AI,
    firecracker: CI,
    hocho: xI,
    dagger: DI,
    crossed_swords: zI,
    shield: II,
    smoking: SI,
    skull_and_crossbones: NI,
    coffin: FI,
    funeral_urn: OI,
    amphora: LI,
    crystal_ball: RI,
    prayer_beads: vI,
    nazar_amulet: BI,
    barber: PI,
    alembic: MI,
    telescope: HI,
    microscope: UI,
    hole: jI,
    pill: qI,
    syringe: YI,
    dna: $I,
    microbe: VI,
    petri_dish: WI,
    test_tube: GI,
    thermometer: QI,
    broom: XI,
    basket: KI,
    toilet_paper: JI,
    label: ZI,
    bookmark: eS,
    toilet: tS,
    shower: aS,
    bathtub: rS,
    soap: nS,
    sponge: iS,
    lotion_bottle: sS,
    key: oS,
    old_key: cS,
    couch_and_lamp: uS,
    sleeping_bed: lS,
    bed: fS,
    door: hS,
    bellhop_bell: dS,
    teddy_bear: pS,
    framed_picture: _S,
    world_map: mS,
    parasol_on_ground: gS,
    moyai: yS,
    shopping: kS,
    shopping_cart: bS,
    balloon: wS,
    flags: ES,
    ribbon: TS,
    gift: AS,
    confetti_ball: CS,
    tada: xS,
    dolls: DS,
    wind_chime: zS,
    crossed_flags: IS,
    izakaya_lantern: SS,
    red_envelope: NS,
    email: FS,
    envelope_with_arrow: OS,
    incoming_envelope: LS,
    "e-mail": {
      keywords: ["communication", "inbox"],
      char: "📧",
      fitzpatrick_scale: !1,
      category: "objects",
    },
    love_letter: RS,
    postbox: vS,
    mailbox_closed: BS,
    mailbox: PS,
    mailbox_with_mail: MS,
    mailbox_with_no_mail: HS,
    package: {
      keywords: ["mail", "gift", "cardboard", "box", "moving"],
      char: "📦",
      fitzpatrick_scale: !1,
      category: "objects",
    },
    postal_horn: US,
    inbox_tray: jS,
    outbox_tray: qS,
    scroll: YS,
    page_with_curl: $S,
    bookmark_tabs: VS,
    receipt: WS,
    bar_chart: GS,
    chart_with_upwards_trend: QS,
    chart_with_downwards_trend: XS,
    page_facing_up: KS,
    date: JS,
    calendar: ZS,
    spiral_calendar: eN,
    card_index: tN,
    card_file_box: aN,
    ballot_box: rN,
    file_cabinet: nN,
    clipboard: iN,
    spiral_notepad: sN,
    file_folder: oN,
    open_file_folder: cN,
    card_index_dividers: uN,
    newspaper_roll: lN,
    newspaper: fN,
    notebook: hN,
    closed_book: dN,
    green_book: pN,
    blue_book: _N,
    orange_book: mN,
    notebook_with_decorative_cover: gN,
    ledger: yN,
    books: kN,
    open_book: bN,
    safety_pin: wN,
    link: EN,
    paperclip: TN,
    paperclips: AN,
    scissors: CN,
    triangular_ruler: xN,
    straight_ruler: DN,
    abacus: zN,
    pushpin: IN,
    round_pushpin: SN,
    triangular_flag_on_post: NN,
    white_flag: FN,
    black_flag: ON,
    rainbow_flag: LN,
    closed_lock_with_key: RN,
    lock: vN,
    unlock: BN,
    lock_with_ink_pen: PN,
    pen: MN,
    fountain_pen: HN,
    black_nib: UN,
    memo: jN,
    pencil2: qN,
    crayon: YN,
    paintbrush: $N,
    mag: VN,
    mag_right: WN,
    heart: GN,
    orange_heart: QN,
    yellow_heart: XN,
    green_heart: KN,
    blue_heart: JN,
    purple_heart: ZN,
    black_heart: e4,
    broken_heart: t4,
    heavy_heart_exclamation: a4,
    two_hearts: r4,
    revolving_hearts: n4,
    heartbeat: i4,
    heartpulse: s4,
    sparkling_heart: o4,
    cupid: c4,
    gift_heart: u4,
    heart_decoration: l4,
    peace_symbol: f4,
    latin_cross: h4,
    star_and_crescent: d4,
    om: p4,
    wheel_of_dharma: _4,
    star_of_david: m4,
    six_pointed_star: g4,
    menorah: y4,
    yin_yang: k4,
    orthodox_cross: b4,
    place_of_worship: w4,
    ophiuchus: E4,
    aries: T4,
    taurus: A4,
    gemini: C4,
    cancer: x4,
    leo: D4,
    virgo: z4,
    libra: I4,
    scorpius: S4,
    sagittarius: N4,
    capricorn: F4,
    aquarius: O4,
    pisces: L4,
    id: R4,
    atom_symbol: v4,
    u7a7a: B4,
    u5272: P4,
    radioactive: M4,
    biohazard: H4,
    mobile_phone_off: U4,
    vibration_mode: j4,
    u6709: q4,
    u7121: Y4,
    u7533: $4,
    u55b6: V4,
    u6708: W4,
    eight_pointed_black_star: G4,
    vs: Q4,
    accept: X4,
    white_flower: K4,
    ideograph_advantage: J4,
    secret: Z4,
    congratulations: eF,
    u5408: tF,
    u6e80: aF,
    u7981: rF,
    a: nF,
    b: iF,
    ab: sF,
    cl: oF,
    o2: cF,
    sos: uF,
    no_entry: lF,
    name_badge: fF,
    no_entry_sign: hF,
    x: dF,
    o: pF,
    stop_sign: _F,
    anger: mF,
    hotsprings: gF,
    no_pedestrians: yF,
    do_not_litter: kF,
    no_bicycles: bF,
    "non-potable_water": {
      keywords: ["drink", "faucet", "tap", "circle"],
      char: "🚱",
      fitzpatrick_scale: !1,
      category: "symbols",
    },
    underage: wF,
    no_mobile_phones: EF,
    exclamation: TF,
    grey_exclamation: AF,
    question: CF,
    grey_question: xF,
    bangbang: DF,
    interrobang: zF,
    low_brightness: IF,
    high_brightness: SF,
    trident: NF,
    fleur_de_lis: FF,
    part_alternation_mark: OF,
    warning: LF,
    children_crossing: RF,
    beginner: vF,
    recycle: BF,
    u6307: PF,
    chart: MF,
    sparkle: HF,
    eight_spoked_asterisk: UF,
    negative_squared_cross_mark: jF,
    white_check_mark: qF,
    diamond_shape_with_a_dot_inside: YF,
    cyclone: $F,
    loop: VF,
    globe_with_meridians: WF,
    m: GF,
    atm: QF,
    sa: XF,
    passport_control: KF,
    customs: JF,
    baggage_claim: ZF,
    left_luggage: eO,
    wheelchair: tO,
    no_smoking: aO,
    wc: rO,
    parking: nO,
    potable_water: iO,
    mens: sO,
    womens: oO,
    baby_symbol: cO,
    restroom: uO,
    put_litter_in_its_place: lO,
    cinema: fO,
    signal_strength: hO,
    koko: dO,
    ng: pO,
    ok: _O,
    up: mO,
    cool: gO,
    new: {
      keywords: ["blue-square", "words", "start"],
      char: "🆕",
      fitzpatrick_scale: !1,
      category: "symbols",
    },
    free: yO,
    zero: kO,
    one: bO,
    two: wO,
    three: EO,
    four: TO,
    five: AO,
    six: CO,
    seven: xO,
    eight: DO,
    nine: zO,
    keycap_ten: IO,
    asterisk: SO,
    eject_button: NO,
    arrow_forward: FO,
    pause_button: OO,
    next_track_button: LO,
    stop_button: RO,
    record_button: vO,
    play_or_pause_button: BO,
    previous_track_button: PO,
    fast_forward: MO,
    rewind: HO,
    twisted_rightwards_arrows: UO,
    repeat: jO,
    repeat_one: qO,
    arrow_backward: YO,
    arrow_up_small: $O,
    arrow_down_small: VO,
    arrow_double_up: WO,
    arrow_double_down: GO,
    arrow_right: QO,
    arrow_left: XO,
    arrow_up: KO,
    arrow_down: JO,
    arrow_upper_right: ZO,
    arrow_lower_right: eL,
    arrow_lower_left: tL,
    arrow_upper_left: aL,
    arrow_up_down: rL,
    left_right_arrow: nL,
    arrows_counterclockwise: iL,
    arrow_right_hook: sL,
    leftwards_arrow_with_hook: oL,
    arrow_heading_up: cL,
    arrow_heading_down: uL,
    hash: lL,
    information_source: fL,
    abc: hL,
    abcd: dL,
    capital_abcd: pL,
    symbols: _L,
    musical_note: mL,
    notes: gL,
    wavy_dash: yL,
    curly_loop: kL,
    heavy_check_mark: bL,
    arrows_clockwise: wL,
    heavy_plus_sign: EL,
    heavy_minus_sign: TL,
    heavy_division_sign: AL,
    heavy_multiplication_x: CL,
    infinity: xL,
    heavy_dollar_sign: DL,
    currency_exchange: zL,
    copyright: IL,
    registered: SL,
    tm: NL,
    end: FL,
    back: OL,
    on: LL,
    top: RL,
    soon: vL,
    ballot_box_with_check: BL,
    radio_button: PL,
    white_circle: ML,
    black_circle: HL,
    red_circle: UL,
    large_blue_circle: jL,
    small_orange_diamond: qL,
    small_blue_diamond: YL,
    large_orange_diamond: $L,
    large_blue_diamond: VL,
    small_red_triangle: WL,
    black_small_square: GL,
    white_small_square: QL,
    black_large_square: XL,
    white_large_square: KL,
    small_red_triangle_down: JL,
    black_medium_square: ZL,
    white_medium_square: e8,
    black_medium_small_square: t8,
    white_medium_small_square: a8,
    black_square_button: r8,
    white_square_button: n8,
    speaker: i8,
    sound: s8,
    loud_sound: o8,
    mute: c8,
    mega: u8,
    loudspeaker: l8,
    bell: f8,
    no_bell: h8,
    black_joker: d8,
    mahjong: p8,
    spades: _8,
    clubs: m8,
    hearts: g8,
    diamonds: y8,
    flower_playing_cards: k8,
    thought_balloon: b8,
    right_anger_bubble: w8,
    speech_balloon: E8,
    left_speech_bubble: T8,
    clock1: A8,
    clock2: C8,
    clock3: x8,
    clock4: D8,
    clock5: z8,
    clock6: I8,
    clock7: S8,
    clock8: N8,
    clock9: F8,
    clock10: O8,
    clock11: L8,
    clock12: R8,
    clock130: v8,
    clock230: B8,
    clock330: P8,
    clock430: M8,
    clock530: H8,
    clock630: U8,
    clock730: j8,
    clock830: q8,
    clock930: Y8,
    clock1030: $8,
    clock1130: V8,
    clock1230: W8,
    afghanistan: G8,
    aland_islands: Q8,
    albania: X8,
    algeria: K8,
    american_samoa: J8,
    andorra: Z8,
    angola: eR,
    anguilla: tR,
    antarctica: aR,
    antigua_barbuda: rR,
    argentina: nR,
    armenia: iR,
    aruba: sR,
    australia: oR,
    austria: cR,
    azerbaijan: uR,
    bahamas: lR,
    bahrain: fR,
    bangladesh: hR,
    barbados: dR,
    belarus: pR,
    belgium: _R,
    belize: mR,
    benin: gR,
    bermuda: yR,
    bhutan: kR,
    bolivia: bR,
    caribbean_netherlands: wR,
    bosnia_herzegovina: ER,
    botswana: TR,
    brazil: AR,
    british_indian_ocean_territory: CR,
    british_virgin_islands: xR,
    brunei: DR,
    bulgaria: zR,
    burkina_faso: IR,
    burundi: SR,
    cape_verde: NR,
    cambodia: FR,
    cameroon: OR,
    canada: LR,
    canary_islands: RR,
    cayman_islands: vR,
    central_african_republic: BR,
    chad: PR,
    chile: MR,
    cn: HR,
    christmas_island: UR,
    cocos_islands: jR,
    colombia: qR,
    comoros: YR,
    congo_brazzaville: $R,
    congo_kinshasa: VR,
    cook_islands: WR,
    costa_rica: GR,
    croatia: QR,
    cuba: XR,
    curacao: KR,
    cyprus: JR,
    czech_republic: ZR,
    denmark: e5,
    djibouti: t5,
    dominica: a5,
    dominican_republic: r5,
    ecuador: n5,
    egypt: i5,
    el_salvador: s5,
    equatorial_guinea: o5,
    eritrea: c5,
    estonia: u5,
    ethiopia: l5,
    eu: f5,
    falkland_islands: h5,
    faroe_islands: d5,
    fiji: p5,
    finland: _5,
    fr: m5,
    french_guiana: g5,
    french_polynesia: y5,
    french_southern_territories: k5,
    gabon: b5,
    gambia: w5,
    georgia: E5,
    de: T5,
    ghana: A5,
    gibraltar: C5,
    greece: x5,
    greenland: D5,
    grenada: z5,
    guadeloupe: I5,
    guam: S5,
    guatemala: N5,
    guernsey: F5,
    guinea: O5,
    guinea_bissau: L5,
    guyana: R5,
    haiti: v5,
    honduras: B5,
    hong_kong: P5,
    hungary: M5,
    iceland: H5,
    india: U5,
    indonesia: j5,
    iran: q5,
    iraq: Y5,
    ireland: $5,
    isle_of_man: V5,
    israel: W5,
    it: G5,
    cote_divoire: Q5,
    jamaica: X5,
    jp: K5,
    jersey: J5,
    jordan: Z5,
    kazakhstan: e9,
    kenya: t9,
    kiribati: a9,
    kosovo: r9,
    kuwait: n9,
    kyrgyzstan: i9,
    laos: s9,
    latvia: o9,
    lebanon: c9,
    lesotho: u9,
    liberia: l9,
    libya: f9,
    liechtenstein: h9,
    lithuania: d9,
    luxembourg: p9,
    macau: _9,
    macedonia: m9,
    madagascar: g9,
    malawi: y9,
    malaysia: k9,
    maldives: b9,
    mali: w9,
    malta: E9,
    marshall_islands: T9,
    martinique: A9,
    mauritania: C9,
    mauritius: x9,
    mayotte: D9,
    mexico: z9,
    micronesia: I9,
    moldova: S9,
    monaco: N9,
    mongolia: F9,
    montenegro: O9,
    montserrat: L9,
    morocco: R9,
    mozambique: v9,
    myanmar: B9,
    namibia: P9,
    nauru: M9,
    nepal: H9,
    netherlands: U9,
    new_caledonia: j9,
    new_zealand: q9,
    nicaragua: Y9,
    niger: $9,
    nigeria: V9,
    niue: W9,
    norfolk_island: G9,
    northern_mariana_islands: Q9,
    north_korea: X9,
    norway: K9,
    oman: J9,
    pakistan: Z9,
    palau: ev,
    palestinian_territories: tv,
    panama: av,
    papua_new_guinea: rv,
    paraguay: nv,
    peru: iv,
    philippines: sv,
    pitcairn_islands: ov,
    poland: cv,
    portugal: uv,
    puerto_rico: lv,
    qatar: fv,
    reunion: hv,
    romania: dv,
    ru: pv,
    rwanda: _v,
    st_barthelemy: mv,
    st_helena: gv,
    st_kitts_nevis: yv,
    st_lucia: kv,
    st_pierre_miquelon: bv,
    st_vincent_grenadines: wv,
    samoa: Ev,
    san_marino: Tv,
    sao_tome_principe: Av,
    saudi_arabia: Cv,
    senegal: xv,
    serbia: Dv,
    seychelles: zv,
    sierra_leone: Iv,
    singapore: Sv,
    sint_maarten: Nv,
    slovakia: Fv,
    slovenia: Ov,
    solomon_islands: Lv,
    somalia: Rv,
    south_africa: vv,
    south_georgia_south_sandwich_islands: Bv,
    kr: Pv,
    south_sudan: Mv,
    es: Hv,
    sri_lanka: Uv,
    sudan: jv,
    suriname: qv,
    swaziland: Yv,
    sweden: $v,
    switzerland: Vv,
    syria: Wv,
    taiwan: Gv,
    tajikistan: Qv,
    tanzania: Xv,
    thailand: Kv,
    timor_leste: Jv,
    togo: Zv,
    tokelau: eB,
    tonga: tB,
    trinidad_tobago: aB,
    tunisia: rB,
    tr: nB,
    turkmenistan: iB,
    turks_caicos_islands: sB,
    tuvalu: oB,
    uganda: cB,
    ukraine: uB,
    united_arab_emirates: lB,
    uk: fB,
    england: hB,
    scotland: dB,
    wales: pB,
    us: _B,
    us_virgin_islands: mB,
    uruguay: gB,
    uzbekistan: yB,
    vanuatu: kB,
    vatican_city: bB,
    venezuela: wB,
    vietnam: EB,
    wallis_futuna: TB,
    western_sahara: AB,
    yemen: CB,
    zambia: xB,
    zimbabwe: DB,
    united_nations: zB,
    pirate_flag: IB,
  },
  NB = [
    "grinning",
    "smiley",
    "smile",
    "grin",
    "laughing",
    "sweat_smile",
    "joy",
    "rofl",
    "relaxed",
    "blush",
    "innocent",
    "slightly_smiling_face",
    "upside_down_face",
    "wink",
    "relieved",
    "heart_eyes",
    "smiling_face_with_three_hearts",
    "kissing_heart",
    "kissing",
    "kissing_smiling_eyes",
    "kissing_closed_eyes",
    "yum",
    "stuck_out_tongue",
    "stuck_out_tongue_closed_eyes",
    "stuck_out_tongue_winking_eye",
    "zany",
    "raised_eyebrow",
    "monocle",
    "nerd_face",
    "sunglasses",
    "star_struck",
    "partying",
    "smirk",
    "unamused",
    "disappointed",
    "pensive",
    "worried",
    "confused",
    "slightly_frowning_face",
    "frowning_face",
    "persevere",
    "confounded",
    "tired_face",
    "weary",
    "pleading",
    "cry",
    "sob",
    "triumph",
    "angry",
    "rage",
    "symbols_over_mouth",
    "exploding_head",
    "flushed",
    "hot",
    "cold",
    "scream",
    "fearful",
    "cold_sweat",
    "disappointed_relieved",
    "sweat",
    "hugs",
    "thinking",
    "hand_over_mouth",
    "shushing",
    "lying_face",
    "no_mouth",
    "neutral_face",
    "expressionless",
    "grimacing",
    "roll_eyes",
    "hushed",
    "frowning",
    "anguished",
    "open_mouth",
    "astonished",
    "sleeping",
    "drooling_face",
    "sleepy",
    "dizzy_face",
    "zipper_mouth_face",
    "woozy",
    "nauseated_face",
    "vomiting",
    "sneezing_face",
    "mask",
    "face_with_thermometer",
    "face_with_head_bandage",
    "money_mouth_face",
    "cowboy_hat_face",
    "smiling_imp",
    "imp",
    "japanese_ogre",
    "japanese_goblin",
    "clown_face",
    "poop",
    "ghost",
    "skull",
    "skull_and_crossbones",
    "alien",
    "space_invader",
    "robot",
    "jack_o_lantern",
    "smiley_cat",
    "smile_cat",
    "joy_cat",
    "heart_eyes_cat",
    "smirk_cat",
    "kissing_cat",
    "scream_cat",
    "crying_cat_face",
    "pouting_cat",
    "palms_up",
    "open_hands",
    "raised_hands",
    "clap",
    "handshake",
    "+1",
    "-1",
    "facepunch",
    "fist",
    "fist_left",
    "fist_right",
    "crossed_fingers",
    "v",
    "love_you",
    "metal",
    "ok_hand",
    "point_left",
    "point_right",
    "point_up",
    "point_down",
    "point_up_2",
    "raised_hand",
    "raised_back_of_hand",
    "raised_hand_with_fingers_splayed",
    "vulcan_salute",
    "wave",
    "call_me_hand",
    "muscle",
    "fu",
    "writing_hand",
    "pray",
    "foot",
    "leg",
    "ring",
    "lipstick",
    "kiss",
    "lips",
    "tooth",
    "tongue",
    "ear",
    "nose",
    "footprints",
    "eye",
    "eyes",
    "brain",
    "speaking_head",
    "bust_in_silhouette",
    "busts_in_silhouette",
    "baby",
    "girl",
    "child",
    "boy",
    "woman",
    "adult",
    "man",
    "blonde_woman",
    "blonde_man",
    "bearded_person",
    "older_woman",
    "older_adult",
    "older_man",
    "man_with_gua_pi_mao",
    "woman_with_headscarf",
    "woman_with_turban",
    "man_with_turban",
    "policewoman",
    "policeman",
    "construction_worker_woman",
    "construction_worker_man",
    "guardswoman",
    "guardsman",
    "female_detective",
    "male_detective",
    "woman_health_worker",
    "man_health_worker",
    "woman_farmer",
    "man_farmer",
    "woman_cook",
    "man_cook",
    "woman_student",
    "man_student",
    "woman_singer",
    "man_singer",
    "woman_teacher",
    "man_teacher",
    "woman_factory_worker",
    "man_factory_worker",
    "woman_technologist",
    "man_technologist",
    "woman_office_worker",
    "man_office_worker",
    "woman_mechanic",
    "man_mechanic",
    "woman_scientist",
    "man_scientist",
    "woman_artist",
    "man_artist",
    "woman_firefighter",
    "man_firefighter",
    "woman_pilot",
    "man_pilot",
    "woman_astronaut",
    "man_astronaut",
    "woman_judge",
    "man_judge",
    "bride_with_veil",
    "man_in_tuxedo",
    "princess",
    "prince",
    "woman_superhero",
    "man_superhero",
    "woman_supervillain",
    "man_supervillain",
    "mrs_claus",
    "santa",
    "sorceress",
    "wizard",
    "woman_elf",
    "man_elf",
    "woman_vampire",
    "man_vampire",
    "woman_zombie",
    "man_zombie",
    "woman_genie",
    "man_genie",
    "mermaid",
    "merman",
    "woman_fairy",
    "man_fairy",
    "angel",
    "pregnant_woman",
    "breastfeeding",
    "bowing_woman",
    "bowing_man",
    "tipping_hand_woman",
    "tipping_hand_man",
    "no_good_woman",
    "no_good_man",
    "ok_woman",
    "ok_man",
    "raising_hand_woman",
    "raising_hand_man",
    "woman_facepalming",
    "man_facepalming",
    "woman_shrugging",
    "man_shrugging",
    "pouting_woman",
    "pouting_man",
    "frowning_woman",
    "frowning_man",
    "haircut_woman",
    "haircut_man",
    "massage_woman",
    "massage_man",
    "woman_in_steamy_room",
    "man_in_steamy_room",
    "nail_care",
    "selfie",
    "dancer",
    "man_dancing",
    "dancing_women",
    "dancing_men",
    "business_suit_levitating",
    "walking_woman",
    "walking_man",
    "running_woman",
    "running_man",
    "couple",
    "two_women_holding_hands",
    "two_men_holding_hands",
    "couple_with_heart_woman_man",
    "couple_with_heart_woman_woman",
    "couple_with_heart_man_man",
    "couplekiss_man_woman",
    "couplekiss_woman_woman",
    "couplekiss_man_man",
    "family_man_woman_boy",
    "family_man_woman_girl",
    "family_man_woman_girl_boy",
    "family_man_woman_boy_boy",
    "family_man_woman_girl_girl",
    "family_woman_woman_boy",
    "family_woman_woman_girl",
    "family_woman_woman_girl_boy",
    "family_woman_woman_boy_boy",
    "family_woman_woman_girl_girl",
    "family_man_man_boy",
    "family_man_man_girl",
    "family_man_man_girl_boy",
    "family_man_man_boy_boy",
    "family_man_man_girl_girl",
    "family_woman_boy",
    "family_woman_girl",
    "family_woman_girl_boy",
    "family_woman_boy_boy",
    "family_woman_girl_girl",
    "family_man_boy",
    "family_man_girl",
    "family_man_girl_boy",
    "family_man_boy_boy",
    "family_man_girl_girl",
    "yarn",
    "thread",
    "coat",
    "labcoat",
    "womans_clothes",
    "tshirt",
    "jeans",
    "necktie",
    "dress",
    "bikini",
    "kimono",
    "flat_shoe",
    "high_heel",
    "sandal",
    "boot",
    "mans_shoe",
    "athletic_shoe",
    "hiking_boot",
    "socks",
    "gloves",
    "scarf",
    "tophat",
    "billed_hat",
    "womans_hat",
    "mortar_board",
    "rescue_worker_helmet",
    "crown",
    "pouch",
    "purse",
    "handbag",
    "briefcase",
    "school_satchel",
    "luggage",
    "eyeglasses",
    "dark_sunglasses",
    "goggles",
    "closed_umbrella",
    "dog",
    "cat",
    "mouse",
    "hamster",
    "rabbit",
    "fox_face",
    "bear",
    "panda_face",
    "koala",
    "tiger",
    "lion",
    "cow",
    "pig",
    "pig_nose",
    "frog",
    "monkey_face",
    "see_no_evil",
    "hear_no_evil",
    "speak_no_evil",
    "monkey",
    "chicken",
    "penguin",
    "bird",
    "baby_chick",
    "hatching_chick",
    "hatched_chick",
    "duck",
    "eagle",
    "owl",
    "bat",
    "wolf",
    "boar",
    "horse",
    "unicorn",
    "honeybee",
    "bug",
    "butterfly",
    "snail",
    "shell",
    "beetle",
    "ant",
    "mosquito",
    "grasshopper",
    "spider",
    "spider_web",
    "scorpion",
    "turtle",
    "snake",
    "lizard",
    "t-rex",
    "sauropod",
    "octopus",
    "squid",
    "shrimp",
    "lobster",
    "crab",
    "blowfish",
    "tropical_fish",
    "fish",
    "dolphin",
    "whale",
    "whale2",
    "shark",
    "crocodile",
    "tiger2",
    "leopard",
    "zebra",
    "gorilla",
    "elephant",
    "hippopotamus",
    "rhinoceros",
    "dromedary_camel",
    "giraffe",
    "kangaroo",
    "camel",
    "water_buffalo",
    "ox",
    "cow2",
    "racehorse",
    "pig2",
    "ram",
    "sheep",
    "llama",
    "goat",
    "deer",
    "dog2",
    "poodle",
    "cat2",
    "rooster",
    "turkey",
    "peacock",
    "parrot",
    "swan",
    "dove",
    "rabbit2",
    "raccoon",
    "badger",
    "rat",
    "mouse2",
    "chipmunk",
    "hedgehog",
    "paw_prints",
    "dragon",
    "dragon_face",
    "cactus",
    "christmas_tree",
    "evergreen_tree",
    "deciduous_tree",
    "palm_tree",
    "seedling",
    "herb",
    "shamrock",
    "four_leaf_clover",
    "bamboo",
    "tanabata_tree",
    "leaves",
    "fallen_leaf",
    "maple_leaf",
    "ear_of_rice",
    "hibiscus",
    "sunflower",
    "rose",
    "wilted_flower",
    "tulip",
    "blossom",
    "cherry_blossom",
    "bouquet",
    "mushroom",
    "earth_americas",
    "earth_africa",
    "earth_asia",
    "full_moon",
    "waning_gibbous_moon",
    "last_quarter_moon",
    "waning_crescent_moon",
    "new_moon",
    "waxing_crescent_moon",
    "first_quarter_moon",
    "waxing_gibbous_moon",
    "new_moon_with_face",
    "full_moon_with_face",
    "first_quarter_moon_with_face",
    "last_quarter_moon_with_face",
    "sun_with_face",
    "crescent_moon",
    "star",
    "star2",
    "dizzy",
    "sparkles",
    "comet",
    "sunny",
    "sun_behind_small_cloud",
    "partly_sunny",
    "sun_behind_large_cloud",
    "sun_behind_rain_cloud",
    "cloud",
    "cloud_with_rain",
    "cloud_with_lightning_and_rain",
    "cloud_with_lightning",
    "zap",
    "fire",
    "boom",
    "snowflake",
    "cloud_with_snow",
    "snowman",
    "snowman_with_snow",
    "wind_face",
    "dash",
    "tornado",
    "fog",
    "open_umbrella",
    "umbrella",
    "droplet",
    "sweat_drops",
    "ocean",
    "green_apple",
    "apple",
    "pear",
    "tangerine",
    "lemon",
    "banana",
    "watermelon",
    "grapes",
    "strawberry",
    "melon",
    "cherries",
    "peach",
    "mango",
    "pineapple",
    "coconut",
    "kiwi_fruit",
    "tomato",
    "eggplant",
    "avocado",
    "broccoli",
    "leafy_greens",
    "cucumber",
    "hot_pepper",
    "corn",
    "carrot",
    "potato",
    "sweet_potato",
    "croissant",
    "bagel",
    "bread",
    "baguette_bread",
    "pretzel",
    "cheese",
    "egg",
    "fried_egg",
    "pancakes",
    "bacon",
    "steak",
    "poultry_leg",
    "meat_on_bone",
    "bone",
    "hotdog",
    "hamburger",
    "fries",
    "pizza",
    "sandwich",
    "stuffed_flatbread",
    "taco",
    "burrito",
    "green_salad",
    "shallow_pan_of_food",
    "canned_food",
    "spaghetti",
    "ramen",
    "stew",
    "curry",
    "sushi",
    "bento",
    "fried_shrimp",
    "rice_ball",
    "rice",
    "rice_cracker",
    "fish_cake",
    "fortune_cookie",
    "moon_cake",
    "oden",
    "dango",
    "shaved_ice",
    "ice_cream",
    "icecream",
    "pie",
    "cupcake",
    "cake",
    "birthday",
    "custard",
    "lollipop",
    "candy",
    "chocolate_bar",
    "popcorn",
    "doughnut",
    "dumpling",
    "cookie",
    "chestnut",
    "peanuts",
    "honey_pot",
    "milk_glass",
    "baby_bottle",
    "coffee",
    "tea",
    "cup_with_straw",
    "sake",
    "beer",
    "beers",
    "clinking_glasses",
    "wine_glass",
    "tumbler_glass",
    "cocktail",
    "tropical_drink",
    "champagne",
    "spoon",
    "fork_and_knife",
    "plate_with_cutlery",
    "bowl_with_spoon",
    "takeout_box",
    "chopsticks",
    "salt",
    "soccer",
    "basketball",
    "football",
    "baseball",
    "softball",
    "tennis",
    "volleyball",
    "rugby_football",
    "flying_disc",
    "8ball",
    "golf",
    "golfing_woman",
    "golfing_man",
    "ping_pong",
    "badminton",
    "goal_net",
    "ice_hockey",
    "field_hockey",
    "lacrosse",
    "cricket",
    "ski",
    "skier",
    "snowboarder",
    "person_fencing",
    "women_wrestling",
    "men_wrestling",
    "woman_cartwheeling",
    "man_cartwheeling",
    "woman_playing_handball",
    "man_playing_handball",
    "ice_skate",
    "curling_stone",
    "skateboard",
    "sled",
    "bow_and_arrow",
    "fishing_pole_and_fish",
    "boxing_glove",
    "martial_arts_uniform",
    "rowing_woman",
    "rowing_man",
    "climbing_woman",
    "climbing_man",
    "swimming_woman",
    "swimming_man",
    "woman_playing_water_polo",
    "man_playing_water_polo",
    "woman_in_lotus_position",
    "man_in_lotus_position",
    "surfing_woman",
    "surfing_man",
    "basketball_woman",
    "basketball_man",
    "weight_lifting_woman",
    "weight_lifting_man",
    "biking_woman",
    "biking_man",
    "mountain_biking_woman",
    "mountain_biking_man",
    "horse_racing",
    "trophy",
    "running_shirt_with_sash",
    "medal_sports",
    "medal_military",
    "1st_place_medal",
    "2nd_place_medal",
    "3rd_place_medal",
    "reminder_ribbon",
    "rosette",
    "ticket",
    "tickets",
    "performing_arts",
    "art",
    "circus_tent",
    "woman_juggling",
    "man_juggling",
    "microphone",
    "headphones",
    "musical_score",
    "musical_keyboard",
    "drum",
    "saxophone",
    "trumpet",
    "guitar",
    "violin",
    "clapper",
    "video_game",
    "dart",
    "game_die",
    "chess_pawn",
    "slot_machine",
    "jigsaw",
    "bowling",
    "red_car",
    "taxi",
    "blue_car",
    "bus",
    "trolleybus",
    "racing_car",
    "police_car",
    "ambulance",
    "fire_engine",
    "minibus",
    "truck",
    "articulated_lorry",
    "tractor",
    "kick_scooter",
    "motorcycle",
    "bike",
    "motor_scooter",
    "rotating_light",
    "oncoming_police_car",
    "oncoming_bus",
    "oncoming_automobile",
    "oncoming_taxi",
    "aerial_tramway",
    "mountain_cableway",
    "suspension_railway",
    "railway_car",
    "train",
    "monorail",
    "bullettrain_side",
    "bullettrain_front",
    "light_rail",
    "mountain_railway",
    "steam_locomotive",
    "train2",
    "metro",
    "tram",
    "station",
    "flying_saucer",
    "helicopter",
    "small_airplane",
    "airplane",
    "flight_departure",
    "flight_arrival",
    "sailboat",
    "motor_boat",
    "speedboat",
    "ferry",
    "passenger_ship",
    "rocket",
    "artificial_satellite",
    "seat",
    "canoe",
    "anchor",
    "construction",
    "fuelpump",
    "busstop",
    "vertical_traffic_light",
    "traffic_light",
    "ship",
    "ferris_wheel",
    "roller_coaster",
    "carousel_horse",
    "building_construction",
    "foggy",
    "tokyo_tower",
    "factory",
    "fountain",
    "rice_scene",
    "mountain",
    "mountain_snow",
    "mount_fuji",
    "volcano",
    "japan",
    "camping",
    "tent",
    "national_park",
    "motorway",
    "railway_track",
    "sunrise",
    "sunrise_over_mountains",
    "desert",
    "beach_umbrella",
    "desert_island",
    "city_sunrise",
    "city_sunset",
    "cityscape",
    "night_with_stars",
    "bridge_at_night",
    "milky_way",
    "stars",
    "sparkler",
    "fireworks",
    "rainbow",
    "houses",
    "european_castle",
    "japanese_castle",
    "stadium",
    "statue_of_liberty",
    "house",
    "house_with_garden",
    "derelict_house",
    "office",
    "department_store",
    "post_office",
    "european_post_office",
    "hospital",
    "bank",
    "hotel",
    "convenience_store",
    "school",
    "love_hotel",
    "wedding",
    "classical_building",
    "church",
    "mosque",
    "synagogue",
    "kaaba",
    "shinto_shrine",
    "watch",
    "iphone",
    "calling",
    "computer",
    "keyboard",
    "desktop_computer",
    "printer",
    "computer_mouse",
    "trackball",
    "joystick",
    "clamp",
    "minidisc",
    "floppy_disk",
    "cd",
    "dvd",
    "vhs",
    "camera",
    "camera_flash",
    "video_camera",
    "movie_camera",
    "film_projector",
    "film_strip",
    "telephone_receiver",
    "phone",
    "pager",
    "fax",
    "tv",
    "radio",
    "studio_microphone",
    "level_slider",
    "control_knobs",
    "compass",
    "stopwatch",
    "timer_clock",
    "alarm_clock",
    "mantelpiece_clock",
    "hourglass_flowing_sand",
    "hourglass",
    "satellite",
    "battery",
    "electric_plug",
    "bulb",
    "flashlight",
    "candle",
    "fire_extinguisher",
    "wastebasket",
    "oil_drum",
    "money_with_wings",
    "dollar",
    "yen",
    "euro",
    "pound",
    "moneybag",
    "credit_card",
    "gem",
    "balance_scale",
    "toolbox",
    "wrench",
    "hammer",
    "hammer_and_pick",
    "hammer_and_wrench",
    "pick",
    "nut_and_bolt",
    "gear",
    "brick",
    "chains",
    "magnet",
    "gun",
    "bomb",
    "firecracker",
    "hocho",
    "dagger",
    "crossed_swords",
    "shield",
    "smoking",
    "coffin",
    "funeral_urn",
    "amphora",
    "crystal_ball",
    "prayer_beads",
    "nazar_amulet",
    "barber",
    "alembic",
    "telescope",
    "microscope",
    "hole",
    "pill",
    "syringe",
    "dna",
    "microbe",
    "petri_dish",
    "test_tube",
    "thermometer",
    "broom",
    "basket",
    "toilet_paper",
    "label",
    "bookmark",
    "toilet",
    "shower",
    "bathtub",
    "bath",
    "soap",
    "sponge",
    "lotion_bottle",
    "key",
    "old_key",
    "couch_and_lamp",
    "sleeping_bed",
    "bed",
    "door",
    "bellhop_bell",
    "teddy_bear",
    "framed_picture",
    "world_map",
    "parasol_on_ground",
    "moyai",
    "shopping",
    "shopping_cart",
    "balloon",
    "flags",
    "ribbon",
    "gift",
    "confetti_ball",
    "tada",
    "dolls",
    "wind_chime",
    "crossed_flags",
    "izakaya_lantern",
    "red_envelope",
    "email",
    "envelope_with_arrow",
    "incoming_envelope",
    "e-mail",
    "love_letter",
    "postbox",
    "mailbox_closed",
    "mailbox",
    "mailbox_with_mail",
    "mailbox_with_no_mail",
    "package",
    "postal_horn",
    "inbox_tray",
    "outbox_tray",
    "scroll",
    "page_with_curl",
    "bookmark_tabs",
    "receipt",
    "bar_chart",
    "chart_with_upwards_trend",
    "chart_with_downwards_trend",
    "page_facing_up",
    "date",
    "calendar",
    "spiral_calendar",
    "card_index",
    "card_file_box",
    "ballot_box",
    "file_cabinet",
    "clipboard",
    "spiral_notepad",
    "file_folder",
    "open_file_folder",
    "card_index_dividers",
    "newspaper_roll",
    "newspaper",
    "notebook",
    "closed_book",
    "green_book",
    "blue_book",
    "orange_book",
    "notebook_with_decorative_cover",
    "ledger",
    "books",
    "open_book",
    "safety_pin",
    "link",
    "paperclip",
    "paperclips",
    "scissors",
    "triangular_ruler",
    "straight_ruler",
    "abacus",
    "pushpin",
    "round_pushpin",
    "closed_lock_with_key",
    "lock",
    "unlock",
    "lock_with_ink_pen",
    "pen",
    "fountain_pen",
    "black_nib",
    "memo",
    "pencil2",
    "crayon",
    "paintbrush",
    "mag",
    "mag_right",
    "heart",
    "orange_heart",
    "yellow_heart",
    "green_heart",
    "blue_heart",
    "purple_heart",
    "black_heart",
    "broken_heart",
    "heavy_heart_exclamation",
    "two_hearts",
    "revolving_hearts",
    "heartbeat",
    "heartpulse",
    "sparkling_heart",
    "cupid",
    "gift_heart",
    "heart_decoration",
    "peace_symbol",
    "latin_cross",
    "star_and_crescent",
    "om",
    "wheel_of_dharma",
    "star_of_david",
    "six_pointed_star",
    "menorah",
    "yin_yang",
    "orthodox_cross",
    "place_of_worship",
    "ophiuchus",
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpius",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
    "id",
    "atom_symbol",
    "u7a7a",
    "u5272",
    "radioactive",
    "biohazard",
    "mobile_phone_off",
    "vibration_mode",
    "u6709",
    "u7121",
    "u7533",
    "u55b6",
    "u6708",
    "eight_pointed_black_star",
    "vs",
    "accept",
    "white_flower",
    "ideograph_advantage",
    "secret",
    "congratulations",
    "u5408",
    "u6e80",
    "u7981",
    "a",
    "b",
    "ab",
    "cl",
    "o2",
    "sos",
    "no_entry",
    "name_badge",
    "no_entry_sign",
    "x",
    "o",
    "stop_sign",
    "anger",
    "hotsprings",
    "no_pedestrians",
    "do_not_litter",
    "no_bicycles",
    "non-potable_water",
    "underage",
    "no_mobile_phones",
    "exclamation",
    "grey_exclamation",
    "question",
    "grey_question",
    "bangbang",
    "interrobang",
    "100",
    "low_brightness",
    "high_brightness",
    "trident",
    "fleur_de_lis",
    "part_alternation_mark",
    "warning",
    "children_crossing",
    "beginner",
    "recycle",
    "u6307",
    "chart",
    "sparkle",
    "eight_spoked_asterisk",
    "negative_squared_cross_mark",
    "white_check_mark",
    "diamond_shape_with_a_dot_inside",
    "cyclone",
    "loop",
    "globe_with_meridians",
    "m",
    "atm",
    "zzz",
    "sa",
    "passport_control",
    "customs",
    "baggage_claim",
    "left_luggage",
    "wheelchair",
    "no_smoking",
    "wc",
    "parking",
    "potable_water",
    "mens",
    "womens",
    "baby_symbol",
    "restroom",
    "put_litter_in_its_place",
    "cinema",
    "signal_strength",
    "koko",
    "ng",
    "ok",
    "up",
    "cool",
    "new",
    "free",
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "keycap_ten",
    "asterisk",
    "1234",
    "eject_button",
    "arrow_forward",
    "pause_button",
    "next_track_button",
    "stop_button",
    "record_button",
    "play_or_pause_button",
    "previous_track_button",
    "fast_forward",
    "rewind",
    "twisted_rightwards_arrows",
    "repeat",
    "repeat_one",
    "arrow_backward",
    "arrow_up_small",
    "arrow_down_small",
    "arrow_double_up",
    "arrow_double_down",
    "arrow_right",
    "arrow_left",
    "arrow_up",
    "arrow_down",
    "arrow_upper_right",
    "arrow_lower_right",
    "arrow_lower_left",
    "arrow_upper_left",
    "arrow_up_down",
    "left_right_arrow",
    "arrows_counterclockwise",
    "arrow_right_hook",
    "leftwards_arrow_with_hook",
    "arrow_heading_up",
    "arrow_heading_down",
    "hash",
    "information_source",
    "abc",
    "abcd",
    "capital_abcd",
    "symbols",
    "musical_note",
    "notes",
    "wavy_dash",
    "curly_loop",
    "heavy_check_mark",
    "arrows_clockwise",
    "heavy_plus_sign",
    "heavy_minus_sign",
    "heavy_division_sign",
    "heavy_multiplication_x",
    "infinity",
    "heavy_dollar_sign",
    "currency_exchange",
    "copyright",
    "registered",
    "tm",
    "end",
    "back",
    "on",
    "top",
    "soon",
    "ballot_box_with_check",
    "radio_button",
    "white_circle",
    "black_circle",
    "red_circle",
    "large_blue_circle",
    "small_orange_diamond",
    "small_blue_diamond",
    "large_orange_diamond",
    "large_blue_diamond",
    "small_red_triangle",
    "black_small_square",
    "white_small_square",
    "black_large_square",
    "white_large_square",
    "small_red_triangle_down",
    "black_medium_square",
    "white_medium_square",
    "black_medium_small_square",
    "white_medium_small_square",
    "black_square_button",
    "white_square_button",
    "speaker",
    "sound",
    "loud_sound",
    "mute",
    "mega",
    "loudspeaker",
    "bell",
    "no_bell",
    "black_joker",
    "mahjong",
    "spades",
    "clubs",
    "hearts",
    "diamonds",
    "flower_playing_cards",
    "thought_balloon",
    "right_anger_bubble",
    "speech_balloon",
    "left_speech_bubble",
    "clock1",
    "clock2",
    "clock3",
    "clock4",
    "clock5",
    "clock6",
    "clock7",
    "clock8",
    "clock9",
    "clock10",
    "clock11",
    "clock12",
    "clock130",
    "clock230",
    "clock330",
    "clock430",
    "clock530",
    "clock630",
    "clock730",
    "clock830",
    "clock930",
    "clock1030",
    "clock1130",
    "clock1230",
    "white_flag",
    "black_flag",
    "pirate_flag",
    "checkered_flag",
    "triangular_flag_on_post",
    "rainbow_flag",
    "united_nations",
    "afghanistan",
    "aland_islands",
    "albania",
    "algeria",
    "american_samoa",
    "andorra",
    "angola",
    "anguilla",
    "antarctica",
    "antigua_barbuda",
    "argentina",
    "armenia",
    "aruba",
    "australia",
    "austria",
    "azerbaijan",
    "bahamas",
    "bahrain",
    "bangladesh",
    "barbados",
    "belarus",
    "belgium",
    "belize",
    "benin",
    "bermuda",
    "bhutan",
    "bolivia",
    "caribbean_netherlands",
    "bosnia_herzegovina",
    "botswana",
    "brazil",
    "british_indian_ocean_territory",
    "british_virgin_islands",
    "brunei",
    "bulgaria",
    "burkina_faso",
    "burundi",
    "cape_verde",
    "cambodia",
    "cameroon",
    "canada",
    "canary_islands",
    "cayman_islands",
    "central_african_republic",
    "chad",
    "chile",
    "cn",
    "christmas_island",
    "cocos_islands",
    "colombia",
    "comoros",
    "congo_brazzaville",
    "congo_kinshasa",
    "cook_islands",
    "costa_rica",
    "croatia",
    "cuba",
    "curacao",
    "cyprus",
    "czech_republic",
    "denmark",
    "djibouti",
    "dominica",
    "dominican_republic",
    "ecuador",
    "egypt",
    "el_salvador",
    "equatorial_guinea",
    "eritrea",
    "estonia",
    "ethiopia",
    "eu",
    "falkland_islands",
    "faroe_islands",
    "fiji",
    "finland",
    "fr",
    "french_guiana",
    "french_polynesia",
    "french_southern_territories",
    "gabon",
    "gambia",
    "georgia",
    "de",
    "ghana",
    "gibraltar",
    "greece",
    "greenland",
    "grenada",
    "guadeloupe",
    "guam",
    "guatemala",
    "guernsey",
    "guinea",
    "guinea_bissau",
    "guyana",
    "haiti",
    "honduras",
    "hong_kong",
    "hungary",
    "iceland",
    "india",
    "indonesia",
    "iran",
    "iraq",
    "ireland",
    "isle_of_man",
    "israel",
    "it",
    "cote_divoire",
    "jamaica",
    "jp",
    "jersey",
    "jordan",
    "kazakhstan",
    "kenya",
    "kiribati",
    "kosovo",
    "kuwait",
    "kyrgyzstan",
    "laos",
    "latvia",
    "lebanon",
    "lesotho",
    "liberia",
    "libya",
    "liechtenstein",
    "lithuania",
    "luxembourg",
    "macau",
    "macedonia",
    "madagascar",
    "malawi",
    "malaysia",
    "maldives",
    "mali",
    "malta",
    "marshall_islands",
    "martinique",
    "mauritania",
    "mauritius",
    "mayotte",
    "mexico",
    "micronesia",
    "moldova",
    "monaco",
    "mongolia",
    "montenegro",
    "montserrat",
    "morocco",
    "mozambique",
    "myanmar",
    "namibia",
    "nauru",
    "nepal",
    "netherlands",
    "new_caledonia",
    "new_zealand",
    "nicaragua",
    "niger",
    "nigeria",
    "niue",
    "norfolk_island",
    "northern_mariana_islands",
    "north_korea",
    "norway",
    "oman",
    "pakistan",
    "palau",
    "palestinian_territories",
    "panama",
    "papua_new_guinea",
    "paraguay",
    "peru",
    "philippines",
    "pitcairn_islands",
    "poland",
    "portugal",
    "puerto_rico",
    "qatar",
    "reunion",
    "romania",
    "ru",
    "rwanda",
    "st_barthelemy",
    "st_helena",
    "st_kitts_nevis",
    "st_lucia",
    "st_pierre_miquelon",
    "st_vincent_grenadines",
    "samoa",
    "san_marino",
    "sao_tome_principe",
    "saudi_arabia",
    "senegal",
    "serbia",
    "seychelles",
    "sierra_leone",
    "singapore",
    "sint_maarten",
    "slovakia",
    "slovenia",
    "solomon_islands",
    "somalia",
    "south_africa",
    "south_georgia_south_sandwich_islands",
    "kr",
    "south_sudan",
    "es",
    "sri_lanka",
    "sudan",
    "suriname",
    "swaziland",
    "sweden",
    "switzerland",
    "syria",
    "taiwan",
    "tajikistan",
    "tanzania",
    "thailand",
    "timor_leste",
    "togo",
    "tokelau",
    "tonga",
    "trinidad_tobago",
    "tunisia",
    "tr",
    "turkmenistan",
    "turks_caicos_islands",
    "tuvalu",
    "uganda",
    "ukraine",
    "united_arab_emirates",
    "uk",
    "england",
    "scotland",
    "wales",
    "us",
    "us_virgin_islands",
    "uruguay",
    "uzbekistan",
    "vanuatu",
    "vatican_city",
    "venezuela",
    "vietnam",
    "wallis_futuna",
    "western_sahara",
    "yemen",
    "zambia",
    "zimbabwe",
  ];
var FB = {
  lib: SB,
  ordered: NB,
  fitzpatrick_scale_modifiers: ["🏻", "🏼", "🏽", "🏾", "🏿"],
};
const OB = tn(FB);
var LB = () => {
  const e = "\\ud800-\\udfff",
    i =
      "\\u0300-\\u036f" +
      "\\ufe20-\\ufe2f" +
      "\\u20d0-\\u20ff" +
      "\\u1ab0-\\u1aff" +
      "\\u1dc0-\\u1dff",
    o = "\\ufe0e\\ufe0f",
    u = "\\uD83D\\uDC69\\uD83C\\uDFFB\\u200D\\uD83C\\uDF93",
    l = `[${e}]`,
    p = `[${i}]`,
    h = "\\ud83c[\\udffb-\\udfff]",
    f = `(?:${p}|${h})`,
    _ = `[^${e}]`,
    y = "(?:\\uD83C[\\uDDE6-\\uDDFF]){2}",
    b = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    C = "\\u200d",
    T =
      "(?:\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40(?:\\udc65|\\udc73|\\udc77)\\udb40(?:\\udc6e|\\udc63|\\udc6c)\\udb40(?:\\udc67|\\udc74|\\udc73)\\udb40\\udc7f)",
    I = `[${u}]`,
    O = `${f}?`,
    M = `[${o}]?`,
    N = `(?:${C}(?:${[_, y, b].join("|")})${M + O})*`,
    d = M + O + N,
    U = `(?:${[`${_}${p}?`, p, y, b, l, I].join("|")})`;
  return new RegExp(`${T}|${h}(?=${h})|${U + d}`, "g");
};
const RB = tn(LB);
RB();
var vB = "️",
  BB = new RegExp(vB, "g");
function PB(e) {
  return e.replace(BB, "");
}
function MB(e) {
  return /:.+:/.test(e) ? e.slice(1, -1) : e;
}
var Ko = Object.entries(OB.lib).map(([e, { char: t }]) => [e, t]),
  HB = new Map(Ko);
new Map(Ko.map(([e, t]) => [PB(t), e]));
var UB = (e) => (Pg.assert.string(e), HB.get(MB(e)));
const qi = [
  {
    name: "angry",
    emoji: "😠",
    tags: ["mad", "annoyed"],
    description: "angry face",
    emoticons: [">:(", ">:[", ">:-(", ">:-[", ">=(", ">=[", ">=-(", ">=-["],
  },
  {
    name: "blush",
    emoji: "😊",
    tags: ["proud"],
    description: "smiling face with smiling eyes",
    emoticons: [
      ':")',
      ':"]',
      ':"D',
      ':-")',
      ':-"]',
      ':-"D',
      '=")',
      '="]',
      '="D',
      '=-")',
      '=-"]',
      '=-"D',
    ],
  },
  {
    name: "broken_heart",
    emoji: "💔",
    tags: [],
    description: "broken heart",
    emoticons: ["<\\3", "</3"],
  },
  {
    name: "confused",
    emoji: "😕",
    tags: [],
    description: "confused face",
    emoticons: [":/", ":\\", ":-/", ":-\\", "=/", "=\\", "=-/", "=-\\"],
  },
  {
    name: "cry",
    emoji: "😢",
    tags: ["sad", "tear"],
    description: "crying face",
    emoticons: [
      ":,(",
      ":,[",
      ":,|",
      ":,-(",
      ":,-[",
      ":,-|",
      ":'(",
      ":'[",
      ":'|",
      ":'-(",
      ":'-[",
      ":'-|",
      "=,(",
      "=,[",
      "=,|",
      "=,-(",
      "=,-[",
      "=,-|",
      "='(",
      "='[",
      "='|",
      "='-(",
      "='-[",
      "='-|",
    ],
  },
  {
    name: "frowning",
    emoji: "😦",
    tags: [],
    description: "frowning face with open mouth",
    emoticons: [":(", ":[", ":-(", ":-[", "=(", "=[", "=-(", "=-["],
  },
  {
    name: "heart",
    emoji: "❤️",
    tags: ["love"],
    description: "red heart",
    emoticons: ["<3"],
  },
  {
    name: "imp",
    emoji: "👿",
    tags: ["angry", "devil", "evil", "horns"],
    description: "angry face with horns",
    emoticons: ["]:(", "]:[", "]:-(", "]:-[", "]=(", "]=[", "]=-(", "]=-["],
  },
  {
    name: "innocent",
    emoji: "😇",
    tags: ["angel"],
    description: "smiling face with halo",
    emoticons: [
      "o:)",
      "o:]",
      "o:D",
      "o:-)",
      "o:-]",
      "o:-D",
      "o=)",
      "o=]",
      "o=D",
      "o=-)",
      "o=-]",
      "o=-D",
      "O:)",
      "O:]",
      "O:D",
      "O:-)",
      "O:-]",
      "O:-D",
      "O=)",
      "O=]",
      "O=D",
      "O=-)",
      "O=-]",
      "O=-D",
      "0:)",
      "0:]",
      "0:D",
      "0:-)",
      "0:-]",
      "0:-D",
      "0=)",
      "0=]",
      "0=D",
      "0=-)",
      "0=-]",
      "0=-D",
    ],
  },
  {
    name: "joy",
    emoji: "😂",
    tags: ["tears"],
    description: "face with tears of joy",
    emoticons: [
      ":,)",
      ":,]",
      ":,D",
      ":,-)",
      ":,-]",
      ":,-D",
      ":')",
      ":']",
      ":'D",
      ":'-)",
      ":'-]",
      ":'-D",
      "=,)",
      "=,]",
      "=,D",
      "=,-)",
      "=,-]",
      "=,-D",
      "=')",
      "=']",
      "='D",
      "='-)",
      "='-]",
      "='-D",
    ],
  },
  {
    name: "kissing",
    emoji: "😗",
    tags: [],
    description: "kissing face",
    emoticons: [":*", ":-*", "=*", "=-*"],
  },
  {
    name: "laughing",
    emoji: "😆",
    tags: ["happy", "haha"],
    description: "grinning squinting face",
    emoticons: [
      "x)",
      "x]",
      "xD",
      "x-)",
      "x-]",
      "x-D",
      "X)",
      "X]",
      "X-)",
      "X-]",
      "X-D",
    ],
  },
  {
    name: "man",
    emoji: "👨",
    tags: ["mustache", "father", "dad"],
    description: "man",
    emoticons: [
      ":3",
      ":-3",
      "=3",
      "=-3",
      ";3",
      ";-3",
      "x3",
      "x-3",
      "X3",
      "X-3",
    ],
  },
  {
    name: "neutral_face",
    emoji: "😐",
    tags: ["meh"],
    description: "neutral face",
    emoticons: [":|", ":-|", "=|", "=-|"],
  },
  {
    name: "no_mouth",
    emoji: "😶",
    tags: ["mute", "silence"],
    description: "face without mouth",
    emoticons: [":-"],
  },
  {
    name: "open_mouth",
    emoji: "😮",
    tags: ["surprise", "impressed", "wow"],
    description: "face with open mouth",
    emoticons: [
      ":o",
      ":O",
      ":0",
      ":-o",
      ":-O",
      ":-0",
      "=o",
      "=O",
      "=0",
      "=-o",
      "=-O",
      "=-0",
    ],
  },
  {
    name: "rage",
    emoji: "😡",
    tags: ["angry"],
    description: "pouting face",
    emoticons: [":@", ":-@", "=@", "=-@"],
  },
  {
    name: "smile",
    emoji: "😄",
    tags: ["happy", "joy", "laugh", "pleased"],
    description: "grinning face with smiling eyes",
    emoticons: [":D", ":-D", "=D", "=-D"],
  },
  {
    name: "smiley",
    emoji: "😃",
    tags: ["happy", "joy", "haha"],
    description: "grinning face with big eyes",
    emoticons: [":)", ":]", ":-)", ":-]", "=)", "=]", "=-)", "=-]"],
  },
  {
    name: "smiling_imp",
    emoji: "😈",
    tags: ["devil", "evil", "horns"],
    description: "smiling face with horns",
    emoticons: [
      "]:)",
      "]:]",
      "]:D",
      "]:-)",
      "]:-]",
      "]:-D",
      "]=)",
      "]=]",
      "]=D",
      "]=-)",
      "]=-]",
      "]=-D",
    ],
  },
  {
    name: "sob",
    emoji: "😭",
    tags: ["sad", "cry", "bawling"],
    description: "loudly crying face",
    emoticons: [
      ":,'(",
      ":,'[",
      ":,'-(",
      ":,'-[",
      ":',(",
      ":',[",
      ":',-(",
      ":',-[",
      "=,'(",
      "=,'[",
      "=,'-(",
      "=,'-[",
      "=',(",
      "=',[",
      "=',-(",
      "=',-[",
    ],
  },
  {
    name: "stuck_out_tongue",
    emoji: "😛",
    tags: [],
    description: "face with tongue",
    emoticons: [
      ":p",
      ":P",
      ":d",
      ":-p",
      ":-P",
      ":-d",
      "=p",
      "=P",
      "=d",
      "=-p",
      "=-P",
      "=-d",
    ],
  },
  {
    name: "stuck_out_tongue_closed_eyes",
    emoji: "😝",
    tags: ["prank"],
    description: "squinting face with tongue",
    emoticons: ["xP", "x-p", "x-P", "x-d", "Xp", "Xd", "X-p", "X-P", "X-d"],
  },
  {
    name: "stuck_out_tongue_winking_eye",
    emoji: "😜",
    tags: ["prank", "silly"],
    description: "winking face with tongue",
    emoticons: [";p", ";P", ";d", ";-p", ";-P", ";-d"],
  },
  {
    name: "sunglasses",
    emoji: "😎",
    tags: ["cool"],
    description: "smiling face with sunglasses",
    emoticons: [
      "8)",
      "8]",
      "8D",
      "8-)",
      "8-]",
      "8-D",
      "B)",
      "B]",
      "B-)",
      "B-]",
      "B-D",
    ],
  },
  {
    name: "sweat",
    emoji: "😓",
    tags: [],
    description: "downcast face with sweat",
    emoticons: [
      ",:(",
      ",:[",
      ",:-(",
      ",:-[",
      ",=(",
      ",=[",
      ",=-(",
      ",=-[",
      "':(",
      "':[",
      "':-(",
      "':-[",
      "'=(",
      "'=[",
      "'=-(",
      "'=-[",
    ],
  },
  {
    name: "sweat_smile",
    emoji: "😅",
    tags: ["hot"],
    description: "grinning face with sweat",
    emoticons: [
      ",:)",
      ",:]",
      ",:D",
      ",:-)",
      ",:-]",
      ",:-D",
      ",=)",
      ",=]",
      ",=D",
      ",=-)",
      ",=-]",
      ",=-D",
      "':)",
      "':]",
      "':D",
      "':-)",
      "':-]",
      "':-D",
      "'=)",
      "'=]",
      "'=D",
      "'=-)",
      "'=-]",
      "'=-D",
    ],
  },
  {
    name: "unamused",
    emoji: "😒",
    tags: ["meh"],
    description: "unamused face",
    emoticons: [
      ":$",
      ":s",
      ":z",
      ":S",
      ":Z",
      ":-$",
      ":-s",
      ":-z",
      ":-S",
      ":-Z",
      "=$",
      "=s",
      "=z",
      "=S",
      "=Z",
      "=-$",
      "=-s",
      "=-z",
      "=-S",
      "=-Z",
    ],
  },
  {
    name: "wink",
    emoji: "😉",
    tags: ["flirt"],
    description: "winking face",
    emoticons: [";)", ";]", ";D", ";-)", ";-]", ";-D"],
  },
];
function jB(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Jo(e, t, a) {
  const n = Ja((a || {}).ignore || []),
    s = qB(t);
  let i = -1;
  for (; ++i < s.length; ) Ms(e, "text", o);
  function o(l, p) {
    let h = -1,
      f;
    for (; ++h < p.length; ) {
      const _ = p[h],
        y = f ? f.children : void 0;
      if (n(_, y ? y.indexOf(_) : void 0, f)) return;
      f = _;
    }
    if (f) return u(l, p);
  }
  function u(l, p) {
    const h = p[p.length - 1],
      f = s[i][0],
      _ = s[i][1];
    let y = 0;
    const C = h.children.indexOf(l);
    let T = !1,
      I = [];
    f.lastIndex = 0;
    let O = f.exec(l.value);
    for (; O; ) {
      const M = O.index,
        N = {
          index: O.index,
          input: O.input,
          stack: [...p, l],
        };
      let d = _(...O, N);
      if (
        (typeof d == "string" &&
          (d =
            d.length > 0
              ? {
                  type: "text",
                  value: d,
                }
              : void 0),
        d === !1
          ? (f.lastIndex = M + 1)
          : (y !== M &&
              I.push({
                type: "text",
                value: l.value.slice(y, M),
              }),
            Array.isArray(d) ? I.push(...d) : d && I.push(d),
            (y = M + O[0].length),
            (T = !0)),
        !f.global)
      )
        break;
      O = f.exec(l.value);
    }
    return (
      T
        ? (y < l.value.length &&
            I.push({
              type: "text",
              value: l.value.slice(y),
            }),
          h.children.splice(C, 1, ...I))
        : (I = [l]),
      C + I.length
    );
  }
}
function qB(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const a = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < a.length; ) {
    const n = a[r];
    t.push([YB(n[0]), $B(n[1])]);
  }
  return t;
}
function YB(e) {
  return typeof e == "string" ? new RegExp(jB(e), "g") : e;
}
function $B(e) {
  return typeof e == "function"
    ? e
    : function () {
        return e;
      };
}
const VB = /:\+1:|:-1:|:[\w-]+:/g,
  WB = /[$@|*'",;.=:\-)([\]\\/<>038BOopPsSdDxXzZ]{2,5}/g,
  GB = /(?:_|-(?!1))/g,
  QB = {
    padSpaceAfter: !1,
    emoticon: !1,
    accessible: !1,
  };
function XB(e) {
  const t = Object.assign({}, QB, e),
    a = !!t.padSpaceAfter,
    r = !!t.emoticon,
    n = !!t.accessible;
  function s(p, h) {
    return {
      type: "text",
      meta: null,
      value: p,
      data: {
        hName: "span",
        hProperties: {
          role: "img",
          ariaLabel: h,
        },
        hChildren: [
          {
            type: "text",
            value: p,
          },
        ],
      },
    };
  }
  function i(p) {
    const h = qi.find((T) => T.emoticons.includes(p)),
      f = qi.find((T) => T.emoticons.includes(p.slice(0, -1))),
      _ = h || f;
    if (!_) return !1;
    const y = !h && f ? p.slice(-1) : "",
      b = a ? " " : "",
      C = _.emoji + b + y;
    return n ? s(C, _.name + " emoticon") : C;
  }
  function o(p) {
    let h = UB(p);
    if (typeof h > "u") return !1;
    if ((a && (h = h + " "), n)) {
      const f = p.slice(1, -1).replace(GB, " ") + " emoji";
      return s(h, f);
    }
    return h;
  }
  const u = [[VB, o]];
  r && u.push([WB, i]);
  function l(p) {
    Jo(p, u);
  }
  return l;
}
function Yi(e, t) {
  const a = String(e);
  if (typeof t != "string") throw new TypeError("Expected character");
  let r = 0,
    n = a.indexOf(t);
  for (; n !== -1; ) r++, (n = a.indexOf(t, n + t.length));
  return r;
}
const br = "phrasing",
  wr = ["autolink", "link", "image", "label"];
function KB() {
  return {
    transforms: [nP],
    enter: {
      literalAutolink: ZB,
      literalAutolinkEmail: Er,
      literalAutolinkHttp: Er,
      literalAutolinkWww: Er,
    },
    exit: {
      literalAutolink: rP,
      literalAutolinkEmail: aP,
      literalAutolinkHttp: eP,
      literalAutolinkWww: tP,
    },
  };
}
function JB() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: br,
        notInConstruct: wr,
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: br,
        notInConstruct: wr,
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: br,
        notInConstruct: wr,
      },
    ],
  };
}
function ZB(e) {
  this.enter(
    {
      type: "link",
      title: null,
      url: "",
      children: [],
    },
    e,
  );
}
function Er(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function eP(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function tP(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, (t.url = "http://" + this.sliceSerialize(e));
}
function aP(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function rP(e) {
  this.exit(e);
}
function nP(e) {
  Jo(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, iP],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, sP],
    ],
    {
      ignore: ["link", "linkReference"],
    },
  );
}
function iP(e, t, a, r, n) {
  let s = "";
  if (
    !Zo(n) ||
    (/^w/i.test(t) && ((a = t + a), (t = ""), (s = "http://")), !oP(a))
  )
    return !1;
  const i = cP(a + r);
  if (!i[0]) return !1;
  const o = {
    type: "link",
    title: null,
    url: s + t + i[0],
    children: [
      {
        type: "text",
        value: t + i[0],
      },
    ],
  };
  return i[1]
    ? [
        o,
        {
          type: "text",
          value: i[1],
        },
      ]
    : o;
}
function sP(e, t, a, r) {
  return !Zo(r, !0) || /[-\d_]$/.test(a)
    ? !1
    : {
        type: "link",
        title: null,
        url: "mailto:" + t + "@" + a,
        children: [
          {
            type: "text",
            value: t + "@" + a,
          },
        ],
      };
}
function oP(e) {
  const t = e.split(".");
  return !(
    t.length < 2 ||
    (t[t.length - 1] &&
      (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1]))) ||
    (t[t.length - 2] &&
      (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
  );
}
function cP(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t) return [e, void 0];
  e = e.slice(0, t.index);
  let a = t[0],
    r = a.indexOf(")");
  const n = Yi(e, "(");
  let s = Yi(e, ")");
  for (; r !== -1 && n > s; )
    (e += a.slice(0, r + 1)), (a = a.slice(r + 1)), (r = a.indexOf(")")), s++;
  return [e, a];
}
function Zo(e, t) {
  const a = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Ct(a) || Ga(a)) && (!t || a !== 47);
}
ec.peek = kP;
function uP() {
  return {
    enter: {
      gfmFootnoteDefinition: fP,
      gfmFootnoteDefinitionLabelString: hP,
      gfmFootnoteCall: _P,
      gfmFootnoteCallString: mP,
    },
    exit: {
      gfmFootnoteDefinition: pP,
      gfmFootnoteDefinitionLabelString: dP,
      gfmFootnoteCall: yP,
      gfmFootnoteCallString: gP,
    },
  };
}
function lP() {
  return {
    unsafe: [
      {
        character: "[",
        inConstruct: ["phrasing", "label", "reference"],
      },
    ],
    handlers: {
      footnoteDefinition: bP,
      footnoteReference: ec,
    },
  };
}
function fP(e) {
  this.enter(
    {
      type: "footnoteDefinition",
      identifier: "",
      label: "",
      children: [],
    },
    e,
  );
}
function hP() {
  this.buffer();
}
function dP(e) {
  const t = this.resume(),
    a = this.stack[this.stack.length - 1];
  a.type,
    (a.label = t),
    (a.identifier = qe(this.sliceSerialize(e)).toLowerCase());
}
function pP(e) {
  this.exit(e);
}
function _P(e) {
  this.enter(
    {
      type: "footnoteReference",
      identifier: "",
      label: "",
    },
    e,
  );
}
function mP() {
  this.buffer();
}
function gP(e) {
  const t = this.resume(),
    a = this.stack[this.stack.length - 1];
  a.type,
    (a.label = t),
    (a.identifier = qe(this.sliceSerialize(e)).toLowerCase());
}
function yP(e) {
  this.exit(e);
}
function ec(e, t, a, r) {
  const n = a.createTracker(r);
  let s = n.move("[^");
  const i = a.enter("footnoteReference"),
    o = a.enter("reference");
  return (
    (s += n.move(
      a.safe(a.associationId(e), {
        ...n.current(),
        before: s,
        after: "]",
      }),
    )),
    o(),
    i(),
    (s += n.move("]")),
    s
  );
}
function kP() {
  return "[";
}
function bP(e, t, a, r) {
  const n = a.createTracker(r);
  let s = n.move("[^");
  const i = a.enter("footnoteDefinition"),
    o = a.enter("label");
  return (
    (s += n.move(
      a.safe(a.associationId(e), {
        ...n.current(),
        before: s,
        after: "]",
      }),
    )),
    o(),
    (s += n.move("]:" + (e.children && e.children.length > 0 ? " " : ""))),
    n.shift(4),
    (s += n.move(a.indentLines(a.containerFlow(e, n.current()), wP))),
    i(),
    s
  );
}
function wP(e, t, a) {
  return t === 0 ? e : (a ? "" : "    ") + e;
}
const EP = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe",
];
tc.peek = DP;
function TP() {
  return {
    canContainEols: ["delete"],
    enter: {
      strikethrough: CP,
    },
    exit: {
      strikethrough: xP,
    },
  };
}
function AP() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: EP,
      },
    ],
    handlers: {
      delete: tc,
    },
  };
}
function CP(e) {
  this.enter(
    {
      type: "delete",
      children: [],
    },
    e,
  );
}
function xP(e) {
  this.exit(e);
}
function tc(e, t, a, r) {
  const n = a.createTracker(r),
    s = a.enter("strikethrough");
  let i = n.move("~~");
  return (
    (i += a.containerPhrasing(e, {
      ...n.current(),
      before: i,
      after: "~",
    })),
    (i += n.move("~~")),
    s(),
    i
  );
}
function DP() {
  return "~";
}
function zP(e, t = {}) {
  const a = (t.align || []).concat(),
    r = t.stringLength || SP,
    n = [],
    s = [],
    i = [],
    o = [];
  let u = 0,
    l = -1;
  for (; ++l < e.length; ) {
    const y = [],
      b = [];
    let C = -1;
    for (e[l].length > u && (u = e[l].length); ++C < e[l].length; ) {
      const T = IP(e[l][C]);
      if (t.alignDelimiters !== !1) {
        const I = r(T);
        (b[C] = I), (o[C] === void 0 || I > o[C]) && (o[C] = I);
      }
      y.push(T);
    }
    (s[l] = y), (i[l] = b);
  }
  let p = -1;
  if (typeof a == "object" && "length" in a) for (; ++p < u; ) n[p] = $i(a[p]);
  else {
    const y = $i(a);
    for (; ++p < u; ) n[p] = y;
  }
  p = -1;
  const h = [],
    f = [];
  for (; ++p < u; ) {
    const y = n[p];
    let b = "",
      C = "";
    y === 99
      ? ((b = ":"), (C = ":"))
      : y === 108
        ? (b = ":")
        : y === 114 && (C = ":");
    let T =
      t.alignDelimiters === !1 ? 1 : Math.max(1, o[p] - b.length - C.length);
    const I = b + "-".repeat(T) + C;
    t.alignDelimiters !== !1 &&
      ((T = b.length + T + C.length), T > o[p] && (o[p] = T), (f[p] = T)),
      (h[p] = I);
  }
  s.splice(1, 0, h), i.splice(1, 0, f), (l = -1);
  const _ = [];
  for (; ++l < s.length; ) {
    const y = s[l],
      b = i[l];
    p = -1;
    const C = [];
    for (; ++p < u; ) {
      const T = y[p] || "";
      let I = "",
        O = "";
      if (t.alignDelimiters !== !1) {
        const M = o[p] - (b[p] || 0),
          N = n[p];
        N === 114
          ? (I = " ".repeat(M))
          : N === 99
            ? M % 2
              ? ((I = " ".repeat(M / 2 + 0.5)), (O = " ".repeat(M / 2 - 0.5)))
              : ((I = " ".repeat(M / 2)), (O = I))
            : (O = " ".repeat(M));
      }
      t.delimiterStart !== !1 && !p && C.push("|"),
        t.padding !== !1 &&
          !(t.alignDelimiters === !1 && T === "") &&
          (t.delimiterStart !== !1 || p) &&
          C.push(" "),
        t.alignDelimiters !== !1 && C.push(I),
        C.push(T),
        t.alignDelimiters !== !1 && C.push(O),
        t.padding !== !1 && C.push(" "),
        (t.delimiterEnd !== !1 || p !== u - 1) && C.push("|");
    }
    _.push(t.delimiterEnd === !1 ? C.join("").replace(/ +$/, "") : C.join(""));
  }
  return _.join(`
`);
}
function IP(e) {
  return e == null ? "" : String(e);
}
function SP(e) {
  return e.length;
}
function $i(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99
    ? 99
    : t === 76 || t === 108
      ? 108
      : t === 82 || t === 114
        ? 114
        : 0;
}
function NP() {
  return {
    enter: {
      table: FP,
      tableData: Vi,
      tableHeader: Vi,
      tableRow: LP,
    },
    exit: {
      codeText: RP,
      table: OP,
      tableData: Tr,
      tableHeader: Tr,
      tableRow: Tr,
    },
  };
}
function FP(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function (a) {
        return a === "none" ? null : a;
      }),
      children: [],
    },
    e,
  ),
    (this.data.inTable = !0);
}
function OP(e) {
  this.exit(e), (this.data.inTable = void 0);
}
function LP(e) {
  this.enter(
    {
      type: "tableRow",
      children: [],
    },
    e,
  );
}
function Tr(e) {
  this.exit(e);
}
function Vi(e) {
  this.enter(
    {
      type: "tableCell",
      children: [],
    },
    e,
  );
}
function RP(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, vP));
  const a = this.stack[this.stack.length - 1];
  a.type, (a.value = t), this.exit(e);
}
function vP(e, t) {
  return t === "|" ? t : e;
}
function BP(e) {
  const t = e || {},
    a = t.tableCellPadding,
    r = t.tablePipeAlign,
    n = t.stringLength,
    s = a ? " " : "|";
  return {
    unsafe: [
      {
        character: "\r",
        inConstruct: "tableCell",
      },
      {
        character: `
`,
        inConstruct: "tableCell",
      },
      {
        atBreak: !0,
        character: "|",
        after: "[	 :-]",
      },
      {
        character: "|",
        inConstruct: "tableCell",
      },
      {
        atBreak: !0,
        character: ":",
        after: "-",
      },
      {
        atBreak: !0,
        character: "-",
        after: "[:|-]",
      },
    ],
    handlers: {
      inlineCode: f,
      table: i,
      tableCell: u,
      tableRow: o,
    },
  };
  function i(_, y, b, C) {
    return l(p(_, b, C), _.align);
  }
  function o(_, y, b, C) {
    const T = h(_, b, C),
      I = l([T]);
    return I.slice(
      0,
      I.indexOf(`
`),
    );
  }
  function u(_, y, b, C) {
    const T = b.enter("tableCell"),
      I = b.enter("phrasing"),
      O = b.containerPhrasing(_, {
        ...C,
        before: s,
        after: s,
      });
    return I(), T(), O;
  }
  function l(_, y) {
    return zP(_, {
      align: y,
      alignDelimiters: r,
      padding: a,
      stringLength: n,
    });
  }
  function p(_, y, b) {
    const C = _.children;
    let T = -1;
    const I = [],
      O = y.enter("table");
    for (; ++T < C.length; ) I[T] = h(C[T], y, b);
    return O(), I;
  }
  function h(_, y, b) {
    const C = _.children;
    let T = -1;
    const I = [],
      O = y.enter("tableRow");
    for (; ++T < C.length; ) I[T] = u(C[T], _, y, b);
    return O(), I;
  }
  function f(_, y, b) {
    let C = kt.inlineCode(_, y, b);
    return b.stack.includes("tableCell") && (C = C.replace(/\|/g, "\\$&")), C;
  }
}
function PP() {
  return {
    exit: {
      taskListCheckValueChecked: Wi,
      taskListCheckValueUnchecked: Wi,
      paragraph: HP,
    },
  };
}
function MP() {
  return {
    unsafe: [
      {
        atBreak: !0,
        character: "-",
        after: "[:|-]",
      },
    ],
    handlers: {
      listItem: UP,
    },
  };
}
function Wi(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, (t.checked = e.type === "taskListCheckValueChecked");
}
function HP(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const a = this.stack[this.stack.length - 1];
    a.type;
    const r = a.children[0];
    if (r && r.type === "text") {
      const n = t.children;
      let s = -1,
        i;
      for (; ++s < n.length; ) {
        const o = n[s];
        if (o.type === "paragraph") {
          i = o;
          break;
        }
      }
      i === a &&
        ((r.value = r.value.slice(1)),
        r.value.length === 0
          ? a.children.shift()
          : a.position &&
            r.position &&
            typeof r.position.start.offset == "number" &&
            (r.position.start.column++,
            r.position.start.offset++,
            (a.position.start = Object.assign({}, r.position.start))));
    }
  }
  this.exit(e);
}
function UP(e, t, a, r) {
  const n = e.children[0],
    s = typeof e.checked == "boolean" && n && n.type === "paragraph",
    i = "[" + (e.checked ? "x" : " ") + "] ",
    o = a.createTracker(r);
  s && o.move(i);
  let u = kt.listItem(e, t, a, {
    ...r,
    ...o.current(),
  });
  return s && (u = u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)), u;
  function l(p) {
    return p + i;
  }
}
function jP() {
  return [KB(), uP(), TP(), NP(), PP()];
}
function qP(e) {
  return {
    extensions: [JB(), lP(), AP(), BP(e), MP()],
  };
}
const YP = {
    tokenize: XP,
    partial: !0,
  },
  ac = {
    tokenize: KP,
    partial: !0,
  },
  rc = {
    tokenize: JP,
    partial: !0,
  },
  nc = {
    tokenize: ZP,
    partial: !0,
  },
  $P = {
    tokenize: eM,
    partial: !0,
  },
  ic = {
    tokenize: GP,
    previous: oc,
  },
  sc = {
    tokenize: QP,
    previous: cc,
  },
  rt = {
    tokenize: WP,
    previous: uc,
  },
  Qe = {};
function VP() {
  return {
    text: Qe,
  };
}
let yt = 48;
for (; yt < 123; )
  (Qe[yt] = rt), yt++, yt === 58 ? (yt = 65) : yt === 91 && (yt = 97);
Qe[43] = rt;
Qe[45] = rt;
Qe[46] = rt;
Qe[95] = rt;
Qe[72] = [rt, sc];
Qe[104] = [rt, sc];
Qe[87] = [rt, ic];
Qe[119] = [rt, ic];
function WP(e, t, a) {
  const r = this;
  let n, s;
  return i;
  function i(h) {
    return !$r(h) || !uc.call(r, r.previous) || wn(r.events)
      ? a(h)
      : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), o(h));
  }
  function o(h) {
    return $r(h) ? (e.consume(h), o) : h === 64 ? (e.consume(h), u) : a(h);
  }
  function u(h) {
    return h === 46
      ? e.check($P, p, l)(h)
      : h === 45 || h === 95 || pe(h)
        ? ((s = !0), e.consume(h), u)
        : p(h);
  }
  function l(h) {
    return e.consume(h), (n = !0), u;
  }
  function p(h) {
    return s && n && me(r.previous)
      ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(h))
      : a(h);
  }
}
function GP(e, t, a) {
  const r = this;
  return n;
  function n(i) {
    return (i !== 87 && i !== 119) || !oc.call(r, r.previous) || wn(r.events)
      ? a(i)
      : (e.enter("literalAutolink"),
        e.enter("literalAutolinkWww"),
        e.check(YP, e.attempt(ac, e.attempt(rc, s), a), a)(i));
  }
  function s(i) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(i);
  }
}
function QP(e, t, a) {
  const r = this;
  let n = "",
    s = !1;
  return i;
  function i(h) {
    return (h === 72 || h === 104) && cc.call(r, r.previous) && !wn(r.events)
      ? (e.enter("literalAutolink"),
        e.enter("literalAutolinkHttp"),
        (n += String.fromCodePoint(h)),
        e.consume(h),
        o)
      : a(h);
  }
  function o(h) {
    if (me(h) && n.length < 5)
      return (n += String.fromCodePoint(h)), e.consume(h), o;
    if (h === 58) {
      const f = n.toLowerCase();
      if (f === "http" || f === "https") return e.consume(h), u;
    }
    return a(h);
  }
  function u(h) {
    return h === 47 ? (e.consume(h), s ? l : ((s = !0), u)) : a(h);
  }
  function l(h) {
    return h === null || Fa(h) || re(h) || Ct(h) || Ga(h)
      ? a(h)
      : e.attempt(ac, e.attempt(rc, p), a)(h);
  }
  function p(h) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(h);
  }
}
function XP(e, t, a) {
  let r = 0;
  return n;
  function n(i) {
    return (i === 87 || i === 119) && r < 3
      ? (r++, e.consume(i), n)
      : i === 46 && r === 3
        ? (e.consume(i), s)
        : a(i);
  }
  function s(i) {
    return i === null ? a(i) : t(i);
  }
}
function KP(e, t, a) {
  let r, n, s;
  return i;
  function i(l) {
    return l === 46 || l === 95
      ? e.check(nc, u, o)(l)
      : l === null || re(l) || Ct(l) || (l !== 45 && Ga(l))
        ? u(l)
        : ((s = !0), e.consume(l), i);
  }
  function o(l) {
    return l === 95 ? (r = !0) : ((n = r), (r = void 0)), e.consume(l), i;
  }
  function u(l) {
    return n || r || !s ? a(l) : t(l);
  }
}
function JP(e, t) {
  let a = 0,
    r = 0;
  return n;
  function n(i) {
    return i === 40
      ? (a++, e.consume(i), n)
      : i === 41 && r < a
        ? s(i)
        : i === 33 ||
            i === 34 ||
            i === 38 ||
            i === 39 ||
            i === 41 ||
            i === 42 ||
            i === 44 ||
            i === 46 ||
            i === 58 ||
            i === 59 ||
            i === 60 ||
            i === 63 ||
            i === 93 ||
            i === 95 ||
            i === 126
          ? e.check(nc, t, s)(i)
          : i === null || re(i) || Ct(i)
            ? t(i)
            : (e.consume(i), n);
  }
  function s(i) {
    return i === 41 && r++, e.consume(i), n;
  }
}
function ZP(e, t, a) {
  return r;
  function r(o) {
    return o === 33 ||
      o === 34 ||
      o === 39 ||
      o === 41 ||
      o === 42 ||
      o === 44 ||
      o === 46 ||
      o === 58 ||
      o === 59 ||
      o === 63 ||
      o === 95 ||
      o === 126
      ? (e.consume(o), r)
      : o === 38
        ? (e.consume(o), s)
        : o === 93
          ? (e.consume(o), n)
          : o === 60 || o === null || re(o) || Ct(o)
            ? t(o)
            : a(o);
  }
  function n(o) {
    return o === null || o === 40 || o === 91 || re(o) || Ct(o) ? t(o) : r(o);
  }
  function s(o) {
    return me(o) ? i(o) : a(o);
  }
  function i(o) {
    return o === 59 ? (e.consume(o), r) : me(o) ? (e.consume(o), i) : a(o);
  }
}
function eM(e, t, a) {
  return r;
  function r(s) {
    return e.consume(s), n;
  }
  function n(s) {
    return pe(s) ? a(s) : t(s);
  }
}
function oc(e) {
  return (
    e === null ||
    e === 40 ||
    e === 42 ||
    e === 95 ||
    e === 91 ||
    e === 93 ||
    e === 126 ||
    re(e)
  );
}
function cc(e) {
  return !me(e);
}
function uc(e) {
  return !(e === 47 || $r(e));
}
function $r(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || pe(e);
}
function wn(e) {
  let t = e.length,
    a = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      a = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      a = !1;
      break;
    }
  }
  return (
    e.length > 0 &&
      !a &&
      (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
    a
  );
}
const tM = {
  tokenize: uM,
  partial: !0,
};
function aM() {
  return {
    document: {
      91: {
        tokenize: sM,
        continuation: {
          tokenize: oM,
        },
        exit: cM,
      },
    },
    text: {
      91: {
        tokenize: iM,
      },
      93: {
        add: "after",
        tokenize: rM,
        resolveTo: nM,
      },
    },
  };
}
function rM(e, t, a) {
  const r = this;
  let n = r.events.length;
  const s = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let i;
  for (; n--; ) {
    const u = r.events[n][1];
    if (u.type === "labelImage") {
      i = u;
      break;
    }
    if (
      u.type === "gfmFootnoteCall" ||
      u.type === "labelLink" ||
      u.type === "label" ||
      u.type === "image" ||
      u.type === "link"
    )
      break;
  }
  return o;
  function o(u) {
    if (!i || !i._balanced) return a(u);
    const l = qe(
      r.sliceSerialize({
        start: i.end,
        end: r.now(),
      }),
    );
    return l.codePointAt(0) !== 94 || !s.includes(l.slice(1))
      ? a(u)
      : (e.enter("gfmFootnoteCallLabelMarker"),
        e.consume(u),
        e.exit("gfmFootnoteCallLabelMarker"),
        t(u));
  }
}
function nM(e, t) {
  let a = e.length;
  for (; a--; )
    if (e[a][1].type === "labelImage" && e[a][0] === "enter") {
      e[a][1];
      break;
    }
  (e[a + 1][1].type = "data"),
    (e[a + 3][1].type = "gfmFootnoteCallLabelMarker");
  const r = {
      type: "gfmFootnoteCall",
      start: Object.assign({}, e[a + 3][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    },
    n = {
      type: "gfmFootnoteCallMarker",
      start: Object.assign({}, e[a + 3][1].end),
      end: Object.assign({}, e[a + 3][1].end),
    };
  n.end.column++, n.end.offset++, n.end._bufferIndex++;
  const s = {
      type: "gfmFootnoteCallString",
      start: Object.assign({}, n.end),
      end: Object.assign({}, e[e.length - 1][1].start),
    },
    i = {
      type: "chunkString",
      contentType: "string",
      start: Object.assign({}, s.start),
      end: Object.assign({}, s.end),
    },
    o = [
      e[a + 1],
      e[a + 2],
      ["enter", r, t],
      e[a + 3],
      e[a + 4],
      ["enter", n, t],
      ["exit", n, t],
      ["enter", s, t],
      ["enter", i, t],
      ["exit", i, t],
      ["exit", s, t],
      e[e.length - 2],
      e[e.length - 1],
      ["exit", r, t],
    ];
  return e.splice(a, e.length - a + 1, ...o), e;
}
function iM(e, t, a) {
  const r = this,
    n = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let s = 0,
    i;
  return o;
  function o(h) {
    return (
      e.enter("gfmFootnoteCall"),
      e.enter("gfmFootnoteCallLabelMarker"),
      e.consume(h),
      e.exit("gfmFootnoteCallLabelMarker"),
      u
    );
  }
  function u(h) {
    return h !== 94
      ? a(h)
      : (e.enter("gfmFootnoteCallMarker"),
        e.consume(h),
        e.exit("gfmFootnoteCallMarker"),
        e.enter("gfmFootnoteCallString"),
        (e.enter("chunkString").contentType = "string"),
        l);
  }
  function l(h) {
    if (s > 999 || (h === 93 && !i) || h === null || h === 91 || re(h))
      return a(h);
    if (h === 93) {
      e.exit("chunkString");
      const f = e.exit("gfmFootnoteCallString");
      return n.includes(qe(r.sliceSerialize(f)))
        ? (e.enter("gfmFootnoteCallLabelMarker"),
          e.consume(h),
          e.exit("gfmFootnoteCallLabelMarker"),
          e.exit("gfmFootnoteCall"),
          t)
        : a(h);
    }
    return re(h) || (i = !0), s++, e.consume(h), h === 92 ? p : l;
  }
  function p(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), s++, l) : l(h);
  }
}
function sM(e, t, a) {
  const r = this,
    n = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let s,
    i = 0,
    o;
  return u;
  function u(y) {
    return (
      (e.enter("gfmFootnoteDefinition")._container = !0),
      e.enter("gfmFootnoteDefinitionLabel"),
      e.enter("gfmFootnoteDefinitionLabelMarker"),
      e.consume(y),
      e.exit("gfmFootnoteDefinitionLabelMarker"),
      l
    );
  }
  function l(y) {
    return y === 94
      ? (e.enter("gfmFootnoteDefinitionMarker"),
        e.consume(y),
        e.exit("gfmFootnoteDefinitionMarker"),
        e.enter("gfmFootnoteDefinitionLabelString"),
        (e.enter("chunkString").contentType = "string"),
        p)
      : a(y);
  }
  function p(y) {
    if (i > 999 || (y === 93 && !o) || y === null || y === 91 || re(y))
      return a(y);
    if (y === 93) {
      e.exit("chunkString");
      const b = e.exit("gfmFootnoteDefinitionLabelString");
      return (
        (s = qe(r.sliceSerialize(b))),
        e.enter("gfmFootnoteDefinitionLabelMarker"),
        e.consume(y),
        e.exit("gfmFootnoteDefinitionLabelMarker"),
        e.exit("gfmFootnoteDefinitionLabel"),
        f
      );
    }
    return re(y) || (o = !0), i++, e.consume(y), y === 92 ? h : p;
  }
  function h(y) {
    return y === 91 || y === 92 || y === 93 ? (e.consume(y), i++, p) : p(y);
  }
  function f(y) {
    return y === 58
      ? (e.enter("definitionMarker"),
        e.consume(y),
        e.exit("definitionMarker"),
        n.includes(s) || n.push(s),
        G(e, _, "gfmFootnoteDefinitionWhitespace"))
      : a(y);
  }
  function _(y) {
    return t(y);
  }
}
function oM(e, t, a) {
  return e.check(ma, t, e.attempt(tM, t, a));
}
function cM(e) {
  e.exit("gfmFootnoteDefinition");
}
function uM(e, t, a) {
  const r = this;
  return G(e, n, "gfmFootnoteDefinitionIndent", 5);
  function n(s) {
    const i = r.events[r.events.length - 1];
    return i &&
      i[1].type === "gfmFootnoteDefinitionIndent" &&
      i[2].sliceSerialize(i[1], !0).length === 4
      ? t(s)
      : a(s);
  }
}
function lM(e) {
  let a = (e || {}).singleTilde;
  const r = {
    tokenize: s,
    resolveAll: n,
  };
  return (
    a == null && (a = !0),
    {
      text: {
        126: r,
      },
      insideSpan: {
        null: [r],
      },
      attentionMarkers: {
        null: [126],
      },
    }
  );
  function n(i, o) {
    let u = -1;
    for (; ++u < i.length; )
      if (
        i[u][0] === "enter" &&
        i[u][1].type === "strikethroughSequenceTemporary" &&
        i[u][1]._close
      ) {
        let l = u;
        for (; l--; )
          if (
            i[l][0] === "exit" &&
            i[l][1].type === "strikethroughSequenceTemporary" &&
            i[l][1]._open &&
            i[u][1].end.offset - i[u][1].start.offset ===
              i[l][1].end.offset - i[l][1].start.offset
          ) {
            (i[u][1].type = "strikethroughSequence"),
              (i[l][1].type = "strikethroughSequence");
            const p = {
                type: "strikethrough",
                start: Object.assign({}, i[l][1].start),
                end: Object.assign({}, i[u][1].end),
              },
              h = {
                type: "strikethroughText",
                start: Object.assign({}, i[l][1].end),
                end: Object.assign({}, i[u][1].start),
              },
              f = [
                ["enter", p, o],
                ["enter", i[l][1], o],
                ["exit", i[l][1], o],
                ["enter", h, o],
              ],
              _ = o.parser.constructs.insideSpan.null;
            _ && Se(f, f.length, 0, Qa(_, i.slice(l + 1, u), o)),
              Se(f, f.length, 0, [
                ["exit", h, o],
                ["enter", i[u][1], o],
                ["exit", i[u][1], o],
                ["exit", p, o],
              ]),
              Se(i, l - 1, u - l + 3, f),
              (u = l + f.length - 2);
            break;
          }
      }
    for (u = -1; ++u < i.length; )
      i[u][1].type === "strikethroughSequenceTemporary" &&
        (i[u][1].type = "data");
    return i;
  }
  function s(i, o, u) {
    const l = this.previous,
      p = this.events;
    let h = 0;
    return f;
    function f(y) {
      return l === 126 && p[p.length - 1][1].type !== "characterEscape"
        ? u(y)
        : (i.enter("strikethroughSequenceTemporary"), _(y));
    }
    function _(y) {
      const b = Oa(l);
      if (y === 126) return h > 1 ? u(y) : (i.consume(y), h++, _);
      if (h < 2 && !a) return u(y);
      const C = i.exit("strikethroughSequenceTemporary"),
        T = Oa(y);
      return (
        (C._open = !T || (T === 2 && !!b)),
        (C._close = !b || (b === 2 && !!T)),
        o(y)
      );
    }
  }
}
class fM {
  constructor() {
    this.map = [];
  }
  add(t, a, r) {
    hM(this, t, a, r);
  }
  consume(t) {
    if (
      (this.map.sort(function (s, i) {
        return s[0] - i[0];
      }),
      this.map.length === 0)
    )
      return;
    let a = this.map.length;
    const r = [];
    for (; a > 0; )
      (a -= 1),
        r.push(t.slice(this.map[a][0] + this.map[a][1]), this.map[a][2]),
        (t.length = this.map[a][0]);
    r.push([...t]), (t.length = 0);
    let n = r.pop();
    for (; n; ) t.push(...n), (n = r.pop());
    this.map.length = 0;
  }
}
function hM(e, t, a, r) {
  let n = 0;
  if (!(a === 0 && r.length === 0)) {
    for (; n < e.map.length; ) {
      if (e.map[n][0] === t) {
        (e.map[n][1] += a), e.map[n][2].push(...r);
        return;
      }
      n += 1;
    }
    e.map.push([t, a, r]);
  }
}
function dM(e, t) {
  let a = !1;
  const r = [];
  for (; t < e.length; ) {
    const n = e[t];
    if (a) {
      if (n[0] === "enter")
        n[1].type === "tableContent" &&
          r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (n[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const s = r.length - 1;
          r[s] = r[s] === "left" ? "center" : "right";
        }
      } else if (n[1].type === "tableDelimiterRow") break;
    } else n[0] === "enter" && n[1].type === "tableDelimiterRow" && (a = !0);
    t += 1;
  }
  return r;
}
function pM() {
  return {
    flow: {
      null: {
        tokenize: _M,
        resolveAll: mM,
      },
    },
  };
}
function _M(e, t, a) {
  const r = this;
  let n = 0,
    s = 0,
    i;
  return o;
  function o(D) {
    let S = r.events.length - 1;
    for (; S > -1; ) {
      const te = r.events[S][1].type;
      if (te === "lineEnding" || te === "linePrefix") S--;
      else break;
    }
    const P = S > -1 ? r.events[S][1].type : null,
      Q = P === "tableHead" || P === "tableRow" ? d : u;
    return Q === d && r.parser.lazy[r.now().line] ? a(D) : Q(D);
  }
  function u(D) {
    return e.enter("tableHead"), e.enter("tableRow"), l(D);
  }
  function l(D) {
    return D === 124 || ((i = !0), (s += 1)), p(D);
  }
  function p(D) {
    return D === null
      ? a(D)
      : $(D)
        ? s > 1
          ? ((s = 0),
            (r.interrupt = !0),
            e.exit("tableRow"),
            e.enter("lineEnding"),
            e.consume(D),
            e.exit("lineEnding"),
            _)
          : a(D)
        : K(D)
          ? G(e, p, "whitespace")(D)
          : ((s += 1),
            i && ((i = !1), (n += 1)),
            D === 124
              ? (e.enter("tableCellDivider"),
                e.consume(D),
                e.exit("tableCellDivider"),
                (i = !0),
                p)
              : (e.enter("data"), h(D)));
  }
  function h(D) {
    return D === null || D === 124 || re(D)
      ? (e.exit("data"), p(D))
      : (e.consume(D), D === 92 ? f : h);
  }
  function f(D) {
    return D === 92 || D === 124 ? (e.consume(D), h) : h(D);
  }
  function _(D) {
    return (
      (r.interrupt = !1),
      r.parser.lazy[r.now().line]
        ? a(D)
        : (e.enter("tableDelimiterRow"),
          (i = !1),
          K(D)
            ? G(
                e,
                y,
                "linePrefix",
                r.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4,
              )(D)
            : y(D))
    );
  }
  function y(D) {
    return D === 45 || D === 58
      ? C(D)
      : D === 124
        ? ((i = !0),
          e.enter("tableCellDivider"),
          e.consume(D),
          e.exit("tableCellDivider"),
          b)
        : N(D);
  }
  function b(D) {
    return K(D) ? G(e, C, "whitespace")(D) : C(D);
  }
  function C(D) {
    return D === 58
      ? ((s += 1),
        (i = !0),
        e.enter("tableDelimiterMarker"),
        e.consume(D),
        e.exit("tableDelimiterMarker"),
        T)
      : D === 45
        ? ((s += 1), T(D))
        : D === null || $(D)
          ? M(D)
          : N(D);
  }
  function T(D) {
    return D === 45 ? (e.enter("tableDelimiterFiller"), I(D)) : N(D);
  }
  function I(D) {
    return D === 45
      ? (e.consume(D), I)
      : D === 58
        ? ((i = !0),
          e.exit("tableDelimiterFiller"),
          e.enter("tableDelimiterMarker"),
          e.consume(D),
          e.exit("tableDelimiterMarker"),
          O)
        : (e.exit("tableDelimiterFiller"), O(D));
  }
  function O(D) {
    return K(D) ? G(e, M, "whitespace")(D) : M(D);
  }
  function M(D) {
    return D === 124
      ? y(D)
      : D === null || $(D)
        ? !i || n !== s
          ? N(D)
          : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(D))
        : N(D);
  }
  function N(D) {
    return a(D);
  }
  function d(D) {
    return e.enter("tableRow"), z(D);
  }
  function z(D) {
    return D === 124
      ? (e.enter("tableCellDivider"),
        e.consume(D),
        e.exit("tableCellDivider"),
        z)
      : D === null || $(D)
        ? (e.exit("tableRow"), t(D))
        : K(D)
          ? G(e, z, "whitespace")(D)
          : (e.enter("data"), U(D));
  }
  function U(D) {
    return D === null || D === 124 || re(D)
      ? (e.exit("data"), z(D))
      : (e.consume(D), D === 92 ? V : U);
  }
  function V(D) {
    return D === 92 || D === 124 ? (e.consume(D), U) : U(D);
  }
}
function mM(e, t) {
  let a = -1,
    r = !0,
    n = 0,
    s = [0, 0, 0, 0],
    i = [0, 0, 0, 0],
    o = !1,
    u = 0,
    l,
    p,
    h;
  const f = new fM();
  for (; ++a < e.length; ) {
    const _ = e[a],
      y = _[1];
    _[0] === "enter"
      ? y.type === "tableHead"
        ? ((o = !1),
          u !== 0 && (Gi(f, t, u, l, p), (p = void 0), (u = 0)),
          (l = {
            type: "table",
            start: Object.assign({}, y.start),
            end: Object.assign({}, y.end),
          }),
          f.add(a, 0, [["enter", l, t]]))
        : y.type === "tableRow" || y.type === "tableDelimiterRow"
          ? ((r = !0),
            (h = void 0),
            (s = [0, 0, 0, 0]),
            (i = [0, a + 1, 0, 0]),
            o &&
              ((o = !1),
              (p = {
                type: "tableBody",
                start: Object.assign({}, y.start),
                end: Object.assign({}, y.end),
              }),
              f.add(a, 0, [["enter", p, t]])),
            (n = y.type === "tableDelimiterRow" ? 2 : p ? 3 : 1))
          : n &&
              (y.type === "data" ||
                y.type === "tableDelimiterMarker" ||
                y.type === "tableDelimiterFiller")
            ? ((r = !1),
              i[2] === 0 &&
                (s[1] !== 0 &&
                  ((i[0] = i[1]),
                  (h = Aa(f, t, s, n, void 0, h)),
                  (s = [0, 0, 0, 0])),
                (i[2] = a)))
            : y.type === "tableCellDivider" &&
              (r
                ? (r = !1)
                : (s[1] !== 0 &&
                    ((i[0] = i[1]), (h = Aa(f, t, s, n, void 0, h))),
                  (s = i),
                  (i = [s[1], a, 0, 0])))
      : y.type === "tableHead"
        ? ((o = !0), (u = a))
        : y.type === "tableRow" || y.type === "tableDelimiterRow"
          ? ((u = a),
            s[1] !== 0
              ? ((i[0] = i[1]), (h = Aa(f, t, s, n, a, h)))
              : i[1] !== 0 && (h = Aa(f, t, i, n, a, h)),
            (n = 0))
          : n &&
            (y.type === "data" ||
              y.type === "tableDelimiterMarker" ||
              y.type === "tableDelimiterFiller") &&
            (i[3] = a);
  }
  for (
    u !== 0 && Gi(f, t, u, l, p), f.consume(t.events), a = -1;
    ++a < t.events.length;

  ) {
    const _ = t.events[a];
    _[0] === "enter" &&
      _[1].type === "table" &&
      (_[1]._align = dM(t.events, a));
  }
  return e;
}
function Aa(e, t, a, r, n, s) {
  const i = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData",
    o = "tableContent";
  a[0] !== 0 &&
    ((s.end = Object.assign({}, Lt(t.events, a[0]))),
    e.add(a[0], 0, [["exit", s, t]]));
  const u = Lt(t.events, a[1]);
  if (
    ((s = {
      type: i,
      start: Object.assign({}, u),
      end: Object.assign({}, u),
    }),
    e.add(a[1], 0, [["enter", s, t]]),
    a[2] !== 0)
  ) {
    const l = Lt(t.events, a[2]),
      p = Lt(t.events, a[3]),
      h = {
        type: o,
        start: Object.assign({}, l),
        end: Object.assign({}, p),
      };
    if ((e.add(a[2], 0, [["enter", h, t]]), r !== 2)) {
      const f = t.events[a[2]],
        _ = t.events[a[3]];
      if (
        ((f[1].end = Object.assign({}, _[1].end)),
        (f[1].type = "chunkText"),
        (f[1].contentType = "text"),
        a[3] > a[2] + 1)
      ) {
        const y = a[2] + 1,
          b = a[3] - a[2] - 1;
        e.add(y, b, []);
      }
    }
    e.add(a[3] + 1, 0, [["exit", h, t]]);
  }
  return (
    n !== void 0 &&
      ((s.end = Object.assign({}, Lt(t.events, n))),
      e.add(n, 0, [["exit", s, t]]),
      (s = void 0)),
    s
  );
}
function Gi(e, t, a, r, n) {
  const s = [],
    i = Lt(t.events, a);
  n && ((n.end = Object.assign({}, i)), s.push(["exit", n, t])),
    (r.end = Object.assign({}, i)),
    s.push(["exit", r, t]),
    e.add(a + 1, 0, s);
}
function Lt(e, t) {
  const a = e[t],
    r = a[0] === "enter" ? "start" : "end";
  return a[1][r];
}
const gM = {
  tokenize: kM,
};
function yM() {
  return {
    text: {
      91: gM,
    },
  };
}
function kM(e, t, a) {
  const r = this;
  return n;
  function n(u) {
    return r.previous !== null || !r._gfmTasklistFirstContentOfListItem
      ? a(u)
      : (e.enter("taskListCheck"),
        e.enter("taskListCheckMarker"),
        e.consume(u),
        e.exit("taskListCheckMarker"),
        s);
  }
  function s(u) {
    return re(u)
      ? (e.enter("taskListCheckValueUnchecked"),
        e.consume(u),
        e.exit("taskListCheckValueUnchecked"),
        i)
      : u === 88 || u === 120
        ? (e.enter("taskListCheckValueChecked"),
          e.consume(u),
          e.exit("taskListCheckValueChecked"),
          i)
        : a(u);
  }
  function i(u) {
    return u === 93
      ? (e.enter("taskListCheckMarker"),
        e.consume(u),
        e.exit("taskListCheckMarker"),
        e.exit("taskListCheck"),
        o)
      : a(u);
  }
  function o(u) {
    return $(u)
      ? t(u)
      : K(u)
        ? e.check(
            {
              tokenize: bM,
            },
            t,
            a,
          )(u)
        : a(u);
  }
}
function bM(e, t, a) {
  return G(e, r, "whitespace");
  function r(n) {
    return n === null ? a(n) : t(n);
  }
}
function wM(e) {
  return ks([VP(), aM(), lM(e), pM(), yM()]);
}
const EM = {};
function TM(e) {
  const t = this,
    a = e || EM,
    r = t.data(),
    n = r.micromarkExtensions || (r.micromarkExtensions = []),
    s = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []),
    i = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  n.push(wM(a)), s.push(jP()), i.push(qP(a));
}
const AM = function (e, t, a, r, n) {
    const s = En(t);
    if (
      a != null &&
      (typeof a != "number" || a < 0 || a === Number.POSITIVE_INFINITY)
    )
      throw new Error("Expected positive finite `index`");
    if (r != null && (!r.type || !r.children))
      throw new Error("Expected valid `parent`");
    if ((a == null) != (r == null))
      throw new Error("Expected both `index` and `parent`");
    return lc(e) ? s.call(n, e, a, r) : !1;
  },
  En = function (e) {
    if (e == null) return DM;
    if (typeof e == "string") return xM(e);
    if (typeof e == "object") return CM(e);
    if (typeof e == "function") return Tn(e);
    throw new Error("Expected function, string, or array as `test`");
  };
function CM(e) {
  const t = [];
  let a = -1;
  for (; ++a < e.length; ) t[a] = En(e[a]);
  return Tn(r);
  function r(...n) {
    let s = -1;
    for (; ++s < t.length; ) if (t[s].apply(this, n)) return !0;
    return !1;
  }
}
function xM(e) {
  return Tn(t);
  function t(a) {
    return a.tagName === e;
  }
}
function Tn(e) {
  return t;
  function t(a, r, n) {
    return !!(
      lc(a) && e.call(this, a, typeof r == "number" ? r : void 0, n || void 0)
    );
  }
}
function DM(e) {
  return !!(
    e &&
    typeof e == "object" &&
    "type" in e &&
    e.type === "element" &&
    "tagName" in e &&
    typeof e.tagName == "string"
  );
}
function lc(e) {
  return e !== null && typeof e == "object" && "type" in e && "tagName" in e;
}
const zM = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
  IM = /^[a-zA-Z]:\\/;
function SM(e) {
  if (typeof e != "string")
    throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
  return IM.test(e) ? !1 : zM.test(e);
}
function Vr(e) {
  const t = String(e || "").trim();
  return t ? t.split(/[ \t\n\r\f]+/g) : [];
}
function NM(e) {
  return e.join(" ").trim();
}
const FM = ["http", "https"],
  OM = ["nofollow"],
  LM = {};
function RM(e) {
  const t = e || LM,
    a = t.protocols || FM,
    r = En(t.test);
  return function (n) {
    et(n, "element", function (s, i, o) {
      if (
        s.tagName === "a" &&
        typeof s.properties.href == "string" &&
        r(s, i, o)
      ) {
        const u = s.properties.href;
        if (
          SM(u) ? a.includes(u.slice(0, u.indexOf(":"))) : u.startsWith("//")
        ) {
          const l = Gt(t.content, s),
            p = l && !Array.isArray(l) ? [l] : l,
            h = Gt(t.rel, s) || OM,
            f = typeof h == "string" ? Vr(h) : h,
            _ = Gt(t.target, s),
            y = Gt(t.properties, s);
          if (
            (y && Object.assign(s.properties, Je(y)),
            f.length > 0 && (s.properties.rel = [...f]),
            _ && (s.properties.target = _),
            p)
          ) {
            const b = Gt(t.contentProperties, s) || {};
            s.children.push({
              type: "element",
              tagName: "span",
              properties: Je(b),
              children: Je(p),
            });
          }
        }
      }
    });
  };
}
function Gt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
const Qi = {
  accept: "input",
  className: null,
  dropzone: null,
  htmlFor: "output",
  headers: ["td", "th"],
  itemProp: null,
  itemRef: null,
  itemType: null,
  ping: ["a", "area"],
  rel: ["a", "area", "link"],
  sandbox: "iframe",
  sizes: "link",
};
function vM() {
  return function (e) {
    const t = new Map(),
      a = [];
    et(e, "element", function (s) {
      let i;
      for (i in s.properties)
        if (Object.hasOwn(s.properties, i)) {
          const o = s.properties[i];
          Object.hasOwn(Qi, i) && AM(s, Qi[i]) && Array.isArray(o) && r(i, o);
        }
    }),
      n();
    function r(s, i) {
      let o = -1,
        u = t.get(s);
      for (u || ((u = new Map()), t.set(s, u)); ++o < i.length; ) {
        const l = i[o];
        u.set(l, (u.get(l) || 0) + 1);
      }
      a.push([s, i]);
    }
    function n() {
      const s = new Map();
      for (const [o, u] of t)
        s.set(
          o,
          [...u.entries()]
            .sort(function (l, p) {
              return p[1] - l[1] || fc(String(l[0]), String(p[0]), 0);
            })
            .map(function (l) {
              return l[0];
            }),
        );
      let i = -1;
      for (; ++i < a.length; ) {
        const o = a[i],
          u = s.get(o[0]);
        u &&
          o[1].sort(function (l, p) {
            return u.indexOf(l) - u.indexOf(p);
          });
      }
    }
  };
}
function fc(e, t, a) {
  return (e.charCodeAt(a) || 0) - (t.charCodeAt(a) || 0) || fc(e, t, a + 1);
}
function BM() {
  return function (e) {
    const t = new Map();
    et(e, "element", function (n) {
      let s = t.get(n.tagName);
      s || ((s = new Map()), t.set(n.tagName, s));
      let i;
      for (i in n.properties)
        Object.hasOwn(n.properties, i) && s.set(i, (s.get(i) || 0) + 1);
    });
    const a = r();
    et(e, "element", function (n) {
      const s = a.get(n.tagName);
      if (s) {
        const i = [],
          o = {};
        let u = -1,
          l;
        for (l in n.properties) Object.hasOwn(n.properties, l) && i.push(l);
        for (
          i.sort(function (p, h) {
            return s.indexOf(p) - s.indexOf(h);
          });
          ++u < i.length;

        )
          o[i[u]] = n.properties[i[u]];
        n.properties = o;
      }
    });
    function r() {
      const n = new Map();
      for (const [s, i] of t.entries())
        n.set(
          s,
          [...i.entries()]
            .sort(function (o, u) {
              return u[1] - o[1] || hc(String(o[0]), String(u[0]), 0);
            })
            .map(function (o) {
              return o[0];
            }),
        );
      return n;
    }
  };
}
function hc(e, t, a) {
  return (e.charCodeAt(a) || 0) - (t.charCodeAt(a) || 0) || hc(e, t, a + 1);
}
function Xi(e) {
  const t = [],
    a = String(e || "");
  let r = a.indexOf(","),
    n = 0,
    s = !1;
  for (; !s; ) {
    r === -1 && ((r = a.length), (s = !0));
    const i = a.slice(n, r).trim();
    (i || !s) && t.push(i), (n = r + 1), (r = a.indexOf(",", n));
  }
  return t;
}
function PM(e, t) {
  const a = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e)
    .join((a.padRight ? " " : "") + "," + (a.padLeft === !1 ? "" : " "))
    .trim();
}
const Ki = /[#.]/g;
function MM(e, t) {
  const a = e || "",
    r = {};
  let n = 0,
    s,
    i;
  for (; n < a.length; ) {
    Ki.lastIndex = n;
    const o = Ki.exec(a),
      u = a.slice(n, o ? o.index : a.length);
    u &&
      (s
        ? s === "#"
          ? (r.id = u)
          : Array.isArray(r.className)
            ? r.className.push(u)
            : (r.className = [u])
        : (i = u),
      (n += u.length)),
      o && ((s = o[0]), n++);
  }
  return {
    type: "element",
    tagName: i || t || "div",
    properties: r,
    children: [],
  };
}
const HM = new Set(["button", "menu", "reset", "submit"]),
  Wr = {}.hasOwnProperty;
function dc(e, t, a) {
  const r = a && YM(a);
  function n(s, i, ...o) {
    let u = -1,
      l;
    if (s == null) {
      l = {
        type: "root",
        children: [],
      };
      const p = i;
      o.unshift(p);
    } else if (
      ((l = MM(s, t)),
      (l.tagName = l.tagName.toLowerCase()),
      r && Wr.call(r, l.tagName) && (l.tagName = r[l.tagName]),
      UM(i, l.tagName))
    ) {
      let p;
      for (p in i) Wr.call(i, p) && jM(e, l.properties, p, i[p]);
    } else o.unshift(i);
    for (; ++u < o.length; ) Gr(l.children, o[u]);
    return (
      l.type === "element" &&
        l.tagName === "template" &&
        ((l.content = {
          type: "root",
          children: l.children,
        }),
        (l.children = [])),
      l
    );
  }
  return n;
}
function UM(e, t) {
  return e == null || typeof e != "object" || Array.isArray(e)
    ? !1
    : t === "input" || !e.type || typeof e.type != "string"
      ? !0
      : "children" in e && Array.isArray(e.children)
        ? !1
        : t === "button"
          ? HM.has(e.type.toLowerCase())
          : !("value" in e);
}
function jM(e, t, a, r) {
  const n = en(e, a);
  let s = -1,
    i;
  if (r != null) {
    if (typeof r == "number") {
      if (Number.isNaN(r)) return;
      i = r;
    } else
      typeof r == "boolean"
        ? (i = r)
        : typeof r == "string"
          ? n.spaceSeparated
            ? (i = Vr(r))
            : n.commaSeparated
              ? (i = Xi(r))
              : n.commaOrSpaceSeparated
                ? (i = Vr(Xi(r).join(" ")))
                : (i = Ji(n, n.property, r))
          : Array.isArray(r)
            ? (i = r.concat())
            : (i = n.property === "style" ? qM(r) : String(r));
    if (Array.isArray(i)) {
      const o = [];
      for (; ++s < i.length; ) {
        const u = Ji(n, n.property, i[s]);
        o[s] = u;
      }
      i = o;
    }
    if (n.property === "className" && Array.isArray(t.className)) {
      const o = i;
      i = t.className.concat(o);
    }
    t[n.property] = i;
  }
}
function Gr(e, t) {
  let a = -1;
  if (t != null)
    if (typeof t == "string" || typeof t == "number")
      e.push({
        type: "text",
        value: String(t),
      });
    else if (Array.isArray(t)) for (; ++a < t.length; ) Gr(e, t[a]);
    else if (typeof t == "object" && "type" in t)
      t.type === "root" ? Gr(e, t.children) : e.push(t);
    else throw new Error("Expected node, nodes, or string, got `" + t + "`");
}
function Ji(e, t, a) {
  if (typeof a == "string") {
    if (e.number && a && !Number.isNaN(Number(a))) return Number(a);
    if ((e.boolean || e.overloadedBoolean) && (a === "" || vn(a) === vn(t)))
      return !0;
  }
  return a;
}
function qM(e) {
  const t = [];
  let a;
  for (a in e) Wr.call(e, a) && t.push([a, e[a]].join(": "));
  return t.join("; ");
}
function YM(e) {
  const t = {};
  let a = -1;
  for (; ++a < e.length; ) t[e[a].toLowerCase()] = e[a];
  return t;
}
const $M = [
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "solidColor",
    "textArea",
    "textPath",
  ],
  VM = dc(Wa, "div"),
  WM = dc(pa, "g", $M),
  Ar = /\r?\n|\r/g;
function GM(e) {
  const t = String(e),
    a = [];
  for (Ar.lastIndex = 0; Ar.test(t); ) a.push(Ar.lastIndex);
  return (
    a.push(t.length + 1),
    {
      toPoint: r,
      toOffset: n,
    }
  );
  function r(s) {
    let i = -1;
    if (typeof s == "number" && s > -1 && s < a[a.length - 1]) {
      for (; ++i < a.length; )
        if (a[i] > s)
          return {
            line: i + 1,
            column: s - (i > 0 ? a[i - 1] : 0) + 1,
            offset: s,
          };
    }
  }
  function n(s) {
    const i = s && s.line,
      o = s && s.column;
    if (
      typeof i == "number" &&
      typeof o == "number" &&
      !Number.isNaN(i) &&
      !Number.isNaN(o) &&
      i - 1 in a
    ) {
      const u = (a[i - 2] || 0) + o - 1 || 0;
      if (u > -1 && u < a[a.length - 1]) return u;
    }
  }
}
const Et = {
    html: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
  },
  pc = {}.hasOwnProperty,
  QM = Object.prototype;
function XM(e, t) {
  const a = t || {};
  return An(
    {
      file: a.file || void 0,
      location: !1,
      schema: a.space === "svg" ? pa : Wa,
      verbose: a.verbose || !1,
    },
    e,
  );
}
function An(e, t) {
  let a;
  switch (t.nodeName) {
    case "#comment": {
      const r = t;
      return (
        (a = {
          type: "comment",
          value: r.data,
        }),
        Sa(e, r, a),
        a
      );
    }
    case "#document":
    case "#document-fragment": {
      const r = t,
        n =
          "mode" in r ? r.mode === "quirks" || r.mode === "limited-quirks" : !1;
      if (
        ((a = {
          type: "root",
          children: _c(e, t.childNodes),
          data: {
            quirksMode: n,
          },
        }),
        e.file && e.location)
      ) {
        const s = String(e.file),
          i = GM(s),
          o = i.toPoint(0),
          u = i.toPoint(s.length);
        a.position = {
          start: o,
          end: u,
        };
      }
      return a;
    }
    case "#documentType": {
      const r = t;
      return (
        (a = {
          type: "doctype",
        }),
        Sa(e, r, a),
        a
      );
    }
    case "#text": {
      const r = t;
      return (
        (a = {
          type: "text",
          value: r.value,
        }),
        Sa(e, r, a),
        a
      );
    }
    default:
      return (a = KM(e, t)), a;
  }
}
function _c(e, t) {
  let a = -1;
  const r = [];
  for (; ++a < t.length; ) {
    const n = An(e, t[a]);
    r.push(n);
  }
  return r;
}
function KM(e, t) {
  const a = e.schema;
  e.schema = t.namespaceURI === Et.svg ? pa : Wa;
  let r = -1;
  const n = {};
  for (; ++r < t.attrs.length; ) {
    const o = t.attrs[r],
      u = (o.prefix ? o.prefix + ":" : "") + o.name;
    pc.call(QM, u) || (n[u] = o.value);
  }
  const i = (e.schema.space === "svg" ? WM : VM)(
    t.tagName,
    n,
    _c(e, t.childNodes),
  );
  if ((Sa(e, t, i), i.tagName === "template")) {
    const o = t,
      u = o.sourceCodeLocation,
      l = u && u.startTag && Pt(u.startTag),
      p = u && u.endTag && Pt(u.endTag),
      h = An(e, o.content);
    l &&
      p &&
      e.file &&
      (h.position = {
        start: l.end,
        end: p.start,
      }),
      (i.content = h);
  }
  return (e.schema = a), i;
}
function Sa(e, t, a) {
  if ("sourceCodeLocation" in t && t.sourceCodeLocation && e.file) {
    const r = JM(e, a, t.sourceCodeLocation);
    r && ((e.location = !0), (a.position = r));
  }
}
function JM(e, t, a) {
  const r = Pt(a);
  if (t.type === "element") {
    const n = t.children[t.children.length - 1];
    if (
      (r &&
        !a.endTag &&
        n &&
        n.position &&
        n.position.end &&
        (r.end = Object.assign({}, n.position.end)),
      e.verbose)
    ) {
      const s = {};
      let i;
      if (a.attrs)
        for (i in a.attrs)
          pc.call(a.attrs, i) && (s[en(e.schema, i).property] = Pt(a.attrs[i]));
      a.startTag;
      const o = Pt(a.startTag),
        u = a.endTag ? Pt(a.endTag) : void 0,
        l = {
          opening: o,
        };
      u && (l.closing = u),
        (l.properties = s),
        (t.data = {
          position: l,
        });
    }
  }
  return r;
}
function Pt(e) {
  const t = Zi({
      line: e.startLine,
      column: e.startCol,
      offset: e.startOffset,
    }),
    a = Zi({
      line: e.endLine,
      column: e.endCol,
      offset: e.endOffset,
    });
  return t || a
    ? {
        start: t,
        end: a,
      }
    : void 0;
}
function Zi(e) {
  return e.line && e.column ? e : void 0;
}
const ZM = {},
  e7 = {}.hasOwnProperty,
  mc = No("type", {
    handlers: {
      root: a7,
      element: o7,
      text: i7,
      comment: s7,
      doctype: n7,
    },
  });
function t7(e, t) {
  const r = (t || ZM).space;
  return mc(e, r === "svg" ? pa : Wa);
}
function a7(e, t) {
  const a = {
    nodeName: "#document",
    mode: (e.data || {}).quirksMode ? "quirks" : "no-quirks",
    childNodes: [],
  };
  return (a.childNodes = Cn(e.children, a, t)), Ut(e, a), a;
}
function r7(e, t) {
  const a = {
    nodeName: "#document-fragment",
    childNodes: [],
  };
  return (a.childNodes = Cn(e.children, a, t)), Ut(e, a), a;
}
function n7(e) {
  const t = {
    nodeName: "#documentType",
    name: "html",
    publicId: "",
    systemId: "",
    parentNode: null,
  };
  return Ut(e, t), t;
}
function i7(e) {
  const t = {
    nodeName: "#text",
    value: e.value,
    parentNode: null,
  };
  return Ut(e, t), t;
}
function s7(e) {
  const t = {
    nodeName: "#comment",
    data: e.value,
    parentNode: null,
  };
  return Ut(e, t), t;
}
function o7(e, t) {
  const a = t;
  let r = a;
  e.type === "element" &&
    e.tagName.toLowerCase() === "svg" &&
    a.space === "html" &&
    (r = pa);
  const n = [];
  let s;
  if (e.properties) {
    for (s in e.properties)
      if (s !== "children" && e7.call(e.properties, s)) {
        const u = c7(r, s, e.properties[s]);
        u && n.push(u);
      }
  }
  const i = r.space,
    o = {
      nodeName: e.tagName,
      tagName: e.tagName,
      attrs: n,
      namespaceURI: Et[i],
      childNodes: [],
      parentNode: null,
    };
  return (
    (o.childNodes = Cn(e.children, o, r)),
    Ut(e, o),
    e.tagName === "template" && e.content && (o.content = r7(e.content, r)),
    o
  );
}
function c7(e, t, a) {
  const r = en(e, t);
  if (
    a === !1 ||
    a === null ||
    a === void 0 ||
    (typeof a == "number" && Number.isNaN(a)) ||
    (!a && r.boolean)
  )
    return;
  Array.isArray(a) && (a = r.commaSeparated ? PM(a) : NM(a));
  const n = {
    name: r.attribute,
    value: a === !0 ? "" : String(a),
  };
  if (r.space && r.space !== "html" && r.space !== "svg") {
    const s = n.name.indexOf(":");
    s < 0
      ? (n.prefix = "")
      : ((n.name = n.name.slice(s + 1)), (n.prefix = r.attribute.slice(0, s))),
      (n.namespace = Et[r.space]);
  }
  return n;
}
function Cn(e, t, a) {
  let r = -1;
  const n = [];
  if (e)
    for (; ++r < e.length; ) {
      const s = mc(e[r], a);
      (s.parentNode = t), n.push(s);
    }
  return n;
}
function Ut(e, t) {
  const a = e.position;
  a &&
    a.start &&
    a.end &&
    (a.start.offset,
    a.end.offset,
    (t.sourceCodeLocation = {
      startLine: a.start.line,
      startCol: a.start.column,
      startOffset: a.start.offset,
      endLine: a.end.line,
      endCol: a.end.column,
      endOffset: a.end.offset,
    }));
}
const u7 = [
    "area",
    "base",
    "basefont",
    "bgsound",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "image",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ],
  l7 = new Set([
    65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678,
    327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823,
    655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502,
    917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111,
  ]),
  ue = "�";
var m;
(function (e) {
  (e[(e.EOF = -1)] = "EOF"),
    (e[(e.NULL = 0)] = "NULL"),
    (e[(e.TABULATION = 9)] = "TABULATION"),
    (e[(e.CARRIAGE_RETURN = 13)] = "CARRIAGE_RETURN"),
    (e[(e.LINE_FEED = 10)] = "LINE_FEED"),
    (e[(e.FORM_FEED = 12)] = "FORM_FEED"),
    (e[(e.SPACE = 32)] = "SPACE"),
    (e[(e.EXCLAMATION_MARK = 33)] = "EXCLAMATION_MARK"),
    (e[(e.QUOTATION_MARK = 34)] = "QUOTATION_MARK"),
    (e[(e.NUMBER_SIGN = 35)] = "NUMBER_SIGN"),
    (e[(e.AMPERSAND = 38)] = "AMPERSAND"),
    (e[(e.APOSTROPHE = 39)] = "APOSTROPHE"),
    (e[(e.HYPHEN_MINUS = 45)] = "HYPHEN_MINUS"),
    (e[(e.SOLIDUS = 47)] = "SOLIDUS"),
    (e[(e.DIGIT_0 = 48)] = "DIGIT_0"),
    (e[(e.DIGIT_9 = 57)] = "DIGIT_9"),
    (e[(e.SEMICOLON = 59)] = "SEMICOLON"),
    (e[(e.LESS_THAN_SIGN = 60)] = "LESS_THAN_SIGN"),
    (e[(e.EQUALS_SIGN = 61)] = "EQUALS_SIGN"),
    (e[(e.GREATER_THAN_SIGN = 62)] = "GREATER_THAN_SIGN"),
    (e[(e.QUESTION_MARK = 63)] = "QUESTION_MARK"),
    (e[(e.LATIN_CAPITAL_A = 65)] = "LATIN_CAPITAL_A"),
    (e[(e.LATIN_CAPITAL_F = 70)] = "LATIN_CAPITAL_F"),
    (e[(e.LATIN_CAPITAL_X = 88)] = "LATIN_CAPITAL_X"),
    (e[(e.LATIN_CAPITAL_Z = 90)] = "LATIN_CAPITAL_Z"),
    (e[(e.RIGHT_SQUARE_BRACKET = 93)] = "RIGHT_SQUARE_BRACKET"),
    (e[(e.GRAVE_ACCENT = 96)] = "GRAVE_ACCENT"),
    (e[(e.LATIN_SMALL_A = 97)] = "LATIN_SMALL_A"),
    (e[(e.LATIN_SMALL_F = 102)] = "LATIN_SMALL_F"),
    (e[(e.LATIN_SMALL_X = 120)] = "LATIN_SMALL_X"),
    (e[(e.LATIN_SMALL_Z = 122)] = "LATIN_SMALL_Z"),
    (e[(e.REPLACEMENT_CHARACTER = 65533)] = "REPLACEMENT_CHARACTER");
})((m = m || (m = {})));
const Ae = {
  DASH_DASH: "--",
  CDATA_START: "[CDATA[",
  DOCTYPE: "doctype",
  SCRIPT: "script",
  PUBLIC: "public",
  SYSTEM: "system",
};
function gc(e) {
  return e >= 55296 && e <= 57343;
}
function f7(e) {
  return e >= 56320 && e <= 57343;
}
function h7(e, t) {
  return (e - 55296) * 1024 + 9216 + t;
}
function yc(e) {
  return (
    (e !== 32 &&
      e !== 10 &&
      e !== 13 &&
      e !== 9 &&
      e !== 12 &&
      e >= 1 &&
      e <= 31) ||
    (e >= 127 && e <= 159)
  );
}
function kc(e) {
  return (e >= 64976 && e <= 65007) || l7.has(e);
}
var F;
(function (e) {
  (e.controlCharacterInInputStream = "control-character-in-input-stream"),
    (e.noncharacterInInputStream = "noncharacter-in-input-stream"),
    (e.surrogateInInputStream = "surrogate-in-input-stream"),
    (e.nonVoidHtmlElementStartTagWithTrailingSolidus =
      "non-void-html-element-start-tag-with-trailing-solidus"),
    (e.endTagWithAttributes = "end-tag-with-attributes"),
    (e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus"),
    (e.unexpectedSolidusInTag = "unexpected-solidus-in-tag"),
    (e.unexpectedNullCharacter = "unexpected-null-character"),
    (e.unexpectedQuestionMarkInsteadOfTagName =
      "unexpected-question-mark-instead-of-tag-name"),
    (e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name"),
    (e.unexpectedEqualsSignBeforeAttributeName =
      "unexpected-equals-sign-before-attribute-name"),
    (e.missingEndTagName = "missing-end-tag-name"),
    (e.unexpectedCharacterInAttributeName =
      "unexpected-character-in-attribute-name"),
    (e.unknownNamedCharacterReference = "unknown-named-character-reference"),
    (e.missingSemicolonAfterCharacterReference =
      "missing-semicolon-after-character-reference"),
    (e.unexpectedCharacterAfterDoctypeSystemIdentifier =
      "unexpected-character-after-doctype-system-identifier"),
    (e.unexpectedCharacterInUnquotedAttributeValue =
      "unexpected-character-in-unquoted-attribute-value"),
    (e.eofBeforeTagName = "eof-before-tag-name"),
    (e.eofInTag = "eof-in-tag"),
    (e.missingAttributeValue = "missing-attribute-value"),
    (e.missingWhitespaceBetweenAttributes =
      "missing-whitespace-between-attributes"),
    (e.missingWhitespaceAfterDoctypePublicKeyword =
      "missing-whitespace-after-doctype-public-keyword"),
    (e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers =
      "missing-whitespace-between-doctype-public-and-system-identifiers"),
    (e.missingWhitespaceAfterDoctypeSystemKeyword =
      "missing-whitespace-after-doctype-system-keyword"),
    (e.missingQuoteBeforeDoctypePublicIdentifier =
      "missing-quote-before-doctype-public-identifier"),
    (e.missingQuoteBeforeDoctypeSystemIdentifier =
      "missing-quote-before-doctype-system-identifier"),
    (e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier"),
    (e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier"),
    (e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier"),
    (e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier"),
    (e.cdataInHtmlContent = "cdata-in-html-content"),
    (e.incorrectlyOpenedComment = "incorrectly-opened-comment"),
    (e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text"),
    (e.eofInDoctype = "eof-in-doctype"),
    (e.nestedComment = "nested-comment"),
    (e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment"),
    (e.eofInComment = "eof-in-comment"),
    (e.incorrectlyClosedComment = "incorrectly-closed-comment"),
    (e.eofInCdata = "eof-in-cdata"),
    (e.absenceOfDigitsInNumericCharacterReference =
      "absence-of-digits-in-numeric-character-reference"),
    (e.nullCharacterReference = "null-character-reference"),
    (e.surrogateCharacterReference = "surrogate-character-reference"),
    (e.characterReferenceOutsideUnicodeRange =
      "character-reference-outside-unicode-range"),
    (e.controlCharacterReference = "control-character-reference"),
    (e.noncharacterCharacterReference = "noncharacter-character-reference"),
    (e.missingWhitespaceBeforeDoctypeName =
      "missing-whitespace-before-doctype-name"),
    (e.missingDoctypeName = "missing-doctype-name"),
    (e.invalidCharacterSequenceAfterDoctypeName =
      "invalid-character-sequence-after-doctype-name"),
    (e.duplicateAttribute = "duplicate-attribute"),
    (e.nonConformingDoctype = "non-conforming-doctype"),
    (e.missingDoctype = "missing-doctype"),
    (e.misplacedDoctype = "misplaced-doctype"),
    (e.endTagWithoutMatchingOpenElement =
      "end-tag-without-matching-open-element"),
    (e.closingOfElementWithOpenChildElements =
      "closing-of-element-with-open-child-elements"),
    (e.disallowedContentInNoscriptInHead =
      "disallowed-content-in-noscript-in-head"),
    (e.openElementsLeftAfterEof = "open-elements-left-after-eof"),
    (e.abandonedHeadElementChild = "abandoned-head-element-child"),
    (e.misplacedStartTagForHeadElement =
      "misplaced-start-tag-for-head-element"),
    (e.nestedNoscriptInHead = "nested-noscript-in-head"),
    (e.eofInElementThatCanContainOnlyText =
      "eof-in-element-that-can-contain-only-text");
})((F = F || (F = {})));
const d7 = 65536;
class p7 {
  constructor(t) {
    (this.handler = t),
      (this.html = ""),
      (this.pos = -1),
      (this.lastGapPos = -2),
      (this.gapStack = []),
      (this.skipNextNewLine = !1),
      (this.lastChunkWritten = !1),
      (this.endOfChunkHit = !1),
      (this.bufferWaterline = d7),
      (this.isEol = !1),
      (this.lineStartPos = 0),
      (this.droppedBufferSize = 0),
      (this.line = 1),
      (this.lastErrOffset = -1);
  }
  get col() {
    return this.pos - this.lineStartPos + +(this.lastGapPos !== this.pos);
  }
  get offset() {
    return this.droppedBufferSize + this.pos;
  }
  getError(t) {
    const { line: a, col: r, offset: n } = this;
    return {
      code: t,
      startLine: a,
      endLine: a,
      startCol: r,
      endCol: r,
      startOffset: n,
      endOffset: n,
    };
  }
  _err(t) {
    this.handler.onParseError &&
      this.lastErrOffset !== this.offset &&
      ((this.lastErrOffset = this.offset),
      this.handler.onParseError(this.getError(t)));
  }
  _addGap() {
    this.gapStack.push(this.lastGapPos), (this.lastGapPos = this.pos);
  }
  _processSurrogate(t) {
    if (this.pos !== this.html.length - 1) {
      const a = this.html.charCodeAt(this.pos + 1);
      if (f7(a)) return this.pos++, this._addGap(), h7(t, a);
    } else if (!this.lastChunkWritten) return (this.endOfChunkHit = !0), m.EOF;
    return this._err(F.surrogateInInputStream), t;
  }
  willDropParsedChunk() {
    return this.pos > this.bufferWaterline;
  }
  dropParsedChunk() {
    this.willDropParsedChunk() &&
      ((this.html = this.html.substring(this.pos)),
      (this.lineStartPos -= this.pos),
      (this.droppedBufferSize += this.pos),
      (this.pos = 0),
      (this.lastGapPos = -2),
      (this.gapStack.length = 0));
  }
  write(t, a) {
    this.html.length > 0 ? (this.html += t) : (this.html = t),
      (this.endOfChunkHit = !1),
      (this.lastChunkWritten = a);
  }
  insertHtmlAtCurrentPos(t) {
    (this.html =
      this.html.substring(0, this.pos + 1) +
      t +
      this.html.substring(this.pos + 1)),
      (this.endOfChunkHit = !1);
  }
  startsWith(t, a) {
    if (this.pos + t.length > this.html.length)
      return (this.endOfChunkHit = !this.lastChunkWritten), !1;
    if (a) return this.html.startsWith(t, this.pos);
    for (let r = 0; r < t.length; r++)
      if ((this.html.charCodeAt(this.pos + r) | 32) !== t.charCodeAt(r))
        return !1;
    return !0;
  }
  peek(t) {
    const a = this.pos + t;
    if (a >= this.html.length)
      return (this.endOfChunkHit = !this.lastChunkWritten), m.EOF;
    const r = this.html.charCodeAt(a);
    return r === m.CARRIAGE_RETURN ? m.LINE_FEED : r;
  }
  advance() {
    if (
      (this.pos++,
      this.isEol &&
        ((this.isEol = !1), this.line++, (this.lineStartPos = this.pos)),
      this.pos >= this.html.length)
    )
      return (this.endOfChunkHit = !this.lastChunkWritten), m.EOF;
    let t = this.html.charCodeAt(this.pos);
    return t === m.CARRIAGE_RETURN
      ? ((this.isEol = !0), (this.skipNextNewLine = !0), m.LINE_FEED)
      : t === m.LINE_FEED && ((this.isEol = !0), this.skipNextNewLine)
        ? (this.line--,
          (this.skipNextNewLine = !1),
          this._addGap(),
          this.advance())
        : ((this.skipNextNewLine = !1),
          gc(t) && (t = this._processSurrogate(t)),
          this.handler.onParseError === null ||
            (t > 31 && t < 127) ||
            t === m.LINE_FEED ||
            t === m.CARRIAGE_RETURN ||
            (t > 159 && t < 64976) ||
            this._checkForProblematicCharacters(t),
          t);
  }
  _checkForProblematicCharacters(t) {
    yc(t)
      ? this._err(F.controlCharacterInInputStream)
      : kc(t) && this._err(F.noncharacterInInputStream);
  }
  retreat(t) {
    for (this.pos -= t; this.pos < this.lastGapPos; )
      (this.lastGapPos = this.gapStack.pop()), this.pos--;
    this.isEol = !1;
  }
}
var ee;
(function (e) {
  (e[(e.CHARACTER = 0)] = "CHARACTER"),
    (e[(e.NULL_CHARACTER = 1)] = "NULL_CHARACTER"),
    (e[(e.WHITESPACE_CHARACTER = 2)] = "WHITESPACE_CHARACTER"),
    (e[(e.START_TAG = 3)] = "START_TAG"),
    (e[(e.END_TAG = 4)] = "END_TAG"),
    (e[(e.COMMENT = 5)] = "COMMENT"),
    (e[(e.DOCTYPE = 6)] = "DOCTYPE"),
    (e[(e.EOF = 7)] = "EOF"),
    (e[(e.HIBERNATION = 8)] = "HIBERNATION");
})((ee = ee || (ee = {})));
function bc(e, t) {
  for (let a = e.attrs.length - 1; a >= 0; a--)
    if (e.attrs[a].name === t) return e.attrs[a].value;
  return null;
}
const st = new Uint16Array(
    'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'
      .split("")
      .map((e) => e.charCodeAt(0)),
  ),
  _7 = new Uint16Array(
    "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢"
      .split("")
      .map((e) => e.charCodeAt(0)),
  );
var Cr;
const m7 = new Map([
    [0, 65533],
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376],
  ]),
  g7 =
    (Cr = String.fromCodePoint) !== null && Cr !== void 0
      ? Cr
      : function (e) {
          let t = "";
          return (
            e > 65535 &&
              ((e -= 65536),
              (t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
              (e = 56320 | (e & 1023))),
            (t += String.fromCharCode(e)),
            t
          );
        };
function y7(e) {
  var t;
  return (e >= 55296 && e <= 57343) || e > 1114111
    ? 65533
    : (t = m7.get(e)) !== null && t !== void 0
      ? t
      : e;
}
var ge;
(function (e) {
  (e[(e.NUM = 35)] = "NUM"),
    (e[(e.SEMI = 59)] = "SEMI"),
    (e[(e.EQUALS = 61)] = "EQUALS"),
    (e[(e.ZERO = 48)] = "ZERO"),
    (e[(e.NINE = 57)] = "NINE"),
    (e[(e.LOWER_A = 97)] = "LOWER_A"),
    (e[(e.LOWER_F = 102)] = "LOWER_F"),
    (e[(e.LOWER_X = 120)] = "LOWER_X"),
    (e[(e.LOWER_Z = 122)] = "LOWER_Z"),
    (e[(e.UPPER_A = 65)] = "UPPER_A"),
    (e[(e.UPPER_F = 70)] = "UPPER_F"),
    (e[(e.UPPER_Z = 90)] = "UPPER_Z");
})(ge || (ge = {}));
const k7 = 32;
var We;
(function (e) {
  (e[(e.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
    (e[(e.BRANCH_LENGTH = 16256)] = "BRANCH_LENGTH"),
    (e[(e.JUMP_TABLE = 127)] = "JUMP_TABLE");
})(We || (We = {}));
function Qr(e) {
  return e >= ge.ZERO && e <= ge.NINE;
}
function b7(e) {
  return (
    (e >= ge.UPPER_A && e <= ge.UPPER_F) || (e >= ge.LOWER_A && e <= ge.LOWER_F)
  );
}
function w7(e) {
  return (
    (e >= ge.UPPER_A && e <= ge.UPPER_Z) ||
    (e >= ge.LOWER_A && e <= ge.LOWER_Z) ||
    Qr(e)
  );
}
function E7(e) {
  return e === ge.EQUALS || w7(e);
}
var _e;
(function (e) {
  (e[(e.EntityStart = 0)] = "EntityStart"),
    (e[(e.NumericStart = 1)] = "NumericStart"),
    (e[(e.NumericDecimal = 2)] = "NumericDecimal"),
    (e[(e.NumericHex = 3)] = "NumericHex"),
    (e[(e.NamedEntity = 4)] = "NamedEntity");
})(_e || (_e = {}));
var bt;
(function (e) {
  (e[(e.Legacy = 0)] = "Legacy"),
    (e[(e.Strict = 1)] = "Strict"),
    (e[(e.Attribute = 2)] = "Attribute");
})(bt || (bt = {}));
class T7 {
  constructor(t, a, r) {
    (this.decodeTree = t),
      (this.emitCodePoint = a),
      (this.errors = r),
      (this.state = _e.EntityStart),
      (this.consumed = 1),
      (this.result = 0),
      (this.treeIndex = 0),
      (this.excess = 1),
      (this.decodeMode = bt.Strict);
  }
  startEntity(t) {
    (this.decodeMode = t),
      (this.state = _e.EntityStart),
      (this.result = 0),
      (this.treeIndex = 0),
      (this.excess = 1),
      (this.consumed = 1);
  }
  write(t, a) {
    switch (this.state) {
      case _e.EntityStart:
        return t.charCodeAt(a) === ge.NUM
          ? ((this.state = _e.NumericStart),
            (this.consumed += 1),
            this.stateNumericStart(t, a + 1))
          : ((this.state = _e.NamedEntity), this.stateNamedEntity(t, a));
      case _e.NumericStart:
        return this.stateNumericStart(t, a);
      case _e.NumericDecimal:
        return this.stateNumericDecimal(t, a);
      case _e.NumericHex:
        return this.stateNumericHex(t, a);
      case _e.NamedEntity:
        return this.stateNamedEntity(t, a);
    }
  }
  stateNumericStart(t, a) {
    return a >= t.length
      ? -1
      : (t.charCodeAt(a) | k7) === ge.LOWER_X
        ? ((this.state = _e.NumericHex),
          (this.consumed += 1),
          this.stateNumericHex(t, a + 1))
        : ((this.state = _e.NumericDecimal), this.stateNumericDecimal(t, a));
  }
  addToNumericResult(t, a, r, n) {
    if (a !== r) {
      const s = r - a;
      (this.result =
        this.result * Math.pow(n, s) + parseInt(t.substr(a, s), n)),
        (this.consumed += s);
    }
  }
  stateNumericHex(t, a) {
    const r = a;
    for (; a < t.length; ) {
      const n = t.charCodeAt(a);
      if (Qr(n) || b7(n)) a += 1;
      else
        return (
          this.addToNumericResult(t, r, a, 16), this.emitNumericEntity(n, 3)
        );
    }
    return this.addToNumericResult(t, r, a, 16), -1;
  }
  stateNumericDecimal(t, a) {
    const r = a;
    for (; a < t.length; ) {
      const n = t.charCodeAt(a);
      if (Qr(n)) a += 1;
      else
        return (
          this.addToNumericResult(t, r, a, 10), this.emitNumericEntity(n, 2)
        );
    }
    return this.addToNumericResult(t, r, a, 10), -1;
  }
  emitNumericEntity(t, a) {
    var r;
    if (this.consumed <= a)
      return (
        (r = this.errors) === null ||
          r === void 0 ||
          r.absenceOfDigitsInNumericCharacterReference(this.consumed),
        0
      );
    if (t === ge.SEMI) this.consumed += 1;
    else if (this.decodeMode === bt.Strict) return 0;
    return (
      this.emitCodePoint(y7(this.result), this.consumed),
      this.errors &&
        (t !== ge.SEMI && this.errors.missingSemicolonAfterCharacterReference(),
        this.errors.validateNumericCharacterReference(this.result)),
      this.consumed
    );
  }
  stateNamedEntity(t, a) {
    const { decodeTree: r } = this;
    let n = r[this.treeIndex],
      s = (n & We.VALUE_LENGTH) >> 14;
    for (; a < t.length; a++, this.excess++) {
      const i = t.charCodeAt(a);
      if (
        ((this.treeIndex = Ec(r, n, this.treeIndex + Math.max(1, s), i)),
        this.treeIndex < 0)
      )
        return this.result === 0 ||
          (this.decodeMode === bt.Attribute && (s === 0 || E7(i)))
          ? 0
          : this.emitNotTerminatedNamedEntity();
      if (
        ((n = r[this.treeIndex]), (s = (n & We.VALUE_LENGTH) >> 14), s !== 0)
      ) {
        if (i === ge.SEMI)
          return this.emitNamedEntityData(
            this.treeIndex,
            s,
            this.consumed + this.excess,
          );
        this.decodeMode !== bt.Strict &&
          ((this.result = this.treeIndex),
          (this.consumed += this.excess),
          (this.excess = 0));
      }
    }
    return -1;
  }
  emitNotTerminatedNamedEntity() {
    var t;
    const { result: a, decodeTree: r } = this,
      n = (r[a] & We.VALUE_LENGTH) >> 14;
    return (
      this.emitNamedEntityData(a, n, this.consumed),
      (t = this.errors) === null ||
        t === void 0 ||
        t.missingSemicolonAfterCharacterReference(),
      this.consumed
    );
  }
  emitNamedEntityData(t, a, r) {
    const { decodeTree: n } = this;
    return (
      this.emitCodePoint(a === 1 ? n[t] & ~We.VALUE_LENGTH : n[t + 1], r),
      a === 3 && this.emitCodePoint(n[t + 2], r),
      r
    );
  }
  end() {
    var t;
    switch (this.state) {
      case _e.NamedEntity:
        return this.result !== 0 &&
          (this.decodeMode !== bt.Attribute || this.result === this.treeIndex)
          ? this.emitNotTerminatedNamedEntity()
          : 0;
      case _e.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case _e.NumericHex:
        return this.emitNumericEntity(0, 3);
      case _e.NumericStart:
        return (
          (t = this.errors) === null ||
            t === void 0 ||
            t.absenceOfDigitsInNumericCharacterReference(this.consumed),
          0
        );
      case _e.EntityStart:
        return 0;
    }
  }
}
function wc(e) {
  let t = "";
  const a = new T7(e, (r) => (t += g7(r)));
  return function (n, s) {
    let i = 0,
      o = 0;
    for (; (o = n.indexOf("&", o)) >= 0; ) {
      (t += n.slice(i, o)), a.startEntity(s);
      const l = a.write(n, o + 1);
      if (l < 0) {
        i = o + a.end();
        break;
      }
      (i = o + l), (o = l === 0 ? i + 1 : i);
    }
    const u = t + n.slice(i);
    return (t = ""), u;
  };
}
function Ec(e, t, a, r) {
  const n = (t & We.BRANCH_LENGTH) >> 7,
    s = t & We.JUMP_TABLE;
  if (n === 0) return s !== 0 && r === s ? a : -1;
  if (s) {
    const u = r - s;
    return u < 0 || u >= n ? -1 : e[a + u] - 1;
  }
  let i = a,
    o = i + n - 1;
  for (; i <= o; ) {
    const u = (i + o) >>> 1,
      l = e[u];
    if (l < r) i = u + 1;
    else if (l > r) o = u - 1;
    else return e[u + n];
  }
  return -1;
}
wc(st);
wc(_7);
var L;
(function (e) {
  (e.HTML = "http://www.w3.org/1999/xhtml"),
    (e.MATHML = "http://www.w3.org/1998/Math/MathML"),
    (e.SVG = "http://www.w3.org/2000/svg"),
    (e.XLINK = "http://www.w3.org/1999/xlink"),
    (e.XML = "http://www.w3.org/XML/1998/namespace"),
    (e.XMLNS = "http://www.w3.org/2000/xmlns/");
})((L = L || (L = {})));
var lt;
(function (e) {
  (e.TYPE = "type"),
    (e.ACTION = "action"),
    (e.ENCODING = "encoding"),
    (e.PROMPT = "prompt"),
    (e.NAME = "name"),
    (e.COLOR = "color"),
    (e.FACE = "face"),
    (e.SIZE = "size");
})((lt = lt || (lt = {})));
var Ie;
(function (e) {
  (e.NO_QUIRKS = "no-quirks"),
    (e.QUIRKS = "quirks"),
    (e.LIMITED_QUIRKS = "limited-quirks");
})((Ie = Ie || (Ie = {})));
var x;
(function (e) {
  (e.A = "a"),
    (e.ADDRESS = "address"),
    (e.ANNOTATION_XML = "annotation-xml"),
    (e.APPLET = "applet"),
    (e.AREA = "area"),
    (e.ARTICLE = "article"),
    (e.ASIDE = "aside"),
    (e.B = "b"),
    (e.BASE = "base"),
    (e.BASEFONT = "basefont"),
    (e.BGSOUND = "bgsound"),
    (e.BIG = "big"),
    (e.BLOCKQUOTE = "blockquote"),
    (e.BODY = "body"),
    (e.BR = "br"),
    (e.BUTTON = "button"),
    (e.CAPTION = "caption"),
    (e.CENTER = "center"),
    (e.CODE = "code"),
    (e.COL = "col"),
    (e.COLGROUP = "colgroup"),
    (e.DD = "dd"),
    (e.DESC = "desc"),
    (e.DETAILS = "details"),
    (e.DIALOG = "dialog"),
    (e.DIR = "dir"),
    (e.DIV = "div"),
    (e.DL = "dl"),
    (e.DT = "dt"),
    (e.EM = "em"),
    (e.EMBED = "embed"),
    (e.FIELDSET = "fieldset"),
    (e.FIGCAPTION = "figcaption"),
    (e.FIGURE = "figure"),
    (e.FONT = "font"),
    (e.FOOTER = "footer"),
    (e.FOREIGN_OBJECT = "foreignObject"),
    (e.FORM = "form"),
    (e.FRAME = "frame"),
    (e.FRAMESET = "frameset"),
    (e.H1 = "h1"),
    (e.H2 = "h2"),
    (e.H3 = "h3"),
    (e.H4 = "h4"),
    (e.H5 = "h5"),
    (e.H6 = "h6"),
    (e.HEAD = "head"),
    (e.HEADER = "header"),
    (e.HGROUP = "hgroup"),
    (e.HR = "hr"),
    (e.HTML = "html"),
    (e.I = "i"),
    (e.IMG = "img"),
    (e.IMAGE = "image"),
    (e.INPUT = "input"),
    (e.IFRAME = "iframe"),
    (e.KEYGEN = "keygen"),
    (e.LABEL = "label"),
    (e.LI = "li"),
    (e.LINK = "link"),
    (e.LISTING = "listing"),
    (e.MAIN = "main"),
    (e.MALIGNMARK = "malignmark"),
    (e.MARQUEE = "marquee"),
    (e.MATH = "math"),
    (e.MENU = "menu"),
    (e.META = "meta"),
    (e.MGLYPH = "mglyph"),
    (e.MI = "mi"),
    (e.MO = "mo"),
    (e.MN = "mn"),
    (e.MS = "ms"),
    (e.MTEXT = "mtext"),
    (e.NAV = "nav"),
    (e.NOBR = "nobr"),
    (e.NOFRAMES = "noframes"),
    (e.NOEMBED = "noembed"),
    (e.NOSCRIPT = "noscript"),
    (e.OBJECT = "object"),
    (e.OL = "ol"),
    (e.OPTGROUP = "optgroup"),
    (e.OPTION = "option"),
    (e.P = "p"),
    (e.PARAM = "param"),
    (e.PLAINTEXT = "plaintext"),
    (e.PRE = "pre"),
    (e.RB = "rb"),
    (e.RP = "rp"),
    (e.RT = "rt"),
    (e.RTC = "rtc"),
    (e.RUBY = "ruby"),
    (e.S = "s"),
    (e.SCRIPT = "script"),
    (e.SECTION = "section"),
    (e.SELECT = "select"),
    (e.SOURCE = "source"),
    (e.SMALL = "small"),
    (e.SPAN = "span"),
    (e.STRIKE = "strike"),
    (e.STRONG = "strong"),
    (e.STYLE = "style"),
    (e.SUB = "sub"),
    (e.SUMMARY = "summary"),
    (e.SUP = "sup"),
    (e.TABLE = "table"),
    (e.TBODY = "tbody"),
    (e.TEMPLATE = "template"),
    (e.TEXTAREA = "textarea"),
    (e.TFOOT = "tfoot"),
    (e.TD = "td"),
    (e.TH = "th"),
    (e.THEAD = "thead"),
    (e.TITLE = "title"),
    (e.TR = "tr"),
    (e.TRACK = "track"),
    (e.TT = "tt"),
    (e.U = "u"),
    (e.UL = "ul"),
    (e.SVG = "svg"),
    (e.VAR = "var"),
    (e.WBR = "wbr"),
    (e.XMP = "xmp");
})((x = x || (x = {})));
var c;
(function (e) {
  (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
    (e[(e.A = 1)] = "A"),
    (e[(e.ADDRESS = 2)] = "ADDRESS"),
    (e[(e.ANNOTATION_XML = 3)] = "ANNOTATION_XML"),
    (e[(e.APPLET = 4)] = "APPLET"),
    (e[(e.AREA = 5)] = "AREA"),
    (e[(e.ARTICLE = 6)] = "ARTICLE"),
    (e[(e.ASIDE = 7)] = "ASIDE"),
    (e[(e.B = 8)] = "B"),
    (e[(e.BASE = 9)] = "BASE"),
    (e[(e.BASEFONT = 10)] = "BASEFONT"),
    (e[(e.BGSOUND = 11)] = "BGSOUND"),
    (e[(e.BIG = 12)] = "BIG"),
    (e[(e.BLOCKQUOTE = 13)] = "BLOCKQUOTE"),
    (e[(e.BODY = 14)] = "BODY"),
    (e[(e.BR = 15)] = "BR"),
    (e[(e.BUTTON = 16)] = "BUTTON"),
    (e[(e.CAPTION = 17)] = "CAPTION"),
    (e[(e.CENTER = 18)] = "CENTER"),
    (e[(e.CODE = 19)] = "CODE"),
    (e[(e.COL = 20)] = "COL"),
    (e[(e.COLGROUP = 21)] = "COLGROUP"),
    (e[(e.DD = 22)] = "DD"),
    (e[(e.DESC = 23)] = "DESC"),
    (e[(e.DETAILS = 24)] = "DETAILS"),
    (e[(e.DIALOG = 25)] = "DIALOG"),
    (e[(e.DIR = 26)] = "DIR"),
    (e[(e.DIV = 27)] = "DIV"),
    (e[(e.DL = 28)] = "DL"),
    (e[(e.DT = 29)] = "DT"),
    (e[(e.EM = 30)] = "EM"),
    (e[(e.EMBED = 31)] = "EMBED"),
    (e[(e.FIELDSET = 32)] = "FIELDSET"),
    (e[(e.FIGCAPTION = 33)] = "FIGCAPTION"),
    (e[(e.FIGURE = 34)] = "FIGURE"),
    (e[(e.FONT = 35)] = "FONT"),
    (e[(e.FOOTER = 36)] = "FOOTER"),
    (e[(e.FOREIGN_OBJECT = 37)] = "FOREIGN_OBJECT"),
    (e[(e.FORM = 38)] = "FORM"),
    (e[(e.FRAME = 39)] = "FRAME"),
    (e[(e.FRAMESET = 40)] = "FRAMESET"),
    (e[(e.H1 = 41)] = "H1"),
    (e[(e.H2 = 42)] = "H2"),
    (e[(e.H3 = 43)] = "H3"),
    (e[(e.H4 = 44)] = "H4"),
    (e[(e.H5 = 45)] = "H5"),
    (e[(e.H6 = 46)] = "H6"),
    (e[(e.HEAD = 47)] = "HEAD"),
    (e[(e.HEADER = 48)] = "HEADER"),
    (e[(e.HGROUP = 49)] = "HGROUP"),
    (e[(e.HR = 50)] = "HR"),
    (e[(e.HTML = 51)] = "HTML"),
    (e[(e.I = 52)] = "I"),
    (e[(e.IMG = 53)] = "IMG"),
    (e[(e.IMAGE = 54)] = "IMAGE"),
    (e[(e.INPUT = 55)] = "INPUT"),
    (e[(e.IFRAME = 56)] = "IFRAME"),
    (e[(e.KEYGEN = 57)] = "KEYGEN"),
    (e[(e.LABEL = 58)] = "LABEL"),
    (e[(e.LI = 59)] = "LI"),
    (e[(e.LINK = 60)] = "LINK"),
    (e[(e.LISTING = 61)] = "LISTING"),
    (e[(e.MAIN = 62)] = "MAIN"),
    (e[(e.MALIGNMARK = 63)] = "MALIGNMARK"),
    (e[(e.MARQUEE = 64)] = "MARQUEE"),
    (e[(e.MATH = 65)] = "MATH"),
    (e[(e.MENU = 66)] = "MENU"),
    (e[(e.META = 67)] = "META"),
    (e[(e.MGLYPH = 68)] = "MGLYPH"),
    (e[(e.MI = 69)] = "MI"),
    (e[(e.MO = 70)] = "MO"),
    (e[(e.MN = 71)] = "MN"),
    (e[(e.MS = 72)] = "MS"),
    (e[(e.MTEXT = 73)] = "MTEXT"),
    (e[(e.NAV = 74)] = "NAV"),
    (e[(e.NOBR = 75)] = "NOBR"),
    (e[(e.NOFRAMES = 76)] = "NOFRAMES"),
    (e[(e.NOEMBED = 77)] = "NOEMBED"),
    (e[(e.NOSCRIPT = 78)] = "NOSCRIPT"),
    (e[(e.OBJECT = 79)] = "OBJECT"),
    (e[(e.OL = 80)] = "OL"),
    (e[(e.OPTGROUP = 81)] = "OPTGROUP"),
    (e[(e.OPTION = 82)] = "OPTION"),
    (e[(e.P = 83)] = "P"),
    (e[(e.PARAM = 84)] = "PARAM"),
    (e[(e.PLAINTEXT = 85)] = "PLAINTEXT"),
    (e[(e.PRE = 86)] = "PRE"),
    (e[(e.RB = 87)] = "RB"),
    (e[(e.RP = 88)] = "RP"),
    (e[(e.RT = 89)] = "RT"),
    (e[(e.RTC = 90)] = "RTC"),
    (e[(e.RUBY = 91)] = "RUBY"),
    (e[(e.S = 92)] = "S"),
    (e[(e.SCRIPT = 93)] = "SCRIPT"),
    (e[(e.SECTION = 94)] = "SECTION"),
    (e[(e.SELECT = 95)] = "SELECT"),
    (e[(e.SOURCE = 96)] = "SOURCE"),
    (e[(e.SMALL = 97)] = "SMALL"),
    (e[(e.SPAN = 98)] = "SPAN"),
    (e[(e.STRIKE = 99)] = "STRIKE"),
    (e[(e.STRONG = 100)] = "STRONG"),
    (e[(e.STYLE = 101)] = "STYLE"),
    (e[(e.SUB = 102)] = "SUB"),
    (e[(e.SUMMARY = 103)] = "SUMMARY"),
    (e[(e.SUP = 104)] = "SUP"),
    (e[(e.TABLE = 105)] = "TABLE"),
    (e[(e.TBODY = 106)] = "TBODY"),
    (e[(e.TEMPLATE = 107)] = "TEMPLATE"),
    (e[(e.TEXTAREA = 108)] = "TEXTAREA"),
    (e[(e.TFOOT = 109)] = "TFOOT"),
    (e[(e.TD = 110)] = "TD"),
    (e[(e.TH = 111)] = "TH"),
    (e[(e.THEAD = 112)] = "THEAD"),
    (e[(e.TITLE = 113)] = "TITLE"),
    (e[(e.TR = 114)] = "TR"),
    (e[(e.TRACK = 115)] = "TRACK"),
    (e[(e.TT = 116)] = "TT"),
    (e[(e.U = 117)] = "U"),
    (e[(e.UL = 118)] = "UL"),
    (e[(e.SVG = 119)] = "SVG"),
    (e[(e.VAR = 120)] = "VAR"),
    (e[(e.WBR = 121)] = "WBR"),
    (e[(e.XMP = 122)] = "XMP");
})((c = c || (c = {})));
const A7 = new Map([
  [x.A, c.A],
  [x.ADDRESS, c.ADDRESS],
  [x.ANNOTATION_XML, c.ANNOTATION_XML],
  [x.APPLET, c.APPLET],
  [x.AREA, c.AREA],
  [x.ARTICLE, c.ARTICLE],
  [x.ASIDE, c.ASIDE],
  [x.B, c.B],
  [x.BASE, c.BASE],
  [x.BASEFONT, c.BASEFONT],
  [x.BGSOUND, c.BGSOUND],
  [x.BIG, c.BIG],
  [x.BLOCKQUOTE, c.BLOCKQUOTE],
  [x.BODY, c.BODY],
  [x.BR, c.BR],
  [x.BUTTON, c.BUTTON],
  [x.CAPTION, c.CAPTION],
  [x.CENTER, c.CENTER],
  [x.CODE, c.CODE],
  [x.COL, c.COL],
  [x.COLGROUP, c.COLGROUP],
  [x.DD, c.DD],
  [x.DESC, c.DESC],
  [x.DETAILS, c.DETAILS],
  [x.DIALOG, c.DIALOG],
  [x.DIR, c.DIR],
  [x.DIV, c.DIV],
  [x.DL, c.DL],
  [x.DT, c.DT],
  [x.EM, c.EM],
  [x.EMBED, c.EMBED],
  [x.FIELDSET, c.FIELDSET],
  [x.FIGCAPTION, c.FIGCAPTION],
  [x.FIGURE, c.FIGURE],
  [x.FONT, c.FONT],
  [x.FOOTER, c.FOOTER],
  [x.FOREIGN_OBJECT, c.FOREIGN_OBJECT],
  [x.FORM, c.FORM],
  [x.FRAME, c.FRAME],
  [x.FRAMESET, c.FRAMESET],
  [x.H1, c.H1],
  [x.H2, c.H2],
  [x.H3, c.H3],
  [x.H4, c.H4],
  [x.H5, c.H5],
  [x.H6, c.H6],
  [x.HEAD, c.HEAD],
  [x.HEADER, c.HEADER],
  [x.HGROUP, c.HGROUP],
  [x.HR, c.HR],
  [x.HTML, c.HTML],
  [x.I, c.I],
  [x.IMG, c.IMG],
  [x.IMAGE, c.IMAGE],
  [x.INPUT, c.INPUT],
  [x.IFRAME, c.IFRAME],
  [x.KEYGEN, c.KEYGEN],
  [x.LABEL, c.LABEL],
  [x.LI, c.LI],
  [x.LINK, c.LINK],
  [x.LISTING, c.LISTING],
  [x.MAIN, c.MAIN],
  [x.MALIGNMARK, c.MALIGNMARK],
  [x.MARQUEE, c.MARQUEE],
  [x.MATH, c.MATH],
  [x.MENU, c.MENU],
  [x.META, c.META],
  [x.MGLYPH, c.MGLYPH],
  [x.MI, c.MI],
  [x.MO, c.MO],
  [x.MN, c.MN],
  [x.MS, c.MS],
  [x.MTEXT, c.MTEXT],
  [x.NAV, c.NAV],
  [x.NOBR, c.NOBR],
  [x.NOFRAMES, c.NOFRAMES],
  [x.NOEMBED, c.NOEMBED],
  [x.NOSCRIPT, c.NOSCRIPT],
  [x.OBJECT, c.OBJECT],
  [x.OL, c.OL],
  [x.OPTGROUP, c.OPTGROUP],
  [x.OPTION, c.OPTION],
  [x.P, c.P],
  [x.PARAM, c.PARAM],
  [x.PLAINTEXT, c.PLAINTEXT],
  [x.PRE, c.PRE],
  [x.RB, c.RB],
  [x.RP, c.RP],
  [x.RT, c.RT],
  [x.RTC, c.RTC],
  [x.RUBY, c.RUBY],
  [x.S, c.S],
  [x.SCRIPT, c.SCRIPT],
  [x.SECTION, c.SECTION],
  [x.SELECT, c.SELECT],
  [x.SOURCE, c.SOURCE],
  [x.SMALL, c.SMALL],
  [x.SPAN, c.SPAN],
  [x.STRIKE, c.STRIKE],
  [x.STRONG, c.STRONG],
  [x.STYLE, c.STYLE],
  [x.SUB, c.SUB],
  [x.SUMMARY, c.SUMMARY],
  [x.SUP, c.SUP],
  [x.TABLE, c.TABLE],
  [x.TBODY, c.TBODY],
  [x.TEMPLATE, c.TEMPLATE],
  [x.TEXTAREA, c.TEXTAREA],
  [x.TFOOT, c.TFOOT],
  [x.TD, c.TD],
  [x.TH, c.TH],
  [x.THEAD, c.THEAD],
  [x.TITLE, c.TITLE],
  [x.TR, c.TR],
  [x.TRACK, c.TRACK],
  [x.TT, c.TT],
  [x.U, c.U],
  [x.UL, c.UL],
  [x.SVG, c.SVG],
  [x.VAR, c.VAR],
  [x.WBR, c.WBR],
  [x.XMP, c.XMP],
]);
function jt(e) {
  var t;
  return (t = A7.get(e)) !== null && t !== void 0 ? t : c.UNKNOWN;
}
const H = c,
  C7 = {
    [L.HTML]: new Set([
      H.ADDRESS,
      H.APPLET,
      H.AREA,
      H.ARTICLE,
      H.ASIDE,
      H.BASE,
      H.BASEFONT,
      H.BGSOUND,
      H.BLOCKQUOTE,
      H.BODY,
      H.BR,
      H.BUTTON,
      H.CAPTION,
      H.CENTER,
      H.COL,
      H.COLGROUP,
      H.DD,
      H.DETAILS,
      H.DIR,
      H.DIV,
      H.DL,
      H.DT,
      H.EMBED,
      H.FIELDSET,
      H.FIGCAPTION,
      H.FIGURE,
      H.FOOTER,
      H.FORM,
      H.FRAME,
      H.FRAMESET,
      H.H1,
      H.H2,
      H.H3,
      H.H4,
      H.H5,
      H.H6,
      H.HEAD,
      H.HEADER,
      H.HGROUP,
      H.HR,
      H.HTML,
      H.IFRAME,
      H.IMG,
      H.INPUT,
      H.LI,
      H.LINK,
      H.LISTING,
      H.MAIN,
      H.MARQUEE,
      H.MENU,
      H.META,
      H.NAV,
      H.NOEMBED,
      H.NOFRAMES,
      H.NOSCRIPT,
      H.OBJECT,
      H.OL,
      H.P,
      H.PARAM,
      H.PLAINTEXT,
      H.PRE,
      H.SCRIPT,
      H.SECTION,
      H.SELECT,
      H.SOURCE,
      H.STYLE,
      H.SUMMARY,
      H.TABLE,
      H.TBODY,
      H.TD,
      H.TEMPLATE,
      H.TEXTAREA,
      H.TFOOT,
      H.TH,
      H.THEAD,
      H.TITLE,
      H.TR,
      H.TRACK,
      H.UL,
      H.WBR,
      H.XMP,
    ]),
    [L.MATHML]: new Set([H.MI, H.MO, H.MN, H.MS, H.MTEXT, H.ANNOTATION_XML]),
    [L.SVG]: new Set([H.TITLE, H.FOREIGN_OBJECT, H.DESC]),
    [L.XLINK]: new Set(),
    [L.XML]: new Set(),
    [L.XMLNS]: new Set(),
  };
function Tc(e) {
  return (
    e === H.H1 ||
    e === H.H2 ||
    e === H.H3 ||
    e === H.H4 ||
    e === H.H5 ||
    e === H.H6
  );
}
x.STYLE, x.SCRIPT, x.XMP, x.IFRAME, x.NOEMBED, x.NOFRAMES, x.PLAINTEXT;
const x7 = new Map([
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376],
]);
var g;
(function (e) {
  (e[(e.DATA = 0)] = "DATA"),
    (e[(e.RCDATA = 1)] = "RCDATA"),
    (e[(e.RAWTEXT = 2)] = "RAWTEXT"),
    (e[(e.SCRIPT_DATA = 3)] = "SCRIPT_DATA"),
    (e[(e.PLAINTEXT = 4)] = "PLAINTEXT"),
    (e[(e.TAG_OPEN = 5)] = "TAG_OPEN"),
    (e[(e.END_TAG_OPEN = 6)] = "END_TAG_OPEN"),
    (e[(e.TAG_NAME = 7)] = "TAG_NAME"),
    (e[(e.RCDATA_LESS_THAN_SIGN = 8)] = "RCDATA_LESS_THAN_SIGN"),
    (e[(e.RCDATA_END_TAG_OPEN = 9)] = "RCDATA_END_TAG_OPEN"),
    (e[(e.RCDATA_END_TAG_NAME = 10)] = "RCDATA_END_TAG_NAME"),
    (e[(e.RAWTEXT_LESS_THAN_SIGN = 11)] = "RAWTEXT_LESS_THAN_SIGN"),
    (e[(e.RAWTEXT_END_TAG_OPEN = 12)] = "RAWTEXT_END_TAG_OPEN"),
    (e[(e.RAWTEXT_END_TAG_NAME = 13)] = "RAWTEXT_END_TAG_NAME"),
    (e[(e.SCRIPT_DATA_LESS_THAN_SIGN = 14)] = "SCRIPT_DATA_LESS_THAN_SIGN"),
    (e[(e.SCRIPT_DATA_END_TAG_OPEN = 15)] = "SCRIPT_DATA_END_TAG_OPEN"),
    (e[(e.SCRIPT_DATA_END_TAG_NAME = 16)] = "SCRIPT_DATA_END_TAG_NAME"),
    (e[(e.SCRIPT_DATA_ESCAPE_START = 17)] = "SCRIPT_DATA_ESCAPE_START"),
    (e[(e.SCRIPT_DATA_ESCAPE_START_DASH = 18)] =
      "SCRIPT_DATA_ESCAPE_START_DASH"),
    (e[(e.SCRIPT_DATA_ESCAPED = 19)] = "SCRIPT_DATA_ESCAPED"),
    (e[(e.SCRIPT_DATA_ESCAPED_DASH = 20)] = "SCRIPT_DATA_ESCAPED_DASH"),
    (e[(e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21)] =
      "SCRIPT_DATA_ESCAPED_DASH_DASH"),
    (e[(e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22)] =
      "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"),
    (e[(e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23)] =
      "SCRIPT_DATA_ESCAPED_END_TAG_OPEN"),
    (e[(e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24)] =
      "SCRIPT_DATA_ESCAPED_END_TAG_NAME"),
    (e[(e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25)] =
      "SCRIPT_DATA_DOUBLE_ESCAPE_START"),
    (e[(e.SCRIPT_DATA_DOUBLE_ESCAPED = 26)] = "SCRIPT_DATA_DOUBLE_ESCAPED"),
    (e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27)] =
      "SCRIPT_DATA_DOUBLE_ESCAPED_DASH"),
    (e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28)] =
      "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"),
    (e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29)] =
      "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"),
    (e[(e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30)] =
      "SCRIPT_DATA_DOUBLE_ESCAPE_END"),
    (e[(e.BEFORE_ATTRIBUTE_NAME = 31)] = "BEFORE_ATTRIBUTE_NAME"),
    (e[(e.ATTRIBUTE_NAME = 32)] = "ATTRIBUTE_NAME"),
    (e[(e.AFTER_ATTRIBUTE_NAME = 33)] = "AFTER_ATTRIBUTE_NAME"),
    (e[(e.BEFORE_ATTRIBUTE_VALUE = 34)] = "BEFORE_ATTRIBUTE_VALUE"),
    (e[(e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35)] =
      "ATTRIBUTE_VALUE_DOUBLE_QUOTED"),
    (e[(e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36)] =
      "ATTRIBUTE_VALUE_SINGLE_QUOTED"),
    (e[(e.ATTRIBUTE_VALUE_UNQUOTED = 37)] = "ATTRIBUTE_VALUE_UNQUOTED"),
    (e[(e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38)] = "AFTER_ATTRIBUTE_VALUE_QUOTED"),
    (e[(e.SELF_CLOSING_START_TAG = 39)] = "SELF_CLOSING_START_TAG"),
    (e[(e.BOGUS_COMMENT = 40)] = "BOGUS_COMMENT"),
    (e[(e.MARKUP_DECLARATION_OPEN = 41)] = "MARKUP_DECLARATION_OPEN"),
    (e[(e.COMMENT_START = 42)] = "COMMENT_START"),
    (e[(e.COMMENT_START_DASH = 43)] = "COMMENT_START_DASH"),
    (e[(e.COMMENT = 44)] = "COMMENT"),
    (e[(e.COMMENT_LESS_THAN_SIGN = 45)] = "COMMENT_LESS_THAN_SIGN"),
    (e[(e.COMMENT_LESS_THAN_SIGN_BANG = 46)] = "COMMENT_LESS_THAN_SIGN_BANG"),
    (e[(e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47)] =
      "COMMENT_LESS_THAN_SIGN_BANG_DASH"),
    (e[(e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48)] =
      "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"),
    (e[(e.COMMENT_END_DASH = 49)] = "COMMENT_END_DASH"),
    (e[(e.COMMENT_END = 50)] = "COMMENT_END"),
    (e[(e.COMMENT_END_BANG = 51)] = "COMMENT_END_BANG"),
    (e[(e.DOCTYPE = 52)] = "DOCTYPE"),
    (e[(e.BEFORE_DOCTYPE_NAME = 53)] = "BEFORE_DOCTYPE_NAME"),
    (e[(e.DOCTYPE_NAME = 54)] = "DOCTYPE_NAME"),
    (e[(e.AFTER_DOCTYPE_NAME = 55)] = "AFTER_DOCTYPE_NAME"),
    (e[(e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56)] = "AFTER_DOCTYPE_PUBLIC_KEYWORD"),
    (e[(e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57)] =
      "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"),
    (e[(e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58)] =
      "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"),
    (e[(e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59)] =
      "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"),
    (e[(e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60)] =
      "AFTER_DOCTYPE_PUBLIC_IDENTIFIER"),
    (e[(e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61)] =
      "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"),
    (e[(e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62)] = "AFTER_DOCTYPE_SYSTEM_KEYWORD"),
    (e[(e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63)] =
      "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"),
    (e[(e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64)] =
      "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"),
    (e[(e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65)] =
      "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"),
    (e[(e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66)] =
      "AFTER_DOCTYPE_SYSTEM_IDENTIFIER"),
    (e[(e.BOGUS_DOCTYPE = 67)] = "BOGUS_DOCTYPE"),
    (e[(e.CDATA_SECTION = 68)] = "CDATA_SECTION"),
    (e[(e.CDATA_SECTION_BRACKET = 69)] = "CDATA_SECTION_BRACKET"),
    (e[(e.CDATA_SECTION_END = 70)] = "CDATA_SECTION_END"),
    (e[(e.CHARACTER_REFERENCE = 71)] = "CHARACTER_REFERENCE"),
    (e[(e.NAMED_CHARACTER_REFERENCE = 72)] = "NAMED_CHARACTER_REFERENCE"),
    (e[(e.AMBIGUOUS_AMPERSAND = 73)] = "AMBIGUOUS_AMPERSAND"),
    (e[(e.NUMERIC_CHARACTER_REFERENCE = 74)] = "NUMERIC_CHARACTER_REFERENCE"),
    (e[(e.HEXADEMICAL_CHARACTER_REFERENCE_START = 75)] =
      "HEXADEMICAL_CHARACTER_REFERENCE_START"),
    (e[(e.HEXADEMICAL_CHARACTER_REFERENCE = 76)] =
      "HEXADEMICAL_CHARACTER_REFERENCE"),
    (e[(e.DECIMAL_CHARACTER_REFERENCE = 77)] = "DECIMAL_CHARACTER_REFERENCE"),
    (e[(e.NUMERIC_CHARACTER_REFERENCE_END = 78)] =
      "NUMERIC_CHARACTER_REFERENCE_END");
})(g || (g = {}));
const fe = {
  DATA: g.DATA,
  RCDATA: g.RCDATA,
  RAWTEXT: g.RAWTEXT,
  SCRIPT_DATA: g.SCRIPT_DATA,
  PLAINTEXT: g.PLAINTEXT,
  CDATA_SECTION: g.CDATA_SECTION,
};
function ea(e) {
  return e >= m.DIGIT_0 && e <= m.DIGIT_9;
}
function Jt(e) {
  return e >= m.LATIN_CAPITAL_A && e <= m.LATIN_CAPITAL_Z;
}
function D7(e) {
  return e >= m.LATIN_SMALL_A && e <= m.LATIN_SMALL_Z;
}
function ot(e) {
  return D7(e) || Jt(e);
}
function Xr(e) {
  return ot(e) || ea(e);
}
function Ac(e) {
  return e >= m.LATIN_CAPITAL_A && e <= m.LATIN_CAPITAL_F;
}
function Cc(e) {
  return e >= m.LATIN_SMALL_A && e <= m.LATIN_SMALL_F;
}
function z7(e) {
  return ea(e) || Ac(e) || Cc(e);
}
function Ca(e) {
  return e + 32;
}
function xc(e) {
  return (
    e === m.SPACE ||
    e === m.LINE_FEED ||
    e === m.TABULATION ||
    e === m.FORM_FEED
  );
}
function I7(e) {
  return e === m.EQUALS_SIGN || Xr(e);
}
function es(e) {
  return xc(e) || e === m.SOLIDUS || e === m.GREATER_THAN_SIGN;
}
class S7 {
  constructor(t, a) {
    (this.options = t),
      (this.handler = a),
      (this.paused = !1),
      (this.inLoop = !1),
      (this.inForeignNode = !1),
      (this.lastStartTagName = ""),
      (this.active = !1),
      (this.state = g.DATA),
      (this.returnState = g.DATA),
      (this.charRefCode = -1),
      (this.consumedAfterSnapshot = -1),
      (this.currentCharacterToken = null),
      (this.currentToken = null),
      (this.currentAttr = {
        name: "",
        value: "",
      }),
      (this.preprocessor = new p7(a)),
      (this.currentLocation = this.getCurrentLocation(-1));
  }
  _err(t) {
    var a, r;
    (r = (a = this.handler).onParseError) === null ||
      r === void 0 ||
      r.call(a, this.preprocessor.getError(t));
  }
  getCurrentLocation(t) {
    return this.options.sourceCodeLocationInfo
      ? {
          startLine: this.preprocessor.line,
          startCol: this.preprocessor.col - t,
          startOffset: this.preprocessor.offset - t,
          endLine: -1,
          endCol: -1,
          endOffset: -1,
        }
      : null;
  }
  _runParsingLoop() {
    if (!this.inLoop) {
      for (this.inLoop = !0; this.active && !this.paused; ) {
        this.consumedAfterSnapshot = 0;
        const t = this._consume();
        this._ensureHibernation() || this._callState(t);
      }
      this.inLoop = !1;
    }
  }
  pause() {
    this.paused = !0;
  }
  resume(t) {
    if (!this.paused) throw new Error("Parser was already resumed");
    (this.paused = !1),
      !this.inLoop && (this._runParsingLoop(), this.paused || t == null || t());
  }
  write(t, a, r) {
    (this.active = !0),
      this.preprocessor.write(t, a),
      this._runParsingLoop(),
      this.paused || r == null || r();
  }
  insertHtmlAtCurrentPos(t) {
    (this.active = !0),
      this.preprocessor.insertHtmlAtCurrentPos(t),
      this._runParsingLoop();
  }
  _ensureHibernation() {
    return this.preprocessor.endOfChunkHit
      ? (this._unconsume(this.consumedAfterSnapshot), (this.active = !1), !0)
      : !1;
  }
  _consume() {
    return this.consumedAfterSnapshot++, this.preprocessor.advance();
  }
  _unconsume(t) {
    (this.consumedAfterSnapshot -= t), this.preprocessor.retreat(t);
  }
  _reconsumeInState(t, a) {
    (this.state = t), this._callState(a);
  }
  _advanceBy(t) {
    this.consumedAfterSnapshot += t;
    for (let a = 0; a < t; a++) this.preprocessor.advance();
  }
  _consumeSequenceIfMatch(t, a) {
    return this.preprocessor.startsWith(t, a)
      ? (this._advanceBy(t.length - 1), !0)
      : !1;
  }
  _createStartTagToken() {
    this.currentToken = {
      type: ee.START_TAG,
      tagName: "",
      tagID: c.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(1),
    };
  }
  _createEndTagToken() {
    this.currentToken = {
      type: ee.END_TAG,
      tagName: "",
      tagID: c.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(2),
    };
  }
  _createCommentToken(t) {
    this.currentToken = {
      type: ee.COMMENT,
      data: "",
      location: this.getCurrentLocation(t),
    };
  }
  _createDoctypeToken(t) {
    this.currentToken = {
      type: ee.DOCTYPE,
      name: t,
      forceQuirks: !1,
      publicId: null,
      systemId: null,
      location: this.currentLocation,
    };
  }
  _createCharacterToken(t, a) {
    this.currentCharacterToken = {
      type: t,
      chars: a,
      location: this.currentLocation,
    };
  }
  _createAttr(t) {
    (this.currentAttr = {
      name: t,
      value: "",
    }),
      (this.currentLocation = this.getCurrentLocation(0));
  }
  _leaveAttrName() {
    var t, a;
    const r = this.currentToken;
    if (bc(r, this.currentAttr.name) === null) {
      if (
        (r.attrs.push(this.currentAttr), r.location && this.currentLocation)
      ) {
        const n =
          (t = (a = r.location).attrs) !== null && t !== void 0
            ? t
            : (a.attrs = Object.create(null));
        (n[this.currentAttr.name] = this.currentLocation),
          this._leaveAttrValue();
      }
    } else this._err(F.duplicateAttribute);
  }
  _leaveAttrValue() {
    this.currentLocation &&
      ((this.currentLocation.endLine = this.preprocessor.line),
      (this.currentLocation.endCol = this.preprocessor.col),
      (this.currentLocation.endOffset = this.preprocessor.offset));
  }
  prepareToken(t) {
    this._emitCurrentCharacterToken(t.location),
      (this.currentToken = null),
      t.location &&
        ((t.location.endLine = this.preprocessor.line),
        (t.location.endCol = this.preprocessor.col + 1),
        (t.location.endOffset = this.preprocessor.offset + 1)),
      (this.currentLocation = this.getCurrentLocation(-1));
  }
  emitCurrentTagToken() {
    const t = this.currentToken;
    this.prepareToken(t),
      (t.tagID = jt(t.tagName)),
      t.type === ee.START_TAG
        ? ((this.lastStartTagName = t.tagName), this.handler.onStartTag(t))
        : (t.attrs.length > 0 && this._err(F.endTagWithAttributes),
          t.selfClosing && this._err(F.endTagWithTrailingSolidus),
          this.handler.onEndTag(t)),
      this.preprocessor.dropParsedChunk();
  }
  emitCurrentComment(t) {
    this.prepareToken(t),
      this.handler.onComment(t),
      this.preprocessor.dropParsedChunk();
  }
  emitCurrentDoctype(t) {
    this.prepareToken(t),
      this.handler.onDoctype(t),
      this.preprocessor.dropParsedChunk();
  }
  _emitCurrentCharacterToken(t) {
    if (this.currentCharacterToken) {
      switch (
        (t &&
          this.currentCharacterToken.location &&
          ((this.currentCharacterToken.location.endLine = t.startLine),
          (this.currentCharacterToken.location.endCol = t.startCol),
          (this.currentCharacterToken.location.endOffset = t.startOffset)),
        this.currentCharacterToken.type)
      ) {
        case ee.CHARACTER: {
          this.handler.onCharacter(this.currentCharacterToken);
          break;
        }
        case ee.NULL_CHARACTER: {
          this.handler.onNullCharacter(this.currentCharacterToken);
          break;
        }
        case ee.WHITESPACE_CHARACTER: {
          this.handler.onWhitespaceCharacter(this.currentCharacterToken);
          break;
        }
      }
      this.currentCharacterToken = null;
    }
  }
  _emitEOFToken() {
    const t = this.getCurrentLocation(0);
    t &&
      ((t.endLine = t.startLine),
      (t.endCol = t.startCol),
      (t.endOffset = t.startOffset)),
      this._emitCurrentCharacterToken(t),
      this.handler.onEof({
        type: ee.EOF,
        location: t,
      }),
      (this.active = !1);
  }
  _appendCharToCurrentCharacterToken(t, a) {
    if (this.currentCharacterToken)
      if (this.currentCharacterToken.type !== t)
        (this.currentLocation = this.getCurrentLocation(0)),
          this._emitCurrentCharacterToken(this.currentLocation),
          this.preprocessor.dropParsedChunk();
      else {
        this.currentCharacterToken.chars += a;
        return;
      }
    this._createCharacterToken(t, a);
  }
  _emitCodePoint(t) {
    const a = xc(t)
      ? ee.WHITESPACE_CHARACTER
      : t === m.NULL
        ? ee.NULL_CHARACTER
        : ee.CHARACTER;
    this._appendCharToCurrentCharacterToken(a, String.fromCodePoint(t));
  }
  _emitChars(t) {
    this._appendCharToCurrentCharacterToken(ee.CHARACTER, t);
  }
  _matchNamedCharacterReference(t) {
    let a = null,
      r = 0,
      n = !1;
    for (
      let s = 0, i = st[0];
      s >= 0 && ((s = Ec(st, i, s + 1, t)), !(s < 0));
      t = this._consume()
    ) {
      (r += 1), (i = st[s]);
      const o = i & We.VALUE_LENGTH;
      if (o) {
        const u = (o >> 14) - 1;
        if (
          (t !== m.SEMICOLON &&
          this._isCharacterReferenceInAttribute() &&
          I7(this.preprocessor.peek(1))
            ? ((a = [m.AMPERSAND]), (s += u))
            : ((a =
                u === 0
                  ? [st[s] & ~We.VALUE_LENGTH]
                  : u === 1
                    ? [st[++s]]
                    : [st[++s], st[++s]]),
              (r = 0),
              (n = t !== m.SEMICOLON)),
          u === 0)
        ) {
          this._consume();
          break;
        }
      }
    }
    return (
      this._unconsume(r),
      n &&
        !this.preprocessor.endOfChunkHit &&
        this._err(F.missingSemicolonAfterCharacterReference),
      this._unconsume(1),
      a
    );
  }
  _isCharacterReferenceInAttribute() {
    return (
      this.returnState === g.ATTRIBUTE_VALUE_DOUBLE_QUOTED ||
      this.returnState === g.ATTRIBUTE_VALUE_SINGLE_QUOTED ||
      this.returnState === g.ATTRIBUTE_VALUE_UNQUOTED
    );
  }
  _flushCodePointConsumedAsCharacterReference(t) {
    this._isCharacterReferenceInAttribute()
      ? (this.currentAttr.value += String.fromCodePoint(t))
      : this._emitCodePoint(t);
  }
  _callState(t) {
    switch (this.state) {
      case g.DATA: {
        this._stateData(t);
        break;
      }
      case g.RCDATA: {
        this._stateRcdata(t);
        break;
      }
      case g.RAWTEXT: {
        this._stateRawtext(t);
        break;
      }
      case g.SCRIPT_DATA: {
        this._stateScriptData(t);
        break;
      }
      case g.PLAINTEXT: {
        this._statePlaintext(t);
        break;
      }
      case g.TAG_OPEN: {
        this._stateTagOpen(t);
        break;
      }
      case g.END_TAG_OPEN: {
        this._stateEndTagOpen(t);
        break;
      }
      case g.TAG_NAME: {
        this._stateTagName(t);
        break;
      }
      case g.RCDATA_LESS_THAN_SIGN: {
        this._stateRcdataLessThanSign(t);
        break;
      }
      case g.RCDATA_END_TAG_OPEN: {
        this._stateRcdataEndTagOpen(t);
        break;
      }
      case g.RCDATA_END_TAG_NAME: {
        this._stateRcdataEndTagName(t);
        break;
      }
      case g.RAWTEXT_LESS_THAN_SIGN: {
        this._stateRawtextLessThanSign(t);
        break;
      }
      case g.RAWTEXT_END_TAG_OPEN: {
        this._stateRawtextEndTagOpen(t);
        break;
      }
      case g.RAWTEXT_END_TAG_NAME: {
        this._stateRawtextEndTagName(t);
        break;
      }
      case g.SCRIPT_DATA_LESS_THAN_SIGN: {
        this._stateScriptDataLessThanSign(t);
        break;
      }
      case g.SCRIPT_DATA_END_TAG_OPEN: {
        this._stateScriptDataEndTagOpen(t);
        break;
      }
      case g.SCRIPT_DATA_END_TAG_NAME: {
        this._stateScriptDataEndTagName(t);
        break;
      }
      case g.SCRIPT_DATA_ESCAPE_START: {
        this._stateScriptDataEscapeStart(t);
        break;
      }
      case g.SCRIPT_DATA_ESCAPE_START_DASH: {
        this._stateScriptDataEscapeStartDash(t);
        break;
      }
      case g.SCRIPT_DATA_ESCAPED: {
        this._stateScriptDataEscaped(t);
        break;
      }
      case g.SCRIPT_DATA_ESCAPED_DASH: {
        this._stateScriptDataEscapedDash(t);
        break;
      }
      case g.SCRIPT_DATA_ESCAPED_DASH_DASH: {
        this._stateScriptDataEscapedDashDash(t);
        break;
      }
      case g.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataEscapedLessThanSign(t);
        break;
      }
      case g.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
        this._stateScriptDataEscapedEndTagOpen(t);
        break;
      }
      case g.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
        this._stateScriptDataEscapedEndTagName(t);
        break;
      }
      case g.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
        this._stateScriptDataDoubleEscapeStart(t);
        break;
      }
      case g.SCRIPT_DATA_DOUBLE_ESCAPED: {
        this._stateScriptDataDoubleEscaped(t);
        break;
      }
      case g.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
        this._stateScriptDataDoubleEscapedDash(t);
        break;
      }
      case g.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
        this._stateScriptDataDoubleEscapedDashDash(t);
        break;
      }
      case g.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataDoubleEscapedLessThanSign(t);
        break;
      }
      case g.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
        this._stateScriptDataDoubleEscapeEnd(t);
        break;
      }
      case g.BEFORE_ATTRIBUTE_NAME: {
        this._stateBeforeAttributeName(t);
        break;
      }
      case g.ATTRIBUTE_NAME: {
        this._stateAttributeName(t);
        break;
      }
      case g.AFTER_ATTRIBUTE_NAME: {
        this._stateAfterAttributeName(t);
        break;
      }
      case g.BEFORE_ATTRIBUTE_VALUE: {
        this._stateBeforeAttributeValue(t);
        break;
      }
      case g.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
        this._stateAttributeValueDoubleQuoted(t);
        break;
      }
      case g.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
        this._stateAttributeValueSingleQuoted(t);
        break;
      }
      case g.ATTRIBUTE_VALUE_UNQUOTED: {
        this._stateAttributeValueUnquoted(t);
        break;
      }
      case g.AFTER_ATTRIBUTE_VALUE_QUOTED: {
        this._stateAfterAttributeValueQuoted(t);
        break;
      }
      case g.SELF_CLOSING_START_TAG: {
        this._stateSelfClosingStartTag(t);
        break;
      }
      case g.BOGUS_COMMENT: {
        this._stateBogusComment(t);
        break;
      }
      case g.MARKUP_DECLARATION_OPEN: {
        this._stateMarkupDeclarationOpen(t);
        break;
      }
      case g.COMMENT_START: {
        this._stateCommentStart(t);
        break;
      }
      case g.COMMENT_START_DASH: {
        this._stateCommentStartDash(t);
        break;
      }
      case g.COMMENT: {
        this._stateComment(t);
        break;
      }
      case g.COMMENT_LESS_THAN_SIGN: {
        this._stateCommentLessThanSign(t);
        break;
      }
      case g.COMMENT_LESS_THAN_SIGN_BANG: {
        this._stateCommentLessThanSignBang(t);
        break;
      }
      case g.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
        this._stateCommentLessThanSignBangDash(t);
        break;
      }
      case g.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
        this._stateCommentLessThanSignBangDashDash(t);
        break;
      }
      case g.COMMENT_END_DASH: {
        this._stateCommentEndDash(t);
        break;
      }
      case g.COMMENT_END: {
        this._stateCommentEnd(t);
        break;
      }
      case g.COMMENT_END_BANG: {
        this._stateCommentEndBang(t);
        break;
      }
      case g.DOCTYPE: {
        this._stateDoctype(t);
        break;
      }
      case g.BEFORE_DOCTYPE_NAME: {
        this._stateBeforeDoctypeName(t);
        break;
      }
      case g.DOCTYPE_NAME: {
        this._stateDoctypeName(t);
        break;
      }
      case g.AFTER_DOCTYPE_NAME: {
        this._stateAfterDoctypeName(t);
        break;
      }
      case g.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
        this._stateAfterDoctypePublicKeyword(t);
        break;
      }
      case g.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateBeforeDoctypePublicIdentifier(t);
        break;
      }
      case g.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypePublicIdentifierDoubleQuoted(t);
        break;
      }
      case g.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypePublicIdentifierSingleQuoted(t);
        break;
      }
      case g.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateAfterDoctypePublicIdentifier(t);
        break;
      }
      case g.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
        this._stateBetweenDoctypePublicAndSystemIdentifiers(t);
        break;
      }
      case g.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
        this._stateAfterDoctypeSystemKeyword(t);
        break;
      }
      case g.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateBeforeDoctypeSystemIdentifier(t);
        break;
      }
      case g.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypeSystemIdentifierDoubleQuoted(t);
        break;
      }
      case g.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypeSystemIdentifierSingleQuoted(t);
        break;
      }
      case g.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateAfterDoctypeSystemIdentifier(t);
        break;
      }
      case g.BOGUS_DOCTYPE: {
        this._stateBogusDoctype(t);
        break;
      }
      case g.CDATA_SECTION: {
        this._stateCdataSection(t);
        break;
      }
      case g.CDATA_SECTION_BRACKET: {
        this._stateCdataSectionBracket(t);
        break;
      }
      case g.CDATA_SECTION_END: {
        this._stateCdataSectionEnd(t);
        break;
      }
      case g.CHARACTER_REFERENCE: {
        this._stateCharacterReference(t);
        break;
      }
      case g.NAMED_CHARACTER_REFERENCE: {
        this._stateNamedCharacterReference(t);
        break;
      }
      case g.AMBIGUOUS_AMPERSAND: {
        this._stateAmbiguousAmpersand(t);
        break;
      }
      case g.NUMERIC_CHARACTER_REFERENCE: {
        this._stateNumericCharacterReference(t);
        break;
      }
      case g.HEXADEMICAL_CHARACTER_REFERENCE_START: {
        this._stateHexademicalCharacterReferenceStart(t);
        break;
      }
      case g.HEXADEMICAL_CHARACTER_REFERENCE: {
        this._stateHexademicalCharacterReference(t);
        break;
      }
      case g.DECIMAL_CHARACTER_REFERENCE: {
        this._stateDecimalCharacterReference(t);
        break;
      }
      case g.NUMERIC_CHARACTER_REFERENCE_END: {
        this._stateNumericCharacterReferenceEnd(t);
        break;
      }
      default:
        throw new Error("Unknown state");
    }
  }
  _stateData(t) {
    switch (t) {
      case m.LESS_THAN_SIGN: {
        this.state = g.TAG_OPEN;
        break;
      }
      case m.AMPERSAND: {
        (this.returnState = g.DATA), (this.state = g.CHARACTER_REFERENCE);
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), this._emitCodePoint(t);
        break;
      }
      case m.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  _stateRcdata(t) {
    switch (t) {
      case m.AMPERSAND: {
        (this.returnState = g.RCDATA), (this.state = g.CHARACTER_REFERENCE);
        break;
      }
      case m.LESS_THAN_SIGN: {
        this.state = g.RCDATA_LESS_THAN_SIGN;
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), this._emitChars(ue);
        break;
      }
      case m.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  _stateRawtext(t) {
    switch (t) {
      case m.LESS_THAN_SIGN: {
        this.state = g.RAWTEXT_LESS_THAN_SIGN;
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), this._emitChars(ue);
        break;
      }
      case m.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  _stateScriptData(t) {
    switch (t) {
      case m.LESS_THAN_SIGN: {
        this.state = g.SCRIPT_DATA_LESS_THAN_SIGN;
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), this._emitChars(ue);
        break;
      }
      case m.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  _statePlaintext(t) {
    switch (t) {
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), this._emitChars(ue);
        break;
      }
      case m.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  _stateTagOpen(t) {
    if (ot(t))
      this._createStartTagToken(),
        (this.state = g.TAG_NAME),
        this._stateTagName(t);
    else
      switch (t) {
        case m.EXCLAMATION_MARK: {
          this.state = g.MARKUP_DECLARATION_OPEN;
          break;
        }
        case m.SOLIDUS: {
          this.state = g.END_TAG_OPEN;
          break;
        }
        case m.QUESTION_MARK: {
          this._err(F.unexpectedQuestionMarkInsteadOfTagName),
            this._createCommentToken(1),
            (this.state = g.BOGUS_COMMENT),
            this._stateBogusComment(t);
          break;
        }
        case m.EOF: {
          this._err(F.eofBeforeTagName),
            this._emitChars("<"),
            this._emitEOFToken();
          break;
        }
        default:
          this._err(F.invalidFirstCharacterOfTagName),
            this._emitChars("<"),
            (this.state = g.DATA),
            this._stateData(t);
      }
  }
  _stateEndTagOpen(t) {
    if (ot(t))
      this._createEndTagToken(),
        (this.state = g.TAG_NAME),
        this._stateTagName(t);
    else
      switch (t) {
        case m.GREATER_THAN_SIGN: {
          this._err(F.missingEndTagName), (this.state = g.DATA);
          break;
        }
        case m.EOF: {
          this._err(F.eofBeforeTagName),
            this._emitChars("</"),
            this._emitEOFToken();
          break;
        }
        default:
          this._err(F.invalidFirstCharacterOfTagName),
            this._createCommentToken(2),
            (this.state = g.BOGUS_COMMENT),
            this._stateBogusComment(t);
      }
  }
  _stateTagName(t) {
    const a = this.currentToken;
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED: {
        this.state = g.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case m.SOLIDUS: {
        this.state = g.SELF_CLOSING_START_TAG;
        break;
      }
      case m.GREATER_THAN_SIGN: {
        (this.state = g.DATA), this.emitCurrentTagToken();
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), (a.tagName += ue);
        break;
      }
      case m.EOF: {
        this._err(F.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        a.tagName += String.fromCodePoint(Jt(t) ? Ca(t) : t);
    }
  }
  _stateRcdataLessThanSign(t) {
    t === m.SOLIDUS
      ? (this.state = g.RCDATA_END_TAG_OPEN)
      : (this._emitChars("<"), (this.state = g.RCDATA), this._stateRcdata(t));
  }
  _stateRcdataEndTagOpen(t) {
    ot(t)
      ? ((this.state = g.RCDATA_END_TAG_NAME), this._stateRcdataEndTagName(t))
      : (this._emitChars("</"), (this.state = g.RCDATA), this._stateRcdata(t));
  }
  handleSpecialEndTag(t) {
    if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
      return !this._ensureHibernation();
    this._createEndTagToken();
    const a = this.currentToken;
    switch (
      ((a.tagName = this.lastStartTagName),
      this.preprocessor.peek(this.lastStartTagName.length))
    ) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED:
        return (
          this._advanceBy(this.lastStartTagName.length),
          (this.state = g.BEFORE_ATTRIBUTE_NAME),
          !1
        );
      case m.SOLIDUS:
        return (
          this._advanceBy(this.lastStartTagName.length),
          (this.state = g.SELF_CLOSING_START_TAG),
          !1
        );
      case m.GREATER_THAN_SIGN:
        return (
          this._advanceBy(this.lastStartTagName.length),
          this.emitCurrentTagToken(),
          (this.state = g.DATA),
          !1
        );
      default:
        return !this._ensureHibernation();
    }
  }
  _stateRcdataEndTagName(t) {
    this.handleSpecialEndTag(t) &&
      (this._emitChars("</"), (this.state = g.RCDATA), this._stateRcdata(t));
  }
  _stateRawtextLessThanSign(t) {
    t === m.SOLIDUS
      ? (this.state = g.RAWTEXT_END_TAG_OPEN)
      : (this._emitChars("<"), (this.state = g.RAWTEXT), this._stateRawtext(t));
  }
  _stateRawtextEndTagOpen(t) {
    ot(t)
      ? ((this.state = g.RAWTEXT_END_TAG_NAME), this._stateRawtextEndTagName(t))
      : (this._emitChars("</"),
        (this.state = g.RAWTEXT),
        this._stateRawtext(t));
  }
  _stateRawtextEndTagName(t) {
    this.handleSpecialEndTag(t) &&
      (this._emitChars("</"), (this.state = g.RAWTEXT), this._stateRawtext(t));
  }
  _stateScriptDataLessThanSign(t) {
    switch (t) {
      case m.SOLIDUS: {
        this.state = g.SCRIPT_DATA_END_TAG_OPEN;
        break;
      }
      case m.EXCLAMATION_MARK: {
        (this.state = g.SCRIPT_DATA_ESCAPE_START), this._emitChars("<!");
        break;
      }
      default:
        this._emitChars("<"),
          (this.state = g.SCRIPT_DATA),
          this._stateScriptData(t);
    }
  }
  _stateScriptDataEndTagOpen(t) {
    ot(t)
      ? ((this.state = g.SCRIPT_DATA_END_TAG_NAME),
        this._stateScriptDataEndTagName(t))
      : (this._emitChars("</"),
        (this.state = g.SCRIPT_DATA),
        this._stateScriptData(t));
  }
  _stateScriptDataEndTagName(t) {
    this.handleSpecialEndTag(t) &&
      (this._emitChars("</"),
      (this.state = g.SCRIPT_DATA),
      this._stateScriptData(t));
  }
  _stateScriptDataEscapeStart(t) {
    t === m.HYPHEN_MINUS
      ? ((this.state = g.SCRIPT_DATA_ESCAPE_START_DASH), this._emitChars("-"))
      : ((this.state = g.SCRIPT_DATA), this._stateScriptData(t));
  }
  _stateScriptDataEscapeStartDash(t) {
    t === m.HYPHEN_MINUS
      ? ((this.state = g.SCRIPT_DATA_ESCAPED_DASH_DASH), this._emitChars("-"))
      : ((this.state = g.SCRIPT_DATA), this._stateScriptData(t));
  }
  _stateScriptDataEscaped(t) {
    switch (t) {
      case m.HYPHEN_MINUS: {
        (this.state = g.SCRIPT_DATA_ESCAPED_DASH), this._emitChars("-");
        break;
      }
      case m.LESS_THAN_SIGN: {
        this.state = g.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), this._emitChars(ue);
        break;
      }
      case m.EOF: {
        this._err(F.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  _stateScriptDataEscapedDash(t) {
    switch (t) {
      case m.HYPHEN_MINUS: {
        (this.state = g.SCRIPT_DATA_ESCAPED_DASH_DASH), this._emitChars("-");
        break;
      }
      case m.LESS_THAN_SIGN: {
        this.state = g.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter),
          (this.state = g.SCRIPT_DATA_ESCAPED),
          this._emitChars(ue);
        break;
      }
      case m.EOF: {
        this._err(F.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        (this.state = g.SCRIPT_DATA_ESCAPED), this._emitCodePoint(t);
    }
  }
  _stateScriptDataEscapedDashDash(t) {
    switch (t) {
      case m.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case m.LESS_THAN_SIGN: {
        this.state = g.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case m.GREATER_THAN_SIGN: {
        (this.state = g.SCRIPT_DATA), this._emitChars(">");
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter),
          (this.state = g.SCRIPT_DATA_ESCAPED),
          this._emitChars(ue);
        break;
      }
      case m.EOF: {
        this._err(F.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        (this.state = g.SCRIPT_DATA_ESCAPED), this._emitCodePoint(t);
    }
  }
  _stateScriptDataEscapedLessThanSign(t) {
    t === m.SOLIDUS
      ? (this.state = g.SCRIPT_DATA_ESCAPED_END_TAG_OPEN)
      : ot(t)
        ? (this._emitChars("<"),
          (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPE_START),
          this._stateScriptDataDoubleEscapeStart(t))
        : (this._emitChars("<"),
          (this.state = g.SCRIPT_DATA_ESCAPED),
          this._stateScriptDataEscaped(t));
  }
  _stateScriptDataEscapedEndTagOpen(t) {
    ot(t)
      ? ((this.state = g.SCRIPT_DATA_ESCAPED_END_TAG_NAME),
        this._stateScriptDataEscapedEndTagName(t))
      : (this._emitChars("</"),
        (this.state = g.SCRIPT_DATA_ESCAPED),
        this._stateScriptDataEscaped(t));
  }
  _stateScriptDataEscapedEndTagName(t) {
    this.handleSpecialEndTag(t) &&
      (this._emitChars("</"),
      (this.state = g.SCRIPT_DATA_ESCAPED),
      this._stateScriptDataEscaped(t));
  }
  _stateScriptDataDoubleEscapeStart(t) {
    if (
      this.preprocessor.startsWith(Ae.SCRIPT, !1) &&
      es(this.preprocessor.peek(Ae.SCRIPT.length))
    ) {
      this._emitCodePoint(t);
      for (let a = 0; a < Ae.SCRIPT.length; a++)
        this._emitCodePoint(this._consume());
      this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED;
    } else
      this._ensureHibernation() ||
        ((this.state = g.SCRIPT_DATA_ESCAPED), this._stateScriptDataEscaped(t));
  }
  _stateScriptDataDoubleEscaped(t) {
    switch (t) {
      case m.HYPHEN_MINUS: {
        (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED_DASH), this._emitChars("-");
        break;
      }
      case m.LESS_THAN_SIGN: {
        (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
          this._emitChars("<");
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), this._emitChars(ue);
        break;
      }
      case m.EOF: {
        this._err(F.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  _stateScriptDataDoubleEscapedDash(t) {
    switch (t) {
      case m.HYPHEN_MINUS: {
        (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH),
          this._emitChars("-");
        break;
      }
      case m.LESS_THAN_SIGN: {
        (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
          this._emitChars("<");
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter),
          (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED),
          this._emitChars(ue);
        break;
      }
      case m.EOF: {
        this._err(F.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED), this._emitCodePoint(t);
    }
  }
  _stateScriptDataDoubleEscapedDashDash(t) {
    switch (t) {
      case m.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case m.LESS_THAN_SIGN: {
        (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
          this._emitChars("<");
        break;
      }
      case m.GREATER_THAN_SIGN: {
        (this.state = g.SCRIPT_DATA), this._emitChars(">");
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter),
          (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED),
          this._emitChars(ue);
        break;
      }
      case m.EOF: {
        this._err(F.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED), this._emitCodePoint(t);
    }
  }
  _stateScriptDataDoubleEscapedLessThanSign(t) {
    t === m.SOLIDUS
      ? ((this.state = g.SCRIPT_DATA_DOUBLE_ESCAPE_END), this._emitChars("/"))
      : ((this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED),
        this._stateScriptDataDoubleEscaped(t));
  }
  _stateScriptDataDoubleEscapeEnd(t) {
    if (
      this.preprocessor.startsWith(Ae.SCRIPT, !1) &&
      es(this.preprocessor.peek(Ae.SCRIPT.length))
    ) {
      this._emitCodePoint(t);
      for (let a = 0; a < Ae.SCRIPT.length; a++)
        this._emitCodePoint(this._consume());
      this.state = g.SCRIPT_DATA_ESCAPED;
    } else
      this._ensureHibernation() ||
        ((this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED),
        this._stateScriptDataDoubleEscaped(t));
  }
  _stateBeforeAttributeName(t) {
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED:
        break;
      case m.SOLIDUS:
      case m.GREATER_THAN_SIGN:
      case m.EOF: {
        (this.state = g.AFTER_ATTRIBUTE_NAME), this._stateAfterAttributeName(t);
        break;
      }
      case m.EQUALS_SIGN: {
        this._err(F.unexpectedEqualsSignBeforeAttributeName),
          this._createAttr("="),
          (this.state = g.ATTRIBUTE_NAME);
        break;
      }
      default:
        this._createAttr(""),
          (this.state = g.ATTRIBUTE_NAME),
          this._stateAttributeName(t);
    }
  }
  _stateAttributeName(t) {
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED:
      case m.SOLIDUS:
      case m.GREATER_THAN_SIGN:
      case m.EOF: {
        this._leaveAttrName(),
          (this.state = g.AFTER_ATTRIBUTE_NAME),
          this._stateAfterAttributeName(t);
        break;
      }
      case m.EQUALS_SIGN: {
        this._leaveAttrName(), (this.state = g.BEFORE_ATTRIBUTE_VALUE);
        break;
      }
      case m.QUOTATION_MARK:
      case m.APOSTROPHE:
      case m.LESS_THAN_SIGN: {
        this._err(F.unexpectedCharacterInAttributeName),
          (this.currentAttr.name += String.fromCodePoint(t));
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), (this.currentAttr.name += ue);
        break;
      }
      default:
        this.currentAttr.name += String.fromCodePoint(Jt(t) ? Ca(t) : t);
    }
  }
  _stateAfterAttributeName(t) {
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED:
        break;
      case m.SOLIDUS: {
        this.state = g.SELF_CLOSING_START_TAG;
        break;
      }
      case m.EQUALS_SIGN: {
        this.state = g.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case m.GREATER_THAN_SIGN: {
        (this.state = g.DATA), this.emitCurrentTagToken();
        break;
      }
      case m.EOF: {
        this._err(F.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._createAttr(""),
          (this.state = g.ATTRIBUTE_NAME),
          this._stateAttributeName(t);
    }
  }
  _stateBeforeAttributeValue(t) {
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED:
        break;
      case m.QUOTATION_MARK: {
        this.state = g.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
        break;
      }
      case m.APOSTROPHE: {
        this.state = g.ATTRIBUTE_VALUE_SINGLE_QUOTED;
        break;
      }
      case m.GREATER_THAN_SIGN: {
        this._err(F.missingAttributeValue),
          (this.state = g.DATA),
          this.emitCurrentTagToken();
        break;
      }
      default:
        (this.state = g.ATTRIBUTE_VALUE_UNQUOTED),
          this._stateAttributeValueUnquoted(t);
    }
  }
  _stateAttributeValueDoubleQuoted(t) {
    switch (t) {
      case m.QUOTATION_MARK: {
        this.state = g.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case m.AMPERSAND: {
        (this.returnState = g.ATTRIBUTE_VALUE_DOUBLE_QUOTED),
          (this.state = g.CHARACTER_REFERENCE);
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), (this.currentAttr.value += ue);
        break;
      }
      case m.EOF: {
        this._err(F.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(t);
    }
  }
  _stateAttributeValueSingleQuoted(t) {
    switch (t) {
      case m.APOSTROPHE: {
        this.state = g.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case m.AMPERSAND: {
        (this.returnState = g.ATTRIBUTE_VALUE_SINGLE_QUOTED),
          (this.state = g.CHARACTER_REFERENCE);
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), (this.currentAttr.value += ue);
        break;
      }
      case m.EOF: {
        this._err(F.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(t);
    }
  }
  _stateAttributeValueUnquoted(t) {
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED: {
        this._leaveAttrValue(), (this.state = g.BEFORE_ATTRIBUTE_NAME);
        break;
      }
      case m.AMPERSAND: {
        (this.returnState = g.ATTRIBUTE_VALUE_UNQUOTED),
          (this.state = g.CHARACTER_REFERENCE);
        break;
      }
      case m.GREATER_THAN_SIGN: {
        this._leaveAttrValue(),
          (this.state = g.DATA),
          this.emitCurrentTagToken();
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), (this.currentAttr.value += ue);
        break;
      }
      case m.QUOTATION_MARK:
      case m.APOSTROPHE:
      case m.LESS_THAN_SIGN:
      case m.EQUALS_SIGN:
      case m.GRAVE_ACCENT: {
        this._err(F.unexpectedCharacterInUnquotedAttributeValue),
          (this.currentAttr.value += String.fromCodePoint(t));
        break;
      }
      case m.EOF: {
        this._err(F.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(t);
    }
  }
  _stateAfterAttributeValueQuoted(t) {
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED: {
        this._leaveAttrValue(), (this.state = g.BEFORE_ATTRIBUTE_NAME);
        break;
      }
      case m.SOLIDUS: {
        this._leaveAttrValue(), (this.state = g.SELF_CLOSING_START_TAG);
        break;
      }
      case m.GREATER_THAN_SIGN: {
        this._leaveAttrValue(),
          (this.state = g.DATA),
          this.emitCurrentTagToken();
        break;
      }
      case m.EOF: {
        this._err(F.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(F.missingWhitespaceBetweenAttributes),
          (this.state = g.BEFORE_ATTRIBUTE_NAME),
          this._stateBeforeAttributeName(t);
    }
  }
  _stateSelfClosingStartTag(t) {
    switch (t) {
      case m.GREATER_THAN_SIGN: {
        const a = this.currentToken;
        (a.selfClosing = !0), (this.state = g.DATA), this.emitCurrentTagToken();
        break;
      }
      case m.EOF: {
        this._err(F.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(F.unexpectedSolidusInTag),
          (this.state = g.BEFORE_ATTRIBUTE_NAME),
          this._stateBeforeAttributeName(t);
    }
  }
  _stateBogusComment(t) {
    const a = this.currentToken;
    switch (t) {
      case m.GREATER_THAN_SIGN: {
        (this.state = g.DATA), this.emitCurrentComment(a);
        break;
      }
      case m.EOF: {
        this.emitCurrentComment(a), this._emitEOFToken();
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), (a.data += ue);
        break;
      }
      default:
        a.data += String.fromCodePoint(t);
    }
  }
  _stateMarkupDeclarationOpen(t) {
    this._consumeSequenceIfMatch(Ae.DASH_DASH, !0)
      ? (this._createCommentToken(Ae.DASH_DASH.length + 1),
        (this.state = g.COMMENT_START))
      : this._consumeSequenceIfMatch(Ae.DOCTYPE, !1)
        ? ((this.currentLocation = this.getCurrentLocation(
            Ae.DOCTYPE.length + 1,
          )),
          (this.state = g.DOCTYPE))
        : this._consumeSequenceIfMatch(Ae.CDATA_START, !0)
          ? this.inForeignNode
            ? (this.state = g.CDATA_SECTION)
            : (this._err(F.cdataInHtmlContent),
              this._createCommentToken(Ae.CDATA_START.length + 1),
              (this.currentToken.data = "[CDATA["),
              (this.state = g.BOGUS_COMMENT))
          : this._ensureHibernation() ||
            (this._err(F.incorrectlyOpenedComment),
            this._createCommentToken(2),
            (this.state = g.BOGUS_COMMENT),
            this._stateBogusComment(t));
  }
  _stateCommentStart(t) {
    switch (t) {
      case m.HYPHEN_MINUS: {
        this.state = g.COMMENT_START_DASH;
        break;
      }
      case m.GREATER_THAN_SIGN: {
        this._err(F.abruptClosingOfEmptyComment), (this.state = g.DATA);
        const a = this.currentToken;
        this.emitCurrentComment(a);
        break;
      }
      default:
        (this.state = g.COMMENT), this._stateComment(t);
    }
  }
  _stateCommentStartDash(t) {
    const a = this.currentToken;
    switch (t) {
      case m.HYPHEN_MINUS: {
        this.state = g.COMMENT_END;
        break;
      }
      case m.GREATER_THAN_SIGN: {
        this._err(F.abruptClosingOfEmptyComment),
          (this.state = g.DATA),
          this.emitCurrentComment(a);
        break;
      }
      case m.EOF: {
        this._err(F.eofInComment),
          this.emitCurrentComment(a),
          this._emitEOFToken();
        break;
      }
      default:
        (a.data += "-"), (this.state = g.COMMENT), this._stateComment(t);
    }
  }
  _stateComment(t) {
    const a = this.currentToken;
    switch (t) {
      case m.HYPHEN_MINUS: {
        this.state = g.COMMENT_END_DASH;
        break;
      }
      case m.LESS_THAN_SIGN: {
        (a.data += "<"), (this.state = g.COMMENT_LESS_THAN_SIGN);
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), (a.data += ue);
        break;
      }
      case m.EOF: {
        this._err(F.eofInComment),
          this.emitCurrentComment(a),
          this._emitEOFToken();
        break;
      }
      default:
        a.data += String.fromCodePoint(t);
    }
  }
  _stateCommentLessThanSign(t) {
    const a = this.currentToken;
    switch (t) {
      case m.EXCLAMATION_MARK: {
        (a.data += "!"), (this.state = g.COMMENT_LESS_THAN_SIGN_BANG);
        break;
      }
      case m.LESS_THAN_SIGN: {
        a.data += "<";
        break;
      }
      default:
        (this.state = g.COMMENT), this._stateComment(t);
    }
  }
  _stateCommentLessThanSignBang(t) {
    t === m.HYPHEN_MINUS
      ? (this.state = g.COMMENT_LESS_THAN_SIGN_BANG_DASH)
      : ((this.state = g.COMMENT), this._stateComment(t));
  }
  _stateCommentLessThanSignBangDash(t) {
    t === m.HYPHEN_MINUS
      ? (this.state = g.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH)
      : ((this.state = g.COMMENT_END_DASH), this._stateCommentEndDash(t));
  }
  _stateCommentLessThanSignBangDashDash(t) {
    t !== m.GREATER_THAN_SIGN && t !== m.EOF && this._err(F.nestedComment),
      (this.state = g.COMMENT_END),
      this._stateCommentEnd(t);
  }
  _stateCommentEndDash(t) {
    const a = this.currentToken;
    switch (t) {
      case m.HYPHEN_MINUS: {
        this.state = g.COMMENT_END;
        break;
      }
      case m.EOF: {
        this._err(F.eofInComment),
          this.emitCurrentComment(a),
          this._emitEOFToken();
        break;
      }
      default:
        (a.data += "-"), (this.state = g.COMMENT), this._stateComment(t);
    }
  }
  _stateCommentEnd(t) {
    const a = this.currentToken;
    switch (t) {
      case m.GREATER_THAN_SIGN: {
        (this.state = g.DATA), this.emitCurrentComment(a);
        break;
      }
      case m.EXCLAMATION_MARK: {
        this.state = g.COMMENT_END_BANG;
        break;
      }
      case m.HYPHEN_MINUS: {
        a.data += "-";
        break;
      }
      case m.EOF: {
        this._err(F.eofInComment),
          this.emitCurrentComment(a),
          this._emitEOFToken();
        break;
      }
      default:
        (a.data += "--"), (this.state = g.COMMENT), this._stateComment(t);
    }
  }
  _stateCommentEndBang(t) {
    const a = this.currentToken;
    switch (t) {
      case m.HYPHEN_MINUS: {
        (a.data += "--!"), (this.state = g.COMMENT_END_DASH);
        break;
      }
      case m.GREATER_THAN_SIGN: {
        this._err(F.incorrectlyClosedComment),
          (this.state = g.DATA),
          this.emitCurrentComment(a);
        break;
      }
      case m.EOF: {
        this._err(F.eofInComment),
          this.emitCurrentComment(a),
          this._emitEOFToken();
        break;
      }
      default:
        (a.data += "--!"), (this.state = g.COMMENT), this._stateComment(t);
    }
  }
  _stateDoctype(t) {
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED: {
        this.state = g.BEFORE_DOCTYPE_NAME;
        break;
      }
      case m.GREATER_THAN_SIGN: {
        (this.state = g.BEFORE_DOCTYPE_NAME), this._stateBeforeDoctypeName(t);
        break;
      }
      case m.EOF: {
        this._err(F.eofInDoctype), this._createDoctypeToken(null);
        const a = this.currentToken;
        (a.forceQuirks = !0), this.emitCurrentDoctype(a), this._emitEOFToken();
        break;
      }
      default:
        this._err(F.missingWhitespaceBeforeDoctypeName),
          (this.state = g.BEFORE_DOCTYPE_NAME),
          this._stateBeforeDoctypeName(t);
    }
  }
  _stateBeforeDoctypeName(t) {
    if (Jt(t))
      this._createDoctypeToken(String.fromCharCode(Ca(t))),
        (this.state = g.DOCTYPE_NAME);
    else
      switch (t) {
        case m.SPACE:
        case m.LINE_FEED:
        case m.TABULATION:
        case m.FORM_FEED:
          break;
        case m.NULL: {
          this._err(F.unexpectedNullCharacter),
            this._createDoctypeToken(ue),
            (this.state = g.DOCTYPE_NAME);
          break;
        }
        case m.GREATER_THAN_SIGN: {
          this._err(F.missingDoctypeName), this._createDoctypeToken(null);
          const a = this.currentToken;
          (a.forceQuirks = !0),
            this.emitCurrentDoctype(a),
            (this.state = g.DATA);
          break;
        }
        case m.EOF: {
          this._err(F.eofInDoctype), this._createDoctypeToken(null);
          const a = this.currentToken;
          (a.forceQuirks = !0),
            this.emitCurrentDoctype(a),
            this._emitEOFToken();
          break;
        }
        default:
          this._createDoctypeToken(String.fromCodePoint(t)),
            (this.state = g.DOCTYPE_NAME);
      }
  }
  _stateDoctypeName(t) {
    const a = this.currentToken;
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED: {
        this.state = g.AFTER_DOCTYPE_NAME;
        break;
      }
      case m.GREATER_THAN_SIGN: {
        (this.state = g.DATA), this.emitCurrentDoctype(a);
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), (a.name += ue);
        break;
      }
      case m.EOF: {
        this._err(F.eofInDoctype),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          this._emitEOFToken();
        break;
      }
      default:
        a.name += String.fromCodePoint(Jt(t) ? Ca(t) : t);
    }
  }
  _stateAfterDoctypeName(t) {
    const a = this.currentToken;
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED:
        break;
      case m.GREATER_THAN_SIGN: {
        (this.state = g.DATA), this.emitCurrentDoctype(a);
        break;
      }
      case m.EOF: {
        this._err(F.eofInDoctype),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          this._emitEOFToken();
        break;
      }
      default:
        this._consumeSequenceIfMatch(Ae.PUBLIC, !1)
          ? (this.state = g.AFTER_DOCTYPE_PUBLIC_KEYWORD)
          : this._consumeSequenceIfMatch(Ae.SYSTEM, !1)
            ? (this.state = g.AFTER_DOCTYPE_SYSTEM_KEYWORD)
            : this._ensureHibernation() ||
              (this._err(F.invalidCharacterSequenceAfterDoctypeName),
              (a.forceQuirks = !0),
              (this.state = g.BOGUS_DOCTYPE),
              this._stateBogusDoctype(t));
    }
  }
  _stateAfterDoctypePublicKeyword(t) {
    const a = this.currentToken;
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED: {
        this.state = g.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case m.QUOTATION_MARK: {
        this._err(F.missingWhitespaceAfterDoctypePublicKeyword),
          (a.publicId = ""),
          (this.state = g.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
        break;
      }
      case m.APOSTROPHE: {
        this._err(F.missingWhitespaceAfterDoctypePublicKeyword),
          (a.publicId = ""),
          (this.state = g.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
        break;
      }
      case m.GREATER_THAN_SIGN: {
        this._err(F.missingDoctypePublicIdentifier),
          (a.forceQuirks = !0),
          (this.state = g.DATA),
          this.emitCurrentDoctype(a);
        break;
      }
      case m.EOF: {
        this._err(F.eofInDoctype),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          this._emitEOFToken();
        break;
      }
      default:
        this._err(F.missingQuoteBeforeDoctypePublicIdentifier),
          (a.forceQuirks = !0),
          (this.state = g.BOGUS_DOCTYPE),
          this._stateBogusDoctype(t);
    }
  }
  _stateBeforeDoctypePublicIdentifier(t) {
    const a = this.currentToken;
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED:
        break;
      case m.QUOTATION_MARK: {
        (a.publicId = ""),
          (this.state = g.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
        break;
      }
      case m.APOSTROPHE: {
        (a.publicId = ""),
          (this.state = g.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
        break;
      }
      case m.GREATER_THAN_SIGN: {
        this._err(F.missingDoctypePublicIdentifier),
          (a.forceQuirks = !0),
          (this.state = g.DATA),
          this.emitCurrentDoctype(a);
        break;
      }
      case m.EOF: {
        this._err(F.eofInDoctype),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          this._emitEOFToken();
        break;
      }
      default:
        this._err(F.missingQuoteBeforeDoctypePublicIdentifier),
          (a.forceQuirks = !0),
          (this.state = g.BOGUS_DOCTYPE),
          this._stateBogusDoctype(t);
    }
  }
  _stateDoctypePublicIdentifierDoubleQuoted(t) {
    const a = this.currentToken;
    switch (t) {
      case m.QUOTATION_MARK: {
        this.state = g.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), (a.publicId += ue);
        break;
      }
      case m.GREATER_THAN_SIGN: {
        this._err(F.abruptDoctypePublicIdentifier),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          (this.state = g.DATA);
        break;
      }
      case m.EOF: {
        this._err(F.eofInDoctype),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          this._emitEOFToken();
        break;
      }
      default:
        a.publicId += String.fromCodePoint(t);
    }
  }
  _stateDoctypePublicIdentifierSingleQuoted(t) {
    const a = this.currentToken;
    switch (t) {
      case m.APOSTROPHE: {
        this.state = g.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), (a.publicId += ue);
        break;
      }
      case m.GREATER_THAN_SIGN: {
        this._err(F.abruptDoctypePublicIdentifier),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          (this.state = g.DATA);
        break;
      }
      case m.EOF: {
        this._err(F.eofInDoctype),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          this._emitEOFToken();
        break;
      }
      default:
        a.publicId += String.fromCodePoint(t);
    }
  }
  _stateAfterDoctypePublicIdentifier(t) {
    const a = this.currentToken;
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED: {
        this.state = g.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
        break;
      }
      case m.GREATER_THAN_SIGN: {
        (this.state = g.DATA), this.emitCurrentDoctype(a);
        break;
      }
      case m.QUOTATION_MARK: {
        this._err(F.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),
          (a.systemId = ""),
          (this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
        break;
      }
      case m.APOSTROPHE: {
        this._err(F.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),
          (a.systemId = ""),
          (this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
        break;
      }
      case m.EOF: {
        this._err(F.eofInDoctype),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          this._emitEOFToken();
        break;
      }
      default:
        this._err(F.missingQuoteBeforeDoctypeSystemIdentifier),
          (a.forceQuirks = !0),
          (this.state = g.BOGUS_DOCTYPE),
          this._stateBogusDoctype(t);
    }
  }
  _stateBetweenDoctypePublicAndSystemIdentifiers(t) {
    const a = this.currentToken;
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED:
        break;
      case m.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(a), (this.state = g.DATA);
        break;
      }
      case m.QUOTATION_MARK: {
        (a.systemId = ""),
          (this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
        break;
      }
      case m.APOSTROPHE: {
        (a.systemId = ""),
          (this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
        break;
      }
      case m.EOF: {
        this._err(F.eofInDoctype),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          this._emitEOFToken();
        break;
      }
      default:
        this._err(F.missingQuoteBeforeDoctypeSystemIdentifier),
          (a.forceQuirks = !0),
          (this.state = g.BOGUS_DOCTYPE),
          this._stateBogusDoctype(t);
    }
  }
  _stateAfterDoctypeSystemKeyword(t) {
    const a = this.currentToken;
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED: {
        this.state = g.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case m.QUOTATION_MARK: {
        this._err(F.missingWhitespaceAfterDoctypeSystemKeyword),
          (a.systemId = ""),
          (this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
        break;
      }
      case m.APOSTROPHE: {
        this._err(F.missingWhitespaceAfterDoctypeSystemKeyword),
          (a.systemId = ""),
          (this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
        break;
      }
      case m.GREATER_THAN_SIGN: {
        this._err(F.missingDoctypeSystemIdentifier),
          (a.forceQuirks = !0),
          (this.state = g.DATA),
          this.emitCurrentDoctype(a);
        break;
      }
      case m.EOF: {
        this._err(F.eofInDoctype),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          this._emitEOFToken();
        break;
      }
      default:
        this._err(F.missingQuoteBeforeDoctypeSystemIdentifier),
          (a.forceQuirks = !0),
          (this.state = g.BOGUS_DOCTYPE),
          this._stateBogusDoctype(t);
    }
  }
  _stateBeforeDoctypeSystemIdentifier(t) {
    const a = this.currentToken;
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED:
        break;
      case m.QUOTATION_MARK: {
        (a.systemId = ""),
          (this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
        break;
      }
      case m.APOSTROPHE: {
        (a.systemId = ""),
          (this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
        break;
      }
      case m.GREATER_THAN_SIGN: {
        this._err(F.missingDoctypeSystemIdentifier),
          (a.forceQuirks = !0),
          (this.state = g.DATA),
          this.emitCurrentDoctype(a);
        break;
      }
      case m.EOF: {
        this._err(F.eofInDoctype),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          this._emitEOFToken();
        break;
      }
      default:
        this._err(F.missingQuoteBeforeDoctypeSystemIdentifier),
          (a.forceQuirks = !0),
          (this.state = g.BOGUS_DOCTYPE),
          this._stateBogusDoctype(t);
    }
  }
  _stateDoctypeSystemIdentifierDoubleQuoted(t) {
    const a = this.currentToken;
    switch (t) {
      case m.QUOTATION_MARK: {
        this.state = g.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), (a.systemId += ue);
        break;
      }
      case m.GREATER_THAN_SIGN: {
        this._err(F.abruptDoctypeSystemIdentifier),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          (this.state = g.DATA);
        break;
      }
      case m.EOF: {
        this._err(F.eofInDoctype),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          this._emitEOFToken();
        break;
      }
      default:
        a.systemId += String.fromCodePoint(t);
    }
  }
  _stateDoctypeSystemIdentifierSingleQuoted(t) {
    const a = this.currentToken;
    switch (t) {
      case m.APOSTROPHE: {
        this.state = g.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter), (a.systemId += ue);
        break;
      }
      case m.GREATER_THAN_SIGN: {
        this._err(F.abruptDoctypeSystemIdentifier),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          (this.state = g.DATA);
        break;
      }
      case m.EOF: {
        this._err(F.eofInDoctype),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          this._emitEOFToken();
        break;
      }
      default:
        a.systemId += String.fromCodePoint(t);
    }
  }
  _stateAfterDoctypeSystemIdentifier(t) {
    const a = this.currentToken;
    switch (t) {
      case m.SPACE:
      case m.LINE_FEED:
      case m.TABULATION:
      case m.FORM_FEED:
        break;
      case m.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(a), (this.state = g.DATA);
        break;
      }
      case m.EOF: {
        this._err(F.eofInDoctype),
          (a.forceQuirks = !0),
          this.emitCurrentDoctype(a),
          this._emitEOFToken();
        break;
      }
      default:
        this._err(F.unexpectedCharacterAfterDoctypeSystemIdentifier),
          (this.state = g.BOGUS_DOCTYPE),
          this._stateBogusDoctype(t);
    }
  }
  _stateBogusDoctype(t) {
    const a = this.currentToken;
    switch (t) {
      case m.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(a), (this.state = g.DATA);
        break;
      }
      case m.NULL: {
        this._err(F.unexpectedNullCharacter);
        break;
      }
      case m.EOF: {
        this.emitCurrentDoctype(a), this._emitEOFToken();
        break;
      }
    }
  }
  _stateCdataSection(t) {
    switch (t) {
      case m.RIGHT_SQUARE_BRACKET: {
        this.state = g.CDATA_SECTION_BRACKET;
        break;
      }
      case m.EOF: {
        this._err(F.eofInCdata), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  _stateCdataSectionBracket(t) {
    t === m.RIGHT_SQUARE_BRACKET
      ? (this.state = g.CDATA_SECTION_END)
      : (this._emitChars("]"),
        (this.state = g.CDATA_SECTION),
        this._stateCdataSection(t));
  }
  _stateCdataSectionEnd(t) {
    switch (t) {
      case m.GREATER_THAN_SIGN: {
        this.state = g.DATA;
        break;
      }
      case m.RIGHT_SQUARE_BRACKET: {
        this._emitChars("]");
        break;
      }
      default:
        this._emitChars("]]"),
          (this.state = g.CDATA_SECTION),
          this._stateCdataSection(t);
    }
  }
  _stateCharacterReference(t) {
    t === m.NUMBER_SIGN
      ? (this.state = g.NUMERIC_CHARACTER_REFERENCE)
      : Xr(t)
        ? ((this.state = g.NAMED_CHARACTER_REFERENCE),
          this._stateNamedCharacterReference(t))
        : (this._flushCodePointConsumedAsCharacterReference(m.AMPERSAND),
          this._reconsumeInState(this.returnState, t));
  }
  _stateNamedCharacterReference(t) {
    const a = this._matchNamedCharacterReference(t);
    if (!this._ensureHibernation())
      if (a) {
        for (let r = 0; r < a.length; r++)
          this._flushCodePointConsumedAsCharacterReference(a[r]);
        this.state = this.returnState;
      } else
        this._flushCodePointConsumedAsCharacterReference(m.AMPERSAND),
          (this.state = g.AMBIGUOUS_AMPERSAND);
  }
  _stateAmbiguousAmpersand(t) {
    Xr(t)
      ? this._flushCodePointConsumedAsCharacterReference(t)
      : (t === m.SEMICOLON && this._err(F.unknownNamedCharacterReference),
        this._reconsumeInState(this.returnState, t));
  }
  _stateNumericCharacterReference(t) {
    (this.charRefCode = 0),
      t === m.LATIN_SMALL_X || t === m.LATIN_CAPITAL_X
        ? (this.state = g.HEXADEMICAL_CHARACTER_REFERENCE_START)
        : ea(t)
          ? ((this.state = g.DECIMAL_CHARACTER_REFERENCE),
            this._stateDecimalCharacterReference(t))
          : (this._err(F.absenceOfDigitsInNumericCharacterReference),
            this._flushCodePointConsumedAsCharacterReference(m.AMPERSAND),
            this._flushCodePointConsumedAsCharacterReference(m.NUMBER_SIGN),
            this._reconsumeInState(this.returnState, t));
  }
  _stateHexademicalCharacterReferenceStart(t) {
    z7(t)
      ? ((this.state = g.HEXADEMICAL_CHARACTER_REFERENCE),
        this._stateHexademicalCharacterReference(t))
      : (this._err(F.absenceOfDigitsInNumericCharacterReference),
        this._flushCodePointConsumedAsCharacterReference(m.AMPERSAND),
        this._flushCodePointConsumedAsCharacterReference(m.NUMBER_SIGN),
        this._unconsume(2),
        (this.state = this.returnState));
  }
  _stateHexademicalCharacterReference(t) {
    Ac(t)
      ? (this.charRefCode = this.charRefCode * 16 + t - 55)
      : Cc(t)
        ? (this.charRefCode = this.charRefCode * 16 + t - 87)
        : ea(t)
          ? (this.charRefCode = this.charRefCode * 16 + t - 48)
          : t === m.SEMICOLON
            ? (this.state = g.NUMERIC_CHARACTER_REFERENCE_END)
            : (this._err(F.missingSemicolonAfterCharacterReference),
              (this.state = g.NUMERIC_CHARACTER_REFERENCE_END),
              this._stateNumericCharacterReferenceEnd(t));
  }
  _stateDecimalCharacterReference(t) {
    ea(t)
      ? (this.charRefCode = this.charRefCode * 10 + t - 48)
      : t === m.SEMICOLON
        ? (this.state = g.NUMERIC_CHARACTER_REFERENCE_END)
        : (this._err(F.missingSemicolonAfterCharacterReference),
          (this.state = g.NUMERIC_CHARACTER_REFERENCE_END),
          this._stateNumericCharacterReferenceEnd(t));
  }
  _stateNumericCharacterReferenceEnd(t) {
    if (this.charRefCode === m.NULL)
      this._err(F.nullCharacterReference),
        (this.charRefCode = m.REPLACEMENT_CHARACTER);
    else if (this.charRefCode > 1114111)
      this._err(F.characterReferenceOutsideUnicodeRange),
        (this.charRefCode = m.REPLACEMENT_CHARACTER);
    else if (gc(this.charRefCode))
      this._err(F.surrogateCharacterReference),
        (this.charRefCode = m.REPLACEMENT_CHARACTER);
    else if (kc(this.charRefCode)) this._err(F.noncharacterCharacterReference);
    else if (yc(this.charRefCode) || this.charRefCode === m.CARRIAGE_RETURN) {
      this._err(F.controlCharacterReference);
      const a = x7.get(this.charRefCode);
      a !== void 0 && (this.charRefCode = a);
    }
    this._flushCodePointConsumedAsCharacterReference(this.charRefCode),
      this._reconsumeInState(this.returnState, t);
  }
}
const Dc = new Set([
    c.DD,
    c.DT,
    c.LI,
    c.OPTGROUP,
    c.OPTION,
    c.P,
    c.RB,
    c.RP,
    c.RT,
    c.RTC,
  ]),
  ts = new Set([
    ...Dc,
    c.CAPTION,
    c.COLGROUP,
    c.TBODY,
    c.TD,
    c.TFOOT,
    c.TH,
    c.THEAD,
    c.TR,
  ]),
  xa = new Map([
    [c.APPLET, L.HTML],
    [c.CAPTION, L.HTML],
    [c.HTML, L.HTML],
    [c.MARQUEE, L.HTML],
    [c.OBJECT, L.HTML],
    [c.TABLE, L.HTML],
    [c.TD, L.HTML],
    [c.TEMPLATE, L.HTML],
    [c.TH, L.HTML],
    [c.ANNOTATION_XML, L.MATHML],
    [c.MI, L.MATHML],
    [c.MN, L.MATHML],
    [c.MO, L.MATHML],
    [c.MS, L.MATHML],
    [c.MTEXT, L.MATHML],
    [c.DESC, L.SVG],
    [c.FOREIGN_OBJECT, L.SVG],
    [c.TITLE, L.SVG],
  ]),
  N7 = [c.H1, c.H2, c.H3, c.H4, c.H5, c.H6],
  F7 = [c.TR, c.TEMPLATE, c.HTML],
  O7 = [c.TBODY, c.TFOOT, c.THEAD, c.TEMPLATE, c.HTML],
  L7 = [c.TABLE, c.TEMPLATE, c.HTML],
  R7 = [c.TD, c.TH];
class v7 {
  get currentTmplContentOrNode() {
    return this._isInTemplate()
      ? this.treeAdapter.getTemplateContent(this.current)
      : this.current;
  }
  constructor(t, a, r) {
    (this.treeAdapter = a),
      (this.handler = r),
      (this.items = []),
      (this.tagIDs = []),
      (this.stackTop = -1),
      (this.tmplCount = 0),
      (this.currentTagId = c.UNKNOWN),
      (this.current = t);
  }
  _indexOf(t) {
    return this.items.lastIndexOf(t, this.stackTop);
  }
  _isInTemplate() {
    return (
      this.currentTagId === c.TEMPLATE &&
      this.treeAdapter.getNamespaceURI(this.current) === L.HTML
    );
  }
  _updateCurrentElement() {
    (this.current = this.items[this.stackTop]),
      (this.currentTagId = this.tagIDs[this.stackTop]);
  }
  push(t, a) {
    this.stackTop++,
      (this.items[this.stackTop] = t),
      (this.current = t),
      (this.tagIDs[this.stackTop] = a),
      (this.currentTagId = a),
      this._isInTemplate() && this.tmplCount++,
      this.handler.onItemPush(t, a, !0);
  }
  pop() {
    const t = this.current;
    this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--,
      this.stackTop--,
      this._updateCurrentElement(),
      this.handler.onItemPop(t, !0);
  }
  replace(t, a) {
    const r = this._indexOf(t);
    (this.items[r] = a), r === this.stackTop && (this.current = a);
  }
  insertAfter(t, a, r) {
    const n = this._indexOf(t) + 1;
    this.items.splice(n, 0, a),
      this.tagIDs.splice(n, 0, r),
      this.stackTop++,
      n === this.stackTop && this._updateCurrentElement(),
      this.handler.onItemPush(
        this.current,
        this.currentTagId,
        n === this.stackTop,
      );
  }
  popUntilTagNamePopped(t) {
    let a = this.stackTop + 1;
    do a = this.tagIDs.lastIndexOf(t, a - 1);
    while (a > 0 && this.treeAdapter.getNamespaceURI(this.items[a]) !== L.HTML);
    this.shortenToLength(a < 0 ? 0 : a);
  }
  shortenToLength(t) {
    for (; this.stackTop >= t; ) {
      const a = this.current;
      this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1),
        this.stackTop--,
        this._updateCurrentElement(),
        this.handler.onItemPop(a, this.stackTop < t);
    }
  }
  popUntilElementPopped(t) {
    const a = this._indexOf(t);
    this.shortenToLength(a < 0 ? 0 : a);
  }
  popUntilPopped(t, a) {
    const r = this._indexOfTagNames(t, a);
    this.shortenToLength(r < 0 ? 0 : r);
  }
  popUntilNumberedHeaderPopped() {
    this.popUntilPopped(N7, L.HTML);
  }
  popUntilTableCellPopped() {
    this.popUntilPopped(R7, L.HTML);
  }
  popAllUpToHtmlElement() {
    (this.tmplCount = 0), this.shortenToLength(1);
  }
  _indexOfTagNames(t, a) {
    for (let r = this.stackTop; r >= 0; r--)
      if (
        t.includes(this.tagIDs[r]) &&
        this.treeAdapter.getNamespaceURI(this.items[r]) === a
      )
        return r;
    return -1;
  }
  clearBackTo(t, a) {
    const r = this._indexOfTagNames(t, a);
    this.shortenToLength(r + 1);
  }
  clearBackToTableContext() {
    this.clearBackTo(L7, L.HTML);
  }
  clearBackToTableBodyContext() {
    this.clearBackTo(O7, L.HTML);
  }
  clearBackToTableRowContext() {
    this.clearBackTo(F7, L.HTML);
  }
  remove(t) {
    const a = this._indexOf(t);
    a >= 0 &&
      (a === this.stackTop
        ? this.pop()
        : (this.items.splice(a, 1),
          this.tagIDs.splice(a, 1),
          this.stackTop--,
          this._updateCurrentElement(),
          this.handler.onItemPop(t, !1)));
  }
  tryPeekProperlyNestedBodyElement() {
    return this.stackTop >= 1 && this.tagIDs[1] === c.BODY
      ? this.items[1]
      : null;
  }
  contains(t) {
    return this._indexOf(t) > -1;
  }
  getCommonAncestor(t) {
    const a = this._indexOf(t) - 1;
    return a >= 0 ? this.items[a] : null;
  }
  isRootHtmlElementCurrent() {
    return this.stackTop === 0 && this.tagIDs[0] === c.HTML;
  }
  hasInScope(t) {
    for (let a = this.stackTop; a >= 0; a--) {
      const r = this.tagIDs[a],
        n = this.treeAdapter.getNamespaceURI(this.items[a]);
      if (r === t && n === L.HTML) return !0;
      if (xa.get(r) === n) return !1;
    }
    return !0;
  }
  hasNumberedHeaderInScope() {
    for (let t = this.stackTop; t >= 0; t--) {
      const a = this.tagIDs[t],
        r = this.treeAdapter.getNamespaceURI(this.items[t]);
      if (Tc(a) && r === L.HTML) return !0;
      if (xa.get(a) === r) return !1;
    }
    return !0;
  }
  hasInListItemScope(t) {
    for (let a = this.stackTop; a >= 0; a--) {
      const r = this.tagIDs[a],
        n = this.treeAdapter.getNamespaceURI(this.items[a]);
      if (r === t && n === L.HTML) return !0;
      if (((r === c.UL || r === c.OL) && n === L.HTML) || xa.get(r) === n)
        return !1;
    }
    return !0;
  }
  hasInButtonScope(t) {
    for (let a = this.stackTop; a >= 0; a--) {
      const r = this.tagIDs[a],
        n = this.treeAdapter.getNamespaceURI(this.items[a]);
      if (r === t && n === L.HTML) return !0;
      if ((r === c.BUTTON && n === L.HTML) || xa.get(r) === n) return !1;
    }
    return !0;
  }
  hasInTableScope(t) {
    for (let a = this.stackTop; a >= 0; a--) {
      const r = this.tagIDs[a];
      if (this.treeAdapter.getNamespaceURI(this.items[a]) === L.HTML) {
        if (r === t) return !0;
        if (r === c.TABLE || r === c.TEMPLATE || r === c.HTML) return !1;
      }
    }
    return !0;
  }
  hasTableBodyContextInTableScope() {
    for (let t = this.stackTop; t >= 0; t--) {
      const a = this.tagIDs[t];
      if (this.treeAdapter.getNamespaceURI(this.items[t]) === L.HTML) {
        if (a === c.TBODY || a === c.THEAD || a === c.TFOOT) return !0;
        if (a === c.TABLE || a === c.HTML) return !1;
      }
    }
    return !0;
  }
  hasInSelectScope(t) {
    for (let a = this.stackTop; a >= 0; a--) {
      const r = this.tagIDs[a];
      if (this.treeAdapter.getNamespaceURI(this.items[a]) === L.HTML) {
        if (r === t) return !0;
        if (r !== c.OPTION && r !== c.OPTGROUP) return !1;
      }
    }
    return !0;
  }
  generateImpliedEndTags() {
    for (; Dc.has(this.currentTagId); ) this.pop();
  }
  generateImpliedEndTagsThoroughly() {
    for (; ts.has(this.currentTagId); ) this.pop();
  }
  generateImpliedEndTagsWithExclusion(t) {
    for (; this.currentTagId !== t && ts.has(this.currentTagId); ) this.pop();
  }
}
const xr = 3;
var He;
(function (e) {
  (e[(e.Marker = 0)] = "Marker"), (e[(e.Element = 1)] = "Element");
})((He = He || (He = {})));
const as = {
  type: He.Marker,
};
class B7 {
  constructor(t) {
    (this.treeAdapter = t), (this.entries = []), (this.bookmark = null);
  }
  _getNoahArkConditionCandidates(t, a) {
    const r = [],
      n = a.length,
      s = this.treeAdapter.getTagName(t),
      i = this.treeAdapter.getNamespaceURI(t);
    for (let o = 0; o < this.entries.length; o++) {
      const u = this.entries[o];
      if (u.type === He.Marker) break;
      const { element: l } = u;
      if (
        this.treeAdapter.getTagName(l) === s &&
        this.treeAdapter.getNamespaceURI(l) === i
      ) {
        const p = this.treeAdapter.getAttrList(l);
        p.length === n &&
          r.push({
            idx: o,
            attrs: p,
          });
      }
    }
    return r;
  }
  _ensureNoahArkCondition(t) {
    if (this.entries.length < xr) return;
    const a = this.treeAdapter.getAttrList(t),
      r = this._getNoahArkConditionCandidates(t, a);
    if (r.length < xr) return;
    const n = new Map(a.map((i) => [i.name, i.value]));
    let s = 0;
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      o.attrs.every((u) => n.get(u.name) === u.value) &&
        ((s += 1), s >= xr && this.entries.splice(o.idx, 1));
    }
  }
  insertMarker() {
    this.entries.unshift(as);
  }
  pushElement(t, a) {
    this._ensureNoahArkCondition(t),
      this.entries.unshift({
        type: He.Element,
        element: t,
        token: a,
      });
  }
  insertElementAfterBookmark(t, a) {
    const r = this.entries.indexOf(this.bookmark);
    this.entries.splice(r, 0, {
      type: He.Element,
      element: t,
      token: a,
    });
  }
  removeEntry(t) {
    const a = this.entries.indexOf(t);
    a >= 0 && this.entries.splice(a, 1);
  }
  clearToLastMarker() {
    const t = this.entries.indexOf(as);
    t >= 0 ? this.entries.splice(0, t + 1) : (this.entries.length = 0);
  }
  getElementEntryInScopeWithTagName(t) {
    const a = this.entries.find(
      (r) =>
        r.type === He.Marker || this.treeAdapter.getTagName(r.element) === t,
    );
    return a && a.type === He.Element ? a : null;
  }
  getElementEntry(t) {
    return this.entries.find((a) => a.type === He.Element && a.element === t);
  }
}
function rs(e) {
  return {
    nodeName: "#text",
    value: e,
    parentNode: null,
  };
}
const Rt = {
    createDocument() {
      return {
        nodeName: "#document",
        mode: Ie.NO_QUIRKS,
        childNodes: [],
      };
    },
    createDocumentFragment() {
      return {
        nodeName: "#document-fragment",
        childNodes: [],
      };
    },
    createElement(e, t, a) {
      return {
        nodeName: e,
        tagName: e,
        attrs: a,
        namespaceURI: t,
        childNodes: [],
        parentNode: null,
      };
    },
    createCommentNode(e) {
      return {
        nodeName: "#comment",
        data: e,
        parentNode: null,
      };
    },
    appendChild(e, t) {
      e.childNodes.push(t), (t.parentNode = e);
    },
    insertBefore(e, t, a) {
      const r = e.childNodes.indexOf(a);
      e.childNodes.splice(r, 0, t), (t.parentNode = e);
    },
    setTemplateContent(e, t) {
      e.content = t;
    },
    getTemplateContent(e) {
      return e.content;
    },
    setDocumentType(e, t, a, r) {
      const n = e.childNodes.find((s) => s.nodeName === "#documentType");
      if (n) (n.name = t), (n.publicId = a), (n.systemId = r);
      else {
        const s = {
          nodeName: "#documentType",
          name: t,
          publicId: a,
          systemId: r,
          parentNode: null,
        };
        Rt.appendChild(e, s);
      }
    },
    setDocumentMode(e, t) {
      e.mode = t;
    },
    getDocumentMode(e) {
      return e.mode;
    },
    detachNode(e) {
      if (e.parentNode) {
        const t = e.parentNode.childNodes.indexOf(e);
        e.parentNode.childNodes.splice(t, 1), (e.parentNode = null);
      }
    },
    insertText(e, t) {
      if (e.childNodes.length > 0) {
        const a = e.childNodes[e.childNodes.length - 1];
        if (Rt.isTextNode(a)) {
          a.value += t;
          return;
        }
      }
      Rt.appendChild(e, rs(t));
    },
    insertTextBefore(e, t, a) {
      const r = e.childNodes[e.childNodes.indexOf(a) - 1];
      r && Rt.isTextNode(r) ? (r.value += t) : Rt.insertBefore(e, rs(t), a);
    },
    adoptAttributes(e, t) {
      const a = new Set(e.attrs.map((r) => r.name));
      for (let r = 0; r < t.length; r++) a.has(t[r].name) || e.attrs.push(t[r]);
    },
    getFirstChild(e) {
      return e.childNodes[0];
    },
    getChildNodes(e) {
      return e.childNodes;
    },
    getParentNode(e) {
      return e.parentNode;
    },
    getAttrList(e) {
      return e.attrs;
    },
    getTagName(e) {
      return e.tagName;
    },
    getNamespaceURI(e) {
      return e.namespaceURI;
    },
    getTextNodeContent(e) {
      return e.value;
    },
    getCommentNodeContent(e) {
      return e.data;
    },
    getDocumentTypeNodeName(e) {
      return e.name;
    },
    getDocumentTypeNodePublicId(e) {
      return e.publicId;
    },
    getDocumentTypeNodeSystemId(e) {
      return e.systemId;
    },
    isTextNode(e) {
      return e.nodeName === "#text";
    },
    isCommentNode(e) {
      return e.nodeName === "#comment";
    },
    isDocumentTypeNode(e) {
      return e.nodeName === "#documentType";
    },
    isElementNode(e) {
      return Object.prototype.hasOwnProperty.call(e, "tagName");
    },
    setNodeSourceCodeLocation(e, t) {
      e.sourceCodeLocation = t;
    },
    getNodeSourceCodeLocation(e) {
      return e.sourceCodeLocation;
    },
    updateNodeSourceCodeLocation(e, t) {
      e.sourceCodeLocation = {
        ...e.sourceCodeLocation,
        ...t,
      };
    },
  },
  zc = "html",
  P7 = "about:legacy-compat",
  M7 = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",
  Ic = [
    "+//silmaril//dtd html pro v0r11 19970101//",
    "-//as//dtd html 3.0 aswedit + extensions//",
    "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
    "-//ietf//dtd html 2.0 level 1//",
    "-//ietf//dtd html 2.0 level 2//",
    "-//ietf//dtd html 2.0 strict level 1//",
    "-//ietf//dtd html 2.0 strict level 2//",
    "-//ietf//dtd html 2.0 strict//",
    "-//ietf//dtd html 2.0//",
    "-//ietf//dtd html 2.1e//",
    "-//ietf//dtd html 3.0//",
    "-//ietf//dtd html 3.2 final//",
    "-//ietf//dtd html 3.2//",
    "-//ietf//dtd html 3//",
    "-//ietf//dtd html level 0//",
    "-//ietf//dtd html level 1//",
    "-//ietf//dtd html level 2//",
    "-//ietf//dtd html level 3//",
    "-//ietf//dtd html strict level 0//",
    "-//ietf//dtd html strict level 1//",
    "-//ietf//dtd html strict level 2//",
    "-//ietf//dtd html strict level 3//",
    "-//ietf//dtd html strict//",
    "-//ietf//dtd html//",
    "-//metrius//dtd metrius presentational//",
    "-//microsoft//dtd internet explorer 2.0 html strict//",
    "-//microsoft//dtd internet explorer 2.0 html//",
    "-//microsoft//dtd internet explorer 2.0 tables//",
    "-//microsoft//dtd internet explorer 3.0 html strict//",
    "-//microsoft//dtd internet explorer 3.0 html//",
    "-//microsoft//dtd internet explorer 3.0 tables//",
    "-//netscape comm. corp.//dtd html//",
    "-//netscape comm. corp.//dtd strict html//",
    "-//o'reilly and associates//dtd html 2.0//",
    "-//o'reilly and associates//dtd html extended 1.0//",
    "-//o'reilly and associates//dtd html extended relaxed 1.0//",
    "-//sq//dtd html 2.0 hotmetal + extensions//",
    "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
    "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
    "-//spyglass//dtd html 2.0 extended//",
    "-//sun microsystems corp.//dtd hotjava html//",
    "-//sun microsystems corp.//dtd hotjava strict html//",
    "-//w3c//dtd html 3 1995-03-24//",
    "-//w3c//dtd html 3.2 draft//",
    "-//w3c//dtd html 3.2 final//",
    "-//w3c//dtd html 3.2//",
    "-//w3c//dtd html 3.2s draft//",
    "-//w3c//dtd html 4.0 frameset//",
    "-//w3c//dtd html 4.0 transitional//",
    "-//w3c//dtd html experimental 19960712//",
    "-//w3c//dtd html experimental 970421//",
    "-//w3c//dtd w3 html//",
    "-//w3o//dtd w3 html 3.0//",
    "-//webtechs//dtd mozilla html 2.0//",
    "-//webtechs//dtd mozilla html//",
  ],
  H7 = [
    ...Ic,
    "-//w3c//dtd html 4.01 frameset//",
    "-//w3c//dtd html 4.01 transitional//",
  ],
  U7 = new Set([
    "-//w3o//dtd w3 html strict 3.0//en//",
    "-/w3c/dtd html 4.0 transitional/en",
    "html",
  ]),
  Sc = [
    "-//w3c//dtd xhtml 1.0 frameset//",
    "-//w3c//dtd xhtml 1.0 transitional//",
  ],
  j7 = [
    ...Sc,
    "-//w3c//dtd html 4.01 frameset//",
    "-//w3c//dtd html 4.01 transitional//",
  ];
function ns(e, t) {
  return t.some((a) => e.startsWith(a));
}
function q7(e) {
  return (
    e.name === zc &&
    e.publicId === null &&
    (e.systemId === null || e.systemId === P7)
  );
}
function Y7(e) {
  if (e.name !== zc) return Ie.QUIRKS;
  const { systemId: t } = e;
  if (t && t.toLowerCase() === M7) return Ie.QUIRKS;
  let { publicId: a } = e;
  if (a !== null) {
    if (((a = a.toLowerCase()), U7.has(a))) return Ie.QUIRKS;
    let r = t === null ? H7 : Ic;
    if (ns(a, r)) return Ie.QUIRKS;
    if (((r = t === null ? Sc : j7), ns(a, r))) return Ie.LIMITED_QUIRKS;
  }
  return Ie.NO_QUIRKS;
}
const is = {
    TEXT_HTML: "text/html",
    APPLICATION_XML: "application/xhtml+xml",
  },
  $7 = "definitionurl",
  V7 = "definitionURL",
  W7 = new Map(
    [
      "attributeName",
      "attributeType",
      "baseFrequency",
      "baseProfile",
      "calcMode",
      "clipPathUnits",
      "diffuseConstant",
      "edgeMode",
      "filterUnits",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "kernelMatrix",
      "kernelUnitLength",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "limitingConeAngle",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "maskContentUnits",
      "maskUnits",
      "numOctaves",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "refX",
      "refY",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "startOffset",
      "stdDeviation",
      "stitchTiles",
      "surfaceScale",
      "systemLanguage",
      "tableValues",
      "targetX",
      "targetY",
      "textLength",
      "viewBox",
      "viewTarget",
      "xChannelSelector",
      "yChannelSelector",
      "zoomAndPan",
    ].map((e) => [e.toLowerCase(), e]),
  ),
  G7 = new Map([
    [
      "xlink:actuate",
      {
        prefix: "xlink",
        name: "actuate",
        namespace: L.XLINK,
      },
    ],
    [
      "xlink:arcrole",
      {
        prefix: "xlink",
        name: "arcrole",
        namespace: L.XLINK,
      },
    ],
    [
      "xlink:href",
      {
        prefix: "xlink",
        name: "href",
        namespace: L.XLINK,
      },
    ],
    [
      "xlink:role",
      {
        prefix: "xlink",
        name: "role",
        namespace: L.XLINK,
      },
    ],
    [
      "xlink:show",
      {
        prefix: "xlink",
        name: "show",
        namespace: L.XLINK,
      },
    ],
    [
      "xlink:title",
      {
        prefix: "xlink",
        name: "title",
        namespace: L.XLINK,
      },
    ],
    [
      "xlink:type",
      {
        prefix: "xlink",
        name: "type",
        namespace: L.XLINK,
      },
    ],
    [
      "xml:base",
      {
        prefix: "xml",
        name: "base",
        namespace: L.XML,
      },
    ],
    [
      "xml:lang",
      {
        prefix: "xml",
        name: "lang",
        namespace: L.XML,
      },
    ],
    [
      "xml:space",
      {
        prefix: "xml",
        name: "space",
        namespace: L.XML,
      },
    ],
    [
      "xmlns",
      {
        prefix: "",
        name: "xmlns",
        namespace: L.XMLNS,
      },
    ],
    [
      "xmlns:xlink",
      {
        prefix: "xmlns",
        name: "xlink",
        namespace: L.XMLNS,
      },
    ],
  ]),
  Q7 = new Map(
    [
      "altGlyph",
      "altGlyphDef",
      "altGlyphItem",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "glyphRef",
      "linearGradient",
      "radialGradient",
      "textPath",
    ].map((e) => [e.toLowerCase(), e]),
  ),
  X7 = new Set([
    c.B,
    c.BIG,
    c.BLOCKQUOTE,
    c.BODY,
    c.BR,
    c.CENTER,
    c.CODE,
    c.DD,
    c.DIV,
    c.DL,
    c.DT,
    c.EM,
    c.EMBED,
    c.H1,
    c.H2,
    c.H3,
    c.H4,
    c.H5,
    c.H6,
    c.HEAD,
    c.HR,
    c.I,
    c.IMG,
    c.LI,
    c.LISTING,
    c.MENU,
    c.META,
    c.NOBR,
    c.OL,
    c.P,
    c.PRE,
    c.RUBY,
    c.S,
    c.SMALL,
    c.SPAN,
    c.STRONG,
    c.STRIKE,
    c.SUB,
    c.SUP,
    c.TABLE,
    c.TT,
    c.U,
    c.UL,
    c.VAR,
  ]);
function K7(e) {
  const t = e.tagID;
  return (
    (t === c.FONT &&
      e.attrs.some(
        ({ name: r }) => r === lt.COLOR || r === lt.SIZE || r === lt.FACE,
      )) ||
    X7.has(t)
  );
}
function Nc(e) {
  for (let t = 0; t < e.attrs.length; t++)
    if (e.attrs[t].name === $7) {
      e.attrs[t].name = V7;
      break;
    }
}
function Fc(e) {
  for (let t = 0; t < e.attrs.length; t++) {
    const a = W7.get(e.attrs[t].name);
    a != null && (e.attrs[t].name = a);
  }
}
function xn(e) {
  for (let t = 0; t < e.attrs.length; t++) {
    const a = G7.get(e.attrs[t].name);
    a &&
      ((e.attrs[t].prefix = a.prefix),
      (e.attrs[t].name = a.name),
      (e.attrs[t].namespace = a.namespace));
  }
}
function J7(e) {
  const t = Q7.get(e.tagName);
  t != null && ((e.tagName = t), (e.tagID = jt(e.tagName)));
}
function Z7(e, t) {
  return (
    t === L.MATHML &&
    (e === c.MI || e === c.MO || e === c.MN || e === c.MS || e === c.MTEXT)
  );
}
function eH(e, t, a) {
  if (t === L.MATHML && e === c.ANNOTATION_XML) {
    for (let r = 0; r < a.length; r++)
      if (a[r].name === lt.ENCODING) {
        const n = a[r].value.toLowerCase();
        return n === is.TEXT_HTML || n === is.APPLICATION_XML;
      }
  }
  return (
    t === L.SVG && (e === c.FOREIGN_OBJECT || e === c.DESC || e === c.TITLE)
  );
}
function tH(e, t, a, r) {
  return (
    ((!r || r === L.HTML) && eH(e, t, a)) ||
    ((!r || r === L.MATHML) && Z7(e, t))
  );
}
const aH = "hidden",
  rH = 8,
  nH = 3;
var k;
(function (e) {
  (e[(e.INITIAL = 0)] = "INITIAL"),
    (e[(e.BEFORE_HTML = 1)] = "BEFORE_HTML"),
    (e[(e.BEFORE_HEAD = 2)] = "BEFORE_HEAD"),
    (e[(e.IN_HEAD = 3)] = "IN_HEAD"),
    (e[(e.IN_HEAD_NO_SCRIPT = 4)] = "IN_HEAD_NO_SCRIPT"),
    (e[(e.AFTER_HEAD = 5)] = "AFTER_HEAD"),
    (e[(e.IN_BODY = 6)] = "IN_BODY"),
    (e[(e.TEXT = 7)] = "TEXT"),
    (e[(e.IN_TABLE = 8)] = "IN_TABLE"),
    (e[(e.IN_TABLE_TEXT = 9)] = "IN_TABLE_TEXT"),
    (e[(e.IN_CAPTION = 10)] = "IN_CAPTION"),
    (e[(e.IN_COLUMN_GROUP = 11)] = "IN_COLUMN_GROUP"),
    (e[(e.IN_TABLE_BODY = 12)] = "IN_TABLE_BODY"),
    (e[(e.IN_ROW = 13)] = "IN_ROW"),
    (e[(e.IN_CELL = 14)] = "IN_CELL"),
    (e[(e.IN_SELECT = 15)] = "IN_SELECT"),
    (e[(e.IN_SELECT_IN_TABLE = 16)] = "IN_SELECT_IN_TABLE"),
    (e[(e.IN_TEMPLATE = 17)] = "IN_TEMPLATE"),
    (e[(e.AFTER_BODY = 18)] = "AFTER_BODY"),
    (e[(e.IN_FRAMESET = 19)] = "IN_FRAMESET"),
    (e[(e.AFTER_FRAMESET = 20)] = "AFTER_FRAMESET"),
    (e[(e.AFTER_AFTER_BODY = 21)] = "AFTER_AFTER_BODY"),
    (e[(e.AFTER_AFTER_FRAMESET = 22)] = "AFTER_AFTER_FRAMESET");
})(k || (k = {}));
const iH = {
    startLine: -1,
    startCol: -1,
    startOffset: -1,
    endLine: -1,
    endCol: -1,
    endOffset: -1,
  },
  Oc = new Set([c.TABLE, c.TBODY, c.TFOOT, c.THEAD, c.TR]),
  ss = {
    scriptingEnabled: !0,
    sourceCodeLocationInfo: !1,
    treeAdapter: Rt,
    onParseError: null,
  };
class os {
  constructor(t, a, r = null, n = null) {
    (this.fragmentContext = r),
      (this.scriptHandler = n),
      (this.currentToken = null),
      (this.stopped = !1),
      (this.insertionMode = k.INITIAL),
      (this.originalInsertionMode = k.INITIAL),
      (this.headElement = null),
      (this.formElement = null),
      (this.currentNotInHTML = !1),
      (this.tmplInsertionModeStack = []),
      (this.pendingCharacterTokens = []),
      (this.hasNonWhitespacePendingCharacterToken = !1),
      (this.framesetOk = !0),
      (this.skipNextNewLine = !1),
      (this.fosterParentingEnabled = !1),
      (this.options = {
        ...ss,
        ...t,
      }),
      (this.treeAdapter = this.options.treeAdapter),
      (this.onParseError = this.options.onParseError),
      this.onParseError && (this.options.sourceCodeLocationInfo = !0),
      (this.document = a ?? this.treeAdapter.createDocument()),
      (this.tokenizer = new S7(this.options, this)),
      (this.activeFormattingElements = new B7(this.treeAdapter)),
      (this.fragmentContextID = r
        ? jt(this.treeAdapter.getTagName(r))
        : c.UNKNOWN),
      this._setContextModes(r ?? this.document, this.fragmentContextID),
      (this.openElements = new v7(this.document, this.treeAdapter, this));
  }
  static parse(t, a) {
    const r = new this(a);
    return r.tokenizer.write(t, !0), r.document;
  }
  static getFragmentParser(t, a) {
    const r = {
      ...ss,
      ...a,
    };
    t ?? (t = r.treeAdapter.createElement(x.TEMPLATE, L.HTML, []));
    const n = r.treeAdapter.createElement("documentmock", L.HTML, []),
      s = new this(r, n, t);
    return (
      s.fragmentContextID === c.TEMPLATE &&
        s.tmplInsertionModeStack.unshift(k.IN_TEMPLATE),
      s._initTokenizerForFragmentParsing(),
      s._insertFakeRootElement(),
      s._resetInsertionMode(),
      s._findFormInFragmentContext(),
      s
    );
  }
  getFragment() {
    const t = this.treeAdapter.getFirstChild(this.document),
      a = this.treeAdapter.createDocumentFragment();
    return this._adoptNodes(t, a), a;
  }
  _err(t, a, r) {
    var n;
    if (!this.onParseError) return;
    const s = (n = t.location) !== null && n !== void 0 ? n : iH,
      i = {
        code: a,
        startLine: s.startLine,
        startCol: s.startCol,
        startOffset: s.startOffset,
        endLine: r ? s.startLine : s.endLine,
        endCol: r ? s.startCol : s.endCol,
        endOffset: r ? s.startOffset : s.endOffset,
      };
    this.onParseError(i);
  }
  onItemPush(t, a, r) {
    var n, s;
    (s = (n = this.treeAdapter).onItemPush) === null ||
      s === void 0 ||
      s.call(n, t),
      r && this.openElements.stackTop > 0 && this._setContextModes(t, a);
  }
  onItemPop(t, a) {
    var r, n;
    if (
      (this.options.sourceCodeLocationInfo &&
        this._setEndLocation(t, this.currentToken),
      (n = (r = this.treeAdapter).onItemPop) === null ||
        n === void 0 ||
        n.call(r, t, this.openElements.current),
      a)
    ) {
      let s, i;
      this.openElements.stackTop === 0 && this.fragmentContext
        ? ((s = this.fragmentContext), (i = this.fragmentContextID))
        : ({ current: s, currentTagId: i } = this.openElements),
        this._setContextModes(s, i);
    }
  }
  _setContextModes(t, a) {
    const r =
      t === this.document || this.treeAdapter.getNamespaceURI(t) === L.HTML;
    (this.currentNotInHTML = !r),
      (this.tokenizer.inForeignNode = !r && !this._isIntegrationPoint(a, t));
  }
  _switchToTextParsing(t, a) {
    this._insertElement(t, L.HTML),
      (this.tokenizer.state = a),
      (this.originalInsertionMode = this.insertionMode),
      (this.insertionMode = k.TEXT);
  }
  switchToPlaintextParsing() {
    (this.insertionMode = k.TEXT),
      (this.originalInsertionMode = k.IN_BODY),
      (this.tokenizer.state = fe.PLAINTEXT);
  }
  _getAdjustedCurrentElement() {
    return this.openElements.stackTop === 0 && this.fragmentContext
      ? this.fragmentContext
      : this.openElements.current;
  }
  _findFormInFragmentContext() {
    let t = this.fragmentContext;
    for (; t; ) {
      if (this.treeAdapter.getTagName(t) === x.FORM) {
        this.formElement = t;
        break;
      }
      t = this.treeAdapter.getParentNode(t);
    }
  }
  _initTokenizerForFragmentParsing() {
    if (
      !(
        !this.fragmentContext ||
        this.treeAdapter.getNamespaceURI(this.fragmentContext) !== L.HTML
      )
    )
      switch (this.fragmentContextID) {
        case c.TITLE:
        case c.TEXTAREA: {
          this.tokenizer.state = fe.RCDATA;
          break;
        }
        case c.STYLE:
        case c.XMP:
        case c.IFRAME:
        case c.NOEMBED:
        case c.NOFRAMES:
        case c.NOSCRIPT: {
          this.tokenizer.state = fe.RAWTEXT;
          break;
        }
        case c.SCRIPT: {
          this.tokenizer.state = fe.SCRIPT_DATA;
          break;
        }
        case c.PLAINTEXT: {
          this.tokenizer.state = fe.PLAINTEXT;
          break;
        }
      }
  }
  _setDocumentType(t) {
    const a = t.name || "",
      r = t.publicId || "",
      n = t.systemId || "";
    if (
      (this.treeAdapter.setDocumentType(this.document, a, r, n), t.location)
    ) {
      const i = this.treeAdapter
        .getChildNodes(this.document)
        .find((o) => this.treeAdapter.isDocumentTypeNode(o));
      i && this.treeAdapter.setNodeSourceCodeLocation(i, t.location);
    }
  }
  _attachElementToTree(t, a) {
    if (this.options.sourceCodeLocationInfo) {
      const r = a && {
        ...a,
        startTag: a,
      };
      this.treeAdapter.setNodeSourceCodeLocation(t, r);
    }
    if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(t);
    else {
      const r = this.openElements.currentTmplContentOrNode;
      this.treeAdapter.appendChild(r, t);
    }
  }
  _appendElement(t, a) {
    const r = this.treeAdapter.createElement(t.tagName, a, t.attrs);
    this._attachElementToTree(r, t.location);
  }
  _insertElement(t, a) {
    const r = this.treeAdapter.createElement(t.tagName, a, t.attrs);
    this._attachElementToTree(r, t.location),
      this.openElements.push(r, t.tagID);
  }
  _insertFakeElement(t, a) {
    const r = this.treeAdapter.createElement(t, L.HTML, []);
    this._attachElementToTree(r, null), this.openElements.push(r, a);
  }
  _insertTemplate(t) {
    const a = this.treeAdapter.createElement(t.tagName, L.HTML, t.attrs),
      r = this.treeAdapter.createDocumentFragment();
    this.treeAdapter.setTemplateContent(a, r),
      this._attachElementToTree(a, t.location),
      this.openElements.push(a, t.tagID),
      this.options.sourceCodeLocationInfo &&
        this.treeAdapter.setNodeSourceCodeLocation(r, null);
  }
  _insertFakeRootElement() {
    const t = this.treeAdapter.createElement(x.HTML, L.HTML, []);
    this.options.sourceCodeLocationInfo &&
      this.treeAdapter.setNodeSourceCodeLocation(t, null),
      this.treeAdapter.appendChild(this.openElements.current, t),
      this.openElements.push(t, c.HTML);
  }
  _appendCommentNode(t, a) {
    const r = this.treeAdapter.createCommentNode(t.data);
    this.treeAdapter.appendChild(a, r),
      this.options.sourceCodeLocationInfo &&
        this.treeAdapter.setNodeSourceCodeLocation(r, t.location);
  }
  _insertCharacters(t) {
    let a, r;
    if (
      (this._shouldFosterParentOnInsertion()
        ? (({ parent: a, beforeElement: r } =
            this._findFosterParentingLocation()),
          r
            ? this.treeAdapter.insertTextBefore(a, t.chars, r)
            : this.treeAdapter.insertText(a, t.chars))
        : ((a = this.openElements.currentTmplContentOrNode),
          this.treeAdapter.insertText(a, t.chars)),
      !t.location)
    )
      return;
    const n = this.treeAdapter.getChildNodes(a),
      s = r ? n.lastIndexOf(r) : n.length,
      i = n[s - 1];
    if (this.treeAdapter.getNodeSourceCodeLocation(i)) {
      const { endLine: u, endCol: l, endOffset: p } = t.location;
      this.treeAdapter.updateNodeSourceCodeLocation(i, {
        endLine: u,
        endCol: l,
        endOffset: p,
      });
    } else
      this.options.sourceCodeLocationInfo &&
        this.treeAdapter.setNodeSourceCodeLocation(i, t.location);
  }
  _adoptNodes(t, a) {
    for (
      let r = this.treeAdapter.getFirstChild(t);
      r;
      r = this.treeAdapter.getFirstChild(t)
    )
      this.treeAdapter.detachNode(r), this.treeAdapter.appendChild(a, r);
  }
  _setEndLocation(t, a) {
    if (this.treeAdapter.getNodeSourceCodeLocation(t) && a.location) {
      const r = a.location,
        n = this.treeAdapter.getTagName(t),
        s =
          a.type === ee.END_TAG && n === a.tagName
            ? {
                endTag: {
                  ...r,
                },
                endLine: r.endLine,
                endCol: r.endCol,
                endOffset: r.endOffset,
              }
            : {
                endLine: r.startLine,
                endCol: r.startCol,
                endOffset: r.startOffset,
              };
      this.treeAdapter.updateNodeSourceCodeLocation(t, s);
    }
  }
  shouldProcessStartTagTokenInForeignContent(t) {
    if (!this.currentNotInHTML) return !1;
    let a, r;
    return (
      this.openElements.stackTop === 0 && this.fragmentContext
        ? ((a = this.fragmentContext), (r = this.fragmentContextID))
        : ({ current: a, currentTagId: r } = this.openElements),
      t.tagID === c.SVG &&
      this.treeAdapter.getTagName(a) === x.ANNOTATION_XML &&
      this.treeAdapter.getNamespaceURI(a) === L.MATHML
        ? !1
        : this.tokenizer.inForeignNode ||
          ((t.tagID === c.MGLYPH || t.tagID === c.MALIGNMARK) &&
            !this._isIntegrationPoint(r, a, L.HTML))
    );
  }
  _processToken(t) {
    switch (t.type) {
      case ee.CHARACTER: {
        this.onCharacter(t);
        break;
      }
      case ee.NULL_CHARACTER: {
        this.onNullCharacter(t);
        break;
      }
      case ee.COMMENT: {
        this.onComment(t);
        break;
      }
      case ee.DOCTYPE: {
        this.onDoctype(t);
        break;
      }
      case ee.START_TAG: {
        this._processStartTag(t);
        break;
      }
      case ee.END_TAG: {
        this.onEndTag(t);
        break;
      }
      case ee.EOF: {
        this.onEof(t);
        break;
      }
      case ee.WHITESPACE_CHARACTER: {
        this.onWhitespaceCharacter(t);
        break;
      }
    }
  }
  _isIntegrationPoint(t, a, r) {
    const n = this.treeAdapter.getNamespaceURI(a),
      s = this.treeAdapter.getAttrList(a);
    return tH(t, n, s, r);
  }
  _reconstructActiveFormattingElements() {
    const t = this.activeFormattingElements.entries.length;
    if (t) {
      const a = this.activeFormattingElements.entries.findIndex(
          (n) => n.type === He.Marker || this.openElements.contains(n.element),
        ),
        r = a < 0 ? t - 1 : a - 1;
      for (let n = r; n >= 0; n--) {
        const s = this.activeFormattingElements.entries[n];
        this._insertElement(
          s.token,
          this.treeAdapter.getNamespaceURI(s.element),
        ),
          (s.element = this.openElements.current);
      }
    }
  }
  _closeTableCell() {
    this.openElements.generateImpliedEndTags(),
      this.openElements.popUntilTableCellPopped(),
      this.activeFormattingElements.clearToLastMarker(),
      (this.insertionMode = k.IN_ROW);
  }
  _closePElement() {
    this.openElements.generateImpliedEndTagsWithExclusion(c.P),
      this.openElements.popUntilTagNamePopped(c.P);
  }
  _resetInsertionMode() {
    for (let t = this.openElements.stackTop; t >= 0; t--)
      switch (
        t === 0 && this.fragmentContext
          ? this.fragmentContextID
          : this.openElements.tagIDs[t]
      ) {
        case c.TR: {
          this.insertionMode = k.IN_ROW;
          return;
        }
        case c.TBODY:
        case c.THEAD:
        case c.TFOOT: {
          this.insertionMode = k.IN_TABLE_BODY;
          return;
        }
        case c.CAPTION: {
          this.insertionMode = k.IN_CAPTION;
          return;
        }
        case c.COLGROUP: {
          this.insertionMode = k.IN_COLUMN_GROUP;
          return;
        }
        case c.TABLE: {
          this.insertionMode = k.IN_TABLE;
          return;
        }
        case c.BODY: {
          this.insertionMode = k.IN_BODY;
          return;
        }
        case c.FRAMESET: {
          this.insertionMode = k.IN_FRAMESET;
          return;
        }
        case c.SELECT: {
          this._resetInsertionModeForSelect(t);
          return;
        }
        case c.TEMPLATE: {
          this.insertionMode = this.tmplInsertionModeStack[0];
          return;
        }
        case c.HTML: {
          this.insertionMode = this.headElement ? k.AFTER_HEAD : k.BEFORE_HEAD;
          return;
        }
        case c.TD:
        case c.TH: {
          if (t > 0) {
            this.insertionMode = k.IN_CELL;
            return;
          }
          break;
        }
        case c.HEAD: {
          if (t > 0) {
            this.insertionMode = k.IN_HEAD;
            return;
          }
          break;
        }
      }
    this.insertionMode = k.IN_BODY;
  }
  _resetInsertionModeForSelect(t) {
    if (t > 0)
      for (let a = t - 1; a > 0; a--) {
        const r = this.openElements.tagIDs[a];
        if (r === c.TEMPLATE) break;
        if (r === c.TABLE) {
          this.insertionMode = k.IN_SELECT_IN_TABLE;
          return;
        }
      }
    this.insertionMode = k.IN_SELECT;
  }
  _isElementCausesFosterParenting(t) {
    return Oc.has(t);
  }
  _shouldFosterParentOnInsertion() {
    return (
      this.fosterParentingEnabled &&
      this._isElementCausesFosterParenting(this.openElements.currentTagId)
    );
  }
  _findFosterParentingLocation() {
    for (let t = this.openElements.stackTop; t >= 0; t--) {
      const a = this.openElements.items[t];
      switch (this.openElements.tagIDs[t]) {
        case c.TEMPLATE: {
          if (this.treeAdapter.getNamespaceURI(a) === L.HTML)
            return {
              parent: this.treeAdapter.getTemplateContent(a),
              beforeElement: null,
            };
          break;
        }
        case c.TABLE: {
          const r = this.treeAdapter.getParentNode(a);
          return r
            ? {
                parent: r,
                beforeElement: a,
              }
            : {
                parent: this.openElements.items[t - 1],
                beforeElement: null,
              };
        }
      }
    }
    return {
      parent: this.openElements.items[0],
      beforeElement: null,
    };
  }
  _fosterParentElement(t) {
    const a = this._findFosterParentingLocation();
    a.beforeElement
      ? this.treeAdapter.insertBefore(a.parent, t, a.beforeElement)
      : this.treeAdapter.appendChild(a.parent, t);
  }
  _isSpecialElement(t, a) {
    const r = this.treeAdapter.getNamespaceURI(t);
    return C7[r].has(a);
  }
  onCharacter(t) {
    if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)) {
      RU(this, t);
      return;
    }
    switch (this.insertionMode) {
      case k.INITIAL: {
        Qt(this, t);
        break;
      }
      case k.BEFORE_HTML: {
        ta(this, t);
        break;
      }
      case k.BEFORE_HEAD: {
        aa(this, t);
        break;
      }
      case k.IN_HEAD: {
        ra(this, t);
        break;
      }
      case k.IN_HEAD_NO_SCRIPT: {
        na(this, t);
        break;
      }
      case k.AFTER_HEAD: {
        ia(this, t);
        break;
      }
      case k.IN_BODY:
      case k.IN_CAPTION:
      case k.IN_CELL:
      case k.IN_TEMPLATE: {
        Rc(this, t);
        break;
      }
      case k.TEXT:
      case k.IN_SELECT:
      case k.IN_SELECT_IN_TABLE: {
        this._insertCharacters(t);
        break;
      }
      case k.IN_TABLE:
      case k.IN_TABLE_BODY:
      case k.IN_ROW: {
        Dr(this, t);
        break;
      }
      case k.IN_TABLE_TEXT: {
        Uc(this, t);
        break;
      }
      case k.IN_COLUMN_GROUP: {
        Ya(this, t);
        break;
      }
      case k.AFTER_BODY: {
        $a(this, t);
        break;
      }
      case k.AFTER_AFTER_BODY: {
        Na(this, t);
        break;
      }
    }
  }
  onNullCharacter(t) {
    if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)) {
      LU(this, t);
      return;
    }
    switch (this.insertionMode) {
      case k.INITIAL: {
        Qt(this, t);
        break;
      }
      case k.BEFORE_HTML: {
        ta(this, t);
        break;
      }
      case k.BEFORE_HEAD: {
        aa(this, t);
        break;
      }
      case k.IN_HEAD: {
        ra(this, t);
        break;
      }
      case k.IN_HEAD_NO_SCRIPT: {
        na(this, t);
        break;
      }
      case k.AFTER_HEAD: {
        ia(this, t);
        break;
      }
      case k.TEXT: {
        this._insertCharacters(t);
        break;
      }
      case k.IN_TABLE:
      case k.IN_TABLE_BODY:
      case k.IN_ROW: {
        Dr(this, t);
        break;
      }
      case k.IN_COLUMN_GROUP: {
        Ya(this, t);
        break;
      }
      case k.AFTER_BODY: {
        $a(this, t);
        break;
      }
      case k.AFTER_AFTER_BODY: {
        Na(this, t);
        break;
      }
    }
  }
  onComment(t) {
    if (((this.skipNextNewLine = !1), this.currentNotInHTML)) {
      Kr(this, t);
      return;
    }
    switch (this.insertionMode) {
      case k.INITIAL:
      case k.BEFORE_HTML:
      case k.BEFORE_HEAD:
      case k.IN_HEAD:
      case k.IN_HEAD_NO_SCRIPT:
      case k.AFTER_HEAD:
      case k.IN_BODY:
      case k.IN_TABLE:
      case k.IN_CAPTION:
      case k.IN_COLUMN_GROUP:
      case k.IN_TABLE_BODY:
      case k.IN_ROW:
      case k.IN_CELL:
      case k.IN_SELECT:
      case k.IN_SELECT_IN_TABLE:
      case k.IN_TEMPLATE:
      case k.IN_FRAMESET:
      case k.AFTER_FRAMESET: {
        Kr(this, t);
        break;
      }
      case k.IN_TABLE_TEXT: {
        Xt(this, t);
        break;
      }
      case k.AFTER_BODY: {
        hH(this, t);
        break;
      }
      case k.AFTER_AFTER_BODY:
      case k.AFTER_AFTER_FRAMESET: {
        dH(this, t);
        break;
      }
    }
  }
  onDoctype(t) {
    switch (((this.skipNextNewLine = !1), this.insertionMode)) {
      case k.INITIAL: {
        pH(this, t);
        break;
      }
      case k.BEFORE_HEAD:
      case k.IN_HEAD:
      case k.IN_HEAD_NO_SCRIPT:
      case k.AFTER_HEAD: {
        this._err(t, F.misplacedDoctype);
        break;
      }
      case k.IN_TABLE_TEXT: {
        Xt(this, t);
        break;
      }
    }
  }
  onStartTag(t) {
    (this.skipNextNewLine = !1),
      (this.currentToken = t),
      this._processStartTag(t),
      t.selfClosing &&
        !t.ackSelfClosing &&
        this._err(t, F.nonVoidHtmlElementStartTagWithTrailingSolidus);
  }
  _processStartTag(t) {
    this.shouldProcessStartTagTokenInForeignContent(t)
      ? vU(this, t)
      : this._startTagOutsideForeignContent(t);
  }
  _startTagOutsideForeignContent(t) {
    switch (this.insertionMode) {
      case k.INITIAL: {
        Qt(this, t);
        break;
      }
      case k.BEFORE_HTML: {
        _H(this, t);
        break;
      }
      case k.BEFORE_HEAD: {
        gH(this, t);
        break;
      }
      case k.IN_HEAD: {
        Ye(this, t);
        break;
      }
      case k.IN_HEAD_NO_SCRIPT: {
        bH(this, t);
        break;
      }
      case k.AFTER_HEAD: {
        EH(this, t);
        break;
      }
      case k.IN_BODY: {
        we(this, t);
        break;
      }
      case k.IN_TABLE: {
        Ht(this, t);
        break;
      }
      case k.IN_TABLE_TEXT: {
        Xt(this, t);
        break;
      }
      case k.IN_CAPTION: {
        yU(this, t);
        break;
      }
      case k.IN_COLUMN_GROUP: {
        In(this, t);
        break;
      }
      case k.IN_TABLE_BODY: {
        rr(this, t);
        break;
      }
      case k.IN_ROW: {
        nr(this, t);
        break;
      }
      case k.IN_CELL: {
        wU(this, t);
        break;
      }
      case k.IN_SELECT: {
        Yc(this, t);
        break;
      }
      case k.IN_SELECT_IN_TABLE: {
        TU(this, t);
        break;
      }
      case k.IN_TEMPLATE: {
        CU(this, t);
        break;
      }
      case k.AFTER_BODY: {
        DU(this, t);
        break;
      }
      case k.IN_FRAMESET: {
        zU(this, t);
        break;
      }
      case k.AFTER_FRAMESET: {
        SU(this, t);
        break;
      }
      case k.AFTER_AFTER_BODY: {
        FU(this, t);
        break;
      }
      case k.AFTER_AFTER_FRAMESET: {
        OU(this, t);
        break;
      }
    }
  }
  onEndTag(t) {
    (this.skipNextNewLine = !1),
      (this.currentToken = t),
      this.currentNotInHTML
        ? BU(this, t)
        : this._endTagOutsideForeignContent(t);
  }
  _endTagOutsideForeignContent(t) {
    switch (this.insertionMode) {
      case k.INITIAL: {
        Qt(this, t);
        break;
      }
      case k.BEFORE_HTML: {
        mH(this, t);
        break;
      }
      case k.BEFORE_HEAD: {
        yH(this, t);
        break;
      }
      case k.IN_HEAD: {
        kH(this, t);
        break;
      }
      case k.IN_HEAD_NO_SCRIPT: {
        wH(this, t);
        break;
      }
      case k.AFTER_HEAD: {
        TH(this, t);
        break;
      }
      case k.IN_BODY: {
        ar(this, t);
        break;
      }
      case k.TEXT: {
        cU(this, t);
        break;
      }
      case k.IN_TABLE: {
        da(this, t);
        break;
      }
      case k.IN_TABLE_TEXT: {
        Xt(this, t);
        break;
      }
      case k.IN_CAPTION: {
        kU(this, t);
        break;
      }
      case k.IN_COLUMN_GROUP: {
        bU(this, t);
        break;
      }
      case k.IN_TABLE_BODY: {
        Jr(this, t);
        break;
      }
      case k.IN_ROW: {
        qc(this, t);
        break;
      }
      case k.IN_CELL: {
        EU(this, t);
        break;
      }
      case k.IN_SELECT: {
        $c(this, t);
        break;
      }
      case k.IN_SELECT_IN_TABLE: {
        AU(this, t);
        break;
      }
      case k.IN_TEMPLATE: {
        xU(this, t);
        break;
      }
      case k.AFTER_BODY: {
        Wc(this, t);
        break;
      }
      case k.IN_FRAMESET: {
        IU(this, t);
        break;
      }
      case k.AFTER_FRAMESET: {
        NU(this, t);
        break;
      }
      case k.AFTER_AFTER_BODY: {
        Na(this, t);
        break;
      }
    }
  }
  onEof(t) {
    switch (this.insertionMode) {
      case k.INITIAL: {
        Qt(this, t);
        break;
      }
      case k.BEFORE_HTML: {
        ta(this, t);
        break;
      }
      case k.BEFORE_HEAD: {
        aa(this, t);
        break;
      }
      case k.IN_HEAD: {
        ra(this, t);
        break;
      }
      case k.IN_HEAD_NO_SCRIPT: {
        na(this, t);
        break;
      }
      case k.AFTER_HEAD: {
        ia(this, t);
        break;
      }
      case k.IN_BODY:
      case k.IN_TABLE:
      case k.IN_CAPTION:
      case k.IN_COLUMN_GROUP:
      case k.IN_TABLE_BODY:
      case k.IN_ROW:
      case k.IN_CELL:
      case k.IN_SELECT:
      case k.IN_SELECT_IN_TABLE: {
        Mc(this, t);
        break;
      }
      case k.TEXT: {
        uU(this, t);
        break;
      }
      case k.IN_TABLE_TEXT: {
        Xt(this, t);
        break;
      }
      case k.IN_TEMPLATE: {
        Vc(this, t);
        break;
      }
      case k.AFTER_BODY:
      case k.IN_FRAMESET:
      case k.AFTER_FRAMESET:
      case k.AFTER_AFTER_BODY:
      case k.AFTER_AFTER_FRAMESET: {
        zn(this, t);
        break;
      }
    }
  }
  onWhitespaceCharacter(t) {
    if (
      this.skipNextNewLine &&
      ((this.skipNextNewLine = !1), t.chars.charCodeAt(0) === m.LINE_FEED)
    ) {
      if (t.chars.length === 1) return;
      t.chars = t.chars.substr(1);
    }
    if (this.tokenizer.inForeignNode) {
      this._insertCharacters(t);
      return;
    }
    switch (this.insertionMode) {
      case k.IN_HEAD:
      case k.IN_HEAD_NO_SCRIPT:
      case k.AFTER_HEAD:
      case k.TEXT:
      case k.IN_COLUMN_GROUP:
      case k.IN_SELECT:
      case k.IN_SELECT_IN_TABLE:
      case k.IN_FRAMESET:
      case k.AFTER_FRAMESET: {
        this._insertCharacters(t);
        break;
      }
      case k.IN_BODY:
      case k.IN_CAPTION:
      case k.IN_CELL:
      case k.IN_TEMPLATE:
      case k.AFTER_BODY:
      case k.AFTER_AFTER_BODY:
      case k.AFTER_AFTER_FRAMESET: {
        Lc(this, t);
        break;
      }
      case k.IN_TABLE:
      case k.IN_TABLE_BODY:
      case k.IN_ROW: {
        Dr(this, t);
        break;
      }
      case k.IN_TABLE_TEXT: {
        Hc(this, t);
        break;
      }
    }
  }
}
function sH(e, t) {
  let a = e.activeFormattingElements.getElementEntryInScopeWithTagName(
    t.tagName,
  );
  return (
    a
      ? e.openElements.contains(a.element)
        ? e.openElements.hasInScope(t.tagID) || (a = null)
        : (e.activeFormattingElements.removeEntry(a), (a = null))
      : Pc(e, t),
    a
  );
}
function oH(e, t) {
  let a = null,
    r = e.openElements.stackTop;
  for (; r >= 0; r--) {
    const n = e.openElements.items[r];
    if (n === t.element) break;
    e._isSpecialElement(n, e.openElements.tagIDs[r]) && (a = n);
  }
  return (
    a ||
      (e.openElements.shortenToLength(r < 0 ? 0 : r),
      e.activeFormattingElements.removeEntry(t)),
    a
  );
}
function cH(e, t, a) {
  let r = t,
    n = e.openElements.getCommonAncestor(t);
  for (let s = 0, i = n; i !== a; s++, i = n) {
    n = e.openElements.getCommonAncestor(i);
    const o = e.activeFormattingElements.getElementEntry(i),
      u = o && s >= nH;
    !o || u
      ? (u && e.activeFormattingElements.removeEntry(o),
        e.openElements.remove(i))
      : ((i = uH(e, o)),
        r === t && (e.activeFormattingElements.bookmark = o),
        e.treeAdapter.detachNode(r),
        e.treeAdapter.appendChild(i, r),
        (r = i));
  }
  return r;
}
function uH(e, t) {
  const a = e.treeAdapter.getNamespaceURI(t.element),
    r = e.treeAdapter.createElement(t.token.tagName, a, t.token.attrs);
  return e.openElements.replace(t.element, r), (t.element = r), r;
}
function lH(e, t, a) {
  const r = e.treeAdapter.getTagName(t),
    n = jt(r);
  if (e._isElementCausesFosterParenting(n)) e._fosterParentElement(a);
  else {
    const s = e.treeAdapter.getNamespaceURI(t);
    n === c.TEMPLATE &&
      s === L.HTML &&
      (t = e.treeAdapter.getTemplateContent(t)),
      e.treeAdapter.appendChild(t, a);
  }
}
function fH(e, t, a) {
  const r = e.treeAdapter.getNamespaceURI(a.element),
    { token: n } = a,
    s = e.treeAdapter.createElement(n.tagName, r, n.attrs);
  e._adoptNodes(t, s),
    e.treeAdapter.appendChild(t, s),
    e.activeFormattingElements.insertElementAfterBookmark(s, n),
    e.activeFormattingElements.removeEntry(a),
    e.openElements.remove(a.element),
    e.openElements.insertAfter(t, s, n.tagID);
}
function Dn(e, t) {
  for (let a = 0; a < rH; a++) {
    const r = sH(e, t);
    if (!r) break;
    const n = oH(e, r);
    if (!n) break;
    e.activeFormattingElements.bookmark = r;
    const s = cH(e, n, r.element),
      i = e.openElements.getCommonAncestor(r.element);
    e.treeAdapter.detachNode(s), i && lH(e, i, s), fH(e, n, r);
  }
}
function Kr(e, t) {
  e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
}
function hH(e, t) {
  e._appendCommentNode(t, e.openElements.items[0]);
}
function dH(e, t) {
  e._appendCommentNode(t, e.document);
}
function zn(e, t) {
  if (((e.stopped = !0), t.location)) {
    const a = e.fragmentContext ? 0 : 2;
    for (let r = e.openElements.stackTop; r >= a; r--)
      e._setEndLocation(e.openElements.items[r], t);
    if (!e.fragmentContext && e.openElements.stackTop >= 0) {
      const r = e.openElements.items[0],
        n = e.treeAdapter.getNodeSourceCodeLocation(r);
      if (
        n &&
        !n.endTag &&
        (e._setEndLocation(r, t), e.openElements.stackTop >= 1)
      ) {
        const s = e.openElements.items[1],
          i = e.treeAdapter.getNodeSourceCodeLocation(s);
        i && !i.endTag && e._setEndLocation(s, t);
      }
    }
  }
}
function pH(e, t) {
  e._setDocumentType(t);
  const a = t.forceQuirks ? Ie.QUIRKS : Y7(t);
  q7(t) || e._err(t, F.nonConformingDoctype),
    e.treeAdapter.setDocumentMode(e.document, a),
    (e.insertionMode = k.BEFORE_HTML);
}
function Qt(e, t) {
  e._err(t, F.missingDoctype, !0),
    e.treeAdapter.setDocumentMode(e.document, Ie.QUIRKS),
    (e.insertionMode = k.BEFORE_HTML),
    e._processToken(t);
}
function _H(e, t) {
  t.tagID === c.HTML
    ? (e._insertElement(t, L.HTML), (e.insertionMode = k.BEFORE_HEAD))
    : ta(e, t);
}
function mH(e, t) {
  const a = t.tagID;
  (a === c.HTML || a === c.HEAD || a === c.BODY || a === c.BR) && ta(e, t);
}
function ta(e, t) {
  e._insertFakeRootElement(),
    (e.insertionMode = k.BEFORE_HEAD),
    e._processToken(t);
}
function gH(e, t) {
  switch (t.tagID) {
    case c.HTML: {
      we(e, t);
      break;
    }
    case c.HEAD: {
      e._insertElement(t, L.HTML),
        (e.headElement = e.openElements.current),
        (e.insertionMode = k.IN_HEAD);
      break;
    }
    default:
      aa(e, t);
  }
}
function yH(e, t) {
  const a = t.tagID;
  a === c.HEAD || a === c.BODY || a === c.HTML || a === c.BR
    ? aa(e, t)
    : e._err(t, F.endTagWithoutMatchingOpenElement);
}
function aa(e, t) {
  e._insertFakeElement(x.HEAD, c.HEAD),
    (e.headElement = e.openElements.current),
    (e.insertionMode = k.IN_HEAD),
    e._processToken(t);
}
function Ye(e, t) {
  switch (t.tagID) {
    case c.HTML: {
      we(e, t);
      break;
    }
    case c.BASE:
    case c.BASEFONT:
    case c.BGSOUND:
    case c.LINK:
    case c.META: {
      e._appendElement(t, L.HTML), (t.ackSelfClosing = !0);
      break;
    }
    case c.TITLE: {
      e._switchToTextParsing(t, fe.RCDATA);
      break;
    }
    case c.NOSCRIPT: {
      e.options.scriptingEnabled
        ? e._switchToTextParsing(t, fe.RAWTEXT)
        : (e._insertElement(t, L.HTML),
          (e.insertionMode = k.IN_HEAD_NO_SCRIPT));
      break;
    }
    case c.NOFRAMES:
    case c.STYLE: {
      e._switchToTextParsing(t, fe.RAWTEXT);
      break;
    }
    case c.SCRIPT: {
      e._switchToTextParsing(t, fe.SCRIPT_DATA);
      break;
    }
    case c.TEMPLATE: {
      e._insertTemplate(t),
        e.activeFormattingElements.insertMarker(),
        (e.framesetOk = !1),
        (e.insertionMode = k.IN_TEMPLATE),
        e.tmplInsertionModeStack.unshift(k.IN_TEMPLATE);
      break;
    }
    case c.HEAD: {
      e._err(t, F.misplacedStartTagForHeadElement);
      break;
    }
    default:
      ra(e, t);
  }
}
function kH(e, t) {
  switch (t.tagID) {
    case c.HEAD: {
      e.openElements.pop(), (e.insertionMode = k.AFTER_HEAD);
      break;
    }
    case c.BODY:
    case c.BR:
    case c.HTML: {
      ra(e, t);
      break;
    }
    case c.TEMPLATE: {
      Dt(e, t);
      break;
    }
    default:
      e._err(t, F.endTagWithoutMatchingOpenElement);
  }
}
function Dt(e, t) {
  e.openElements.tmplCount > 0
    ? (e.openElements.generateImpliedEndTagsThoroughly(),
      e.openElements.currentTagId !== c.TEMPLATE &&
        e._err(t, F.closingOfElementWithOpenChildElements),
      e.openElements.popUntilTagNamePopped(c.TEMPLATE),
      e.activeFormattingElements.clearToLastMarker(),
      e.tmplInsertionModeStack.shift(),
      e._resetInsertionMode())
    : e._err(t, F.endTagWithoutMatchingOpenElement);
}
function ra(e, t) {
  e.openElements.pop(), (e.insertionMode = k.AFTER_HEAD), e._processToken(t);
}
function bH(e, t) {
  switch (t.tagID) {
    case c.HTML: {
      we(e, t);
      break;
    }
    case c.BASEFONT:
    case c.BGSOUND:
    case c.HEAD:
    case c.LINK:
    case c.META:
    case c.NOFRAMES:
    case c.STYLE: {
      Ye(e, t);
      break;
    }
    case c.NOSCRIPT: {
      e._err(t, F.nestedNoscriptInHead);
      break;
    }
    default:
      na(e, t);
  }
}
function wH(e, t) {
  switch (t.tagID) {
    case c.NOSCRIPT: {
      e.openElements.pop(), (e.insertionMode = k.IN_HEAD);
      break;
    }
    case c.BR: {
      na(e, t);
      break;
    }
    default:
      e._err(t, F.endTagWithoutMatchingOpenElement);
  }
}
function na(e, t) {
  const a =
    t.type === ee.EOF
      ? F.openElementsLeftAfterEof
      : F.disallowedContentInNoscriptInHead;
  e._err(t, a),
    e.openElements.pop(),
    (e.insertionMode = k.IN_HEAD),
    e._processToken(t);
}
function EH(e, t) {
  switch (t.tagID) {
    case c.HTML: {
      we(e, t);
      break;
    }
    case c.BODY: {
      e._insertElement(t, L.HTML),
        (e.framesetOk = !1),
        (e.insertionMode = k.IN_BODY);
      break;
    }
    case c.FRAMESET: {
      e._insertElement(t, L.HTML), (e.insertionMode = k.IN_FRAMESET);
      break;
    }
    case c.BASE:
    case c.BASEFONT:
    case c.BGSOUND:
    case c.LINK:
    case c.META:
    case c.NOFRAMES:
    case c.SCRIPT:
    case c.STYLE:
    case c.TEMPLATE:
    case c.TITLE: {
      e._err(t, F.abandonedHeadElementChild),
        e.openElements.push(e.headElement, c.HEAD),
        Ye(e, t),
        e.openElements.remove(e.headElement);
      break;
    }
    case c.HEAD: {
      e._err(t, F.misplacedStartTagForHeadElement);
      break;
    }
    default:
      ia(e, t);
  }
}
function TH(e, t) {
  switch (t.tagID) {
    case c.BODY:
    case c.HTML:
    case c.BR: {
      ia(e, t);
      break;
    }
    case c.TEMPLATE: {
      Dt(e, t);
      break;
    }
    default:
      e._err(t, F.endTagWithoutMatchingOpenElement);
  }
}
function ia(e, t) {
  e._insertFakeElement(x.BODY, c.BODY), (e.insertionMode = k.IN_BODY), tr(e, t);
}
function tr(e, t) {
  switch (t.type) {
    case ee.CHARACTER: {
      Rc(e, t);
      break;
    }
    case ee.WHITESPACE_CHARACTER: {
      Lc(e, t);
      break;
    }
    case ee.COMMENT: {
      Kr(e, t);
      break;
    }
    case ee.START_TAG: {
      we(e, t);
      break;
    }
    case ee.END_TAG: {
      ar(e, t);
      break;
    }
    case ee.EOF: {
      Mc(e, t);
      break;
    }
  }
}
function Lc(e, t) {
  e._reconstructActiveFormattingElements(), e._insertCharacters(t);
}
function Rc(e, t) {
  e._reconstructActiveFormattingElements(),
    e._insertCharacters(t),
    (e.framesetOk = !1);
}
function AH(e, t) {
  e.openElements.tmplCount === 0 &&
    e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
}
function CH(e, t) {
  const a = e.openElements.tryPeekProperlyNestedBodyElement();
  a &&
    e.openElements.tmplCount === 0 &&
    ((e.framesetOk = !1), e.treeAdapter.adoptAttributes(a, t.attrs));
}
function xH(e, t) {
  const a = e.openElements.tryPeekProperlyNestedBodyElement();
  e.framesetOk &&
    a &&
    (e.treeAdapter.detachNode(a),
    e.openElements.popAllUpToHtmlElement(),
    e._insertElement(t, L.HTML),
    (e.insertionMode = k.IN_FRAMESET));
}
function DH(e, t) {
  e.openElements.hasInButtonScope(c.P) && e._closePElement(),
    e._insertElement(t, L.HTML);
}
function zH(e, t) {
  e.openElements.hasInButtonScope(c.P) && e._closePElement(),
    Tc(e.openElements.currentTagId) && e.openElements.pop(),
    e._insertElement(t, L.HTML);
}
function IH(e, t) {
  e.openElements.hasInButtonScope(c.P) && e._closePElement(),
    e._insertElement(t, L.HTML),
    (e.skipNextNewLine = !0),
    (e.framesetOk = !1);
}
function SH(e, t) {
  const a = e.openElements.tmplCount > 0;
  (!e.formElement || a) &&
    (e.openElements.hasInButtonScope(c.P) && e._closePElement(),
    e._insertElement(t, L.HTML),
    a || (e.formElement = e.openElements.current));
}
function NH(e, t) {
  e.framesetOk = !1;
  const a = t.tagID;
  for (let r = e.openElements.stackTop; r >= 0; r--) {
    const n = e.openElements.tagIDs[r];
    if (
      (a === c.LI && n === c.LI) ||
      ((a === c.DD || a === c.DT) && (n === c.DD || n === c.DT))
    ) {
      e.openElements.generateImpliedEndTagsWithExclusion(n),
        e.openElements.popUntilTagNamePopped(n);
      break;
    }
    if (
      n !== c.ADDRESS &&
      n !== c.DIV &&
      n !== c.P &&
      e._isSpecialElement(e.openElements.items[r], n)
    )
      break;
  }
  e.openElements.hasInButtonScope(c.P) && e._closePElement(),
    e._insertElement(t, L.HTML);
}
function FH(e, t) {
  e.openElements.hasInButtonScope(c.P) && e._closePElement(),
    e._insertElement(t, L.HTML),
    (e.tokenizer.state = fe.PLAINTEXT);
}
function OH(e, t) {
  e.openElements.hasInScope(c.BUTTON) &&
    (e.openElements.generateImpliedEndTags(),
    e.openElements.popUntilTagNamePopped(c.BUTTON)),
    e._reconstructActiveFormattingElements(),
    e._insertElement(t, L.HTML),
    (e.framesetOk = !1);
}
function LH(e, t) {
  const a = e.activeFormattingElements.getElementEntryInScopeWithTagName(x.A);
  a &&
    (Dn(e, t),
    e.openElements.remove(a.element),
    e.activeFormattingElements.removeEntry(a)),
    e._reconstructActiveFormattingElements(),
    e._insertElement(t, L.HTML),
    e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function RH(e, t) {
  e._reconstructActiveFormattingElements(),
    e._insertElement(t, L.HTML),
    e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function vH(e, t) {
  e._reconstructActiveFormattingElements(),
    e.openElements.hasInScope(c.NOBR) &&
      (Dn(e, t), e._reconstructActiveFormattingElements()),
    e._insertElement(t, L.HTML),
    e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function BH(e, t) {
  e._reconstructActiveFormattingElements(),
    e._insertElement(t, L.HTML),
    e.activeFormattingElements.insertMarker(),
    (e.framesetOk = !1);
}
function PH(e, t) {
  e.treeAdapter.getDocumentMode(e.document) !== Ie.QUIRKS &&
    e.openElements.hasInButtonScope(c.P) &&
    e._closePElement(),
    e._insertElement(t, L.HTML),
    (e.framesetOk = !1),
    (e.insertionMode = k.IN_TABLE);
}
function vc(e, t) {
  e._reconstructActiveFormattingElements(),
    e._appendElement(t, L.HTML),
    (e.framesetOk = !1),
    (t.ackSelfClosing = !0);
}
function Bc(e) {
  const t = bc(e, lt.TYPE);
  return t != null && t.toLowerCase() === aH;
}
function MH(e, t) {
  e._reconstructActiveFormattingElements(),
    e._appendElement(t, L.HTML),
    Bc(t) || (e.framesetOk = !1),
    (t.ackSelfClosing = !0);
}
function HH(e, t) {
  e._appendElement(t, L.HTML), (t.ackSelfClosing = !0);
}
function UH(e, t) {
  e.openElements.hasInButtonScope(c.P) && e._closePElement(),
    e._appendElement(t, L.HTML),
    (e.framesetOk = !1),
    (t.ackSelfClosing = !0);
}
function jH(e, t) {
  (t.tagName = x.IMG), (t.tagID = c.IMG), vc(e, t);
}
function qH(e, t) {
  e._insertElement(t, L.HTML),
    (e.skipNextNewLine = !0),
    (e.tokenizer.state = fe.RCDATA),
    (e.originalInsertionMode = e.insertionMode),
    (e.framesetOk = !1),
    (e.insertionMode = k.TEXT);
}
function YH(e, t) {
  e.openElements.hasInButtonScope(c.P) && e._closePElement(),
    e._reconstructActiveFormattingElements(),
    (e.framesetOk = !1),
    e._switchToTextParsing(t, fe.RAWTEXT);
}
function $H(e, t) {
  (e.framesetOk = !1), e._switchToTextParsing(t, fe.RAWTEXT);
}
function cs(e, t) {
  e._switchToTextParsing(t, fe.RAWTEXT);
}
function VH(e, t) {
  e._reconstructActiveFormattingElements(),
    e._insertElement(t, L.HTML),
    (e.framesetOk = !1),
    (e.insertionMode =
      e.insertionMode === k.IN_TABLE ||
      e.insertionMode === k.IN_CAPTION ||
      e.insertionMode === k.IN_TABLE_BODY ||
      e.insertionMode === k.IN_ROW ||
      e.insertionMode === k.IN_CELL
        ? k.IN_SELECT_IN_TABLE
        : k.IN_SELECT);
}
function WH(e, t) {
  e.openElements.currentTagId === c.OPTION && e.openElements.pop(),
    e._reconstructActiveFormattingElements(),
    e._insertElement(t, L.HTML);
}
function GH(e, t) {
  e.openElements.hasInScope(c.RUBY) && e.openElements.generateImpliedEndTags(),
    e._insertElement(t, L.HTML);
}
function QH(e, t) {
  e.openElements.hasInScope(c.RUBY) &&
    e.openElements.generateImpliedEndTagsWithExclusion(c.RTC),
    e._insertElement(t, L.HTML);
}
function XH(e, t) {
  e._reconstructActiveFormattingElements(),
    Nc(t),
    xn(t),
    t.selfClosing
      ? e._appendElement(t, L.MATHML)
      : e._insertElement(t, L.MATHML),
    (t.ackSelfClosing = !0);
}
function KH(e, t) {
  e._reconstructActiveFormattingElements(),
    Fc(t),
    xn(t),
    t.selfClosing ? e._appendElement(t, L.SVG) : e._insertElement(t, L.SVG),
    (t.ackSelfClosing = !0);
}
function us(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, L.HTML);
}
function we(e, t) {
  switch (t.tagID) {
    case c.I:
    case c.S:
    case c.B:
    case c.U:
    case c.EM:
    case c.TT:
    case c.BIG:
    case c.CODE:
    case c.FONT:
    case c.SMALL:
    case c.STRIKE:
    case c.STRONG: {
      RH(e, t);
      break;
    }
    case c.A: {
      LH(e, t);
      break;
    }
    case c.H1:
    case c.H2:
    case c.H3:
    case c.H4:
    case c.H5:
    case c.H6: {
      zH(e, t);
      break;
    }
    case c.P:
    case c.DL:
    case c.OL:
    case c.UL:
    case c.DIV:
    case c.DIR:
    case c.NAV:
    case c.MAIN:
    case c.MENU:
    case c.ASIDE:
    case c.CENTER:
    case c.FIGURE:
    case c.FOOTER:
    case c.HEADER:
    case c.HGROUP:
    case c.DIALOG:
    case c.DETAILS:
    case c.ADDRESS:
    case c.ARTICLE:
    case c.SECTION:
    case c.SUMMARY:
    case c.FIELDSET:
    case c.BLOCKQUOTE:
    case c.FIGCAPTION: {
      DH(e, t);
      break;
    }
    case c.LI:
    case c.DD:
    case c.DT: {
      NH(e, t);
      break;
    }
    case c.BR:
    case c.IMG:
    case c.WBR:
    case c.AREA:
    case c.EMBED:
    case c.KEYGEN: {
      vc(e, t);
      break;
    }
    case c.HR: {
      UH(e, t);
      break;
    }
    case c.RB:
    case c.RTC: {
      GH(e, t);
      break;
    }
    case c.RT:
    case c.RP: {
      QH(e, t);
      break;
    }
    case c.PRE:
    case c.LISTING: {
      IH(e, t);
      break;
    }
    case c.XMP: {
      YH(e, t);
      break;
    }
    case c.SVG: {
      KH(e, t);
      break;
    }
    case c.HTML: {
      AH(e, t);
      break;
    }
    case c.BASE:
    case c.LINK:
    case c.META:
    case c.STYLE:
    case c.TITLE:
    case c.SCRIPT:
    case c.BGSOUND:
    case c.BASEFONT:
    case c.TEMPLATE: {
      Ye(e, t);
      break;
    }
    case c.BODY: {
      CH(e, t);
      break;
    }
    case c.FORM: {
      SH(e, t);
      break;
    }
    case c.NOBR: {
      vH(e, t);
      break;
    }
    case c.MATH: {
      XH(e, t);
      break;
    }
    case c.TABLE: {
      PH(e, t);
      break;
    }
    case c.INPUT: {
      MH(e, t);
      break;
    }
    case c.PARAM:
    case c.TRACK:
    case c.SOURCE: {
      HH(e, t);
      break;
    }
    case c.IMAGE: {
      jH(e, t);
      break;
    }
    case c.BUTTON: {
      OH(e, t);
      break;
    }
    case c.APPLET:
    case c.OBJECT:
    case c.MARQUEE: {
      BH(e, t);
      break;
    }
    case c.IFRAME: {
      $H(e, t);
      break;
    }
    case c.SELECT: {
      VH(e, t);
      break;
    }
    case c.OPTION:
    case c.OPTGROUP: {
      WH(e, t);
      break;
    }
    case c.NOEMBED: {
      cs(e, t);
      break;
    }
    case c.FRAMESET: {
      xH(e, t);
      break;
    }
    case c.TEXTAREA: {
      qH(e, t);
      break;
    }
    case c.NOSCRIPT: {
      e.options.scriptingEnabled ? cs(e, t) : us(e, t);
      break;
    }
    case c.PLAINTEXT: {
      FH(e, t);
      break;
    }
    case c.COL:
    case c.TH:
    case c.TD:
    case c.TR:
    case c.HEAD:
    case c.FRAME:
    case c.TBODY:
    case c.TFOOT:
    case c.THEAD:
    case c.CAPTION:
    case c.COLGROUP:
      break;
    default:
      us(e, t);
  }
}
function JH(e, t) {
  if (
    e.openElements.hasInScope(c.BODY) &&
    ((e.insertionMode = k.AFTER_BODY), e.options.sourceCodeLocationInfo)
  ) {
    const a = e.openElements.tryPeekProperlyNestedBodyElement();
    a && e._setEndLocation(a, t);
  }
}
function ZH(e, t) {
  e.openElements.hasInScope(c.BODY) &&
    ((e.insertionMode = k.AFTER_BODY), Wc(e, t));
}
function eU(e, t) {
  const a = t.tagID;
  e.openElements.hasInScope(a) &&
    (e.openElements.generateImpliedEndTags(),
    e.openElements.popUntilTagNamePopped(a));
}
function tU(e) {
  const t = e.openElements.tmplCount > 0,
    { formElement: a } = e;
  t || (e.formElement = null),
    (a || t) &&
      e.openElements.hasInScope(c.FORM) &&
      (e.openElements.generateImpliedEndTags(),
      t
        ? e.openElements.popUntilTagNamePopped(c.FORM)
        : a && e.openElements.remove(a));
}
function aU(e) {
  e.openElements.hasInButtonScope(c.P) || e._insertFakeElement(x.P, c.P),
    e._closePElement();
}
function rU(e) {
  e.openElements.hasInListItemScope(c.LI) &&
    (e.openElements.generateImpliedEndTagsWithExclusion(c.LI),
    e.openElements.popUntilTagNamePopped(c.LI));
}
function nU(e, t) {
  const a = t.tagID;
  e.openElements.hasInScope(a) &&
    (e.openElements.generateImpliedEndTagsWithExclusion(a),
    e.openElements.popUntilTagNamePopped(a));
}
function iU(e) {
  e.openElements.hasNumberedHeaderInScope() &&
    (e.openElements.generateImpliedEndTags(),
    e.openElements.popUntilNumberedHeaderPopped());
}
function sU(e, t) {
  const a = t.tagID;
  e.openElements.hasInScope(a) &&
    (e.openElements.generateImpliedEndTags(),
    e.openElements.popUntilTagNamePopped(a),
    e.activeFormattingElements.clearToLastMarker());
}
function oU(e) {
  e._reconstructActiveFormattingElements(),
    e._insertFakeElement(x.BR, c.BR),
    e.openElements.pop(),
    (e.framesetOk = !1);
}
function Pc(e, t) {
  const a = t.tagName,
    r = t.tagID;
  for (let n = e.openElements.stackTop; n > 0; n--) {
    const s = e.openElements.items[n],
      i = e.openElements.tagIDs[n];
    if (r === i && (r !== c.UNKNOWN || e.treeAdapter.getTagName(s) === a)) {
      e.openElements.generateImpliedEndTagsWithExclusion(r),
        e.openElements.stackTop >= n && e.openElements.shortenToLength(n);
      break;
    }
    if (e._isSpecialElement(s, i)) break;
  }
}
function ar(e, t) {
  switch (t.tagID) {
    case c.A:
    case c.B:
    case c.I:
    case c.S:
    case c.U:
    case c.EM:
    case c.TT:
    case c.BIG:
    case c.CODE:
    case c.FONT:
    case c.NOBR:
    case c.SMALL:
    case c.STRIKE:
    case c.STRONG: {
      Dn(e, t);
      break;
    }
    case c.P: {
      aU(e);
      break;
    }
    case c.DL:
    case c.UL:
    case c.OL:
    case c.DIR:
    case c.DIV:
    case c.NAV:
    case c.PRE:
    case c.MAIN:
    case c.MENU:
    case c.ASIDE:
    case c.BUTTON:
    case c.CENTER:
    case c.FIGURE:
    case c.FOOTER:
    case c.HEADER:
    case c.HGROUP:
    case c.DIALOG:
    case c.ADDRESS:
    case c.ARTICLE:
    case c.DETAILS:
    case c.SECTION:
    case c.SUMMARY:
    case c.LISTING:
    case c.FIELDSET:
    case c.BLOCKQUOTE:
    case c.FIGCAPTION: {
      eU(e, t);
      break;
    }
    case c.LI: {
      rU(e);
      break;
    }
    case c.DD:
    case c.DT: {
      nU(e, t);
      break;
    }
    case c.H1:
    case c.H2:
    case c.H3:
    case c.H4:
    case c.H5:
    case c.H6: {
      iU(e);
      break;
    }
    case c.BR: {
      oU(e);
      break;
    }
    case c.BODY: {
      JH(e, t);
      break;
    }
    case c.HTML: {
      ZH(e, t);
      break;
    }
    case c.FORM: {
      tU(e);
      break;
    }
    case c.APPLET:
    case c.OBJECT:
    case c.MARQUEE: {
      sU(e, t);
      break;
    }
    case c.TEMPLATE: {
      Dt(e, t);
      break;
    }
    default:
      Pc(e, t);
  }
}
function Mc(e, t) {
  e.tmplInsertionModeStack.length > 0 ? Vc(e, t) : zn(e, t);
}
function cU(e, t) {
  var a;
  t.tagID === c.SCRIPT &&
    ((a = e.scriptHandler) === null ||
      a === void 0 ||
      a.call(e, e.openElements.current)),
    e.openElements.pop(),
    (e.insertionMode = e.originalInsertionMode);
}
function uU(e, t) {
  e._err(t, F.eofInElementThatCanContainOnlyText),
    e.openElements.pop(),
    (e.insertionMode = e.originalInsertionMode),
    e.onEof(t);
}
function Dr(e, t) {
  if (Oc.has(e.openElements.currentTagId))
    switch (
      ((e.pendingCharacterTokens.length = 0),
      (e.hasNonWhitespacePendingCharacterToken = !1),
      (e.originalInsertionMode = e.insertionMode),
      (e.insertionMode = k.IN_TABLE_TEXT),
      t.type)
    ) {
      case ee.CHARACTER: {
        Uc(e, t);
        break;
      }
      case ee.WHITESPACE_CHARACTER: {
        Hc(e, t);
        break;
      }
    }
  else ga(e, t);
}
function lU(e, t) {
  e.openElements.clearBackToTableContext(),
    e.activeFormattingElements.insertMarker(),
    e._insertElement(t, L.HTML),
    (e.insertionMode = k.IN_CAPTION);
}
function fU(e, t) {
  e.openElements.clearBackToTableContext(),
    e._insertElement(t, L.HTML),
    (e.insertionMode = k.IN_COLUMN_GROUP);
}
function hU(e, t) {
  e.openElements.clearBackToTableContext(),
    e._insertFakeElement(x.COLGROUP, c.COLGROUP),
    (e.insertionMode = k.IN_COLUMN_GROUP),
    In(e, t);
}
function dU(e, t) {
  e.openElements.clearBackToTableContext(),
    e._insertElement(t, L.HTML),
    (e.insertionMode = k.IN_TABLE_BODY);
}
function pU(e, t) {
  e.openElements.clearBackToTableContext(),
    e._insertFakeElement(x.TBODY, c.TBODY),
    (e.insertionMode = k.IN_TABLE_BODY),
    rr(e, t);
}
function _U(e, t) {
  e.openElements.hasInTableScope(c.TABLE) &&
    (e.openElements.popUntilTagNamePopped(c.TABLE),
    e._resetInsertionMode(),
    e._processStartTag(t));
}
function mU(e, t) {
  Bc(t) ? e._appendElement(t, L.HTML) : ga(e, t), (t.ackSelfClosing = !0);
}
function gU(e, t) {
  !e.formElement &&
    e.openElements.tmplCount === 0 &&
    (e._insertElement(t, L.HTML),
    (e.formElement = e.openElements.current),
    e.openElements.pop());
}
function Ht(e, t) {
  switch (t.tagID) {
    case c.TD:
    case c.TH:
    case c.TR: {
      pU(e, t);
      break;
    }
    case c.STYLE:
    case c.SCRIPT:
    case c.TEMPLATE: {
      Ye(e, t);
      break;
    }
    case c.COL: {
      hU(e, t);
      break;
    }
    case c.FORM: {
      gU(e, t);
      break;
    }
    case c.TABLE: {
      _U(e, t);
      break;
    }
    case c.TBODY:
    case c.TFOOT:
    case c.THEAD: {
      dU(e, t);
      break;
    }
    case c.INPUT: {
      mU(e, t);
      break;
    }
    case c.CAPTION: {
      lU(e, t);
      break;
    }
    case c.COLGROUP: {
      fU(e, t);
      break;
    }
    default:
      ga(e, t);
  }
}
function da(e, t) {
  switch (t.tagID) {
    case c.TABLE: {
      e.openElements.hasInTableScope(c.TABLE) &&
        (e.openElements.popUntilTagNamePopped(c.TABLE),
        e._resetInsertionMode());
      break;
    }
    case c.TEMPLATE: {
      Dt(e, t);
      break;
    }
    case c.BODY:
    case c.CAPTION:
    case c.COL:
    case c.COLGROUP:
    case c.HTML:
    case c.TBODY:
    case c.TD:
    case c.TFOOT:
    case c.TH:
    case c.THEAD:
    case c.TR:
      break;
    default:
      ga(e, t);
  }
}
function ga(e, t) {
  const a = e.fosterParentingEnabled;
  (e.fosterParentingEnabled = !0), tr(e, t), (e.fosterParentingEnabled = a);
}
function Hc(e, t) {
  e.pendingCharacterTokens.push(t);
}
function Uc(e, t) {
  e.pendingCharacterTokens.push(t),
    (e.hasNonWhitespacePendingCharacterToken = !0);
}
function Xt(e, t) {
  let a = 0;
  if (e.hasNonWhitespacePendingCharacterToken)
    for (; a < e.pendingCharacterTokens.length; a++)
      ga(e, e.pendingCharacterTokens[a]);
  else
    for (; a < e.pendingCharacterTokens.length; a++)
      e._insertCharacters(e.pendingCharacterTokens[a]);
  (e.insertionMode = e.originalInsertionMode), e._processToken(t);
}
const jc = new Set([
  c.CAPTION,
  c.COL,
  c.COLGROUP,
  c.TBODY,
  c.TD,
  c.TFOOT,
  c.TH,
  c.THEAD,
  c.TR,
]);
function yU(e, t) {
  const a = t.tagID;
  jc.has(a)
    ? e.openElements.hasInTableScope(c.CAPTION) &&
      (e.openElements.generateImpliedEndTags(),
      e.openElements.popUntilTagNamePopped(c.CAPTION),
      e.activeFormattingElements.clearToLastMarker(),
      (e.insertionMode = k.IN_TABLE),
      Ht(e, t))
    : we(e, t);
}
function kU(e, t) {
  const a = t.tagID;
  switch (a) {
    case c.CAPTION:
    case c.TABLE: {
      e.openElements.hasInTableScope(c.CAPTION) &&
        (e.openElements.generateImpliedEndTags(),
        e.openElements.popUntilTagNamePopped(c.CAPTION),
        e.activeFormattingElements.clearToLastMarker(),
        (e.insertionMode = k.IN_TABLE),
        a === c.TABLE && da(e, t));
      break;
    }
    case c.BODY:
    case c.COL:
    case c.COLGROUP:
    case c.HTML:
    case c.TBODY:
    case c.TD:
    case c.TFOOT:
    case c.TH:
    case c.THEAD:
    case c.TR:
      break;
    default:
      ar(e, t);
  }
}
function In(e, t) {
  switch (t.tagID) {
    case c.HTML: {
      we(e, t);
      break;
    }
    case c.COL: {
      e._appendElement(t, L.HTML), (t.ackSelfClosing = !0);
      break;
    }
    case c.TEMPLATE: {
      Ye(e, t);
      break;
    }
    default:
      Ya(e, t);
  }
}
function bU(e, t) {
  switch (t.tagID) {
    case c.COLGROUP: {
      e.openElements.currentTagId === c.COLGROUP &&
        (e.openElements.pop(), (e.insertionMode = k.IN_TABLE));
      break;
    }
    case c.TEMPLATE: {
      Dt(e, t);
      break;
    }
    case c.COL:
      break;
    default:
      Ya(e, t);
  }
}
function Ya(e, t) {
  e.openElements.currentTagId === c.COLGROUP &&
    (e.openElements.pop(), (e.insertionMode = k.IN_TABLE), e._processToken(t));
}
function rr(e, t) {
  switch (t.tagID) {
    case c.TR: {
      e.openElements.clearBackToTableBodyContext(),
        e._insertElement(t, L.HTML),
        (e.insertionMode = k.IN_ROW);
      break;
    }
    case c.TH:
    case c.TD: {
      e.openElements.clearBackToTableBodyContext(),
        e._insertFakeElement(x.TR, c.TR),
        (e.insertionMode = k.IN_ROW),
        nr(e, t);
      break;
    }
    case c.CAPTION:
    case c.COL:
    case c.COLGROUP:
    case c.TBODY:
    case c.TFOOT:
    case c.THEAD: {
      e.openElements.hasTableBodyContextInTableScope() &&
        (e.openElements.clearBackToTableBodyContext(),
        e.openElements.pop(),
        (e.insertionMode = k.IN_TABLE),
        Ht(e, t));
      break;
    }
    default:
      Ht(e, t);
  }
}
function Jr(e, t) {
  const a = t.tagID;
  switch (t.tagID) {
    case c.TBODY:
    case c.TFOOT:
    case c.THEAD: {
      e.openElements.hasInTableScope(a) &&
        (e.openElements.clearBackToTableBodyContext(),
        e.openElements.pop(),
        (e.insertionMode = k.IN_TABLE));
      break;
    }
    case c.TABLE: {
      e.openElements.hasTableBodyContextInTableScope() &&
        (e.openElements.clearBackToTableBodyContext(),
        e.openElements.pop(),
        (e.insertionMode = k.IN_TABLE),
        da(e, t));
      break;
    }
    case c.BODY:
    case c.CAPTION:
    case c.COL:
    case c.COLGROUP:
    case c.HTML:
    case c.TD:
    case c.TH:
    case c.TR:
      break;
    default:
      da(e, t);
  }
}
function nr(e, t) {
  switch (t.tagID) {
    case c.TH:
    case c.TD: {
      e.openElements.clearBackToTableRowContext(),
        e._insertElement(t, L.HTML),
        (e.insertionMode = k.IN_CELL),
        e.activeFormattingElements.insertMarker();
      break;
    }
    case c.CAPTION:
    case c.COL:
    case c.COLGROUP:
    case c.TBODY:
    case c.TFOOT:
    case c.THEAD:
    case c.TR: {
      e.openElements.hasInTableScope(c.TR) &&
        (e.openElements.clearBackToTableRowContext(),
        e.openElements.pop(),
        (e.insertionMode = k.IN_TABLE_BODY),
        rr(e, t));
      break;
    }
    default:
      Ht(e, t);
  }
}
function qc(e, t) {
  switch (t.tagID) {
    case c.TR: {
      e.openElements.hasInTableScope(c.TR) &&
        (e.openElements.clearBackToTableRowContext(),
        e.openElements.pop(),
        (e.insertionMode = k.IN_TABLE_BODY));
      break;
    }
    case c.TABLE: {
      e.openElements.hasInTableScope(c.TR) &&
        (e.openElements.clearBackToTableRowContext(),
        e.openElements.pop(),
        (e.insertionMode = k.IN_TABLE_BODY),
        Jr(e, t));
      break;
    }
    case c.TBODY:
    case c.TFOOT:
    case c.THEAD: {
      (e.openElements.hasInTableScope(t.tagID) ||
        e.openElements.hasInTableScope(c.TR)) &&
        (e.openElements.clearBackToTableRowContext(),
        e.openElements.pop(),
        (e.insertionMode = k.IN_TABLE_BODY),
        Jr(e, t));
      break;
    }
    case c.BODY:
    case c.CAPTION:
    case c.COL:
    case c.COLGROUP:
    case c.HTML:
    case c.TD:
    case c.TH:
      break;
    default:
      da(e, t);
  }
}
function wU(e, t) {
  const a = t.tagID;
  jc.has(a)
    ? (e.openElements.hasInTableScope(c.TD) ||
        e.openElements.hasInTableScope(c.TH)) &&
      (e._closeTableCell(), nr(e, t))
    : we(e, t);
}
function EU(e, t) {
  const a = t.tagID;
  switch (a) {
    case c.TD:
    case c.TH: {
      e.openElements.hasInTableScope(a) &&
        (e.openElements.generateImpliedEndTags(),
        e.openElements.popUntilTagNamePopped(a),
        e.activeFormattingElements.clearToLastMarker(),
        (e.insertionMode = k.IN_ROW));
      break;
    }
    case c.TABLE:
    case c.TBODY:
    case c.TFOOT:
    case c.THEAD:
    case c.TR: {
      e.openElements.hasInTableScope(a) && (e._closeTableCell(), qc(e, t));
      break;
    }
    case c.BODY:
    case c.CAPTION:
    case c.COL:
    case c.COLGROUP:
    case c.HTML:
      break;
    default:
      ar(e, t);
  }
}
function Yc(e, t) {
  switch (t.tagID) {
    case c.HTML: {
      we(e, t);
      break;
    }
    case c.OPTION: {
      e.openElements.currentTagId === c.OPTION && e.openElements.pop(),
        e._insertElement(t, L.HTML);
      break;
    }
    case c.OPTGROUP: {
      e.openElements.currentTagId === c.OPTION && e.openElements.pop(),
        e.openElements.currentTagId === c.OPTGROUP && e.openElements.pop(),
        e._insertElement(t, L.HTML);
      break;
    }
    case c.INPUT:
    case c.KEYGEN:
    case c.TEXTAREA:
    case c.SELECT: {
      e.openElements.hasInSelectScope(c.SELECT) &&
        (e.openElements.popUntilTagNamePopped(c.SELECT),
        e._resetInsertionMode(),
        t.tagID !== c.SELECT && e._processStartTag(t));
      break;
    }
    case c.SCRIPT:
    case c.TEMPLATE: {
      Ye(e, t);
      break;
    }
  }
}
function $c(e, t) {
  switch (t.tagID) {
    case c.OPTGROUP: {
      e.openElements.stackTop > 0 &&
        e.openElements.currentTagId === c.OPTION &&
        e.openElements.tagIDs[e.openElements.stackTop - 1] === c.OPTGROUP &&
        e.openElements.pop(),
        e.openElements.currentTagId === c.OPTGROUP && e.openElements.pop();
      break;
    }
    case c.OPTION: {
      e.openElements.currentTagId === c.OPTION && e.openElements.pop();
      break;
    }
    case c.SELECT: {
      e.openElements.hasInSelectScope(c.SELECT) &&
        (e.openElements.popUntilTagNamePopped(c.SELECT),
        e._resetInsertionMode());
      break;
    }
    case c.TEMPLATE: {
      Dt(e, t);
      break;
    }
  }
}
function TU(e, t) {
  const a = t.tagID;
  a === c.CAPTION ||
  a === c.TABLE ||
  a === c.TBODY ||
  a === c.TFOOT ||
  a === c.THEAD ||
  a === c.TR ||
  a === c.TD ||
  a === c.TH
    ? (e.openElements.popUntilTagNamePopped(c.SELECT),
      e._resetInsertionMode(),
      e._processStartTag(t))
    : Yc(e, t);
}
function AU(e, t) {
  const a = t.tagID;
  a === c.CAPTION ||
  a === c.TABLE ||
  a === c.TBODY ||
  a === c.TFOOT ||
  a === c.THEAD ||
  a === c.TR ||
  a === c.TD ||
  a === c.TH
    ? e.openElements.hasInTableScope(a) &&
      (e.openElements.popUntilTagNamePopped(c.SELECT),
      e._resetInsertionMode(),
      e.onEndTag(t))
    : $c(e, t);
}
function CU(e, t) {
  switch (t.tagID) {
    case c.BASE:
    case c.BASEFONT:
    case c.BGSOUND:
    case c.LINK:
    case c.META:
    case c.NOFRAMES:
    case c.SCRIPT:
    case c.STYLE:
    case c.TEMPLATE:
    case c.TITLE: {
      Ye(e, t);
      break;
    }
    case c.CAPTION:
    case c.COLGROUP:
    case c.TBODY:
    case c.TFOOT:
    case c.THEAD: {
      (e.tmplInsertionModeStack[0] = k.IN_TABLE),
        (e.insertionMode = k.IN_TABLE),
        Ht(e, t);
      break;
    }
    case c.COL: {
      (e.tmplInsertionModeStack[0] = k.IN_COLUMN_GROUP),
        (e.insertionMode = k.IN_COLUMN_GROUP),
        In(e, t);
      break;
    }
    case c.TR: {
      (e.tmplInsertionModeStack[0] = k.IN_TABLE_BODY),
        (e.insertionMode = k.IN_TABLE_BODY),
        rr(e, t);
      break;
    }
    case c.TD:
    case c.TH: {
      (e.tmplInsertionModeStack[0] = k.IN_ROW),
        (e.insertionMode = k.IN_ROW),
        nr(e, t);
      break;
    }
    default:
      (e.tmplInsertionModeStack[0] = k.IN_BODY),
        (e.insertionMode = k.IN_BODY),
        we(e, t);
  }
}
function xU(e, t) {
  t.tagID === c.TEMPLATE && Dt(e, t);
}
function Vc(e, t) {
  e.openElements.tmplCount > 0
    ? (e.openElements.popUntilTagNamePopped(c.TEMPLATE),
      e.activeFormattingElements.clearToLastMarker(),
      e.tmplInsertionModeStack.shift(),
      e._resetInsertionMode(),
      e.onEof(t))
    : zn(e, t);
}
function DU(e, t) {
  t.tagID === c.HTML ? we(e, t) : $a(e, t);
}
function Wc(e, t) {
  var a;
  if (t.tagID === c.HTML) {
    if (
      (e.fragmentContext || (e.insertionMode = k.AFTER_AFTER_BODY),
      e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === c.HTML)
    ) {
      e._setEndLocation(e.openElements.items[0], t);
      const r = e.openElements.items[1];
      r &&
        !(
          !(
            (a = e.treeAdapter.getNodeSourceCodeLocation(r)) === null ||
            a === void 0
          ) && a.endTag
        ) &&
        e._setEndLocation(r, t);
    }
  } else $a(e, t);
}
function $a(e, t) {
  (e.insertionMode = k.IN_BODY), tr(e, t);
}
function zU(e, t) {
  switch (t.tagID) {
    case c.HTML: {
      we(e, t);
      break;
    }
    case c.FRAMESET: {
      e._insertElement(t, L.HTML);
      break;
    }
    case c.FRAME: {
      e._appendElement(t, L.HTML), (t.ackSelfClosing = !0);
      break;
    }
    case c.NOFRAMES: {
      Ye(e, t);
      break;
    }
  }
}
function IU(e, t) {
  t.tagID === c.FRAMESET &&
    !e.openElements.isRootHtmlElementCurrent() &&
    (e.openElements.pop(),
    !e.fragmentContext &&
      e.openElements.currentTagId !== c.FRAMESET &&
      (e.insertionMode = k.AFTER_FRAMESET));
}
function SU(e, t) {
  switch (t.tagID) {
    case c.HTML: {
      we(e, t);
      break;
    }
    case c.NOFRAMES: {
      Ye(e, t);
      break;
    }
  }
}
function NU(e, t) {
  t.tagID === c.HTML && (e.insertionMode = k.AFTER_AFTER_FRAMESET);
}
function FU(e, t) {
  t.tagID === c.HTML ? we(e, t) : Na(e, t);
}
function Na(e, t) {
  (e.insertionMode = k.IN_BODY), tr(e, t);
}
function OU(e, t) {
  switch (t.tagID) {
    case c.HTML: {
      we(e, t);
      break;
    }
    case c.NOFRAMES: {
      Ye(e, t);
      break;
    }
  }
}
function LU(e, t) {
  (t.chars = ue), e._insertCharacters(t);
}
function RU(e, t) {
  e._insertCharacters(t), (e.framesetOk = !1);
}
function Gc(e) {
  for (
    ;
    e.treeAdapter.getNamespaceURI(e.openElements.current) !== L.HTML &&
    !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current);

  )
    e.openElements.pop();
}
function vU(e, t) {
  if (K7(t)) Gc(e), e._startTagOutsideForeignContent(t);
  else {
    const a = e._getAdjustedCurrentElement(),
      r = e.treeAdapter.getNamespaceURI(a);
    r === L.MATHML ? Nc(t) : r === L.SVG && (J7(t), Fc(t)),
      xn(t),
      t.selfClosing ? e._appendElement(t, r) : e._insertElement(t, r),
      (t.ackSelfClosing = !0);
  }
}
function BU(e, t) {
  if (t.tagID === c.P || t.tagID === c.BR) {
    Gc(e), e._endTagOutsideForeignContent(t);
    return;
  }
  for (let a = e.openElements.stackTop; a > 0; a--) {
    const r = e.openElements.items[a];
    if (e.treeAdapter.getNamespaceURI(r) === L.HTML) {
      e._endTagOutsideForeignContent(t);
      break;
    }
    const n = e.treeAdapter.getTagName(r);
    if (n.toLowerCase() === t.tagName) {
      (t.tagName = n), e.openElements.shortenToLength(a);
      break;
    }
  }
}
x.AREA,
  x.BASE,
  x.BASEFONT,
  x.BGSOUND,
  x.BR,
  x.COL,
  x.EMBED,
  x.FRAME,
  x.HR,
  x.IMG,
  x.INPUT,
  x.KEYGEN,
  x.LINK,
  x.META,
  x.PARAM,
  x.SOURCE,
  x.TRACK,
  x.WBR;
const PU = new Set([
    "mdxFlowExpression",
    "mdxJsxFlowElement",
    "mdxJsxTextElement",
    "mdxTextExpression",
    "mdxjsEsm",
  ]),
  ls = {
    sourceCodeLocationInfo: !0,
    scriptingEnabled: !1,
  };
function Qc(e, t) {
  const a = GU(e),
    r = No("type", {
      handlers: {
        root: MU,
        element: HU,
        text: UU,
        comment: Kc,
        doctype: jU,
        raw: YU,
      },
      unknown: $U,
    }),
    n = {
      parser: a ? new os(ls) : os.getFragmentParser(void 0, ls),
      handle(o) {
        r(o, n);
      },
      stitches: !1,
      options: t || {},
    };
  r(e, n), qt(n, at());
  const s = a ? n.parser.document : n.parser.getFragment(),
    i = XM(s, {
      file: n.options.file,
    });
  return (
    n.stitches &&
      et(i, "comment", function (o, u, l) {
        const p = o;
        if (p.value.stitch && l && u !== void 0) {
          const h = l.children;
          return (h[u] = p.value.stitch), u;
        }
      }),
    i.type === "root" &&
    i.children.length === 1 &&
    i.children[0].type === e.type
      ? i.children[0]
      : i
  );
}
function Xc(e, t) {
  let a = -1;
  if (e) for (; ++a < e.length; ) t.handle(e[a]);
}
function MU(e, t) {
  Xc(e.children, t);
}
function HU(e, t) {
  VU(e, t), Xc(e.children, t), WU(e, t);
}
function UU(e, t) {
  const a = {
    type: ee.CHARACTER,
    chars: e.value,
    location: ya(e),
  };
  qt(t, at(e)),
    (t.parser.currentToken = a),
    t.parser._processToken(t.parser.currentToken);
}
function jU(e, t) {
  const a = {
    type: ee.DOCTYPE,
    name: "html",
    forceQuirks: !1,
    publicId: "",
    systemId: "",
    location: ya(e),
  };
  qt(t, at(e)),
    (t.parser.currentToken = a),
    t.parser._processToken(t.parser.currentToken);
}
function qU(e, t) {
  t.stitches = !0;
  const a = QU(e);
  if ("children" in e && "children" in a) {
    const r = Qc(
      {
        type: "root",
        children: e.children,
      },
      t.options,
    );
    a.children = r.children;
  }
  Kc(
    {
      type: "comment",
      value: {
        stitch: a,
      },
    },
    t,
  );
}
function Kc(e, t) {
  const a = e.value,
    r = {
      type: ee.COMMENT,
      data: a,
      location: ya(e),
    };
  qt(t, at(e)),
    (t.parser.currentToken = r),
    t.parser._processToken(t.parser.currentToken);
}
function YU(e, t) {
  if (
    ((t.parser.tokenizer.preprocessor.html = ""),
    (t.parser.tokenizer.preprocessor.pos = -1),
    (t.parser.tokenizer.preprocessor.lastGapPos = -2),
    (t.parser.tokenizer.preprocessor.gapStack = []),
    (t.parser.tokenizer.preprocessor.skipNextNewLine = !1),
    (t.parser.tokenizer.preprocessor.lastChunkWritten = !1),
    (t.parser.tokenizer.preprocessor.endOfChunkHit = !1),
    (t.parser.tokenizer.preprocessor.isEol = !1),
    Jc(t, at(e)),
    t.parser.tokenizer.write(e.value, !1),
    t.parser.tokenizer._runParsingLoop(),
    t.parser.tokenizer.state === 72 || t.parser.tokenizer.state === 78)
  ) {
    t.parser.tokenizer.preprocessor.lastChunkWritten = !0;
    const a = t.parser.tokenizer._consume();
    t.parser.tokenizer._callState(a);
  }
}
function $U(e, t) {
  const a = e;
  if (t.options.passThrough && t.options.passThrough.includes(a.type)) qU(a, t);
  else {
    let r = "";
    throw (
      (PU.has(a.type) &&
        (r =
          ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"),
      new Error("Cannot compile `" + a.type + "` node" + r))
    );
  }
}
function qt(e, t) {
  Jc(e, t);
  const a = e.parser.tokenizer.currentCharacterToken;
  a &&
    a.location &&
    ((a.location.endLine = e.parser.tokenizer.preprocessor.line),
    (a.location.endCol = e.parser.tokenizer.preprocessor.col + 1),
    (a.location.endOffset = e.parser.tokenizer.preprocessor.offset + 1),
    (e.parser.currentToken = a),
    e.parser._processToken(e.parser.currentToken)),
    (e.parser.tokenizer.paused = !1),
    (e.parser.tokenizer.inLoop = !1),
    (e.parser.tokenizer.active = !1),
    (e.parser.tokenizer.returnState = fe.DATA),
    (e.parser.tokenizer.charRefCode = -1),
    (e.parser.tokenizer.consumedAfterSnapshot = -1),
    (e.parser.tokenizer.currentLocation = null),
    (e.parser.tokenizer.currentCharacterToken = null),
    (e.parser.tokenizer.currentToken = null),
    (e.parser.tokenizer.currentAttr = {
      name: "",
      value: "",
    });
}
function Jc(e, t) {
  if (t && t.offset !== void 0) {
    const a = {
      startLine: t.line,
      startCol: t.column,
      startOffset: t.offset,
      endLine: -1,
      endCol: -1,
      endOffset: -1,
    };
    (e.parser.tokenizer.preprocessor.lineStartPos = -t.column + 1),
      (e.parser.tokenizer.preprocessor.droppedBufferSize = t.offset),
      (e.parser.tokenizer.preprocessor.line = t.line),
      (e.parser.tokenizer.currentLocation = a);
  }
}
function VU(e, t) {
  if (t.parser.tokenizer.state === fe.PLAINTEXT) return;
  qt(t, at(e));
  const a = t.parser.openElements.current;
  let r = "namespaceURI" in a ? a.namespaceURI : Et.html;
  r === Et.html && e.tagName === "svg" && (r = Et.svg);
  const n = t7(
      {
        ...e,
        children: [],
      },
      {
        space: r === Et.svg ? "svg" : "html",
      },
    ),
    s = "attrs" in n ? n.attrs : [],
    i = {
      type: ee.START_TAG,
      tagName: e.tagName,
      tagID: jt(e.tagName),
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: s,
      location: ya(e),
    };
  (t.parser.currentToken = i),
    t.parser._processToken(t.parser.currentToken),
    (t.parser.tokenizer.lastStartTagName = e.tagName);
}
function WU(e, t) {
  if (
    (!t.parser.tokenizer.inForeignNode && u7.includes(e.tagName)) ||
    t.parser.tokenizer.state === fe.PLAINTEXT
  )
    return;
  qt(t, Xa(e));
  const a = {
    type: ee.END_TAG,
    tagName: e.tagName,
    tagID: jt(e.tagName),
    selfClosing: !1,
    ackSelfClosing: !1,
    attrs: [],
    location: ya(e),
  };
  (t.parser.currentToken = a),
    t.parser._processToken(t.parser.currentToken),
    a.tagName === t.parser.tokenizer.lastStartTagName &&
      (t.parser.tokenizer.state === fe.RCDATA ||
        t.parser.tokenizer.state === fe.RAWTEXT ||
        t.parser.tokenizer.state === fe.SCRIPT_DATA) &&
      (t.parser.tokenizer.state = fe.DATA);
}
function GU(e) {
  const t = e.type === "root" ? e.children[0] : e;
  return !!(
    t &&
    (t.type === "doctype" || (t.type === "element" && t.tagName === "html"))
  );
}
function ya(e) {
  const t = at(e) || {
      line: void 0,
      column: void 0,
      offset: void 0,
    },
    a = Xa(e) || {
      line: void 0,
      column: void 0,
      offset: void 0,
    };
  return {
    startLine: t.line,
    startCol: t.column,
    startOffset: t.offset,
    endLine: a.line,
    endCol: a.column,
    endOffset: a.offset,
  };
}
function QU(e) {
  return "children" in e
    ? Je({
        ...e,
        children: [],
      })
    : Je(e);
}
function XU(e) {
  return function (t, a) {
    return Qc(t, {
      ...e,
      file: a,
    });
  };
}
const KU = {
  remark: {
    plugins: {
      "remark-mdc": {
        instance: lg,
      },
      "remark-emoji": {
        instance: XB,
      },
      "remark-gfm": {
        instance: TM,
      },
    },
  },
  rehype: {
    options: {
      handlers: Bg,
      allowDangerousHtml: !0,
    },
    plugins: {
      "rehype-external-links": {
        instance: RM,
      },
      "rehype-sort-attribute-values": {
        instance: vM,
      },
      "rehype-sort-attributes": {
        instance: BM,
      },
      "rehype-raw": {
        instance: XU,
        options: {
          passThrough: ["element"],
        },
      },
    },
  },
  highlight: !1,
  toc: {
    searchDepth: 2,
    depth: 2,
  },
};
function Zc(e) {
  return e.type === "comment"
    ? ""
    : e.type === "text"
      ? e.value || ""
      : (e.children || []).reduce((t, a) => t.concat(Zc(a)), "");
}
function eu(e, t = 2, a = 0) {
  return !Array.isArray(e.children) || a === t
    ? [e]
    : [e, ...e.children.reduce((r, n) => r.concat(eu(n, t, a + 1)), [])];
}
const tu = ["h2", "h3", "h4", "h5", "h6"],
  JU = tu.reduce((e, t) => ((e[t] = Number(t.charAt(t.length - 1))), e), {}),
  ZU = (e) => JU[e.tag],
  ej = (e) => (
    (e < 1 || e > 5) &&
      (console.log(
        `\`toc.depth\` is set to ${e}. It should be a number between 1 and 5. `,
      ),
      (e = 1)),
    tu.slice(0, e)
  );
function au(e) {
  if (e.length <= 1) return e;
  const t = [];
  let a;
  return (
    e.forEach((r) => {
      !a || r.depth <= a.depth
        ? ((r.children = []), (a = r), t.push(r))
        : a.children.push(r);
    }),
    t.forEach((r) => {
      var n;
      (n = r.children) != null && n.length
        ? (r.children = au(r.children))
        : delete r.children;
    }),
    t
  );
}
function tj(e, t) {
  const { searchDepth: a, depth: r, title: n = "" } = t,
    s = ej(r),
    o = eu(e, a)
      .filter((u) => s.includes(u.tag || ""))
      .map((u) => {
        var l;
        return {
          id: (l = u.props) == null ? void 0 : l.id,
          depth: ZU(u),
          text: Zc(u),
        };
      });
  return {
    title: n,
    searchDepth: a,
    depth: r,
    links: o,
  };
}
function aj(e, t) {
  const a = tj(e, t);
  return (a.links = au(a.links)), a;
}
let Be, zr;
const rj = async (e = {}) => {
    var n, s, i, o, u, l, p, h, f, _, y, b, C;
    Be ||
      (Be = await Ir(
        () => import("./BAWIgH33.js"),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
        import.meta.url,
      ).catch(() => ({}))),
      zr ||
        (zr = await Ir(() => import("./bNaE6FFb.js"), [], import.meta.url)
          .then((T) => T.getMdcConfigs())
          .catch(() => []));
    const t = [...(zr || []), ...(e.configs || [])];
    e.highlight != null &&
      e.highlight != !1 &&
      e.highlight.highlighter !== void 0 &&
      typeof e.highlight.highlighter != "function" &&
      ((e = {
        ...e,
        highlight: {
          ...e.highlight,
        },
      }),
      delete e.highlight.highlighter);
    const a = Rn(
      e,
      {
        remark: {
          plugins: Be == null ? void 0 : Be.remarkPlugins,
        },
        rehype: {
          plugins: Be == null ? void 0 : Be.rehypePlugins,
        },
        highlight: Be == null ? void 0 : Be.highlight,
      },
      KU,
    );
    (s = (n = a.rehype) == null ? void 0 : n.plugins) != null &&
      s.highlight &&
      (a.rehype.plugins.highlight.options = {
        ...(a.rehype.plugins.highlight.options || {}),
        ...(a.highlight || {}),
      });
    let r = nl();
    for (const T of t)
      r =
        (await ((o = (i = T.unified) == null ? void 0 : i.pre) == null
          ? void 0
          : o.call(i, r))) || r;
    r.use(uh);
    for (const T of t)
      r =
        (await ((l = (u = T.unified) == null ? void 0 : u.remark) == null
          ? void 0
          : l.call(u, r))) || r;
    await Ui(r, (p = a.remark) == null ? void 0 : p.plugins),
      r.use(nd, (h = a.rehype) == null ? void 0 : h.options);
    for (const T of t)
      r =
        (await ((_ = (f = T.unified) == null ? void 0 : f.rehype) == null
          ? void 0
          : _.call(f, r))) || r;
    await Ui(r, (y = a.rehype) == null ? void 0 : y.plugins), r.use(Eg, a);
    for (const T of t)
      r =
        (await ((C = (b = T.unified) == null ? void 0 : b.post) == null
          ? void 0
          : C.call(b, r))) || r;
    return async (T) => {
      const { content: I, data: O } = await qo(T),
        M = await r.process({
          value: I,
          data: O,
        }),
        N = M.result,
        d = Object.assign(ij(N.body), O, (M == null ? void 0 : M.data) || {});
      let z;
      if (d.toc !== !1) {
        const U = Rn(d.toc || {}, a.toc);
        z = aj(N.body, U);
      }
      return {
        data: d,
        body: N.body,
        excerpt: N.excerpt,
        toc: z,
      };
    };
  },
  nj = async (e, t = {}) => (await rj(t))(e);
function ij(e) {
  let t = "",
    a = "";
  const r = e.children.filter((n) => n.type === "element" && n.tag !== "hr");
  if (r.length && r[0].tag === "h1") {
    const n = r.shift();
    t = Bn(n);
  }
  if (r.length && r[0].tag === "p") {
    const n = r.shift();
    a = Bn(n);
  }
  return {
    title: t,
    description: a,
  };
}
const sj = xt({
    __name: "MDC",
    props: {
      tag: {
        type: [String, Boolean],
        default: "div",
      },
      value: {
        type: [String, Object],
        required: !0,
      },
      excerpt: {
        type: Boolean,
        default: !1,
      },
      parserOptions: {
        type: Object,
        default: () => ({}),
      },
      class: {
        type: [String, Array, Object],
        default: "",
      },
    },
    async setup(e) {
      let t, a;
      const r = e,
        n = Ue(() => _u(r.value)),
        {
          data: s,
          refresh: i,
          error: o,
        } = (([t, a] = hs(async () =>
          ds(
            n.value,
            async () =>
              typeof r.value != "string"
                ? r.value
                : await nj(r.value, r.parserOptions),
            "$0FmMzbRCPz",
          ),
        )),
        (t = await t),
        a(),
        t),
        u = Ue(() => {
          var l, p;
          return r.excerpt
            ? (l = s.value) == null
              ? void 0
              : l.excerpt
            : (p = s.value) == null
              ? void 0
              : p.body;
        });
      return (
        mu(
          () => r.value,
          () => {
            i();
          },
        ),
        (l, p) => {
          var f, _, y, b;
          const h = Ru;
          return le(
            l.$slots,
            "default",
            {
              data: (f = q(s)) == null ? void 0 : f.data,
              body: (_ = q(s)) == null ? void 0 : _.body,
              toc: (y = q(s)) == null ? void 0 : y.toc,
              excerpt: (b = q(s)) == null ? void 0 : b.excerpt,
              error: q(o),
            },
            () => {
              var C;
              return [
                u.value
                  ? (X(),
                    Me(
                      h,
                      {
                        key: 0,
                        tag: e.tag,
                        class: se(r.class),
                        body: u.value,
                        data: (C = q(s)) == null ? void 0 : C.data,
                      },
                      null,
                      8,
                      ["tag", "class", "body", "data"],
                    ))
                  : ce("", !0),
              ];
            },
          );
        }
      );
    },
  }),
  oj = gu(yu);
function cj(e, t = {}) {
  const { x: a, y: r } = oj(t),
    n = Da(e ?? (window == null ? void 0 : window.document.body)),
    s = Da(0),
    i = Da(0);
  return (
    ka &&
      ku(
        [n, a, r],
        () => {
          const o = bu(n);
          if (!o) return;
          const { left: u, top: l } = o.getBoundingClientRect(),
            p = a.value - (u + ka.scrollX),
            h = r.value - (l + ka.scrollY);
          Math.abs(p) > 1500 ||
            Math.abs(h) > 1500 ||
            ka.screen.width <= 800 ||
            ((s.value = p), (i.value = h));
        },
        {
          immediate: !0,
          throttle: 50,
        },
      ),
    {
      x: a,
      y: r,
      elementX: s,
      elementY: i,
    }
  );
}
const uj = (e) => (Du("data-v-e3430399"), (e = e()), zu(), e),
  lj = uj(() =>
    Ze(
      "span",
      {
        class: "absolute inset-0",
        "aria-hidden": "true",
      },
      null,
      -1,
    ),
  ),
  fj = xt({
    inheritAttrs: !1,
    __name: "LandingCard",
    props: {
      ...wu,
      title: {
        type: String,
        default: void 0,
      },
      description: {
        type: String,
        default: void 0,
      },
      icon: {
        type: String,
        default: void 0,
      },
      color: {
        type: String,
        default: "primary",
      },
      orientation: {
        type: String,
        default: "vertical",
      },
      class: {
        type: [String, Object, Array],
        default: void 0,
      },
      ui: {
        type: Object,
        default: () => ({}),
      },
    },
    setup(e) {
      Eu((_) => ({
        "3caf498e": q(a),
        b7aa0e1a: q(r),
      }));
      const t = e,
        a = Ue(() => {
          var _;
          return t.color === "primary"
            ? "rgb(var(--color-primary-DEFAULT))"
            : ((_ = ba[t.color]) == null ? void 0 : _["500"]) ||
                ba[t.color] ||
                t.color;
        }),
        r = Ue(() => {
          var _;
          return t.color === "primary"
            ? "rgb(var(--color-primary-DEFAULT))"
            : ((_ = ba[t.color]) == null ? void 0 : _["400"]) ||
                ba[t.color] ||
                t.color;
        }),
        n = Ue(() => ({
          wrapper:
            "relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow",
          to: "hover:ring-primary-500 dark:hover:ring-primary-400 transition-shadow duration-200",
          base: "flex-1 flex flex-col overflow-hidden",
          container: "",
          body: {
            base: oa(
              "gap-x-8 gap-y-4 rounded-xl flex-1",
              t.orientation === "vertical" && "flex flex-col",
              !!i.default &&
                t.orientation === "horizontal" &&
                "grid lg:grid-cols-2 lg:items-center",
            ),
          },
          background:
            "bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]",
          ring: "",
          rounded: "rounded-xl",
          shadow: "",
          icon: {
            wrapper: "mb-2 pointer-events-none",
            base: "w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white",
          },
          title: "text-gray-900 dark:text-white text-base font-bold truncate",
          description: "text-[15px] text-gray-500 dark:text-gray-400 mt-1",
        })),
        s = Da(),
        i = Tu(),
        { elementX: o, elementY: u } = cj(s),
        { ui: l, attrs: p } = Va(
          "landing.card",
          ft(t, "ui"),
          n,
          ft(t, "class"),
          !0,
        ),
        h = Ue(() => Au(t)),
        f = Ue(() =>
          (t.title || (i.title && Cu(i.title())) || "Card link").trim(),
        );
      return (_, y) => {
        const b = xu,
          C = ps,
          T = vu;
        return (
          X(),
          ae(
            "div",
            je(
              {
                ref_key: "el",
                ref: s,
                style: {
                  "--x": `${q(o)}px`,
                  "--y": `${q(u)}px`,
                },
                class: [q(l).wrapper, _.to && q(l).to],
              },
              q(p),
            ),
            [
              Le(
                T,
                {
                  ui: q(l),
                },
                {
                  default: Fe(() => [
                    Ze(
                      "div",
                      {
                        class: se(q(l).container),
                      },
                      [
                        _.to
                          ? (X(),
                            Me(
                              b,
                              je(
                                {
                                  key: 0,
                                  "aria-label": q(f),
                                },
                                q(h),
                                {
                                  class: "focus:outline-none",
                                  tabindex: "-1",
                                },
                              ),
                              {
                                default: Fe(() => [lj]),
                                _: 1,
                              },
                              16,
                              ["aria-label"],
                            ))
                          : ce("", !0),
                        e.icon || _.$slots.icon
                          ? (X(),
                            ae(
                              "div",
                              {
                                key: 1,
                                class: se(q(l).icon.wrapper),
                              },
                              [
                                le(
                                  _.$slots,
                                  "icon",
                                  {},
                                  () => [
                                    Le(
                                      C,
                                      {
                                        name: e.icon,
                                        class: se(q(l).icon.base),
                                      },
                                      null,
                                      8,
                                      ["name", "class"],
                                    ),
                                  ],
                                  !0,
                                ),
                              ],
                              2,
                            ))
                          : ce("", !0),
                        e.title || _.$slots.title
                          ? (X(),
                            ae(
                              "p",
                              {
                                key: 2,
                                class: se(q(l).title),
                              },
                              [
                                le(
                                  _.$slots,
                                  "title",
                                  {},
                                  () => [Tt(Pe(e.title), 1)],
                                  !0,
                                ),
                              ],
                              2,
                            ))
                          : ce("", !0),
                        e.description || _.$slots.description
                          ? (X(),
                            ae(
                              "p",
                              {
                                key: 3,
                                class: se(q(l).description),
                              },
                              [
                                le(
                                  _.$slots,
                                  "description",
                                  {},
                                  () => [Tt(Pe(e.description), 1)],
                                  !0,
                                ),
                              ],
                              2,
                            ))
                          : ce("", !0),
                        le(_.$slots, "container", {}, void 0, !0),
                      ],
                      2,
                    ),
                    _.$slots.default
                      ? le(
                          _.$slots,
                          "default",
                          {
                            key: 0,
                          },
                          void 0,
                          !0,
                        )
                      : ce("", !0),
                  ]),
                  _: 3,
                },
                8,
                ["ui"],
              ),
            ],
            16,
          )
        );
      };
    },
  }),
  hj = fs(fj, [["__scopeId", "data-v-e3430399"]]),
  dj = xt({
    inheritAttrs: !1,
    __name: "LandingHero",
    props: {
      title: {
        type: String,
        default: void 0,
      },
      description: {
        type: String,
        default: void 0,
      },
      links: {
        type: Array,
        default: () => [],
      },
      orientation: {
        type: String,
        default: "vertical",
      },
      class: {
        type: [String, Object, Array],
        default: void 0,
      },
      ui: {
        type: Object,
        default: () => ({}),
      },
    },
    setup(e) {
      const t = e,
        a = Ue(() => {
          const s = oa(
              "gap-16 sm:gap-y-24",
              t.orientation === "vertical" && "flex flex-col",
              t.orientation === "horizontal" &&
                "grid lg:grid-cols-2 lg:items-center",
            ),
            i = t.orientation === "vertical" ? "text-center" : "",
            o = oa(
              "mt-10 flex flex-wrap gap-x-6 gap-y-3",
              t.orientation === "vertical" && "justify-center",
            );
          return {
            wrapper: "py-24 sm:py-32 md:py-40 relative",
            container: s,
            base: i,
            headline: "mb-10",
            title:
              "text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",
            description:
              "mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",
            links: o,
          };
        }),
        { ui: r, attrs: n } = Va(
          "landing.hero",
          ft(t, "ui"),
          a,
          ft(t, "class"),
          !0,
        );
      return (s, i) => {
        const o = _s,
          u = Zr;
        return (
          X(),
          ae(
            "div",
            je(
              {
                class: q(r).wrapper,
              },
              q(n),
            ),
            [
              le(s.$slots, "top"),
              Le(
                u,
                {
                  class: se(q(r).container),
                },
                {
                  default: Fe(() => {
                    var l;
                    return [
                      Ze(
                        "div",
                        {
                          class: se(q(r).base),
                        },
                        [
                          s.$slots.headline
                            ? (X(),
                              ae(
                                "div",
                                {
                                  key: 0,
                                  class: se(q(r).headline),
                                },
                                [le(s.$slots, "headline")],
                                2,
                              ))
                            : ce("", !0),
                          Ze(
                            "h1",
                            {
                              class: se(q(r).title),
                            },
                            [
                              le(s.$slots, "title", {}, () => [
                                Tt(Pe(e.title), 1),
                              ]),
                            ],
                            2,
                          ),
                          e.description || s.$slots.description
                            ? (X(),
                              ae(
                                "p",
                                {
                                  key: 1,
                                  class: se(q(r).description),
                                },
                                [
                                  le(s.$slots, "description", {}, () => [
                                    Tt(Pe(e.description), 1),
                                  ]),
                                ],
                                2,
                              ))
                            : ce("", !0),
                          ((l = e.links) != null && l.length) || s.$slots.links
                            ? (X(),
                              ae(
                                "div",
                                {
                                  key: 2,
                                  class: se(q(r).links),
                                },
                                [
                                  le(s.$slots, "links", {}, () => [
                                    (X(!0),
                                    ae(
                                      ct,
                                      null,
                                      wt(
                                        e.links,
                                        (p, h) => (
                                          X(),
                                          Me(
                                            o,
                                            je(
                                              {
                                                key: h,
                                              },
                                              p,
                                              {
                                                onClick: p.click,
                                              },
                                            ),
                                            null,
                                            16,
                                            ["onClick"],
                                          )
                                        ),
                                      ),
                                      128,
                                    )),
                                  ]),
                                ],
                                2,
                              ))
                            : ce("", !0),
                        ],
                        2,
                      ),
                      le(s.$slots, "default"),
                    ];
                  }),
                  _: 3,
                },
                8,
                ["class"],
              ),
              le(s.$slots, "bottom"),
            ],
            16,
          )
        );
      };
    },
  }),
  pj = xt({
    inheritAttrs: !1,
    __name: "PageGrid",
    props: {
      class: {
        type: [String, Object, Array],
        default: void 0,
      },
      ui: {
        type: Object,
        default: () => ({}),
      },
    },
    setup(e) {
      const t = {
          wrapper: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8",
        },
        a = e,
        { ui: r, attrs: n } = Va(
          "page.grid",
          ft(a, "ui"),
          t,
          ft(a, "class"),
          !0,
        );
      return (s, i) => (
        X(),
        ae(
          "div",
          je(
            {
              class: q(r).wrapper,
            },
            q(n),
          ),
          [le(s.$slots, "default")],
          16,
        )
      );
    },
  }),
  _j = {
    key: 0,
  },
  mj = {
    key: 2,
  },
  gj = {
    key: 0,
  },
  yj = xt({
    inheritAttrs: !1,
    __name: "LandingSection",
    props: {
      icon: {
        type: String,
        default: void 0,
      },
      headline: {
        type: String,
        default: void 0,
      },
      title: {
        type: String,
        default: void 0,
      },
      description: {
        type: String,
        default: void 0,
      },
      features: {
        type: Array,
        default: () => [],
      },
      links: {
        type: Array,
        default: () => [],
      },
      slot: {
        type: String,
        default: void 0,
      },
      align: {
        type: String,
        default: "center",
      },
      class: {
        type: [String, Object, Array],
        default: void 0,
      },
      ui: {
        type: Object,
        default: () => ({}),
      },
    },
    setup(e) {
      const t = ms(),
        a = e,
        r = Ue(() => {
          const i = oa(
              "gap-16 sm:gap-y-24",
              a.align === "center"
                ? "flex flex-col"
                : "grid lg:grid-cols-2 lg:items-center",
            ),
            o = oa(
              "",
              a.align === "center" && "text-center flex flex-col items-center",
              a.align === "right" && "lg:order-last",
            );
          return {
            wrapper: "py-24 sm:py-32",
            container: i,
            base: o,
            icon: {
              wrapper: "flex mb-6",
              base: "w-10 h-10 flex-shrink-0 text-primary",
            },
            headline: "mb-2 text-base/7 font-semibold text-primary",
            title:
              "text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",
            description: "mt-6 text-lg/8 text-gray-600 dark:text-gray-300",
            links: "mt-8 flex flex-wrap gap-x-3 gap-y-1.5",
            features: {
              wrapper: {
                base: "mt-6 leading-7",
                list: "space-y-4",
                grid: "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16",
              },
              base: "relative pl-8",
              name: "font-semibold text-gray-900 dark:text-white",
              description: "text-gray-500 dark:text-gray-400 leading-6",
              icon: {
                base: "absolute left-0 top-1 h-5 w-5 text-primary",
                name: t.ui.icons.check,
              },
            },
          };
        }),
        { ui: n, attrs: s } = Va(
          "landing.section",
          ft(a, "ui"),
          r,
          ft(a, "class"),
          !0,
        );
      return (i, o) => {
        const u = ps,
          l = _s,
          p = Zr;
        return (
          X(),
          ae(
            "div",
            je(
              {
                class: q(n).wrapper,
              },
              q(s),
            ),
            [
              le(i.$slots, "top"),
              Le(
                p,
                {
                  class: se(q(n).container),
                },
                {
                  default: Fe(() => {
                    var h, f, _, y, b;
                    return [
                      e.icon ||
                      i.$slots.icon ||
                      e.headline ||
                      i.$slots.headline ||
                      e.title ||
                      i.$slots.title ||
                      e.description ||
                      i.$slots.description ||
                      ((h = e.links) != null && h.length) ||
                      i.$slots.links
                        ? (X(),
                          ae(
                            "div",
                            {
                              key: 0,
                              class: se(q(n).base),
                            },
                            [
                              e.icon || i.$slots.icon
                                ? (X(),
                                  ae(
                                    "div",
                                    {
                                      key: 0,
                                      class: se(q(n).icon.wrapper),
                                    },
                                    [
                                      le(i.$slots, "icon", {}, () => [
                                        Le(
                                          u,
                                          {
                                            name: e.icon,
                                            class: se(q(n).icon.base),
                                          },
                                          null,
                                          8,
                                          ["name", "class"],
                                        ),
                                      ]),
                                    ],
                                    2,
                                  ))
                                : e.headline || i.$slots.headline
                                  ? (X(),
                                    ae(
                                      "div",
                                      {
                                        key: 1,
                                        class: se(q(n).headline),
                                      },
                                      [
                                        le(i.$slots, "headline", {}, () => [
                                          Tt(Pe(e.headline), 1),
                                        ]),
                                      ],
                                      2,
                                    ))
                                  : ce("", !0),
                              e.title || i.$slots.title
                                ? (X(),
                                  ae(
                                    "h2",
                                    {
                                      key: 2,
                                      class: se(q(n).title),
                                    },
                                    [
                                      le(i.$slots, "title", {}, () => [
                                        Tt(Pe(e.title), 1),
                                      ]),
                                    ],
                                    2,
                                  ))
                                : ce("", !0),
                              e.description || i.$slots.description
                                ? (X(),
                                  ae(
                                    "p",
                                    {
                                      key: 3,
                                      class: se(q(n).description),
                                    },
                                    [
                                      le(i.$slots, "description", {}, () => [
                                        Tt(Pe(e.description), 1),
                                      ]),
                                    ],
                                    2,
                                  ))
                                : ce("", !0),
                              e.align !== "center" &&
                              (f = e.features) != null &&
                              f.length
                                ? (X(),
                                  ae(
                                    "dl",
                                    {
                                      key: 4,
                                      class: se([
                                        q(n).features.wrapper.base,
                                        q(n).features.wrapper.list,
                                      ]),
                                    },
                                    [
                                      (X(!0),
                                      ae(
                                        ct,
                                        null,
                                        wt(
                                          e.features,
                                          (C) => (
                                            X(),
                                            ae(
                                              "div",
                                              {
                                                key: C.name,
                                                class: se(q(n).features.base),
                                              },
                                              [
                                                Ze(
                                                  "dt",
                                                  {
                                                    class: se(
                                                      q(n).features.name,
                                                    ),
                                                  },
                                                  [
                                                    Le(
                                                      u,
                                                      {
                                                        name:
                                                          C.icon ||
                                                          q(n).features.icon
                                                            .name,
                                                        class: se(
                                                          q(n).features.icon
                                                            .base,
                                                        ),
                                                        "aria-hidden": "true",
                                                      },
                                                      null,
                                                      8,
                                                      ["name", "class"],
                                                    ),
                                                    C.name
                                                      ? (X(),
                                                        ae(
                                                          "span",
                                                          _j,
                                                          Pe(C.name),
                                                          1,
                                                        ))
                                                      : ce("", !0),
                                                  ],
                                                  2,
                                                ),
                                                C.description
                                                  ? (X(),
                                                    ae(
                                                      "dd",
                                                      {
                                                        key: 0,
                                                        class: se(
                                                          q(n).features
                                                            .description,
                                                        ),
                                                      },
                                                      Pe(C.description),
                                                      3,
                                                    ))
                                                  : ce("", !0),
                                              ],
                                              2,
                                            )
                                          ),
                                        ),
                                        128,
                                      )),
                                    ],
                                    2,
                                  ))
                                : ce("", !0),
                              e.align !== "center" &&
                              (((_ = e.links) != null && _.length) ||
                                i.$slots.links)
                                ? (X(),
                                  ae(
                                    "div",
                                    {
                                      key: 5,
                                      class: se(q(n).links),
                                    },
                                    [
                                      le(i.$slots, "links", {}, () => [
                                        (X(!0),
                                        ae(
                                          ct,
                                          null,
                                          wt(
                                            e.links,
                                            (C, T) => (
                                              X(),
                                              Me(
                                                l,
                                                je(
                                                  {
                                                    key: T,
                                                  },
                                                  C,
                                                  {
                                                    onClick: C.click,
                                                  },
                                                ),
                                                null,
                                                16,
                                                ["onClick"],
                                              )
                                            ),
                                          ),
                                          128,
                                        )),
                                      ]),
                                    ],
                                    2,
                                  ))
                                : ce("", !0),
                            ],
                            2,
                          ))
                        : ce("", !0),
                      i.$slots[e.slot || "default"]
                        ? le(i.$slots, e.slot || "default", {
                            key: 1,
                          })
                        : e.align === "right"
                          ? (X(), ae("div", mj))
                          : ce("", !0),
                      e.align === "center" &&
                      (y = e.features) != null &&
                      y.length
                        ? (X(),
                          ae(
                            "dl",
                            {
                              key: 3,
                              class: se([
                                q(n).features.wrapper.base,
                                q(n).features.wrapper.grid,
                              ]),
                            },
                            [
                              (X(!0),
                              ae(
                                ct,
                                null,
                                wt(
                                  e.features,
                                  (C) => (
                                    X(),
                                    ae(
                                      "div",
                                      {
                                        key: C.name,
                                        class: se(q(n).features.base),
                                      },
                                      [
                                        Ze(
                                          "dt",
                                          {
                                            class: se(q(n).features.name),
                                          },
                                          [
                                            Le(
                                              u,
                                              {
                                                name:
                                                  C.icon ||
                                                  q(n).features.icon.name,
                                                class: se(
                                                  q(n).features.icon.base,
                                                ),
                                                "aria-hidden": "true",
                                              },
                                              null,
                                              8,
                                              ["name", "class"],
                                            ),
                                            C.name
                                              ? (X(),
                                                ae("span", gj, Pe(C.name), 1))
                                              : ce("", !0),
                                          ],
                                          2,
                                        ),
                                        C.description
                                          ? (X(),
                                            ae(
                                              "dd",
                                              {
                                                key: 0,
                                                class: se(
                                                  q(n).features.description,
                                                ),
                                              },
                                              Pe(C.description),
                                              3,
                                            ))
                                          : ce("", !0),
                                      ],
                                      2,
                                    )
                                  ),
                                ),
                                128,
                              )),
                            ],
                            2,
                          ))
                        : ce("", !0),
                      e.align === "center" &&
                      (((b = e.links) != null && b.length) || i.$slots.links)
                        ? (X(),
                          ae(
                            "div",
                            {
                              key: 4,
                              class: se(
                                q(Iu)(q(n).links, "mt-0 justify-center"),
                              ),
                            },
                            [
                              le(i.$slots, "links", {}, () => [
                                (X(!0),
                                ae(
                                  ct,
                                  null,
                                  wt(
                                    e.links,
                                    (C, T) => (
                                      X(),
                                      Me(
                                        l,
                                        je(
                                          {
                                            key: T,
                                          },
                                          C,
                                          {
                                            onClick: C.click,
                                          },
                                        ),
                                        null,
                                        16,
                                        ["onClick"],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                            ],
                            2,
                          ))
                        : ce("", !0),
                    ];
                  }),
                  _: 3,
                },
                8,
                ["class"],
              ),
              le(i.$slots, "bottom"),
            ],
            16,
          )
        );
      };
    },
  }),
  kj = {
    key: 1,
    class: "flex flex-col gap-6",
  },
  bj = ["href"],
  wj = ["src"],
  Ej = xt({
    __name: "index",
    async setup(e) {
      let t, a;
      const { data: r } =
        (([t, a] = hs(() => ds("index", () => Nu("/").findOne()))),
        (t = await t),
        a(),
        t);
      r.value ||
        Su({
          statusCode: 404,
          statusMessage: "Home page not found!",
        });
      const n = ms();
      Bu({
        title: `${n.site.name} - ${r.value.heroSubtitle}`,
        ogTitle: r.value.heroSubtitle,
        description: r.value.description,
      });
      function s(u) {
        return Object.entries(u || {})
          .map(([l, p], h) => {
            var f;
            if (p)
              return (
                typeof p == "string" &&
                  (p = {
                    to: p,
                  }),
                {
                  label: Fu(l),
                  order: h,
                  target:
                    (f = p.to) != null && f.startsWith("https")
                      ? "_blank"
                      : void 0,
                  ...p,
                }
              );
          })
          .filter(Boolean)
          .sort((l, p) => l.order - p.order);
      }
      function i(u) {
        if (u)
          return (
            typeof u == "string" &&
              (u = {
                content: u,
              }),
            `${"`".repeat(3)}${u.lang || "sh"} [${u.title || "Terminal"}]
${u.content}
${"`".repeat(3)}`
          );
      }
      const o = Ue(() => {
        var p;
        if (!r.value._heroMdTitle) return;
        const u = i(r.value.heroCode),
          l =
            !u &&
            r.value.featuresLayout === "hero" &&
            ((p = r.value.features) == null ? void 0 : p.length) > 0;
        return {
          title: r.value._heroMdTitle,
          description: r.value.heroDescription,
          links: s(r.value.heroLinks),
          withFeatures: l,
          orientation: u || l ? "horizontal" : "vertical",
          code: u,
        };
      });
      return (u, l) => {
        var T;
        const p = Hu,
          h = sj,
          f = hj,
          _ = dj,
          y = pj,
          b = yj,
          C = Zr;
        return (
          X(),
          ae(
            ct,
            null,
            [
              q(o)
                ? (X(),
                  Me(
                    _,
                    je(
                      {
                        key: 0,
                      },
                      q(o),
                      {
                        orientation: q(o).orientation,
                      },
                    ),
                    {
                      top: Fe(() => [Le(p)]),
                      title: Fe(() => [
                        Le(
                          h,
                          {
                            value: q(o).title,
                          },
                          null,
                          8,
                          ["value"],
                        ),
                      ]),
                      default: Fe(() => [
                        q(o).code
                          ? (X(),
                            Me(
                              h,
                              {
                                key: 0,
                                value: q(o).code,
                                tag: "pre",
                                class:
                                  "prose prose-primary dark:prose-invert mx-auto",
                              },
                              null,
                              8,
                              ["value"],
                            ))
                          : q(o).withFeatures
                            ? (X(),
                              ae("div", kj, [
                                (X(!0),
                                ae(
                                  ct,
                                  null,
                                  wt(
                                    q(r).features,
                                    (I, O) => (
                                      X(),
                                      Me(
                                        f,
                                        je(
                                          {
                                            key: O,
                                          },
                                          I,
                                        ),
                                        null,
                                        16,
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]))
                            : ce("", !0),
                      ]),
                      _: 1,
                    },
                    16,
                    ["orientation"],
                  ))
                : ce("", !0),
              ((T = q(r).features) == null ? void 0 : T.length) > 0 &&
              !q(o).withFeatures
                ? (X(),
                  Me(
                    b,
                    {
                      key: 1,
                      title: q(r).featuresTitle,
                    },
                    {
                      default: Fe(() => [
                        Le(y, null, {
                          default: Fe(() => [
                            (X(!0),
                            ae(
                              ct,
                              null,
                              wt(
                                q(r).features,
                                (I, O) => (
                                  X(),
                                  Me(
                                    f,
                                    je(
                                      {
                                        key: O,
                                      },
                                      I,
                                      {
                                        ui: {
                                          icon: {
                                            base: new RegExp(
                                              "\\p{Emoji}",
                                              "u",
                                            ).test(I.icon)
                                              ? "!text-2xl !w-auto !h-auto"
                                              : "w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white",
                                          },
                                        },
                                      },
                                    ),
                                    Ou(
                                      {
                                        _: 2,
                                      },
                                      [
                                        I.description
                                          ? {
                                              name: "description",
                                              fn: Fe(() => [
                                                Le(
                                                  h,
                                                  {
                                                    value: I.description,
                                                    tag: "p",
                                                    class:
                                                      "prose prose-primary dark:prose-invert",
                                                  },
                                                  null,
                                                  8,
                                                  ["value"],
                                                ),
                                              ]),
                                              key: "0",
                                            }
                                          : void 0,
                                      ],
                                    ),
                                    1040,
                                    ["ui"],
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    },
                    8,
                    ["title"],
                  ))
                : ce("", !0),
              q(r).contributors && q(r)._github
                ? (X(),
                  Me(
                    b,
                    {
                      key: 2,
                      title: "Made by community",
                    },
                    {
                      default: Fe(() => [
                        Le(C, null, {
                          default: Fe(() => [
                            Ze(
                              "a",
                              {
                                href: `https://github.com/${q(r)._github}/graphs/contributors`,
                                target: "_blank",
                              },
                              [
                                Ze(
                                  "img",
                                  {
                                    src: `https://contrib.rocks/image?repo=${q(r)._github}`,
                                  },
                                  null,
                                  8,
                                  wj,
                                ),
                              ],
                              8,
                              bj,
                            ),
                          ]),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    },
                  ))
                : ce("", !0),
            ],
            64,
          )
        );
      };
    },
  }),
  Ij = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Ej,
      },
      Symbol.toStringTag,
      {
        value: "Module",
      },
    ),
  );
export { Ij as i, dg as t, et as v };
