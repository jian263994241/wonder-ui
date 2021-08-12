(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [37],
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
          d = e.props,
          m = Object(r['useApiData'])(t),
          o = Object(n['useContext'])(r['context']),
          i = o.locale,
          E = /^zh|cn$/i.test(i) ? u['zh-CN'] : u['en-US'],
          s = a.a.useRef(null),
          p = Object(c['b'])(() => ('string' === typeof d ? d.split('|') : []));
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
            m &&
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
                      E.name,
                    ),
                    a.a.createElement('th', null, E.description),
                    a.a.createElement('th', null, E.type),
                    a.a.createElement(
                      'th',
                      { style: { width: '10%' } },
                      E.default,
                    ),
                  ),
                ),
                a.a.createElement(
                  'tbody',
                  null,
                  m[l].map((e) =>
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
    ruAI: function (e, t, l) {
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
              { id: 'dropdownmenuitem' },
              a.a.createElement(
                r['AnchorLink'],
                {
                  to: '#dropdownmenuitem',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'DropdownMenuItem',
            ),
            a.a.createElement(
              'p',
              null,
              '\u9664\u4e86\u652f\u6301 ',
              a.a.createElement('code', null, 'HTMLElement'),
              ' \u6240\u6709\u5c5e\u6027, \u8fd8\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027:',
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
                  a.a.createElement('td', null, 'arrow'),
                  a.a.createElement(
                    'td',
                    null,
                    '\u663e\u793a\u6307\u793a\u7bad\u5934',
                  ),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'boolean'),
                  ),
                  a.a.createElement('td', null),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'autoWidth'),
                  a.a.createElement('td', null, '\u81ea\u7136\u5bbd\u5ea6'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'boolean'),
                  ),
                  a.a.createElement('td', null),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'classes'),
                  a.a.createElement('td', null, 'css'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement(
                      'code',
                      null,
                      "'root', 'active', 'title'",
                    ),
                  ),
                  a.a.createElement('td', null),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'disableRipple'),
                  a.a.createElement(
                    'td',
                    null,
                    '\u7981\u7528\u6309\u94ae\u6ce2\u7eb9',
                  ),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'boolean'),
                  ),
                  a.a.createElement('td', null),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'overlay'),
                  a.a.createElement('td', null, '\u6d6e\u5c42'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement(
                      'code',
                      null,
                      'ReactNode | (actions: ',
                      '{',
                      'onClose',
                      '}',
                      ') => ReactNode',
                    ),
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
