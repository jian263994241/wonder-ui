/**
 * title: 图标
 * inline: true
 */
/** @jsx jsx */
import { jsx, Typography } from '@wonder-ui/core';
import * as icons from '@wonder-ui/icons';

export default function Example() {
  return (
    <div
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        '.col': {
          flex: '0 0 auto',
          width: '25%',
          paddingLeft: '0.6rem',
          paddingRight: '0.6rem',
          marginBottom: '1.25rem',
          boxSizing: 'border-box',
          textAlign: 'center'
        },
        '.icon': {
          boxSizing: 'border-box',
          background: '#f8f9fa',
          borderRadius: '0.25rem',
          padding: '1.5rem 1rem',
          marginBottom: '0.5rem'
        },
        '.name': {
          color: '#6c757d'
        }
      }}
    >
      {(Object.keys(icons) as Array<keyof typeof icons>).map((key, index) => {
        const Icon = icons[key];
        return (
          <div className="col">
            <div className="icon">
              <Icon key={index} size="large" />
            </div>
            <Typography className="name" noWrap variant="body2">
              {Icon.displayName}
            </Typography>
          </div>
        );
      })}
    </div>
  );
}
