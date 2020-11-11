(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    757: function (e, t, l) {
      'use strict';
      l.r(t),
        l.d(t, 'default', function () {
          return n;
        });
      var i = l(0),
        r = l.n(i),
        a = l(30);
      function n(e) {
        return r.a.createElement(
          a.A,
          { name: 'List', navbar: !0 },
          r.a.createElement(
            a.x,
            {
              renderHeader: function e() {
                return '默认列表';
              },
              renderFooter: function e() {
                return '脚步';
              },
            },
            r.a.createElement(
              a.y,
              null,
              'Title',
              r.a.createElement(a.f, null, '描述.......'),
            ),
          ),
          r.a.createElement(
            a.x,
            {
              renderHeader: function e() {
                return '带箭头的列表';
              },
            },
            r.a.createElement(
              a.y,
              { extra: 'horizontal', arrow: 'horizontal' },
              'Horizontal',
            ),
            r.a.createElement(
              a.y,
              { extra: 'vertical', arrow: 'vertical' },
              'Vertical',
            ),
            r.a.createElement(
              a.y,
              { extra: 'vertical-up', arrow: 'vertical-up' },
              'Vertical Up',
            ),
          ),
          r.a.createElement(
            a.x,
            {
              renderHeader: function e() {
                return '超出内容';
              },
            },
            r.a.createElement(
              a.y,
              null,
              'Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
            ),
            r.a.createElement(
              a.y,
              { wrap: !0 },
              'Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
            ),
          ),
          r.a.createElement(
            a.x,
            {
              renderHeader: function e() {
                return '超出内容换行 - align';
              },
            },
            r.a.createElement(
              a.y,
              { wrap: !0, extra: 'align default', arrow: 'horizontal' },
              'Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
            ),
            r.a.createElement(
              a.y,
              {
                wrap: !0,
                extra: 'align top',
                align: 'top',
                arrow: 'horizontal',
              },
              'Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
            ),
          ),
          r.a.createElement(
            a.x,
            {
              renderHeader: function e() {
                return 'CheckboxList';
              },
            },
            r.a.createElement(a.k, { visible: !0, checked: !0 }, 'checked'),
            r.a.createElement(a.k, { visible: !0 }, 'unchecked'),
            r.a.createElement(
              a.k,
              {
                visible: !0,
                checked: !0,
                position: 'right',
                renderIcon: function e(t) {
                  var l = t.checked;
                  return r.a.createElement('span', null, l ? '选中' : '未选中');
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
