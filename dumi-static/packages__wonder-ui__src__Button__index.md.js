(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [25, 4, 5],
  {
    '/3eQ': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var i = n('errf');
      function r(e) {
        var t,
          n,
          r,
          a,
          o,
          d,
          l =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          s =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          p = 0,
          c = !1,
          u = !1,
          f = !0,
          m =
            !l && 0 !== l && 'function' === typeof window.requestAnimationFrame;
        if ('function' !== typeof e) throw new TypeError('Expected a function');
        function y(i) {
          var r = t,
            o = n;
          return (t = n = void 0), (p = i), (a = e.apply(o, r)), a;
        }
        function E(e, t) {
          return m
            ? (window.cancelAnimationFrame(o), window.requestAnimationFrame(e))
            : setTimeout(e, t);
        }
        function v(e) {
          if (m) return window.cancelAnimationFrame(e);
          clearTimeout(e);
        }
        function H(e) {
          return (p = e), (o = E(b, l)), c ? y(e) : a;
        }
        function h(e) {
          var t = e - d,
            n = e - p,
            i = l - t;
          return u ? Math.min(i, r - n) : i;
        }
        function g(e) {
          var t = e - d,
            n = e - p;
          return void 0 === d || t >= l || t < 0 || (u && n >= r);
        }
        function b() {
          var e = Date.now();
          if (g(e)) return M(e);
          o = E(b, h(e));
        }
        function M(e) {
          return (o = void 0), f && t ? y(e) : ((t = n = void 0), a);
        }
        function L() {
          void 0 !== o && v(o), (p = 0), (t = d = n = o = void 0);
        }
        function T() {
          return void 0 === o ? a : M(Date.now());
        }
        function C() {
          return void 0 !== o;
        }
        function D() {
          for (
            var e = Date.now(),
              i = g(e),
              r = arguments.length,
              s = new Array(r),
              p = 0;
            p < r;
            p++
          )
            s[p] = arguments[p];
          if (((t = s), (n = this), (d = e), i)) {
            if (void 0 === o) return H(d);
            if (u) return (o = E(b, l)), y(d);
          }
          return void 0 === o && (o = E(b, l)), a;
        }
        return (
          (l = +(l || 0)),
          Object(i['e'])(s) &&
            ((c = !!s.leading),
            (u = 'maxWait' in s),
            (r = u ? Math.max(+(s.maxWait || 0), l) : r),
            (f = 'trailing' in s ? !!s.trailing : f)),
          (D.cancel = L),
          (D.flush = T),
          (D.pending = C),
          D
        );
      }
    },
    '073t': function (e, t, n) {
      'use strict';
    },
    '0D7Y': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      class i {
        static raise(e, t, n, r) {
          var a;
          if (i._isElement(e)) {
            if ('undefined' !== typeof document && document.createEvent) {
              var o = document.createEvent('HTMLEvents');
              o.initEvent(t, r || !1, !0),
                Object.assign(o, n),
                (a = e.dispatchEvent(o));
            } else if (
              'undefined' !== typeof document &&
              document.createEventObject
            ) {
              var d = document.createEventObject(n);
              e.fireEvent('on' + t, d);
            }
          } else
            while (e && !1 !== a) {
              var l = e.__events__,
                s = l ? l[t] : null;
              if (s)
                for (var p in s)
                  if (s.hasOwnProperty(p))
                    for (var c = s[p], u = 0; !1 !== a && u < c.length; u++) {
                      var f = c[u];
                      f.objectCallback &&
                        (a = f.objectCallback.call(f.parent, n));
                    }
              e = r ? e.parent : null;
            }
          return a;
        }
        static isObserved(e, t) {
          var n = e && e.__events__;
          return !!n && !!n[t];
        }
        static isDeclared(e, t) {
          var n = e && e.__declaredEvents;
          return !!n && !!n[t];
        }
        static stopPropagation(e) {
          e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
        }
        static _isElement(e) {
          return (
            !!e &&
            (!!e.addEventListener ||
              ('undefined' !== typeof HTMLElement && e instanceof HTMLElement))
          );
        }
        constructor(e) {
          (this._parent = void 0),
            (this._eventRecords = void 0),
            (this._id = i._uniqueId++),
            (this._isDisposed = void 0),
            (this._parent = e),
            (this._eventRecords = []);
        }
        dispose() {
          this._isDisposed ||
            ((this._isDisposed = !0), this.off(), (this._parent = null));
        }
        onAll(e, t, n) {
          for (var i in t) t.hasOwnProperty(i) && this.on(e, i, t[i], n);
        }
        on(e, t, n, r) {
          var a = this;
          if (t.indexOf(',') > -1)
            for (var o = t.split(/[ ,]+/), d = 0; d < o.length; d++)
              this.on(e, o[d], n, r);
          else {
            var l = this._parent,
              s = {
                target: e,
                eventName: t,
                parent: l,
                callback: n,
                options: r,
              },
              p = (e.__events__ = e.__events__ || {});
            if (
              ((p[t] = p[t] || { count: 0 }),
              (p[t][this._id] = p[t][this._id] || []),
              p[t][this._id].push(s),
              p[t].count++,
              i._isElement(e))
            ) {
              var c = function () {
                if (!a._isDisposed) {
                  var e;
                  try {
                    for (
                      var t = arguments.length, i = new Array(t), r = 0;
                      r < t;
                      r++
                    )
                      i[r] = arguments[r];
                    if (((e = n.apply(l, i)), !1 === e && i[0])) {
                      var o = i[0];
                      o.preventDefault && o.preventDefault(),
                        o.stopPropagation && o.stopPropagation(),
                        (o.cancelBubble = !0);
                    }
                  } catch (o) {}
                  return e;
                }
              };
              (s.elementCallback = c),
                e.addEventListener
                  ? e.addEventListener(t, c, r)
                  : e.attachEvent && e.attachEvent('on' + t, c);
            } else {
              var u = function () {
                if (!a._isDisposed) {
                  for (
                    var e = arguments.length, t = new Array(e), i = 0;
                    i < e;
                    i++
                  )
                    t[i] = arguments[i];
                  return n.apply(l, t);
                }
              };
              s.objectCallback = u;
            }
            this._eventRecords.push(s);
          }
        }
        off(e, t, n, i) {
          for (var r = 0; r < this._eventRecords.length; r++) {
            var a = this._eventRecords[r];
            if (
              (!e || e === a.target) &&
              (!t || t === a.eventName) &&
              (!n || n === a.callback) &&
              ('boolean' !== typeof i || i === a.options)
            ) {
              var o = a.target.__events__,
                d = o[a.eventName],
                l = d ? d[this._id] : null;
              l &&
                (1 !== l.length && n
                  ? (d.count--, l.splice(l.indexOf(a), 1))
                  : ((d.count -= l.length), delete o[a.eventName][this._id]),
                d.count || delete o[a.eventName]),
                a.elementCallback &&
                  (a.target.removeEventListener
                    ? a.target.removeEventListener(
                        a.eventName,
                        a.elementCallback,
                        a.options,
                      )
                    : a.target.detachEvent &&
                      a.target.detachEvent(
                        'on' + a.eventName,
                        a.elementCallback,
                      )),
                this._eventRecords.splice(r--, 1);
            }
          }
        }
        raise(e, t, n) {
          return i.raise(this._parent, e, t, n);
        }
        declare(e) {
          var t = (this._parent.__declaredEvents =
            this._parent.__declaredEvents || {});
          if ('string' === typeof e) t[e] = !0;
          else for (var n = 0; n < e.length; n++) t[e[n]] = !0;
        }
      }
      i._uniqueId = 0;
    },
    '0H/f': function (e, t, n) {
      'use strict';
      var i = n('q1tI'),
        r = n.n(i),
        a = n('dEAq'),
        o = n('AUa1'),
        d = {
          'zh-CN': {
            name: '\u5c5e\u6027\u540d',
            description: '\u63cf\u8ff0',
            type: '\u7c7b\u578b',
            default: '\u9ed8\u8ba4\u503c',
            required: '(\u5fc5\u9009)',
          },
          'en-US': {
            name: 'Name',
            description: 'Description',
            type: 'Type',
            default: 'Default',
            required: '(required)',
          },
        };
      t['a'] = (e) => {
        var t = e.identifier,
          n = e.export,
          l = e.props,
          s = Object(a['useApiData'])(t),
          p = Object(i['useContext'])(a['context']),
          c = p.locale,
          u = /^zh|cn$/i.test(c) ? d['zh-CN'] : d['en-US'],
          f = r.a.useRef(null),
          m = Object(o['b'])(() => ('string' === typeof l ? l.split('|') : []));
        return (
          r.a.useEffect(() => {
            var e;
            f.current &&
              (null === (e = f.current.previousElementSibling) ||
                void 0 === e ||
                e.append(' - '.concat(t)));
          }, []),
          r.a.createElement(
            r.a.Fragment,
            null,
            s &&
              r.a.createElement(
                'table',
                { style: { marginTop: 24 }, ref: f },
                r.a.createElement(
                  'thead',
                  null,
                  r.a.createElement(
                    'tr',
                    null,
                    r.a.createElement(
                      'th',
                      { style: { width: '12%' } },
                      u.name,
                    ),
                    r.a.createElement('th', null, u.description),
                    r.a.createElement('th', null, u.type),
                    r.a.createElement(
                      'th',
                      { style: { width: '10%' } },
                      u.default,
                    ),
                  ),
                ),
                r.a.createElement(
                  'tbody',
                  null,
                  s[n].map((e) =>
                    m.includes(e.identifier)
                      ? r.a.createElement(
                          'tr',
                          { key: e.identifier },
                          r.a.createElement('td', null, e.identifier),
                          r.a.createElement('td', null, e.description || '-'),
                          r.a.createElement(
                            'td',
                            null,
                            r.a.createElement('code', null, e.type),
                          ),
                          r.a.createElement(
                            'td',
                            null,
                            e.default || (e.required && u.required) || '-',
                          ),
                        )
                      : null,
                  ),
                ),
              ),
          )
        );
      };
    },
    '1M8/': function (e, t, n) {
      'use strict';
      n.r(t);
      var i = n('q1tI'),
        r = n.n(i),
        a = n('dEAq'),
        o = n('0H/f'),
        d = n('Hf60'),
        l = n('JjdP'),
        s = r.a.memo(l['default']['button-colors'].component),
        p = r.a.memo(l['default']['button-tags'].component),
        c = r.a.memo(l['default']['button-outlined'].component),
        u = r.a.memo(l['default']['button-text'].component),
        f = r.a.memo(l['default']['button-shape'].component),
        m = r.a.memo(l['default']['button-size'].component),
        y = r.a.memo(l['default']['button-block'].component),
        E = r.a.memo(l['default']['button-disabled'].component);
      t['default'] = (e) => (
        r.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            a['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(
                'h1',
                { id: 'button-\u6309\u94ae' },
                r.a.createElement(
                  a['AnchorLink'],
                  {
                    to: '#button-\u6309\u94ae',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  r.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Button \u6309\u94ae',
              ),
              r.a.createElement(
                'p',
                null,
                '\u7528\u6237\u70b9\u51fb\u89e6\u53d1\u52a8\u4f5c\u6216\u505a\u51fa\u9009\u62e9\u7684\u533a\u57df. \u901a\u5e38\u51fa\u73b0\u5728\u4e00\u4e9b\u7528\u6237\u53ef\u4f20\u8fbe\u64cd\u4f5c\u547d\u4ee4\u7684\u573a\u666f\u4e2d, \u4f8b\u5982:',
              ),
              r.a.createElement(
                'ul',
                null,
                r.a.createElement('li', null, 'Dialog \u5bf9\u8bdd\u6846'),
                r.a.createElement('li', null, 'Modal \u6a21\u6001\u6846'),
                r.a.createElement('li', null, 'Form \u8868\u5355'),
                r.a.createElement('li', null, '...'),
              ),
              r.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                r.a.createElement(
                  a['AnchorLink'],
                  {
                    to: '#\u4ee3\u7801\u6f14\u793a',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  r.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
              r.a.createElement(
                'h3',
                { id: '\u6309\u94ae\u989c\u8272' },
                r.a.createElement(
                  a['AnchorLink'],
                  {
                    to: '#\u6309\u94ae\u989c\u8272',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  r.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u6309\u94ae\u989c\u8272',
              ),
              r.a.createElement(
                'p',
                null,
                '\u6309\u94ae\u5206\u4e0b\u9762\u51e0\u79cd\u7c7b\u578b ',
                r.a.createElement('code', null, 'primary'),
                ' | ',
                r.a.createElement('code', null, 'secondary'),
                ' | ',
                r.a.createElement('code', null, 'success'),
                ' | ',
                r.a.createElement('code', null, 'danger'),
                ' | ',
                r.a.createElement('code', null, 'warning'),
                ' | ',
                r.a.createElement('code', null, 'info'),
                ' | ',
                r.a.createElement('code', null, 'light'),
                ' | ',
                r.a.createElement('code', null, 'dark'),
              ),
            ),
            r.a.createElement(
              d['default'],
              l['default']['button-colors'].previewerProps,
              r.a.createElement(s, null),
            ),
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(
                'h3',
                { id: '\u6309\u94ae\u6807\u7b7e' },
                r.a.createElement(
                  a['AnchorLink'],
                  {
                    to: '#\u6309\u94ae\u6807\u7b7e',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  r.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u6309\u94ae\u6807\u7b7e',
              ),
              r.a.createElement(
                'p',
                null,
                '\u6309\u94ae\u6807\u7b7e\u9762\u51e0\u79cd\u7c7b\u578b ',
                r.a.createElement('code', null, 'a'),
                ' | ',
                r.a.createElement('code', null, 'button'),
                ' | ',
                r.a.createElement('code', null, 'input'),
              ),
            ),
            r.a.createElement(
              d['default'],
              l['default']['button-tags'].previewerProps,
              r.a.createElement(p, null),
            ),
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(
                'h3',
                { id: '\u63cf\u8fb9\u6309\u94ae' },
                r.a.createElement(
                  a['AnchorLink'],
                  {
                    to: '#\u63cf\u8fb9\u6309\u94ae',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  r.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u63cf\u8fb9\u6309\u94ae',
              ),
              r.a.createElement(
                'p',
                null,
                '\u548c\u5b9e\u5fc3\u6309\u94ae\u76f8\u6bd4\uff0c\u63cf\u8fb9\u6309\u94ae\u5f3a\u8c03\u7684\u66f4\u5c11\uff1b\u6216\u8005\u548c\u6587\u672c\u6309\u94ae\u76f8\u6bd4\uff0c\u63cf\u8fb9\u6309\u94ae\u5f3a\u8c03\u7684\u66f4\u591a\u3002',
              ),
            ),
            r.a.createElement(
              d['default'],
              l['default']['button-outlined'].previewerProps,
              r.a.createElement(c, null),
            ),
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(
                'h3',
                { id: '\u6587\u5b57\u6309\u94ae' },
                r.a.createElement(
                  a['AnchorLink'],
                  {
                    to: '#\u6587\u5b57\u6309\u94ae',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  r.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u6587\u5b57\u6309\u94ae',
              ),
              r.a.createElement(
                'p',
                null,
                '\u6587\u672c\u6309\u94ae\u5f3a\u8c03\u7684\u6700\u5c11\u3002',
              ),
            ),
            r.a.createElement(
              d['default'],
              l['default']['button-text'].previewerProps,
              r.a.createElement(u, null),
            ),
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(
                'h3',
                { id: '\u6309\u94ae\u5f62\u72b6' },
                r.a.createElement(
                  a['AnchorLink'],
                  {
                    to: '#\u6309\u94ae\u5f62\u72b6',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  r.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u6309\u94ae\u5f62\u72b6',
              ),
              r.a.createElement(
                'p',
                null,
                '\u6309\u94ae\u5206\u4e0b\u9762\u51e0\u79cd\u7c7b\u578b ',
                r.a.createElement('code', null, 'default'),
                '|',
                r.a.createElement('code', null, 'square'),
                '|',
                r.a.createElement('code', null, 'round'),
              ),
            ),
            r.a.createElement(
              d['default'],
              l['default']['button-shape'].previewerProps,
              r.a.createElement(f, null),
            ),
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(
                'h3',
                { id: '\u6309\u94ae\u5c3a\u5bf8' },
                r.a.createElement(
                  a['AnchorLink'],
                  {
                    to: '#\u6309\u94ae\u5c3a\u5bf8',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  r.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u6309\u94ae\u5c3a\u5bf8',
              ),
              r.a.createElement(
                'p',
                null,
                '\u6309\u94ae\u5c3a\u5bf8\u5206\u4e0b\u9762\u51e0\u79cd\u7c7b\u578b ',
                r.a.createElement('code', null, 'small'),
                ' | ',
                r.a.createElement('code', null, 'medium'),
                ' | ',
                r.a.createElement('code', null, 'large'),
                ', \u9ed8\u8ba4\u662f ',
                r.a.createElement('code', null, 'medium'),
              ),
            ),
            r.a.createElement(
              d['default'],
              l['default']['button-size'].previewerProps,
              r.a.createElement(m, null),
            ),
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(
                'h3',
                { id: '\u5757\u72b6\u6309\u94ae' },
                r.a.createElement(
                  a['AnchorLink'],
                  {
                    to: '#\u5757\u72b6\u6309\u94ae',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  r.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u5757\u72b6\u6309\u94ae',
              ),
            ),
            r.a.createElement(
              d['default'],
              l['default']['button-block'].previewerProps,
              r.a.createElement(y, null),
            ),
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(
                'h3',
                { id: '\u7981\u7528\u6309\u94ae' },
                r.a.createElement(
                  a['AnchorLink'],
                  {
                    to: '#\u7981\u7528\u6309\u94ae',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  r.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7981\u7528\u6309\u94ae',
              ),
            ),
            r.a.createElement(
              d['default'],
              l['default']['button-disabled'].previewerProps,
              r.a.createElement(E, null),
            ),
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(
                'h2',
                { id: 'api' },
                r.a.createElement(
                  a['AnchorLink'],
                  { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                  r.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'API',
              ),
              r.a.createElement(o['a'], {
                src: './Button.tsx',
                props:
                  'color|classes|className|style|component|children|disableRipple|disableFocusRipple|disabled|focusVisibleClassName|square|fullWidth|shape|size|variant',
                identifier: 'Button',
                export: 'default',
              }),
            ),
          ),
        )
      );
    },
    '4ce4': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var i = n('4jWV'),
        r = n('errf');
      function a() {
        for (
          var e = new i['a'](), t = arguments.length, n = new Array(t), a = 0;
          a < t;
          a++
        )
          n[a] = arguments[a];
        return n.reduce(
          (t, n) =>
            null == n
              ? t
              : function (i) {
                  for (
                    var a = arguments.length,
                      o = new Array(a > 1 ? a - 1 : 0),
                      d = 1;
                    d < a;
                    d++
                  )
                    o[d - 1] = arguments[d];
                  e.run((e) => {
                    var n = t.apply(i, o);
                    if (Object(r['f'])(n)) return n;
                    e();
                  }),
                    e.run((e) => {
                      var t = n.apply(i, o);
                      if (Object(r['f'])(t)) return t;
                      e();
                    });
                },
          () => {},
        );
      }
    },
    '4jWV': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var i = n('errf');
      class r {
        constructor() {
          (this.modalStack = void 0),
            (this.modalLock = !1),
            (this.addQueue = (e) => {
              if (this.modalLock) return this.modalStack.push(e), !0;
            }),
            (this.modalStackClearQueue = () => {
              this.modalLock = !1;
              var e = this.modalStack.shift();
              e && this.run(e);
            }),
            (this.run = (e) => {
              if (this.addQueue(e)) return !0;
              this.modalLock = !0;
              var t = e(this.modalStackClearQueue);
              return Object(i['f'])(t)
                ? t.then((e) => (this.modalStackClearQueue(), e))
                : void 0;
            }),
            (this.modalStack = []);
        }
      }
    },
    '5Oe4': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      }),
        n.d(t, 'b', function () {
          return l;
        });
      var i = n('WE0o');
      function r(e) {
        e.stopPropagation();
      }
      function a(e, t) {
        ('boolean' !== typeof e.cancelable || e.cancelable) &&
          e.preventDefault(),
          t && r(e);
      }
      function o() {
        var e;
        return (
          (e =
            'function' === typeof Event
              ? new Event('Event')
              : Object(i['a'])().createEvent('HTMLEvents')),
          e
        );
      }
      function d(e, t) {
        var n = o();
        n.initEvent(t, !0, !0), e.dispatchEvent(n);
      }
      function l(e) {
        d(e, 'click');
      }
    },
    A91U: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var i = n('P3Lt');
      function r(e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return (
          e && ((t && Object(i['a'])(e)) || (e.parentNode && e.parentNode))
        );
      }
    },
    AAgS: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var i = n('errf');
      function r(e, t, n, r) {
        return (
          e.addEventListener(t, n, r),
          () => e.removeEventListener(t, n, Object(i['e'])(r) ? r.capture : r)
        );
      }
    },
    AUa1: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      }),
        n.d(t, 'b', function () {
          return a;
        }),
        n.d(t, 'c', function () {
          return E;
        }),
        n.d(t, 'd', function () {
          return M;
        }),
        n.d(t, 'e', function () {
          return L;
        }),
        n.d(t, 'f', function () {
          return C;
        }),
        n.d(t, 'g', function () {
          return I;
        }),
        n.d(t, 'h', function () {
          return x;
        }),
        n.d(t, 'i', function () {
          return l;
        }),
        n.d(t, 'j', function () {
          return h;
        }),
        n.d(t, 'k', function () {
          return D;
        }),
        n.d(t, 'l', function () {
          return R;
        }),
        n.d(t, 'm', function () {
          return S;
        }),
        n.d(t, 'n', function () {
          return B;
        }),
        n.d(t, 'o', function () {
          return F;
        }),
        n.d(t, 'p', function () {
          return j;
        }),
        n.d(t, 'q', function () {
          return Z;
        }),
        n.d(t, 'r', function () {
          return ee;
        }),
        n.d(t, 's', function () {
          return te;
        }),
        n.d(t, 't', function () {
          return c;
        }),
        n.d(t, 'v', function () {
          return ne;
        }),
        n.d(t, 'w', function () {
          return re;
        }),
        n.d(t, 'x', function () {
          return ae;
        }),
        n.d(t, 'z', function () {
          return oe;
        }),
        n.d(t, 'A', function () {
          return s;
        }),
        n.d(t, 'B', function () {
          return X;
        }),
        n.d(t, 'C', function () {
          return de;
        }),
        n.d(t, 'y', function () {
          return pe;
        }),
        n.d(t, 'u', function () {
          return ce;
        }),
        n.d(t, 'D', function () {
          return ue;
        });
      var i = n('q1tI'),
        r = n('Bu8g');
      function a(e) {
        var t = i['useRef']();
        return (
          void 0 === t.current &&
            (t.current = { value: 'function' === typeof e ? e() : e }),
          t.current.value
        );
      }
      function o() {
        var e = a(() => new r['Async']());
        return i['useEffect'](() => () => e.dispose(), [e]), e;
      }
      var d = n('tJVT'),
        l =
          'undefined' !== typeof window ? i['useLayoutEffect'] : i['useEffect'],
        s = (e) => {
          var t = i['useRef'](e);
          l(
            () => () => {
              t.current();
            },
            [],
          );
        },
        p = () => {
          var e = i['useRef'](!1);
          return (
            s(() => {
              e.current = !0;
            }),
            e
          );
        };
      function c(e) {
        var t = p(),
          n = i['useState'](e),
          r = Object(d['a'])(n, 2),
          a = r[0],
          o = r[1],
          l = i['useRef'](),
          s = (e, n) => {
            t.current || ((l.current = n), o(e));
          };
        return (
          i['useEffect'](() => {
            var e;
            t.current ||
              (null === (e = l.current) || void 0 === e || e.call(l),
              (l.current = void 0));
          }, [a]),
          [a, s]
        );
      }
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = c(e),
          n = Object(d['a'])(t, 2),
          r = n[0],
          a = n[1],
          o = i['useCallback'](() => {
            a(!r);
          }, [r]),
          l = i['useCallback'](() => a(!0), []),
          s = i['useCallback'](() => a(!1), []);
        return [r, { toggle: o, setTrue: l, setFalse: s }];
      }
      function f(e, t) {
        return e
          ? ((n =
              'function' === typeof e ? e() : 'current' in e ? e.current : e),
            n)
          : t;
        var n;
      }
      var m = 'click';
      function y(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m,
          a = i['useRef'](e);
        (a.current = e),
          i['useEffect'](() => {
            var e = (e) => {
                var n = Array.isArray(t) ? t : [t];
                n.some((t) => {
                  var n,
                    i = f(t);
                  return (
                    !!i &&
                    ((n = e.composedPath
                      ? e.composedPath().indexOf(i) > -1
                      : !Object(r['getDocument'])(i).documentElement.contains(
                          e.target,
                        ) || i.contains(e.target)),
                    n)
                  );
                }) || a.current(e);
              },
              i = Object(r['on'])(Object(r['getDocument'])(), n, e, {
                passive: !0,
              });
            return () => {
              i();
            };
          }, [t, n]);
      }
      function E(e) {
        var t = e.defaultValue,
          n = e.value,
          r = i['useRef'](void 0 !== n),
          a = r.current,
          o = c(t),
          l = Object(d['a'])(o, 2),
          s = l[0],
          p = l[1],
          u = a ? n : s,
          f = (e) => {
            a || p(e);
          };
        return [u, f];
      }
      var v = n('Wgwc'),
        H = n.n(v);
      function h(e) {
        var t = i['useRef'](e);
        return (
          i['useEffect'](() => {
            t.current = e;
          }),
          i['useCallback'](function () {
            return (0, t.current)(...arguments);
          }, [])
        );
      }
      var g = (e) => {
          if (!e) return 0;
          var t = H()(e).valueOf() - new Date().getTime();
          return t < 0 ? 0 : t;
        },
        b = (e) => ({
          days: Math.floor(e / 864e5),
          hours: Math.floor(e / 36e5) % 24,
          minutes: Math.floor(e / 6e4) % 60,
          seconds: Math.floor(e / 1e3) % 60,
          milliseconds: Math.floor(e) % 1e3,
        });
      function M(e) {
        var t = e || {},
          n = t.targetDate,
          r = void 0 === n ? Date.now() : n,
          a = t.interval,
          o = void 0 === a ? 1e3 : a,
          l = t.onEnd,
          s = void 0 === l ? () => 0 : l,
          p = c(r),
          u = Object(d['a'])(p, 2),
          f = u[0],
          m = u[1],
          y = c(() => g(f)),
          E = Object(d['a'])(y, 2),
          v = E[0],
          H = E[1],
          M = h(() => {
            s();
          });
        i['useEffect'](() => {
          if (f) {
            H(g(f));
            var e = setInterval(() => {
              var t = g(f);
              H(t), 0 === t && (clearInterval(e), M());
            }, o);
            return () => clearInterval(e);
          }
          H(0);
        }, [f, o]);
        var L = i['useMemo'](() => b(v), [v]);
        return [v, m, L];
      }
      function L(e, t) {
        var n = Object(i['useRef'])();
        function a() {
          try {
            if (e) {
              var t = e.selectionStart,
                i = e.selectionEnd,
                r = e.value,
                a = r.substring(0, t || 0),
                o = r.substring(i || 0);
              n.current = {
                start: t,
                end: i,
                value: r,
                beforeTxt: a,
                afterTxt: o,
              };
            }
          } catch (d) {}
        }
        function o() {
          if (e && n.current && t)
            try {
              var i = e.value,
                a = n.current,
                o = a.beforeTxt,
                d = void 0 === o ? '' : o,
                l = a.afterTxt,
                s = void 0 === l ? '' : l,
                p = a.start,
                c = i.length;
              if (i.endsWith(s)) c = i.length - s.length;
              else if (i.startsWith(d)) c = d.length;
              else {
                var u = d[p - 1],
                  f = i.indexOf(u, p - 1);
                -1 !== f && (c = f + 1);
              }
              e.setSelectionRange(c, c);
            } catch (m) {
              Object(r['warn'])(
                'Something warning of cursor restore. Please fire issue about this: '.concat(
                  m.message,
                ),
              );
            }
        }
        return [a, o];
      }
      function T(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 166,
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = o(),
          a = h(e),
          d = i['useMemo'](() => r.debounce(a, t, n), []);
        return d;
      }
      function C(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 166,
          n = c(e),
          i = Object(d['a'])(n, 2),
          r = i[0],
          a = i[1],
          o = T(() => {
            a(e);
          }, t);
        return (
          l(() => {
            o();
          }, [e]),
          r
        );
      }
      function D(e, t, n, a) {
        var o = i['useRef'](n);
        (o.current = n),
          i['useEffect'](() => {
            var n = e && 'current' in e ? e.current : e;
            if (n) {
              var i = Object(r['on'])(n, t, (e) => o.current(e), a);
              return i;
            }
          }, [e, t, a]);
      }
      var w = () => Object(r['getDocument'])().visibilityState;
      function I() {
        var e = c(() => w()),
          t = Object(d['a'])(e, 2),
          n = t[0],
          i = t[1];
        return (
          D(Object(r['getDocument'])(), 'visibilitychange', () => {
            i(w());
          }),
          n
        );
      }
      function x(e) {
        var t = i['useRef'](-1),
          n = i['useRef']([]),
          r = h((e) => {
            (t.current += 1), n.current.splice(e, 0, t.current);
          }),
          a = c(
            () => (
              (e || []).forEach((e, t) => {
                r(t);
              }),
              e || []
            ),
          ),
          o = Object(d['a'])(a, 2),
          l = o[0],
          s = o[1],
          p = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            (n.current = []),
              (t.current = -1),
              s(
                () => (
                  (e || []).forEach((e, t) => {
                    r(t);
                  }),
                  e || []
                ),
              );
          },
          u = (e, t) => {
            s((n) => {
              var i = [...n];
              return i.splice(e, 0, t), r(e), i;
            });
          },
          f = (e) => n.current[e],
          m = (e) => n.current.findIndex((t) => t === e),
          y = (e, t) => {
            s((n) => {
              var i = [...n];
              return (
                t.forEach((t, n) => {
                  r(e + n);
                }),
                i.splice(e, 0, ...t),
                i
              );
            });
          },
          E = (e, t) => {
            s((n) => {
              var i = [...n];
              return (i[e] = t), i;
            });
          },
          v = (e) => {
            s((t) => {
              var i = [...t];
              i.splice(e, 1);
              try {
                n.current.splice(e, 1);
              } catch (r) {
                console.error(r);
              }
              return i;
            });
          },
          H = (e, t) => {
            e !== t &&
              s((i) => {
                var r = [...i],
                  a = r.filter((t, n) => n !== e);
                a.splice(t, 0, r[e]);
                try {
                  var o = n.current.filter((t, n) => n !== e);
                  o.splice(t, 0, n.current[e]), (n.current = o);
                } catch (d) {
                  console.error(d);
                }
                return a;
              });
          },
          g = (e) => {
            s((t) => (r(t.length), t.concat([e])));
          },
          b = () => {
            try {
              n.current = n.current.slice(0, n.current.length - 1);
            } catch (e) {
              console.error(e);
            }
            s((e) => e.slice(0, e.length - 1));
          },
          M = (e) => {
            s((t) => (r(0), [e].concat(t)));
          },
          L = (e) =>
            e
              .map((e, t) => ({ key: t, item: e }))
              .sort((e, t) => m(e.key) - m(t.key))
              .filter((e) => !!e.item)
              .map((e) => e.item),
          T = () => {
            try {
              n.current = n.current.slice(1, n.current.length);
            } catch (e) {
              console.error(e);
            }
            s((e) => e.slice(1, e.length));
          };
        return {
          list: l,
          insert: u,
          merge: y,
          replace: E,
          remove: v,
          getKey: f,
          getIndex: m,
          move: H,
          push: g,
          pop: b,
          unshift: M,
          shift: T,
          sortForm: L,
          resetList: p,
        };
      }
      var P = n('k1fw');
      n('uhBA');
      function R() {
        var e = c({}),
          t = Object(d['a'])(e, 2),
          n = t[1];
        return h(() => {
          Object(r['nextTick'])(() => n({}));
        });
      }
      function S() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return h((e) => {
          t.forEach((t) => {
            Object(r['setRef'])(t, e);
          });
        });
      }
      n('k7+O');
      function k() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'xxxxxxxxxx',
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : '0123456789abcdef',
          n = t.length;
        return e.replace(/x/g, () => t[Math.floor(Math.random() * n)]);
      }
      function B(e) {
        var t = i['useRef']((e || '') + k()),
          n = t.current;
        return n;
      }
      var A = n('rAM+');
      n('Wr5T');
      function O(e) {
        if (e) {
          var t =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth,
            n =
              window.innerHeight ||
              document.documentElement.clientHeight ||
              document.body.clientHeight,
            i = e.getBoundingClientRect();
          if (i) {
            var r = i.top,
              a = i.bottom,
              o = i.left,
              d = i.right;
            return a > 0 && r <= n && o <= t && d > 0;
          }
          return !1;
        }
      }
      function F(e) {
        var t = c(() => {
            var t = f(e);
            return O(t);
          }),
          n = Object(d['a'])(t, 2),
          r = n[0],
          a = n[1];
        return (
          i['useEffect'](() => {
            var t = f(e);
            if (!t) return () => {};
            var n = new IntersectionObserver((e) => {
              var t,
                n = Object(A['a'])(e);
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var i = t.value;
                  i.isIntersecting ? a(!0) : a(!1);
                }
              } catch (r) {
                n.e(r);
              } finally {
                n.f();
              }
            });
            return (
              n.observe(t),
              () => {
                n.disconnect();
              }
            );
          }, [e]),
          r
        );
      }
      function j(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = o(),
          a = n.immediate,
          d = i['useRef']();
        (d.current = e),
          i['useEffect'](() => {
            if (void 0 !== t && null !== t) {
              a && d.current && d.current();
              var e = r.setInterval(() => {
                d.current && d.current();
              }, t);
              return () => {
                r.clearInterval(e);
              };
            }
          }, [t]);
      }
      var K = !0,
        V = !1,
        U = null,
        W = {
          text: !0,
          search: !0,
          url: !0,
          tel: !0,
          email: !0,
          password: !0,
          number: !0,
          date: !0,
          month: !0,
          week: !0,
          time: !0,
          datetime: !0,
          'datetime-local': !0,
        };
      function G(e) {
        var t = e.type,
          n = e.tagName;
        return (
          !('INPUT' !== n || !W[t] || e.readOnly) ||
          ('TEXTAREA' === n && !e.readOnly) ||
          !!e.isContentEditable
        );
      }
      function z(e) {
        e.metaKey || e.altKey || e.ctrlKey || (K = !0);
      }
      function _() {
        K = !1;
      }
      function N() {
        'hidden' === this.visibilityState && V && (K = !0);
      }
      function q(e) {
        return [
          Object(r['on'])(e, 'keydown', z, !0),
          Object(r['on'])(e, 'mousedown', _, !0),
          Object(r['on'])(e, 'pointerdown', _, !0),
          Object(r['on'])(e, 'touchstart', _, !0),
          Object(r['on'])(e, 'visibilitychange', N, !0),
        ];
      }
      function Y(e) {
        var t = e.target;
        try {
          if (t) return t.matches(':focus-visible');
        } catch (n) {}
        return K || G(t);
      }
      var Z = () => {
        var e = i['useRef']([]),
          t = i['useCallback']((t) => {
            null != t && (e.current = q(Object(r['getDocument'])(t)));
          }, []);
        s(() => {
          e.current.forEach((e) => {
            e();
          });
        });
        var n = i['useRef'](!1);
        function a() {
          return (
            !!n.current &&
            ((V = !0),
            window.clearTimeout(U),
            (U = window.setTimeout(() => {
              V = !1;
            }, 100)),
            (n.current = !1),
            !0)
          );
        }
        function o(e) {
          return !!Y(e) && ((n.current = !0), !0);
        }
        return { isFocusVisibleRef: n, onFocus: o, onBlur: a, ref: t };
      };
      function X(e, t) {
        var n = i['useRef'](!1);
        l(() => {
          if (n.current) return e();
          n.current = !0;
        }, t);
      }
      function J(e) {
        return 'function' === typeof e;
      }
      function Q(e) {
        function t(t, n) {
          var i = e,
            r = c(() => s()),
            a = Object(d['a'])(r, 2),
            o = a[0],
            l = a[1];
          function s() {
            var e = i.getItem(t);
            if (e)
              try {
                return JSON.parse(e);
              } catch (r) {}
            return J(n) ? n() : n;
          }
          X(() => {
            l(s());
          }, [t]);
          var p = h((e) => {
            if ('undefined' === typeof e) i.removeItem(t), l(void 0);
            else if (J(e)) {
              var n = s(),
                r = e(n);
              i.setItem(t, JSON.stringify(r)), l(r);
            } else i.setItem(t, JSON.stringify(e)), l(e);
          });
          return [o, p];
        }
        return e
          ? t
          : function (e) {
              return [J(e) ? e() : e, () => {}];
            };
      }
      var $ = Q;
      $('object' === typeof window ? window.localStorage : null),
        n('9og8'),
        n('WmNS');
      function ee(e) {
        var t = c(!1),
          n = Object(d['a'])(t, 2),
          r = n[0],
          a = n[1],
          o = i['useRef'](e);
        return (
          (o.current = e),
          l(() => {
            var e;
            a(!0), null === (e = o.current) || void 0 === e || e.call(o);
          }, []),
          r
        );
      }
      function te(e) {
        var t = R(),
          n = {
            set: (e, n, i) => (e[n] != i && ((e[n] = i), setTimeout(t, 0)), !0),
          },
          r = i['useRef'](new Proxy(e, n));
        return r.current;
      }
      new Set();
      function ne(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = c(t),
          r = Object(d['a'])(n, 2),
          a = r[0],
          o = r[1],
          l = i['useMemo'](() => new Set(a), [e]),
          s = i['useMemo'](() => {
            var e = (e) => l.has(e),
              t = (e) => (l.add(e), o([...l])),
              n = (e) => (l.delete(e), o([...l])),
              i = (i) => {
                e(i) ? n(i) : t(i);
              };
            return { isSelected: e, select: t, unSelect: n, toggle: i };
          }, [l]),
          p = i['useMemo'](() => {
            var t = () => {
                e.forEach((e) => {
                  l.add(e);
                }),
                  o([...l]);
              },
              n = () => {
                e.forEach((e) => {
                  l.delete(e);
                }),
                  o([...l]);
              },
              i = e.every((e) => !l.has(e)),
              r = e.every((e) => l.has(e)) && !i,
              a = !i && !r,
              d = () => (r ? n() : t()),
              s = (e) => {
                n(),
                  e.forEach((e) => {
                    l.add(e);
                  });
              };
            return {
              setSelected: s,
              selectAll: t,
              unSelectAll: n,
              noneSelected: i,
              allSelected: r,
              partiallySelected: a,
              toggleAll: d,
            };
          }, [l, e, a]);
        return Object(P['a'])(Object(P['a'])({ selected: a }, s), p);
      }
      Q('object' === typeof window ? window.sessionStorage : null);
      var ie = n('bdgK');
      function re(e) {
        var t = c(() => {
            var t = f(e);
            return {
              width: (t || {}).clientWidth,
              height: (t || {}).clientHeight,
            };
          }),
          n = Object(d['a'])(t, 2),
          i = n[0],
          r = n[1];
        return (
          l(() => {
            var t = f(e);
            if (!t) return () => {};
            var n = new ie['a']((e) => {
              e.forEach((e) => {
                r({
                  width: e.target.clientWidth,
                  height: e.target.clientHeight,
                });
              });
            });
            return (
              n.observe(t),
              () => {
                n.disconnect();
              }
            );
          }, [e]),
          i
        );
      }
      function ae() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = c(e),
          r = Object(d['a'])(n, 2),
          a = r[0],
          o = r[1],
          l = i['useMemo'](() => {
            var n = void 0 === t ? !e : t,
              i = (t) => {
                o(void 0 === t ? (t) => (t === e ? n : e) : t);
              },
              r = () => o(e),
              a = () => o(n);
            return { toggle: i, setLeft: r, setRight: a };
          }, [e, t]);
        return [a, l];
      }
      function oe() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.disabled,
          n = void 0 !== t && t,
          o = e.type,
          l = void 0 === o ? 'focus' : o,
          s = e.focusElements,
          p = void 0 === s ? [] : s,
          c = i['useRef'](null),
          f = a(() => Object(r['getSupport'])()),
          m = u(!1),
          E = Object(d['a'])(m, 2),
          v = E[0],
          H = E[1],
          h = H.setTrue,
          g = H.setFalse,
          b = f.touch ? 'touchstart' : 'mousedown',
          M = f.touch ? 'touchmove' : '',
          L = f.touch ? 'touchend' : 'mouseup',
          T = f.touch ? 'touchend' : 'mouseleave',
          C = (e, t) => {
            D(c, e, t, { passive: !0 });
          };
        return (
          'hover' === l && (C('mouseenter', h), C('mouseleave', g)),
          'touch' === l && (C(b, h), C(M, g), C(L, g), C(T, g)),
          'focus' === l && (C(b, h), y(g, p.concat(c), b)),
          { targetRef: c, active: !n && v }
        );
      }
      n('nFlj');
      function de(e, t) {
        var n = i['useRef'](),
          r = re(n),
          a = c({ start: 0, end: 10 }),
          o = Object(d['a'])(a, 2),
          s = o[0],
          p = o[1],
          u = t.itemHeight,
          f = t.overscan,
          m = void 0 === f ? 5 : f;
        u || console.warn('please enter a valid itemHeight');
        var y = (t) => {
            if ('number' === typeof u) return Math.ceil(t / u);
            for (
              var n = s.start, i = void 0 === n ? 0 : n, r = 0, a = 0, o = i;
              o < e.length;
              o++
            ) {
              var d = u(o);
              if (((r += d), r >= t)) {
                a = o;
                break;
              }
            }
            return a - i;
          },
          E = (t) => {
            if ('number' === typeof u) return Math.floor(t / u) + 1;
            for (var n = 0, i = 0, r = 0; r < e.length; r++) {
              var a = u(r);
              if (((n += a), n >= t)) {
                i = r;
                break;
              }
            }
            return i + 1;
          },
          v = () => {
            var t = n.current;
            if (t) {
              var i = E(t.scrollTop),
                r = y(t.clientHeight),
                a = i - m,
                o = i + r + m;
              p({ start: a < 0 ? 0 : a, end: o > e.length ? e.length : o });
            }
          };
        l(() => {
          v();
        }, [r.width, r.height]);
        var H = i['useMemo'](
            () =>
              'number' === typeof u
                ? e.length * u
                : e.reduce((e, t, n) => e + u(n), 0),
            [e.length],
          ),
          h = (t) => {
            if ('number' === typeof u) {
              var n = t * u;
              return n;
            }
            var i = e.slice(0, t).reduce((e, t, n) => e + u(n), 0);
            return i;
          },
          g = (e) => {
            n.current && ((n.current.scrollTop = h(e)), v());
          },
          b = i['useMemo'](() => h(s.start), [s.start]);
        return {
          list: e
            .slice(s.start, s.end)
            .map((e, t) => ({ data: e, index: t + s.start })),
          scrollTo: g,
          containerProps: {
            ref: (e) => {
              n.current = e;
            },
            onScroll: (e) => {
              e.preventDefault(), v();
            },
            style: { overflowY: 'auto' },
          },
          wrapperProps: {
            style: { width: '100%', height: H - b, marginTop: b },
          },
        };
      }
      var le = 10;
      function se(e, t) {
        return e > t && e > le
          ? 'horizontal'
          : t > e && t > le
          ? 'vertical'
          : void 0;
      }
      function pe() {
        var e = i['useRef'](0),
          t = i['useRef'](0),
          n = i['useRef'](0),
          r = i['useRef'](0),
          a = i['useRef'](0),
          o = i['useRef'](0),
          d = i['useRef'](),
          l = () => 'vertical' === d.current,
          s = () => 'horizontal' === d.current,
          p = () => {
            (n.current = 0),
              (r.current = 0),
              (a.current = 0),
              (o.current = 0),
              (d.current = void 0);
          },
          c = (n) => {
            p(),
              (e.current = n.touches[0].clientX),
              (t.current = n.touches[0].clientY);
          },
          u = (i) => {
            var l = i.touches[0];
            (n.current = l.clientX < 0 ? 0 : l.clientX - e.current),
              (r.current = l.clientY - t.current),
              (a.current = Math.abs(n.current)),
              (o.current = Math.abs(r.current)),
              d.current || (d.current = se(a.current, o.current));
          };
        return {
          move: u,
          start: c,
          reset: p,
          startX: e,
          startY: t,
          deltaX: n,
          deltaY: r,
          offsetX: a,
          offsetY: o,
          direction: d,
          isVertical: l,
          isHorizontal: s,
        };
      }
      function ce(e, t) {
        var n = i['useRef']();
        return (
          ee(() => {
            if (e.current) {
              var i =
                null !== t && void 0 !== t ? t : Object(r['getWindow'])(t);
              n.current = Object(r['getScrollParent'])(e.current, i);
            }
          }),
          n
        );
      }
      function ue() {
        var e = Object(r['getWindow'])(),
          t = c({ width: e.innerWidth || 0, height: e.innerHeight || 0 }),
          n = Object(d['a'])(t, 2),
          i = n[0],
          a = n[1],
          o = h(() => {
            Object(r['nextTick'])(() => {
              a({ width: e.innerWidth, height: e.innerHeight });
            });
          });
        return D(e, 'resize', o), D(e, 'orientationchange', o), i;
      }
    },
    BF2X: function (e, t, n) {
      'use strict';
      n('UjDP');
    },
    Bu8g: function (e, t, n) {
      'use strict';
      var i = n('aUDy');
      n.d(t, 'Async', function () {
        return i['a'];
      });
      n('JRFm'), n('0D7Y');
      var r = n('W7Nk');
      n.o(r, 'KeyCodes') &&
        n.d(t, 'KeyCodes', function () {
          return r['KeyCodes'];
        }),
        n.o(r, 'allowScrollOnElement') &&
          n.d(t, 'allowScrollOnElement', function () {
            return r['allowScrollOnElement'];
          }),
        n.o(r, 'capitalize') &&
          n.d(t, 'capitalize', function () {
            return r['capitalize'];
          }),
        n.o(r, 'clamp') &&
          n.d(t, 'clamp', function () {
            return r['clamp'];
          }),
        n.o(r, 'composeClasses') &&
          n.d(t, 'composeClasses', function () {
            return r['composeClasses'];
          }),
        n.o(r, 'createArray') &&
          n.d(t, 'createArray', function () {
            return r['createArray'];
          }),
        n.o(r, 'createChainedFunction') &&
          n.d(t, 'createChainedFunction', function () {
            return r['createChainedFunction'];
          }),
        n.o(r, 'css') &&
          n.d(t, 'css', function () {
            return r['css'];
          }),
        n.o(r, 'debounce') &&
          n.d(t, 'debounce', function () {
            return r['debounce'];
          }),
        n.o(r, 'deepClone') &&
          n.d(t, 'deepClone', function () {
            return r['deepClone'];
          }),
        n.o(r, 'disableBodyScroll') &&
          n.d(t, 'disableBodyScroll', function () {
            return r['disableBodyScroll'];
          }),
        n.o(r, 'elementContains') &&
          n.d(t, 'elementContains', function () {
            return r['elementContains'];
          }),
        n.o(r, 'enableBodyScroll') &&
          n.d(t, 'enableBodyScroll', function () {
            return r['enableBodyScroll'];
          }),
        n.o(r, 'findAll') &&
          n.d(t, 'findAll', function () {
            return r['findAll'];
          }),
        n.o(r, 'findScrollableParent') &&
          n.d(t, 'findScrollableParent', function () {
            return r['findScrollableParent'];
          }),
        n.o(r, 'forwardRef') &&
          n.d(t, 'forwardRef', function () {
            return r['forwardRef'];
          }),
        n.o(r, 'generateUtilityClass') &&
          n.d(t, 'generateUtilityClass', function () {
            return r['generateUtilityClass'];
          }),
        n.o(r, 'generateUtilityClasses') &&
          n.d(t, 'generateUtilityClasses', function () {
            return r['generateUtilityClasses'];
          }),
        n.o(r, 'generateUtilityStyles') &&
          n.d(t, 'generateUtilityStyles', function () {
            return r['generateUtilityStyles'];
          }),
        n.o(r, 'getDevice') &&
          n.d(t, 'getDevice', function () {
            return r['getDevice'];
          }),
        n.o(r, 'getDocument') &&
          n.d(t, 'getDocument', function () {
            return r['getDocument'];
          }),
        n.o(r, 'getElementIndexPath') &&
          n.d(t, 'getElementIndexPath', function () {
            return r['getElementIndexPath'];
          }),
        n.o(r, 'getFocusableByIndexPath') &&
          n.d(t, 'getFocusableByIndexPath', function () {
            return r['getFocusableByIndexPath'];
          }),
        n.o(r, 'getNextElement') &&
          n.d(t, 'getNextElement', function () {
            return r['getNextElement'];
          }),
        n.o(r, 'getParent') &&
          n.d(t, 'getParent', function () {
            return r['getParent'];
          }),
        n.o(r, 'getPreviousElement') &&
          n.d(t, 'getPreviousElement', function () {
            return r['getPreviousElement'];
          }),
        n.o(r, 'getRect') &&
          n.d(t, 'getRect', function () {
            return r['getRect'];
          }),
        n.o(r, 'getScrollParent') &&
          n.d(t, 'getScrollParent', function () {
            return r['getScrollParent'];
          }),
        n.o(r, 'getScrollTop') &&
          n.d(t, 'getScrollTop', function () {
            return r['getScrollTop'];
          }),
        n.o(r, 'getScrollbarWidth') &&
          n.d(t, 'getScrollbarWidth', function () {
            return r['getScrollbarWidth'];
          }),
        n.o(r, 'getSupport') &&
          n.d(t, 'getSupport', function () {
            return r['getSupport'];
          }),
        n.o(r, 'getWindow') &&
          n.d(t, 'getWindow', function () {
            return r['getWindow'];
          }),
        n.o(r, 'globalClasses') &&
          n.d(t, 'globalClasses', function () {
            return r['globalClasses'];
          }),
        n.o(r, 'hoistStatics') &&
          n.d(t, 'hoistStatics', function () {
            return r['hoistStatics'];
          }),
        n.o(r, 'isDate') &&
          n.d(t, 'isDate', function () {
            return r['isDate'];
          }),
        n.o(r, 'isElementFocusSubZone') &&
          n.d(t, 'isElementFocusSubZone', function () {
            return r['isElementFocusSubZone'];
          }),
        n.o(r, 'isElementFocusZone') &&
          n.d(t, 'isElementFocusZone', function () {
            return r['isElementFocusZone'];
          }),
        n.o(r, 'isElementTabbable') &&
          n.d(t, 'isElementTabbable', function () {
            return r['isElementTabbable'];
          }),
        n.o(r, 'isHidden') &&
          n.d(t, 'isHidden', function () {
            return r['isHidden'];
          }),
        n.o(r, 'isObject') &&
          n.d(t, 'isObject', function () {
            return r['isObject'];
          }),
        n.o(r, 'isPromise') &&
          n.d(t, 'isPromise', function () {
            return r['isPromise'];
          }),
        n.o(r, 'mergedRef') &&
          n.d(t, 'mergedRef', function () {
            return r['mergedRef'];
          }),
        n.o(r, 'nextTick') &&
          n.d(t, 'nextTick', function () {
            return r['nextTick'];
          }),
        n.o(r, 'noop') &&
          n.d(t, 'noop', function () {
            return r['noop'];
          }),
        n.o(r, 'on') &&
          n.d(t, 'on', function () {
            return r['on'];
          }),
        n.o(r, 'padZero') &&
          n.d(t, 'padZero', function () {
            return r['padZero'];
          }),
        n.o(r, 'portalContainsElement') &&
          n.d(t, 'portalContainsElement', function () {
            return r['portalContainsElement'];
          }),
        n.o(r, 'preventDefault') &&
          n.d(t, 'preventDefault', function () {
            return r['preventDefault'];
          }),
        n.o(r, 'raiseClick') &&
          n.d(t, 'raiseClick', function () {
            return r['raiseClick'];
          }),
        n.o(r, 'setRef') &&
          n.d(t, 'setRef', function () {
            return r['setRef'];
          }),
        n.o(r, 'setScrollTop') &&
          n.d(t, 'setScrollTop', function () {
            return r['setScrollTop'];
          }),
        n.o(r, 'shouldWrapFocus') &&
          n.d(t, 'shouldWrapFocus', function () {
            return r['shouldWrapFocus'];
          }),
        n.o(r, 'unitToPx') &&
          n.d(t, 'unitToPx', function () {
            return r['unitToPx'];
          }),
        n.o(r, 'upperFirst') &&
          n.d(t, 'upperFirst', function () {
            return r['upperFirst'];
          }),
        n.o(r, 'warn') &&
          n.d(t, 'warn', function () {
            return r['warn'];
          });
      var a = n('lGtB');
      n.d(t, 'KeyCodes', function () {
        return a['a'];
      });
      n('pscb'), n('4jWV'), n('073t');
      var o = n('mD+u');
      n.d(t, 'createArray', function () {
        return o['a'];
      }),
        n.d(t, 'findAll', function () {
          return o['b'];
        });
      n('yuOn');
      var d = n('hcQm');
      n.d(t, 'composeClasses', function () {
        return d['a'];
      }),
        n.d(t, 'generateUtilityClass', function () {
          return d['b'];
        }),
        n.d(t, 'generateUtilityClasses', function () {
          return d['c'];
        }),
        n.d(t, 'generateUtilityStyles', function () {
          return d['d'];
        }),
        n.d(t, 'globalClasses', function () {
          return d['e'];
        });
      n('s35m');
      var l = n('4ce4');
      n.d(t, 'createChainedFunction', function () {
        return l['a'];
      });
      var s = n('PQHU');
      n.d(t, 'mergedRef', function () {
        return s['a'];
      }),
        n.d(t, 'setRef', function () {
          return s['b'];
        });
      n('Dvvy');
      var p = n('rQGm');
      n.d(t, 'css', function () {
        return p['a'];
      });
      var c = n('/3eQ');
      n.d(t, 'debounce', function () {
        return c['a'];
      });
      var u = n('K2Yx');
      n.d(t, 'getDevice', function () {
        return u['a'];
      }),
        n.d(t, 'getSupport', function () {
          return u['b'];
        });
      var f = n('Pn2d');
      n.o(f, 'allowScrollOnElement') &&
        n.d(t, 'allowScrollOnElement', function () {
          return f['allowScrollOnElement'];
        }),
        n.o(f, 'capitalize') &&
          n.d(t, 'capitalize', function () {
            return f['capitalize'];
          }),
        n.o(f, 'clamp') &&
          n.d(t, 'clamp', function () {
            return f['clamp'];
          }),
        n.o(f, 'deepClone') &&
          n.d(t, 'deepClone', function () {
            return f['deepClone'];
          }),
        n.o(f, 'disableBodyScroll') &&
          n.d(t, 'disableBodyScroll', function () {
            return f['disableBodyScroll'];
          }),
        n.o(f, 'elementContains') &&
          n.d(t, 'elementContains', function () {
            return f['elementContains'];
          }),
        n.o(f, 'enableBodyScroll') &&
          n.d(t, 'enableBodyScroll', function () {
            return f['enableBodyScroll'];
          }),
        n.o(f, 'findScrollableParent') &&
          n.d(t, 'findScrollableParent', function () {
            return f['findScrollableParent'];
          }),
        n.o(f, 'forwardRef') &&
          n.d(t, 'forwardRef', function () {
            return f['forwardRef'];
          }),
        n.o(f, 'getDocument') &&
          n.d(t, 'getDocument', function () {
            return f['getDocument'];
          }),
        n.o(f, 'getElementIndexPath') &&
          n.d(t, 'getElementIndexPath', function () {
            return f['getElementIndexPath'];
          }),
        n.o(f, 'getFocusableByIndexPath') &&
          n.d(t, 'getFocusableByIndexPath', function () {
            return f['getFocusableByIndexPath'];
          }),
        n.o(f, 'getNextElement') &&
          n.d(t, 'getNextElement', function () {
            return f['getNextElement'];
          }),
        n.o(f, 'getParent') &&
          n.d(t, 'getParent', function () {
            return f['getParent'];
          }),
        n.o(f, 'getPreviousElement') &&
          n.d(t, 'getPreviousElement', function () {
            return f['getPreviousElement'];
          }),
        n.o(f, 'getRect') &&
          n.d(t, 'getRect', function () {
            return f['getRect'];
          }),
        n.o(f, 'getScrollParent') &&
          n.d(t, 'getScrollParent', function () {
            return f['getScrollParent'];
          }),
        n.o(f, 'getScrollTop') &&
          n.d(t, 'getScrollTop', function () {
            return f['getScrollTop'];
          }),
        n.o(f, 'getScrollbarWidth') &&
          n.d(t, 'getScrollbarWidth', function () {
            return f['getScrollbarWidth'];
          }),
        n.o(f, 'getWindow') &&
          n.d(t, 'getWindow', function () {
            return f['getWindow'];
          }),
        n.o(f, 'hoistStatics') &&
          n.d(t, 'hoistStatics', function () {
            return f['hoistStatics'];
          }),
        n.o(f, 'isDate') &&
          n.d(t, 'isDate', function () {
            return f['isDate'];
          }),
        n.o(f, 'isElementFocusSubZone') &&
          n.d(t, 'isElementFocusSubZone', function () {
            return f['isElementFocusSubZone'];
          }),
        n.o(f, 'isElementFocusZone') &&
          n.d(t, 'isElementFocusZone', function () {
            return f['isElementFocusZone'];
          }),
        n.o(f, 'isElementTabbable') &&
          n.d(t, 'isElementTabbable', function () {
            return f['isElementTabbable'];
          }),
        n.o(f, 'isHidden') &&
          n.d(t, 'isHidden', function () {
            return f['isHidden'];
          }),
        n.o(f, 'isObject') &&
          n.d(t, 'isObject', function () {
            return f['isObject'];
          }),
        n.o(f, 'isPromise') &&
          n.d(t, 'isPromise', function () {
            return f['isPromise'];
          }),
        n.o(f, 'nextTick') &&
          n.d(t, 'nextTick', function () {
            return f['nextTick'];
          }),
        n.o(f, 'noop') &&
          n.d(t, 'noop', function () {
            return f['noop'];
          }),
        n.o(f, 'on') &&
          n.d(t, 'on', function () {
            return f['on'];
          }),
        n.o(f, 'padZero') &&
          n.d(t, 'padZero', function () {
            return f['padZero'];
          }),
        n.o(f, 'portalContainsElement') &&
          n.d(t, 'portalContainsElement', function () {
            return f['portalContainsElement'];
          }),
        n.o(f, 'preventDefault') &&
          n.d(t, 'preventDefault', function () {
            return f['preventDefault'];
          }),
        n.o(f, 'raiseClick') &&
          n.d(t, 'raiseClick', function () {
            return f['raiseClick'];
          }),
        n.o(f, 'setScrollTop') &&
          n.d(t, 'setScrollTop', function () {
            return f['setScrollTop'];
          }),
        n.o(f, 'shouldWrapFocus') &&
          n.d(t, 'shouldWrapFocus', function () {
            return f['shouldWrapFocus'];
          }),
        n.o(f, 'unitToPx') &&
          n.d(t, 'unitToPx', function () {
            return f['unitToPx'];
          }),
        n.o(f, 'upperFirst') &&
          n.d(t, 'upperFirst', function () {
            return f['upperFirst'];
          }),
        n.o(f, 'warn') &&
          n.d(t, 'warn', function () {
            return f['warn'];
          });
      var m = n('ChYo');
      n.d(t, 'getElementIndexPath', function () {
        return m['a'];
      }),
        n.d(t, 'getFocusableByIndexPath', function () {
          return m['b'];
        }),
        n.d(t, 'getNextElement', function () {
          return m['c'];
        }),
        n.d(t, 'getPreviousElement', function () {
          return m['d'];
        }),
        n.d(t, 'isElementFocusSubZone', function () {
          return m['e'];
        }),
        n.d(t, 'isElementFocusZone', function () {
          return m['f'];
        }),
        n.d(t, 'isElementTabbable', function () {
          return m['g'];
        }),
        n.d(t, 'shouldWrapFocus', function () {
          return m['h'];
        });
      var y = n('loQL');
      n.d(t, 'forwardRef', function () {
        return y['a'];
      });
      n('Nht4');
      var E = n('gcMD');
      n.d(t, 'hoistStatics', function () {
        return E['a'];
      });
      n('QfVf'), n('cL9e'), n('XtT8'), n('E+oR');
      var v = n('H4hf');
      n.d(t, 'noop', function () {
        return v['a'];
      });
      var H = n('ygrP');
      n.d(t, 'clamp', function () {
        return H['a'];
      });
      var h = n('ozbf');
      n.d(t, 'deepClone', function () {
        return h['a'];
      });
      n('svPo');
      var g = n('kb9T');
      n.d(t, 'allowScrollOnElement', function () {
        return g['a'];
      }),
        n.d(t, 'disableBodyScroll', function () {
          return g['b'];
        }),
        n.d(t, 'enableBodyScroll', function () {
          return g['c'];
        }),
        n.d(t, 'findScrollableParent', function () {
          return g['d'];
        }),
        n.d(t, 'getScrollTop', function () {
          return g['e'];
        }),
        n.d(t, 'getScrollbarWidth', function () {
          return g['f'];
        }),
        n.d(t, 'setScrollTop', function () {
          return g['g'];
        });
      var b = n('R0Fw');
      n.d(t, 'capitalize', function () {
        return b['b'];
      }),
        n.d(t, 'padZero', function () {
          return b['c'];
        }),
        n.d(t, 'upperFirst', function () {
          return b['d'];
        });
      var M = n('rAVa');
      n.d(t, 'isHidden', function () {
        return M['a'];
      });
      n('SWSs');
      var L = n('aj3v');
      n.d(t, 'unitToPx', function () {
        return L['a'];
      });
      var T = n('errf');
      n.d(t, 'isDate', function () {
        return T['a'];
      }),
        n.d(t, 'isObject', function () {
          return T['e'];
        }),
        n.d(t, 'isPromise', function () {
          return T['f'];
        });
      var C = n('uK5r');
      n.d(t, 'warn', function () {
        return C['a'];
      });
      n('yYTQ');
    },
    ChYo: function (e, t, n) {
      'use strict';
      n.d(t, 'd', function () {
        return s;
      }),
        n.d(t, 'c', function () {
          return p;
        }),
        n.d(t, 'g', function () {
          return u;
        }),
        n.d(t, 'f', function () {
          return f;
        }),
        n.d(t, 'e', function () {
          return m;
        }),
        n.d(t, 'h', function () {
          return y;
        }),
        n.d(t, 'b', function () {
          return E;
        }),
        n.d(t, 'a', function () {
          return v;
        });
      var i = n('rAM+'),
        r = n('Pn2d'),
        a = 'data-is-focusable',
        o = 'data-is-visible',
        d = 'data-focuszone-id',
        l = 'data-is-sub-focuszone';
      function s(e, t, n, i, r, a, o, d) {
        if (!t || (!o && t === e)) return null;
        var l = c(t);
        if (r && l && (a || (!f(t) && !m(t)))) {
          var p = s(e, t.lastElementChild, !0, !0, !0, a, o, d);
          if (p) {
            if ((d && u(p, !0)) || !d) return p;
            var y = s(e, p.previousElementSibling, !0, !0, !0, a, o, d);
            if (y) return y;
            var E = p.parentElement;
            while (E && E !== t) {
              var v = s(e, E.previousElementSibling, !0, !0, !0, a, o, d);
              if (v) return v;
              E = E.parentElement;
            }
          }
        }
        if (n && l && u(t, d)) return t;
        var H = s(e, t.previousElementSibling, !0, !0, !0, a, o, d);
        return H || (i ? null : s(e, t.parentElement, !0, !1, !1, a, o, d));
      }
      function p(e, t, n, i, r, a, o, d) {
        if (!t || (t === e && r && !o)) return null;
        var l = c(t);
        if (n && l && u(t, d)) return t;
        if (!r && l && (a || (!f(t) && !m(t)))) {
          var s = p(e, t.firstElementChild, !0, !0, !1, a, o, d);
          if (s) return s;
        }
        if (t === e) return null;
        var y = p(e, t.nextElementSibling, !0, !0, !1, a, o, d);
        return y || (i ? null : p(e, t.parentElement, !1, !1, !0, a, o, d));
      }
      function c(e) {
        if (!e || !e.getAttribute) return !1;
        var t = e.getAttribute(o);
        return null !== t && void 0 !== t
          ? 'true' === t
          : 0 !== e.offsetHeight ||
              null !== e.offsetParent ||
              !0 === e.isVisible;
      }
      function u(e, t) {
        if (!e || e.disabled) return !1;
        var n = 0,
          i = null;
        e &&
          e.getAttribute &&
          ((i = e.getAttribute('tabIndex')), i && (n = parseInt(i, 10)));
        var r = e.getAttribute ? e.getAttribute(a) : null,
          o = null !== i && n >= 0,
          d =
            !!e &&
            'false' !== r &&
            ('A' === e.tagName ||
              'BUTTON' === e.tagName ||
              'INPUT' === e.tagName ||
              'TEXTAREA' === e.tagName ||
              'SELECT' === e.tagName ||
              'true' === r ||
              o);
        return t ? -1 !== n && d : d;
      }
      function f(e) {
        return !!(e && e.getAttribute && e.getAttribute(d));
      }
      function m(e) {
        return !(!e || !e.getAttribute || 'true' !== e.getAttribute(l));
      }
      function y(e, t) {
        return 'true' !== Object(r['elementContainsAttribute'])(e, t);
      }
      function E(e, t) {
        var n,
          r = e,
          a = Object(i['a'])(t);
        try {
          for (a.s(); !(n = a.n()).done; ) {
            var o = n.value,
              d = r.children[Math.min(o, r.children.length - 1)];
            if (!d) break;
            r = d;
          }
        } catch (l) {
          a.e(l);
        } finally {
          a.f();
        }
        return (r = u(r) && c(r) ? r : p(e, r, !0) || s(e, r)), r;
      }
      function v(e, t) {
        var n = [];
        while (t && e && t !== e) {
          var i = Object(r['getParent'])(t, !0);
          if (null === i) return [];
          n.unshift(Array.prototype.indexOf.call(i.children, t)), (t = i);
        }
        return n;
      }
    },
    Dvvy: function (e, t, n) {
      'use strict';
      function i() {
        var e = [],
          t = () => {
            e.forEach((e) => {
              var t = e.value,
                n = e.el,
                i = e.property;
              t ? n.style.setProperty(i, t) : n.style.removeProperty(i);
            });
          };
        return { styles: e, restore: t };
      }
      n.d(t, 'a', function () {
        return i;
      });
    },
    'E+oR': function (e, t, n) {
      'use strict';
      n('rAM+'), n('WE0o');
    },
    G3EN: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var i = n('Vu9J'),
        r = /scroll|auto/i;
      function a(e) {
        var t = 1;
        return 'HTML' !== e.tagName && 'BODY' !== e.tagName && e.nodeType === t;
      }
      function o(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Object(i['a'])(e),
          n = e;
        while (n && n !== t && a(n)) {
          var o = window.getComputedStyle(n),
            d = o.overflowY;
          if (r.test(d)) return n;
          n = n.parentNode;
        }
        return t;
      }
    },
    H4hf: function (e, t, n) {
      'use strict';
      function i() {}
      n.d(t, 'a', function () {
        return i;
      });
    },
    JRFm: function (e, t, n) {
      'use strict';
      var i = n('q1tI');
      class r extends i['Component'] {
        constructor(e) {
          super(e),
            (this._timeoutId = void 0),
            (this.state = { isRendered: !1 });
        }
        componentDidMount() {
          var e = this.props.delay;
          this._timeoutId = window.setTimeout(() => {
            this.setState({ isRendered: !0 });
          }, e);
        }
        componentWillUnmount() {
          this._timeoutId && clearTimeout(this._timeoutId);
        }
        render() {
          return this.state.isRendered
            ? i['Children'].only(this.props.children)
            : null;
        }
      }
      r.defaultProps = { delay: 0 };
    },
    JjdP: function (e, t, n) {
      'use strict';
      n.r(t);
      var i = n('9og8'),
        r = n('WmNS'),
        a = n.n(r),
        o = n('rlch'),
        d =
          'import { ActivityIndicator, Space, Label } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <Space direction="vertical">\n      <Label colon>\u52a0\u8f7d\u7c7b\u578b</Label>\n      <Space>\n        <ActivityIndicator />\n        <ActivityIndicator type="spinner" />\n      </Space>\n    </Space>\n\n    <Space direction="vertical">\n      <Label colon>\u5c3a\u5bf8</Label>\n      <Space>\n        <ActivityIndicator iconSize="small" />\n        <ActivityIndicator iconSize="medium" />\n        <ActivityIndicator iconSize="large" />\n      </Space>\n      <Space>\n        <ActivityIndicator type="spinner" iconSize="small" />\n        <ActivityIndicator type="spinner" iconSize="medium" />\n        <ActivityIndicator type="spinner" iconSize="large" />\n      </Space>\n    </Space>\n\n    <Space direction="vertical">\n      <Label colon>\u989c\u8272</Label>\n      <Space>\n        <ActivityIndicator color="primary" />\n        <ActivityIndicator color="secondary" />\n        <ActivityIndicator color="success" />\n        <ActivityIndicator color="danger" />\n        <ActivityIndicator color="warning" />\n        <ActivityIndicator color="info" />\n        <ActivityIndicator color="light" />\n        <ActivityIndicator color="dark" />\n      </Space>\n      <Space>\n        <ActivityIndicator type="spinner" color="primary" />\n        <ActivityIndicator type="spinner" color="secondary" />\n        <ActivityIndicator type="spinner" color="success" />\n        <ActivityIndicator type="spinner" color="danger" />\n        <ActivityIndicator type="spinner" color="warning" />\n        <ActivityIndicator type="spinner" color="info" />\n        <ActivityIndicator type="spinner" color="light" />\n        <ActivityIndicator type="spinner" color="dark" />\n      </Space>\n    </Space>\n\n    <Space direction="vertical">\n      <Label colon>\u6587\u6848</Label>\n      <Space>\n        <ActivityIndicator text="\u52a0\u8f7d\u4e2d..." />\n        <ActivityIndicator type="spinner" text="\u52a0\u8f7d\u4e2d..." />\n      </Space>\n    </Space>\n\n    <Space direction="vertical">\n      <Label colon>\u5782\u76f4\u6587\u6848</Label>\n      <Space>\n        <ActivityIndicator text="\u52a0\u8f7d\u4e2d..." vertical />\n        <ActivityIndicator type="spinner" text="\u52a0\u8f7d\u4e2d..." vertical />\n      </Space>\n    </Space>\n  </Space>\n);',
        l =
          'import { BackTop, Button, Container, Page, Typography } from \'@wonder-ui/core\';\n\nexport default () => {\n  return (\n    <Page title="Back top">\n      <Container>\n        {Array(120)\n          .fill(\'\')\n          .map((_, index) => (\n            <Typography key={index}>{index}.text....</Typography>\n          ))}\n      </Container>\n\n      <BackTop>\n        <Button variant="contained">UP</Button>\n      </BackTop>\n    </Page>\n  );\n};',
        s =
          "import { ArrowUp } from '@wonder-ui/icons';\nimport { BackTop, IconButton, useTheme } from '@wonder-ui/core';\n\nexport default () => {\n  const theme = useTheme();\n  return (\n    <div>\n      \u6309\u94ae\u51fa\u73b0\u5728\u53f3\u4e0b\u89d2\n      <BackTop style={{ bottom: 30 }}>\n        <IconButton\n          style={{\n            backgroundColor: theme.palette.colors.blue.A200,\n            color: '#fff'\n          }}\n        >\n          <ArrowUp />\n        </IconButton>\n      </BackTop>\n    </div>\n  );\n};",
        p =
          'import { Button, Backdrop, CircularProgress, useTheme } from \'@wonder-ui/core\';\nimport { useToggle } from \'@wonder-ui/hooks\';\n\nexport default () => {\n  const theme = useTheme();\n  const [visible, { toggle }] = useToggle();\n\n  return (\n    <div>\n      <Button onClick={() => toggle()} variant="contained">\n        Show Backdrop\n      </Button>\n\n      <Backdrop\n        visible={visible}\n        onClick={() => toggle()}\n        style={{ zIndex: theme.zIndex.fixed }}\n      >\n        <CircularProgress color="light" />\n      </Backdrop>\n    </div>\n  );\n};',
        c =
          'import { Badge, Typography } from \'@wonder-ui/core\';\n\nexport default () => (\n  <div>\n    <Typography variant="h1" gutterBottom>\n      Example heading <Badge color="secondary" text="New" />\n    </Typography>\n    <Typography variant="h2" gutterBottom>\n      Example heading <Badge color="secondary" text="New" />\n    </Typography>\n    <Typography variant="h3" gutterBottom>\n      Example heading <Badge color="secondary" text="New" />\n    </Typography>\n    <Typography variant="h4" gutterBottom>\n      Example heading <Badge color="secondary" text="New" />\n    </Typography>\n    <Typography variant="h5" gutterBottom>\n      Example heading <Badge color="secondary" text="New" />\n    </Typography>\n    <Typography variant="h6">\n      Example heading <Badge color="secondary" text="New" />\n    </Typography>\n  </div>\n);',
        u =
          'import { Badge, Button } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Button variant="contained">\n    Notifications\n    <Badge style={{ marginLeft: 3 }} color="light" text="1" />\n  </Button>\n);',
        f =
          'import { Badge, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Badge color="primary" text="primary" />\n    <Badge color="secondary" text="secondary" />\n    <Badge color="success" text="success" />\n    <Badge color="danger" text="danger" />\n    <Badge color="warning" text="warning" />\n    <Badge color="info" text="info" />\n    <Badge color="light" text="light" />\n    <Badge color="dark" text="dark" />\n  </Space>\n);',
        m =
          'import { Badge, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Badge color="primary" text="primary" rounded />\n    <Badge color="secondary" text="secondary" rounded />\n    <Badge color="success" text="success" rounded />\n    <Badge color="danger" text="danger" rounded />\n    <Badge color="warning" text="warning" rounded />\n    <Badge color="info" text="info" rounded />\n    <Badge color="light" text="light" rounded />\n    <Badge color="dark" text="dark" rounded />\n  </Space>\n);',
        y =
          'import { Badge, Space, styled } from \'@wonder-ui/core\';\n\nconst Block = styled(\'div\')`\n  width: 42px;\n  height: 42px;\n  border-radius: 2px;\n  background: #eee;\n  display: inline-block;\n  vertical-align: middle;\n`;\n\nexport default () => (\n  <Space size="large">\n    <Badge color="danger">\n      <Block></Block>\n    </Badge>\n    <Badge color="danger" text="99+">\n      <Block></Block>\n    </Badge>\n  </Space>\n);',
        E =
          'import { Button, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Button color="primary" variant="contained">\n      Primary\n    </Button>\n    <Button color="secondary" variant="contained">\n      Secondary\n    </Button>\n    <Button color="success" variant="contained">\n      Success\n    </Button>\n    <Button color="danger" variant="contained">\n      Danger\n    </Button>\n    <Button color="warning" variant="contained">\n      Warning\n    </Button>\n    <Button color="info" variant="contained">\n      Info\n    </Button>\n    <Button color="light" variant="contained">\n      Light\n    </Button>\n    <Button color="dark" variant="contained">\n      Dark\n    </Button>\n  </Space>\n);',
        v =
          'import { Button, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Button variant="contained" href="#/components/button" target="_blank">\n      Link\n    </Button>\n    <Button\n      variant="contained"\n      component="input"\n      type="button"\n      value="Input"\n    ></Button>\n    <Button\n      variant="contained"\n      component="input"\n      type="submit"\n      value="Submit"\n    ></Button>\n    <Button\n      variant="contained"\n      component="input"\n      type="reset"\n      value="Reset"\n    ></Button>\n  </Space>\n);',
        H =
          'import { Button, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Button variant="outlined" color="primary">\n      Primary\n    </Button>\n    <Button variant="outlined" color="secondary">\n      Secondary\n    </Button>\n    <Button variant="outlined" color="success">\n      Success\n    </Button>\n    <Button variant="outlined" color="danger">\n      Danger\n    </Button>\n    <Button variant="outlined" color="warning">\n      Warning\n    </Button>\n    <Button variant="outlined" color="info">\n      Info\n    </Button>\n  </Space>\n);',
        h =
          'import { Button, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Button variant="text" color="primary">\n      Primary\n    </Button>\n    <Button variant="text" color="secondary">\n      Secondary\n    </Button>\n    <Button variant="text" color="success">\n      Success\n    </Button>\n    <Button variant="text" color="danger">\n      Danger\n    </Button>\n    <Button variant="text" color="warning">\n      Warning\n    </Button>\n    <Button variant="text" color="info">\n      Info\n    </Button>\n  </Space>\n);',
        g =
          'import { Button, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Button color="primary" variant="contained">\n      Default\n    </Button>\n    <Button color="primary" variant="contained" shape="square">\n      Square\n    </Button>\n    <Button color="primary" variant="contained" shape="round">\n      Round\n    </Button>\n  </Space>\n);',
        b =
          'import { Button, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <Space verticalAlign="start">\n      <Button variant="contained" size="large">\n        Large button\n      </Button>\n      <Button variant="contained" size="medium">\n        Medium button\n      </Button>\n      <Button variant="contained" size="small">\n        Small button\n      </Button>\n    </Space>\n    <Space verticalAlign="start">\n      <Button variant="contained" shape="round" size="large">\n        Large button\n      </Button>\n\n      <Button variant="contained" shape="round" size="medium">\n        Medium button\n      </Button>\n\n      <Button variant="contained" shape="round" size="small">\n        Small button\n      </Button>\n    </Space>\n  </Space>\n);',
        M =
          'import { Button, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <Button variant="contained" fullWidth>\n      Block button\n    </Button>\n    <Button variant="contained" fullWidth>\n      Block button\n    </Button>\n  </Space>\n);',
        L =
          'import { Button, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Button variant="contained" disabled>\n      Contained Button\n    </Button>\n    <Button variant="outlined" disabled>\n      Outlined Button\n    </Button>\n    <Button variant="text" disabled>\n      Text Button\n    </Button>\n  </Space>\n);',
        T =
          "import { Button, ButtonGroup } from '@wonder-ui/core';\n\nexport default () => (\n  <ButtonGroup ButtonProps={{ variant: 'contained' }}>\n    <Button>Button</Button>\n    <Button>Button</Button>\n    <Button>Button</Button>\n  </ButtonGroup>\n);",
        C =
          "import { Button, ButtonGroup } from '@wonder-ui/core';\n\nexport default () => (\n  <ButtonGroup ButtonProps={{ variant: 'outlined' }}>\n    <Button>Button</Button>\n    <Button>Button</Button>\n    <Button>Button</Button>\n  </ButtonGroup>\n);",
        D =
          'import { Button, ButtonGroup, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <ButtonGroup direction="vertical">\n      <Button>Button</Button>\n      <Button>Button</Button>\n      <Button>Button</Button>\n    </ButtonGroup>\n\n    <ButtonGroup direction="vertical" ButtonProps={{ variant: \'contained\' }}>\n      <Button>Button</Button>\n      <Button>Button</Button>\n      <Button>Button</Button>\n    </ButtonGroup>\n\n    <ButtonGroup direction="vertical" ButtonProps={{ variant: \'outlined\' }}>\n      <Button>Button</Button>\n      <Button>Button</Button>\n      <Button>Button</Button>\n    </ButtonGroup>\n  </Space>\n);',
        w =
          "import { Button, ButtonGroup, CheckableGroup } from '@wonder-ui/core';\n\nconst options = [\n  { label: 'Apple', value: 'Apple' },\n  { label: 'Pear', value: 'Pear' },\n  { label: 'Orange', value: 'Orange', disabled: false }\n];\n\nexport default () => (\n  <ButtonGroup ButtonProps={{ variant: 'outlined' }}>\n    <CheckableGroup\n      options={options}\n      defaultValue={['Apple']}\n      onRenderItem={({ emitOnChange, checked, data, key }) => (\n        <Button\n          key={key}\n          variant={checked ? 'contained' : 'outlined'}\n          onClick={emitOnChange}\n          disabled={data.disabled}\n        >\n          {data.label}\n        </Button>\n      )}\n    />\n  </ButtonGroup>\n);",
        I =
          "import { Button, ButtonGroup, CheckableGroup } from '@wonder-ui/core';\n\nconst options = [\n  { label: 'Apple', value: 'Apple' },\n  { label: 'Pear', value: 'Pear' },\n  { label: 'Orange', value: 'Orange', disabled: true }\n];\n\nexport default () => (\n  <ButtonGroup ButtonProps={{ variant: 'outlined' }}>\n    <CheckableGroup\n      exclusive //\u662f\u5426\u5355\u9009\n      options={options}\n      defaultValue=\"Apple\"\n      onRenderItem={({ emitOnChange, checked, data, key }) => (\n        <Button\n          key={key}\n          variant={checked ? 'contained' : 'outlined'}\n          onClick={emitOnChange}\n          disabled={data.disabled}\n        >\n          {data.label}\n        </Button>\n      )}\n    />\n  </ButtonGroup>\n);",
        x = "import {} from '@wonder-ui/core';\n\nexport default () => null;",
        P =
          'import { Checkbox, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <Checkbox defaultChecked color="primary">\n      Nickname is required\n    </Checkbox>\n    <Checkbox color="primary" disabled>\n      Nickname is required\n    </Checkbox>\n    <Checkbox defaultChecked color="primary" disabled>\n      Nickname is required\n    </Checkbox>\n  </Space>\n);',
        R =
          'import {\n  Container,\n  Checkbox,\n  List,\n  ListItem,\n  ListItemText\n} from \'@wonder-ui/core\';\nimport { useSelections } from \'@wonder-ui/hooks\';\n\nconst dataList = [1, 2, 3];\n\nexport default () => {\n  const { allSelected, isSelected, toggleAll, toggle, partiallySelected } =\n    useSelections(dataList);\n\n  return (\n    <Container size="sm">\n      <List component="div">\n        <ListItem\n          component="label"\n          media={\n            <Checkbox\n              circle\n              name="demo-checkbox"\n              indeterminate={partiallySelected}\n              checked={allSelected}\n              onChange={() => toggleAll()}\n            />\n          }\n        >\n          <ListItemText>Movies</ListItemText>\n        </ListItem>\n        <List component="div">\n          {dataList.map((item, index) => (\n            <ListItem\n              component="label"\n              key={index}\n              media={\n                <Checkbox\n                  circle\n                  name="demo-checkbox"\n                  value={`move ${item}`}\n                  checked={isSelected(item)}\n                  onChange={() => toggle(item)}\n                />\n              }\n            >\n              <ListItemText secondary="Click me!" primary={`Movie ${item}`} />\n            </ListItem>\n          ))}\n        </List>\n      </List>\n    </Container>\n  );\n};',
        S =
          'import {\n  Container,\n  Checkbox,\n  List,\n  ListItem,\n  ListItemText,\n  ListHeader\n} from \'@wonder-ui/core\';\n\nconst dataList = [1, 2, 3];\n\nexport default () => (\n  <Container size="sm">\n    <List component="div">\n      <ListHeader>\u6837\u5f0f1</ListHeader>\n      {dataList.map((item, index) => (\n        <ListItem\n          component="label"\n          key={index}\n          media={<Checkbox circle name="demo-checkbox1" />}\n        >\n          <ListItemText>Movie {item}</ListItemText>\n        </ListItem>\n      ))}\n    </List>\n    <List component="div">\n      <ListHeader>\u6837\u5f0f2</ListHeader>\n      {dataList.map((item, index) => (\n        <ListItem\n          component="label"\n          key={index}\n          extra={<Checkbox circle name="demo-checkbox2" />}\n        >\n          <ListItemText>Movie {item}</ListItemText>\n        </ListItem>\n      ))}\n    </List>\n\n    <List component="div">\n      <ListHeader>\u6837\u5f0f3</ListHeader>\n      {dataList.map((item, index) => (\n        <ListItem\n          component="label"\n          key={index}\n          media={<Checkbox name="demo-checkbox3" />}\n        >\n          <ListItemText>Movie {item}</ListItemText>\n        </ListItem>\n      ))}\n    </List>\n\n    <List component="div">\n      <ListHeader>\u6837\u5f0f4</ListHeader>\n      {dataList.map((item, index) => (\n        <ListItem\n          component="label"\n          key={index}\n          extra={<Checkbox name="demo-checkbox4" />}\n        >\n          <ListItemText>Movie {item}</ListItemText>\n        </ListItem>\n      ))}\n    </List>\n  </Container>\n);',
        k =
          "import {\n  Button,\n  Collapse,\n  Space,\n  Typography,\n  WhiteSpace\n} from '@wonder-ui/core';\nimport { useBoolean } from '@wonder-ui/hooks';\n\nexport default () => {\n  const [visible, { setTrue, setFalse, toggle }] = useBoolean(false);\n\n  return (\n    <div>\n      <Space>\n        <Button variant=\"contained\" onClick={() => setTrue()}>\n          Open\n        </Button>\n        <Button variant=\"contained\" onClick={() => setFalse()}>\n          Close\n        </Button>\n        <Button variant=\"contained\" onClick={() => toggle()}>\n          Toggle\n        </Button>\n      </Space>\n      <WhiteSpace />\n      <Collapse in={visible}>\n        <div\n          style={{\n            border: '1px solid #ccc',\n            padding: 16,\n            boxSizing: 'border-box'\n          }}\n        >\n          <Typography>\n            Some placeholder content for the collapse component. This panel is\n            hidden by default but revealed when the user activates the relevant\n            trigger.\n          </Typography>\n        </div>\n      </Collapse>\n    </div>\n  );\n};",
        B =
          "import {\n  Button,\n  Space,\n  Collapse,\n  Typography,\n  WhiteSpace\n} from '@wonder-ui/core';\nimport { useBoolean } from '@wonder-ui/hooks';\n\nexport default () => {\n  const [visible, { setTrue, setFalse, toggle }] = useBoolean(false);\n\n  return (\n    <div>\n      <Space>\n        <Button variant=\"contained\" onClick={() => setTrue()}>\n          Open\n        </Button>\n        <Button variant=\"contained\" onClick={() => setFalse()}>\n          Close\n        </Button>\n        <Button variant=\"contained\" onClick={() => toggle()}>\n          Toggle\n        </Button>\n      </Space>\n      <WhiteSpace />\n      <Collapse in={visible} collapsedSize={30}>\n        <Typography paragraph>default view text</Typography>\n        <div\n          style={{\n            border: '1px solid #ccc',\n            padding: 16,\n            boxSizing: 'border-box'\n          }}\n        >\n          <Typography>\n            Some placeholder content for the collapse component. This panel is\n            hidden by default but revealed when the user activates the relevant\n            trigger.\n          </Typography>\n        </div>\n      </Collapse>\n    </div>\n  );\n};",
        A =
          'import {\n  Button,\n  Space,\n  Collapse,\n  Typography,\n  WhiteSpace\n} from \'@wonder-ui/core\';\nimport { useBoolean } from \'@wonder-ui/hooks\';\n\nexport default () => {\n  const [visible, { setTrue, setFalse, toggle }] = useBoolean(false);\n\n  return (\n    <div>\n      <Space>\n        <Button variant="contained" onClick={() => setTrue()}>\n          Open\n        </Button>\n        <Button variant="contained" onClick={() => setFalse()}>\n          Close\n        </Button>\n        <Button variant="contained" onClick={() => toggle()}>\n          Toggle\n        </Button>\n      </Space>\n      <WhiteSpace />\n      <Collapse in={visible} direction="horizontal" timeout={500}>\n        <div\n          style={{\n            width: 300,\n            padding: 16,\n            boxSizing: \'border-box\'\n          }}\n        >\n          <Typography>\n            Some placeholder content for the collapse component. This panel is\n            hidden by default but revealed when the user activates the relevant\n            trigger.\n          </Typography>\n        </div>\n      </Collapse>\n    </div>\n  );\n};',
        O =
          'import { CountDown } from \'@wonder-ui/core\';\n\nexport default () => {\n  return (\n    <CountDown targetDate="2333-12-31 24:00:00">\n      {({ formattedRes }) => {\n        const { days, hours, minutes, seconds, milliseconds } = formattedRes;\n        return (\n          <p>\n            {days} \u5929 {hours} \u65f6 {minutes} \u5206 {seconds} \u79d2\n          </p>\n        );\n      }}\n    </CountDown>\n  );\n};',
        F =
          "import { Button, CountDown } from '@wonder-ui/core';\nimport * as React from 'react';\n\nexport default () => {\n  const [sended, setSendState] = React.useState(false);\n\n  return (\n    <CountDown>\n      {({ countdown, setTargetDate }) => (\n        <Button\n          variant=\"contained\"\n          disabled={countdown !== 0}\n          onClick={() => {\n            if (!sended) {\n              setSendState(true);\n            }\n\n            setTargetDate(Date.now() + 10 * 1000);\n          }}\n        >\n          {countdown === 0\n            ? sended\n              ? '\u91cd\u65b0\u83b7\u53d6\u9a8c\u8bc1\u7801'\n              : '\u83b7\u53d6\u9a8c\u8bc1\u7801'\n            : `${Math.round(countdown / 1000)}s`}\n        </Button>\n      )}\n    </CountDown>\n  );\n};",
        j =
          "import { DatePicker, withDialog } from '@wonder-ui/core';\nimport dayjs from 'dayjs';\n\nexport default withDialog(({ dialog }) => {\n  return (\n    <DatePicker\n      onConfirm={(value) => {\n        const dateString = dayjs(value).format('YYYY/MM/DD,HH:mm');\n        dialog.toast(dateString);\n      }}\n    />\n  );\n});",
        K =
          "import { DatePicker, withDialog } from '@wonder-ui/core';\nimport dayjs from 'dayjs';\n\nexport default withDialog(({ dialog }) => {\n  return (\n    <DatePicker\n      type=\"date\"\n      title=\"\u9009\u62e9\u5e74\u6708\u65e5\"\n      minDate={new Date(2020, 0, 1)}\n      maxDate={new Date(2025, 10, 1)}\n      currentDate={new Date()}\n      onConfirm={(value) => {\n        const dateString = dayjs(value).format('YYYY/MM/DD');\n        dialog.toast(dateString);\n      }}\n    />\n  );\n});",
        V =
          "import { TimePicker, TimePickerProps, withDialog } from '@wonder-ui/core';\nimport dayjs from 'dayjs';\n\nconst formatter: TimePickerProps['formatter'] = (type, value) => {\n  return type === 'hour' ? `${value}\u65f6` : `${value}\u5206`;\n};\n\nexport default withDialog(({ dialog }) => (\n  <TimePicker\n    formatter={formatter}\n    currentTime={dayjs().format('HH:mm')}\n    // onChange={(value) => dialog.toast(value)}\n    onConfirm={(value) => dialog.toast(value)}\n  />\n));",
        U =
          'import {\n  Button,\n  Container,\n  Dialog,\n  Page,\n  Space,\n  WhiteSpace\n} from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page title="Dialog">\n    <WhiteSpace />\n    <Container>\n      <Space>\n        <Dialog\n          title="\u6807\u9898"\n          text="\u5185\u5bb9, \u5185\u5bb9, \u5185\u5bb9..."\n          buttons={[\n            {\n              text: \'\u53d6\u6d88\'\n            },\n            {\n              text: \'\u597d\u7684\',\n              primary: true\n            }\n          ]}\n        >\n          <Button variant="contained">\u63d0\u793a\u6846(\u6587\u5b57)</Button>\n        </Dialog>\n        <Dialog\n          title="\u6807\u9898"\n          content={\n            <div>\n              <img\n                src="https://img.99bill.com/z/img/new-pos.png"\n                width={260}\n                height={260}\n                alt="img"\n              />\n            </div>\n          }\n          buttons={[\n            {\n              text: \'\u77e5\u9053\u5566!\',\n              primary: true\n            }\n          ]}\n        >\n          <Button variant="contained">\u63d0\u793a\u6846(\u56fe\u7247)</Button>\n        </Dialog>\n      </Space>\n    </Container>\n  </Page>\n);',
        W =
          "import { Button, Container, Dialog, Page, WhiteSpace } from '@wonder-ui/core';\n\nexport default () => (\n  <Page title=\"Dialog vertical buttons\">\n    <WhiteSpace />\n    <Container>\n      <Dialog\n        buttonsVertical\n        buttons={[\n          {\n            text: '\u6807\u4e3a\u672a\u8bfb',\n            onClick: () => {\n              console.log('\u6807\u4e3a\u672a\u8bfb');\n            }\n          },\n          {\n            text: '\u7f6e\u9876\u804a\u5929',\n            onClick: () => {\n              console.log('\u7f6e\u9876\u804a\u5929');\n            }\n          }\n        ]}\n      >\n        <Button variant=\"contained\">\u5782\u76f4\u6309\u94ae</Button>\n      </Dialog>\n    </Container>\n  </Page>\n);",
        G =
          "import {\n  Button,\n  Container,\n  Page,\n  Space,\n  WhiteSpace,\n  withDialog\n} from '@wonder-ui/core';\n\nexport default withDialog((props) => {\n  const { dialog } = props;\n  return (\n    <Page title=\"Dialogs\">\n      <WhiteSpace />\n      <Container>\n        <Space>\n          <Button\n            variant=\"contained\"\n            onClick={() =>\n              dialog.alert({ title: '\u63d0\u793a', text: '\u5185\u5bb9, \u5185\u5bb9, \u5185\u5bb9...' })\n            }\n          >\n            \u63d0\u793a\u6846\n          </Button>\n          <Button\n            variant=\"contained\"\n            onClick={() => dialog.alert({ text: '\u5185\u5bb9, \u5185\u5bb9, \u5185\u5bb9...' })}\n          >\n            \u63d0\u793a\u6846 (\u65e0\u6807\u9898)\n          </Button>\n          <Button\n            variant=\"contained\"\n            onClick={() =>\n              dialog.confirm({ title: '\u786e\u8ba4', text: '\u5185\u5bb9, \u5185\u5bb9, \u5185\u5bb9...' })\n            }\n          >\n            \u786e\u8ba4\u6846\n          </Button>\n          <Button\n            variant=\"contained\"\n            onClick={() =>\n              dialog.custom({\n                title: '\u64cd\u4f5c',\n                text: '\u8bf7\u9009\u62e9\u4e00\u9879\u64cd\u4f5c',\n                buttonsVertical: true,\n                buttons: [\n                  {\n                    children: '\u6807\u4e3a\u672a\u8bfb',\n                    onClick: () => {\n                      console.log('\u6807\u4e3a\u672a\u8bfb');\n                    }\n                  },\n                  {\n                    children: '\u7f6e\u9876\u804a\u5929',\n                    onClick: () => {\n                      console.log('\u7f6e\u9876\u804a\u5929');\n                    }\n                  },\n                  {\n                    children: '\u53d6\u6d88',\n                    onClick: () => {}\n                  }\n                ]\n              })\n            }\n          >\n            \u64cd\u4f5c\u6846\n          </Button>\n        </Space>\n      </Container>\n    </Page>\n  );\n});",
        z =
          "import {\n  Button,\n  Container,\n  Page,\n  WhiteSpace,\n  withDialog\n} from '@wonder-ui/core';\n\nexport default withDialog((props) => {\n  const { dialog } = props;\n\n  return (\n    <Page title=\"Dialog stack\">\n      <WhiteSpace />\n      <Container>\n        <Button\n          variant=\"contained\"\n          onClick={() => {\n            dialog.alert({ title: '\u6807\u9898', text: 'dialog 1' });\n            dialog.alert({ title: '\u6807\u9898', text: 'dialog 2' });\n            dialog.confirm({ title: '\u6807\u9898', text: '\u786e\u5b9a\u8fd9\u4e48\u5e72\u5417?' });\n            dialog.alert({ title: '\u6807\u9898', text: 'dialog 4' });\n            dialog.toast('\u961f\u5217\u7ed3\u675f');\n          }}\n        >\n          \u63d0\u793a\u6846\n        </Button>\n      </Container>\n    </Page>\n  );\n});",
        _ =
          'import { Page, Space, DialogContent, WhiteSpace } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page title="Dialog content">\n    <WhiteSpace />\n    <Space horizontalAlign="center">\n      <DialogContent\n        style={{ width: 220 }}\n        title="\u6807\u9898"\n        text="\u5185\u5bb9, \u5185\u5bb9, \u5185\u5bb9..."\n        buttons={[\n          {\n            text: \'\u53d6\u6d88\',\n            onClick: () => {}\n          },\n          {\n            text: \'\u597d\u7684\',\n            primary: true,\n            onClick: () => {}\n          }\n        ]}\n      />\n    </Space>\n  </Page>\n);',
        N =
          'import { Divider, Space, Typography } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n    <Divider />\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n    <Divider />\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n  </Space>\n);',
        q =
          'import { Divider, Space, Typography } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n    <Divider textAlign="center">Text</Divider>\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n    <Divider textAlign="left">Left Text</Divider>\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n    <Divider textAlign="right">Right Text</Divider>\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n  </Space>\n);',
        Y =
          "import { Typography, Divider } from '@wonder-ui/core';\n\nexport default () => (\n  <div style={{ display: 'flex' }}>\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n    <Divider direction=\"vertical\" flexItem>\n      VERTICAL\n    </Divider>\n    <Typography>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </Typography>\n  </div>\n);",
        Z =
          'import { Divider, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space split={<Divider direction="vertical" style={{ height: \'1em\' }} />}>\n    Text\n    <a href="#">Link</a>\n    <a href="#">Link</a>\n  </Space>\n);',
        X =
          "import {\n  Button,\n  Drawer,\n  DrawerProps,\n  Page,\n  Space,\n  Typography,\n  WhiteSpace\n} from '@wonder-ui/core';\nimport { useToggle } from '@wonder-ui/hooks';\n\ntype Anchor = DrawerProps['anchor'];\n\nexport default () => {\n  const [visible, { toggle: toggleVisible }] = useToggle(false);\n  const [anchor, { toggle }] = useToggle<Anchor>('left');\n\n  const open = (anchor: Anchor) => {\n    toggle(anchor);\n    toggleVisible();\n  };\n\n  return (\n    <Page title=\"Drawer\">\n      <WhiteSpace />\n      <Space>\n        <Button variant=\"contained\" onClick={() => open('left')}>\n          \u5de6\n        </Button>\n        <Button variant=\"contained\" onClick={() => open('right')}>\n          \u53f3\n        </Button>\n        <Button variant=\"contained\" onClick={() => open('top')}>\n          \u4e0a\n        </Button>\n        <Button variant=\"contained\" onClick={() => open('bottom')}>\n          \u4e0b\n        </Button>\n      </Space>\n\n      <Drawer anchor={anchor} visible={visible} onClose={() => toggleVisible()}>\n        <Page\n          title=\"Basic Drawer\"\n          style={{\n            position: 'relative',\n            ...(['left', 'right'].indexOf(anchor || '') !== -1\n              ? { width: 260, height: '100%' }\n              : { width: '100%', height: 200 })\n          }}\n          showCloseButton\n          onClose={() => toggleVisible()}\n        >\n          <div style={{ padding: '10px 16px' }}>\n            <Typography>\n              Some contents... <br />\n              Some contents... <br />\n              Some contents... <br />\n              Some contents... <br />\n              Some contents... <br />\n              Some contents... <br />\n              Some contents... <br />\n              Some contents... <br />\n              Some contents... <br />\n              Some contents... <br />\n            </Typography>\n          </div>\n        </Page>\n      </Drawer>\n    </Page>\n  );\n};",
        J =
          'import { DropdownMenu, DropdownMenuItem, Page, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page title="DropdownMenu">\n    <Space direction="vertical">\n      \u57fa\u672c\u4f7f\u7528\n      <DropdownMenu>\n        <DropdownMenuItem arrow overlay={<div>\u5168\u90e8\u5546\u54c1 ... </div>}>\n          \u5168\u90e8\u5546\u54c1\n        </DropdownMenuItem>\n        <DropdownMenuItem arrow overlay={<div>\u597d\u8bc4\u6392\u5e8f ...</div>}>\n          \u597d\u8bc4\u6392\u5e8f\n        </DropdownMenuItem>\n      </DropdownMenu>\n    </Space>\n  </Page>\n);',
        Q =
          'import {\n  Button,\n  Divider,\n  DropdownMenu,\n  DropdownMenuItem,\n  Page,\n  Radio,\n  List,\n  ListItem,\n  ListItemText,\n  Toggle\n} from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page title="With list">\n    <DropdownMenu>\n      <DropdownMenuItem\n        arrow\n        overlay={\n          <div>\n            <List component="div">\n              <ListItem\n                divider\n                component="label"\n                extra={<Radio name="DropdownMenu1" />}\n              >\n                <ListItemText>\u5168\u90e8\u5546\u54c1</ListItemText>\n              </ListItem>\n              <ListItem\n                divider\n                component="label"\n                extra={<Radio name="DropdownMenu1" />}\n              >\n                <ListItemText>\u65b0\u6b3e\u5546\u54c1</ListItemText>\n              </ListItem>\n              <ListItem\n                divider\n                component="label"\n                extra={<Radio name="DropdownMenu1" />}\n              >\n                <ListItemText>\u6d3b\u52a8\u5546\u54c1</ListItemText>\n              </ListItem>\n            </List>\n          </div>\n        }\n      >\n        \u5168\u90e8\u5546\u54c1\n      </DropdownMenuItem>\n      <DropdownMenuItem\n        arrow\n        overlay={({ onClose }) => (\n          <div>\n            <List>\n              <ListItem divider extra={<Toggle />}>\n                <ListItemText>\u5305\u90ae</ListItemText>\n              </ListItem>\n              <ListItem extra={<Toggle defaultChecked />}>\n                <ListItemText>\u56e2\u8d2d</ListItemText>\n              </ListItem>\n            </List>\n            <Divider />\n            <div style={{ padding: 16 }}>\n              <Button\n                variant="contained"\n                fullWidth\n                disableFocusRipple\n                onClick={onClose}\n              >\n                \u786e \u8ba4\n              </Button>\n            </div>\n          </div>\n        )}\n      >\n        \u597d\u8bc4\u6392\u5e8f\n      </DropdownMenuItem>\n    </DropdownMenu>\n  </Page>\n);',
        $ =
          'import {\n  Button,\n  Divider,\n  DropdownMenu,\n  DropdownMenuItem,\n  Page,\n  Radio,\n  List,\n  ListItem,\n  ListItemText,\n  Toggle\n} from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page title="Auto width">\n    <DropdownMenu widthAuto>\n      <DropdownMenuItem\n        arrow\n        overlay={\n          <div>\n            <List component="div">\n              <ListItem\n                divider\n                component="label"\n                extra={<Radio name="DropdownMenu1" />}\n              >\n                <ListItemText>\u5168\u90e8\u5546\u54c1</ListItemText>\n              </ListItem>\n              <ListItem\n                divider\n                component="label"\n                extra={<Radio name="DropdownMenu1" />}\n              >\n                <ListItemText>\u65b0\u6b3e\u5546\u54c1</ListItemText>\n              </ListItem>\n              <ListItem\n                divider\n                component="label"\n                extra={<Radio name="DropdownMenu1" />}\n              >\n                <ListItemText>\u6d3b\u52a8\u5546\u54c1</ListItemText>\n              </ListItem>\n            </List>\n          </div>\n        }\n      >\n        \u5168\u90e8\u5546\u54c1\n      </DropdownMenuItem>\n      <DropdownMenuItem\n        arrow\n        overlay={({ onClose }) => (\n          <div>\n            <List>\n              <ListItem divider extra={<Toggle />}>\n                <ListItemText>\u5305\u90ae</ListItemText>\n              </ListItem>\n              <ListItem extra={<Toggle defaultChecked />}>\n                <ListItemText>\u56e2\u8d2d</ListItemText>\n              </ListItem>\n            </List>\n            <Divider />\n            <div style={{ padding: 16 }}>\n              <Button\n                variant="contained"\n                fullWidth\n                disableFocusRipple\n                onClick={onClose}\n              >\n                \u786e \u8ba4\n              </Button>\n            </div>\n          </div>\n        )}\n      >\n        \u597d\u8bc4\u6392\u5e8f\n      </DropdownMenuItem>\n\n      <DropdownMenuItem>\u9500\u91cf</DropdownMenuItem>\n      <DropdownMenuItem>\u53e3\u7891</DropdownMenuItem>\n    </DropdownMenu>\n  </Page>\n);',
        ee =
          "import { Empty } from '@wonder-ui/core';\n\nexport default () => <Empty />;",
        te =
          'import { Button, Empty } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Empty\n    image={\n      <img\n        width="150"\n        src="https://img01.yzcdn.cn/vant/empty-image-search.png"\n      />\n    }\n    description="\u81ea\u5b9a\u4e49\u63cf\u8ff0"\n  >\n    <Button variant="contained">\u81ea\u5b9a\u4e49\u6309\u94ae</Button>\n  </Empty>\n);',
        ne =
          'import { Input, Space } from \'@wonder-ui/core\';\nimport * as React from \'react\';\n\nexport default () => {\n  const [value, setValue] = React.useState(\'123123\');\n\n  return (\n    <Space direction="vertical">\n      <Input\n        placeholder="Basic"\n        value={value}\n        onChange={(e) => {\n          setValue(e.target.value);\n        }}\n      />\n\n      <Input readOnly placeholder="Basic readOnly" />\n\n      <Input readOnly disabledActiveStyle placeholder="Basic readOnly" />\n\n      <Input\n        readOnly\n        disabledActiveStyle\n        borderless\n        placeholder="Basic readOnly"\n      />\n\n      <Input disabled placeholder="Basic disabled" />\n\n      <Input disabled borderless placeholder="Basic disabled" />\n    </Space>\n  );\n};',
        ie =
          'import { Input, Space } from \'@wonder-ui/core\';\n\nexport default () => {\n  return (\n    <Space direction="vertical">\n      <Input placeholder="Input with clear button" allowClear />\n      <Input\n        allowClear\n        placeholder="\u8bf7\u8f93\u5165"\n        prefix={<span>\uffe5</span>}\n        suffix={<span>RMB</span>}\n      />\n      <Input\n        placeholder="Textare with clear button"\n        allowClear\n        multiline\n        minRows={3}\n      />\n    </Space>\n  );\n};',
        re =
          'import { Input, Space, Tooltip, styled } from \'@wonder-ui/core\';\nimport { InfoCircle, Person } from \'@wonder-ui/icons\';\n\nconst InputExtra = styled(\'div\')`\n  background: rgb(243, 242, 241);\n  color: rgb(96, 94, 92);\n  display: flex;\n  align-items: center;\n  align-self: stretch;\n  padding: 0 8px;\n`;\n\nexport default () => {\n  return (\n    <Space direction="vertical">\n      <Input\n        placeholder="\u8bf7\u8f93\u5165"\n        prefix={<Person fontSize="inherit" color="secondary" />}\n        suffix={\n          <Tooltip arrow title="Tips tips tips">\n            <InfoCircle fontSize="inherit" color="secondary" />\n          </Tooltip>\n        }\n      />\n      <Input\n        placeholder="\u8bf7\u8f93\u5165"\n        prefix={<span>\uffe5</span>}\n        suffix={<span>RMB</span>}\n      />\n      <Input\n        placeholder="\u8bf7\u8f93\u5165\u7f51\u5740"\n        prefix={\n          <InputExtra style={{ marginLeft: -8 }}>\n            <span>http://</span>\n          </InputExtra>\n        }\n        suffix={\n          <InputExtra style={{ marginRight: -8 }}>\n            <span>.com</span>\n          </InputExtra>\n        }\n      />\n      <Input\n        readOnly\n        disabledActiveStyle\n        placeholder="\u4ec5\u663e\u793a\u6570\u503c"\n        prefix={<span>\uffe5</span>}\n        suffix={<span>RMB</span>}\n      />\n      <Input\n        disabled\n        placeholder="\u8bf7\u8f93\u5165"\n        prefix={<span>\uffe5</span>}\n        suffix={<span>RMB</span>}\n      />\n    </Space>\n  );\n};',
        ae =
          'import { Input } from \'@wonder-ui/core\';\n\nexport default () => {\n  return <Input placeholder="Basic" borderless />;\n};',
        oe =
          'import { Input } from \'@wonder-ui/core\';\n\nexport default () => {\n  return <Input placeholder="5\u4e2a\u5b57" maxLength={5} />;\n};',
        de =
          '/**\n * title: \u591a\u884c\u8f93\u5165\n * desc: \u9650\u5236\u8f93\u5165\u6846\u9ad8\u5ea6: `maxRows`, `minRows`\n */\nimport { Input, Space } from \'@wonder-ui/core\';\n\nexport default () => {\n  return (\n    <Space verticalAlign="start">\n      <Input\n        style={{ width: 300 }}\n        multiline\n        minRows={1}\n        maxRows={3}\n        placeholder="\u6587\u672c\u57df"\n      />\n      <Input\n        style={{ width: 300 }}\n        multiline\n        maxRows={3}\n        placeholder="\u6587\u672c\u57df"\n      />\n    </Space>\n  );\n};',
        le =
          "import { Input, InputNumber, Space } from '@wonder-ui/core';\nimport { formatBankCard } from 'util-helpers';\n\nexport default () => {\n  return (\n    <Space direction=\"vertical\">\n      <Input\n        placeholder=\"\u8bf7\u8f93\u5165\u94f6\u884c\u5361\"\n        maxLength={22}\n        formatter={(value) => formatBankCard(value)}\n        parser={(displayValue) => displayValue.replace(' ', '')}\n      />\n      <InputNumber\n        placeholder=\"\u8bf7\u8f93\u5165\u91d1\u989d\"\n        defaultValue={1000}\n        formatter={(value) =>\n          `$ ${value}`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')\n        }\n        parser={(value) => value!.replace(/\\$\\s?|(,*)/g, '')}\n      />\n    </Space>\n  );\n};",
        se =
          'import * as React from \'react\';\nimport { Button, Input, InputAction, Space } from \'@wonder-ui/core\';\n\nexport default () => {\n  const actionRef = React.useRef<InputAction>();\n\n  return (\n    <Space direction="vertical">\n      <Space>\n        <Button\n          variant="outlined"\n          onClick={() => {\n            actionRef.current?.focus({ cursor: \'start\' });\n          }}\n        >\n          Focus at first\n        </Button>\n        <Button\n          variant="outlined"\n          onClick={() => {\n            actionRef.current?.focus({ cursor: \'end\' });\n          }}\n        >\n          Focus at last\n        </Button>\n        <Button\n          variant="outlined"\n          onClick={() => {\n            actionRef.current?.focus({ cursor: \'all\' });\n          }}\n        >\n          Focus to select all\n        </Button>\n        <Button\n          variant="outlined"\n          onClick={() => {\n            actionRef.current?.focus({ preventScroll: true });\n          }}\n        >\n          Focus prevent scroll\n        </Button>\n      </Space>\n      <Input\n        actionRef={actionRef}\n        placeholder="\u8bf7\u8f93\u5165"\n        defaultValue="\u805a\u7126\u989d\u5916\u914d\u7f6e\u5c5e\u6027"\n      />\n    </Space>\n  );\n};',
        pe =
          'import { Input, Space } from \'@wonder-ui/core\';\n\nexport default () => {\n  return (\n    <Space>\n      <Input type="password" placeholder="Input password" />\n    </Space>\n  );\n};',
        ce =
          'import { InputNumber, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <InputNumber placeholder="Basic" defaultValue={3} />\n    <InputNumber placeholder="Disable StepHandler" disableStepHandler />\n    <InputNumber placeholder="Disabled" disabled />\n  </Space>\n);',
        ue =
          "import { InputNumber, Space } from '@wonder-ui/core';\n\nfunction onChange(value: string) {\n  console.log('changed', value);\n}\n\nexport default () => (\n  <Space>\n    <InputNumber\n      defaultValue={1000}\n      formatter={(value) => `$ ${value}`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}\n      parser={(value) => value!.replace(/\\$\\s?|(,*)/g, '')}\n      onChange={onChange}\n    />\n    <InputNumber\n      defaultValue={100}\n      min={0}\n      max={100}\n      formatter={(value) => `${value}%`}\n      parser={(value) => value!.replace('%', '')}\n      onChange={onChange}\n    />\n  </Space>\n);",
        fe =
          'import { InputNumber, Space } from \'@wonder-ui/core\';\n\nfunction onChange(value: string) {\n  console.log(\'changed\', value);\n}\n\nexport default () => (\n  <Space>\n    <InputNumber\n      defaultValue="1"\n      min="0"\n      max="10"\n      step="0.00000000000001"\n      onChange={onChange}\n      stringMode\n    />\n  </Space>\n);',
        me =
          "import * as React from 'react';\nimport { Checkbox, InputNumber, Space } from '@wonder-ui/core';\n\nexport default () => {\n  const [keyboard, setKeyboard] = React.useState(true);\n  return (\n    <Space>\n      <InputNumber min={1} max={10} keyboard={keyboard} defaultValue={3} />\n\n      <Checkbox\n        onChange={() => {\n          setKeyboard(!keyboard);\n        }}\n        checked={keyboard}\n      >\n        Toggle keyboard\n      </Checkbox>\n    </Space>\n  );\n};",
        ye =
          "import * as React from 'react';\nimport { Button, InputNumber, Space } from '@wonder-ui/core';\n\nexport default () => {\n  const [value, setValue] = React.useState<string | number>('99');\n  return (\n    <Space>\n      <InputNumber min={1} max={10} value={value} onChange={setValue} />\n      <Button\n        color=\"primary\"\n        variant=\"contained\"\n        onClick={() => {\n          setValue(99);\n        }}\n      >\n        Reset\n      </Button>\n    </Space>\n  );\n};",
        Ee =
          'import * as React from \'react\';\nimport {\n  Button,\n  InputNumber,\n  InputNumberAction,\n  Space,\n  StepButton\n} from \'@wonder-ui/core\';\n\nconst UIButton = StepButton.withComponent(Button);\n\nexport default () => {\n  const actionRef = React.useRef<InputNumberAction>(null);\n  return (\n    <Space>\n      <UIButton\n        variant="contained"\n        onStep={() => {\n          actionRef.current?.onInternalStep(false);\n        }}\n      >\n        -\n      </UIButton>\n      <InputNumber\n        actionRef={actionRef}\n        placeholder="Basic"\n        defaultValue={1}\n        min={1}\n        max={10}\n        disableStepHandler\n        style={{ textAlign: \'center\', width: 80 }}\n      />\n      <UIButton\n        variant="contained"\n        onStep={() => {\n          actionRef.current?.onInternalStep(true);\n        }}\n      >\n        +\n      </UIButton>\n    </Space>\n  );\n};',
        ve =
          "import { Label, Space, Input } from '@wonder-ui/core';\n\nexport default () => (\n  <Space direction=\"vertical\">\n    <Label>I'm a Label</Label>\n    <Label required requiredMark={false}>\n      I'm a required Label\n    </Label>\n    <Label required>I'm a required Label</Label>\n    <Label disalbed>I'm a disabled Label</Label>\n\n    <Space>\n      <Label required colon>\n        A Label for An Input\n      </Label>\n      <Input />\n    </Space>\n  </Space>\n);",
        He =
          'import {\n  Page,\n  List,\n  ListItem,\n  ListHeader,\n  ListItemText,\n  Divider,\n  WhiteSpace\n} from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page title="Simple list">\n    <List>\n      <ListHeader>\u5217\u8868</ListHeader>\n      <ListItem>\n        <ListItemText>Item 1</ListItemText>\n      </ListItem>\n\n      <Divider component="li" />\n\n      <ListItem>\n        <ListItemText>Item 2</ListItemText>\n      </ListItem>\n\n      <WhiteSpace component="li" />\n\n      <ListItem>\n        <ListItemText>Item 3</ListItemText>\n      </ListItem>\n\n      <Divider component="li" />\n\n      <ListItem>\n        <ListItemText>Item 4</ListItemText>\n      </ListItem>\n    </List>\n  </Page>\n);',
        he =
          'import { Page, List, ListItem, ListItemText } from \'@wonder-ui/core\';\n\nconst ListItemLink = ListItem.withComponent(\'a\');\n\nexport default () => (\n  <Page title="Link">\n    <List component="div">\n      <ListItemLink divider href="#\u5217\u8868\u94fe\u63a5">\n        <ListItemText>Link 1</ListItemText>\n      </ListItemLink>\n\n      <ListItemLink divider href="#\u5217\u8868\u94fe\u63a5" extra={<span>CEO</span>}>\n        <ListItemText>Link 2</ListItemText>\n      </ListItemLink>\n\n      <ListItemLink divider href="#\u5217\u8868\u94fe\u63a5" arrow="horizontal">\n        <ListItemText>Link 3</ListItemText>\n      </ListItemLink>\n\n      <ListItemLink\n        href="#\u5217\u8868\u94fe\u63a5"\n        arrow="horizontal"\n        extra={<span>CEO</span>}\n      >\n        <ListItemText>Link 4</ListItemText>\n      </ListItemLink>\n    </List>\n  </Page>\n);',
        ge =
          "import { Collapse, Page, List, ListItem, ListItemText } from '@wonder-ui/core';\nimport { HeartFill } from '@wonder-ui/icons';\nimport { useToggle } from '@wonder-ui/hooks';\n\nexport default () => {\n  const [visible, { toggle }] = useToggle(true);\n  return (\n    <Page title=\"Nested list\">\n      <List>\n        <ListItem divider media={<HeartFill />}>\n          <ListItemText>Item 1</ListItemText>\n        </ListItem>\n        <ListItem divider media={<HeartFill />}>\n          <ListItemText>Item 2</ListItemText>\n        </ListItem>\n\n        <ListItem\n          arrow={visible ? 'vertical-up' : 'vertical'}\n          onClick={() => toggle()}\n          button\n          divider\n        >\n          Item 3\n        </ListItem>\n\n        <Collapse in={visible}>\n          <List>\n            <ListItem divider media={<HeartFill />}>\n              <ListItemText>Item 1</ListItemText>\n            </ListItem>\n            <ListItem divider media={<HeartFill />}>\n              <ListItemText>Item 2</ListItemText>\n            </ListItem>\n\n            <ListItem divider>\n              <ListItemText>Item 3</ListItemText>\n            </ListItem>\n          </List>\n        </Collapse>\n\n        <ListItem divider>\n          <ListItemText>Item 4</ListItemText>\n        </ListItem>\n        <ListItem divider>\n          <ListItemText>Item 5</ListItemText>\n        </ListItem>\n      </List>\n    </Page>\n  );\n};",
        be =
          "import {\n  Collapse,\n  Page,\n  List,\n  ListItem,\n  ListItemText,\n  WhiteSpace\n} from '@wonder-ui/core';\nimport { HeartFill } from '@wonder-ui/icons';\nimport { useToggle } from '@wonder-ui/hooks';\n\nexport default () => {\n  const [visible, { toggle }] = useToggle(true);\n  return (\n    <Page title=\"Inset\">\n      <WhiteSpace />\n      <List inset>\n        <ListItem divider media={<HeartFill />}>\n          <ListItemText>Item 1</ListItemText>\n        </ListItem>\n        <ListItem divider media={<HeartFill />}>\n          <ListItemText>Item 2</ListItemText>\n        </ListItem>\n\n        <ListItem\n          onClick={() => toggle()}\n          button\n          arrow={visible ? 'vertical-up' : 'vertical'}\n          divider\n        >\n          <ListItemText>Item 3</ListItemText>\n        </ListItem>\n\n        <Collapse in={visible}>\n          <List>\n            <ListItem divider media={<HeartFill />}>\n              <ListItemText>Item 1</ListItemText>\n            </ListItem>\n            <ListItem divider media={<HeartFill />}>\n              <ListItemText>Item 2</ListItemText>\n            </ListItem>\n\n            <ListItem divider>\n              <ListItemText>Item 3</ListItemText>\n            </ListItem>\n          </List>\n        </Collapse>\n\n        <ListItem divider>\n          <ListItemText>Item 4</ListItemText>\n        </ListItem>\n        <ListItem>\n          <ListItemText>Item 5</ListItemText>\n        </ListItem>\n      </List>\n    </Page>\n  );\n};",
        Me =
          'import {\n  Page,\n  List,\n  ListHeader,\n  ListItem,\n  ListItemText\n} from \'@wonder-ui/core\';\nimport { FileEarmarkFill } from \'@wonder-ui/icons\';\n\nexport default () => (\n  <Page title="List with icon">\n    <List>\n      <ListHeader>\u6587\u4ef6\u5939</ListHeader>\n      <ListItem divider media={<FileEarmarkFill />}>\n        <ListItemText primary="Index" secondary="Jan 9, 2014" />\n      </ListItem>\n      <ListItem divider media={<FileEarmarkFill />}>\n        <ListItemText primary="Index 2" secondary="Jan 9, 2014" />\n      </ListItem>\n      <ListItem media={<FileEarmarkFill />}>\n        <ListItemText primary="Index 3" secondary="Jan 9, 2014" />\n      </ListItem>\n    </List>\n  </Page>\n);',
        Le =
          'import {\n  Badge,\n  Page,\n  List,\n  ListHeader,\n  ListItem,\n  ListItemText\n} from \'@wonder-ui/core\';\nimport { InfoCircleFill, PersonCircle, TrashFill } from \'@wonder-ui/icons\';\n\nexport default () => (\n  <Page title="Layout">\n    <List>\n      <ListHeader>Simple List</ListHeader>\n      <ListItem divider>\n        <ListItemText>Item 1</ListItemText>\n      </ListItem>\n      <ListItem divider>\n        <ListItemText>Item 2</ListItemText>\n      </ListItem>\n      <ListItem divider>\n        <ListItemText>Item 3</ListItemText>\n      </ListItem>\n    </List>\n\n    <List>\n      <ListHeader>Data list, with icons</ListHeader>\n      <ListItem divider media={<PersonCircle />} extra={<span>CEO</span>}>\n        <ListItemText>Item 1</ListItemText>\n      </ListItem>\n      <ListItem\n        divider\n        media={<PersonCircle />}\n        extra={<Badge color="secondary" text="5" />}\n      >\n        <ListItemText>Item 2</ListItemText>\n      </ListItem>\n      <ListItem\n        divider\n        media={<PersonCircle />}\n        extra={<Badge color="secondary" text="5" />}\n      >\n        <ListItemText>Item 3</ListItemText>\n      </ListItem>\n    </List>\n\n    <List>\n      <ListHeader>Data list, with button</ListHeader>\n      <ListItem\n        divider\n        media={<PersonCircle />}\n        extra={<InfoCircleFill fontSize="inherit" />}\n      >\n        <ListItemText>Item 1</ListItemText>\n      </ListItem>\n      <ListItem\n        divider\n        media={<PersonCircle />}\n        extra={<InfoCircleFill fontSize="inherit" />}\n      >\n        <ListItemText>Item 2</ListItemText>\n      </ListItem>\n      <ListItem\n        divider\n        media={<PersonCircle />}\n        extra={<TrashFill fontSize="inherit" />}\n      >\n        <ListItemText>Item 3</ListItemText>\n      </ListItem>\n    </List>\n\n    <List>\n      <ListHeader>Links</ListHeader>\n      <ListItem button divider arrow="horizontal" extra={<span>CEO</span>}>\n        <ListItemText>Item 1</ListItemText>\n      </ListItem>\n      <ListItem button divider arrow="horizontal" extra={<span>CEO</span>}>\n        <ListItemText>Item 2</ListItemText>\n      </ListItem>\n      <ListItem button divider arrow="horizontal">\n        <ListItemText>Item 3</ListItemText>\n      </ListItem>\n    </List>\n\n    <List>\n      <ListHeader>Links, Secondary text</ListHeader>\n      <ListItem\n        button\n        divider\n        arrow="horizontal"\n        media={<PersonCircle />}\n        extra={<span>CEO</span>}\n      >\n        <ListItemText primary={\'Primary text\'} secondary={\'Secondary text\'} />\n      </ListItem>\n      <ListItem\n        button\n        divider\n        arrow="horizontal"\n        media={<PersonCircle />}\n        extra={<span>CEO</span>}\n      >\n        <ListItemText primary={\'Primary text\'} secondary={\'Secondary text\'} />\n      </ListItem>\n      <ListItem button arrow="horizontal" media={<PersonCircle />}>\n        <ListItemText primary={\'Primary text\'} secondary={\'Secondary text\'} />\n      </ListItem>\n    </List>\n  </Page>\n);',
        Te =
          'import * as React from \'react\';\nimport {\n  Page,\n  List,\n  ListItem,\n  ListItemText,\n  Typography,\n  IconButton\n} from \'@wonder-ui/core\';\nimport { InfoCircle } from \'@wonder-ui/icons\';\n\nexport default () => (\n  <Page title="Meida list">\n    <List>\n      <ListItem\n        divider\n        alignItems="flex-start"\n        arrow="horizontal"\n        extra={\n          <IconButton size="small">\n            <InfoCircle />\n          </IconButton>\n        }\n        media={\n          <img\n            width="70"\n            src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"\n            alt=""\n          />\n        }\n      >\n        <ListItemText\n          primary="Yellow Submarine"\n          secondary={\n            <React.Fragment>\n              <Typography variant="body2" color="textPrimary">\n                Beatles\n              </Typography>\n              <Typography variant="body2" lineClamp={2} color="textSecondary">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla\n                sagittis tellus ut turpis condimentum, ut dignissim lacus\n                tincidunt. Cras dolor metus, ultrices condimentum sodales sit\n                amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris\n                rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo\n                augue id, pulvinar lacus.\n              </Typography>\n            </React.Fragment>\n          }\n        />\n      </ListItem>\n      <ListItem\n        arrow="horizontal"\n        extra={<InfoCircle />}\n        media={\n          <img\n            width="70"\n            src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"\n            alt=""\n          />\n        }\n      >\n        <ListItemText\n          primary="Yellow Submarine"\n          secondary={\n            <Typography variant="body2" lineClamp={4} color="textSecondary">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla\n              sagittis tellus ut turpis condimentum, ut dignissim lacus\n              tincidunt. Cras dolor metus, ultrices condimentum sodales sit\n              amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris\n              rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo\n              augue id, pulvinar lacus.\n            </Typography>\n          }\n        />\n      </ListItem>\n    </List>\n  </Page>\n);',
        Ce =
          'import {\n  Checkbox,\n  Page,\n  List,\n  ListItem,\n  ListHeader,\n  ListItemText\n} from \'@wonder-ui/core\';\n\nconst ListLabel = ListItemText.withComponent(\'label\');\n\nexport default () => (\n  <Page title="Checkbox">\n    <List>\n      <ListHeader>Settings</ListHeader>\n      <ListItem button divider media={<Checkbox id="checkbox-wifi1" />}>\n        <ListLabel component="label" htmlFor="checkbox-wifi1">\n          Wi-Fi\n        </ListLabel>\n      </ListItem>\n      <ListItem button media={<Checkbox id="checkbox-wifi2" />}>\n        <ListLabel component="label" htmlFor="checkbox-wifi2">\n          Wi-Fi 2\n        </ListLabel>\n      </ListItem>\n    </List>\n  </Page>\n);',
        De =
          "import {\n  Page,\n  List,\n  ListItem,\n  ListHeader,\n  ListItemText,\n  Toggle\n} from '@wonder-ui/core';\nimport { Wifi } from '@wonder-ui/icons';\n\nexport default () => (\n  <Page title=\"Switch\">\n    <List>\n      <ListHeader>Settings</ListHeader>\n      <ListItem divider media={<Wifi />} extra={<Toggle />}>\n        <ListItemText>Wi-Fi</ListItemText>\n      </ListItem>\n      <ListItem media={<Wifi />} extra={<Toggle />}>\n        <ListItemText>Wi-Fi 2</ListItemText>\n      </ListItem>\n    </List>\n  </Page>\n);",
        we =
          "import {\n  Page,\n  List,\n  ListItem,\n  ListHeader,\n  ListItemText\n} from '@wonder-ui/core';\n\nconst dataList = Array(10).fill('');\n\nexport default () => (\n  <Page title=\"Sticky\">\n    <List>\n      <ListHeader sticky>sticky 0</ListHeader>\n      {dataList.map((item, index) => (\n        <ListItem key={index}>\n          <ListItemText>Item {index}</ListItemText>\n        </ListItem>\n      ))}\n    </List>\n    <List>\n      <ListHeader sticky>sticky 1</ListHeader>\n      {dataList.map((item, index) => (\n        <ListItem key={index}>\n          <ListItemText>Item {index}</ListItemText>\n        </ListItem>\n      ))}\n    </List>\n    <List>\n      <ListHeader sticky>sticky 2</ListHeader>\n      {dataList.map((item, index) => (\n        <ListItem key={index}>\n          <ListItemText>Item {index}</ListItemText>\n        </ListItem>\n      ))}\n    </List>\n  </Page>\n);",
        Ie =
          "import {\n  Page,\n  CircularProgress,\n  List,\n  ListItem,\n  ListItemText,\n  styled\n} from '@wonder-ui/core';\nimport { useDynamicList } from '@wonder-ui/hooks';\nimport * as React from 'react';\n\nconst Indicator = styled('div')`\n  display: flex;\n  height: 44px;\n  align-items: center;\n  justify-content: center;\n`;\n\nconst dataList = Array(12).fill('');\n\nexport default () => {\n  const { list, merge } = useDynamicList(dataList);\n  const scrollRef = React.useRef<HTMLDivElement>(null);\n\n  const handleScroll = () => {\n    const node = scrollRef.current;\n    if (node) {\n      if (node.scrollTop === node.scrollHeight - node.offsetHeight) {\n        setTimeout(() => {\n          merge(list.length - 1, dataList);\n        }, 1000);\n      }\n    }\n  };\n\n  return (\n    <Page\n      title=\"Infinite scroll\"\n      ContentRef={scrollRef}\n      ContentProps={{\n        onScroll: handleScroll\n      }}\n    >\n      <List>\n        {list.map((item, index) => (\n          <ListItem key={index}>\n            <ListItemText>Item {index}</ListItemText>\n          </ListItem>\n        ))}\n      </List>\n      <Indicator>\n        <CircularProgress size={22} />\n      </Indicator>\n    </Page>\n  );\n};",
        xe =
          "import {\n  Container,\n  Page,\n  List,\n  ListHeader,\n  ListItem,\n  ListItemText,\n  Typography,\n  WhiteSpace\n} from '@wonder-ui/core';\nimport { useVirtualList } from '@wonder-ui/hooks';\n\nconst dataList = Array(2000).fill('');\n\nexport default () => {\n  const { list, containerProps, wrapperProps } = useVirtualList(dataList, {\n    overscan: 20,\n    itemHeight: 44\n  });\n\n  return (\n    <Page title=\"Virtual list\" ContentProps={containerProps}>\n      <Container>\n        <WhiteSpace />\n        <Typography paragraph>\n          This example shows how to use Virtual List\n        </Typography>\n      </Container>\n\n      <List {...wrapperProps}>\n        <ListHeader sticky>Virtual List</ListHeader>\n        {list.map(({ data, index }) => (\n          <ListItem key={index} style={{ height: 44 }}>\n            <ListItemText>Item {index}</ListItemText>\n          </ListItem>\n        ))}\n      </List>\n    </Page>\n  );\n};",
        Pe =
          'import {\n  Page,\n  List,\n  ListInputItem,\n  ListHeader,\n  IconButton,\n  Button\n} from \'@wonder-ui/core\';\nimport { Person, InfoCircle } from \'@wonder-ui/icons\';\n\nexport default () => {\n  return (\n    <Page>\n      <List>\n        <ListHeader>\u57fa\u672c\u7528\u6cd5</ListHeader>\n        <ListInputItem label="\u6587\u672c" placeholder="\u8bf7\u8f93\u5165\u6587\u672c" required />\n      </List>\n\n      <List>\n        <ListHeader>\u7c7b\u578b</ListHeader>\n        <ListInputItem\n          divider\n          type="text"\n          label="\u540d\u5b57"\n          placeholder="\u8bf7\u8f93\u5165\u540d\u5b57"\n          required\n        />\n        <ListInputItem\n          divider\n          type="password"\n          label="\u5bc6\u7801"\n          placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801"\n          required\n        />\n        <ListInputItem\n          divider\n          type="tel"\n          label="\u624b\u673a\u53f7"\n          placeholder="\u8bf7\u8f93\u5165\u624b\u673a\u53f7"\n        />\n        <ListInputItem\n          divider\n          type="email"\n          label="\u90ae\u7bb1"\n          placeholder="\u8bf7\u8f93\u5165\u90ae\u7bb1"\n        />\n        <ListInputItem\n          divider\n          type="number"\n          label="\u6570\u5b57"\n          placeholder="\u8bf7\u8f93\u5165\u6570\u5b57"\n        />\n      </List>\n\n      <List>\n        <ListHeader>\u9ad8\u5ea6\u81ea\u9002\u5e94</ListHeader>\n        <ListInputItem label="\u591a\u884c\u6587\u672c" multiline placeholder="\u8bf7\u8f93\u5165\u6587\u672c" />\n      </List>\n\n      <List>\n        <ListHeader>\u56fe\u6807</ListHeader>\n        <ListInputItem\n          divider\n          label="\u6587\u672c"\n          prefix={<Person fontSize="small" />}\n          placeholder="\u8bf7\u8f93\u5165\u6587\u672c"\n        />\n        <ListInputItem\n          divider\n          label="\u6587\u672c"\n          prefix={<Person fontSize="small" />}\n          suffix={\n            <IconButton edge="end" size="small">\n              <InfoCircle fontSize="small" />\n            </IconButton>\n          }\n          placeholder="\u8bf7\u8f93\u5165\u6587\u672c"\n        />\n        <ListInputItem\n          allowClear\n          label="\u6587\u672c"\n          prefix={<Person fontSize="small" />}\n          placeholder="\u663e\u793a\u6e05\u9664\u56fe\u6807"\n        />\n      </List>\n\n      <List>\n        <ListHeader>\u63d2\u5165\u6309\u94ae</ListHeader>\n        <ListInputItem\n          allowClear\n          label="\u77ed\u4fe1\u9a8c\u8bc1\u7801"\n          placeholder="\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801"\n          extra={\n            <Button variant="outlined" size="small">\n              \u77ed\u4fe1\u9a8c\u8bc1\u7801\n            </Button>\n          }\n        />\n      </List>\n\n      <List>\n        <ListHeader>\u7981\u7528&\u53ea\u8bfb</ListHeader>\n        <ListInputItem\n          divider\n          readOnly\n          label="\u6587\u672c"\n          placeholder="\u8bf7\u8f93\u5165\u6587\u672c"\n          value="ReadOnly text"\n        />\n        <ListInputItem\n          label="\u6587\u672c"\n          disabled\n          placeholder="\u8bf7\u8f93\u5165\u6587\u672c"\n          value="Disabled text"\n        />\n      </List>\n\n      <List>\n        <ListHeader>\u9519\u8bef\u63d0\u793a</ListHeader>\n        <ListInputItem\n          divider\n          label="\u6587\u672c"\n          placeholder="\u8bf7\u8f93\u5165\u6587\u672c"\n          description="\u4fe1\u606f\u63d0\u793a"\n          suffix={\n            <IconButton edge="end" size="small">\n              <InfoCircle fontSize="small" />\n            </IconButton>\n          }\n        />\n        <ListInputItem\n          label="\u6587\u672c"\n          placeholder="\u8bf7\u8f93\u5165\u6587\u672c"\n          description="\u4fe1\u606f\u63d0\u793a"\n          errorMessage="\u8bf7\u8f93\u5165\u6587\u672c"\n        />\n      </List>\n    </Page>\n  );\n};',
        Re =
          'import {\n  Page,\n  List,\n  ListItem,\n  ListHeader,\n  Label,\n  Input,\n  Row,\n  Col,\n  Typography,\n  IconButton,\n  withDialog\n} from \'@wonder-ui/core\';\nimport { InfoCircle } from \'@wonder-ui/icons\';\n\nexport default withDialog((props) => (\n  <Page>\n    <List>\n      <ListHeader>\u81ea\u5b9a\u4e49</ListHeader>\n      <ListItem\n        extra={\n          <IconButton\n            edge="end"\n            onClick={() => {\n              props.dialog.toast(\'\u63d0\u793a\u6587\u6848\u63d0\u793a\u6587\u6848\');\n            }}\n          >\n            <InfoCircle fontSize="small" />\n          </IconButton>\n        }\n        alignItems="flex-start"\n      >\n        <Row style={{ width: \'100%\' }}>\n          <Col col={3}>\n            <Label\n              style={{ width: \'100%\', paddingTop: 6 }}\n              required\n              colon\n              labelAlign="right"\n            >\n              \u6587\u672c\n            </Label>\n          </Col>\n          <Col col={9}>\n            <Input\n              borderless\n              placeholder="\u8bf7\u8f93\u5165"\n              style={{ padding: 0, height: 36 }}\n            />\n            <Typography color="textSecondary">\u63d0\u793a\u6587\u6848\u63d0\u793a\u6587\u6848</Typography>\n            <Typography color="error">\u63d0\u793a\u6587\u6848\u63d0\u793a\u6587\u6848</Typography>\n          </Col>\n        </Row>\n      </ListItem>\n    </List>\n  </Page>\n));',
        Se =
          'import { Button, Fade, Modal, ModalContent, Typography } from \'@wonder-ui/core\';\nimport { useBoolean } from \'@wonder-ui/hooks\';\n\nexport default () => {\n  const [visible, { setFalse, setTrue }] = useBoolean();\n\n  return (\n    <div>\n      <Button variant="contained" onClick={() => setTrue()}>\n        Open\n      </Button>\n\n      <Modal autoFocus visible={visible} onClose={() => setFalse()}>\n        <Fade>\n          <ModalContent\n            title="Modal Title"\n            onOk={() => setFalse()}\n            onClose={() => setFalse()}\n            onCancel={() => setFalse()}\n          >\n            <Typography>some contents...</Typography>\n            <Typography>some contents...</Typography>\n            <Typography>some contents...</Typography>\n          </ModalContent>\n        </Fade>\n      </Modal>\n    </div>\n  );\n};',
        ke =
          "import {\n  Button,\n  Fade,\n  Modal,\n  styled,\n  Typography,\n  WhiteSpace,\n  Space,\n  withDialog\n} from '@wonder-ui/core';\nimport { useBoolean } from '@wonder-ui/hooks';\n\nconst Demo = styled('div')`\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 320px;\n  background-color: rgb(255, 255, 255);\n  border: 2px solid rgb(0, 0, 0);\n  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,\n    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;\n  padding: 32px;\n`;\n\nexport default withDialog((props) => {\n  const [visible, { setTrue, setFalse }] = useBoolean();\n\n  return (\n    <div>\n      <Button variant=\"contained\" onClick={() => setTrue()}>\n        Open\n      </Button>\n\n      <Modal\n        visible={visible}\n        onClose={() => setFalse()}\n        BackdropProps={{ transitionDuration: 400 }}\n        autoFocus\n      >\n        <Fade timeout={400}>\n          <Demo>\n            <Typography variant=\"h2\" gutterBottom>\n              \u6a21\u6001\u6846\u6807\u9898\n            </Typography>\n            <Typography gutterBottom style={{ height: 60, overflow: 'auto' }}>\n              \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57,\n              \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57,\n              \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57, \u6a21\u6001\u6846\u6587\u5b57\u6587\u5b57\n            </Typography>\n            <WhiteSpace />\n            <Space>\n              <Button\n                variant=\"contained\"\n                onClick={() =>\n                  props.dialog.alert({ text: 'Dialog alert message' })\n                }\n              >\n                \u786e\u5b9a\n              </Button>\n              <Button onClick={() => setFalse()} color=\"secondary\">\n                \u53d6\u6d88\n              </Button>\n            </Space>\n          </Demo>\n        </Fade>\n      </Modal>\n    </div>\n  );\n});",
        Be =
          'import {\n  ArrowForward,\n  Button,\n  CloseButton,\n  IconButton,\n  Navbar,\n  Page,\n  Space\n} from \'@wonder-ui/core\';\nimport { Search, ThreeDotsVertical } from \'@wonder-ui/icons\';\n\nexport default () => {\n  return (\n    <Page>\n      <Space direction="vertical" nowrap>\n        <Navbar right={<CloseButton />} />\n\n        <Navbar\n          left={\n            <IconButton>\n              <ArrowForward direction="left" />\n            </IconButton>\n          }\n        />\n\n        <Navbar title="\u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f" />\n\n        <Navbar\n          title="\u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f, \u8d85\u957f\u7684\u5bfc\u822a\u680f"\n          left={\n            <IconButton>\n              <ArrowForward direction="left" />\n            </IconButton>\n          }\n        />\n\n        <Navbar\n          title="\u5bfc\u822a\u680f"\n          left={\n            <IconButton>\n              <ArrowForward direction="left" />\n            </IconButton>\n          }\n          right={\n            <IconButton>\n              <ThreeDotsVertical />\n            </IconButton>\n          }\n        />\n\n        <Navbar\n          title="\u5bfc\u822a\u680f"\n          left={\n            <IconButton>\n              <ArrowForward direction="left" />\n            </IconButton>\n          }\n          right={\n            <div>\n              <IconButton>\n                <Search />\n              </IconButton>\n              <IconButton>\n                <ThreeDotsVertical />\n              </IconButton>\n            </div>\n          }\n        />\n\n        <Navbar title="\u5bfc\u822a\u680f" subTitle="\u526f\u6807\u9898" right={<CloseButton />} />\n\n        <Navbar\n          title="\u5bfc\u822a\u680f"\n          subTitle="\u526f\u6807\u9898"\n          left={\n            <Button\n              startIcon={<ArrowForward direction="left" />}\n              variant="text"\n            >\n              \u8fd4\u56de\n            </Button>\n          }\n          right={<Button variant="text">\u5173\u95ed</Button>}\n        />\n      </Space>\n    </Page>\n  );\n};',
        Ae =
          'import { Noticebar, Space, ArrowForward, IconButton } from \'@wonder-ui/core\';\nimport { InfoCircle, CheckCircle, ExclamationCircle } from \'@wonder-ui/icons\';\n\nexport default () => (\n  <Space direction="vertical" itemWrap={false}>\n    <Noticebar type="info" icon={<InfoCircle />}>\n      Info (default) Noticebar.\n    </Noticebar>\n    <Noticebar\n      type="warning"\n      icon={<ExclamationCircle />}\n      actions={\n        <IconButton disableRipple>\n          <ArrowForward fontSize="small" />\n        </IconButton>\n      }\n    >\n      Warning Noticebar.\n    </Noticebar>\n    <Noticebar type="error" closable>\n      message...message...message...message...message...message...message...message...message...message...message...message...\n    </Noticebar>\n    <Noticebar type="error" closable scrollable>\n      message...message...message...message...message...message...message...message...message...message...message...message...\n    </Noticebar>\n    <Noticebar icon={<CheckCircle />} type="success" wrap closable>\n      message...message...message...message...message...message...message...message...message...message...message...message...\n    </Noticebar>\n  </Space>\n);',
        Oe =
          'import { Page, Paper, Space, WhiteSpace, styled } from \'@wonder-ui/core\';\n\nconst Block = styled(Paper)`\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: ${({ theme }) => theme.palette.colors.blue.A200};\n`;\n\nexport default () => (\n  <Page>\n    <WhiteSpace />\n    <Space direction="vertical">\n      <Block>Block</Block>\n      <Block>Block</Block>\n      <Block>Block</Block>\n    </Space>\n    <WhiteSpace />\n  </Page>\n);',
        Fe =
          'import { Container, Page, Typography, WhiteSpace } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page title="\u5bfc\u822a\u680f" showBackButton>\n    <WhiteSpace />\n    <Container>\n      <Typography gutterBottom>\u5e26\u5bfc\u822a\u680f\u7684\u9875\u9762</Typography>\n    </Container>\n  </Page>\n);',
        je =
          'import {\n  Button,\n  Container,\n  Drawer,\n  Page,\n  Typography,\n  WhiteSpace\n} from \'@wonder-ui/core\';\nimport { useBoolean } from \'@wonder-ui/hooks\';\n\nexport default () => {\n  const [visible, { setTrue, setFalse }] = useBoolean(false);\n  return (\n    <Page title="\u9875\u9762\u548c\u62bd\u5c49">\n      <WhiteSpace />\n      <Container>\n        <Button variant="contained" onClick={() => setTrue()}>\n          \u6253\u5f00\u62bd\u5c49\n        </Button>\n      </Container>\n\n      <Drawer visible={visible} anchor="bottom" onClose={() => setFalse()}>\n        <Page\n          style={{ width: \'100%\', height: 300 }}\n          title="\u62bd\u5c49"\n          showCloseButton\n          onClose={() => setFalse()}\n        >\n          <Typography gutterBottom>\u62bd\u5c49\u5185\u7684\u9875\u9762</Typography>\n        </Page>\n      </Drawer>\n    </Page>\n  );\n};',
        Ke =
          "import { Picker, PickerProps } from '@wonder-ui/core';\n\nconst props: PickerProps = {\n  columns: ['\u676d\u5dde', '\u5b81\u6ce2', '\u6e29\u5dde', '\u7ecd\u5174', '\u6e56\u5dde', '\u5609\u5174', '\u91d1\u534e', '\u8862\u5dde'],\n  defaultIndex: 2\n};\n\nexport default () => <Picker {...props} />;",
        Ve =
          "import { Picker, PickerProps } from '@wonder-ui/core';\n\nconst props: PickerProps = {\n  columns: [\n    // \u7b2c\u4e00\u5217\n    {\n      values: ['\u5468\u4e00', '\u5468\u4e8c', '\u5468\u4e09', '\u5468\u56db', '\u5468\u4e94'],\n      defaultIndex: 2\n    },\n    // \u7b2c\u4e8c\u5217\n    {\n      values: ['\u4e0a\u5348', '\u4e0b\u5348', '\u665a\u4e0a'],\n      defaultIndex: 1\n    }\n  ]\n};\n\nexport default () => <Picker {...props} />;",
        Ue =
          "import { Picker, PickerProps } from '@wonder-ui/core';\n\nconst props: PickerProps = {\n  columns: [\n    {\n      text: '\u6d59\u6c5f',\n      children: [\n        {\n          text: '\u676d\u5dde',\n          children: [{ text: '\u897f\u6e56\u533a' }, { text: '\u4f59\u676d\u533a' }]\n        },\n        {\n          text: '\u6e29\u5dde',\n          children: [{ text: '\u9e7f\u57ce\u533a' }, { text: '\u74ef\u6d77\u533a' }]\n        }\n      ]\n    },\n    {\n      text: '\u798f\u5efa',\n      children: [\n        {\n          text: '\u798f\u5dde',\n          children: [{ text: '\u9f13\u697c\u533a' }, { text: '\u53f0\u6c5f\u533a' }]\n        },\n        {\n          text: '\u53a6\u95e8',\n          children: [{ text: '\u601d\u660e\u533a' }, { text: '\u6d77\u6ca7\u533a' }]\n        }\n      ]\n    }\n  ]\n};\n\nexport default () => <Picker {...props} />;",
        We =
          "import { Picker, PickerProps } from '@wonder-ui/core';\n\nconst props: PickerProps = {\n  columns: [\n    { text: '\u676d\u5dde', disabled: true },\n    { text: '\u5b81\u6ce2' },\n    { text: '\u6e29\u5dde' }\n  ],\n  defaultIndex: 2\n};\n\nexport default () => <Picker {...props} />;",
        Ge =
          "import * as React from 'react';\nimport { Picker, PickerProps, PickerAction } from '@wonder-ui/core';\n\nconst cities = {\n  \u6d59\u6c5f: ['\u676d\u5dde', '\u5b81\u6ce2', '\u6e29\u5dde', '\u5609\u5174', '\u6e56\u5dde'],\n  \u798f\u5efa: ['\u798f\u5dde', '\u53a6\u95e8', '\u8386\u7530', '\u4e09\u660e', '\u6cc9\u5dde']\n};\n\nconst props: PickerProps = {\n  columns: [{ values: Object.keys(cities) }, { values: cities['\u6d59\u6c5f'] }]\n};\n\nexport default () => {\n  const actionRef = React.useRef<PickerAction>(null);\n\n  const onChange = (values: (keyof typeof cities)[]) => {\n    actionRef.current?.setColumnValues(1, cities[values[0]]);\n  };\n\n  return <Picker actionRef={actionRef} onChange={onChange} {...props} />;\n};",
        ze =
          "import { Picker, PickerProps } from '@wonder-ui/core';\n\nconst props: PickerProps = {\n  columns: ['\u676d\u5dde', '\u5b81\u6ce2', '\u6e29\u5dde', '\u7ecd\u5174', '\u6e56\u5dde', '\u5609\u5174', '\u91d1\u534e', '\u8862\u5dde'],\n  defaultIndex: 2,\n  loading: true\n};\n\nexport default () => <Picker {...props} />;",
        _e =
          "import {\n  Drawer,\n  Picker,\n  PickerProps,\n  Page,\n  List,\n  ListInputItem,\n  ListHeader\n} from '@wonder-ui/core';\nimport { useReactive } from '@wonder-ui/hooks';\n\nconst props: PickerProps = {\n  columns: ['\u676d\u5dde', '\u5b81\u6ce2', '\u6e29\u5dde', '\u7ecd\u5174', '\u6e56\u5dde', '\u5609\u5174', '\u91d1\u534e', '\u8862\u5dde'],\n  defaultIndex: 2\n};\n\nexport default () => {\n  const state = useReactive({ visible: false, value: '' });\n\n  return (\n    <Page>\n      <List>\n        <ListHeader>\u8868\u5355</ListHeader>\n        <ListInputItem\n          button\n          label=\"\u57ce\u5e02\"\n          readOnly\n          placeholder=\"\u9009\u62e9\u57ce\u5e02\"\n          value={state.value}\n          onClick={() => {\n            state.visible = true;\n          }}\n        />\n      </List>\n      <Drawer\n        keepMounted\n        anchor=\"bottom\"\n        visible={state.visible}\n        onClose={() => {\n          state.visible = false;\n        }}\n      >\n        <Picker\n          onConfirm={(value: string) => {\n            state.visible = false;\n            state.value = value;\n          }}\n          onCancel={() => {\n            state.visible = false;\n          }}\n          {...props}\n        />\n      </Drawer>\n    </Page>\n  );\n};",
        Ne =
          "import {\n  Picker,\n  PickerAction,\n  Page,\n  Paper,\n  List,\n  ListInputItem,\n  ListHeader,\n  Popup,\n  styled\n} from '@wonder-ui/core';\nimport { useReactive } from '@wonder-ui/hooks';\nimport { getPCA, CascadeData } from 'lcn';\nimport * as React from 'react';\n\nconst pca = getPCA();\n\nconst PickWrap = styled(Paper)`\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n\n  & > div {\n    width: 100%;\n  }\n`;\n\nexport default () => {\n  const state = useReactive({ visible: false, value: '', valueCode: '' });\n\n  const pickActionRef = React.useRef<PickerAction>(null);\n\n  return (\n    <Page>\n      <List>\n        <ListHeader>\u5730\u5740\u9009\u62e9\u5668</ListHeader>\n        <ListInputItem\n          button\n          label=\"\u57ce\u5e02\"\n          readOnly\n          placeholder=\"\u9009\u62e9\u7701\u5e02\u533a\"\n          value={state.value}\n          onClick={() => {\n            state.visible = true;\n          }}\n        />\n      </List>\n      <Popup\n        keepMounted\n        visible={state.visible}\n        title=\"\u7701\u5e02\u533a\"\n        onClose={() => {\n          state.visible = false;\n          pickActionRef.current?.confirm();\n        }}\n      >\n        <PickWrap>\n          <Picker\n            actionRef={pickActionRef}\n            textKey=\"name\"\n            columns={pca}\n            visibleItemCount={11}\n            showNavbar={false}\n            onConfirm={(values: CascadeData[]) => {\n              state.value = values.map((item) => item.name).join('/');\n              state.valueCode = values.map((item) => item.code).join(',');\n            }}\n          />\n        </PickWrap>\n      </Popup>\n    </Page>\n  );\n};",
        qe =
          "import * as React from 'react';\nimport { Button, Popover } from '@wonder-ui/core';\nimport { useBoolean } from '@wonder-ui/hooks';\n\nexport default () => {\n  const [visible, actions] = useBoolean(false);\n  const buttonRef = React.useRef<HTMLElement>(null);\n\n  return (\n    <div>\n      <Button variant=\"contained\" ref={buttonRef} onClick={actions.setTrue}>\n        \u5f39\u51fa\u6846\n      </Button>\n\n      <Popover\n        visible={visible}\n        anchorEl={() => buttonRef.current}\n        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}\n        onClose={() => actions.setFalse()}\n      >\n        <div style={{ padding: 16 }}>\n          \u6c14\u6ce1\u5361\u7247\u5185\u5bb9... <Button>\u66f4\u591a</Button>\n        </div>\n      </Popover>\n    </div>\n  );\n};",
        Ye =
          "import * as React from 'react';\nimport { Button, Container, Popup, Typography } from '@wonder-ui/core';\n\nexport default () => {\n  const [popVisible, setVisible] = React.useState(false);\n  return (\n    <div>\n      <Container>\n        <Button variant=\"contained\" onClick={() => setVisible(true)}>\n          \u6253\u5f00\u5f39\u7a97\n        </Button>\n      </Container>\n\n      <Popup\n        title=\"Popup Title\"\n        visible={popVisible}\n        onClose={() => setVisible(false)}\n      >\n        <div style={{ padding: '30px  16px' }}>\n          <Typography gutterBottom>\n            \u5f39\u51fa\u7a97\u53e3\u6765\u4e86\u3002\u60a8\u53ef\u4ee5\u5728\u6b64\u5904\u653e\u7f6e\u4efb\u4f55\u5185\u5bb9\uff0c\u751a\u81f3\u53ef\u4ee5\u4f7f\u7528\u5176\u81ea\u5df1\u7684\u72ec\u7acb\u89c6\u56fe\u5bfc\u822a\u3002\u4e5f\u4e0d\u662f\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\n            iPhone / iPod \u548c iPad \u4e0a\u770b\u8d77\u6765\u6709\u70b9\u4e0d\u540c\u7684\u5f39\u51fa\u7a97\u53e3\uff0ciPhone\n            \u5b83\u662f\u5168\u5c4f\u7684\u3002\n          </Typography>\n\n          <Typography>...</Typography>\n        </div>\n      </Popup>\n    </div>\n  );\n};",
        Ze =
          "import * as React from 'react';\nimport { Button, Portal } from '@wonder-ui/core';\nimport { useToggle } from '@wonder-ui/hooks';\n\nexport default () => {\n  const target = React.useRef(null);\n  const [visible, { toggle }] = useToggle(false);\n\n  return (\n    <div>\n      <Button variant=\"contained\" onClick={() => toggle()}>\n        Toggle\n      </Button>\n\n      <div style={{ backgroundColor: 'grey' }}>\n        {visible && (\n          <Portal container={() => target.current}>\n            <div>Portal Content</div>\n          </Portal>\n        )}\n      </div>\n\n      <div ref={target} style={{ backgroundColor: 'pink' }}></div>\n    </div>\n  );\n};",
        Xe =
          'import { Button, Container, Preloader } from \'@wonder-ui/core\';\nimport { useToggle } from \'@wonder-ui/hooks\';\n\nexport default () => {\n  const [visible, { toggle }] = useToggle(false);\n\n  const open = () => {\n    toggle();\n\n    setTimeout(() => {\n      toggle();\n    }, 2000);\n  };\n\n  return (\n    <Container>\n      <Button variant="contained" onClick={() => open()}>\n        Open\n      </Button>\n      <Preloader visible={visible} text="\u52a0\u8f7d\u4e2d..." />\n    </Container>\n  );\n};',
        Je =
          'import { Button, Preloader } from \'@wonder-ui/core\';\n\nconst loadData = () =>\n  new Promise((resolve) => {\n    setTimeout(() => {\n      resolve({});\n    }, 2000);\n  });\n\nexport default () => (\n  <Preloader onLoad={loadData}>\n    <Button variant="contained">Onload</Button>\n  </Preloader>\n);',
        Qe =
          'import { Button, showPreloader, hidePreloader } from \'@wonder-ui/core\';\n\nexport default () => {\n  const open = () => {\n    showPreloader();\n    setTimeout(() => {\n      hidePreloader();\n    }, 2000);\n  };\n\n  return (\n    <Button variant="contained" onClick={() => open()}>\n      Open\n    </Button>\n  );\n};',
        $e =
          "import {\n  Button,\n  showPreloader,\n  hidePreloader,\n  Space,\n  LinearProgress,\n  Typography,\n  WhiteSpace\n} from '@wonder-ui/core';\n\nexport default () => {\n  const open = (type: 'spinner' | 'circular' | 'custom') => {\n    if (type === 'spinner' || type === 'circular') {\n      showPreloader({\n        type,\n        text: `type - ${type}`\n      });\n    } else {\n      showPreloader({\n        indicator: (\n          <div style={{ width: 200, paddingTop: 20 }}>\n            <LinearProgress />\n            <WhiteSpace />\n            <Typography>\u52a0\u8f7d\u4e2d...</Typography>\n          </div>\n        )\n      });\n    }\n\n    setTimeout(() => {\n      hidePreloader();\n    }, 2000);\n  };\n\n  return (\n    <Space>\n      <Button variant=\"contained\" onClick={() => open('spinner')}>\n        Open(spinner)\n      </Button>\n\n      <Button variant=\"contained\" onClick={() => open('circular')}>\n        Open(circular)\n      </Button>\n\n      <Button variant=\"contained\" onClick={() => open('custom')}>\n        Open(custom)\n      </Button>\n    </Space>\n  );\n};",
        et =
          "import {\n  Page,\n  PullRefresh,\n  WhiteSpace,\n  Checkbox,\n  Container,\n  withDialog\n} from '@wonder-ui/core';\nimport * as React from 'react';\n\nexport default withDialog((props) => {\n  const [loading, setLoading] = React.useState(false);\n  const [needDialog, setDialogState] = React.useState(true);\n\n  return (\n    <Page title=\"PullRefresh\">\n      <PullRefresh\n        refreshing={loading}\n        loadingText=\"\u52a0\u8f7d\u4e2d\"\n        pullingText=\"\u4e0b\u62c9\u5373\u53ef\u5237\u65b0\"\n        loosingText=\"\u65bd\u653e\u5373\u53ef\u5237\u65b0\"\n        successText={needDialog ? '' : '\u52a0\u8f7d\u6210\u529f'}\n        onRefresh={() => {\n          setLoading(true);\n          setTimeout(() => {\n            setLoading(false);\n            if (needDialog) {\n              props.dialog.toast('\u52a0\u8f7d\u6210\u529f');\n            }\n          }, 2000);\n        }}\n      >\n        <Container>\n          <WhiteSpace />\n          <Checkbox\n            checked={needDialog}\n            onChange={(e) => {\n              setDialogState(e.target.checked);\n            }}\n          >\n            Toast \u63d0\u793a\n          </Checkbox>\n\n          <div style={{ paddingTop: 1500 }}>\u5e95\u90e8</div>\n        </Container>\n      </PullRefresh>\n    </Page>\n  );\n});",
        tt =
          'import { Page, PullRefresh, WhiteSpace, Container } from \'@wonder-ui/core\';\nimport * as React from \'react\';\n\nexport default () => {\n  const [loading, setLoading] = React.useState(false);\n\n  return (\n    <Page title="\u81ea\u5b9a\u4e49">\n      <PullRefresh\n        refreshing={loading}\n        loadingText="\u52a0\u8f7d\u4e2d"\n        pullingText="\u4e0b\u62c9\u5373\u53ef\u5237\u65b0"\n        loosingText="\u65bd\u653e\u5373\u53ef\u5237\u65b0"\n        successText={\'\u52a0\u8f7d\u6210\u529f\'}\n        slots={{\n          pulling: (props) => (\n            <img\n              src="https://img01.yzcdn.cn/vant/doge.png"\n              style={{ transform: `scale(${props.distance / 80})`, width: 180 }}\n            />\n          ),\n          loosing: () => (\n            <img\n              src="https://img01.yzcdn.cn/vant/doge.png"\n              style={{ width: 120 }}\n            />\n          ),\n          loading: () => (\n            <img\n              src="https://img01.yzcdn.cn/vant/doge-fire.jpg"\n              style={{ width: 120 }}\n            />\n          )\n        }}\n        onRefresh={() => {\n          setLoading(true);\n          setTimeout(() => {\n            setLoading(false);\n          }, 2000);\n        }}\n      >\n        <Container>\n          <WhiteSpace />\n          \u63d0\u793a\n        </Container>\n      </PullRefresh>\n    </Page>\n  );\n};',
        nt =
          'import { Radio, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <Space>\n      <Radio name="radio-demo">Primary</Radio>\n      <Radio name="radio-demo" color="secondary">\n        Secondary\n      </Radio>\n    </Space>\n    <Space>\n      <Radio name="radio-demo" disabled>\n        Primary\n      </Radio>\n      <Radio name="radio-demo" color="secondary" disabled>\n        Secondary\n      </Radio>\n    </Space>\n  </Space>\n);',
        it =
          "import { Row, Col, styled } from '@wonder-ui/core';\n\nconst Container = styled('div')`\n  .WuiCol-root:nth-of-type(odd) .demo-block {\n    background: #0586e9;\n  }\n`;\n\nconst Block = styled('div', { target: 'demo-block' })`\n  background: #0092ff;\n  padding: 16px;\n  color: #fff;\n  text-align: center;\n`;\n\nexport default () => (\n  <Container>\n    <Row>\n      <Col>\n        <Block>1 of 2</Block>\n      </Col>\n      <Col>\n        <Block>2 of 2</Block>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n  </Container>\n);",
        rt =
          "import { Row, Col, styled } from '@wonder-ui/core';\n\nconst Container = styled('div')`\n  .WuiCol-root:nth-of-type(odd) .demo-block {\n    background: #0586e9;\n  }\n`;\n\nconst Block = styled('div', { target: 'demo-block' })`\n  background: #0092ff;\n  padding: 16px;\n  color: #fff;\n  text-align: center;\n`;\n\nexport default () => (\n  <Container>\n    <Row rowCols={4}>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n    <Row rowCols={5}>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n\n    <Row rowCols={3}>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n  </Container>\n);",
        at =
          "import { Row, Col, styled } from '@wonder-ui/core';\n\nconst Container = styled('div')`\n  .WuiCol-root:nth-of-type(odd) .demo-block {\n    background: #0586e9;\n  }\n`;\n\nconst Block = styled('div', { target: 'demo-block' })`\n  background: #0092ff;\n  padding: 16px;\n  color: #fff;\n  text-align: center;\n`;\n\nexport default () => (\n  <Container>\n    <Row rowCols={{ sm: 2, md: 1, lg: 5 }}>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n\n    <Row>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n  </Container>\n);",
        ot =
          "import { Row, Col, styled } from '@wonder-ui/core';\n\nconst Container = styled('div')`\n  .WuiCol-root:nth-of-type(odd) .demo-block {\n    background: #0586e9;\n  }\n`;\n\nconst Block = styled('div', { target: 'demo-block' })`\n  background: #0092ff;\n  padding: 16px;\n  color: #fff;\n  text-align: center;\n`;\n\nexport default () => (\n  <Container>\n    <Row rowCols=\"auto\">\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n  </Container>\n);",
        dt =
          "import { Row, Col, styled } from '@wonder-ui/core';\n\nconst Container = styled('div')`\n  .WuiCol-root:nth-of-type(odd) .demo-block {\n    background: #0586e9;\n  }\n`;\n\nconst Block = styled('div', { target: 'demo-block' })`\n  background: #0092ff;\n  padding: 16px;\n  color: #fff;\n  text-align: center;\n`;\n\nexport default () => (\n  <Container>\n    <Row rowCols={6}>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n    <Row rowCols={3}>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n  </Container>\n);",
        lt =
          "import { Row, Col, styled } from '@wonder-ui/core';\n\nconst Container = styled('div')`\n  .WuiCol-root:nth-of-type(odd) .demo-block {\n    background: #0586e9;\n  }\n`;\n\nconst Block = styled('div', { target: 'demo-block' })`\n  background: #0092ff;\n  padding: 16px;\n  color: #fff;\n  text-align: center;\n`;\n\nexport default () => (\n  <Container>\n    <Row rowCols={6}>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col col={4}>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n    <Row rowCols={6}>\n      <Col>\n        <Block>1 of 4</Block>\n      </Col>\n      <Col offset={2}>\n        <Block>2 of 4</Block>\n      </Col>\n      <Col>\n        <Block>3 of 4</Block>\n      </Col>\n      <Col>\n        <Block>4 of 4</Block>\n      </Col>\n    </Row>\n  </Container>\n);",
        st =
          'import { Page, Searchbar, WhiteSpace, Navbar } from \'@wonder-ui/core\';\n\nexport default () => {\n  return (\n    <Page\n      title="\u641c\u7d22"\n      NavbarProps={{\n        children: <Searchbar placeholder="\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57" allowCancel />\n      }}\n      //\u53ea\u5c55\u793a\u641c\u7d22\u6761\n      // navbar={\n      //   <Searchbar\n      //     placeholder="\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57"\n      //     allowCancel\n      //     style={{ position: \'absolute\', top: 0 }}\n      //   />\n      // }\n    >\n      <WhiteSpace />\n\n      <Navbar title="navbar & search">\n        <Searchbar placeholder="\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57" allowCancel />\n      </Navbar>\n\n      <WhiteSpace />\n\n      <Searchbar placeholder="\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57" allowCancel fixCancelButton />\n    </Page>\n  );\n};',
        pt =
          "import * as React from 'react';\nimport {\n  Button,\n  Drawer,\n  Page,\n  Searchbar,\n  Typography,\n  Space\n} from '@wonder-ui/core';\nimport { Search } from '@wonder-ui/icons';\n\nexport default () => {\n  const [DrawerVisible, setDrawerVisible] = React.useState(false);\n\n  return (\n    <Page\n      navbar={\n        <Searchbar\n          style={{ position: 'absolute', top: 0 }}\n          icon={\n            <Space style={{ color: '#777' }} gap={3} verticalAlign=\"center\">\n              \u5730\u5740\n              <Search style={{ fontSize: '0.8rem' }} />\n            </Space>\n          }\n          placeholder=\"\u8bf7\u8f93\u5165\u5730\u5740\"\n          barRight={\n            <Button\n              style={{ whiteSpace: 'nowrap', marginRight: -12 }}\n              onClick={() => {\n                setDrawerVisible(true);\n              }}\n            >\n              \u7b5b\u9009\n            </Button>\n          }\n        />\n      }\n    >\n      <Typography style={{ padding: 12 }}>\u70b9\u51fb\u7b5b\u9009\u5c55\u5f00\u9762\u677f</Typography>\n      <Drawer\n        anchor=\"right\"\n        visible={DrawerVisible}\n        onClose={() => {\n          setDrawerVisible(false);\n        }}\n      >\n        <Page title=\"\u7b5b\u9009\" style={{ width: 200 }}>\n          \u7b5b\u9009\u9762\u677f\n        </Page>\n      </Drawer>\n    </Page>\n  );\n};",
        ct =
          'import { ArrowClockwise, Share } from \'@wonder-ui/icons\';\nimport {\n  ArrowForward,\n  IconButton,\n  Searchbar,\n  Space,\n  styled\n} from \'@wonder-ui/core\';\n\nconst MySearch = styled(Searchbar)`\n  .WuiSearchbar-bg {\n    background-color: rgb(79, 192, 141);\n  }\n  .WuiSvgIcon-root {\n    color: #fff;\n  }\n  .WuiSearchbar-input {\n    border-radius: 999px;\n  }\n`;\n\nexport default () => {\n  return (\n    <MySearch\n      InputProps={{\n        readOnly: true,\n        onClick: () => alert(\'Link to Search Page\')\n      }}\n      placeholder="\u70b9\u51fb\u8df3\u8f6c\u641c\u7d22\u9875"\n      barRight={\n        <Space nowrap gap={0}>\n          <IconButton>\n            <Share fontSize="small" />\n          </IconButton>\n\n          <IconButton edge="end">\n            <ArrowClockwise fontSize="small" />\n          </IconButton>\n        </Space>\n      }\n      barLeft={\n        <IconButton edge="start">\n          <ArrowForward direction="left" fontSize="small" />\n        </IconButton>\n      }\n    />\n  );\n};',
        ut =
          "import { Page, Paper, Skeleton } from '@wonder-ui/core';\n\nexport default () => (\n  <Page title=\"Skeleton\">\n    <Paper style={{ padding: '20px 0' }}>\n      <Skeleton title />\n      <Skeleton title />\n      <Skeleton title />\n    </Paper>\n  </Page>\n);",
        ft =
          "import { Page, Paper, Skeleton, Divider } from '@wonder-ui/core';\n\nexport default () => (\n  <Page title=\"Skeleton with avatar\">\n    <Paper style={{ padding: '20px 0' }}>\n      <Skeleton title avatar />\n      <Skeleton title avatar />\n      <Skeleton title avatar />\n    </Paper>\n  </Page>\n);",
        mt =
          'import { Button, Snackbar } from \'@wonder-ui/core\';\nimport { useToggle } from \'@wonder-ui/hooks\';\n\nexport default function Example() {\n  const [visible, { toggle }] = useToggle();\n\n  return (\n    <div>\n      <Button variant="contained" onClick={() => toggle()}>\n        \u7b80\u5355\u7684\u6d88\u606f\u6761\n      </Button>\n      <Snackbar\n        visible={visible}\n        message="\u7b80\u5355\u7684\u6d88\u606f\u6761"\n        autoHideDuration={3000}\n        onClose={() => toggle()}\n      />\n    </div>\n  );\n}',
        yt =
          "import * as React from 'react';\nimport { Button, Snackbar, SnackbarProps, Space } from '@wonder-ui/core';\n\nexport default function Example() {\n  const [state, setState] = React.useState<Partial<SnackbarProps>>({\n    visible: false,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    }\n  });\n\n  const { anchorOrigin = {}, visible } = state;\n\n  const handleClick = (newState: any) => () => {\n    setState({ visible: true, ...newState });\n  };\n\n  const handleClose = () => {\n    setState({ ...state, visible: false });\n  };\n\n  return (\n    <div>\n      <Space>\n        <Button\n          variant=\"contained\"\n          onClick={handleClick({\n            anchorOrigin: {\n              vertical: 'top',\n              horizontal: 'left'\n            }\n          })}\n        >\n          \u5de6\u4e0a\n        </Button>\n        <Button\n          variant=\"contained\"\n          onClick={handleClick({\n            anchorOrigin: {\n              vertical: 'top',\n              horizontal: 'center'\n            }\n          })}\n        >\n          \u4e2d\u4e0a\n        </Button>\n        <Button\n          variant=\"contained\"\n          onClick={handleClick({\n            anchorOrigin: {\n              vertical: 'top',\n              horizontal: 'right'\n            }\n          })}\n        >\n          \u53f3\u4e0a\n        </Button>\n        <Button\n          variant=\"contained\"\n          onClick={handleClick({\n            anchorOrigin: {\n              vertical: 'bottom',\n              horizontal: 'right'\n            }\n          })}\n        >\n          \u53f3\u4e0b\n        </Button>\n        <Button\n          variant=\"contained\"\n          onClick={handleClick({\n            anchorOrigin: {\n              vertical: 'bottom',\n              horizontal: 'center'\n            }\n          })}\n        >\n          \u4e2d\u4e0b\n        </Button>\n        <Button\n          variant=\"contained\"\n          onClick={handleClick({\n            anchorOrigin: {\n              vertical: 'bottom',\n              horizontal: 'left'\n            }\n          })}\n        >\n          \u5de6\u4e0b\n        </Button>\n        <Button\n          variant=\"contained\"\n          onClick={handleClick({\n            anchorOrigin: {\n              vertical: 'center',\n              horizontal: 'center'\n            }\n          })}\n        >\n          \u4e2d\n        </Button>\n      </Space>\n\n      <Snackbar\n        visible={visible}\n        message=\"\u7b80\u5355\u7684\u6d88\u606f\u6761\"\n        autoHideDuration={null}\n        anchorOrigin={anchorOrigin}\n        onClose={handleClose}\n        key={anchorOrigin.vertical + anchorOrigin.horizontal!}\n      />\n    </div>\n  );\n}",
        Et =
          "import { Button, withDialog } from '@wonder-ui/core';\n\nexport default withDialog((props) => {\n  const { dialog } = props;\n\n  return (\n    <Button\n      variant=\"contained\"\n      onClick={() => {\n        dialog.toast('\u4e00\u6761\u901a\u77e5\u4fe1\u606f');\n        dialog.toast('\u4e00\u6761\u901a\u77e5\u4fe1\u606f.');\n        dialog.toast('\u4e00\u6761\u901a\u77e5\u4fe1\u606f..');\n        dialog.toast('\u4e00\u6761\u901a\u77e5\u4fe1\u606f...');\n      }}\n    >\n      toast\n    </Button>\n  );\n});",
        vt =
          'import { Space, Button } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    \u95f4\u8ddd:\n    <Button variant="contained">Button</Button>\n    <Button variant="contained">Button</Button>\n  </Space>\n);',
        Ht =
          "import { Divider, Space, Typography } from '@wonder-ui/core';\n\nexport default () => (\n  <Space split={<Divider direction=\"vertical\" style={{ height: '1em' }} />}>\n    <Typography>text</Typography>\n    <Typography>text</Typography>\n    <Typography>text</Typography>\n  </Space>\n);",
        ht =
          "import { Space, Button } from '@wonder-ui/core';\n\nexport default () => (\n  <Space size={['small', 'large']}>\n    {new Array(22).fill(null).map((_, index) => (\n      <Button variant=\"contained\" key={index}>\n        Button\n      </Button>\n    ))}\n  </Space>\n);",
        gt =
          'import { Space, styled } from \'@wonder-ui/core\';\n\nconst SpaceDemo = styled(Space)`\n  background: #eee;\n`;\n\nconst Box = styled(\'div\')`\n  background: rgb(0, 120, 212);\n  color: rgb(255, 255, 255);\n  display: flex;\n  height: 50px;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n`;\n\nexport default () => (\n  <Space direction="vertical">\n    Start:\n    <SpaceDemo horizontalAlign="start">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n    Center:\n    <SpaceDemo horizontalAlign="center">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n    End:\n    <SpaceDemo horizontalAlign="end">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n    Space around:\n    <SpaceDemo horizontalAlign="space-around">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n    Space between:\n    <SpaceDemo horizontalAlign="space-between">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n    Space evenly:\n    <SpaceDemo horizontalAlign="space-evenly">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n  </Space>\n);',
        bt =
          'import { Space, styled } from \'@wonder-ui/core\';\n\nconst SpaceDemo = styled(Space)`\n  background: #eee;\n  height: 100px;\n`;\n\nconst Box = styled(\'div\')`\n  background: rgb(0, 120, 212);\n  color: rgb(255, 255, 255);\n  display: flex;\n  height: 50px;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n`;\n\nexport default () => (\n  <Space direction="vertical">\n    <div>Top:</div>\n    <SpaceDemo verticalAlign="start">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n    Center:\n    <SpaceDemo verticalAlign="center">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n    Bottom:\n    <SpaceDemo verticalAlign="end">\n      <Box>1</Box>\n      <Box>2</Box>\n      <Box>3</Box>\n    </SpaceDemo>\n  </Space>\n);',
        Mt =
          'import { Space, styled } from \'@wonder-ui/core\';\n\nconst SpaceDemo = styled(Space)`\n  background: #eee;\n`;\n\nconst Box = styled(\'div\')`\n  background: rgb(0, 120, 212);\n  color: rgb(255, 255, 255);\n  display: flex;\n  height: 50px;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n`;\n\nexport default () => (\n  <Space direction="vertical">\n    Start:\n    <SpaceDemo direction="vertical" horizontalAlign="start">\n      <Box>1</Box>\n      <Box>2</Box>\n    </SpaceDemo>\n    <div>Center:</div>\n    <SpaceDemo direction="vertical" horizontalAlign="center">\n      <Box>1</Box>\n      <Box>2</Box>\n    </SpaceDemo>\n    End:\n    <SpaceDemo direction="vertical" horizontalAlign="end">\n      <Box>1</Box>\n      <Box>2</Box>\n    </SpaceDemo>\n  </Space>\n);',
        Lt =
          'import { Space, styled } from \'@wonder-ui/core\';\n\nconst SpaceDemo = styled(Space)`\n  background: #eee;\n  height: 100px;\n`;\n\nconst Box = styled(\'div\')`\n  background: rgb(0, 120, 212);\n  color: rgb(255, 255, 255);\n  display: flex;\n  height: 50px;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n`;\n\nexport default () => (\n  <Space direction="vertical">\n    Start:\n    <SpaceDemo direction="vertical" verticalAlign="start">\n      <Box>1</Box>\n    </SpaceDemo>\n    <div>Center:</div>\n    <SpaceDemo direction="vertical" verticalAlign="center">\n      <Box>1</Box>\n    </SpaceDemo>\n    End:\n    <SpaceDemo direction="vertical" verticalAlign="end">\n      <Box>1</Box>\n    </SpaceDemo>\n  </Space>\n);',
        Tt =
          'import { List, ListItem, ListItemText, Page, Stepper } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page title="Stepper">\n    <List>\n      <ListItem divider extra={<Stepper />}>\n        <ListItemText>\u9ed8\u8ba4</ListItemText>\n      </ListItem>\n      <ListItem divider extra={<Stepper step={3} />}>\n        <ListItemText>\u6b65\u957f\u8bbe\u7f6e</ListItemText>\n      </ListItem>\n      <ListItem divider extra={<Stepper min={1} max={8} />}>\n        <ListItemText>\u9650\u5236\u8f93\u5165\u8303\u56f4</ListItemText>\n      </ListItem>\n      <ListItem divider extra={<Stepper step={1} min={1} />}>\n        <ListItemText>\u9650\u5236\u8f93\u5165\u6574\u6570</ListItemText>\n      </ListItem>\n      <ListItem divider extra={<Stepper disabled />}>\n        <ListItemText>\u7981\u7528\u72b6\u6001</ListItemText>\n      </ListItem>\n      <ListItem divider extra={<Stepper disableInput />}>\n        <ListItemText>\u7981\u7528\u8f93\u5165\u6846</ListItemText>\n      </ListItem>\n      <ListItem divider extra={<Stepper step={0.1} min={1} />}>\n        <ListItemText>\u56fa\u5b9a\u5c0f\u6570\u4f4d\u6570</ListItemText>\n      </ListItem>\n      <ListItem extra={<Stepper hideInput />}>\n        <ListItemText>\u9690\u85cf\u8f93\u5165\u6846</ListItemText>\n      </ListItem>\n    </List>\n  </Page>\n);',
        Ct =
          "import * as React from 'react';\nimport { Badge, Space, Stepper, styled } from '@wonder-ui/core';\n\nconst sizeValues = { sm: 20, md: 30, lg: 40 };\n\ntype SizeKey = keyof typeof sizeValues;\n\nconst UIStepper = styled(Stepper)<{ size?: SizeKey }>`\n  .WuiStepper-button {\n    border-radius: 50%;\n    background-color: ${({ theme }) => theme.palette.primary.main};\n    color: #fff;\n    width: ${({ size = 'md' }) => sizeValues[size] + 'px'};\n    height: ${({ size = 'md' }) => sizeValues[size] + 'px'};\n  }\n  .WuiStepper-input {\n    height: ${({ size = 'md' }) => sizeValues[size] + 'px'};\n  }\n\n  .WuiStepper-minus {\n    background-color: ${({ theme }) => theme.palette.secondary.main};\n  }\n\n  .WuiStepper-input {\n    background-color: transparent;\n  }\n`;\n\nexport default () => {\n  const [value, setValue] = React.useState(0);\n  const [value2, setValue2] = React.useState(0);\n  return (\n    <Space gap={20} direction=\"vertical\">\n      <UIStepper\n        size=\"sm\"\n        value={value}\n        hideInput={value === 0}\n        hideMinusButton={value === 0}\n        onChange={(val) => {\n          setValue(val);\n        }}\n      />\n\n      <Badge text={value2} color=\"danger\" hideContent={value2 == 0}>\n        <UIStepper\n          value={value2}\n          hideInput\n          hideMinusButton\n          onChange={(val) => {\n            setValue2(val);\n          }}\n        />\n      </Badge>\n\n      <Badge text={value2} color=\"danger\" hideContent={value2 == 0}>\n        <UIStepper\n          size=\"lg\"\n          value={value2}\n          hideInput\n          hideMinusButton\n          onChange={(val) => {\n            setValue2(val);\n          }}\n        />\n      </Badge>\n    </Space>\n  );\n};",
        Dt =
          'import { Button, Sticky } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Sticky offsetTop={50}>\n    <Button variant="contained">\u57fa\u672c\u4f7f\u7528</Button>\n  </Sticky>\n);',
        wt =
          'import { Button, Sticky } from \'@wonder-ui/core\';\n\nexport default () => (\n  <div style={{ marginLeft: 100 }}>\n    <Sticky offsetTop={64}>\n      <Button variant="contained">\u5438\u9876\u8ddd\u79bb</Button>\n    </Sticky>\n  </div>\n);',
        It =
          "import { Button, Sticky, styled } from '@wonder-ui/core';\nimport * as React from 'react';\n\nconst Box = styled('div')`\n  border: 1px solid blue;\n  padding-left: 200px;\n  height: 150px;\n`;\n\nexport default () => {\n  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);\n\n  return (\n    <Box\n      ref={(node) => {\n        setContainer(node);\n      }}\n    >\n      <Sticky container={container} offsetTop={64} zIndex={30}>\n        <Button variant=\"contained\">\u6307\u5b9a\u5bb9\u5668</Button>\n      </Sticky>\n    </Box>\n  );\n};",
        xt =
          'import { SvgIcon, SvgIconProps, styled } from \'@wonder-ui/core\';\n\nconst IconStoreRoot = styled(SvgIcon)<SvgIconProps>(({ theme }) => ({\n  color: theme.palette.colors.blue.A200\n}));\n\nexport default () => (\n  <IconStoreRoot fontSize="large" titleAccess="store" viewBox="0 0 24 24">\n    <path d="M19 4a2 2 0 012 2v4a2 2 0 01-.999 1.732L20 19h1a1 1 0 010 2H3a1 1 0 010-2h1v-7.268A2 2 0 013 10V6a2 2 0 012-2h14zm-1 8H6v7h2.5v-4a1 1 0 011-1h5a1 1 0 011 1v4H18v-7zm-4.5 4h-3v3h3v-3zM19 6H5v4h14V6z" />\n  </IconStoreRoot>\n);',
        Pt =
          "import { Swipe, styled } from '@wonder-ui/core';\n\nconst Image = styled('div')`\n  color: #fff;\n  background-color: #39a9ed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 200px;\n`;\n\nexport default () => {\n  return (\n    <Swipe autoplay>\n      <Image>1</Image>\n      <Image>2</Image>\n      <Image>3</Image>\n    </Swipe>\n  );\n};",
        Rt =
          "import { Swipe, styled } from '@wonder-ui/core';\nimport { useMount } from '@wonder-ui/hooks';\n\nconst ImageNode = styled('div')`\n  color: #fff;\n  background-color: #39a9ed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 200px;\n`;\n\nconst Image = (props: any) => {\n  useMount(() => {\n    console.log('Mouned');\n  });\n\n  return <ImageNode>{props.children}</ImageNode>;\n};\n\nexport default () => {\n  return (\n    <Swipe loop={false}>\n      <Image>1</Image>\n      <Image>2</Image>\n      <Image>3</Image>\n      <Image>4</Image>\n      <Image>5</Image>\n      <Image>6</Image>\n    </Swipe>\n  );\n};",
        St =
          "import { Swipe, styled } from '@wonder-ui/core';\n\nconst Image = styled('div')`\n  color: #fff;\n  background-color: #39a9ed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 200px;\n`;\n\nexport default () => {\n  return (\n    <Swipe autoplay vertical style={{ height: 200 }}>\n      <Image>1</Image>\n      <Image>2</Image>\n      <Image>3</Image>\n    </Swipe>\n  );\n};",
        kt =
          "import { Swipe, styled } from '@wonder-ui/core';\n\nconst Image = styled('div')`\n  color: #fff;\n  background-color: #39a9ed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 200px;\n\n  .WuiSwipe-item:nth-child(even) & {\n    background-color: #39ed81;\n  }\n`;\n\nexport default () => {\n  return (\n    <Swipe loop={false} width={260}>\n      <Image>1</Image>\n      <Image>2</Image>\n      <Image>3</Image>\n    </Swipe>\n  );\n};",
        Bt =
          "import { Swipe, styled } from '@wonder-ui/core';\n\nconst Image = styled('div')`\n  color: #fff;\n  background-color: #39a9ed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 200px;\n`;\n\nconst Indicator = styled('div')`\n  position: absolute;\n  z-index: 10;\n  bottom: 0;\n  right: 0;\n  padding: 6px 12px;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.1);\n  font-size: 12px;\n`;\n\nexport default () => {\n  return (\n    <Swipe\n      autoplay\n      onRenderIndicator={(activeIndex) => (\n        <Indicator>{activeIndex + 1}/3</Indicator>\n      )}\n    >\n      <Image>1</Image>\n      <Image>2</Image>\n      <Image>3</Image>\n    </Swipe>\n  );\n};",
        At =
          "import * as React from 'react';\nimport {\n  TabContext,\n  TabPane,\n  Typography,\n  Divider,\n  Tab,\n  Tabs,\n  styled\n} from '@wonder-ui/core';\n\nconst Content = styled('div')`\n  padding: 16px;\n`;\n\nexport default () => {\n  const [value, setValue] = React.useState(1);\n\n  return (\n    <TabContext value={value}>\n      <Tabs>\n        <Tab>Item-1</Tab>\n        <Tab>Item-2</Tab>\n        <Tab>Item-3</Tab>\n      </Tabs>\n      <Divider />\n\n      <TabPane value={1}>\n        <Content>\n          <Typography>Content of Tab Pane 1</Typography>\n        </Content>\n      </TabPane>\n      <TabPane value={2}>\n        <Content>\n          <Typography>Content of Tab Pane 2</Typography>\n        </Content>\n      </TabPane>\n      <TabPane value={3}>\n        <Content>\n          <Typography>Content of Tab Pane 3</Typography>\n        </Content>\n      </TabPane>\n    </TabContext>\n  );\n};",
        Ot =
          "import * as React from 'react';\nimport {\n  TabContext,\n  TabPane,\n  Button,\n  ButtonGroup,\n  WhiteSpace\n} from '@wonder-ui/core';\n\n// import Tab from '../Tab';\n// import Tabs from '../Tabs';\n\nexport default () => {\n  const [value, setValue] = React.useState(1);\n\n  return (\n    <div>\n      <ButtonGroup>\n        <Button onClick={() => setValue(1)} checked={value === 1}>\n          Item 1\n        </Button>\n        <Button onClick={() => setValue(2)} checked={value === 2}>\n          Item 2\n        </Button>\n        <Button onClick={() => setValue(3)} checked={value === 3}>\n          Item 3\n        </Button>\n      </ButtonGroup>\n      <WhiteSpace />\n      <TabContext value={value}>\n        <TabPane value={1}>Content of Tab Pane 1</TabPane>\n        <TabPane value={2}>Content of Tab Pane 2</TabPane>\n        <TabPane value={3}>Content of Tab Pane 3</TabPane>\n      </TabContext>\n    </div>\n  );\n};",
        Ft =
          "import * as React from 'react';\nimport {\n  TabContext,\n  TabPane,\n  Button,\n  ButtonGroup,\n  WhiteSpace\n} from '@wonder-ui/core';\n\nexport default () => {\n  const [value, setValue] = React.useState(1);\n\n  return (\n    <div>\n      <ButtonGroup ButtonProps={{ variant: 'outlined' }}>\n        <Button onClick={() => setValue(1)} checked={value === 1}>\n          Item 1\n        </Button>\n        <Button onClick={() => setValue(2)} checked={value === 2}>\n          Item 2\n        </Button>\n        <Button onClick={() => setValue(3)} checked={value === 3}>\n          Item 3\n        </Button>\n      </ButtonGroup>\n      <WhiteSpace />\n      <TabContext value={value}>\n        <TabPane value={1}>Content of Tab Pane 1</TabPane>\n        <TabPane value={2}>Content of Tab Pane 2</TabPane>\n        <TabPane value={3}>Content of Tab Pane 3</TabPane>\n      </TabContext>\n    </div>\n  );\n};",
        jt =
          'import { Space, Tag } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Tag>Default</Tag>\n    <Tag color="primary">Primary</Tag>\n    <Tag color="secondary">Secondary</Tag>\n    <Tag color="success">Success</Tag>\n    <Tag color="danger">Danger</Tag>\n    <Tag color="warning">Warning</Tag>\n    <Tag color="info">Info</Tag>\n\n    <Tag color="primary" variant="contained">\n      Primary\n    </Tag>\n    <Tag color="secondary" variant="contained">\n      Secondary\n    </Tag>\n    <Tag color="success" variant="contained">\n      Success\n    </Tag>\n    <Tag color="danger" variant="contained">\n      Danger\n    </Tag>\n    <Tag color="warning" variant="contained">\n      Warning\n    </Tag>\n    <Tag color="info" variant="contained">\n      Info\n    </Tag>\n  </Space>\n);',
        Kt =
          "import { Button, Space, Tag } from '@wonder-ui/core';\nimport { useSelections } from '@wonder-ui/hooks';\nimport { createArray } from '@wonder-ui/utils';\n\nconst tags = createArray(7, (index) => index);\n\nexport default function Example() {\n  const { selected, toggle, selectAll } = useSelections(tags, tags);\n\n  return (\n    <Space direction=\"vertical\">\n      <Button variant=\"contained\" onClick={selectAll}>\n        Reset\n      </Button>\n\n      <Space>\n        {selected.map((tag, index) => (\n          <Tag closable key={index} onClose={() => toggle(tag)}>\n            Tag {tag}\n          </Tag>\n        ))}\n      </Space>\n    </Space>\n  );\n}",
        Vt =
          "import { Space, CheckableTag } from '@wonder-ui/core';\nimport { useSelections } from '@wonder-ui/hooks';\n\nconst tags = ['Movies', 'Books', 'Music', 'Sports'];\n\nexport default () => {\n  const { selected, unSelect, isSelected, select } = useSelections(tags);\n\n  return (\n    <Space direction=\"vertical\">\n      <div>Selected: {selected.join(',')}</div>\n      <Space>\n        <div>Categories:</div>\n        {tags.map((tag, index) => (\n          <CheckableTag\n            key={index}\n            checked={isSelected(tag)}\n            onChange={(checked) => {\n              if (checked) {\n                select(tag);\n              } else {\n                unSelect(tag);\n              }\n            }}\n          >\n            {tag}\n          </CheckableTag>\n        ))}\n      </Space>\n    </Space>\n  );\n};",
        Ut =
          'import { Space, Toggle, Container } from \'@wonder-ui/core\';\n\nexport default function Example() {\n  return (\n    <Container>\n      <Space direction="vertical">\n        <Space>\n          <Toggle defaultChecked />\n          <Toggle defaultChecked color="secondary" />\n          <Toggle defaultChecked color="danger" />\n          <Toggle defaultChecked color="warning" />\n          <Toggle defaultChecked color="info" />\n        </Space>\n\n        <Space>\n          <Toggle disabled defaultChecked />\n          <Toggle disabled defaultChecked color="secondary" />\n          <Toggle disabled defaultChecked color="danger" />\n          <Toggle disabled defaultChecked color="warning" />\n          <Toggle disabled defaultChecked color="info" />\n        </Space>\n      </Space>\n    </Container>\n  );\n}',
        Wt =
          'import { Container, Space, Toggle } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Container>\n    <Space>\n      <Toggle />\n      <Toggle size="small" />\n    </Space>\n  </Container>\n);',
        Gt =
          'import { Container, Toggle, Space, useTheme } from \'@wonder-ui/core\';\nimport {\n  ToggleOff,\n  ToggleOn,\n  CheckCircle,\n  CheckCircleFill,\n  CheckSquare,\n  CheckSquareFill\n} from \'@wonder-ui/icons\';\n\nexport default () => {\n  const theme = useTheme();\n  return (\n    <Container>\n      <Space>\n        <Toggle\n          style={{ color: theme.palette.colors.blue[300] }}\n          icon={<ToggleOff fontSize="large" />}\n          checkedIcon={<ToggleOn fontSize="large" />}\n        />\n        <Toggle\n          style={{ color: theme.palette.colors.pink[400] }}\n          icon={<CheckCircle />}\n          checkedIcon={<CheckCircleFill />}\n        />\n        <Toggle\n          style={{ color: theme.palette.colors.orange[600] }}\n          icon={<CheckSquare />}\n          checkedIcon={<CheckSquareFill />}\n        />\n      </Space>\n    </Container>\n  );\n};',
        zt =
          'import { Button, Space, Tooltip, Typography } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <Tooltip title="Button tooltip text">\n      <Button variant="contained">\u6309\u94ae\u63d0\u793a</Button>\n    </Tooltip>\n    <Tooltip title="Button tooltip text" arrow placement="auto">\n      <Button variant="contained">\u6309\u94ae\u63d0\u793a(arrow)</Button>\n    </Tooltip>\n  </Space>\n);',
        _t =
          'import { Typography } from \'@wonder-ui/core\';\n\nexport default () => (\n  <div>\n    <Typography variant="h1" gutterBottom>\n      h1.Heading\n    </Typography>\n    <Typography variant="h2" gutterBottom>\n      h2.Heading\n    </Typography>\n    <Typography variant="h3" gutterBottom>\n      h3.Heading\n    </Typography>\n    <Typography variant="h4" gutterBottom>\n      h4.Heading\n    </Typography>\n    <Typography variant="h5" gutterBottom>\n      h5.Heading\n    </Typography>\n    <Typography variant="h6" gutterBottom>\n      h6.Heading\n    </Typography>\n\n    <Typography variant="subtitle1">\n      subtitle1.Subtitle Subtitle Subtitle Subtitle\n    </Typography>\n    <Typography variant="subtitle2">\n      subtitle2.Subtitle Subtitle Subtitle Subtitle\n    </Typography>\n\n    <Typography variant="body1">body1.Text Text Text Text</Typography>\n    <Typography variant="body2">body2.Text Text Text Text</Typography>\n  </div>\n);',
        Nt =
          'import { Typography } from \'@wonder-ui/core\';\n\nexport default function Example() {\n  return (\n    <div>\n      <Typography paragraph>paragraph \u5e26\u6709\u4e0b\u8fb9\u8ddd</Typography>\n      <Typography gutterBottom>gutterBottom \u5e26\u6709\u5c0f\u4e00\u70b9\u7684\u4e0b\u8fb9\u8ddd</Typography>\n      <Typography noWrap style={{ width: 150 }}>\n        \u8d85\u51fa\u90e8\u5206\u9690\u85cf, \u8d85\u51fa\u90e8\u5206\u9690\u85cf, \u8d85\u51fa\u90e8\u5206\u9690\u85cf, \u8d85\u51fa\u90e8\u5206\u9690\u85cf,\n      </Typography>\n      <Typography align="center">align \u5bf9\u9f50\u6587\u672c</Typography>\n    </div>\n  );\n}',
        qt =
          'import { WhiteSpace, Divider, styled } from \'@wonder-ui/core\';\n\nconst WhiteSpaceDemo = styled(WhiteSpace)({\n  background: \'#0092ff\'\n});\n\nexport default () => (\n  <div>\n    <Divider>Size sm</Divider>\n    <WhiteSpaceDemo size="small" />\n\n    <Divider>Size md (default)</Divider>\n    <WhiteSpaceDemo />\n\n    <Divider>Size lg</Divider>\n    <WhiteSpaceDemo size="large" />\n  </div>\n);',
        Yt =
          'import {\n  WhiteSpace,\n  List,\n  ListItem,\n  ListHeader,\n  ListItemText,\n  Page\n} from \'@wonder-ui/core\';\n\nexport default () => (\n  <Page>\n    <List>\n      <ListHeader>WhiteSpace</ListHeader>\n      <ListItem divider>\n        <ListItemText>Item 1</ListItemText>\n      </ListItem>\n      <ListItem>\n        <ListItemText>Item 2</ListItemText>\n      </ListItem>\n      <WhiteSpace component="li" />\n      <ListItem>\n        <ListItemText>Item 3</ListItemText>\n      </ListItem>\n    </List>\n  </Page>\n);',
        Zt =
          'import { CircularProgress, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space>\n    <CircularProgress color="primary" />\n    <CircularProgress color="secondary" />\n    <CircularProgress color="success" />\n    <CircularProgress color="danger" />\n    <CircularProgress color="warning" />\n    <CircularProgress color="info" />\n    <CircularProgress color="light" />\n    <CircularProgress color="dark" />\n  </Space>\n);',
        Xt =
          "import { CircularProgress, Space } from '@wonder-ui/core';\n\nexport default () => (\n  <Space>\n    <CircularProgress />\n    <CircularProgress size={24} />\n  </Space>\n);",
        Jt =
          'import * as React from \'react\';\nimport { Space, CircularProgress } from \'@wonder-ui/core\';\nimport { useInterval } from \'@wonder-ui/hooks\';\n\nexport default () => {\n  const [count, setCount] = React.useState(0);\n\n  useInterval(() => {\n    if (count < 100) {\n      setCount(count + 10);\n    } else {\n      setCount(0);\n    }\n  }, 800);\n\n  return (\n    <Space>\n      <CircularProgress variant="determinate" value={20} />\n      <CircularProgress variant="determinate" value={40} />\n      <CircularProgress variant="determinate" value={60} />\n      <CircularProgress variant="determinate" value={80} />\n      <CircularProgress variant="determinate" value={100} />\n      <CircularProgress\n        variant="determinate"\n        size={100}\n        thickness={1}\n        value={count}\n        label={`${count}%`}\n      />\n    </Space>\n  );\n};',
        Qt =
          'import { LinearProgress, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <LinearProgress variant="indeterminate" color="primary" />\n  </Space>\n);',
        $t =
          'import { LinearProgress, Space } from \'@wonder-ui/core\';\n\nexport default () => (\n  <Space direction="vertical">\n    <LinearProgress variant="determinate" value={20} color="primary" />\n    <LinearProgress variant="determinate" value={40} color="secondary" />\n    <LinearProgress variant="determinate" value={60} color="success" />\n    <LinearProgress variant="determinate" value={80} color="danger" />\n    <LinearProgress variant="determinate" value={80} color="warning" />\n    <LinearProgress variant="determinate" value={80} color="info" />\n  </Space>\n);',
        en =
          'import { LinearProgress } from \'@wonder-ui/core\';\n\nexport default () => (\n  <LinearProgress variant="determinate" value={80} color="primary" animated />\n);',
        tn =
          'import { LinearProgress, Space } from \'@wonder-ui/core\';\nimport * as React from \'react\';\n\nconst intervalDelay = 100;\nconst intervalIncrement = 0.01;\n\nexport default () => {\n  const [percentComplete, setPercentComplete] = React.useState(0);\n\n  React.useEffect(() => {\n    const id = setInterval(() => {\n      setPercentComplete((intervalIncrement + percentComplete) % 1);\n    }, intervalDelay);\n    return () => {\n      clearInterval(id);\n    };\n  });\n  return (\n    <Space direction="vertical">\n      <LinearProgress\n        animated\n        variant="determinate"\n        value={percentComplete * 100}\n        color="primary"\n      >\n        {Math.round(percentComplete * 100)}%\n      </LinearProgress>\n    </Space>\n  );\n};';
      t['default'] = {
        'activityindicator-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'DEPv'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: d } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'activityindicator-demo1',
          },
        },
        'backtop-basic': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'qUdi'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: l } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            iframe: 'true',
            identifier: 'backtop-basic',
          },
        },
        'backtop-customize': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'EF91'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: s } },
            dependencies: {
              '@wonder-ui/icons': { version: '2.0.2' },
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'backtop-customize',
          },
        },
        'backdrop-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'BZwV'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: p } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'backdrop-demo1',
          },
        },
        'badge-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'zYl5'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: c } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'badge-demo1',
          },
        },
        'badge-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'XpGw'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: u } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'badge-demo2',
          },
        },
        'badge-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '7MAH'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: f } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'badge-demo3',
          },
        },
        'badge-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Daiw'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: m } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'badge-demo4',
          },
        },
        'badge-demo5': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'TPBt'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: y } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'badge-demo5',
          },
        },
        'button-colors': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'A9T5'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: E } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'button-colors',
          },
        },
        'button-tags': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'R33j'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: v } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'button-tags',
          },
        },
        'button-outlined': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'xF4p'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: H } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'button-outlined',
          },
        },
        'button-text': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'vFXa'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: h } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'button-text',
          },
        },
        'button-shape': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'YqZb'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: g } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'button-shape',
          },
        },
        'button-size': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ShZ6'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: b } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'button-size',
          },
        },
        'button-block': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'gV5K'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: M } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'button-block',
          },
        },
        'button-disabled': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'F/Dv'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: L } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'button-disabled',
          },
        },
        'buttongroup-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'G847'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: T } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'buttongroup-demo1',
          },
        },
        'buttongroup-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '6p/f'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: C } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'buttongroup-demo2',
          },
        },
        'buttongroup-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'CxlY'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: D } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'buttongroup-demo3',
          },
        },
        'buttongroup-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'P9dj'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: w } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'buttongroup-demo4',
          },
        },
        'buttongroup-demo5': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'h/wS'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: I } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'buttongroup-demo5',
          },
        },
        'cascader-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ppDA'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: x } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description: '',
            identifier: 'cascader-demo1',
          },
        },
        'checkbox-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '1Ar9'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: P } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'checkbox-demo1',
          },
        },
        'checkbox-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'oPmP'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: R } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            background: '#f5f5f5',
            identifier: 'checkbox-demo2',
          },
        },
        'checkbox-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'AWKq'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: S } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            background: '#f5f5f5',
            identifier: 'checkbox-demo3',
          },
        },
        'collapse-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'thaS'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: k } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'collapse-demo1',
          },
        },
        'collapse-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'jR8Y'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: B } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'collapse-demo2',
          },
        },
        'collapse-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'vgLr'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: A } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'collapse-demo3',
          },
        },
        'countdown-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'rA3m'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: O } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u7528\u8fc7<code>formattedRes</code>\u8fd4\u56de\u7684\u6570\u503c\u5b9a\u4e49\u81ea\u5df1\u9700\u8981\u7684\u683c\u5f0f</p></div>',
            identifier: 'countdown-demo1',
          },
        },
        'countdown-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ENpr'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: F } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u624b\u52a8\u63a7\u5236\u72b6\u6001\u5b9e\u73b0\u4e00\u4e2a\u77ed\u4fe1\u53d1\u9001\u6309\u94ae</p></div>',
            identifier: 'countdown-demo2',
          },
        },
        'datepicker-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'A5kc'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: j } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              dayjs: { version: '1.10.5' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'datepicker-demo1',
          },
        },
        'datepicker-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'z69Y'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: K } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              dayjs: { version: '1.10.5' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'datepicker-demo2',
          },
        },
        'timepicker-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'GpJG'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: V } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              dayjs: { version: '1.10.5' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'timepicker-demo1',
          },
        },
        'dialog-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'kKOs'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: U } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'dialog-demo1',
          },
        },
        'dialog-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'palp'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: W } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'dialog-demo2',
          },
        },
        'withdialog-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '40Xy'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: G } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'withdialog-demo2',
          },
        },
        'withdialog-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'kWmP'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: z } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'withdialog-demo1',
          },
        },
        'dialogcontent-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'eXZk'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: _ } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'dialogcontent-demo1',
          },
        },
        'divider-horizontal': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'dPHl'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: N } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'divider-horizontal',
          },
        },
        'divider-horizontal-title': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'HUHy'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: q } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'divider-horizontal-title',
          },
        },
        'divider-vertical-title': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'XiJA'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Y } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'divider-vertical-title',
          },
        },
        'divider-vertical': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Pla+'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Z } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'divider-vertical',
          },
        },
        'drawer-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '9fIR'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: X } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'drawer-demo1',
          },
        },
        'dropdownmenu-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'NeMZ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: J } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'dropdownmenu-demo1',
          },
        },
        'dropdownmenu-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'c0y0'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Q } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'dropdownmenu-demo2',
          },
        },
        'dropdownmenu-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ueFs'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: $ } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'dropdownmenu-demo3',
          },
        },
        'empty-basic': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '4Yq8'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ee } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'empty-basic',
          },
        },
        'empty-customize': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'CQZ4'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: te } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'empty-customize',
          },
        },
        'input-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'zxqW'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ne } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u57fa\u672c\u4f7f\u7528</p></div>',
            identifier: 'input-demo1',
          },
        },
        'input-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'C4vg'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ie } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u5e26\u79fb\u9664\u56fe\u6807',
            description:
              '<div class="markdown"><p>\u70b9\u51fb\u6e05\u7a7a\u5185\u5bb9</p></div>',
            identifier: 'input-demo2',
          },
        },
        'input-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'nAvb'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: re } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            title: '\u524d\u7f00&\u540e\u7f00',
            description:
              '<div class="markdown"><p>\u5728\u8f93\u5165\u6846\u4e0a\u6dfb\u52a0\u524d\u7f00\u6216\u540e\u7f00\u56fe\u6807\u3002</p></div>',
            identifier: 'input-demo3',
          },
        },
        'input-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'sVUO'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ae } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u65e0\u8fb9\u6846',
            description:
              '<div class="markdown"><p>\u65e0\u8fb9\u6846</p></div>',
            identifier: 'input-demo4',
          },
        },
        'input-demo5': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '3tgb'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: oe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u9650\u5236\u8f93\u5165\u957f\u5ea6',
            description:
              '<div class="markdown"><p>\u9650\u5236\u8f93\u5165\u957f\u5ea6</p></div>',
            identifier: 'input-demo5',
          },
        },
        'input-demo6': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'r5/N'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: de } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'input-demo6',
          },
        },
        'input-demo7': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '7TMd'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: le } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              'util-helpers': { version: '4.0.1' },
              react: { version: '>=16.8.0' },
            },
            title: '\u683c\u5f0f\u5316\u663e\u793a',
            description: '',
            identifier: 'input-demo7',
          },
        },
        'input-demo8': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'lHSb'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: se } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-26' },
            },
            title: '\u805a\u7126',
            description:
              '<div class="markdown"><p>\u805a\u7126\u989d\u5916\u914d\u7f6e\u5c5e\u6027\u3002</p></div>',
            identifier: 'input-demo8',
          },
        },
        'input-demo9': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'sIxB'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: pe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u5bc6\u7801\u6846',
            description:
              '<div class="markdown"><p>\u70b9\u51fb\u6e05\u7a7a\u5185\u5bb9</p></div>',
            identifier: 'input-demo9',
          },
        },
        'inputnumber-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ZjEV'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ce } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u57fa\u672c\u4f7f\u7528</p></div>',
            identifier: 'inputnumber-demo1',
          },
        },
        'inputnumber-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'V9ZL'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ue } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u683c\u5f0f\u5316\u5c55\u793a',
            description:
              '<div class="markdown"><p>\u901a\u8fc7 <code>formatter</code> \u683c\u5f0f\u5316\u6570\u5b57\uff0c\u4ee5\u5c55\u793a\u5177\u6709\u5177\u4f53\u542b\u4e49\u7684\u6570\u636e\uff0c\u5f80\u5f80\u9700\u8981\u914d\u5408 <code>parser</code> \u4e00\u8d77\u4f7f\u7528\u3002</p></div>',
            identifier: 'inputnumber-demo2',
          },
        },
        'inputnumber-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'INbC'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: fe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u9ad8\u7cbe\u5ea6\u5c0f\u6570',
            description:
              '<div class="markdown"><p>\u901a\u8fc7 <code>stringMode</code> \u5f00\u542f\u9ad8\u7cbe\u5ea6\u5c0f\u6570\u652f\u6301\uff0c<code>onChange</code> \u4e8b\u4ef6\u5c06\u8fd4\u56de string \u7c7b\u578b\u3002\u5bf9\u4e8e\u65e7\u7248\u6d4f\u89c8\u5668\uff0c\u4f60\u9700\u8981 BigInt polyfill\u3002</p></div>',
            identifier: 'inputnumber-demo3',
          },
        },
        'inputnumber-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '/euP'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: me } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-26' },
            },
            title: '\u952e\u76d8\u884c\u4e3a',
            description:
              '<div class="markdown"><p>\u4f7f\u7528 <code>keyboard</code> \u5c5e\u6027\u53ef\u4ee5\u63a7\u5236\u952e\u76d8\u884c\u4e3a\u3002</p></div>',
            identifier: 'inputnumber-demo4',
          },
        },
        'inputnumber-demo5': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'vc8u'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ye } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-26' },
            },
            title: '\u8d85\u51fa\u8fb9\u754c',
            description:
              '<div class="markdown"><p>\u5f53\u901a\u8fc7\u53d7\u63a7\u5c06 <code>value</code> \u8d85\u51fa\u8fb9\u754c\u65f6\uff0c\u63d0\u4f9b\u8b66\u544a\u6837\u5f0f\u3002</p></div>',
            identifier: 'inputnumber-demo5',
          },
        },
        'inputnumber-demo6': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '4r5S'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ee } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-26' },
            },
            title: '\u81ea\u5b9a\u4e49',
            description:
              '<div class="markdown"><p>\u5185\u90e8\u63d0\u4f9b <code>focus</code>, <code>blur</code> , <code>onInternalStep</code> \u4e09\u4e2a\u65b9\u6cd5</p></div>',
            identifier: 'inputnumber-demo6',
          },
        },
        'label-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'lAu0'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ve } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            identifier: 'label-demo1',
          },
        },
        'list-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '9xoI'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: He } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-demo1',
          },
        },
        'list-listlink': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '2xxZ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: he } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-listlink',
          },
        },
        'list-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'YESf'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ge } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/icons': { version: '2.0.2' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-demo2',
          },
        },
        'list-demo8': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'SOYm'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: be } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/icons': { version: '2.0.2' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            title: '\u5185\u5d4c\u5217\u8868',
            background: '#f5f5f5',
            description:
              '<div class="markdown"><p>List inset \u6837\u5f0f</p></div>',
            identifier: 'list-demo8',
          },
        },
        'list-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'VMO4'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Me } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-demo3',
          },
        },
        'list-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'yzFo'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Le } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-demo4',
          },
        },
        'list-demo6': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '+N7Z'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Te } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/icons': { version: '2.0.2' },
            },
            identifier: 'list-demo6',
          },
        },
        'list-checkbox': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'cY4J'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ce } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-checkbox',
          },
        },
        'list-switch': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'YHw8'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: De } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-switch',
          },
        },
        'list-sticky': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'hrbQ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: we } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-sticky',
          },
        },
        'list-infinitescroll': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'a+/7'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ie } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-infinitescroll',
          },
        },
        'list-virtuallist': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'my7o'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: xe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'list-virtuallist',
          },
        },
        'listinputitem-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '2PQQ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Pe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'listinputitem-demo1',
          },
        },
        'listinputitem-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '7weO'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Re } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'listinputitem-demo2',
          },
        },
        'modal-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'HDLZ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Se } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u4f7f\u7528 <code>Fade</code> \u8fc7\u6e21\u6548\u679c</p></div>',
            identifier: 'modal-demo1',
          },
        },
        'modal-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ZkDH'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ke } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            title: '\u81ea\u5b9a\u4e49Modal\u5185\u5bb9',
            description: '',
            identifier: 'modal-demo2',
          },
        },
        'navbar-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ZVJ+'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Be } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'navbar-demo1',
          },
        },
        'noticebar-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'eAUK'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ae } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'noticebar-demo1',
          },
        },
        'page-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '5oeh'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Oe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'page-demo1',
          },
        },
        'page-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'gASm'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Fe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'page-demo2',
          },
        },
        'page-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'NoAN'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: je } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'page-demo3',
          },
        },
        'picker-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Y43Y'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ke } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'picker-demo1',
          },
        },
        'picker-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'tTDL'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ve } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'picker-demo2',
          },
        },
        'picker-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'MkQ4'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ue } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'picker-demo3',
          },
        },
        'picker-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'juUZ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: We } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'picker-demo4',
          },
        },
        'picker-demo5': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'cYha'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ge } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-26' },
            },
            identifier: 'picker-demo5',
          },
        },
        'picker-demo6': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'OBKV'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ze } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'picker-demo6',
          },
        },
        'picker-demo7': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'FSlP'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: _e } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'picker-demo7',
          },
        },
        'picker-demo8': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'G5Em'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ne } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              lcn: { version: '3.0.2' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'picker-demo8',
          },
        },
        'popover-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'tXNq'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: qe } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description: '',
            identifier: 'popover-demo1',
          },
        },
        'popup-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '+rph'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ye } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-26' },
            },
            identifier: 'popup-demo1',
          },
        },
        'portal-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'iJyO'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ze } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
            },
            title: '\u4f20\u9001\u95e8\u4f7f\u7528',
            description: '',
            identifier: 'portal-demo1',
          },
        },
        'preloader-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'FYbj'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Xe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'preloader-demo1',
          },
        },
        'preloader-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'K8v7'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Je } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'preloader-demo2',
          },
        },
        'preloader-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 't15G'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Qe } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'preloader-demo3',
          },
        },
        'preloader-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '8U+Q'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: $e } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'preloader-demo4',
          },
        },
        'pullrefresh-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'b4g9'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: et } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'pullrefresh-demo1',
          },
        },
        'pullrefresh-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ccBf'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: tt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'pullrefresh-demo2',
          },
        },
        'radio-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'HXCj'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: nt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'radio-demo1',
          },
        },
        'row-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'FBhd'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: it } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u4f7f\u7528\u5355\u4e00\u7684\u4e00\u7ec4 <code>Row</code> \u548c <code>Col</code> \u6805\u683c\u7ec4\u4ef6\uff0c\u5c31\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u57fa\u672c\u7684\u6805\u683c\u7cfb\u7edf\uff0c\u6240\u6709\u5217<code>Col</code>\u5fc5\u987b\u653e\u5728 <code>Row</code> \u5185\u3002</p></div>',
            identifier: 'row-demo1',
          },
        },
        'row-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'yz1N'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: rt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u8bbe\u7f6e\u4e00\u5217\u5bbd\u5ea6',
            description:
              '<div class="markdown"><p>\u4f7f\u7528 <code>Row</code> \u4e0a\u7684 <code>rowCols</code> prop \u8bbe\u7f6e\u5747\u5206\u7684\u6805\u683c\u3002 <code>Col</code> \u4e0a\u7684 <code>cols</code> prop \u53ef\u4ee5\u5355\u72ec\u8bbe\u7f6e\u4ee5\u8986\u76d6<code>rowCols</code></p></div>',
            identifier: 'row-demo2',
          },
        },
        'row-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '2Ns3'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: at } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u54cd\u5e94\u7684\u6805\u683c',
            description:
              '<div class="markdown"><p>\u4f7f\u7528 <code>Row</code> \u4e0a\u7684 <code>rowCols</code> prop \u8bbe\u7f6e\u5747\u5206\u7684\u6805\u683c\u3002 <code>Col</code> \u4e0a\u7684 <code>cols</code> prop \u53ef\u4ee5\u5355\u72ec\u8bbe\u7f6e\u4ee5\u8986\u76d6<code>rowCols</code></p></div>',
            identifier: 'row-demo3',
          },
        },
        'row-demo-row-cols-auto': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Bcpv'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ot } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u81ea\u7136\u5bbd\u5ea6',
            description:
              '<div class="markdown"><p>\u4f7f\u7528<code>cols="auto"</code>\u60a8\u53ef\u4ee5\u4e3a\u5217\u8d4b\u4e88\u5176\u81ea\u7136\u5bbd\u5ea6</p></div>',
            identifier: 'row-demo-row-cols-auto',
          },
        },
        'row-demo-row-cols-width': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'bXSJ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: dt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u9884\u8bbe\u5bbd\u5ea6',
            description:
              '<div class="markdown"><p>\u4f7f\u7528<code>cols={number}</code>\u60a8\u53ef\u4ee5\u4e3a\u5217\u8d4b\u4e88\u5176<code>1~12</code>\u9884\u8bbe\u5bbd\u5ea6</p></div>',
            identifier: 'row-demo-row-cols-width',
          },
        },
        'row-demo-col-width': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'icOE'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: lt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: 'Col\u5bbd\u5ea6',
            description:
              '<div class="markdown"><p>\u4f7f\u7528<code>col={number}</code>\u60a8\u53ef\u4ee5\u4e3a\u5217\u8d4b\u4e88\u5176\u9884\u8bbe\u5bbd\u5ea6</p></div>',
            identifier: 'row-demo-col-width',
          },
        },
        'searchbar-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'tVcH'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: st } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'searchbar-demo1',
          },
        },
        'searchbar-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'C2yR'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: pt } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/icons': { version: '2.0.2' },
            },
            identifier: 'searchbar-demo2',
          },
        },
        'searchbar-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '2n0y'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ct } },
            dependencies: {
              '@wonder-ui/icons': { version: '2.0.2' },
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'searchbar-demo3',
          },
        },
        'skeleton-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'j/mH'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ut } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            identifier: 'skeleton-demo1',
          },
        },
        'skeleton-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Xwf3'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ft } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u663e\u793a\u5934\u50cf',
            identifier: 'skeleton-demo2',
          },
        },
        'snackbar-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '6JiA'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: mt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u4e00\u6761\u57fa\u672c\u7684\u901a\u77e5\u6d88\u606f</p></div>',
            identifier: 'snackbar-demo1',
          },
        },
        'snackbar-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'VS0/'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: yt } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-26' },
            },
            title: '\u6d88\u606f\u6761\u7684\u4f4d\u7f6e',
            description:
              '<div class="markdown"><p>\u901a\u8fc7\u6307\u5b9a <code>anchorOrigin</code> \u7684\u5c5e\u6027\uff0c\u60a8\u53ef\u4ee5\u63a7\u5236\u6d88\u606f\u6761\u7684\u4f4d\u7f6e</p></div>',
            identifier: 'snackbar-demo2',
          },
        },
        'withdialog-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '64HL'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Et } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: 'Toast',
            description:
              '<div class="markdown"><p>Snackbar \u5b9e\u73b0\u7684 Toast</p></div>',
            identifier: 'withdialog-demo3',
          },
        },
        'space-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'qQF2'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: vt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u7528\u6cd5',
            description:
              '<div class="markdown"><p>\u76f8\u90bb\u7ec4\u4ef6\u6c34\u5e73\u95f4\u8ddd</p></div>',
            identifier: 'space-demo1',
          },
        },
        'space-spacesplit': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'gs0z'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ht } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u5206\u9694\u7b26',
            description:
              '<div class="markdown"><p>\u8bbe\u7f6e\u5206\u5272\u7b26</p></div>',
            identifier: 'space-spacesplit',
          },
        },
        'space-wrap': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'rogs'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: ht } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u6362\u884c\u6392\u5217',
            description:
              '<div class="markdown"><p>\u53ef\u4ee5\u8bbe\u7f6e\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u7684\u95f4\u8ddd</p></div>',
            identifier: 'space-wrap',
          },
        },
        'space-horizontalalign': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'uQ+O'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: gt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u6c34\u5e73\u65b9\u5411-\u6c34\u5e73\u5bf9\u9f50',
            description: '',
            identifier: 'space-horizontalalign',
          },
        },
        'space-verticalalignments': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'pFYj'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: bt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u6c34\u5e73\u65b9\u5411-\u5782\u76f4\u5bf9\u9f50',
            description: '',
            identifier: 'space-verticalalignments',
          },
        },
        'space-verticalhorizontalalign': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Pi98'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Mt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u5782\u76f4\u65b9\u5411-\u6c34\u5e73\u5bf9\u9f50',
            description: '',
            identifier: 'space-verticalhorizontalalign',
          },
        },
        'space-verticalverticalalignments': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'uTVl'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Lt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u5782\u76f4\u65b9\u5411-\u5782\u76f4\u5bf9\u9f50',
            description: '',
            identifier: 'space-verticalverticalalignments',
          },
        },
        'stepper-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'EUtj'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Tt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'stepper-demo1',
          },
        },
        'stepper-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'fLN/'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ct } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-26' },
            },
            identifier: 'stepper-demo2',
          },
        },
        'sticky-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'FtM2'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Dt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u5c06\u5185\u5bb9\u5305\u88f9\u5728 <code>Sticky</code> \u7ec4\u4ef6\u5185\u5373\u53ef</p></div>',
            identifier: 'sticky-demo1',
          },
        },
        'sticky-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Eeze'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: wt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u5438\u9876\u8ddd\u79bb',
            description:
              '<div class="markdown"><p>\u901a\u8fc7 <code>offsetTop</code> \u5c5e\u6027\u53ef\u4ee5\u8bbe\u7f6e\u7ec4\u4ef6\u5728\u5438\u9876\u65f6\u4e0e\u9876\u90e8\u7684\u8ddd\u79bb\u3002</p></div>',
            identifier: 'sticky-demo2',
          },
        },
        'sticky-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ZkiR'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: It } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u6307\u5b9a\u5bb9\u5668',
            description:
              '<div class="markdown"><p>\u901a\u8fc7 <code>container</code> \u5c5e\u6027\u53ef\u4ee5\u6307\u5b9a\u7ec4\u4ef6\u7684\u5bb9\u5668\uff0c\u9875\u9762\u6eda\u52a8\u65f6\uff0c\u7ec4\u4ef6\u4f1a\u59cb\u7ec8\u4fdd\u6301\u5728\u5bb9\u5668\u8303\u56f4\u5185\uff0c\u5f53\u7ec4\u4ef6\u5373\u5c06\u8d85\u51fa\u5bb9\u5668\u5e95\u90e8\u65f6\uff0c\u4f1a\u56fa\u5b9a\u5728\u5bb9\u5668\u7684\u5e95\u90e8\u3002</p></div>',
            identifier: 'sticky-demo3',
          },
        },
        'svgicon-default': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Pg95'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: xt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'svgicon-default',
          },
        },
        'swipe-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'doI9'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Pt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'swipe-demo1',
          },
        },
        'swipe-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'BKQw'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Rt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'swipe-demo2',
          },
        },
        'swipe-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'lK1K'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: St } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'swipe-demo3',
          },
        },
        'swipe-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '2jBL'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: kt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'swipe-demo4',
          },
        },
        'swipe-demo5': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '1Dyr'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Bt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'swipe-demo5',
          },
        },
        'tabs-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '8ikj'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: At } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-26' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u4f7f\u7528<code>TabPane</code>\u5207\u6362\u5185\u5bb9</p></div>',
            identifier: 'tabs-demo1',
          },
        },
        'tabs-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '95z6'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ot } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-26' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u4f7f\u7528<code>TabPane</code>\u5207\u6362\u5185\u5bb9</p></div>',
            identifier: 'tabs-demo2',
          },
        },
        'tabs-custom-tabnav': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'uy+e'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ft } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-26' },
            },
            title: '\u81ea\u5b9a\u4e49\u9009\u9879\u5361',
            description:
              '<div class="markdown"><p>\u4f7f\u7528<code>TabPane</code>\u5207\u6362\u5185\u5bb9</p></div>',
            identifier: 'tabs-custom-tabnav',
          },
        },
        'tag-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '6Ygl'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: jt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'tag-demo1',
          },
        },
        'tag-closable': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'vcGX'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Kt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              '@wonder-ui/utils': { version: '2.1.12' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'tag-closable',
          },
        },
        'checkabletag-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Jm9P'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Vt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'checkabletag-demo1',
          },
        },
        'toggle-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '8AMZ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Ut } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u7684\u5f00\u5173',
            description: '',
            identifier: 'toggle-demo1',
          },
        },
        'toggle-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'lm0o'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Wt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u5c3a\u5bf8',
            description:
              '<div class="markdown"><p>\u4f7f\u7528 size \u5c5e\u6027 \u5b9a\u4e49\u5c0f\u4e00\u53f7\u5f00\u5173</p></div>',
            identifier: 'toggle-demo2',
          },
        },
        'toggle-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'DCg2'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Gt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/icons': { version: '2.0.2' },
              react: { version: '>=16.8.0' },
            },
            title: '\u81ea\u5b9a\u4e49\u56fe\u6807',
            description: '',
            identifier: 'toggle-demo4',
          },
        },
        'tooltip-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ZINC'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: zt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'tooltip-demo1',
          },
        },
        'typography-title': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '2bf4'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: _t } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'typography-title',
          },
        },
        'typography-paragraph': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'oLm3'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Nt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            identifier: 'typography-paragraph',
          },
        },
        'whitespace-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'aEVI'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: qt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u57fa\u672c\u4f7f\u7528',
            description:
              '<div class="markdown"><p>\u901a\u8fc7<code>size</code>\u6765\u8bbe\u7f6e\u95f4\u9694\u5927\u5c0f</p></div>',
            identifier: 'whitespace-demo1',
          },
        },
        'whitespace-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'CixJ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Yt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u548c List \u4e00\u8d77\u4f7f\u7528',
            description: '',
            identifier: 'whitespace-demo2',
          },
        },
        'circularprogress-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, '66xc'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Zt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u4e0d\u5b9a\u91cf\u7684\u73af\u5f62\u8fdb\u5ea6\u6761',
            description: '',
            identifier: 'circularprogress-demo1',
          },
        },
        'circularprogress-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ILP4'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Xt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u73af\u5f62\u8fdb\u5ea6\u5c3a\u5bf8',
            description:
              '<div class="markdown"><p>\u8bbe\u7f6e\u5c3a\u5bf8 <code>size</code></p></div>',
            identifier: 'circularprogress-demo2',
          },
        },
        'circularprogress-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'ZrKj'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Jt } },
            dependencies: {
              react: { version: '>=16.8.0' },
              '@wonder-ui/core': { version: '2.0.0-26' },
              '@wonder-ui/hooks': { version: '1.1.6' },
            },
            title: '\u5b9a\u91cf\u73af\u5f62\u8fdb\u5ea6',
            description: '',
            identifier: 'circularprogress-demo3',
          },
        },
        'linearprogress-demo4': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'FMO+'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: Qt } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u4e0d\u5b9a\u91cf\u7684\u7ebf\u6027\u8fdb\u5ea6\u6761',
            description: '',
            identifier: 'linearprogress-demo4',
          },
        },
        'linearprogress-demo1': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'sjmr'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: $t } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u7ebf\u6027\u8fdb\u5ea6\u6761\u989c\u8272',
            description: '',
            identifier: 'linearprogress-demo1',
          },
        },
        'linearprogress-demo2': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'd3TQ'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: en } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u7ebf\u6027\u8fdb\u5ea6\u6761\u52a8\u753b',
            description: '',
            identifier: 'linearprogress-demo2',
          },
        },
        'linearprogress-demo3': {
          component: Object(o['c'])({
            loader: (function () {
              var e = Object(i['a'])(
                a.a.mark(function e() {
                  return a.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([
                              n.e(1),
                              n.e(6),
                              n.e(80),
                              n.e(5),
                              n.e(8),
                            ]).then(n.bind(null, 'Y0z/'))
                          );
                        case 2:
                          return e.abrupt('return', e.sent.default);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          previewerProps: {
            sources: { _: { tsx: tn } },
            dependencies: {
              '@wonder-ui/core': { version: '2.0.0-26' },
              react: { version: '>=16.8.0' },
            },
            title: '\u7ebf\u6027\u8fdb\u5ea6\u6761\u6807\u7b7e',
            description: '',
            identifier: 'linearprogress-demo3',
          },
        },
      };
    },
    K2Yx: function (e, t, n) {
      'use strict';
      (function (e) {
        n.d(t, 'b', function () {
          return l;
        }),
          n.d(t, 'a', function () {
            return p;
          });
        var i,
          r,
          a = n('WE0o'),
          o = n('Vu9J');
        function d() {
          var e = Object(o['a'])(),
            t = Object(a['a'])();
          return {
            touch: !!(
              'ontouchstart' in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            pointerEvents:
              !!e.PointerEvent &&
              'maxTouchPoints' in e.navigator &&
              e.navigator.maxTouchPoints >= 0,
            passiveListener: (function () {
              var t = !1;
              try {
                var n = Object.defineProperty({}, 'passive', {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener('testPassiveListener', () => null, n);
              } catch (i) {}
              return t;
            })(),
            intersectionObserver: (function () {
              return 'IntersectionObserver' in e;
            })(),
          };
        }
        function l() {
          return i || (i = d()), i;
        }
        function s() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.userAgent,
            i = l(),
            r = Object(o['a'])(),
            d = r.navigator.platform,
            s = n || r.navigator.userAgent,
            p = {
              ios: !1,
              android: !1,
              androidChrome: !1,
              desktop: !1,
              iphone: !1,
              ipod: !1,
              ipad: !1,
              edge: !1,
              ie: !1,
              firefox: !1,
              macos: !1,
              windows: !1,
              cordova: !(!r.cordova && !r.phonegap),
              phonegap: !(!r.cordova && !r.phonegap),
              electron: !1,
              capacitor: !!r.Capacitor,
              nwjs: !1,
            },
            c = r.screen.width,
            u = r.screen.height,
            f = s.match(/(Android);?[\s\/]+([\d.]+)?/),
            m = s.match(/(iPad).*OS\s([\d_]+)/),
            y = s.match(/(iPod)(.*OS\s([\d_]+))?/),
            E = !m && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            v = s.indexOf('MSIE ') >= 0 || s.indexOf('Trident/') >= 0,
            H = s.indexOf('Edge/') >= 0,
            h = s.indexOf('Gecko/') >= 0 && s.indexOf('Firefox/') >= 0,
            g = 'Win32' === d,
            b = s.toLowerCase().indexOf('electron') >= 0,
            M =
              'undefined' !== typeof r.nw &&
              'undefined' !== typeof e &&
              'undefined' !== typeof e.versions &&
              'undefined' !== typeof e.versions.nw,
            L = 'MacIntel' === d,
            T = [
              '1024x1366',
              '1366x1024',
              '834x1194',
              '1194x834',
              '834x1112',
              '1112x834',
              '768x1024',
              '1024x768',
              '820x1180',
              '1180x820',
              '810x1080',
              '1080x810',
            ];
          !m &&
            L &&
            i.touch &&
            T.indexOf(''.concat(c, 'x').concat(u)) >= 0 &&
            ((m = s.match(/(Version)\/([\d.]+)/)),
            m || (m = ['0', '1', '13_0_0']),
            (L = !1)),
            (p.ie = v),
            (p.edge = H),
            (p.firefox = h),
            f &&
              !g &&
              ((p.os = 'android'),
              (p.osVersion = f[2]),
              (p.android = !0),
              (p.androidChrome = s.toLowerCase().indexOf('chrome') >= 0)),
            (m || E || y) && ((p.os = 'ios'), (p.ios = !0)),
            E &&
              !y &&
              ((p.osVersion = E[2].replace(/_/g, '.')), (p.iphone = !0)),
            m && ((p.osVersion = m[2].replace(/_/g, '.')), (p.ipad = !0)),
            y &&
              ((p.osVersion = y[3] ? y[3].replace(/_/g, '.') : null),
              (p.ipod = !0)),
            p.ios &&
              p.osVersion &&
              s.indexOf('Version/') >= 0 &&
              '10' === p.osVersion.split('.')[0] &&
              (p.osVersion = s
                .toLowerCase()
                .split('version/')[1]
                .split(' ')[0]),
            (p.webView =
              !(
                !(E || m || y) ||
                (!s.match(/.*AppleWebKit(?!.*Safari)/i) &&
                  !r.navigator.standalone)
              ) ||
              (r.matchMedia &&
                r.matchMedia('(display-mode: standalone)').matches)),
            (p.webview = p.webView),
            (p.standalone = p.webView),
            (p.desktop = !(p.ios || p.android) || b || M),
            p.desktop &&
              ((p.electron = b),
              (p.nwjs = M),
              (p.macos = L),
              (p.windows = g),
              p.macos && (p.os = 'macos'),
              p.windows && (p.os = 'windows')),
            (p.pixelRatio = r.devicePixelRatio || 1);
          var C = '(prefers-color-scheme: dark)',
            D = '(prefers-color-scheme: light)';
          return (
            (p.prefersColorScheme = function () {
              var e = 'light',
                t = Object(a['a'])();
              return (
                r.matchMedia && r.matchMedia(D).matches && (e = 'light'),
                r.matchMedia && r.matchMedia(C).matches && (e = 'dark'),
                (t.documentElement &&
                  t.documentElement.dataset['prefersColor']) ||
                  e
              );
            }),
            p
          );
        }
        function p() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return (r && !t) || (r = s(e)), r;
        }
      }.call(this, n('Q2Ig')));
    },
    MZF8: function (e, t, n) {
      'use strict';
      var i = n('ogwx');
      n.d(t, 'a', function () {
        return i['b'];
      });
      n('VCU9');
    },
    Nht4: function (e, t, n) {
      'use strict';
      Object.prototype.hasOwnProperty;
    },
    P3Lt: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var i = n('UjDP');
      function r(e) {
        var t;
        return e && Object(i['a'])(e) && (t = e._virtual.parent), t;
      }
    },
    PKRT: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var i = n('K2Yx'),
        r = n('errf'),
        a = n('H4hf'),
        o = (function () {
          var e,
            t = Object(i['a'])(),
            n = t.ios,
            o = [],
            d = !1;
          function l() {
            d = !1;
            var e = o.slice(0);
            o.length = 0;
            for (var t = 0; t < e.length; t++) e[t]();
          }
          if ('undefined' !== typeof Promise && Object(r['c'])(Promise)) {
            var s = Promise.resolve(),
              p = (e) => {
                console.error(e);
              };
            e = () => {
              s.then(l).catch(p), n && setTimeout(a['a']);
            };
          } else if (
            'undefined' === typeof MutationObserver ||
            (!Object(r['c'])(MutationObserver) &&
              '[object MutationObserverConstructor]' !==
                MutationObserver.toString())
          )
            e = () => {
              setTimeout(l, 0);
            };
          else {
            var c = 1,
              u = new MutationObserver(l),
              f = document.createTextNode(String(c));
            u.observe(f, { characterData: !0 }),
              (e = () => {
                (c = (c + 1) % 2), (f.data = String(c));
              });
          }
          return function (t, n) {
            var i;
            if (
              (o.push(() => {
                if (t)
                  try {
                    t.call(n);
                  } catch (e) {
                    console.error(e, n, 'nextTick');
                  }
                else i && i(n);
              }),
              d || ((d = !0), e()),
              !t && 'undefined' !== typeof Promise)
            )
              return new Promise((e, t) => {
                i = e;
              });
          };
        })();
    },
    PQHU: function (e, t, n) {
      'use strict';
      function i(e, t) {
        'function' === typeof e ? e(t) : e && (e.current = t);
      }
      function r() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (e) => {
          t.forEach((t) => {
            i(t, e);
          });
        };
      }
      n.d(t, 'b', function () {
        return i;
      }),
        n.d(t, 'a', function () {
          return r;
        });
    },
    Pn2d: function (e, t, n) {
      'use strict';
      var i = n('fYvM');
      n.o(i, 'allowScrollOnElement') &&
        n.d(t, 'allowScrollOnElement', function () {
          return i['allowScrollOnElement'];
        }),
        n.o(i, 'capitalize') &&
          n.d(t, 'capitalize', function () {
            return i['capitalize'];
          }),
        n.o(i, 'clamp') &&
          n.d(t, 'clamp', function () {
            return i['clamp'];
          }),
        n.o(i, 'deepClone') &&
          n.d(t, 'deepClone', function () {
            return i['deepClone'];
          }),
        n.o(i, 'disableBodyScroll') &&
          n.d(t, 'disableBodyScroll', function () {
            return i['disableBodyScroll'];
          }),
        n.o(i, 'elementContains') &&
          n.d(t, 'elementContains', function () {
            return i['elementContains'];
          }),
        n.o(i, 'elementContainsAttribute') &&
          n.d(t, 'elementContainsAttribute', function () {
            return i['elementContainsAttribute'];
          }),
        n.o(i, 'enableBodyScroll') &&
          n.d(t, 'enableBodyScroll', function () {
            return i['enableBodyScroll'];
          }),
        n.o(i, 'findScrollableParent') &&
          n.d(t, 'findScrollableParent', function () {
            return i['findScrollableParent'];
          }),
        n.o(i, 'forwardRef') &&
          n.d(t, 'forwardRef', function () {
            return i['forwardRef'];
          }),
        n.o(i, 'getDocument') &&
          n.d(t, 'getDocument', function () {
            return i['getDocument'];
          }),
        n.o(i, 'getElementIndexPath') &&
          n.d(t, 'getElementIndexPath', function () {
            return i['getElementIndexPath'];
          }),
        n.o(i, 'getFocusableByIndexPath') &&
          n.d(t, 'getFocusableByIndexPath', function () {
            return i['getFocusableByIndexPath'];
          }),
        n.o(i, 'getNextElement') &&
          n.d(t, 'getNextElement', function () {
            return i['getNextElement'];
          }),
        n.o(i, 'getParent') &&
          n.d(t, 'getParent', function () {
            return i['getParent'];
          }),
        n.o(i, 'getPreviousElement') &&
          n.d(t, 'getPreviousElement', function () {
            return i['getPreviousElement'];
          }),
        n.o(i, 'getRect') &&
          n.d(t, 'getRect', function () {
            return i['getRect'];
          }),
        n.o(i, 'getScrollParent') &&
          n.d(t, 'getScrollParent', function () {
            return i['getScrollParent'];
          }),
        n.o(i, 'getScrollTop') &&
          n.d(t, 'getScrollTop', function () {
            return i['getScrollTop'];
          }),
        n.o(i, 'getScrollbarWidth') &&
          n.d(t, 'getScrollbarWidth', function () {
            return i['getScrollbarWidth'];
          }),
        n.o(i, 'getWindow') &&
          n.d(t, 'getWindow', function () {
            return i['getWindow'];
          }),
        n.o(i, 'hoistStatics') &&
          n.d(t, 'hoistStatics', function () {
            return i['hoistStatics'];
          }),
        n.o(i, 'isDate') &&
          n.d(t, 'isDate', function () {
            return i['isDate'];
          }),
        n.o(i, 'isElementFocusSubZone') &&
          n.d(t, 'isElementFocusSubZone', function () {
            return i['isElementFocusSubZone'];
          }),
        n.o(i, 'isElementFocusZone') &&
          n.d(t, 'isElementFocusZone', function () {
            return i['isElementFocusZone'];
          }),
        n.o(i, 'isElementTabbable') &&
          n.d(t, 'isElementTabbable', function () {
            return i['isElementTabbable'];
          }),
        n.o(i, 'isHidden') &&
          n.d(t, 'isHidden', function () {
            return i['isHidden'];
          }),
        n.o(i, 'isObject') &&
          n.d(t, 'isObject', function () {
            return i['isObject'];
          }),
        n.o(i, 'isPromise') &&
          n.d(t, 'isPromise', function () {
            return i['isPromise'];
          }),
        n.o(i, 'nextTick') &&
          n.d(t, 'nextTick', function () {
            return i['nextTick'];
          }),
        n.o(i, 'noop') &&
          n.d(t, 'noop', function () {
            return i['noop'];
          }),
        n.o(i, 'on') &&
          n.d(t, 'on', function () {
            return i['on'];
          }),
        n.o(i, 'padZero') &&
          n.d(t, 'padZero', function () {
            return i['padZero'];
          }),
        n.o(i, 'portalContainsElement') &&
          n.d(t, 'portalContainsElement', function () {
            return i['portalContainsElement'];
          }),
        n.o(i, 'preventDefault') &&
          n.d(t, 'preventDefault', function () {
            return i['preventDefault'];
          }),
        n.o(i, 'raiseClick') &&
          n.d(t, 'raiseClick', function () {
            return i['raiseClick'];
          }),
        n.o(i, 'setScrollTop') &&
          n.d(t, 'setScrollTop', function () {
            return i['setScrollTop'];
          }),
        n.o(i, 'shouldWrapFocus') &&
          n.d(t, 'shouldWrapFocus', function () {
            return i['shouldWrapFocus'];
          }),
        n.o(i, 'unitToPx') &&
          n.d(t, 'unitToPx', function () {
            return i['unitToPx'];
          }),
        n.o(i, 'upperFirst') &&
          n.d(t, 'upperFirst', function () {
            return i['upperFirst'];
          }),
        n.o(i, 'warn') &&
          n.d(t, 'warn', function () {
            return i['warn'];
          });
      var r = n('hV+j');
      n.d(t, 'elementContains', function () {
        return r['a'];
      });
      var a = n('gqOI');
      n.d(t, 'elementContainsAttribute', function () {
        return a['a'];
      });
      var o = n('5Oe4');
      n.d(t, 'preventDefault', function () {
        return o['a'];
      }),
        n.d(t, 'raiseClick', function () {
          return o['b'];
        });
      n('mcWL'), n('BF2X');
      var d = n('WE0o');
      n.d(t, 'getDocument', function () {
        return d['a'];
      });
      var l = n('A91U');
      n.d(t, 'getParent', function () {
        return l['a'];
      });
      var s = n('gZRw');
      n.d(t, 'getRect', function () {
        return s['a'];
      });
      var p = n('G3EN');
      n.d(t, 'getScrollParent', function () {
        return p['a'];
      });
      n('P3Lt');
      var c = n('Vu9J');
      n.d(t, 'getWindow', function () {
        return c['a'];
      });
      n('UjDP');
      var u = n('AAgS');
      n.d(t, 'on', function () {
        return u['a'];
      });
      var f = n('arzW');
      n.d(t, 'portalContainsElement', function () {
        return f['a'];
      });
      n('kzXF'), n('rmgB');
      var m = n('PKRT');
      n.d(t, 'nextTick', function () {
        return m['a'];
      });
    },
    QfVf: function (e, t, n) {
      'use strict';
    },
    R0Fw: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return Pe;
      }),
        n.d(t, 'b', function () {
          return Re;
        }),
        n.d(t, 'd', function () {
          return k;
        }),
        n.d(t, 'c', function () {
          return Se;
        });
      var i = '\\ud800-\\udfff',
        r = '\\u0300-\\u036f',
        a = '\\ufe20-\\ufe2f',
        o = '\\u20d0-\\u20ff',
        d = '\\u1ab0-\\u1aff',
        l = '\\u1dc0-\\u1dff',
        s = r + a + o + d + l,
        p = '\\ufe0e\\ufe0f',
        c = '['.concat(i, ']'),
        u = '['.concat(s, ']'),
        f = '\\ud83c[\\udffb-\\udfff]',
        m = '(?:'.concat(u, '|').concat(f, ')'),
        y = '[^'.concat(i, ']'),
        E = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        v = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        H = '\\u200d',
        h = RegExp('['.concat(H + i + s + p, ']')),
        g = ''.concat(m, '?'),
        b = '['.concat(p, ']?'),
        M = '(?:'
          .concat(H, '(?:')
          .concat([y, E, v].join('|'), ')')
          .concat(b + g, ')*'),
        L = b + g + M,
        T = ''.concat(y).concat(u, '?'),
        C = '(?:'.concat([T, u, E, v, c].join('|'), ')');
      function D(e) {
        return h.test(e);
      }
      function w(e) {
        return e.split('');
      }
      var I = RegExp(
        ''
          .concat(f, '(?=')
          .concat(f, ')|')
          .concat(C + L),
        'g',
      );
      function x(e) {
        return e.match(I) || [];
      }
      function P(e) {
        return D(e) ? x(e) : w(e);
      }
      function R(e, t, n) {
        var i = e.length;
        return (n = void 0 === n ? i : n), !t && n >= i ? e : e.slice(t, n);
      }
      function S(e) {
        return (t) => {
          if (!t) return '';
          var n = D(t) ? P(t) : void 0,
            i = n ? n[0] : t[0],
            r = n ? R(n, 1).join('') : t.slice(1);
          return i[e]() + r;
        };
      }
      var k = S('toUpperCase'),
        B = '\\ud800-\\udfff',
        A = '\\u0300-\\u036f',
        O = '\\ufe20-\\ufe2f',
        F = '\\u20d0-\\u20ff',
        j = '\\u1ab0-\\u1aff',
        K = '\\u1dc0-\\u1dff',
        V = A + O + F + j + K,
        U = '\\u2700-\\u27bf',
        W = 'a-z\\xdf-\\xf6\\xf8-\\xff',
        G = '\\xac\\xb1\\xd7\\xf7',
        z = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
        _ = '\\u2000-\\u206f',
        N =
          ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
        q = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
        Y = '\\ufe0e\\ufe0f',
        Z = G + z + _ + N,
        X = "['\u2019]",
        J = '['.concat(Z, ']'),
        Q = '['.concat(V, ']'),
        $ = '\\d',
        ee = '['.concat(U, ']'),
        te = '['.concat(W, ']'),
        ne = '[^'.concat(B).concat(Z + $ + U + W + q, ']'),
        ie = '\\ud83c[\\udffb-\\udfff]',
        re = '(?:'.concat(Q, '|').concat(ie, ')'),
        ae = '[^'.concat(B, ']'),
        oe = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        de = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        le = '['.concat(q, ']'),
        se = '\\u200d',
        pe = '(?:'.concat(te, '|').concat(ne, ')'),
        ce = '(?:'.concat(le, '|').concat(ne, ')'),
        ue = '(?:'.concat(X, '(?:d|ll|m|re|s|t|ve))?'),
        fe = '(?:'.concat(X, '(?:D|LL|M|RE|S|T|VE))?'),
        me = ''.concat(re, '?'),
        ye = '['.concat(Y, ']?'),
        Ee = '(?:'
          .concat(se, '(?:')
          .concat([ae, oe, de].join('|'), ')')
          .concat(ye + me, ')*'),
        ve = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
        He = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
        he = ye + me + Ee,
        ge = '(?:'.concat([ee, oe, de].join('|'), ')').concat(he),
        be = RegExp(
          [
            ''
              .concat(le, '?')
              .concat(te, '+')
              .concat(ue, '(?=')
              .concat([J, le, '$'].join('|'), ')'),
            ''
              .concat(ce, '+')
              .concat(fe, '(?=')
              .concat([J, le + pe, '$'].join('|'), ')'),
            ''.concat(le, '?').concat(pe, '+').concat(ue),
            ''.concat(le, '+').concat(fe),
            He,
            ve,
            ''.concat($, '+'),
            ge,
          ].join('|'),
          'g',
        );
      function Me(e) {
        return e.match(be);
      }
      var Le = RegExp.prototype.test.bind(
          /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        ),
        Te = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      function Ce(e) {
        return e.match(Te);
      }
      function De(e, t) {
        if (void 0 === t) {
          var n = Le(e) ? Me(e) : Ce(e);
          return n || [];
        }
        return e.match(t) || [];
      }
      var we = n('errf'),
        Ie = 1 / 0;
      function xe(e) {
        if (null == e) return '';
        if (Object(we['e'])(e)) return JSON.stringify(e);
        if ('string' === typeof e) return e;
        if (Array.isArray(e))
          return ''.concat(e.map((e) => (null == e ? e : xe(e))));
        if (Object(we['g'])(e)) return e.toString();
        var t = ''.concat(e);
        return '0' == t && 1 / e == -Ie ? '-0' : t;
      }
      var Pe = (e) =>
          De(xe(e).replace(/['\u2019]/g, '')).reduce(
            (e, t, n) => ((t = t.toLowerCase()), e + (n ? k(t) : t)),
            '',
          ),
        Re = (e) => k(xe(e).toLowerCase());
      parseInt;
      function Se(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          n = e + '';
        while (n.length < t) n = '0' + n;
        return n;
      }
    },
    SWSs: function (e, t, n) {
      'use strict';
    },
    UjDP: function (e, t, n) {
      'use strict';
      function i(e) {
        return e && !!e._virtual;
      }
      n.d(t, 'a', function () {
        return i;
      });
    },
    Vu9J: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var i = n('/xfr');
      function r(e) {
        var t = e;
        return t && t.ownerDocument && t.ownerDocument.defaultView
          ? t.ownerDocument.defaultView
          : Object(i['b'])();
      }
    },
    W7Nk: function (e, t) {},
    WE0o: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var i = n('/xfr');
      function r(e) {
        var t = e;
        return t && t.ownerDocument ? t.ownerDocument : Object(i['a'])();
      }
    },
    XtT8: function (e, t, n) {
      'use strict';
    },
    Zs1V: function (e) {
      e.exports = JSON.parse(
      );
    },
    aUDy: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var i = n('Vu9J');
      class r {
        constructor(e, t) {
          (this._timeoutIds = null),
            (this._immediateIds = null),
            (this._intervalIds = null),
            (this._animationFrameIds = null),
            (this._isDisposed = void 0),
            (this._parent = void 0),
            (this._onErrorHandler = void 0),
            (this._noop = void 0),
            (this._isDisposed = !1),
            (this._parent = e || null),
            (this._onErrorHandler = t),
            (this._noop = () => {});
        }
        dispose() {
          var e;
          if (
            ((this._isDisposed = !0), (this._parent = null), this._timeoutIds)
          ) {
            for (e in this._timeoutIds)
              this._timeoutIds.hasOwnProperty(e) &&
                this.clearTimeout(parseInt(e, 10));
            this._timeoutIds = null;
          }
          if (this._immediateIds) {
            for (e in this._immediateIds)
              this._immediateIds.hasOwnProperty(e) &&
                this.clearImmediate(parseInt(e, 10));
            this._immediateIds = null;
          }
          if (this._intervalIds) {
            for (e in this._intervalIds)
              this._intervalIds.hasOwnProperty(e) &&
                this.clearInterval(parseInt(e, 10));
            this._intervalIds = null;
          }
          if (this._animationFrameIds) {
            for (e in this._animationFrameIds)
              this._animationFrameIds.hasOwnProperty(e) &&
                this.cancelAnimationFrame(parseInt(e, 10));
            this._animationFrameIds = null;
          }
        }
        setTimeout(e, t) {
          var n = 0;
          return (
            this._isDisposed ||
              (this._timeoutIds || (this._timeoutIds = {}),
              (n = setTimeout(() => {
                try {
                  this._timeoutIds && delete this._timeoutIds[n],
                    e.apply(this._parent);
                } catch (t) {
                  this._logError(t);
                }
              }, t)),
              (this._timeoutIds[n] = !0)),
            n
          );
        }
        clearTimeout(e) {
          this._timeoutIds &&
            this._timeoutIds[e] &&
            (clearTimeout(e), delete this._timeoutIds[e]);
        }
        setImmediate(e, t) {
          var n = 0,
            r = Object(i['a'])(t);
          if (!this._isDisposed) {
            this._immediateIds || (this._immediateIds = {});
            var a = () => {
              try {
                this._immediateIds && delete this._immediateIds[n],
                  e.apply(this._parent);
              } catch (t) {
                this._logError(t);
              }
            };
            (n = r.setTimeout(a, 0)), (this._immediateIds[n] = !0);
          }
          return n;
        }
        clearImmediate(e, t) {
          var n = Object(i['a'])(t);
          this._immediateIds &&
            this._immediateIds[e] &&
            (n.clearTimeout(e), delete this._immediateIds[e]);
        }
        setInterval(e, t) {
          var n = 0;
          return (
            this._isDisposed ||
              (this._intervalIds || (this._intervalIds = {}),
              (n = setInterval(() => {
                try {
                  e.apply(this._parent);
                } catch (t) {
                  this._logError(t);
                }
              }, t)),
              (this._intervalIds[n] = !0)),
            n
          );
        }
        clearInterval(e) {
          this._intervalIds &&
            this._intervalIds[e] &&
            (clearInterval(e), delete this._intervalIds[e]);
        }
        throttle(e, t, n) {
          if (this._isDisposed) return this._noop;
          var i,
            r,
            a = t || 0,
            o = !0,
            d = !0,
            l = 0,
            s = null;
          n && 'boolean' === typeof n.leading && (o = n.leading),
            n && 'boolean' === typeof n.trailing && (d = n.trailing);
          var p = (t) => {
              var n = Date.now(),
                c = n - l,
                u = o ? a - c : a;
              return (
                c >= a && (!t || o)
                  ? ((l = n),
                    s && (this.clearTimeout(s), (s = null)),
                    (i = e.apply(this._parent, r)))
                  : null === s && d && (s = this.setTimeout(p, u)),
                i
              );
            },
            c = function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return (r = t), p(!0);
            };
          return c;
        }
        debounce(e, t, n) {
          if (this._isDisposed) {
            var i = () => {};
            return (
              (i.cancel = () => {}),
              (i.flush = () => null),
              (i.pending = () => !1),
              i
            );
          }
          var r,
            a,
            o = t || 0,
            d = !1,
            l = !0,
            s = null,
            p = 0,
            c = Date.now(),
            u = null;
          n && 'boolean' === typeof n.leading && (d = n.leading),
            n && 'boolean' === typeof n.trailing && (l = n.trailing),
            n &&
              'number' === typeof n.maxWait &&
              !isNaN(n.maxWait) &&
              (s = n.maxWait);
          var f = (e) => {
              u && (this.clearTimeout(u), (u = null)), (c = e);
            },
            m = (t) => {
              f(t), (r = e.apply(this._parent, a));
            },
            y = (e) => {
              var t = Date.now(),
                n = !1;
              e && (d && t - p >= o && (n = !0), (p = t));
              var i = t - p,
                a = o - i,
                f = t - c,
                E = !1;
              return (
                null !== s &&
                  (f >= s && u ? (E = !0) : (a = Math.min(a, s - f))),
                i >= o || E || n
                  ? m(t)
                  : (null !== u && e) || !l || (u = this.setTimeout(y, a)),
                r
              );
            },
            E = () => !!u,
            v = () => {
              E() && f(Date.now());
            },
            H = () => (E() && m(Date.now()), r),
            h = function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return (a = t), y(!0);
            };
          return (h.cancel = v), (h.flush = H), (h.pending = E), h;
        }
        requestAnimationFrame(e, t) {
          var n = 0,
            r = Object(i['a'])(t);
          if (!this._isDisposed) {
            this._animationFrameIds || (this._animationFrameIds = {});
            var a = () => {
              try {
                this._animationFrameIds && delete this._animationFrameIds[n],
                  e.apply(this._parent);
              } catch (t) {
                this._logError(t);
              }
            };
            (n = r.requestAnimationFrame
              ? r.requestAnimationFrame(a)
              : r.setTimeout(a, 0)),
              (this._animationFrameIds[n] = !0);
          }
          return n;
        }
        cancelAnimationFrame(e, t) {
          var n = Object(i['a'])(t);
          this._animationFrameIds &&
            this._animationFrameIds[e] &&
            (n.cancelAnimationFrame
              ? n.cancelAnimationFrame(e)
              : n.clearTimeout(e),
            delete this._animationFrameIds[e]);
        }
        _logError(e) {
          this._onErrorHandler && this._onErrorHandler(e);
        }
      }
    },
    aj3v: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var i,
        r = n('Pn2d');
      n('errf');
      function a() {
        if (!i) {
          var e = Object(r['getDocument'])().documentElement,
            t =
              e.style.fontSize ||
              Object(r['getWindow'])().getComputedStyle(e).fontSize;
          i = parseFloat(t);
        }
        return i;
      }
      function o(e) {
        return (e = e.replace(/rem/g, '')), +e * a();
      }
      function d(e) {
        return (e = e.replace(/vw/g, '')), (+e * window.innerWidth) / 100;
      }
      function l(e) {
        return (e = e.replace(/vh/g, '')), (+e * window.innerHeight) / 100;
      }
      function s(e) {
        return 'number' === typeof e
          ? e
          : e.includes('rem')
          ? o(e)
          : e.includes('vw')
          ? d(e)
          : e.includes('vh')
          ? l(e)
          : parseFloat(e);
      }
    },
    arzW: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var i = n('mcWL'),
        r = n('kzXF');
      function a(e, t) {
        var n = Object(i['a'])(e, (e) => t === e || e.hasAttribute(r['a']));
        return null !== n && n.hasAttribute(r['a']);
      }
    },
    cL9e: function (e, t, n) {
      'use strict';
    },
    errf: function (e, t, n) {
      'use strict';
      function i(e) {
        return null != e && 'object' === typeof e && !1 === Array.isArray(e);
      }
      function r(e) {
        return (
          !!e &&
          ('object' === typeof e || 'function' === typeof e) &&
          'function' === typeof e.then
        );
      }
      function a(e) {
        var t = Object.prototype.toString;
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : t.call(e);
      }
      function o(e) {
        var t = typeof e;
        return (
          'symbol' == t ||
          ('object' === t && null != e && '[object Symbol]' == a(e))
        );
      }
      function d(e) {
        return 'number' === typeof e || /^\d+(\.\d+)?$/.test(e);
      }
      function l(e) {
        return void 0 !== e && null !== e;
      }
      function s(e) {
        return (
          '[object Date]' === Object.prototype.toString.call(e) &&
          !Number.isNaN(e.getTime())
        );
      }
      function p(e) {
        return e === window;
      }
      n.d(t, 'e', function () {
        return i;
      }),
        n.d(t, 'f', function () {
          return r;
        }),
        n.d(t, 'g', function () {
          return o;
        }),
        n.d(t, 'd', function () {
          return d;
        }),
        n.d(t, 'b', function () {
          return l;
        }),
        n.d(t, 'a', function () {
          return s;
        }),
        n.d(t, 'h', function () {
          return p;
        }),
        n.d(t, 'c', function () {
          return f;
        });
      var c = /[\\^$.*+?()[\]{}|]/g,
        u = RegExp(
          '^'.concat(
            Function.prototype.toString
              .call(Object.prototype.hasOwnProperty)
              .replace(c, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?',
              ),
            '$',
          ),
        );
      function f(e) {
        var t = typeof e;
        return null != e && ('object' === t || 'function' === t) && u.test(e);
      }
    },
    fYvM: function (e, t) {},
    gZRw: function (e, t, n) {
      'use strict';
      function i(e, t) {
        return { top: 0, left: 0, right: e, bottom: t, width: e, height: t };
      }
      function r(e) {
        if (e) {
          if (e === window) return i(window.innerWidth, window.innerHeight);
          if (e.getBoundingClientRect) return e.getBoundingClientRect();
        }
        return i(0, 0);
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    gcMD: function (e, t, n) {
      'use strict';
      function i(e, t) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
      }
      n.d(t, 'a', function () {
        return i;
      });
    },
    gqOI: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var i = n('mcWL');
      function r(e, t) {
        var n = Object(i['a'])(e, (e) => e.hasAttribute(t));
        return n && n.getAttribute(t);
      }
    },
    'hV+j': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var i = n('A91U');
      function r(e, t) {
        var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          r = !1;
        if (e && t)
          if (n)
            if (e === t) r = !0;
            else {
              r = !1;
              while (t) {
                var a = Object(i['a'])(t);
                if (a === e) {
                  r = !0;
                  break;
                }
                t = a;
              }
            }
          else e.contains && (r = e.contains(t));
        return r;
      }
    },
    hcQm: function (e, t, n) {
      'use strict';
      n.d(t, 'e', function () {
        return i;
      }),
        n.d(t, 'b', function () {
          return r;
        }),
        n.d(t, 'c', function () {
          return a;
        }),
        n.d(t, 'a', function () {
          return o;
        }),
        n.d(t, 'd', function () {
          return d;
        });
      var i = {
        active: 'Wui-active',
        activeState: 'Wui-activeState',
        animated: 'Wui-animated',
        checked: 'Wui-checked',
        disabled: 'Wui-disabled',
        error: 'Wui-error',
        focused: 'Wui-focused',
        focusVisible: 'Wui-focusVisible',
        required: 'Wui-required',
        expanded: 'Wui-expanded',
        selected: 'Wui-selected',
      };
      function r(e, t) {
        var n = i[t];
        return n || ''.concat(e, '-').concat(t);
      }
      function a(e, t) {
        var n = {};
        return (
          t.forEach((t) => {
            n[t] = r(e, t);
          }),
          n
        );
      }
      function o(e, t, n) {
        var i = {},
          a = (t) => r(e, t);
        return (
          Object.keys(t).forEach((e) => {
            i[e] = t[e]
              .reduce(
                (e, t) => (t && (n && n[t] && e.push(n[t]), e.push(a(t))), e),
                [],
              )
              .join(' ');
          }),
          i
        );
      }
      function d(e, t) {
        var n = {};
        return e.forEach((e, i) => t(n, e, i)), n;
      }
    },
    kb9T: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return m;
      }),
        n.d(t, 'b', function () {
          return H;
        }),
        n.d(t, 'c', function () {
          return h;
        }),
        n.d(t, 'f', function () {
          return g;
        }),
        n.d(t, 'd', function () {
          return b;
        }),
        n.d(t, 'e', function () {
          return M;
        }),
        n.d(t, 'g', function () {
          return L;
        });
      var i,
        r = n('Dvvy'),
        a = n('0D7Y'),
        o = n('K2Yx'),
        d = n('WE0o'),
        l = n('Vu9J'),
        s = n('svPo'),
        p = (n('errf'), 0),
        c = Object(r['a'])(),
        u = new a['a'](null),
        f = 'data-is-scrollable',
        m = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
          if (e) {
            var n = 0,
              i = null,
              r = (e) => {
                1 === e.targetTouches.length &&
                  (n = e.targetTouches[0].clientY);
              },
              a = (e) => {
                if (1 === e.targetTouches.length && (e.stopPropagation(), i)) {
                  var t = e.targetTouches[0].clientY - n,
                    r = b(e.target);
                  r && (i = r),
                    0 === i.scrollTop && t > 0 && e.preventDefault(),
                    i.scrollHeight - Math.ceil(i.scrollTop) <= i.clientHeight &&
                      t < 0 &&
                      e.preventDefault();
                }
              };
            t.on(e, 'touchstart', r, { passive: !1 }),
              t.on(e, 'touchmove', a, { passive: !1 }),
              (i = e);
          }
        },
        y = (e) => {
          e.preventDefault();
        },
        E = (e) => {
          var t = Object(d['a'])(e);
          return t.body === e
            ? Object(l['a'])(e).innerWidth > t.documentElement.clientWidth
            : Object(s['a'])(e);
        },
        v = (e) =>
          parseInt(Object(l['a'])(e).getComputedStyle(e).paddingRight, 10) || 0;
      function H(e) {
        e = e || Object(d['a'])().body;
        var t = Object(d['a'])(e);
        if (E(e)) {
          var n = g(Object(d['a'])(e));
          c.styles.push({
            value: e.style.boxSizing,
            property: 'box-sizing',
            el: e,
          }),
            c.styles.push({
              value: e.style.paddingRight,
              property: 'padding-right',
              el: e,
            }),
            (e.style.paddingRight = ''.concat(v(e) + n, 'px')),
            (e.style.boxSizing = 'border-box');
          var i = Object(d['a'])(e).querySelectorAll('.fixed');
          [].forEach.call(i, (e) => {
            c.styles.push({
              value: e.style.paddingRight,
              property: 'padding-right',
              el: e,
            }),
              (e.style.paddingRight = ''.concat(v(e) + n, 'px'));
          });
        }
        var r = e.parentElement,
          a = Object(l['a'])(e),
          o =
            'HTML' === (null === r || void 0 === r ? void 0 : r.nodeName) &&
            'scroll' === a.getComputedStyle(r).overflowY
              ? r
              : e;
        o &&
          !p &&
          (c.styles.push({
            value: o.style.overflow,
            property: 'overflow',
            el: o,
          }),
          c.styles.push({ value: o.style.width, property: 'width', el: o }),
          (o.style.overflow = 'hidden'),
          (o.style.width = '100%'),
          t.addEventListener('touchmove', y, { passive: !1, capture: !1 })),
          p++;
      }
      function h(e) {
        if (((e = e || Object(d['a'])().body), p > 0)) {
          var t = Object(d['a'])(e);
          e && 1 === p && (c.restore(), t.removeEventListener('touchmove', y)),
            p--;
        }
      }
      function g() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : document;
        if (void 0 === i) {
          var t = document.createElement('div');
          t.style.setProperty('width', '100px'),
            t.style.setProperty('height', '100px'),
            t.style.setProperty('overflow', 'scroll'),
            t.style.setProperty('position', 'absolute'),
            t.style.setProperty('top', '-9999px'),
            e.body.appendChild(t),
            (i = t.offsetWidth - t.clientWidth),
            e.body.removeChild(t);
        }
        return i;
      }
      function b(e) {
        var t = e,
          n = Object(d['a'])(e);
        while (t && t !== n.body) {
          if ('true' === t.getAttribute(f)) return t;
          t = t.parentElement;
        }
        t = e;
        while (t && t !== n.body) {
          if ('false' !== t.getAttribute(f)) {
            var i = getComputedStyle(t),
              r = i ? i.getPropertyValue('overflow-y') : '';
            if (r && ('scroll' === r || 'auto' === r)) return t;
          }
          t = t.parentElement;
        }
        return (t && t !== n.body) || (t = Object(l['a'])(e)), t;
      }
      function M(e) {
        var t = 'scrollTop' in e ? e.scrollTop : e.pageYOffset;
        return Math.max(t, 0);
      }
      function L(e, t) {
        'scrollTop' in e ? (e.scrollTop = t) : e.scrollTo(e.scrollX, t);
      }
      Object(o['a'])();
    },
    kzXF: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var i = 'data-portal-element';
    },
    lGtB: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var i = {
        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        ctrl: 17,
        alt: 18,
        pauseBreak: 19,
        capslock: 20,
        escape: 27,
        space: 32,
        pageUp: 33,
        pageDown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        del: 46,
        zero: 48,
        one: 49,
        two: 50,
        three: 51,
        four: 52,
        five: 53,
        six: 54,
        seven: 55,
        eight: 56,
        nine: 57,
        a: 65,
        b: 66,
        c: 67,
        d: 68,
        e: 69,
        f: 70,
        g: 71,
        h: 72,
        i: 73,
        j: 74,
        k: 75,
        l: 76,
        m: 77,
        n: 78,
        o: 79,
        p: 80,
        q: 81,
        r: 82,
        s: 83,
        t: 84,
        u: 85,
        v: 86,
        w: 87,
        x: 88,
        y: 89,
        z: 90,
        leftWindow: 91,
        rightWindow: 92,
        select: 93,
        zero_numpad: 96,
        one_numpad: 97,
        two_numpad: 98,
        three_numpad: 99,
        four_numpad: 100,
        five_numpad: 101,
        six_numpad: 102,
        seven_numpad: 103,
        eight_numpad: 104,
        nine_numpad: 105,
        multiply: 106,
        add: 107,
        subtract: 109,
        decimalPoint: 110,
        divide: 111,
        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        f5: 116,
        f6: 117,
        f7: 118,
        f8: 119,
        f9: 120,
        f10: 121,
        f11: 122,
        f12: 123,
        numlock: 144,
        scrollLock: 145,
        semicolon: 186,
        equalSign: 187,
        comma: 188,
        dash: 189,
        period: 190,
        forwardSlash: 191,
        graveAccent: 192,
        openBracket: 219,
        backSlash: 220,
        closeBracket: 221,
        singleQuote: 222,
      };
    },
    loQL: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var i = n('0Owb'),
        r = n('q1tI');
      function a(e) {
        var t = r['forwardRef'](e);
        function n(e) {
          return (n) =>
            r['createElement'](t, Object(i['a'])({ component: e }, n));
        }
        return (t.withComponent = n), t;
      }
    },
    'mD+u': function (e, t, n) {
      'use strict';
      function i(e, t) {
        for (
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            i = -1,
            r = n;
          e && r < e.length;
          r++
        )
          if (t(e[r], r)) {
            i = r;
            break;
          }
        return i;
      }
      function r(e, t) {
        var n = [],
          r = 0;
        while (r >= 0) (r = i(e, t, r)), r > -1 && (n.push(e[r]), r++);
        return n;
      }
      function a(e, t) {
        for (var n = [], i = 0; i < e; i++) n.push(t(i));
        return n;
      }
      n.d(t, 'b', function () {
        return r;
      }),
        n.d(t, 'a', function () {
          return a;
        });
    },
    mcWL: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var i = n('A91U');
      function r(e, t) {
        return e && e !== document.body
          ? t(e)
            ? e
            : r(Object(i['a'])(e), t)
          : null;
      }
    },
    ozbf: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var i = n('errf');
      Object.prototype.hasOwnProperty;
      function r(e) {
        if (!Object(i['b'])(e)) return e;
        if (Array.isArray(e)) return e.map((e) => r(e));
        if ('object' === typeof e) {
          var t = {};
          return (
            Object.keys(e).forEach((n) => {
              t[n] = r(e[n]);
            }),
            t
          );
        }
        return e;
      }
    },
    pscb: function (e, t, n) {
      'use strict';
    },
    rAVa: function (e, t, n) {
      'use strict';
      function i(e) {
        if (!e) return !1;
        var t = window.getComputedStyle(e),
          n = 'none' === t.display,
          i = null === e.offsetParent && 'fixed' !== t.position;
        return n || i;
      }
      n.d(t, 'a', function () {
        return i;
      });
    },
    rQGm: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      n('R0Fw');
      function i() {
        for (
          var e = [], t = arguments.length, n = new Array(t), r = 0;
          r < t;
          r++
        )
          n[r] = arguments[r];
        for (var a = 0, o = n; a < o.length; a++) {
          var d = o[a];
          if (d)
            if ('string' === typeof d) e.push(d);
            else if (
              d.hasOwnProperty('toString') &&
              'function' === typeof d.toString
            )
              e.push(d.toString());
            else if (Array.isArray(d)) e.push(i(...d));
            else for (var l in d) d[l] && e.push(l);
        }
        return e.join(' ');
      }
    },
    rmgB: function (e, t, n) {
      'use strict';
    },
    s35m: function (e, t, n) {
      'use strict';
    },
    svPo: function (e, t, n) {
      'use strict';
      function i(e) {
        return e.clientHeight < e.scrollHeight;
      }
      n.d(t, 'a', function () {
        return i;
      });
    },
    uK5r: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      n('rAM+');
      function i(e) {
        console && console.warn && console.warn(e);
      }
    },
    yYTQ: function (e, t, n) {
      'use strict';
      n('k1fw'), n('q1tI'), n('gcMD');
    },
    ygrP: function (e, t, n) {
      'use strict';
      function i(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      n.d(t, 'a', function () {
        return i;
      });
    },
    yuOn: function (e, t, n) {
      'use strict';
      n('0Owb'),
        n('k1fw'),
        n('PpiC'),
        n('q1tI'),
        'undefined' !== typeof WeakMap && new WeakMap();
    },
  },
]);