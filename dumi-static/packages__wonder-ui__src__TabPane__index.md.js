(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [70],
  {
    '0H/f': function (e, t, l) {
      'use strict';
      var a = l('q1tI'),
        n = l.n(a),
        r = l('dEAq'),
        c = l('AUa1'),
        u = {
          'zh-CN': {
            name: '\u5c5e\u6027\u540d',
            description: '\u63cf\u8ff0',
            type: '\u7c7b\u578b',
            default: '\u9ed8\u8ba4\u503c',
            required: '(\u5fc5\u9009)',
          },
          'en-US': {
            name: 'Name',
            description: 'Description',
            type: 'Type',
            default: 'Default',
            required: '(required)',
          },
        };
      t['a'] = (e) => {
        var t = e.identifier,
          l = e.export,
          d = e.props,
          m = Object(r['useApiData'])(t),
          E = Object(a['useContext'])(r['context']),
          i = E.locale,
          o = /^zh|cn$/i.test(i) ? u['zh-CN'] : u['en-US'],
          s = n.a.useRef(null),
          p = Object(c['b'])(() => ('string' === typeof d ? d.split('|') : []));
        return (
          n.a.useEffect(() => {
            var e;
            s.current &&
              (null === (e = s.current.previousElementSibling) ||
                void 0 === e ||
                e.append(' - '.concat(t)));
          }, []),
          n.a.createElement(
            n.a.Fragment,
            null,
            m &&
              n.a.createElement(
                'table',
                { style: { marginTop: 24 }, ref: s },
                n.a.createElement(
                  'thead',
                  null,
                  n.a.createElement(
                    'tr',
                    null,
                    n.a.createElement(
                      'th',
                      { style: { width: '12%' } },
                      o.name,
                    ),
                    n.a.createElement('th', null, o.description),
                    n.a.createElement('th', null, o.type),
                    n.a.createElement(
                      'th',
                      { style: { width: '10%' } },
                      o.default,
                    ),
                  ),
                ),
                n.a.createElement(
                  'tbody',
                  null,
                  m[l].map((e) =>
                    p.includes(e.identifier)
                      ? n.a.createElement(
                          'tr',
                          { key: e.identifier },
                          n.a.createElement('td', null, e.identifier),
                          n.a.createElement('td', null, e.description || '-'),
                          n.a.createElement(
                            'td',
                            null,
                            n.a.createElement('code', null, e.type),
                          ),
                          n.a.createElement(
                            'td',
                            null,
                            e.default || (e.required && o.required) || '-',
                          ),
                        )
                      : null,
                  ),
                ),
              ),
          )
        );
      };
    },
    xxEq: function (e, t, l) {
      'use strict';
      l.r(t);
      var a = l('q1tI'),
        n = l.n(a),
        r = l('dEAq');
      l('0H/f'), l('JjdP');
      t['default'] = (e) => (
        n.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            r['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: 'markdown' },
            n.a.createElement(
              'h3',
              { id: 'tabpane' },
              n.a.createElement(
                r['AnchorLink'],
                { to: '#tabpane', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'TabPane',
            ),
            n.a.createElement(
              'table',
              null,
              n.a.createElement(
                'thead',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('th', null, '\u53c2\u6570'),
                  n.a.createElement('th', null, '\u8bf4\u660e'),
                  n.a.createElement('th', null, '\u7c7b\u578b'),
                  n.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'active'),
                  n.a.createElement('td', null, '\u6fc0\u6d3b\u5185\u5bb9'),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'boolean'),
                  ),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'children'),
                  n.a.createElement('td', null, '\u5185\u5bb9'),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'ReactNode'),
                  ),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'destroyInactiveTabPane'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u9690\u85cf\u65f6\u9500\u6bc1\u5185\u5bb9',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'boolean'),
                  ),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'forceRender'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u5f3a\u5236\u6e32\u67d3\u5185\u5bb9',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'boolean'),
                  ),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'value'),
                  n.a.createElement('td', null, '\u503c'),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'any'),
                  ),
                  n.a.createElement('td', null),
                ),
              ),
            ),
          ),
        )
      );
    },
  },
]);
