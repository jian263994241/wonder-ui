(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    758: function (e, a, l) {
      'use strict';
      l.r(a),
        l.d(a, 'default', function () {
          return s;
        });
      var n = l(9),
        t = l.n(n),
        r = l(5),
        c = l.n(r),
        u = l(4),
        i = l.n(u),
        v = l(0),
        o = l.n(v),
        b = l(30),
        m = l(742),
        d = l.n(m),
        f =
          (l(743),
          o.a.forwardRef(function (e, a) {
            var l = e.extra,
              n = void 0 === l ? '请选择' : l,
              t = i()(e, ['extra']);
            return o.a.createElement(b.g, c()({ ref: a }, t), n);
          })),
        E = o.a.forwardRef(function e(a, l) {
          return o.a.createElement(b.B, c()({ ref: l, data: d.a, cols: 3 }, a));
        });
      function s(e) {
        var a = o.a.useState([
            {
              label: 'a',
              value: 'a',
              level: 1,
              children: [
                {
                  label: 'a.c',
                  value: 'aa',
                  level: 2,
                  children: [{ label: 'a.c.d', value: 'aabn', level: 3 }],
                },
              ],
            },
            { label: 'b', value: 'b', level: 1 },
          ]),
          l = t()(a, 2),
          n = l[0],
          r = (l[1], o.a.useState()),
          c = t()(r, 2)[1];
        return o.a.createElement(
          b.A,
          { name: 'Picker', navbar: !0 },
          o.a.createElement(
            b.s,
            null,
            o.a.createElement(
              b.m,
              { header: o.a.createElement('span', null, 'LcnPicker & Button') },
              o.a.createElement(
                b.r,
                null,
                o.a.createElement(
                  b.t,
                  { name: 'LcnPicker' },
                  o.a.createElement(E, null, o.a.createElement(f, null)),
                ),
                o.a.createElement(
                  b.t,
                  { name: 'LcnPicker' },
                  o.a.createElement(
                    b.B,
                    {
                      cols: 3,
                      data: n,
                      onPickerChange: function e(a, l) {
                        var n = l[l.length - 1];
                        setTimeout(function () {
                          n.children ||
                            ((n.children = [
                              { label: 'b.c', value: 'bb', level: n.level + 1 },
                            ]),
                            1 === n.level &&
                              (n.children[0].children = [
                                {
                                  label: 'bbc',
                                  value: 'bbc',
                                  level: n.level + 2,
                                },
                              ])),
                            c(Date.now());
                        }, 500);
                      },
                    },
                    o.a.createElement(f, null),
                  ),
                ),
              ),
            ),
          ),
        );
      }
    },
  },
]);
