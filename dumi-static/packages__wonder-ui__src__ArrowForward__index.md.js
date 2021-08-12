(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [18],
  {
    '0H/f': function (e, t, l) {
      'use strict';
      var a = l('q1tI'),
        n = l.n(a),
        r = l('dEAq'),
        c = l('AUa1'),
        i = {
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
          u = e.props,
          d = Object(r['useApiData'])(t),
          m = Object(a['useContext'])(r['context']),
          o = m.locale,
          E = /^zh|cn$/i.test(o) ? i['zh-CN'] : i['en-US'],
          s = n.a.useRef(null),
          p = Object(c['b'])(() => ('string' === typeof u ? u.split('|') : []));
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
            d &&
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
                      E.name,
                    ),
                    n.a.createElement('th', null, E.description),
                    n.a.createElement('th', null, E.type),
                    n.a.createElement(
                      'th',
                      { style: { width: '10%' } },
                      E.default,
                    ),
                  ),
                ),
                n.a.createElement(
                  'tbody',
                  null,
                  d[l].map((e) =>
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
                            e.default || (e.required && E.required) || '-',
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
    gGVM: function (e, t, l) {
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
              { id: 'arrowforward' },
              n.a.createElement(
                r['AnchorLink'],
                { to: '#arrowforward', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'ArrowForward',
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
                  n.a.createElement('td', null, 'direction'),
                  n.a.createElement('td', null, '\u65b9\u5411'),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement(
                      'code',
                      null,
                      "'left' | 'right' | 'up' | 'down'",
                    ),
                  ),
                  n.a.createElement('td', null, 'right'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'size'),
                  n.a.createElement('td', null, '\u5c3a\u5bf8'),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement(
                      'code',
                      null,
                      "'inherit' | 'large' | 'medium' | 'small'",
                    ),
                  ),
                  n.a.createElement('td', null, 'small'),
                ),
              ),
            ),
          ),
        )
      );
    },
  },
]);
