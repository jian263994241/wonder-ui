import * as React from 'react';
import * as PopperJS from '@popperjs/core';
import { usePopper } from 'react-popper';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { StyleProps } from '../styles/types';
import { useEventListener, useEnhancedEffect } from '@wonder-ui/hooks';

const PopoverRoot = styled('div', {
  name: 'WuiPopover',
  slot: 'Root'
})(() => ({}));

export interface PopoverProps {
  target?: Element | null;
  placement?: PopperJS.Placement;
  trigger?: 'click' | 'hover';
  children?: any;
}

const Popover = createFCWithTheme<PopoverProps>('WuiPopover', (props, ref) => {
  const { children, target, ...rest } = props;

  const [
    referenceElement,
    setReferenceElement
  ] = React.useState<Element | null>(null);
  const [popperElement, setPopperElement] = React.useState<HTMLElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = React.useState<HTMLElement | null>(
    null
  );

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: 'arrow', options: { element: arrowElement }, enabled: false }
    ]
  });

  useEnhancedEffect(() => {
    if (target) {
      setReferenceElement(target);
    }
  }, [target]);

  useEventListener('mousedown', (e: Event) => {}, { target });

  useEventListener('mouseup', (e: Event) => {}, { target });

  return (
    <div
      ref={(node) => setPopperElement(node)}
      style={styles.popper}
      {...attributes.popper}
    >
      {children}
      <div ref={(node) => setArrowElement(node)} style={styles.arrow} />
    </div>
  );
});

export default Popover;