(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [614],
  {
    67614: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => s });
      var r = n(80165),
        a = n.n(r),
        u = n(56765),
        i = n.n(u),
        l = n(67294),
        c = n(7031);
      function o() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 15;
        return new Array(e).fill(!0).map(function () {
          return { label: 'item', value: 25 + Math.round(50 * Math.random()) };
        });
      }
      var f = o(20);
      function s(e) {
        var t = l.useReducer(function (e, t) {
            switch (t.type) {
              case 'add':
                return e.concat(o(20));
              case 'refresh':
                return f;
              case 'remove':
                var n = e.findIndex(function (e) {
                  return e.value === t.value;
                });
                return e.splice(n, 1), a()(e);
            }
          }, f),
          n = i()(t, 2),
          r = n[0],
          u = n[1],
          s = l.useState(!1),
          d = i()(s, 2),
          m = d[0],
          h = d[1],
          v = r.length < 120;
        return l.createElement(
          c.T3,
          { name: 'ListView', navbar: !0, pageContent: !1 },
          l.createElement(c.Bv, {
            data: r,
            renderItem: function e(t) {
              var n = t.data,
                r = t.index;
              return l.createElement(
                c.HC,
                {
                  wrap: !0,
                  extra: l.createElement(
                    'a',
                    {
                      onClick: function e() {
                        return u({ type: 'remove', value: n.value });
                      },
                      style: { color: 'red' },
                    },
                    'delete',
                  ),
                },
                r,
                ': ',
                n.label,
                ' ',
                n.value,
                l.createElement(
                  c.NM,
                  null,
                  (function a(e, t) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : '';
                    return new Array(e)
                      .fill(!0)
                      .map(function () {
                        return t;
                      })
                      .join(n);
                  })(
                    parseInt(n.value / 10),
                    '默认itemSize, 实际会根据内容计算内容高度,',
                  ),
                ),
              );
            },
            loadMoreItems: function e() {
              setTimeout(function () {
                r.length >= 120 || u({ type: 'add', data: o(20) });
              }, 600);
            },
            hasNextPage: v,
            pullToRefresh: !0,
            refreshing: m,
            onRefresh: function e() {
              h(!0),
                setTimeout(function () {
                  h(!1), u({ type: 'refresh' });
                }, 600);
            },
            itemSize: 44,
            pageSize: 20,
            renderIndicator: function e() {
              return l.createElement(
                c.kC,
                {
                  alignContent: 'center',
                  justify: 'center',
                  style: { height: 44 },
                },
                l.createElement(c.P2, { text: '加载中...' }),
              );
            },
            renderFooter: function e() {
              return l.createElement(
                c.kC,
                {
                  alignContent: 'center',
                  justify: 'center',
                  style: { height: 44 },
                },
                l.createElement(c.ZT, { type: 'caption' }, '已经没有了'),
              );
            },
          }),
        );
      }
    },
  },
]);
