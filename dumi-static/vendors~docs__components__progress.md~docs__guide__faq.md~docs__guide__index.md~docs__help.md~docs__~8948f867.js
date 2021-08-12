(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [0],
  {
    '0Owb': function (e, t, n) {
      'use strict';
      function r() {
        return (
          (r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    '2N97': function (e, t, n) {
      'use strict';
      var r = n('xbqb'),
        o = n('Lw8S');
      function i() {
        var e = a(n('q1tI'));
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function u(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function a(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, i, a)
              : (r[i] = e[i]);
          }
        return (r.default = e), n && n.set(e, r), r;
      }
      function c(e, t) {
        return p(e) || d(e, t) || f(e, t) || l();
      }
      function l() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function f(e, t) {
        if (e) {
          if ('string' === typeof e) return s(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? s(e, t)
              : void 0
          );
        }
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function d(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function p(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var h,
        y = 'data-prefers-color',
        v = 'dumi:prefers-color',
        b = (function () {
          function e() {
            var t = this;
            r(this, e),
              (this.color = void 0),
              (this.callbacks = []),
              (this.color =
                localStorage.getItem(v) ||
                document.documentElement.getAttribute(y)),
              ['light', 'dark'].forEach(function (e) {
                var n = t.getColorMedia(e),
                  r = function (n) {
                    n.matches &&
                      'auto' === t.color &&
                      (document.documentElement.setAttribute(y, e),
                      t.applyCallbacks());
                  };
                n.addEventListener
                  ? n.addEventListener('change', r)
                  : n.addListener && n.addListener(r);
              });
          }
          return (
            o(e, [
              {
                key: 'getColorMedia',
                value: function (e) {
                  return window.matchMedia(
                    '(prefers-color-scheme: '.concat(e, ')'),
                  );
                },
              },
              {
                key: 'isColorMode',
                value: function (e) {
                  return this.getColorMedia(e).matches;
                },
              },
              {
                key: 'applyCallbacks',
                value: function () {
                  var e = this;
                  this.callbacks.forEach(function (t) {
                    return t(e.color);
                  });
                },
              },
              {
                key: 'listen',
                value: function (e) {
                  this.callbacks.push(e);
                },
              },
              {
                key: 'unlisten',
                value: function (e) {
                  this.callbacks.splice(this.callbacks.indexOf(e), 1);
                },
              },
              {
                key: 'set',
                value: function (e) {
                  return (
                    (this.color = e),
                    localStorage.setItem(v, e),
                    this.applyCallbacks(),
                    'auto' === e
                      ? document.documentElement.setAttribute(
                          y,
                          this.isColorMode('dark') ? 'dark' : 'light',
                        )
                      : document.documentElement.setAttribute(y, e),
                    e
                  );
                },
              },
            ]),
            e
          );
        })(),
        m = function () {
          var e = (0, i().useState)(),
            t = c(e, 2),
            n = t[0],
            r = t[1],
            o = (0, i().useCallback)(function (e) {
              h.set(e);
            }, []);
          return (
            (0, i().useEffect)(function () {
              return (
                (h = h || new b()),
                h.listen(r),
                r(h.color),
                function () {
                  return h.unlisten(r);
                }
              );
            }, []),
            [n, o]
          );
        };
      t.default = m;
    },
    '3QDa': function (e, t, n) {
      'use strict';
      var r = n('5wUe');
      function o() {
        var e = l(n('q1tI'));
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function i() {
        var e = a(n('Zs1V'));
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var u = a(n('nLCz'));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      function l(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var n = c(t);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var u = o ? Object.getOwnPropertyDescriptor(e, i) : null;
            u && (u.get || u.set)
              ? Object.defineProperty(r, i, u)
              : (r[i] = e[i]);
          }
        return (r.default = e), n && n.set(e, r), r;
      }
      function f(e, t) {
        return y(e) || h(e, t) || d(e, t) || s();
      }
      function s() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function d(e, t) {
        if (e) {
          if ('string' === typeof e) return p(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? p(e, t)
              : void 0
          );
        }
      }
      function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function h(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function y(e) {
        if (Array.isArray(e)) return e;
      }
      function v(e, t, n) {
        return Object.entries(i().default[e]).reduce(function (e, o) {
          var i = r(o, 2),
            u = i[0],
            a = i[1];
          return (
            (e[u] = a.map(function (e) {
              var r = Object.assign({}, e);
              return (
                Object.keys(e).forEach(function (e) {
                  if (/^description(\.|$)/.test(e)) {
                    var o = e.match(/^description\.?(.*)$/),
                      i = f(o, 2),
                      u = i[1];
                    (u && u !== t) || (!u && !n)
                      ? delete r[e]
                      : (r.description = r[e]);
                  }
                }),
                r
              );
            })),
            e
          );
        }, {});
      }
      var b = function (e) {
        var t = (0, o().useContext)(u.default),
          n = t.locale,
          r = t.config.locales,
          i = !r.length || r[0].name === n,
          a = (0, o().useState)(v(e, n, i)),
          c = f(a, 2),
          l = c[0],
          s = c[1];
        return (
          (0, o().useEffect)(
            function () {
              s(v(e, n, i));
            },
            [e, n, i],
          ),
          l
        );
      };
      t.default = b;
    },
    '6asN': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r = n('LtsZ'),
        o = n('zqmC'),
        i = (0, o.LinkWrapper)(r.NavLink);
      t.default = i;
    },
    '6xEa': function (e, t, n) {
      var r,
        o = (function () {
          var e = String.fromCharCode,
            t =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            n =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
            r = {};
          function o(e, t) {
            if (!r[e]) {
              r[e] = {};
              for (var n = 0; n < e.length; n++) r[e][e.charAt(n)] = n;
            }
            return r[e][t];
          }
          var i = {
            compressToBase64: function (e) {
              if (null == e) return '';
              var n = i._compress(e, 6, function (e) {
                return t.charAt(e);
              });
              switch (n.length % 4) {
                default:
                case 0:
                  return n;
                case 1:
                  return n + '===';
                case 2:
                  return n + '==';
                case 3:
                  return n + '=';
              }
            },
            decompressFromBase64: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : i._decompress(e.length, 32, function (n) {
                    return o(t, e.charAt(n));
                  });
            },
            compressToUTF16: function (t) {
              return null == t
                ? ''
                : i._compress(t, 15, function (t) {
                    return e(t + 32);
                  }) + ' ';
            },
            decompressFromUTF16: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : i._decompress(e.length, 16384, function (t) {
                    return e.charCodeAt(t) - 32;
                  });
            },
            compressToUint8Array: function (e) {
              for (
                var t = i.compress(e),
                  n = new Uint8Array(2 * t.length),
                  r = 0,
                  o = t.length;
                r < o;
                r++
              ) {
                var u = t.charCodeAt(r);
                (n[2 * r] = u >>> 8), (n[2 * r + 1] = u % 256);
              }
              return n;
            },
            decompressFromUint8Array: function (t) {
              if (null === t || void 0 === t) return i.decompress(t);
              for (
                var n = new Array(t.length / 2), r = 0, o = n.length;
                r < o;
                r++
              )
                n[r] = 256 * t[2 * r] + t[2 * r + 1];
              var u = [];
              return (
                n.forEach(function (t) {
                  u.push(e(t));
                }),
                i.decompress(u.join(''))
              );
            },
            compressToEncodedURIComponent: function (e) {
              return null == e
                ? ''
                : i._compress(e, 6, function (e) {
                    return n.charAt(e);
                  });
            },
            decompressFromEncodedURIComponent: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : ((e = e.replace(/ /g, '+')),
                  i._decompress(e.length, 32, function (t) {
                    return o(n, e.charAt(t));
                  }));
            },
            compress: function (t) {
              return i._compress(t, 16, function (t) {
                return e(t);
              });
            },
            _compress: function (e, t, n) {
              if (null == e) return '';
              var r,
                o,
                i,
                u = {},
                a = {},
                c = '',
                l = '',
                f = '',
                s = 2,
                d = 3,
                p = 2,
                h = [],
                y = 0,
                v = 0;
              for (i = 0; i < e.length; i += 1)
                if (
                  ((c = e.charAt(i)),
                  Object.prototype.hasOwnProperty.call(u, c) ||
                    ((u[c] = d++), (a[c] = !0)),
                  (l = f + c),
                  Object.prototype.hasOwnProperty.call(u, l))
                )
                  f = l;
                else {
                  if (Object.prototype.hasOwnProperty.call(a, f)) {
                    if (f.charCodeAt(0) < 256) {
                      for (r = 0; r < p; r++)
                        (y <<= 1),
                          v == t - 1 ? ((v = 0), h.push(n(y)), (y = 0)) : v++;
                      for (o = f.charCodeAt(0), r = 0; r < 8; r++)
                        (y = (y << 1) | (1 & o)),
                          v == t - 1 ? ((v = 0), h.push(n(y)), (y = 0)) : v++,
                          (o >>= 1);
                    } else {
                      for (o = 1, r = 0; r < p; r++)
                        (y = (y << 1) | o),
                          v == t - 1 ? ((v = 0), h.push(n(y)), (y = 0)) : v++,
                          (o = 0);
                      for (o = f.charCodeAt(0), r = 0; r < 16; r++)
                        (y = (y << 1) | (1 & o)),
                          v == t - 1 ? ((v = 0), h.push(n(y)), (y = 0)) : v++,
                          (o >>= 1);
                    }
                    s--, 0 == s && ((s = Math.pow(2, p)), p++), delete a[f];
                  } else
                    for (o = u[f], r = 0; r < p; r++)
                      (y = (y << 1) | (1 & o)),
                        v == t - 1 ? ((v = 0), h.push(n(y)), (y = 0)) : v++,
                        (o >>= 1);
                  s--,
                    0 == s && ((s = Math.pow(2, p)), p++),
                    (u[l] = d++),
                    (f = String(c));
                }
              if ('' !== f) {
                if (Object.prototype.hasOwnProperty.call(a, f)) {
                  if (f.charCodeAt(0) < 256) {
                    for (r = 0; r < p; r++)
                      (y <<= 1),
                        v == t - 1 ? ((v = 0), h.push(n(y)), (y = 0)) : v++;
                    for (o = f.charCodeAt(0), r = 0; r < 8; r++)
                      (y = (y << 1) | (1 & o)),
                        v == t - 1 ? ((v = 0), h.push(n(y)), (y = 0)) : v++,
                        (o >>= 1);
                  } else {
                    for (o = 1, r = 0; r < p; r++)
                      (y = (y << 1) | o),
                        v == t - 1 ? ((v = 0), h.push(n(y)), (y = 0)) : v++,
                        (o = 0);
                    for (o = f.charCodeAt(0), r = 0; r < 16; r++)
                      (y = (y << 1) | (1 & o)),
                        v == t - 1 ? ((v = 0), h.push(n(y)), (y = 0)) : v++,
                        (o >>= 1);
                  }
                  s--, 0 == s && ((s = Math.pow(2, p)), p++), delete a[f];
                } else
                  for (o = u[f], r = 0; r < p; r++)
                    (y = (y << 1) | (1 & o)),
                      v == t - 1 ? ((v = 0), h.push(n(y)), (y = 0)) : v++,
                      (o >>= 1);
                s--, 0 == s && ((s = Math.pow(2, p)), p++);
              }
              for (o = 2, r = 0; r < p; r++)
                (y = (y << 1) | (1 & o)),
                  v == t - 1 ? ((v = 0), h.push(n(y)), (y = 0)) : v++,
                  (o >>= 1);
              while (1) {
                if (((y <<= 1), v == t - 1)) {
                  h.push(n(y));
                  break;
                }
                v++;
              }
              return h.join('');
            },
            decompress: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : i._decompress(e.length, 32768, function (t) {
                    return e.charCodeAt(t);
                  });
            },
            _decompress: function (t, n, r) {
              var o,
                i,
                u,
                a,
                c,
                l,
                f,
                s = [],
                d = 4,
                p = 4,
                h = 3,
                y = '',
                v = [],
                b = { val: r(0), position: n, index: 1 };
              for (o = 0; o < 3; o += 1) s[o] = o;
              (u = 0), (c = Math.pow(2, 2)), (l = 1);
              while (l != c)
                (a = b.val & b.position),
                  (b.position >>= 1),
                  0 == b.position && ((b.position = n), (b.val = r(b.index++))),
                  (u |= (a > 0 ? 1 : 0) * l),
                  (l <<= 1);
              switch (u) {
                case 0:
                  (u = 0), (c = Math.pow(2, 8)), (l = 1);
                  while (l != c)
                    (a = b.val & b.position),
                      (b.position >>= 1),
                      0 == b.position &&
                        ((b.position = n), (b.val = r(b.index++))),
                      (u |= (a > 0 ? 1 : 0) * l),
                      (l <<= 1);
                  f = e(u);
                  break;
                case 1:
                  (u = 0), (c = Math.pow(2, 16)), (l = 1);
                  while (l != c)
                    (a = b.val & b.position),
                      (b.position >>= 1),
                      0 == b.position &&
                        ((b.position = n), (b.val = r(b.index++))),
                      (u |= (a > 0 ? 1 : 0) * l),
                      (l <<= 1);
                  f = e(u);
                  break;
                case 2:
                  return '';
              }
              (s[3] = f), (i = f), v.push(f);
              while (1) {
                if (b.index > t) return '';
                (u = 0), (c = Math.pow(2, h)), (l = 1);
                while (l != c)
                  (a = b.val & b.position),
                    (b.position >>= 1),
                    0 == b.position &&
                      ((b.position = n), (b.val = r(b.index++))),
                    (u |= (a > 0 ? 1 : 0) * l),
                    (l <<= 1);
                switch ((f = u)) {
                  case 0:
                    (u = 0), (c = Math.pow(2, 8)), (l = 1);
                    while (l != c)
                      (a = b.val & b.position),
                        (b.position >>= 1),
                        0 == b.position &&
                          ((b.position = n), (b.val = r(b.index++))),
                        (u |= (a > 0 ? 1 : 0) * l),
                        (l <<= 1);
                    (s[p++] = e(u)), (f = p - 1), d--;
                    break;
                  case 1:
                    (u = 0), (c = Math.pow(2, 16)), (l = 1);
                    while (l != c)
                      (a = b.val & b.position),
                        (b.position >>= 1),
                        0 == b.position &&
                          ((b.position = n), (b.val = r(b.index++))),
                        (u |= (a > 0 ? 1 : 0) * l),
                        (l <<= 1);
                    (s[p++] = e(u)), (f = p - 1), d--;
                    break;
                  case 2:
                    return v.join('');
                }
                if ((0 == d && ((d = Math.pow(2, h)), h++), s[f])) y = s[f];
                else {
                  if (f !== p) return null;
                  y = i + i.charAt(0);
                }
                v.push(y),
                  (s[p++] = i + y.charAt(0)),
                  d--,
                  (i = y),
                  0 == d && ((d = Math.pow(2, h)), h++);
              }
            },
          };
          return i;
        })();
      (r = function () {
        return o;
      }.call(t, n, t, e)),
        void 0 === r || (e.exports = r);
    },
    '7sf/': function (e, t, n) {
      'use strict';
      function r() {
        var e = a(n('q1tI'));
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = i(n('6xEa'));
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function a(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, i, a)
              : (r[i] = e[i]);
          }
        return (r.default = e), n && n.set(e, r), r;
      }
      function c(e, t) {
        return p(e) || d(e, t) || f(e, t) || l();
      }
      function l() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function f(e, t) {
        if (e) {
          if ('string' === typeof e) return s(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? s(e, t)
              : void 0
          );
        }
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function d(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function p(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var h = {
          'zh-CN': 'https://www.typescriptlang.org/zh/play',
          'en-US': 'https://www.typescriptlang.org/play',
        },
        y = function (e, t) {
          var n = function () {
              var e = /^zh|cn$/.test(
                arguments.length <= 0 ? void 0 : arguments[0],
              )
                ? h['zh-CN']
                : h['en-US'];
              return ''
                .concat(e, '?skipLibCheck=true&jsx=1#code/')
                .concat(
                  o().default.compressToEncodedURIComponent(
                    arguments.length <= 1 ? void 0 : arguments[1],
                  ),
                );
            },
            i = (0, r().useState)(n(e, t)),
            u = c(i, 2),
            a = u[0],
            l = u[1];
          return (
            (0, r().useEffect)(
              function () {
                l(n(e, t));
              },
              [e, t],
            ),
            a
          );
        };
      t.default = y;
    },
    '8L3h': function (e, t, n) {
      'use strict';
      e.exports = n('f/k9');
    },
    LtsZ: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'ApplyPluginsType', function () {
          return z;
        }),
        n.d(t, 'Plugin', function () {
          return B;
        }),
        n.d(t, 'dynamic', function () {
          return q;
        }),
        n.d(t, 'isBrowser', function () {
          return $;
        });
      var r = n('WmNS'),
        o = n.n(r),
        i = n('YS25');
      n.d(t, 'createBrowserHistory', function () {
        return i['a'];
      }),
        n.d(t, 'createHashHistory', function () {
          return i['b'];
        }),
        n.d(t, 'createMemoryHistory', function () {
          return i['d'];
        });
      var u = n('7AqN');
      n.d(t, '__RouterContext', function () {
        return u['h'];
      });
      var a = n('QttV');
      n.d(t, 'Link', function () {
        return a['a'];
      }),
        n.d(t, 'MemoryRouter', function () {
          return u['a'];
        }),
        n.d(t, 'NavLink', function () {
          return a['b'];
        }),
        n.d(t, 'Prompt', function () {
          return u['b'];
        }),
        n.d(t, 'Redirect', function () {
          return u['c'];
        }),
        n.d(t, 'Route', function () {
          return u['d'];
        }),
        n.d(t, 'Router', function () {
          return u['e'];
        }),
        n.d(t, 'StaticRouter', function () {
          return u['f'];
        }),
        n.d(t, 'Switch', function () {
          return u['g'];
        }),
        n.d(t, 'matchPath', function () {
          return u['i'];
        }),
        n.d(t, 'useHistory', function () {
          return u['j'];
        }),
        n.d(t, 'useLocation', function () {
          return u['k'];
        }),
        n.d(t, 'useParams', function () {
          return u['l'];
        }),
        n.d(t, 'useRouteMatch', function () {
          return u['m'];
        }),
        n.d(t, 'withRouter', function () {
          return u['n'];
        });
      var c = n('q1tI'),
        l = n('8L3h');
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function d(e) {
        return (
          (d =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          d(e)
        );
      }
      function p(e, t, n, r, o, i, u) {
        try {
          var a = e[i](u),
            c = a.value;
        } catch (l) {
          return void n(l);
        }
        a.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function h(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function u(e) {
              p(i, r, o, u, a, 'next', e);
            }
            function a(e) {
              p(i, r, o, u, a, 'throw', e);
            }
            u(void 0);
          });
        };
      }
      function y(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function b(e, t, n) {
        return t && v(e.prototype, t), n && v(e, n), e;
      }
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function g(e) {
        return w(e) || O(e) || _(e) || k();
      }
      function w(e) {
        if (Array.isArray(e)) return e;
      }
      function O(e) {
        if (
          ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      }
      function _(e, t) {
        if (e) {
          if ('string' === typeof e) return j(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? j(e, t)
              : void 0
          );
        }
      }
      function j(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function k() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function A(e, t) {
        var n =
          ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = _(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var i,
          u = !0,
          a = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (u = e.done), e;
          },
          e: function (e) {
            (a = !0), (i = e);
          },
          f: function () {
            try {
              u || null == n.return || n.return();
            } finally {
              if (a) throw i;
            }
          },
        };
      }
      var P = Object(c['createContext'])(null),
        M = [],
        E = [],
        S = !1;
      function x(e) {
        var t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then(function (e) {
              return (n.loading = !1), (n.loaded = e), e;
            })
            .catch(function (e) {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      function C(e) {
        var t = { loading: !1, loaded: {}, error: null },
          n = [];
        try {
          Object.keys(e).forEach(function (r) {
            var o = x(e[r]);
            o.loading
              ? (t.loading = !0)
              : ((t.loaded[r] = o.loaded), (t.error = o.error)),
              n.push(o.promise),
              o.promise
                .then(function (e) {
                  t.loaded[r] = e;
                })
                .catch(function (e) {
                  t.error = e;
                });
          });
        } catch (r) {
          t.error = r;
        }
        return (
          (t.promise = Promise.all(n)
            .then(function (e) {
              return (t.loading = !1), e;
            })
            .catch(function (e) {
              throw ((t.loading = !1), e);
            })),
          t
        );
      }
      function I(e) {
        return e && e.__esModule ? e.default : e;
      }
      function T(e, t) {
        return Object(c['createElement'])(I(e), t);
      }
      function D(e, t) {
        var n = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              render: T,
              webpack: null,
              modules: null,
            },
            t,
          ),
          r = null;
        function o() {
          if (!r) {
            var t = new R(e, n);
            r = {
              getCurrentValue: t.getCurrentValue.bind(t),
              subscribe: t.subscribe.bind(t),
              retry: t.retry.bind(t),
              promise: t.promise.bind(t),
            };
          }
          return r.promise();
        }
        if (
          ('undefined' === typeof window && M.push(o),
          !S &&
            'undefined' !== typeof window &&
            'function' === typeof n.webpack)
        ) {
          var i = n.webpack();
          E.push(function (e) {
            var t,
              n = A(i);
            try {
              for (n.s(); !(t = n.n()).done; ) {
                var r = t.value;
                if (-1 !== e.indexOf(r)) return o();
              }
            } catch (u) {
              n.e(u);
            } finally {
              n.f();
            }
          });
        }
        var u = function (e, t) {
            o();
            var i = Object(c['useContext'])(P),
              u = Object(l['useSubscription'])(r);
            return (
              Object(c['useImperativeHandle'])(t, function () {
                return { retry: r.retry };
              }),
              i &&
                Array.isArray(n.modules) &&
                n.modules.forEach(function (e) {
                  i(e);
                }),
              u.loading || u.error
                ? Object(c['createElement'])(n.loading, {
                    isLoading: u.loading,
                    pastDelay: u.pastDelay,
                    timedOut: u.timedOut,
                    error: u.error,
                    retry: r.retry,
                  })
                : u.loaded
                ? n.render(u.loaded, e)
                : null
            );
          },
          a = Object(c['forwardRef'])(u);
        return (
          (a.preload = function () {
            return o();
          }),
          (a.displayName = 'LoadableComponent'),
          a
        );
      }
      var R = (function () {
        function e(t, n) {
          y(this, e),
            (this._loadFn = t),
            (this._opts = n),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          b(e, [
            {
              key: 'promise',
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: 'retry',
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  n = this._opts;
                t.loading &&
                  ('number' === typeof n.delay &&
                    (0 === n.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 });
                        }, n.delay))),
                  'number' === typeof n.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 });
                    }, n.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update(), e._clearTimeouts();
                    })
                    .catch(function (t) {
                      e._update(), e._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: '_update',
              value: function (e) {
                (this._state = s(s({}, this._state), e)),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: '_clearTimeouts',
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: 'getCurrentValue',
              value: function () {
                return s(
                  s({}, this._state),
                  {},
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                );
              },
            },
            {
              key: 'subscribe',
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]),
          e
        );
      })();
      function W(e) {
        return D(x, e);
      }
      function L(e) {
        if ('function' !== typeof e.render)
          throw new Error(
            'LoadableMap requires a `render(loaded, props)` function',
          );
        return D(C, e);
      }
      function U(e, t) {
        var n = [];
        while (e.length) {
          var r = e.pop();
          n.push(r(t));
        }
        return Promise.all(n).then(function () {
          if (e.length) return U(e, t);
        });
      }
      function q(e) {
        var t = W,
          n = {
            loading: function (e) {
              e.error, e.isLoading;
              return Object(c['createElement'])('p', null, 'loading...');
            },
          };
        if ('function' === typeof e) n.loader = e;
        else {
          if ('object' !== d(e))
            throw new Error('Unexpect arguments '.concat(e));
          n = s(s({}, n), e);
        }
        return t(n);
      }
      function N(e, t) {
        if (!e) throw new Error(t);
      }
      (W.Map = L),
        (W.preloadAll = function () {
          return new Promise(function (e, t) {
            U(M).then(e, t);
          });
        }),
        (W.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var n = function () {
              return (S = !0), t();
            };
            U(E, e).then(n, n);
          });
        }),
        'undefined' !== typeof window &&
          (window.__NEXT_PRELOADREADY = W.preloadReady);
      var z,
        $ = function () {
          return (
            'undefined' !== typeof window &&
            'undefined' !== typeof window.document &&
            'undefined' !== typeof window.document.createElement
          );
        };
      function H(e) {
        var t = e.fns,
          n = e.args;
        if (1 === t.length) return t[0];
        var r = t.pop();
        return t.reduce(function (e, t) {
          return function () {
            return t(e, n);
          };
        }, r);
      }
      function V(e) {
        return !!e && 'object' === d(e) && 'function' === typeof e.then;
      }
      (function (e) {
        (e['compose'] = 'compose'),
          (e['modify'] = 'modify'),
          (e['event'] = 'event');
      })(z || (z = {}));
      var B = (function () {
        function e(t) {
          y(this, e),
            (this.validKeys = void 0),
            (this.hooks = {}),
            (this.validKeys =
              (null === t || void 0 === t ? void 0 : t.validKeys) || []);
        }
        return (
          b(e, [
            {
              key: 'register',
              value: function (e) {
                var t = this;
                N(!!e.apply, 'register failed, plugin.apply must supplied'),
                  N(!!e.path, 'register failed, plugin.path must supplied'),
                  Object.keys(e.apply).forEach(function (n) {
                    N(
                      t.validKeys.indexOf(n) > -1,
                      'register failed, invalid key '
                        .concat(n, ' from plugin ')
                        .concat(e.path, '.'),
                    ),
                      t.hooks[n] || (t.hooks[n] = []),
                      (t.hooks[n] = t.hooks[n].concat(e.apply[n]));
                  });
              },
            },
            {
              key: 'getHooks',
              value: function (e) {
                var t = e.split('.'),
                  n = g(t),
                  r = n[0],
                  o = n.slice(1),
                  i = this.hooks[r] || [];
                return (
                  o.length &&
                    (i = i
                      .map(function (e) {
                        try {
                          var t,
                            n = e,
                            r = A(o);
                          try {
                            for (r.s(); !(t = r.n()).done; ) {
                              var i = t.value;
                              n = n[i];
                            }
                          } catch (u) {
                            r.e(u);
                          } finally {
                            r.f();
                          }
                          return n;
                        } catch (a) {
                          return null;
                        }
                      })
                      .filter(Boolean)),
                  i
                );
              },
            },
            {
              key: 'applyPlugins',
              value: function (e) {
                var t = e.key,
                  n = e.type,
                  r = e.initialValue,
                  i = e.args,
                  u = e.async,
                  a = this.getHooks(t) || [];
                switch (
                  (i &&
                    N(
                      'object' === d(i),
                      'applyPlugins failed, args must be plain object.',
                    ),
                  n)
                ) {
                  case z.modify:
                    return u
                      ? a.reduce(
                          (function () {
                            var e = h(
                              o.a.mark(function e(n, r) {
                                var u;
                                return o.a.wrap(function (e) {
                                  while (1)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          (N(
                                            'function' === typeof r ||
                                              'object' === d(r) ||
                                              V(r),
                                            'applyPlugins failed, all hooks for key '.concat(
                                              t,
                                              ' must be function, plain object or Promise.',
                                            ),
                                          ),
                                          !V(n))
                                        ) {
                                          e.next = 5;
                                          break;
                                        }
                                        return (e.next = 4), n;
                                      case 4:
                                        n = e.sent;
                                      case 5:
                                        if ('function' !== typeof r) {
                                          e.next = 16;
                                          break;
                                        }
                                        if (((u = r(n, i)), !V(u))) {
                                          e.next = 13;
                                          break;
                                        }
                                        return (e.next = 10), u;
                                      case 10:
                                        return e.abrupt('return', e.sent);
                                      case 13:
                                        return e.abrupt('return', u);
                                      case 14:
                                        e.next = 21;
                                        break;
                                      case 16:
                                        if (!V(r)) {
                                          e.next = 20;
                                          break;
                                        }
                                        return (e.next = 19), r;
                                      case 19:
                                        r = e.sent;
                                      case 20:
                                        return e.abrupt(
                                          'return',
                                          s(s({}, n), r),
                                        );
                                      case 21:
                                      case 'end':
                                        return e.stop();
                                    }
                                }, e);
                              }),
                            );
                            return function (t, n) {
                              return e.apply(this, arguments);
                            };
                          })(),
                          V(r) ? r : Promise.resolve(r),
                        )
                      : a.reduce(function (e, n) {
                          return (
                            N(
                              'function' === typeof n || 'object' === d(n),
                              'applyPlugins failed, all hooks for key '.concat(
                                t,
                                ' must be function or plain object.',
                              ),
                            ),
                            'function' === typeof n ? n(e, i) : s(s({}, e), n)
                          );
                        }, r);
                  case z.event:
                    return a.forEach(function (e) {
                      N(
                        'function' === typeof e,
                        'applyPlugins failed, all hooks for key '.concat(
                          t,
                          ' must be function.',
                        ),
                      ),
                        e(i);
                    });
                  case z.compose:
                    return function () {
                      return H({ fns: a.concat(r), args: i })();
                    };
                }
              },
            },
          ]),
          e
        );
      })();
    },
    Lw8S: function (e, t) {
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function r(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e;
      }
      e.exports = r;
    },
    QttV: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return b;
      }),
        n.d(t, 'b', function () {
          return O;
        });
      var r = n('7AqN'),
        o = n('MMHK'),
        i = n('q1tI'),
        u = n.n(i),
        a = n('YS25'),
        c = (n('17x9'), n('eUh6')),
        l = n('LBWH'),
        f = n('9R94');
      u.a.Component;
      u.a.Component;
      var s = function (e, t) {
          return 'function' === typeof e ? e(t) : e;
        },
        d = function (e, t) {
          return 'string' === typeof e ? Object(a['c'])(e, null, null, t) : e;
        },
        p = function (e) {
          return e;
        },
        h = u.a.forwardRef;
      function y(e) {
        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
      }
      'undefined' === typeof h && (h = p);
      var v = h(function (e, t) {
        var n = e.innerRef,
          r = e.navigate,
          o = e.onClick,
          i = Object(l['a'])(e, ['innerRef', 'navigate', 'onClick']),
          a = i.target,
          f = Object(c['a'])({}, i, {
            onClick: function (e) {
              try {
                o && o(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (a && '_self' !== a) ||
                y(e) ||
                (e.preventDefault(), r());
            },
          });
        return (f.ref = (p !== h && t) || n), u.a.createElement('a', f);
      });
      var b = h(function (e, t) {
          var n = e.component,
            o = void 0 === n ? v : n,
            i = e.replace,
            a = e.to,
            y = e.innerRef,
            b = Object(l['a'])(e, ['component', 'replace', 'to', 'innerRef']);
          return u.a.createElement(r['h'].Consumer, null, function (e) {
            e || Object(f['a'])(!1);
            var n = e.history,
              r = d(s(a, e.location), e.location),
              l = r ? n.createHref(r) : '',
              v = Object(c['a'])({}, b, {
                href: l,
                navigate: function () {
                  var t = s(a, e.location),
                    r = i ? n.replace : n.push;
                  r(t);
                },
              });
            return (
              p !== h ? (v.ref = t || y) : (v.innerRef = y),
              u.a.createElement(o, v)
            );
          });
        }),
        m = function (e) {
          return e;
        },
        g = u.a.forwardRef;
      function w() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t
          .filter(function (e) {
            return e;
          })
          .join(' ');
      }
      'undefined' === typeof g && (g = m);
      var O = g(function (e, t) {
        var n = e['aria-current'],
          o = void 0 === n ? 'page' : n,
          i = e.activeClassName,
          a = void 0 === i ? 'active' : i,
          p = e.activeStyle,
          h = e.className,
          y = e.exact,
          v = e.isActive,
          O = e.location,
          _ = e.sensitive,
          j = e.strict,
          k = e.style,
          A = e.to,
          P = e.innerRef,
          M = Object(l['a'])(e, [
            'aria-current',
            'activeClassName',
            'activeStyle',
            'className',
            'exact',
            'isActive',
            'location',
            'sensitive',
            'strict',
            'style',
            'to',
            'innerRef',
          ]);
        return u.a.createElement(r['h'].Consumer, null, function (e) {
          e || Object(f['a'])(!1);
          var n = O || e.location,
            i = d(s(A, n), n),
            l = i.pathname,
            E = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            S = E
              ? Object(r['i'])(n.pathname, {
                  path: E,
                  exact: y,
                  sensitive: _,
                  strict: j,
                })
              : null,
            x = !!(v ? v(S, n) : S),
            C = x ? w(h, a) : h,
            I = x ? Object(c['a'])({}, k, {}, p) : k,
            T = Object(c['a'])(
              {
                'aria-current': (x && o) || null,
                className: C,
                style: I,
                to: i,
              },
              M,
            );
          return (
            m !== g ? (T.ref = t || P) : (T.innerRef = P),
            u.a.createElement(b, T)
          );
        });
      });
    },
    Qw5x: function (e, t, n) {
      'use strict';
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e, t) {
        if (e) {
          if ('string' === typeof e) return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          );
        }
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    'U/TZ': function (e, t, n) {
      'use strict';
      function r() {
        var e = i(n('q1tI'));
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      function o(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (o = function (e) {
          return e ? n : t;
        })(e);
      }
      function i(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var n = o(t);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ('default' !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var a = i ? Object.getOwnPropertyDescriptor(e, u) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, u, a)
              : (r[u] = e[u]);
          }
        return (r.default = e), n && n.set(e, r), r;
      }
      function u(e, t) {
        return s(e) || f(e, t) || c(e, t) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(e, t) {
        if (e) {
          if ('string' === typeof e) return l(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function f(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var d = function (e, t) {
        var n = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r = {};
            return (
              Object.keys(t[1]).forEach(function (e) {
                var n = (e.match(/^(.+)\.([^_]+)$/) || []).slice(1),
                  o = u(n, 2),
                  i = o[0],
                  a = o[1];
                (a && a !== t[0]) || (r[i || e] = t[1][e]);
              }),
              r
            );
          },
          o = (0, r().useState)(n(e, t)),
          i = u(o, 2),
          a = i[0],
          c = i[1];
        return (
          (0, r().useEffect)(
            function () {
              c(n(e, t));
            },
            [e, t],
          ),
          a
        );
      };
      t.default = d;
    },
    WWur: function (e, t, n) {
      'use strict';
      var r = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.target,
          r = void 0 === n ? document.body : n,
          o = document.createElement('textarea'),
          i = document.activeElement;
        (o.value = e),
          o.setAttribute('readonly', ''),
          (o.style.contain = 'strict'),
          (o.style.position = 'absolute'),
          (o.style.left = '-9999px'),
          (o.style.fontSize = '12pt');
        var u = document.getSelection(),
          a = !1;
        u.rangeCount > 0 && (a = u.getRangeAt(0)),
          r.append(o),
          o.select(),
          (o.selectionStart = 0),
          (o.selectionEnd = e.length);
        var c = !1;
        try {
          c = document.execCommand('copy');
        } catch (l) {}
        return (
          o.remove(),
          a && (u.removeAllRanges(), u.addRange(a)),
          i && i.focus(),
          c
        );
      };
      (e.exports = r), (e.exports.default = r);
    },
    bYHP: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r = i(n('q1tI')),
        o = n('LtsZ');
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u() {
        return (
          (u =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          u.apply(this, arguments)
        );
      }
      function a(e) {
        return e.offsetTop + (e.offsetParent ? a(e.offsetParent) : 0);
      }
      var c = function e(t) {
        var n,
          i =
            (null === (n = t.to.match(/(#.+)$/)) || void 0 === n
              ? void 0
              : n[1]) || '';
        return r.default.createElement(
          o.NavLink,
          u({}, t, {
            onClick: function () {
              return e.scrollToAnchor(i.substring(1));
            },
            isActive: function (e, t) {
              return i && decodeURIComponent(t.hash) === i;
            },
          }),
        );
      };
      c.scrollToAnchor = function (e) {
        window.requestAnimationFrame(function () {
          var t = document.getElementById(decodeURIComponent(e));
          t && window.scrollTo(0, a(t) - 100);
        });
      };
      var l = c;
      t.default = l;
    },
    bdgK: function (e, t, n) {
      'use strict';
      (function (e) {
        var n = (function () {
            if ('undefined' !== typeof Map) return Map;
            function e(e, t) {
              var n = -1;
              return (
                e.some(function (e, r) {
                  return e[0] === t && ((n = r), !0);
                }),
                n
              );
            }
            return (function () {
              function t() {
                this.__entries__ = [];
              }
              return (
                Object.defineProperty(t.prototype, 'size', {
                  get: function () {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.get = function (t) {
                  var n = e(this.__entries__, t),
                    r = this.__entries__[n];
                  return r && r[1];
                }),
                (t.prototype.set = function (t, n) {
                  var r = e(this.__entries__, t);
                  ~r
                    ? (this.__entries__[r][1] = n)
                    : this.__entries__.push([t, n]);
                }),
                (t.prototype.delete = function (t) {
                  var n = this.__entries__,
                    r = e(n, t);
                  ~r && n.splice(r, 1);
                }),
                (t.prototype.has = function (t) {
                  return !!~e(this.__entries__, t);
                }),
                (t.prototype.clear = function () {
                  this.__entries__.splice(0);
                }),
                (t.prototype.forEach = function (e, t) {
                  void 0 === t && (t = null);
                  for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var o = r[n];
                    e.call(t, o[1], o[0]);
                  }
                }),
                t
              );
            })();
          })(),
          r =
            'undefined' !== typeof window &&
            'undefined' !== typeof document &&
            window.document === document,
          o = (function () {
            return 'undefined' !== typeof e && e.Math === Math
              ? e
              : 'undefined' !== typeof self && self.Math === Math
              ? self
              : 'undefined' !== typeof window && window.Math === Math
              ? window
              : Function('return this')();
          })(),
          i = (function () {
            return 'function' === typeof requestAnimationFrame
              ? requestAnimationFrame.bind(o)
              : function (e) {
                  return setTimeout(function () {
                    return e(Date.now());
                  }, 1e3 / 60);
                };
          })(),
          u = 2;
        function a(e, t) {
          var n = !1,
            r = !1,
            o = 0;
          function a() {
            n && ((n = !1), e()), r && l();
          }
          function c() {
            i(a);
          }
          function l() {
            var e = Date.now();
            if (n) {
              if (e - o < u) return;
              r = !0;
            } else (n = !0), (r = !1), setTimeout(c, t);
            o = e;
          }
          return l;
        }
        var c = 20,
          l = [
            'top',
            'right',
            'bottom',
            'left',
            'width',
            'height',
            'size',
            'weight',
          ],
          f = 'undefined' !== typeof MutationObserver,
          s = (function () {
            function e() {
              (this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = a(this.refresh.bind(this), c));
            }
            return (
              (e.prototype.addObserver = function (e) {
                ~this.observers_.indexOf(e) || this.observers_.push(e),
                  this.connected_ || this.connect_();
              }),
              (e.prototype.removeObserver = function (e) {
                var t = this.observers_,
                  n = t.indexOf(e);
                ~n && t.splice(n, 1),
                  !t.length && this.connected_ && this.disconnect_();
              }),
              (e.prototype.refresh = function () {
                var e = this.updateObservers_();
                e && this.refresh();
              }),
              (e.prototype.updateObservers_ = function () {
                var e = this.observers_.filter(function (e) {
                  return e.gatherActive(), e.hasActive();
                });
                return (
                  e.forEach(function (e) {
                    return e.broadcastActive();
                  }),
                  e.length > 0
                );
              }),
              (e.prototype.connect_ = function () {
                r &&
                  !this.connected_ &&
                  (document.addEventListener(
                    'transitionend',
                    this.onTransitionEnd_,
                  ),
                  window.addEventListener('resize', this.refresh),
                  f
                    ? ((this.mutationsObserver_ = new MutationObserver(
                        this.refresh,
                      )),
                      this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                      }))
                    : (document.addEventListener(
                        'DOMSubtreeModified',
                        this.refresh,
                      ),
                      (this.mutationEventsAdded_ = !0)),
                  (this.connected_ = !0));
              }),
              (e.prototype.disconnect_ = function () {
                r &&
                  this.connected_ &&
                  (document.removeEventListener(
                    'transitionend',
                    this.onTransitionEnd_,
                  ),
                  window.removeEventListener('resize', this.refresh),
                  this.mutationsObserver_ &&
                    this.mutationsObserver_.disconnect(),
                  this.mutationEventsAdded_ &&
                    document.removeEventListener(
                      'DOMSubtreeModified',
                      this.refresh,
                    ),
                  (this.mutationsObserver_ = null),
                  (this.mutationEventsAdded_ = !1),
                  (this.connected_ = !1));
              }),
              (e.prototype.onTransitionEnd_ = function (e) {
                var t = e.propertyName,
                  n = void 0 === t ? '' : t,
                  r = l.some(function (e) {
                    return !!~n.indexOf(e);
                  });
                r && this.refresh();
              }),
              (e.getInstance = function () {
                return (
                  this.instance_ || (this.instance_ = new e()), this.instance_
                );
              }),
              (e.instance_ = null),
              e
            );
          })(),
          d = function (e, t) {
            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
              var o = r[n];
              Object.defineProperty(e, o, {
                value: t[o],
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            }
            return e;
          },
          p = function (e) {
            var t = e && e.ownerDocument && e.ownerDocument.defaultView;
            return t || o;
          },
          h = k(0, 0, 0, 0);
        function y(e) {
          return parseFloat(e) || 0;
        }
        function v(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          return t.reduce(function (t, n) {
            var r = e['border-' + n + '-width'];
            return t + y(r);
          }, 0);
        }
        function b(e) {
          for (
            var t = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, o = t;
            r < o.length;
            r++
          ) {
            var i = o[r],
              u = e['padding-' + i];
            n[i] = y(u);
          }
          return n;
        }
        function m(e) {
          var t = e.getBBox();
          return k(0, 0, t.width, t.height);
        }
        function g(e) {
          var t = e.clientWidth,
            n = e.clientHeight;
          if (!t && !n) return h;
          var r = p(e).getComputedStyle(e),
            o = b(r),
            i = o.left + o.right,
            u = o.top + o.bottom,
            a = y(r.width),
            c = y(r.height);
          if (
            ('border-box' === r.boxSizing &&
              (Math.round(a + i) !== t && (a -= v(r, 'left', 'right') + i),
              Math.round(c + u) !== n && (c -= v(r, 'top', 'bottom') + u)),
            !O(e))
          ) {
            var l = Math.round(a + i) - t,
              f = Math.round(c + u) - n;
            1 !== Math.abs(l) && (a -= l), 1 !== Math.abs(f) && (c -= f);
          }
          return k(o.left, o.top, a, c);
        }
        var w = (function () {
          return 'undefined' !== typeof SVGGraphicsElement
            ? function (e) {
                return e instanceof p(e).SVGGraphicsElement;
              }
            : function (e) {
                return (
                  e instanceof p(e).SVGElement &&
                  'function' === typeof e.getBBox
                );
              };
        })();
        function O(e) {
          return e === p(e).document.documentElement;
        }
        function _(e) {
          return r ? (w(e) ? m(e) : g(e)) : h;
        }
        function j(e) {
          var t = e.x,
            n = e.y,
            r = e.width,
            o = e.height,
            i =
              'undefined' !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            u = Object.create(i.prototype);
          return (
            d(u, {
              x: t,
              y: n,
              width: r,
              height: o,
              top: n,
              right: t + r,
              bottom: o + n,
              left: t,
            }),
            u
          );
        }
        function k(e, t, n, r) {
          return { x: e, y: t, width: n, height: r };
        }
        var A = (function () {
            function e(e) {
              (this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = k(0, 0, 0, 0)),
                (this.target = e);
            }
            return (
              (e.prototype.isActive = function () {
                var e = _(this.target);
                return (
                  (this.contentRect_ = e),
                  e.width !== this.broadcastWidth ||
                    e.height !== this.broadcastHeight
                );
              }),
              (e.prototype.broadcastRect = function () {
                var e = this.contentRect_;
                return (
                  (this.broadcastWidth = e.width),
                  (this.broadcastHeight = e.height),
                  e
                );
              }),
              e
            );
          })(),
          P = (function () {
            function e(e, t) {
              var n = j(t);
              d(this, { target: e, contentRect: n });
            }
            return e;
          })(),
          M = (function () {
            function e(e, t, r) {
              if (
                ((this.activeObservations_ = []),
                (this.observations_ = new n()),
                'function' !== typeof e)
              )
                throw new TypeError(
                  'The callback provided as parameter 1 is not a function.',
                );
              (this.callback_ = e),
                (this.controller_ = t),
                (this.callbackCtx_ = r);
            }
            return (
              (e.prototype.observe = function (e) {
                if (!arguments.length)
                  throw new TypeError(
                    '1 argument required, but only 0 present.',
                  );
                if (
                  'undefined' !== typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof p(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".',
                    );
                  var t = this.observations_;
                  t.has(e) ||
                    (t.set(e, new A(e)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh());
                }
              }),
              (e.prototype.unobserve = function (e) {
                if (!arguments.length)
                  throw new TypeError(
                    '1 argument required, but only 0 present.',
                  );
                if (
                  'undefined' !== typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof p(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".',
                    );
                  var t = this.observations_;
                  t.has(e) &&
                    (t.delete(e),
                    t.size || this.controller_.removeObserver(this));
                }
              }),
              (e.prototype.disconnect = function () {
                this.clearActive(),
                  this.observations_.clear(),
                  this.controller_.removeObserver(this);
              }),
              (e.prototype.gatherActive = function () {
                var e = this;
                this.clearActive(),
                  this.observations_.forEach(function (t) {
                    t.isActive() && e.activeObservations_.push(t);
                  });
              }),
              (e.prototype.broadcastActive = function () {
                if (this.hasActive()) {
                  var e = this.callbackCtx_,
                    t = this.activeObservations_.map(function (e) {
                      return new P(e.target, e.broadcastRect());
                    });
                  this.callback_.call(e, t, e), this.clearActive();
                }
              }),
              (e.prototype.clearActive = function () {
                this.activeObservations_.splice(0);
              }),
              (e.prototype.hasActive = function () {
                return this.activeObservations_.length > 0;
              }),
              e
            );
          })(),
          E = 'undefined' !== typeof WeakMap ? new WeakMap() : new n(),
          S = (function () {
            function e(t) {
              if (!(this instanceof e))
                throw new TypeError('Cannot call a class as a function.');
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.');
              var n = s.getInstance(),
                r = new M(t, n, this);
              E.set(this, r);
            }
            return e;
          })();
        ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
          S.prototype[e] = function () {
            var t;
            return (t = E.get(this))[e].apply(t, arguments);
          };
        });
        var x = (function () {
          return 'undefined' !== typeof o.ResizeObserver ? o.ResizeObserver : S;
        })();
        t['a'] = x;
      }.call(this, n('IyRk')));
    },
    beRK: function (e, t, n) {
      'use strict';
      function r() {
        var e = i(n('q1tI'));
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      function o(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (o = function (e) {
          return e ? n : t;
        })(e);
      }
      function i(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var n = o(t);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ('default' !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var a = i ? Object.getOwnPropertyDescriptor(e, u) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, u, a)
              : (r[u] = e[u]);
          }
        return (r.default = e), n && n.set(e, r), r;
      }
      function u(e, t) {
        return s(e) || f(e, t) || c(e, t) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(e, t) {
        if (e) {
          if ('string' === typeof e) return l(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function f(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      function d() {
        return 'BASEMENT' === Object({ NODE_ENV: 'production' }).PLATFORM_TYPE;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.getDemoUrl = t.getDemoRouteName = void 0);
      var p = function () {
        return d() ? '_demos' : '~demos';
      };
      t.getDemoRouteName = p;
      var h = function (e) {
        var t,
          n = window,
          r = n.location,
          o = r.href,
          i = r.origin,
          a = o.split(/#\//),
          c = u(a, 2),
          l = c[0],
          f = c[1],
          s = 'string' === typeof f;
        return [
          s ? ''.concat(l, '#') : i,
          ''
            .concat(
              (null === (t = window) || void 0 === t ? void 0 : t.routerBase) ||
                '',
              '/',
            )
            .replace(/\/\/$/, '/'),
          p(),
          '/',
          e,
          d() ? '/index.html' : '',
        ].join('');
      };
      t.getDemoUrl = h;
      var y = function (e) {
        var t = (0, r().useState)(''),
          n = u(t, 2),
          o = n[0],
          i = n[1];
        return (
          (0, r().useEffect)(
            function () {
              i(h(e));
            },
            [e],
          ),
          o
        );
      };
      t.default = y;
    },
    dEAq: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'context', {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(t, 'Link', {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, 'NavLink', {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, 'AnchorLink', {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, 'useSearch', {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, 'useCopy', {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, 'useRiddle', {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, 'useMotions', {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, 'useCodeSandbox', {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, 'useLocaleProps', {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, 'useDemoUrl', {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(t, 'useApiData', {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(t, 'useTSPlaygroundUrl', {
          enumerable: !0,
          get: function () {
            return y.default;
          },
        }),
        Object.defineProperty(t, 'usePrefersColor', {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        });
      var r = b(n('nLCz')),
        o = b(n('zqmC')),
        i = b(n('6asN')),
        u = b(n('bYHP')),
        a = b(n('t/kZ')),
        c = b(n('dfPH')),
        l = b(n('o0kM')),
        f = b(n('zYLY')),
        s = b(n('r1Q5')),
        d = b(n('U/TZ')),
        p = b(n('beRK')),
        h = b(n('3QDa')),
        y = b(n('7sf/')),
        v = b(n('2N97'));
      function b(e) {
        return e && e.__esModule ? e : { default: e };
      }
    },
    dfPH: function (e, t, n) {
      'use strict';
      function r() {
        var e = a(n('q1tI'));
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = i(n('WWur'));
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function a(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, i, a)
              : (r[i] = e[i]);
          }
        return (r.default = e), n && n.set(e, r), r;
      }
      function c(e, t) {
        return p(e) || d(e, t) || f(e, t) || l();
      }
      function l() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function f(e, t) {
        if (e) {
          if ('string' === typeof e) return s(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? s(e, t)
              : void 0
          );
        }
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function d(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function p(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var h = function () {
        var e = (0, r().useState)(),
          t = c(e, 2),
          n = t[0],
          i = t[1],
          u = (0, r().useState)('ready'),
          a = c(u, 2),
          l = a[0],
          f = a[1],
          s = (0, r().useCallback)(function (e) {
            (0, o().default)(e),
              f('copied'),
              clearTimeout(n),
              i(
                setTimeout(function () {
                  f('ready');
                }, 2e3),
              );
          }, []);
        return [s, l];
      };
      t.default = h;
    },
    'f/k9': function (e, t, n) {
      'use strict';
      var r = n('MgzW'),
        o = n('q1tI');
      t.useSubscription = function (e) {
        var t = e.getCurrentValue,
          n = e.subscribe,
          i = o.useState(function () {
            return { getCurrentValue: t, subscribe: n, value: t() };
          });
        e = i[0];
        var u = i[1];
        return (
          (i = e.value),
          (e.getCurrentValue === t && e.subscribe === n) ||
            ((i = t()), u({ getCurrentValue: t, subscribe: n, value: i })),
          o.useDebugValue(i),
          o.useEffect(
            function () {
              function e() {
                if (!o) {
                  var e = t();
                  u(function (o) {
                    return o.getCurrentValue !== t ||
                      o.subscribe !== n ||
                      o.value === e
                      ? o
                      : r({}, o, { value: e });
                  });
                }
              }
              var o = !1,
                i = n(e);
              return (
                e(),
                function () {
                  (o = !0), i();
                }
              );
            },
            [t, n],
          ),
          i
        );
      };
    },
    nLCz: function (e, t, n) {
      'use strict';
      function r() {
        var e = o(n('q1tI'));
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var i = r().default.createContext({
        config: {
          mode: 'doc',
          title: '',
          navs: {},
          menus: {},
          locales: [],
          repository: { branch: 'master' },
          theme: {},
        },
        meta: { title: '' },
        menu: [],
        nav: [],
        base: '',
        routes: [],
      });
      t.default = i;
    },
    o0kM: function (e, t, n) {
      'use strict';
      var r = n('5wUe');
      function o() {
        var e = u(n('q1tI'));
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function i(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (i = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var n = i(t);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ('default' !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var a = o ? Object.getOwnPropertyDescriptor(e, u) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, u, a)
              : (r[u] = e[u]);
          }
        return (r.default = e), n && n.set(e, r), r;
      }
      function a(e, t) {
        return d(e) || s(e, t) || l(e, t) || c();
      }
      function c() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function l(e, t) {
        if (e) {
          if ('string' === typeof e) return f(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? f(e, t)
              : void 0
          );
        }
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function s(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function d(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var p,
        h = 'https://riddle.alibaba-inc.com/riddles/define',
        y = function () {
          var e = (0, o().useState)(Boolean(p)),
            t = a(e, 2),
            n = t[0],
            r = t[1];
          return (
            (0, o().useEffect)(function () {
              if (void 0 === p) {
                var e = document.createElement('img');
                setTimeout(function () {
                  (e.src = ''), e.remove();
                }, 200),
                  (e.onload = function () {
                    (p = !0), r(!0), e.remove();
                  }),
                  (e.src =
                    'https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png');
              }
            }, []),
            n
          );
        };
      function v(e) {
        var t,
          n = e.dependencies,
          r = e.sources._.tsx || e.sources._.jsx;
        return (
          (r = r
            .replace(
              /^/,
              "import ReactDOM from 'react-dom@".concat(
                (null === (t = n.react) || void 0 === t ? void 0 : t.version) ||
                  'latest',
                "';\n",
              ),
            )
            .replace('export default', 'const DumiDemo =')
            .concat('\nReactDOM.render(<DumiDemo />, mountNode);')),
          (r = r.replace(/(from ')((?:@[^/'"]+)?[^/'"]+)/g, function (e, t, r) {
            var o = ''.concat(t).concat(r);
            return n[r] && (o += '@'.concat(n[r].version)), o;
          })),
          r
        );
      }
      var b = function (e) {
        var t = (0, o().useState)(),
          n = a(t, 2),
          i = n[0],
          u = n[1],
          c = y();
        return (
          (0, o().useEffect)(
            function () {
              if (e && c && 1 === Object.keys(e.sources).length) {
                var t = document.createElement('form'),
                  n = document.createElement('input');
                return (
                  (t.method = 'POST'),
                  (t.target = '_blank'),
                  (t.style.display = 'none'),
                  (t.action = h),
                  t.appendChild(n),
                  t.setAttribute('data-demo', e.title || ''),
                  (n.name = 'data'),
                  (n.value = JSON.stringify({
                    title: e.titlle,
                    js: v(e),
                    css: Object.entries(e.dependencies)
                      .filter(function (e) {
                        var t = r(e, 2),
                          n = t[1];
                        return n.css;
                      })
                      .map(function (e) {
                        var t = r(e, 2),
                          n = t[0],
                          o = t[1],
                          i = o.version,
                          u = o.css;
                        return "@import '~".concat(
                          u.replace(
                            new RegExp('^('.concat(n, ')')),
                            '$1@'.concat(i),
                          ),
                          "';",
                        );
                      })
                      .join('\n'),
                  })),
                  document.body.appendChild(t),
                  u(function () {
                    return function () {
                      return t.submit();
                    };
                  }),
                  function () {
                    return t.remove();
                  }
                );
              }
            },
            [e, c],
          ),
          i
        );
      };
      t.default = b;
    },
    r1Q5: function (e, t, n) {
      'use strict';
      var r = n('5wUe');
      function o() {
        var e = c(n('q1tI'));
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function i() {
        var e = u(n('6xEa'));
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (a = function (e) {
          return e ? n : t;
        })(e);
      }
      function c(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var n = a(t);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var u = o ? Object.getOwnPropertyDescriptor(e, i) : null;
            u && (u.get || u.set)
              ? Object.defineProperty(r, i, u)
              : (r[i] = e[i]);
          }
        return (r.default = e), n && n.set(e, r), r;
      }
      function l(e, t) {
        return h(e) || p(e, t) || s(e, t) || f();
      }
      function f() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function s(e, t) {
        if (e) {
          if ('string' === typeof e) return d(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? d(e, t)
              : void 0
          );
        }
      }
      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function p(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function h(e) {
        if (Array.isArray(e)) return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var y = 'https://codesandbox.io/api/v1/sandboxes/define';
      function v(e) {
        return i()
          .default.compressToBase64(JSON.stringify(e))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
      }
      function b(e) {
        var t = document.createElement('span');
        t.innerHTML = e;
        var n = t.textContent;
        return t.remove(), n;
      }
      function m(e) {
        var t = Boolean(e.sources._.tsx),
          n = t ? '.tsx' : '.jsx',
          o = {},
          i = {},
          u = Object.values(e.dependencies).filter(function (e) {
            return e.css;
          }),
          a = 'App'.concat(n),
          c = 'index'.concat(n);
        return (
          Object.entries(e.dependencies).forEach(function (e) {
            var t = r(e, 2),
              n = t[0],
              o = t[1].version;
            i[n] = o;
          }),
          i['react-dom'] || (i['react-dom'] = i.react || 'latest'),
          (o['sandbox.config.json'] = {
            content: JSON.stringify(
              {
                template: t
                  ? 'create-react-app-typescript'
                  : 'create-react-app',
              },
              null,
              2,
            ),
          }),
          (o['package.json'] = {
            content: JSON.stringify(
              {
                name: e.title,
                description:
                  b(e.description) || 'An auto-generated demo by dumi',
                main: c,
                dependencies: i,
                devDependencies: t ? { typescript: '^3' } : {},
              },
              null,
              2,
            ),
          }),
          (o['index.html'] = {
            content: '<div style="margin: 16px;" id="root"></div>',
          }),
          (o[c] = {
            content:
              "/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(
                u
                  .map(function (e) {
                    var t = e.css;
                    return "import '".concat(t, "';");
                  })
                  .join('\n'),
                "\nimport App from './App';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);",
              ),
          }),
          Object.entries(e.sources).forEach(function (e) {
            var t = r(e, 2),
              n = t[0],
              i = t[1],
              u = i.tsx,
              c = i.jsx,
              l = i.content;
            o['_' === n ? a : n] = { content: u || c || l };
          }),
          v({ files: o })
        );
      }
      var g = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y,
          n = (0, o().useState)(),
          r = l(n, 2),
          i = r[0],
          u = r[1];
        return (
          (0, o().useEffect)(
            function () {
              if (e) {
                var n = document.createElement('form'),
                  r = document.createElement('input'),
                  o = m(e);
                return (
                  (n.method = 'POST'),
                  (n.target = '_blank'),
                  (n.style.display = 'none'),
                  (n.action = t),
                  n.appendChild(r),
                  n.setAttribute('data-demo', e.title || ''),
                  (r.name = 'parameters'),
                  (r.value = o),
                  document.body.appendChild(n),
                  u(function () {
                    return function () {
                      return n.submit();
                    };
                  }),
                  function () {
                    return n.remove();
                  }
                );
              }
            },
            [e],
          ),
          i
        );
      };
      t.default = g;
    },
    't/kZ': function (e, t, n) {
      'use strict';
      var r = n('R5yR');
      function o() {
        var e = a(n('q1tI'));
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var i = n('dEAq');
      function u(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function a(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, i, a)
              : (r[i] = e[i]);
          }
        return (r.default = e), n && n.set(e, r), r;
      }
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                f(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function f(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function s(e, t) {
        return v(e) || y(e, t) || p(e, t) || d();
      }
      function d() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function p(e, t) {
        if (e) {
          if ('string' === typeof e) return h(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? h(e, t)
              : void 0
          );
        }
      }
      function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function y(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function v(e) {
        if (Array.isArray(e)) return e;
      }
      var b = function (e) {
          var t = (0, o().useContext)(i.context),
            n = t.locale,
            u = t.routes,
            a = t.config.locales,
            c = (0, o().useState)([]),
            l = s(c, 2),
            f = l[0],
            d = l[1],
            p = (0, o().useState)([]),
            h = s(p, 2),
            y = h[0],
            v = h[1];
          return (
            (0, o().useEffect)(
              function () {
                d(
                  u
                    .filter(function (e) {
                      var t = e.title,
                        r = e.meta,
                        o =
                          (null === r || void 0 === r ? void 0 : r.locale) ===
                          n,
                        i =
                          (null === r || void 0 === r ? void 0 : r.locale) ===
                            a[0].name ||
                          (!(null === r || void 0 === r ? void 0 : r.locale) &&
                            (!a.length || n === a[0].name));
                      return t && (i || o);
                    })
                    .reduce(function (e, t) {
                      var n,
                        o,
                        i = { title: t.title, path: t.path };
                      return (
                        (null === (n = t.meta) || void 0 === n
                          ? void 0
                          : n.group) && (i.parent = t.meta.group),
                        e.push(i),
                        e.push.apply(
                          e,
                          r(
                            (
                              (null === (o = t.meta) || void 0 === o
                                ? void 0
                                : o.slugs) || []
                            )
                              .filter(function (e) {
                                var n = e.value;
                                return n !== t.title;
                              })
                              .map(function (e) {
                                return {
                                  title: e.value,
                                  path: ''
                                    .concat(t.path, '#')
                                    .concat(e.heading),
                                  parent: i,
                                };
                              }),
                          ),
                        ),
                        e
                      );
                    }, []),
                );
              },
              [u.length, n],
            ),
            (0, o().useEffect)(
              function () {
                var t =
                  null === e || void 0 === e ? void 0 : e.trim().toUpperCase();
                if (t) {
                  for (var n = [], r = 0; r < f.length; r += 1)
                    f[r].title.toUpperCase().indexOf(t) > -1 && n.push(f[r]);
                  v(n);
                } else v([]);
              },
              [e, f.length],
            ),
            y
          );
        },
        m = function () {
          var e = (0, o().useContext)(i.context),
            t = e.config.algolia,
            n = (0, o().useCallback)(
              function (e) {
                window.docsearch(l({ inputSelector: e }, t));
              },
              [t],
            );
          return n;
        },
        g = function (e) {
          var t = (0, o().useContext)(i.context),
            n = t.config,
            r = b(e),
            u = m();
          return n.algolia ? u : r;
        };
      t.default = g;
    },
    tJVT: function (e, t, n) {
      'use strict';
      function r(e) {
        if (Array.isArray(e)) return e;
      }
      function o(e, t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var u, a = e[Symbol.iterator]();
              !(r = (u = a.next()).done);
              r = !0
            )
              if ((n.push(u.value), t && n.length === t)) break;
          } catch (c) {
            (o = !0), (i = c);
          } finally {
            try {
              r || null == a['return'] || a['return']();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        }
      }
      n.d(t, 'a', function () {
        return a;
      });
      var i = n('Qw5x');
      function u() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function a(e, t) {
        return r(e) || o(e, t) || Object(i['a'])(e, t) || u();
      }
    },
    xbqb: function (e, t) {
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      e.exports = n;
    },
    zYLY: function (e, t, n) {
      'use strict';
      function r() {
        var e = i(n('q1tI'));
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      function o(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (o = function (e) {
          return e ? n : t;
        })(e);
      }
      function i(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var n = o(t);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ('default' !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var a = i ? Object.getOwnPropertyDescriptor(e, u) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, u, a)
              : (r[u] = e[u]);
          }
        return (r.default = e), n && n.set(e, r), r;
      }
      function u(e, t) {
        return s(e) || f(e, t) || c(e, t) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(e, t) {
        if (e) {
          if ('string' === typeof e) return l(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function f(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (n = n.call(e); !(u = (r = n.next()).done); u = !0)
              if ((i.push(r.value), t && i.length === t)) break;
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == n['return'] || n['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      function d(e, t, n) {
        var r,
          o =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        if (o < t.length) {
          var i = t[o],
            a = function () {
              return d(e, t, n, o + 1);
            },
            c = i.match(/^([^:]+):?(.*)$/) || [],
            l = u(c, 3),
            f = l[1],
            s = l[2];
          switch (f) {
            case 'autoplay':
              a();
              break;
            case 'click':
              var p = s.match(/^(global\()?(.+?)\)?$/) || [],
                h = u(p, 3),
                y = h[1],
                v = h[2],
                b = y ? document : e;
              null === (r = b.querySelector(v)) || void 0 === r || r.click(),
                a();
              break;
            case 'timeout':
              setTimeout(a, Number(s));
              break;
            case 'capture':
              window.postMessage(
                { type: 'dumi:capture-element', value: s },
                '*',
              ),
                a();
              break;
            default:
              console.warn(
                "[dumi: motion] unknown motion '".concat(i, "', skip."),
              ),
                a();
          }
        } else n();
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var p = function (e, t) {
        var n = (0, r().useState)(!1),
          o = u(n, 2),
          i = o[0],
          a = o[1],
          c = (0, r().useCallback)(
            function () {
              i ||
                (d(t, e, function () {
                  a(!1);
                }),
                a(!0));
            },
            [e, t, i],
          );
        return (
          (0, r().useEffect)(
            function () {
              'autoplay' === e[0] && t && c();
            },
            [e, t],
          ),
          [c, i]
        );
      };
      t.default = p;
    },
    zqmC: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.LinkWrapper = void 0);
      var r = u(n('q1tI')),
        o = n('LtsZ'),
        i = ['to'];
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      function c(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = l(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      var f = function (e) {
        return function (t) {
          var n = t.to,
            o = c(t, i),
            u = /^(\w+:)?\/\//.test(n) || !n,
            l = r.default.isValidElement(o.children);
          return r.default.createElement(
            e,
            a(
              {
                to: n || '',
                component: u
                  ? function () {
                      return r.default.createElement(
                        'a',
                        {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          href: n,
                        },
                        o.children,
                        n &&
                          !l &&
                          r.default.createElement(
                            'svg',
                            {
                              xmlns: 'http://www.w3.org/2000/svg',
                              'aria-hidden': 'true',
                              x: '0px',
                              y: '0px',
                              viewBox: '0 0 100 100',
                              width: '15',
                              height: '15',
                              className: '__dumi-default-external-link-icon',
                            },
                            r.default.createElement('path', {
                              fill: 'currentColor',
                              d: 'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
                            }),
                            r.default.createElement('polygon', {
                              fill: 'currentColor',
                              points:
                                '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
                            }),
                          ),
                      );
                    }
                  : void 0,
              },
              o,
              u
                ? {}
                : {
                    onClick: function () {
                      var e;
                      window.scrollTo({ top: 0 });
                      for (
                        var t = arguments.length, n = new Array(t), r = 0;
                        r < t;
                        r++
                      )
                        n[r] = arguments[r];
                      null === (e = o.onClick) ||
                        void 0 === e ||
                        e.apply(this, n);
                    },
                  },
            ),
          );
        };
      };
      t.LinkWrapper = f;
      var s = f(o.Link);
      t.default = s;
    },
  },
]);
