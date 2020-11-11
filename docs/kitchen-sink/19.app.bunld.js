(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    761: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function () {
          return u;
        });
      var a = t(9),
        r = t.n(a),
        c = t(0),
        l = t.n(c),
        o = t(30);
      function u(e) {
        var n = l.a.useState(),
          t = r()(n, 2),
          a = t[0],
          c = t[1];
        return l.a.createElement(
          o.A,
          { name: 'SearchBar', navbar: !0 },
          l.a.createElement(o.D, {
            placeholder: '请输入名字',
            onSearch: function e(n) {
              return c(n);
            },
          }),
          l.a.createElement(o.D, {
            placeholder: '请输入名字',
            onSearch: function e(n) {
              return c(n);
            },
            showSearchButton: !0,
          }),
          l.a.createElement('br', null),
          l.a.createElement(o.D, {
            placeholder: 'Custom extra button',
            extra: l.a.createElement(
              o.g,
              { variant: 'text', color: 'primary' },
              '筛选',
            ),
            onSearch: function e(n) {
              return c(n);
            },
          }),
          a &&
            l.a.createElement(
              o.m,
              null,
              l.a.createElement('p', null, 'Seach by: ', a),
              '...',
            ),
        );
      }
    },
  },
]);
