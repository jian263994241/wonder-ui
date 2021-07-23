import * as React from 'react';
import CircularProgress from '../CircularProgress';
import Indicator from '../Indicator';
import styled from '../styles/styled';
import Typography from '../Typography';
import useThemeProps from '../styles/useThemeProps';
import {
  capitalize,
  composeClasses,
  css,
  forwardRef,
  generateUtilityClasses
} from '@wonder-ui/utils';

const COMPONENT_NAME = 'WuiActivityIndicator';

const activityIndicatorClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'icon',
  'text',
  'vertical',
  'spinner',
  'circular',
  'iconSizeSmall',
  'iconSizeMedium',
  'iconSizeLarge',
  'colorInherit',
  'colorPrimary',
  'colorSecondary',
  'colorSuccess',
  'colorDanger',
  'colorWarning',
  'colorInfo',
  'colorLight',
  'colorDark'
]);

const useClasses = (styleProps: ActivityIndicatorStyleProps) => {
  const { classes, vertical, color, iconSize, type } = styleProps;

  const slots = {
    root: [
      'root',
      vertical && 'vertical',
      type && type,
      color && `color${capitalize(color)}`
    ],
    icon: ['icon', iconSize && `iconSize${capitalize(iconSize)}`],
    text: ['text']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const SIZE = {
  small: 16,
  medium: 24,
  large: 35
} as const;

export interface ActivityIndicatorProps {
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  classes?: Partial<typeof activityIndicatorClasses>;
  className?: string;
  iconSize?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  text?: string;
  type?: 'spinner' | 'circular';
  vertical?: boolean;
}

interface ActivityIndicatorStyleProps extends ActivityIndicatorProps {}

const ActivityIndicatorRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: ActivityIndicatorStyleProps }>(({ theme, styleProps }) => ({
  display: 'flex',
  alignItems: 'center',
  ...(styleProps.vertical
    ? {
        flexDirection: 'column',
        '& > span + span': {
          marginTop: theme.spacing(1)
        }
      }
    : {
        flexWrap: 'nowrap',

        '& > span + span': {
          marginLeft: theme.spacing(1)
        }
      })
}));

const ActivityIndicatorIcon = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Icon'
})<{ styleProps: ActivityIndicatorStyleProps }>(({ theme, styleProps }) => ({
  display: 'block',
  fontSize: theme.typography.pxToRem(SIZE[styleProps.iconSize!]),
  ...(styleProps.color != 'inherit' && {
    color: theme.palette[styleProps.color!]?.dark
  }),
  '& > *': {
    display: 'block'
  }
}));

const ActivityIndicatorText = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Text'
})({
  // color: 'inherit'
});

const ActivityIndicator = forwardRef<HTMLDivElement, ActivityIndicatorProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      color = 'inherit',
      className,
      type = 'circular',
      text,
      iconSize = 'small',
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
        <ActivityIndicatorIcon className={classes.icon} styleProps={styleProps}>
          {type === 'circular' ? (
            <CircularProgress size={SIZE[iconSize]} color={color} />
          ) : (
            <Indicator />
          )}
        </ActivityIndicatorIcon>
        {text && (
          <ActivityIndicatorText
            className={classes.text}
            component="span"
            variant="body2"
            color="inherit"
          >
            {text}
          </ActivityIndicatorText>
        )}
      </ActivityIndicatorRoot>
    );
  }
);

export default ActivityIndicator;
