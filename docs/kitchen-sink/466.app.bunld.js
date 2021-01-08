(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [466],
  {
    26855: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => a });
      var l = n(67294),
        r = n(7031);
      function a(e) {
        return l.createElement(
          r.T3,
          { name: 'Accordion', navbar: !0 },
          l.createElement(
            r.b0,
            null,
            l.createElement(
              r.UQ,
              { disableTranstion: !0 },
              l.createElement(
                r.Hk,
                { header: l.createElement('a', null, '点击展开') },
                l.createElement('div', null, ' 无UI '),
              ),
            ),
          ),
          l.createElement(
            r.aV,
            { renderHeader: 'AccordionList' },
            l.createElement(
              r.UQ,
              { accordion: !0 },
              l.createElement(
                r.Hk,
                {
                  itemKey: 'key1',
                  header: l.createElement(r.HC, null, 'Title 1'),
                },
                l.createElement(r.HC, null, '内容 1'),
              ),
              l.createElement(
                r.Hk,
                {
                  itemKey: 'key2',
                  header: l.createElement(r.HC, null, 'Title 2'),
                },
                l.createElement(r.HC, null, '内容 2'),
              ),
            ),
          ),
        );
      }
    },
  },
]);
