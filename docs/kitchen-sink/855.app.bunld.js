(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [855],
  {
    21855: (e, t, l) => {
      'use strict';
      l.r(t), l.d(t, { default: () => n });
      var i = l(67294),
        r = l(7031);
      function n(e) {
        return i.createElement(
          r.T3,
          { name: 'List', navbar: !0 },
          i.createElement(
            r.aV,
            {
              renderHeader: function e() {
                return '默认列表';
              },
              renderFooter: function e() {
                return '脚步';
              },
            },
            i.createElement(
              r.HC,
              null,
              'Title',
              i.createElement(r.NM, null, '描述.......'),
            ),
          ),
          i.createElement(
            r.aV,
            {
              renderHeader: function e() {
                return '带箭头的列表';
              },
            },
            i.createElement(
              r.HC,
              { extra: 'horizontal', arrow: 'horizontal' },
              'Horizontal',
            ),
            i.createElement(
              r.HC,
              { extra: 'vertical', arrow: 'vertical' },
              'Vertical',
            ),
            i.createElement(
              r.HC,
              { extra: 'vertical-up', arrow: 'vertical-up' },
              'Vertical Up',
            ),
          ),
          i.createElement(
            r.aV,
            {
              renderHeader: function e() {
                return '超出内容';
              },
            },
            i.createElement(
              r.HC,
              null,
              'Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
            ),
            i.createElement(
              r.HC,
              { wrap: !0 },
              'Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
            ),
          ),
          i.createElement(
            r.aV,
            {
              renderHeader: function e() {
                return '超出内容换行 - align';
              },
            },
            i.createElement(
              r.HC,
              { wrap: !0, extra: 'align default', arrow: 'horizontal' },
              'Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
            ),
            i.createElement(
              r.HC,
              {
                wrap: !0,
                extra: 'align top',
                align: 'top',
                arrow: 'horizontal',
              },
              'Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
            ),
          ),
          i.createElement(
            r.aV,
            {
              renderHeader: function e() {
                return 'CheckboxList';
              },
            },
            i.createElement(r.oC, { visible: !0, checked: !0 }, 'checked'),
            i.createElement(r.oC, { visible: !0 }, 'unchecked'),
            i.createElement(
              r.oC,
              {
                visible: !0,
                checked: !0,
                position: 'right',
                renderIcon: function e(t) {
                  var l = t.checked;
                  return i.createElement('span', null, l ? '选中' : '未选中');
                },
              },
              '自定义',
            ),
          ),
        );
      }
    },
  },
]);
