(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [259],
  {
    98259: (e, r, t) => {
      'use strict';
      t.r(r), t.d(r, { default: () => u });
      var n = t(56765),
        a = t.n(n),
        c = t(67294),
        l = t(7031);
      function u(e) {
        var r = c.useState(),
          t = a()(r, 2),
          n = t[0],
          u = t[1];
        return c.createElement(
          l.T3,
          { name: 'SearchBar', navbar: !0 },
          c.createElement(l.E1, {
            placeholder: '请输入名字',
            onSearch: function e(r) {
              return u(r);
            },
          }),
          c.createElement(l.E1, {
            placeholder: '请输入名字',
            onSearch: function e(r) {
              return u(r);
            },
            showSearchButton: !0,
          }),
          c.createElement('br', null),
          c.createElement(l.E1, {
            placeholder: 'Custom extra button',
            extra: c.createElement(
              l.zx,
              { variant: 'text', color: 'primary' },
              '筛选',
            ),
            onSearch: function e(r) {
              return u(r);
            },
          }),
          n &&
            c.createElement(
              l.b0,
              null,
              c.createElement('p', null, 'Seach by: ', n),
              '...',
            ),
        );
      }
    },
  },
]);
