import Circular from '../CircularProgress/Circular';
import Indicator from './Indicator';
import styled from '../styles/styled';
import Typography from '../Typography';
import useThemeProps from '../styles/useThemeProps';
import {
  activityIndicatorClasses,
  activityIndicatorCssVars,
  COMPONENT_NAME,
  useActivityIndicatorCssVars
} from './ActivityIndicatorClasses';
import { capitalize, composeClasses, css, forwardRef } from '@wonder-ui/utils';
import type { ActivityIndicatorProps } from './ActivityIndicatorTypes';

const useClasses = (styleProps: ActivityIndicatorProps) => {
  const { classes, vertical, color, iconSize, type } = styleProps;

  const slots = {
    root: [
      'root',
      vertical && 'vertical',
      type && type,
      iconSize && `iconSize${capitalize(iconSize)}`,
      color && `color${capitalize(color)}`
    ],
    icon: ['icon'],
    text: ['text']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const ActivityIndicatorRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})({
  display: 'flex',
  alignItems: 'center',
  [`&.${activityIndicatorClasses.vertical}`]: {
    flexDirection: 'column'
  },
  [`& > .${activityIndicatorClasses.text}`]: {
    marginLeft: activityIndicatorCssVars.value('gap')
  },
  [`&.${activityIndicatorClasses.vertical} > .${activityIndicatorClasses.text}`]:
    {
      marginTop: activityIndicatorCssVars.value('gap'),
      marginLeft: 0
    },

  [`&.${activityIndicatorClasses.iconSizeLarge}`]:
    activityIndicatorCssVars.style({
      size: activityIndicatorCssVars.value('iconSizeLarge')
    }),
  [`&.${activityIndicatorClasses.iconSizeMedium}`]:
    activityIndicatorCssVars.style({
      size: activityIndicatorCssVars.value('iconSizeMedium')
    }),
  [`&.${activityIndicatorClasses.iconSizeSmall}`]:
    activityIndicatorCssVars.style({
      size: activityIndicatorCssVars.value('iconSizeSmall')
    }),
  [`&.${activityIndicatorClasses.colorPrimary}`]:
    activityIndicatorCssVars.style({
      color: activityIndicatorCssVars.value('colorPrimary')
    }),
  [`&.${activityIndicatorClasses.colorSecondary}`]:
    activityIndicatorCssVars.style({
      color: activityIndicatorCssVars.value('colorSecondary')
    }),
  [`&.${activityIndicatorClasses.colorLight}`]: activityIndicatorCssVars.style({
    color: activityIndicatorCssVars.value('colorLight')
  }),
  [`&.${activityIndicatorClasses.colorDark}`]: activityIndicatorCssVars.style({
    color: activityIndicatorCssVars.value('colorDark')
  })
});

const ActivityIndicatorIcon = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Icon'
})({
  fontSize: activityIndicatorCssVars.value('size'),
  color: activityIndicatorCssVars.value('color')
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

    useActivityIndicatorCssVars();

    return (
      <ActivityIndicatorRoot
        className={css(classes.root, className)}
        ref={ref}
        {...rest}
      >
        <ActivityIndicatorIcon className={classes.icon}>
          {type === 'circular' ? <Circular /> : <Indicator />}
        </ActivityIndicatorIcon>
        {text && (
          <Typography noWrap className={classes.text} variant="body2">
            {text}
          </Typography>
        )}
      </ActivityIndicatorRoot>
    );
  }
);

export default ActivityIndicator;
