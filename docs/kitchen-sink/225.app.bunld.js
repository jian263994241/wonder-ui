(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [225],
  {
    37661: (e, a, n) => {
      'use strict';
      n.r(a), n.d(a, { default: () => v });
      var l = n(83914),
        t = n.n(l),
        r = n(30452),
        u = n.n(r),
        i = n(56765),
        c = n.n(i),
        d = n(67294),
        s = n(7031),
        o = [
          { label: 'slide', value: 'slide' },
          { label: 'fade', value: 'fade' },
          { label: 'scale', value: 'scale' },
        ];
      function v(e) {
        var a = window.setTransitionType,
          n = d.useState(window._animation),
          l = c()(n, 2),
          r = l[0],
          i = l[1];
        return d.createElement(
          s.T3,
          { name: 'Theme', navbar: !0 },
          d.createElement(
            s.aV,
            {
              renderHeader: function e() {
                return '过渡';
              },
            },
            d.createElement(s.XQ, {
              exclusive: !0,
              value: r,
              data: o,
              onChange: function e(n) {
                a(n), i(n);
              },
              renderItem: function e(a) {
                var n = a.label,
                  l = u()(a, ['label']);
                return d.createElement(s.oC, t()({ visible: !0 }, l), n);
              },
            }),
          ),
        );
      }
    },
  },
]);
