(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [617],
  {
    7617: (e, l, a) => {
      'use strict';
      a.r(l), a.d(l, { default: () => f });
      var n = a(56765),
        t = a.n(n),
        r = a(83914),
        c = a.n(r),
        u = a(30452),
        i = a.n(u),
        v = a(67294),
        b = a(7031),
        d = a(42296),
        m = v.forwardRef(function (e, l) {
          var a = e.extra,
            n = void 0 === a ? '请选择' : a,
            t = i()(e, ['extra']);
          return v.createElement(b.zx, c()({ ref: l }, t), n);
        }),
        o = v.forwardRef(function e(l, a) {
          return v.createElement(b.cW, c()({ ref: a, data: d.Z, cols: 3 }, l));
        });
      function f(e) {
        var l = v.useState([
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
          a = t()(l, 2),
          n = a[0],
          r = (a[1], v.useState()),
          c = t()(r, 2)[1];
        return v.createElement(
          b.T3,
          { name: 'Picker', navbar: !0 },
          v.createElement(
            b.l0,
            null,
            v.createElement(
              b.b0,
              { header: v.createElement('span', null, 'LcnPicker & Button') },
              v.createElement(
                b.kC,
                null,
                v.createElement(
                  b.xJ,
                  { name: 'LcnPicker' },
                  v.createElement(o, null, v.createElement(m, null)),
                ),
                v.createElement(
                  b.xJ,
                  { name: 'LcnPicker' },
                  v.createElement(
                    b.cW,
                    {
                      cols: 3,
                      data: n,
                      onPickerChange: function e(l, a) {
                        var n = a[a.length - 1];
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
                    v.createElement(m, null),
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
