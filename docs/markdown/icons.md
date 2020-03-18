
```js
import React from 'react';
import { createUseStyles } from '@wonder-ui/styles';
import * as icons from '@wonder-ui/icons';
import map from 'lodash/map';

const useStyles = createUseStyles({
  iconBox: {
    color: 'rgba(0, 0, 0, 0.54)',
    width: 86,
    margin: '0 4px',
    display: 'inline-block',
    overflow: 'hidden',
    fontSize: 12,
    textAlign: 'center',
    textOverflow: 'ellipsis',
    '& p': {
      margin: 0,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    }
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.87)',
    cursor: 'pointer',
    margin: '4px 0px',
    padding: 16,
    fontSize: 36,
    boxSizing: 'content-box',
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: 4
  }
})

function IconExmaples(props) {
  const classes = useStyles();

  return (
    <div>
      {
        map(icons, (IconComp, key)=>{

          return (
            <div className={classes.iconBox} key={key}>
              <IconComp className={classes.icon}/>
              <p>{key}</p>
            </div>
          )
        })
      }
    </div>
  )
};
<IconExmaples/>
```