(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [692],
  {
    95692: (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => i });
      var n = a(67294),
        l = a(7031),
        r = a(20065),
        d = (0, l.zo)(l.zx)(function (e) {
          return {
            marginLeft: e.fullWidth || e.full ? 0 : 10,
            marginBottom: 10,
            '&:first-child': { marginLeft: 0 },
          };
        });
      function i(e) {
        return n.createElement(
          l.T3,
          { name: 'Button', navbar: !0 },
          n.createElement(
            l.b0,
            { header: 'size' },
            n.createElement(d, null, 'default'),
            n.createElement(d, { size: 'small' }, 'small'),
            n.createElement(d, { size: 'medium' }, 'medium'),
            n.createElement(d, { size: 'large' }, 'large'),
          ),
          n.createElement(
            l.b0,
            { header: 'full' },
            n.createElement(
              d,
              {
                full: !0,
                startIcon: n.createElement(r.ArrowBackIosOutlined, null),
                endIcon: n.createElement(r.Close, null),
              },
              'full',
            ),
            n.createElement(d, { fullWidth: !0 }, 'fullWidth'),
          ),
          n.createElement(
            l.b0,
            { header: 'variant' },
            n.createElement(d, null, 'default'),
            n.createElement(d, { variant: 'text' }, 'text'),
            n.createElement(d, { variant: 'outlined' }, 'outlined'),
            n.createElement(d, { variant: 'contained' }, 'contained'),
          ),
          n.createElement(
            l.b0,
            { header: 'round' },
            n.createElement(
              'div',
              null,
              n.createElement(
                d,
                { variant: 'outlined', size: 'small', rounded: !0 },
                'outlined',
              ),
              n.createElement(
                d,
                { variant: 'outlined', rounded: !0 },
                'outlined',
              ),
              n.createElement(
                d,
                { variant: 'outlined', size: 'large', rounded: !0 },
                'outlined',
              ),
            ),
            n.createElement(
              'div',
              null,
              n.createElement(
                d,
                { variant: 'contained', size: 'small', rounded: !0 },
                'contained',
              ),
              n.createElement(
                d,
                { variant: 'contained', rounded: !0 },
                'contained',
              ),
              n.createElement(
                d,
                { variant: 'contained', size: 'large', rounded: !0 },
                'contained',
              ),
            ),
          ),
          n.createElement(
            l.b0,
            { header: 'color' },
            n.createElement(
              'div',
              null,
              n.createElement(d, null, 'default'),
              n.createElement(d, { color: 'primary' }, 'primary'),
              n.createElement(d, { color: 'secondary' }, 'secondary'),
            ),
            n.createElement(
              'div',
              null,
              n.createElement(d, { variant: 'outlined' }, 'default'),
              n.createElement(
                d,
                { color: 'primary', variant: 'outlined' },
                'primary',
              ),
              n.createElement(
                d,
                { color: 'secondary', variant: 'outlined' },
                'secondary',
              ),
            ),
            n.createElement(
              'div',
              null,
              n.createElement(d, { variant: 'text' }, 'default'),
              n.createElement(
                d,
                { color: 'primary', variant: 'text' },
                'primary',
              ),
              n.createElement(
                d,
                { color: 'secondary', variant: 'text' },
                'secondary',
              ),
            ),
          ),
          n.createElement(
            l.b0,
            { header: 'disabled' },
            n.createElement(d, { disabled: !0 }, 'default'),
            n.createElement(d, { disabled: !0, variant: 'text' }, 'default'),
          ),
        );
      }
    },
  },
]);
