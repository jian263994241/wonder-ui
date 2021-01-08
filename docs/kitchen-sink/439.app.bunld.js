(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [439],
  {
    91439: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => f });
      var r = n(83914),
        a = n.n(r),
        l = n(30452),
        u = n.n(l),
        c = n(67294),
        m = n(7031),
        i = c.forwardRef(function (e, t) {
          var n = e.extra,
            r = void 0 === n ? '请选择' : n,
            l = u()(e, ['extra']);
          return c.createElement(m.zx, a()({ ref: t }, l), r);
        });
      function f() {
        return c.createElement(
          m.T3,
          { name: 'DatePicker', navbar: !0 },
          c.createElement(
            m.l0,
            null,
            c.createElement(
              m.b0,
              {
                header: c.createElement(
                  'span',
                  null,
                  'DatePickerPicker & Button',
                ),
              },
              c.createElement(
                m.xJ,
                { name: 'group' },
                c.createElement(m.Mt, null, c.createElement(i, null)),
              ),
            ),
          ),
        );
      }
    },
  },
]);
