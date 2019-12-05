import { fade } from '../styles/colorManipulator';
import utils from '../../utils/utils';
import ButtonBase from '../ButtonBase';
import styled from '../styled';

export const WUI_button = styled(ButtonBase)((props) => {
  const { theme, variant, color, size, fullWidth: _fullWidth, full: _full } = props;

  const text = utils.equal(
    [variant, 'text'], 
    {
      padding: '6px 8px',
      color: theme.palette.getContrastText(theme.palette.background.paper),
    }
  );
  const textPrimary = utils.equal(
    [variant, 'text'],
    [color, 'primary'],
    {
      color: theme.palette.primary.main,
      '&:active': {
        backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (active: none)': {
          backgroundColor: 'transparent',
        },
      }
    }
  );
  const textSecondary = utils.equal(
    [variant, 'text'],
    [color, 'secondary'],
    {
      color: theme.palette.secondary.main,
      '&:active': {
        backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (active: none)': {
          backgroundColor: 'transparent',
        },
      },
    }
  );
  const outlined = utils.equal(
    [variant, 'outlined'],
    {
      padding: '5px 16px',
      border: `1px solid ${theme.palette.grey[300]}`,
      color: theme.palette.getContrastText(theme.palette.background.paper),
    }
  );
  const outlinedPrimary = utils.equal(
    [variant, 'outlined'],
    [color, 'primary'],
    {
      color: theme.palette.primary.main,
      border: `1px solid ${fade(theme.palette.primary.main, 0.5)}`,
      '&:active': {
        border: `1px solid ${theme.palette.primary.main}`,
        backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (active: none)': {
          backgroundColor: 'transparent',
        },
      },
    }
  );
  const outlinedSecondary = utils.equal(
    [variant, 'outlined'],
    [color, 'secondary'],
    {
      color: theme.palette.secondary.main,
      border: `1px solid ${fade(theme.palette.secondary.main, 0.5)}`,
      '&:active': {
        border: `1px solid ${theme.palette.secondary.main}`,
        backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (active: none)': {
          backgroundColor: 'transparent',
        },
      },
    }
  );
  const contained = utils.equal(
    [variant, 'contained'], 
    {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&[focusVisible]': {
        boxShadow: theme.shadows[6],
      },
      '&:active': {
        boxShadow: theme.shadows[8],
      },
      '&:active': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        '@media (active: none)': {
          backgroundColor: theme.palette.grey[300],
        }
      },
    }
  );

  const containedPrimary = utils.equal(
    [variant, 'contained'], 
    [color, 'primary'], 
    {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:active': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (active: none)': {
          backgroundColor: theme.palette.primary.main,
        },
      },
    }
  );

  const containedSecondary = utils.equal(
    [variant, 'contained'], 
    [color, 'secondary'], 
    {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:active': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (active: none)': {
          backgroundColor: theme.palette.secondary.main,
        },
      },
    }
  );

  const colorInherit =  utils.equal(
    [color, 'inherit'], 
    {
      color: 'inherit',
      borderColor: 'currentColor',
    }
  )

  const sizeSmall = utils.equal(
    [size, 'small'],
    {
      padding: '0px 4px',
      fontSize: theme.typography.pxToRem(13),
      minWidth: 'auto',
    }
  )

  const sizeLarge = utils.equal(
    [size, 'large'],
    {
      padding: '8px 24px',
      fontSize: theme.typography.pxToRem(15),
    }
  )

  const fullWidth = utils.equal(
    [_fullWidth, true],
    {
      width: '100%',
    }
  )

  const full = utils.equal(
    [_full, true],
    {
      width: '100%',
      height: '100%',
      borderRadius: 0
    }
  )

  return {
    lineHeight: 1.75,
    textAlign: 'center',
    boxSizing: 'border-box',
    minWidth: 64,
    padding: '4px 16px',
    borderRadius: theme.shape.borderRadius,
    fontSize: theme.typography.pxToRem(14),
    wordBreak: 'keep-all',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'flex',
    justifyContent: 'center',
    '&>span': {
      alignSelf: 'center',
    }, 
    '&:active': {
      textDecoration: 'none',
      backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (active: none)': {
        backgroundColor: 'transparent',
      },
      '&[disabled]': {
        backgroundColor: 'transparent',
      },
    },
    '&[disabled]': {
      opacity: 0.38
    },
    ...text,
    ...textPrimary,
    ...textSecondary,
    ...outlined,
    ...outlinedPrimary,
    ...outlinedSecondary,
    ...contained,
    ...containedPrimary,
    ...containedSecondary,
    ...colorInherit,
    ...sizeSmall,
    ...sizeLarge,
    ...fullWidth,
    ...full
  }
})

