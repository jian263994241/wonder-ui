(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [864],
  {
    96864: (t, e, n) => {
      'use strict';
      n.r(e), n.d(e, { default: () => l });
      var r = n(67294),
        c = n(7031);
      function l(t) {
        return r.createElement(
          c.T3,
          { name: 'Dialog', navbar: !0 },
          r.createElement(
            c.b0,
            { header: 'Default' },
            r.createElement(
              c.kC,
              null,
              r.createElement(
                c.zx,
                {
                  onClick: function t() {
                    c.Vq.alert({ text: 'Queue.1', title: 'Title' }),
                      c.Vq.alert({ text: 'Queue.2', title: 'Title' });
                  },
                },
                'alert',
              ),
              r.createElement(
                c.zx,
                {
                  onClick: function t() {
                    return c.Vq.confirm({
                      text: 'Confirm Text',
                      title: 'Title',
                      onOk: function t() {
                        return c.Vq.alert({ text: 'ok', title: 'Callback' });
                      },
                      onCancel: function t() {
                        return c.Vq.alert({
                          text: 'cancel',
                          title: 'Callback',
                        });
                      },
                    });
                  },
                },
                'confirm',
              ),
              r.createElement(
                c.zx,
                {
                  onClick: function t() {
                    return c.Vq.confirm({
                      text: 'Tap hold',
                      title: 'Title',
                      onOk: function t() {
                        return new Promise(function (t) {
                          c.Vq.toast('Tap hold', 2e3);
                        });
                      },
                    });
                  },
                },
                'Tap hold',
              ),
            ),
          ),
          r.createElement(
            c.b0,
            { header: 'Custom' },
            r.createElement(
              c.kC,
              null,
              r.createElement(
                c.zx,
                {
                  onClick: function t() {
                    return c.Vq.custom({
                      title: 'Custom Title',
                      text: 'Custom Text',
                      content: r.createElement('div', null, 'TextAfter node'),
                      actions: [
                        {
                          text: 'First button',
                          primary: !0,
                          onClick: function t() {
                            return c.Vq.alert({ text: 'First' });
                          },
                        },
                        {
                          text: 'Second button',
                          onClick: function t() {
                            return c.Vq.alert({ text: 'Second' });
                          },
                        },
                        {
                          text: 'Third button',
                          onClick: function t() {
                            return c.Vq.alert({ text: 'Third' });
                          },
                        },
                        { text: 'Cancel' },
                      ],
                    });
                  },
                },
                'multi-button',
              ),
              r.createElement(
                c.zx,
                {
                  onClick: function t() {
                    return c.Vq.custom({
                      actions: [
                        {
                          text: 'First button',
                          primary: !0,
                          onClick: function t() {
                            return c.Vq.alert({ text: 'First' });
                          },
                        },
                        {
                          text: 'Second button',
                          onClick: function t() {
                            return c.Vq.alert({ text: 'Second' });
                          },
                        },
                        {
                          text: 'Third button',
                          onClick: function t() {
                            return c.Vq.alert({ text: 'Third' });
                          },
                        },
                        { text: 'Cancel' },
                      ],
                    });
                  },
                },
                'actions',
              ),
              r.createElement(
                c.zx,
                {
                  onClick: function t() {
                    return c.Vq.custom({
                      title: 'Agreement',
                      text: r.createElement(
                        'p',
                        { style: { textAlign: 'left' } },
                        'text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text,text, text, text, text, text,text, text, text, text, text, text, text, text, text, text,text, text, text, text, text,text, text, text, text, text,',
                      ),
                      content: function t(e) {
                        var n = e.ref;
                        return r.createElement(
                          'p',
                          null,
                          r.createElement(
                            'label',
                            null,
                            r.createElement('input', {
                              type: 'checkbox',
                              ref: n,
                            }),
                            'I agree to this agreement',
                          ),
                        );
                      },
                      actions: [
                        { text: 'Cancel' },
                        {
                          text: 'Agree',
                          primary: !0,
                          onClick: function t(e, n) {
                            var r = n.contentRef;
                            return new Promise(function (t) {
                              r.current.checked
                                ? t()
                                : c.Vq.toast('Please check the checkbox.');
                            });
                          },
                        },
                      ],
                    });
                  },
                },
                'content',
              ),
            ),
          ),
        );
      }
    },
  },
]);
