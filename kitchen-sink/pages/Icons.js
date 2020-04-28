import React from 'react';
import { Page } from '@wonder-ui/core';
import { createUseStyles } from '@wonder-ui/styles';
import * as icons from '@wonder-ui/icons';
import map from 'lodash/map';

const useStyles = createUseStyles(theme=>({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  iconBox: {
    flexShrink: 0,
    color: 'rgba(0, 0, 0, 0.54)',
    width: '25%',
    overflow: 'hidden',
    fontSize: 12,
    textAlign: 'center',
    textOverflow: 'ellipsis',
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.87)',
    cursor: 'pointer',
    margin: '4px 0px',
    padding: 18,
    fontSize: 36,
    boxSizing: 'content-box',
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: 4,
    transition: theme.transitions.create('backgroundColor'),
    backgroundColor: '#FAFAFA',
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: theme.shadows[2],
    }
  },
  text: {
    marginBottom: 12,
    padding: '0 5px',
    overflow: 'hidden',
    overflowWrap: 'break-word',
  }
}))

export default function IconExmaples(props) {
  const classes = useStyles();

  return (
    <Page name="Icons" navbar >
      <div className={classes.root}>
        {
          map(icons, (IconComp, key)=>(
            <div className={classes.iconBox} key={key}>
              <IconComp className={classes.icon}/>
              <p className={classes.text}>{key}</p>
            </div>
          ))
        }
      </div>
    </Page>
  )
}