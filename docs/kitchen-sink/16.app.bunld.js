(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    756: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return d;
        });
      var r = n(52),
        a = n.n(r),
        u = n(9),
        i = n.n(u),
        c = n(0),
        o = n.n(c),
        l = n(30);
      function f() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 15;
        return new Array(e).fill(!0).map(function () {
          return { label: 'item', value: 25 + Math.round(50 * Math.random()) };
        });
      }
      var s = f(20);
      function d(e) {
        var t = o.a.useReducer(function (e, t) {
            switch (t.type) {
              case 'add':
                return e.concat(f(20));
              case 'refresh':
                return s;
              case 'remove':
                var n = e.findIndex(function (e) {
                  return e.value === t.value;
                });
                return e.splice(n, 1), a()(e);
            }
          }, s),
          n = i()(t, 2),
          r = n[0],
          u = n[1],
          c = o.a.useState(!1),
          d = i()(c, 2),
          m = d[0],
          p = d[1],
          v = r.length < 120;
        return o.a.createElement(
          l.A,
          { name: 'ListView', navbar: !0, pageContent: !1 },
          o.a.createElement(l.z, {
            data: r,
            renderItem: function e(t) {
              var n = t.data,
                r = t.index;
              return o.a.createElement(
                l.y,
                {
                  wrap: !0,
                  extra: o.a.createElement(
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
                o.a.createElement(
                  l.f,
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
                r.length >= 120 || u({ type: 'add', data: f(20) });
              }, 600);
            },
            hasNextPage: v,
            pullToRefresh: !0,
            refreshing: m,
            onRefresh: function e() {
              p(!0),
                setTimeout(function () {
                  p(!1), u({ type: 'refresh' });
                }, 600);
            },
            itemSize: 44,
            pageSize: 20,
            renderIndicator: function e() {
              return o.a.createElement(
                l.r,
                {
                  alignContent: 'center',
                  justify: 'center',
                  style: { height: 44 },
                },
                o.a.createElement(l.c, { text: '加载中...' }),
              );
            },
            renderFooter: function e() {
              return o.a.createElement(
                l.r,
                {
                  alignContent: 'center',
                  justify: 'center',
                  style: { height: 44 },
                },
                o.a.createElement(l.H, { type: 'caption' }, '已经没有了'),
              );
            },
          }),
        );
      }
    },
  },
]);
