import { createUseStyles } from '@wonder-ui/styles';

export default createUseStyles(
  (theme) => ({
    root: {
      display: 'flex',
      boxAlign: 'center',
      alignItems: 'center',
      height: 238,
      ...theme.typography.body2,
      backgroundColor: theme.palette.background.default,
      userSelect: 'none',
      '& .wui-picker': {
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        flex: 1,
        textAlign: 'center',
      },
      '& .wui-picker-item': {
        touchAction: 'manipulation',
        textAlign: 'center',
        height: theme.typography.pxToRem(34),
        lineHeight: theme.typography.pxToRem(34),
        color: theme.palette.text.primary,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        flex: 1,
        textAlign: 'center',
      },
      '& .wui-picker-content': {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        zIndex: 1,
      },
      '& .wui-picker-mask': {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        margin: '0 auto',
        width: '100%',
        zIndex: 3,
        backgroundImage:
          theme.palette.type == 'light'
            ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6))'
            : 'transparent',
        backgroundPosition: 'top, bottom',
        backgroundSize: '100% 204px',
        backgroundRepeat: 'no-repeat',
      },
      '& .wui-picker-indicator': {
        boxSizing: 'border-box',
        width: '100%',
        height: theme.typography.pxToRem(34),
        position: 'absolute',
        left: 0,
        top: 102,
        zIndex: 3,
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    },
  }),
  { name: 'Cascader' },
);
