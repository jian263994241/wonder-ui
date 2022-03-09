import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './ContentBlockClasses';
import { composeClasses, css } from '@wonder-ui/utils';
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

const ContentBlockRoot = styled('div', {
  slot: 'Root',
  name: COMPONENT_NAME
})({});

const ContentBlockTitle = styled('div', {
  slot: 'Title',
  name: COMPONENT_NAME
})(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginTop: `var(--block-title-margin-top, 12px)`,
  marginBottom: `var(--block-title-margin-bottom, 6px)`,
  paddingLeft: `calc(var(--block-padding-horizontal, ${theme.spacing(
    2
  )}px) + env(safe-area-inset-left, 0px))`,
  paddingRight: `calc(var(--block-padding-horizontal, ${theme.spacing(
    2
  )}px) + env(safe-area-inset-right, 0px))`
}));

const ContentBlockContent = styled('div', {
  slot: 'Content',
  name: COMPONENT_NAME
})<StyleProps>(({ theme, styleProps }) => ({
  ...theme.typography.body2,

  paddingTop: `var(--block-padding-vertical, ${theme.spacing(2)}px)`,
  paddingBottom: `var(--block-padding-vertical, ${theme.spacing(2)}px)`,
  ...(styleProps.strong && {
    backgroundColor: theme.palette.background.paper,
    ...(styleProps.inset
      ? {
          border: `thin solid var(--block-divider-color, ${theme.palette.divider})`
        }
      : {
          borderTop: `thin solid var(--block-divider-color, ${theme.palette.divider})`,
          borderBottom: `thin solid var(--block-divider-color, ${theme.palette.divider})`
        })
  }),
  ...(styleProps.inset
    ? {
        borderRadius: `var(--block-inset-border-radius, 8px)`,
        marginLeft: `calc(var(--block-inset-side-margin, ${theme.spacing(
          2
        )}px) + env(safe-area-inset-left, 0px))`,
        marginRight: `calc(var(--block-inset-side-margin, ${theme.spacing(
          2
        )}px) + env(safe-area-inset-right, 0px))`,
        paddingLeft: `var(--block-padding-horizontal, ${theme.spacing(2)}px)`,
        paddingRight: `var(--block-padding-horizontal, ${theme.spacing(2)}px)`
      }
    : {
        paddingLeft: `calc(var(--block-padding-horizontal, ${theme.spacing(
          2
        )}px) + env(safe-area-inset-left, 0px))`,
        paddingRight: `calc(var(--block-padding-horizontal, ${theme.spacing(
          2
        )}px) + env(safe-area-inset-right, 0px))`
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
