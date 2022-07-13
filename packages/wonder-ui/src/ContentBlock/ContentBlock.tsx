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

const cssVars = createCssVars(COMPONENT_NAME, [
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
  const spacing = 12;

  return cssVars.style({
    titltMarginTop: 8,
    titleMarginBottom: 8,
    titleMarginHorizontal: spacing,
    paddingHorizontal: spacing,
    paddingVertical: spacing,
    safeAreaLeft: 'env(safe-area-inset-left, 0px)',
    safeAreaRight: 'env(safe-area-inset-right, 0px)',
    // dividerColor: theme.palette.divider,
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
  marginTop: cssVars.value('titltMarginTop'),
  marginBottom: cssVars.value('titleMarginBottom'),
  paddingLeft: cssVars.calc('titleMarginHorizontal', '+', 'safeAreaLeft'),
  paddingRight: cssVars.calc('titleMarginHorizontal', '+', 'safeAreaRight')
}));

const ContentBlockContent = styled('div', {
  slot: 'Content',
  name: COMPONENT_NAME
})<StyleProps>(({ theme, styleProps }) => ({
  ...theme.typography.body2,
  paddingTop: cssVars.value('paddingVertical'),
  paddingBottom: cssVars.value('paddingVertical'),
  ...(styleProps.strong && {
    backgroundColor: theme.palette.background.paper
    // ...(styleProps.inset
    //   ? { border: `thin solid ${cssVars.value('dividerColor')}` }
    //   : {
    //       borderTop: `thin solid ${cssVars.value('dividerColor')}`,
    //       borderBottom: `thin solid ${cssVars.value('dividerColor')}`
    //     })
  }),
  ...(styleProps.inset
    ? {
        borderRadius: cssVars.value('insetBorderRadius'),
        marginLeft: cssVars.calc('insetSideMargin', '+', 'safeAreaLeft'),
        marginRight: cssVars.calc('insetSideMargin', '+', 'safeAreaRight'),
        paddingLeft: cssVars.value('paddingHorizontal'),
        paddingRight: cssVars.value('paddingHorizontal')
      }
    : {
        paddingLeft: cssVars.calc('paddingHorizontal', '+', 'safeAreaLeft'),
        paddingRight: cssVars.calc('paddingHorizontal', '+', 'safeAreaRight')
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
