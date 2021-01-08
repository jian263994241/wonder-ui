(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [205],
  {
    81205: (e, a, t) => {
      'use strict';
      t.r(a), t.d(a, { default: () => p });
      var n = t(83914),
        r = t.n(n),
        l = t(30452),
        u = t.n(l),
        c = t(56765),
        d = t.n(c),
        i = t(67294),
        f = t(7031),
        m = t(86252),
        b = [
          { label: '4791db', value: '#4791db' },
          { label: 'ffb74d', value: '#ffb74d' },
          { label: '4caf50', value: '#4caf50' },
        ],
        o = (0, m.jG)({ palette: { type: 'dark' } });
      function p(e) {
        var a = (0, m.Fg)(),
          t = window.setTheme,
          n = i.useState('dark' === a.palette.type),
          l = d()(n, 2),
          c = l[0],
          p = l[1],
          s = i.useState(a.palette.primary.main),
          v = d()(s, 2),
          h = v[0],
          k = v[1];
        return i.createElement(
          f.T3,
          { name: 'Theme', navbar: !0 },
          i.createElement(
            f.aV,
            {
              renderHeader: function e() {
                return 'Mod';
              },
            },
            i.createElement(
              f.HC,
              {
                extra: i.createElement(f.rs, {
                  checked: c,
                  onChange: function e(a) {
                    a ? t(o) : t(), p(a);
                  },
                }),
              },
              '深色模式',
            ),
          ),
          i.createElement(
            f.aV,
            {
              renderHeader: function e() {
                return '颜色';
              },
            },
            i.createElement(f.XQ, {
              exclusive: !0,
              value: h,
              data: b,
              onChange: function e(a) {
                t(
                  (0, m.jG)({
                    palette: {
                      type: c ? 'dark' : 'light',
                      primary: { main: a },
                    },
                  }),
                ),
                  k(a);
              },
              renderItem: function e(a) {
                var t = a.label,
                  n = u()(a, ['label']);
                return i.createElement(f.oC, r()({ visible: !0 }, n), t);
              },
            }),
          ),
        );
      }
    },
  },
]);
