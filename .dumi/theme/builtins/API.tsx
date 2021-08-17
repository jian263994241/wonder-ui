import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { context, useApiData } from 'dumi/theme';
import { useConst } from '@wonder-ui/hooks';
import type { IApiComponentProps } from 'dumi/theme';

const LOCALE_TEXTS = {
  'zh-CN': {
    name: '属性名',
    description: '描述',
    type: '类型',
    default: '默认值',
    required: '(必选)'
  },
  'en-US': {
    name: 'Name',
    description: 'Description',
    type: 'Type',
    default: 'Default',
    required: '(required)'
  }
};

export default ({
  identifier,
  export: expt,
  props
}: IApiComponentProps & { props?: string }) => {
  const data = useApiData(identifier);
  const { locale } = useContext(context);
  const texts = /^zh|cn$/i.test(locale!)
    ? LOCALE_TEXTS['zh-CN']
    : LOCALE_TEXTS['en-US'];

  const rootRef = React.useRef<HTMLTableElement>(null);

  const propsList = useConst(() => {
    if (typeof props === 'string') {
      return props.split('|');
    }

    return [];
  });

  React.useEffect(() => {
    if (rootRef.current) {
      rootRef.current.previousElementSibling?.append(` - ${identifier}`);
    }
  }, []);

  return (
    <>
      {data && (
        <table style={{ marginTop: 24 }} ref={rootRef}>
          <thead>
            <tr>
              <th style={{ width: '12%' }}>{texts.name}</th>
              <th>{texts.description}</th>
              <th>{texts.type}</th>
              <th style={{ width: '10%' }}>{texts.default}</th>
            </tr>
          </thead>
          <tbody>
            {data[expt]?.map((row) => {
              return propsList.includes(row.identifier) ? (
                <tr key={row.identifier}>
                  <td>{row.identifier}</td>
                  <td>{row.description || '-'}</td>
                  <td>
                    <code>{row.type}</code>
                  </td>
                  <td>
                    {row.default || (row.required && texts.required) || '-'}
                  </td>
                </tr>
              ) : null;
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
