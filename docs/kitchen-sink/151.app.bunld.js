(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [151],
  {
    7151: (e, a, l) => {
      'use strict';
      l.r(a), l.d(a, { default: () => c });
      var t = l(67294),
        r = l(7031);
      const c = function e(a) {
        return t.createElement(
          r.T3,
          { name: 'Tag', navbar: !0 },
          t.createElement(
            r.l0,
            null,
            t.createElement(
              r.b0,
              { header: 'Tag Preset Color' },
              t.createElement(r.Vp, { color: 'primary' }, 'primary'),
              t.createElement(r.Vp, { color: 'secondary' }, 'secondary'),
            ),
            t.createElement(
              r.b0,
              { header: 'Tag Custom Color' },
              t.createElement(r.Vp, { color: '#FE9E20' }, '#5576F0'),
              t.createElement(r.Vp, { color: '#FD561F' }, '#FD561F'),
              t.createElement(r.Vp, { color: '#3981DA' }, '#3981DA'),
            ),
            t.createElement(
              r.b0,
              { header: 'Size' },
              t.createElement(
                r.Vp,
                { color: '#FE9E20', size: 'small' },
                '#5576F0',
              ),
              t.createElement(r.Vp, { color: '#FD561F' }, '#FD561F'),
              t.createElement(
                r.Vp,
                { color: '#3981DA', size: 'large' },
                '#3981DA',
              ),
            ),
            t.createElement(
              r.b0,
              { header: '细边框' },
              t.createElement(
                r.Vp,
                { color: '#FD561F', hairline: !0 },
                '#FD561F',
              ),
            ),
            t.createElement(
              r.b0,
              { header: 'CheckableTag disabled' },
              t.createElement(
                r.Wv,
                { checked: !0, disabled: !0 },
                'checked disabled',
              ),
              t.createElement(r.Wv, { disabled: !0 }, 'disabled'),
            ),
            t.createElement(
              r.b0,
              { header: 'CheckableTag' },
              t.createElement(
                r.xJ,
                {
                  name: 'isChecked',
                  initialValue: !0,
                  valuePropName: 'checked',
                },
                t.createElement(r.Wv, null, 'CheckableTag default checked'),
              ),
            ),
            t.createElement(
              r.b0,
              { header: 'CheckableTagGroup' },
              t.createElement('span', null, '多选: '),
              t.createElement(
                r.xJ,
                { name: 'group' },
                t.createElement(r.X1, {
                  data: [
                    { label: '公司', value: '0' },
                    { label: '个人', value: '1' },
                  ],
                }),
              ),
            ),
            t.createElement(
              r.b0,
              { header: 'CheckableTagGroup Exclusive' },
              t.createElement('span', null, '单选: '),
              t.createElement(
                r.xJ,
                { name: 'group2', initialValue: '0' },
                t.createElement(r.X1, {
                  exclusive: !0,
                  data: [
                    { label: '公司', value: '0' },
                    { label: '个人', value: '1' },
                  ],
                }),
              ),
            ),
          ),
        );
      };
    },
  },
]);
