(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    763: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, 'default', function () {
          return p;
        });
      var n = t(5),
        r = t.n(n),
        l = t(4),
        c = t.n(l),
        u = t(9),
        d = t.n(u),
        i = t(0),
        b = t.n(i),
        o = t(30),
        f = [
          { label: '4791db', value: '#4791db' },
          { label: 'ffb74d', value: '#ffb74d' },
          { label: '4caf50', value: '#4caf50' },
        ],
        m = Object(o.J)({ palette: { type: 'dark' } });
      function p(e) {
        var a = Object(o.N)(),
          t = window.setTheme,
          n = b.a.useState('dark' === a.palette.type),
          l = d()(n, 2),
          u = l[0],
          i = l[1],
          p = b.a.useState(a.palette.primary.main),
          s = d()(p, 2),
          v = s[0],
          h = s[1];
        return b.a.createElement(
          o.A,
          { name: 'Theme', navbar: !0 },
          b.a.createElement(
            o.x,
            {
              renderHeader: function e() {
                return 'Mod';
              },
            },
            b.a.createElement(
              o.y,
              {
                extra: b.a.createElement(o.E, {
                  checked: u,
                  onChange: function e(a) {
                    a ? t(m) : t(), i(a);
                  },
                }),
              },
              '深色模式',
            ),
          ),
          b.a.createElement(
            o.x,
            {
              renderHeader: function e() {
                return '颜色';
              },
            },
            b.a.createElement(o.h, {
              exclusive: !0,
              value: v,
              data: f,
              onChange: function e(a) {
                t(
                  Object(o.J)({
                    palette: {
                      type: u ? 'dark' : 'light',
                      primary: { main: a },
                    },
                  }),
                ),
                  h(a);
              },
              renderItem: function e(a) {
                var t = a.label,
                  n = c()(a, ['label']);
                return b.a.createElement(o.k, r()({ visible: !0 }, n), t);
              },
            }),
          ),
        );
      }
    },
  },
]);
