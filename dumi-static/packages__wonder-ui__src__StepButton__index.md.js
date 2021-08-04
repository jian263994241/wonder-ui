(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [66],
  {
    '0H/f': function (e, t, l) {
      'use strict';
      var n = l('q1tI'),
        a = l.n(n),
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
          m = e.props,
          d = Object(r['useApiData'])(t),
          E = Object(n['useContext'])(r['context']),
          i = E.locale,
          o = /^zh|cn$/i.test(i) ? u['zh-CN'] : u['en-US'],
          s = a.a.useRef(null),
          p = Object(c['b'])(() => ('string' === typeof m ? m.split('|') : []));
        return (
          a.a.useEffect(() => {
            var e;
            s.current &&
              (null === (e = s.current.previousElementSibling) ||
                void 0 === e ||
                e.append(' - '.concat(t)));
          }, []),
          a.a.createElement(
            a.a.Fragment,
            null,
            d &&
              a.a.createElement(
                'table',
                { style: { marginTop: 24 }, ref: s },
                a.a.createElement(
                  'thead',
                  null,
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement(
                      'th',
                      { style: { width: '12%' } },
                      o.name,
                    ),
                    a.a.createElement('th', null, o.description),
                    a.a.createElement('th', null, o.type),
                    a.a.createElement(
                      'th',
                      { style: { width: '10%' } },
                      o.default,
                    ),
                  ),
                ),
                a.a.createElement(
                  'tbody',
                  null,
                  d[l].map((e) =>
                    p.includes(e.identifier)
                      ? a.a.createElement(
                          'tr',
                          { key: e.identifier },
                          a.a.createElement('td', null, e.identifier),
                          a.a.createElement('td', null, e.description || '-'),
                          a.a.createElement(
                            'td',
                            null,
                            a.a.createElement('code', null, e.type),
                          ),
                          a.a.createElement(
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
    x8ZG: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        r = l('dEAq');
      l('0H/f'), l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
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
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'h3',
              { id: 'stepbutton' },
              a.a.createElement(
                r['AnchorLink'],
                { to: '#stepbutton', 'aria-hidden': 'true', tabIndex: -1 },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'StepButton',
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', null, '\u53c2\u6570'),
                  a.a.createElement('th', null, '\u8bf4\u660e'),
                  a.a.createElement('th', null, '\u7c7b\u578b'),
                  a.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'children'),
                  a.a.createElement('td', null, '\u5185\u5bb9'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'ReactNode'),
                  ),
                  a.a.createElement('td', null),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'className'),
                  a.a.createElement('td', null),
                  a.a.createElement('td', null),
                  a.a.createElement('td', null),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'component'),
                  a.a.createElement('td', null, '\u6839\u8282\u70b9'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'ElementType'),
                  ),
                  a.a.createElement('td', null, 'span'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'delay'),
                  a.a.createElement(
                    'td',
                    null,
                    '\u89e6\u53d1\u957f\u6309\u52a8\u4f5c\u5ef6\u8fdf',
                  ),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'number'),
                  ),
                  a.a.createElement('td', null, '600ms'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'interval'),
                  a.a.createElement(
                    'td',
                    null,
                    '\u8fde\u7eed\u52a8\u4f5c\u95f4\u9694',
                  ),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'number'),
                  ),
                  a.a.createElement('td', null, '200ms'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'onStep'),
                  a.a.createElement('td', null, '\u4e8b\u4ef6'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, '(): void'),
                  ),
                  a.a.createElement('td', null),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'style'),
                  a.a.createElement('td', null, '\u6837\u5f0f'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'CSSProperties'),
                  ),
                  a.a.createElement('td', null),
                ),
              ),
            ),
          ),
        )
      );
    },
  },
]);
