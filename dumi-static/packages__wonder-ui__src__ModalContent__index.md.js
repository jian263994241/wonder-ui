(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [49],
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
          E = Object(n['useContext'])(r['context']),
          o = E.locale,
          i = /^zh|cn$/i.test(o) ? u['zh-CN'] : u['en-US'],
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
                      i.name,
                    ),
                    a.a.createElement('th', null, i.description),
                    a.a.createElement('th', null, i.type),
                    a.a.createElement(
                      'th',
                      { style: { width: '10%' } },
                      i.default,
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
                            e.default || (e.required && i.required) || '-',
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
    CDLq: function (e, t, l) {
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
              { id: 'modalcontent' },
              a.a.createElement(
                r['AnchorLink'],
                { to: '#modalcontent', 'aria-hidden': 'true', tabIndex: -1 },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'ModalContent',
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
                  a.a.createElement('td', null, 'cancelButtonProps'),
                  a.a.createElement('td', null, 'Button props'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'ButtonProps'),
                  ),
                  a.a.createElement('td', null),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'cancelText'),
                  a.a.createElement('td', null, 'Cancel button text'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'string'),
                  ),
                  a.a.createElement('td', null, '\u53d6\u6d88'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'centered'),
                  a.a.createElement('td', null, 'Align center'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'boolean'),
                  ),
                  a.a.createElement('td', null, 'false'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'children'),
                  a.a.createElement('td', null, 'children'),
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
                  a.a.createElement('td', null, 'footer'),
                  a.a.createElement('td', null, 'Footer'),
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
                  a.a.createElement('td', null, 'header'),
                  a.a.createElement('td', null, 'Header'),
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
                  a.a.createElement('td', null, 'okButtonProps'),
                  a.a.createElement('td', null, 'Button props'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'ButtonProps'),
                  ),
                  a.a.createElement('td', null),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'okText'),
                  a.a.createElement('td', null, 'Ok button text'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'string'),
                  ),
                  a.a.createElement('td', null, '\u786e\u5b9a'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'onCancel'),
                  a.a.createElement('td', null, 'Click event'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, "ButtonProps['onClick']"),
                  ),
                  a.a.createElement('td', null),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'onClose'),
                  a.a.createElement('td', null, 'Click event'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, "ButtonProps['onClick']"),
                  ),
                  a.a.createElement('td', null),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'onOk'),
                  a.a.createElement('td', null, 'Click event'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, "ButtonProps['onClick']"),
                  ),
                  a.a.createElement('td', null),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'title'),
                  a.a.createElement('td', null, 'title'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'string'),
                  ),
                  a.a.createElement('td', null, '\u53d6\u6d88'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', null, 'titleTypographyProps'),
                  a.a.createElement('td', null, 'title props'),
                  a.a.createElement(
                    'td',
                    null,
                    a.a.createElement('code', null, 'TypographyProps'),
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
