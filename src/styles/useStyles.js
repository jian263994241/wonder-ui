import React from 'react';
import makeStyles from './makeStyles';
import useTheme from './useTheme';

export default function useStyles(styles){
  const theme = useTheme();
  return React.useMemo(()=> makeStyles(styles, theme) , [styles]);
}