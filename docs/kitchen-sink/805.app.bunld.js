(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [805],
  {
    39805: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { default: () => l });
      var n = r(67294),
        a = r(7031);
      function l() {
        return n.createElement(
          a.T3,
          { name: 'Indicator', navbar: !0 },
          n.createElement(
            a.b0,
            { header: 'Preloader' },
            n.createElement(
              a.zx,
              {
                onClick: function e() {
                  a.p9.show(),
                    (function e() {
                      setTimeout(function () {
                        a.p9.hide();
                      }, 800);
                    })();
                },
              },
              'show preloader',
            ),
          ),
          n.createElement(
            a.b0,
            { header: 'ActivityIndicator' },
            n.createElement(a.P2, { text: 'default text' }),
            n.createElement(a.P2, {
              vertical: !0,
              text: 'Vertical ActivityIndicator',
            }),
          ),
          n.createElement(
            a.b0,
            { header: 'Indicator' },
            n.createElement(a.z$, null),
            n.createElement('br', null),
            n.createElement(a.z$, { spin: !0, size: 'small' }),
            n.createElement(a.z$, { spin: !0, size: 'default' }),
            n.createElement(a.z$, { spin: !0, size: 'large' }),
          ),
          n.createElement(
            a.b0,
            { header: 'CircularProgress' },
            n.createElement(a.D8, { variant: 'indeterminate' }),
          ),
        );
      }
    },
  },
]);
