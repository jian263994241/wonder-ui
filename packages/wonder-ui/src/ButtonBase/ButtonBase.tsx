import * as React from 'react';
import { createStyles, withStyles, ClassKeysOfStyles } from '../styles';
import { useTouchFeedback, useForkRef } from '@wonder-ui/hooks';
import clsx from 'clsx';

const styles = createStyles((theme) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    textAlign: 'center',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent', // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none',
    border: 0,
    margin: 0, // Remove the margin in Safari
    borderRadius: 0,
    padding: 0, // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    appearance: 'none', // Reset
    textDecoration: 'none',
    fontSize: 'inherit',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    transition: theme.transitions.create([
      'background-color',
      'color',
      'opacity'
    ]),
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.
    },
    '&[disabled]': {
      pointerEvents: 'none', // Disable link interactions
      cursor: 'not-allowed'
    }
  }
}));

export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * css api
   */
  classes: ClassKeysOfStyles<typeof styles>;
}

export const ButtonBase = React.forwardRef(
  (props: ButtonBaseProps, ref: any) => {
    const { classes, className, ...rest } = props;
    const elementRef = useTouchFeedback();
    const handleRef = useForkRef(elementRef, ref);

    return (
      <button
        className={clsx(classes.root, className)}
        ref={handleRef}
        {...rest}
      />
    );
  }
);

ButtonBase.displayName = 'ButtonBase';

export default withStyles(styles)(ButtonBase);
