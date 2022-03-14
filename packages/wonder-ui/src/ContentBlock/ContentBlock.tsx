import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './ContentBlockClasses';
import { createCssVars, composeClasses, css } from '@wonder-ui/utils';
import type { ContentBlockProps, StyleProps } from './ContentBlockTypes';

const useClasses = (props: StyleProps) => {
  const { classes, inset, strong } = props.styleProps;

  const slots = {
    root: ['root', inset && 'inset', strong && 'strong'],
    title: ['title'],
    content: ['content']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const {
  returnCssVarStyles,
  getCssValue,
  getCalcValue
} = createCssVars(COMPONENT_NAME, [
  'titltMarginTop',
  'titleMarginBottom',
  'titleMarginHorizontal',
  'paddingHorizontal',
  'paddingVertical',
  'safeAreaLeft',
  'safeAreaRight',
  'dividerColor',
  'insetSideMargin',
  'insetBorderRadius'
]);

const ContentBlockRoot = styled('div', {
  slot: 'Root',
  name: COMPONENT_NAME
})(({ theme }) => {
  const spacing = theme.spacing(2);

  return returnCssVarStyles({
    titltMarginTop: 12,
    titleMarginBottom: 6,
    titleMarginHorizontal: spacing,
    paddingHorizontal: spacing,
    paddingVertical: spacing,
    safeAreaLeft: 'env(safe-area-inset-left, 0px)',
    safeAreaRight: 'env(safe-area-inset-right, 0px)',
    dividerColor: theme.palette.divider,
    insetSideMargin: spacing,
    insetBorderRadius: 8
  });
});

const ContentBlockTitle = styled('div', {
  slot: 'Title',
  name: COMPONENT_NAME
})(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginTop: getCssValue('titltMarginTop'),
  marginBottom: getCssValue('titleMarginBottom'),
  paddingLeft: getCalcValue('+', 'titleMarginHorizontal', 'safeAreaLeft'),
  paddingRight: getCalcValue('+', 'titleMarginHorizontal', 'safeAreaRight')
}));

const ContentBlockContent = styled('div', {
  slot: 'Content',
  name: COMPONENT_NAME
})<StyleProps>(({ theme, styleProps }) => ({
  ...theme.typography.body2,
  paddingTop: getCssValue('paddingVertical'),
  paddingBottom: getCssValue('paddingVertical'),
  ...(styleProps.strong && {
    backgroundColor: theme.palette.background.paper,
    ...(styleProps.inset
      ? { border: `thin solid ${getCssValue('dividerColor')}` }
      : {
          borderTop: `thin solid ${getCssValue('dividerColor')}`,
          borderBottom: `thin solid ${getCssValue('dividerColor')}`
        })
  }),
  ...(styleProps.inset
    ? {
        borderRadius: getCssValue('insetBorderRadius'),
        marginLeft: getCalcValue('+', 'insetSideMargin', 'safeAreaLeft'),
        marginRight: getCalcValue('+', 'insetSideMargin', 'safeAreaRight'),
        paddingLeft: getCssValue('paddingHorizontal'),
        paddingRight: getCssValue('paddingHorizontal')
      }
    : {
        paddingLeft: getCalcValue('+', 'paddingHorizontal', 'safeAreaLeft'),
        paddingRight: getCalcValue('+', 'paddingHorizontal', 'safeAreaRight')
      })
}));

const ContentBlock = React.forwardRef<HTMLDivElement, ContentBlockProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      children,
      title,
      inset = false,
      strong = true,
      className,
      ...rest
    } = props;

    const styleProps = { ...props, inset, strong };

    const classes = useClasses({ styleProps });

    return (
      <ContentBlockRoot
        ref={ref}
        className={css(classes.root, className)}
        {...rest}
      >
        {title && (
          <ContentBlockTitle className={classes.title}>
            {title}
          </ContentBlockTitle>
        )}
        {children && (
          <ContentBlockContent
            styleProps={styleProps}
            className={classes.content}
          >
            {children}
          </ContentBlockContent>
        )}
      </ContentBlockRoot>
    );
  }
);

export default ContentBlock;
