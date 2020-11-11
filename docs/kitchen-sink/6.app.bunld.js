(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    747: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, 'default', function () {
          return d;
        });
      var n = t(0),
        l = t.n(n),
        r = t(30),
        i = t(219),
        c = Object(r.L)(r.g)(function (e) {
          return {
            marginLeft: e.fullWidth || e.full ? 0 : 10,
            marginBottom: 10,
            '&:first-child': { marginLeft: 0 },
          };
        });
      function d(e) {
        return l.a.createElement(
          r.A,
          { name: 'Button', navbar: !0 },
          l.a.createElement(
            r.m,
            { header: 'size' },
            l.a.createElement(c, null, 'default'),
            l.a.createElement(c, { size: 'small' }, 'small'),
            l.a.createElement(c, { size: 'medium' }, 'medium'),
            l.a.createElement(c, { size: 'large' }, 'large'),
          ),
          l.a.createElement(
            r.m,
            { header: 'full' },
            l.a.createElement(
              c,
              {
                full: !0,
                startIcon: l.a.createElement(i.ArrowBackIosOutlined, null),
                endIcon: l.a.createElement(i.Close, null),
              },
              'full',
            ),
            l.a.createElement(c, { fullWidth: !0 }, 'fullWidth'),
          ),
          l.a.createElement(
            r.m,
            { header: 'variant' },
            l.a.createElement(c, null, 'default'),
            l.a.createElement(c, { variant: 'text' }, 'text'),
            l.a.createElement(c, { variant: 'outlined' }, 'outlined'),
            l.a.createElement(c, { variant: 'contained' }, 'contained'),
          ),
          l.a.createElement(
            r.m,
            { header: 'round' },
            l.a.createElement(
              'div',
              null,
              l.a.createElement(
                c,
                { variant: 'outlined', size: 'small', rounded: !0 },
                'outlined',
              ),
              l.a.createElement(
                c,
                { variant: 'outlined', rounded: !0 },
                'outlined',
              ),
              l.a.createElement(
                c,
                { variant: 'outlined', size: 'large', rounded: !0 },
                'outlined',
              ),
            ),
            l.a.createElement(
              'div',
              null,
              l.a.createElement(
                c,
                { variant: 'contained', size: 'small', rounded: !0 },
                'contained',
              ),
              l.a.createElement(
                c,
                { variant: 'contained', rounded: !0 },
                'contained',
              ),
              l.a.createElement(
                c,
                { variant: 'contained', size: 'large', rounded: !0 },
                'contained',
              ),
            ),
          ),
          l.a.createElement(
            r.m,
            { header: 'color' },
            l.a.createElement(
              'div',
              null,
              l.a.createElement(c, null, 'default'),
              l.a.createElement(c, { color: 'primary' }, 'primary'),
              l.a.createElement(c, { color: 'secondary' }, 'secondary'),
            ),
            l.a.createElement(
              'div',
              null,
              l.a.createElement(c, { variant: 'outlined' }, 'default'),
              l.a.createElement(
                c,
                { color: 'primary', variant: 'outlined' },
                'primary',
              ),
              l.a.createElement(
                c,
                { color: 'secondary', variant: 'outlined' },
                'secondary',
              ),
            ),
            l.a.createElement(
              'div',
              null,
              l.a.createElement(c, { variant: 'text' }, 'default'),
              l.a.createElement(
                c,
                { color: 'primary', variant: 'text' },
                'primary',
              ),
              l.a.createElement(
                c,
                { color: 'secondary', variant: 'text' },
                'secondary',
              ),
            ),
          ),
          l.a.createElement(
            r.m,
            { header: 'disabled' },
            l.a.createElement(c, { disabled: !0 }, 'default'),
            l.a.createElement(c, { disabled: !0, variant: 'text' }, 'default'),
          ),
        );
      }
    },
  },
]);
