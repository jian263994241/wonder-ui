(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [627],
  {
    32627: (e, r, n) => {
      'use strict';
      n.r(r), n.d(r, { default: () => s });
      var o = n(67294),
        t = n(7031),
        a = n(86252),
        i = n(20065),
        c = n(35161),
        l = n.n(c),
        d = (0, a.QM)(function (e) {
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
      function s(e) {
        var r = d();
        return o.createElement(
          t.T3,
          { name: 'Icons', navbar: !0 },
          o.createElement(
            'div',
            { className: r.root },
            l()(i, function (e, n) {
              return o.createElement(
                'div',
                { className: r.iconBox, key: n },
                o.createElement(e, { className: r.icon }),
                o.createElement('p', { className: r.text }, n),
              );
            }),
          ),
        );
      }
    },
  },
]);
