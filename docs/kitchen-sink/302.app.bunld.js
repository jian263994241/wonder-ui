(self.webpackChunkwonder_ui = self.webpackChunkwonder_ui || []).push([
  [302],
  {
    52302: (e, r, l) => {
      'use strict';
      l.r(r), l.d(r, { default: () => u });
      var a = l(67294),
        t = l(7031),
        n = [
          { label: '苹果', value: '0' },
          { label: '橘子', value: '1' },
          { label: '香蕉', value: '2' },
        ];
      function u(e) {
        var r = a.useRef(),
          l = a.useCallback(function () {
            r.current.resetFields();
          }, []);
        return a.createElement(
          t.T3,
          { name: 'Form', navbar: !0 },
          a.createElement(
            t.l0,
            {
              ref: r,
              onFinishFailed: function e(r) {
                var l = r.errorFields;
                t.Vq.toast(l[0].errors.join());
              },
              onFinish: function e(r) {},
            },
            a.createElement(
              t.aV,
              {
                renderHeader: function e() {
                  return '基本';
                },
              },
              a.createElement(
                t.xJ,
                {
                  name: 'field_1',
                  rules: [{ required: !0, message: '请填写[基本]字段' }],
                },
                a.createElement(t.O6, { placeholder: '请输入' }, '基本'),
              ),
              a.createElement(
                t.xJ,
                {
                  name: 'field_2',
                  rules: [{ required: !0, message: '请填写[基本]字段' }],
                },
                a.createElement(t.O6, { placeholder: '请输入' }, '基本2'),
              ),
              a.createElement(
                t.xJ,
                {
                  name: 'field_3',
                  rules: [{ required: !0, message: '请填写[多行]字段' }],
                },
                a.createElement(
                  t.O6,
                  { placeholder: '请输入', multiline: !0 },
                  '多行',
                ),
              ),
              a.createElement(
                t.xJ,
                {
                  name: 'group2',
                  initialValue: '0',
                  rules: [{ required: !0, message: '请选择[性质]字段' }],
                },
                a.createElement(
                  t.O6,
                  {
                    renderInput: function e(r, l) {
                      var n = r.onChange,
                        u = r.value;
                      return a.createElement(t.X1, {
                        ref: l,
                        exclusive: !0,
                        data: [
                          { label: '公司', value: '0' },
                          { label: '个人', value: '1' },
                        ],
                        onChange: n,
                        value: u,
                      });
                    },
                  },
                  ' ',
                  '企业性质',
                  ' ',
                ),
              ),
              a.createElement(
                t.xJ,
                {
                  name: 'field_4',
                  rules: [{ required: !0, message: '请选择[选择]字段' }],
                },
                a.createElement(
                  t.cW,
                  { extra: '请选择', data: n, cols: 1 },
                  a.createElement(t.HC, { arrow: 'horizontal' }, '选择'),
                ),
              ),
              a.createElement(
                t.xJ,
                {
                  name: 'field_5',
                  rules: [{ required: !1, message: '请填写[数字]字段' }],
                },
                a.createElement(
                  t.O6,
                  {
                    extra: '元',
                    placeholder: '请输入',
                    alignRight: !0,
                    type: 'number',
                  },
                  '数字',
                ),
              ),
            ),
            a.createElement(
              t.aV,
              {
                renderHeader: function e() {
                  return '禁用字段';
                },
              },
              a.createElement(
                t.O6,
                { value: '不可编辑', readOnly: !0 },
                '只读',
              ),
              a.createElement(
                t.O6,
                { value: '不可编辑', disabled: !0 },
                '禁用',
              ),
            ),
            a.createElement(
              t.gO,
              { top: 5, blank: 1 },
              a.createElement(
                t.kC,
                null,
                a.createElement(
                  t.zx,
                  { fullWidth: !0, size: 'large', onClick: l },
                  '重置',
                ),
                a.createElement(
                  t.zx,
                  {
                    fullWidth: !0,
                    size: 'large',
                    color: 'primary',
                    type: 'submit',
                  },
                  '提交',
                ),
              ),
            ),
          ),
        );
      }
    },
  },
]);
