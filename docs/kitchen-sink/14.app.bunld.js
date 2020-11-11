(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    755: function (e, n, o) {
      'use strict';
      o.r(n),
        o.d(n, 'default', function () {
          return p;
        });
      var r = o(0),
        t = o.n(r),
        a = o(30),
        i = o(48),
        c = o(219),
        l = o(697),
        d = o.n(l),
        s = Object(i.b)(function (e) {
          return {
            root: { display: 'flex', flexWrap: 'wrap' },
            iconBox: {
              flexShrink: 0,
              color: 'rgba(0, 0, 0, 0.54)',
              width: '25%',
              overflow: 'hidden',
              fontSize: 12,
              textAlign: 'center',
              textOverflow: 'ellipsis',
            },
            icon: {
              color: 'grey',
              cursor: 'pointer',
              margin: '4px 0px',
              padding: 18,
              fontSize: 36,
              boxSizing: 'content-box',
              borderRadius: 4,
              backgroundColor: '#FAFAFA',
            },
            text: {
              marginBottom: 12,
              padding: '0 5px',
              overflow: 'hidden',
              overflowWrap: 'break-word',
            },
          };
        });
      function p(e) {
        var n = s();
        return t.a.createElement(
          a.A,
          { name: 'Icons', navbar: !0 },
          t.a.createElement(
            'div',
            { className: n.root },
            d()(c, function (e, o) {
              return t.a.createElement(
                'div',
                { className: n.iconBox, key: o },
                t.a.createElement(e, { className: n.icon }),
                t.a.createElement('p', { className: n.text }, o),
              );
            }),
          ),
        );
      }
    },
  },
]);
