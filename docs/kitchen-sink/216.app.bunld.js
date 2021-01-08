(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [216],
  {
    38216: (e, n, l) => {
      'use strict';
      l.r(n), l.d(n, { default: () => i });
      var t = l(56765),
        a = l.n(t),
        c = l(67294),
        r = l(7031),
        u = (0, r.zo)(r.zx)({ '& + &': { marginTop: 10 } });
      function i(e) {
        var n = c.useState(!1),
          l = a()(n, 2),
          t = l[0],
          i = l[1],
          o = c.useState(),
          h = a()(o, 2),
          m = h[0],
          b = h[1],
          d = c.useCallback(function (e) {
            b(e), i(!0);
          }, []),
          f = c.useCallback(function () {
            i(!1);
          }, []);
        return c.createElement(
          r.T3,
          { name: 'Drawer', navbar: !0 },
          c.createElement(
            r.b0,
            null,
            c.createElement('p', null, '点击按钮从四个方向出现一个半屏的浮层.'),
            c.createElement(
              u,
              { fullWidth: !0, onClick: d.bind(null, 'right') },
              'Anchor Right',
            ),
            c.createElement(
              u,
              { fullWidth: !0, onClick: d.bind(null, 'left') },
              'Anchor Left',
            ),
            c.createElement(
              u,
              { fullWidth: !0, onClick: d.bind(null, 'top') },
              'Anchor Top',
            ),
            c.createElement(
              u,
              { fullWidth: !0, onClick: d.bind(null, 'bottom') },
              'Anchor Bottom',
            ),
          ),
          c.createElement(
            r.dy,
            { visible: t, anchor: m, onCancel: f },
            c.createElement(r.gO, { space: 2, blank: 2 }, 'I am here.'),
          ),
        );
      }
    },
  },
]);
