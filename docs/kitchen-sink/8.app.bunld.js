(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    749: function (e, a, r) {
      'use strict';
      r.r(a);
      var n = r(5),
        t = r.n(n),
        c = r(4),
        l = r.n(c),
        o = r(0),
        u = r.n(o),
        i = r(30),
        m = u.a.forwardRef(function (e, a) {
          var r = e.extra,
            n = void 0 === r ? '请选择' : r,
            c = l()(e, ['extra']);
          return u.a.createElement(i.g, t()({ ref: a }, c), n);
        });
      a.default = i.s.create()(function e(a) {
        var r = a.form;
        return u.a.createElement(
          i.A,
          { name: 'DatePicker', navbar: !0 },
          u.a.createElement(
            i.m,
            {
              header: u.a.createElement(
                'span',
                null,
                'DatePickerPicker & Button',
              ),
            },
            r.getFieldDecorator(
              'group',
              {},
            )(u.a.createElement(i.n, null, u.a.createElement(m, null))),
          ),
        );
      });
    },
  },
]);
