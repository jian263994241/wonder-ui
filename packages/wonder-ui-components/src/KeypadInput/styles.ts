import { createStyles } from '@wonder-ui/styles';

export const styles = createStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  },
  body: {
    width: '100%',
    height: 43
  },
  boxItem: {
    width: 100 / 6 + '%',
    float: 'left',
    height: '100%',
    fontStyle: 'normal',
    lineHeight: '43px',
    background: '#fff',
    color: '#000',
    display: 'block',
    textAlign: 'center',
    boxSizing: 'border-box',
    border: '1px solid #DEDEDE',
    borderRight: 'none',
    '&:first-child': {
      borderRadius: '4px 0 0 4px'
    },
    '&:last-child': {
      borderRight: '1px solid #DEDEDE',
      borderRadius: '0 4px 4px 0'
    }
  }
}));
