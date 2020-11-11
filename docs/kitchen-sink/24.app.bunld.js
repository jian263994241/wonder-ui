(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    760: function (e, n, a) {
      'use strict';
      a.r(n),
        a.d(n, 'default', function () {
          return w;
        });
      var t = a(5),
        l = a.n(t),
        r = a(4),
        i = a.n(r),
        u = a(9),
        c = a.n(u),
        o = a(0),
        d = a.n(o),
        s = a(30),
        v = [
          { label: 'slide', value: 'slide' },
          { label: 'fade', value: 'fade' },
          { label: 'scale', value: 'scale' },
        ];
      function w(e) {
        var n = window.setTransitionType,
          a = d.a.useState(window._animation),
          t = c()(a, 2),
          r = t[0],
          u = t[1];
        return d.a.createElement(
          s.A,
          { name: 'Theme', navbar: !0 },
          d.a.createElement(
            s.x,
            {
              renderHeader: function e() {
                return '过渡';
              },
            },
            d.a.createElement(s.h, {
              exclusive: !0,
              value: r,
              data: v,
              onChange: function e(a) {
                n(a), u(a);
              },
              renderItem: function e(n) {
                var a = n.label,
                  t = i()(n, ['label']);
                return d.a.createElement(s.k, l()({ visible: !0 }, t), a);
              },
            }),
          ),
        );
      }
    },
  },
]);
