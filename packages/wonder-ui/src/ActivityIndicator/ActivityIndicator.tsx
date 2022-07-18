import CircularProgress from '../CircularProgress';
import Indicator from './Indicator';
import styled from '../styles/styled';
import Typography from '../Typography';
import useThemeProps from '../styles/useThemeProps';
import {
  activityIndicatorClasses,
  COMPONENT_NAME
} from './ActivityIndicatorClasses';
import {
  capitalize,
  composeClasses,
  createCssVars,
  css,
  forwardRef
} from '@wonder-ui/utils';
import type { ActivityIndicatorProps } from './ActivityIndicatorTypes';
import Circular from '../CircularProgress/Circular';

const cssVars = createCssVars(COMPONENT_NAME, [
  'iconSizeSmall',
  'iconSizeMedium',
  'iconSizeLarge',
  'colorPrimary',
  'colorSecondary',
  'colorLight',
  'colorDark',
  'gap'
]);

const useClasses = (styleProps: ActivityIndicatorProps) => {
  const { classes, vertical, color, iconSize, type } = styleProps;

  const slots = {
    root: ['root', vertical && 'vertical', type && type],
    icon: [
      'icon',
      iconSize && `iconSize${capitalize(iconSize)}`,
      color && `color${capitalize(color)}`
    ],
    text: ['text']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const ActivityIndicatorRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: ActivityIndicatorProps }>(({ theme, styleProps }) => ({
  ...cssVars.style({
    iconSizeLarge: 36,
    iconSizeMedium: 24,
    iconSizeSmall: 16,
    colorPrimary: theme.palette.primary.main,
    colorSecondary: theme.palette.secondary.main,
    colorLight: theme.palette.light.main,
    colorDark: theme.palette.dark.main,
    gap: theme.spacing(1)
  }),
  display: 'flex',
  alignItems: 'center',
  [`&.${activityIndicatorClasses.vertical}`]: {
    flexDirection: 'column'
  },
  [`& > .${activityIndicatorClasses.text}`]: {
    marginLeft: cssVars.value('gap')
  },
  [`&.${activityIndicatorClasses.vertical} > .${activityIndicatorClasses.text}`]:
    {
      marginTop: cssVars.value('gap'),
      marginLeft: 0
    }
}));

const ActivityIndicatorIcon = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Icon'
})({
  [`&.${activityIndicatorClasses.iconSizeLarge}`]: {
    fontSize: cssVars.value('iconSizeLarge')
  },
  [`&.${activityIndicatorClasses.iconSizeMedium}`]: {
    fontSize: cssVars.value('iconSizeMedium')
  },
  [`&.${activityIndicatorClasses.iconSizeSmall}`]: {
    fontSize: cssVars.value('iconSizeSmall')
  },
  [`&.${activityIndicatorClasses.colorPrimary}`]: {
    color: cssVars.value('colorPrimary')
  },
  [`&.${activityIndicatorClasses.colorSecondary}`]: {
    color: cssVars.value('colorSecondary')
  },
  [`&.${activityIndicatorClasses.colorLight}`]: {
    color: cssVars.value('colorLight')
  },
  [`&.${activityIndicatorClasses.colorDark}`]: {
    color: cssVars.value('colorDark')
  }
});

const ActivityIndicator = forwardRef<HTMLDivElement, ActivityIndicatorProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      color = 'primary',
      className,
      type = 'circular',
      text,
      iconSize = 'medium',
      vertical = false,
      ...rest
    } = props;

    const styleProps = { ...props, iconSize, type, color, vertical };

    const classes = useClasses(styleProps);

    return (
      <ActivityIndicatorRoot
        className={css(classes.root, className)}
        ref={ref}
        styleProps={styleProps}
        {...rest}
      >
        <ActivityIndicatorIcon className={classes.icon}>
          {type === 'circular' ? <Circular /> : <Indicator />}
        </ActivityIndicatorIcon>
        {text && (
          <Typography
            noWrap
            className={classes.text}
            variant="body2"
            color="textSecondary"
          >
            {text}
          </Typography>
        )}
      </ActivityIndicatorRoot>
    );
  }
);

export default ActivityIndicator;
