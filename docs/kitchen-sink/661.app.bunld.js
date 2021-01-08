(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [661],
  {
    14661: (e, l, a) => {
      'use strict';
      a.r(l), a.d(l, { default: () => m });
      var t = a(67294),
        c = a(7031),
        r = (0, c.QM)({
          placeHolder: {
            background: '#1976d2',
            width: 100,
            height: 100,
            color: '#fff',
            marginTop: 5,
            textAlign: 'center',
          },
        });
      function m(e) {
        var l = r();
        return t.createElement(
          c.T3,
          { name: 'Flex', navbar: !0 },
          '默认',
          t.createElement(
            c.kC,
            null,
            t.createElement('div', { className: l.placeHolder }, 'FlexItem'),
            t.createElement('div', { className: l.placeHolder }, 'FlexItem'),
            t.createElement('div', { className: l.placeHolder }, 'FlexItem'),
          ),
          '换行',
          t.createElement(
            c.kC,
            { wrap: 'wrap' },
            t.createElement('div', { className: l.placeHolder }, 'FlexItem'),
            t.createElement('div', { className: l.placeHolder }, 'FlexItem'),
            t.createElement('div', { className: l.placeHolder }, 'FlexItem'),
            t.createElement('div', { className: l.placeHolder }, 'FlexItem'),
            t.createElement('div', { className: l.placeHolder }, 'FlexItem'),
          ),
          '间距',
          t.createElement(
            c.kC,
            { gutter: 0.1 },
            t.createElement('div', { className: l.placeHolder }, 'FlexItem'),
            t.createElement('div', { className: l.placeHolder }, 'FlexItem'),
            t.createElement('div', { className: l.placeHolder }, 'FlexItem'),
          ),
          '等宽伸缩',
          t.createElement(
            c.kC,
            { flex: !0 },
            t.createElement('div', { className: l.placeHolder }, 'FlexItem'),
            t.createElement('div', { className: l.placeHolder }, 'FlexItem'),
            t.createElement('div', { className: l.placeHolder }, 'FlexItem'),
          ),
        );
      }
    },
  },
]);
