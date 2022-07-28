import * as React from 'react';
import useRootCssVars from '../styles/useRootCssVars';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './ContentBlockClasses';
import { composeClasses, createCssVars, css } from '@wonder-ui/utils';
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
})({});

const ContentBlockTitle = styled(Typography, {
  slot: 'Title',
  name: COMPONENT_NAME
})({
  marginTop: cssVars.value('titltMarginTop'),
  marginBottom: cssVars.value('titleMarginBottom'),
  paddingLeft: cssVars.calc('titleMarginHorizontal', '+', 'safeAreaLeft'),
  paddingRight: cssVars.calc('titleMarginHorizontal', '+', 'safeAreaRight')
});

const ContentBlockContent = styled(Typography, {
  slot: 'Content',
  name: COMPONENT_NAME
})<StyleProps>(({ theme, styleProps }) => ({
  paddingTop: cssVars.value('paddingVertical'),
  paddingBottom: cssVars.value('paddingVertical'),
  ...(styleProps.strong && {
    backgroundColor: theme.palette.background.paper
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

    useRootCssVars((theme) =>
      cssVars.style({
        titltMarginTop: theme.spacing(1),
        titleMarginBottom: theme.spacing(1),
        titleMarginHorizontal: theme.spacing(1.5),
        paddingHorizontal: theme.spacing(1.5),
        paddingVertical: theme.spacing(1.5),
        safeAreaLeft: 'env(safe-area-inset-left, 0px)',
        safeAreaRight: 'env(safe-area-inset-right, 0px)',
        insetSideMargin: theme.spacing(1.5),
        insetBorderRadius: theme.spacing(1)
      })
    );

    return (
      <ContentBlockRoot
        ref={ref}
        className={css(classes.root, className)}
        {...rest}
      >
        {title && (
          <ContentBlockTitle
            className={classes.title}
            variant="subtitle2"
            color="textSecondary"
          >
            {title}
          </ContentBlockTitle>
        )}
        {children && (
          <ContentBlockContent
            styleProps={styleProps}
            className={classes.content}
            variant="body1"
          >
            {children}
          </ContentBlockContent>
        )}
      </ContentBlockRoot>
    );
  }
);

export default ContentBlock;
