import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './ContentBlockClasses';
import { composeClasses, css } from '@wonder-ui/utils';
import type { ContentBlockProps, StyleProps } from './ContentBlockTypes';

const useClasses = (props: StyleProps) => {
  const { classes, inset } = props.styleProps;

  const slots = {
    root: ['root', inset && 'inset'],
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
  backgroundColor: theme.palette.background.paper,
  paddingTop: `var(--block-padding-vertical, ${theme.spacing(2)}px)`,
  paddingBottom: `var(--block-padding-vertical, ${theme.spacing(2)}px)`,
  ...(styleProps.inset
    ? {
        border: `thin solid var(--block-divider-color, ${theme.palette.divider})`,
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
        borderTop: `thin solid var(--block-divider-color, ${theme.palette.divider})`,
        borderBottom: `thin solid var(--block-divider-color, ${theme.palette.divider})`,
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
    const { children, title, inset = false, className, ...rest } = props;

    const styleProps = { ...props, inset };

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
        <ContentBlockContent
          styleProps={styleProps}
          className={classes.content}
        >
          {children}
        </ContentBlockContent>
      </ContentBlockRoot>
    );
  }
);

export default ContentBlock;
