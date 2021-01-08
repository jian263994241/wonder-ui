(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [180],
  {
    40180: (e, l, a) => {
      'use strict';
      a.r(l), a.d(l, { default: () => i });
      var t = a(83914),
        n = a.n(t),
        r = a(30452),
        c = a.n(r),
        u = a(67294),
        m = a(7031);
      const i = function e(l) {
        return u.createElement(
          m.T3,
          { name: 'CheckableGroup', navbar: !0 },
          u.createElement(
            m.l0,
            null,
            u.createElement(
              m.b0,
              { header: 'Default' },
              u.createElement(
                m.gO,
                { bottom: 1 },
                u.createElement('span', null, '多选: '),
                u.createElement(
                  m.xJ,
                  { name: 'Default1' },
                  u.createElement(m.XQ, {
                    data: [
                      { label: '公司', value: '0' },
                      { label: '个人', value: '1' },
                    ],
                  }),
                ),
              ),
              u.createElement(
                m.gO,
                null,
                u.createElement('span', null, '单选: '),
                u.createElement(
                  m.xJ,
                  { name: 'a2', initialValue: '0' },
                  u.createElement(m.XQ, {
                    exclusive: !0,
                    data: [
                      { label: '公司', value: '0' },
                      { label: '个人', value: '1' },
                    ],
                  }),
                ),
              ),
            ),
            u.createElement(
              m.b0,
              { header: 'CheckableTagGroup' },
              u.createElement(
                m.gO,
                { bottom: 1 },
                u.createElement('span', null, '多选: '),
                u.createElement(
                  m.xJ,
                  { name: 'group' },
                  u.createElement(m.X1, {
                    data: [
                      { label: '公司', value: '0' },
                      { label: '个人', value: '1' },
                    ],
                  }),
                ),
              ),
              u.createElement(
                m.gO,
                null,
                u.createElement('span', null, '单选: '),
                u.createElement(
                  m.xJ,
                  { name: 'group2', initialValue: '0' },
                  u.createElement(m.X1, {
                    exclusive: !0,
                    data: [
                      { label: '公司', value: '0' },
                      { label: '个人', value: '1' },
                    ],
                  }),
                ),
              ),
            ),
            u.createElement(
              m.aV,
              {
                renderHeader: function e() {
                  return 'Checkbox list';
                },
              },
              u.createElement(
                m.xJ,
                { name: 'list' },
                u.createElement(m.XQ, {
                  data: [
                    { label: '公司', value: '0' },
                    { label: '个人', value: '1' },
                  ],
                  renderItem: function e(l) {
                    var a = l.label,
                      t = c()(l, ['label']);
                    return u.createElement(m.oC, n()({ visible: !0 }, t), a);
                  },
                }),
              ),
            ),
            u.createElement(
              m.aV,
              {
                renderHeader: function e() {
                  return 'Checkbox list exclusive';
                },
              },
              u.createElement(
                m.xJ,
                { name: 'list2' },
                u.createElement(m.XQ, {
                  exclusive: !0,
                  data: [
                    { label: '公司', value: '0' },
                    { label: '个人', value: '1' },
                  ],
                  renderItem: function e(l) {
                    var a = l.label,
                      t = c()(l, ['label']);
                    return u.createElement(m.oC, n()({ visible: !0 }, t), a);
                  },
                }),
              ),
            ),
            u.createElement(
              m.aV,
              {
                renderHeader: function e() {
                  return 'Checkbox list custon icon';
                },
              },
              u.createElement(
                m.xJ,
                { name: 'list3' },
                u.createElement(m.XQ, {
                  data: [
                    { label: '公司', value: '0' },
                    { label: '个人', value: '1' },
                  ],
                  renderItem: function e(l) {
                    var a = l.label,
                      t = c()(l, ['label']);
                    return u.createElement(
                      m.oC,
                      n()(
                        {
                          visible: !0,
                          renderIcon: function e(l) {
                            return l.checked && 'selected';
                          },
                          position: 'right',
                        },
                        t,
                      ),
                      a,
                    );
                  },
                }),
              ),
            ),
          ),
        );
      };
    },
  },
]);
