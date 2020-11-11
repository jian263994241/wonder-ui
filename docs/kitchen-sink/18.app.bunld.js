(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    759: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'default', function () {
          return i;
        });
      var n = a(0),
        r = a.n(n),
        c = a(30);
      function i() {
        return r.a.createElement(
          c.A,
          { name: 'Indicator', navbar: !0 },
          r.a.createElement(
            c.m,
            { header: 'Preloader' },
            r.a.createElement(
              c.g,
              {
                onClick: function e() {
                  c.C.show(),
                    (function e() {
                      setTimeout(function () {
                        c.C.hide();
                      }, 800);
                    })();
                },
              },
              'show preloader',
            ),
          ),
          r.a.createElement(
            c.m,
            { header: 'ActivityIndicator' },
            r.a.createElement(c.c, { text: 'default text' }),
            r.a.createElement(c.c, {
              vertical: !0,
              text: 'Vertical ActivityIndicator',
            }),
          ),
          r.a.createElement(
            c.m,
            { header: 'Indicator' },
            r.a.createElement(c.v, null),
            r.a.createElement('br', null),
            r.a.createElement(c.v, { spin: !0, size: 'small' }),
            r.a.createElement(c.v, { spin: !0, size: 'default' }),
            r.a.createElement(c.v, { spin: !0, size: 'large' }),
          ),
          r.a.createElement(
            c.m,
            { header: 'CircularProgress' },
            r.a.createElement(c.l, { variant: 'indeterminate' }),
          ),
        );
      }
    },
  },
]);
