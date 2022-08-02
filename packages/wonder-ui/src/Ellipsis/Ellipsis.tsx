import * as React from 'react';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './EllipsisClasses';
import {
  composeClasses,
  css,
  getComputedStyle,
  ownerDocument,
  unitToPx
} from '@wonder-ui/utils';
import { useForkRef, useResizeEffect } from '@wonder-ui/hooks';
import type { EllipsisProps, EllipsisedValue } from './EllipsisTypes';
import { typographyCssVars } from '../Typography/TypographyClasses';

const useClasses = (
  props: EllipsisProps & { exceeded: boolean; expanded: boolean }
) => {
  const { classes, exceeded, expanded } = props;
  const slots = {
    root: [
      'root',
      exceeded ? (expanded ? 'expanded' : 'collapsed') : undefined
    ],
    expandAction: ['expandAction'],
    collapseAction: ['collapseAction']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const EllipsisRoot = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Root'
})({
  overflow: 'hidden',
  ...typographyCssVars.style({
    lineHeight: '1.5'
  })
});

const EllipsisAction = styled('a', {
  name: COMPONENT_NAME,
  slot: 'Action'
})(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: 'pointer'
}));

const Ellipsis = React.forwardRef<HTMLDivElement, EllipsisProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      rows = 1,
      direction = 'end',
      expandText = '',
      collapseText = '',
      children: content,
      className,
      ...rest
    } = props;

    const rootRef = React.useRef<HTMLDivElement>(null);
    const handleRef = useForkRef(rootRef, ref);

    const [ellipsised, setEllipsised] = React.useState<EllipsisedValue>({});
    const [expanded, setExpanded] = React.useState(false);
    const [exceeded, setExceeded] = React.useState(false);

    useResizeEffect(() => {
      const { current: root } = rootRef;
      if (!root) return;

      const originStyle = getComputedStyle(root);
      const container = document.createElement('div');
      const styleNames: string[] = Array.prototype.slice.apply(originStyle);
      styleNames.forEach((name) => {
        container.style.setProperty(name, originStyle.getPropertyValue(name));
      });
      container.style.position = 'fixed';
      container.style.left = '999999px';
      container.style.top = '999999px';
      container.style.zIndex = '-1000';
      container.style.height = 'auto';
      container.style.minHeight = 'auto';
      container.style.maxHeight = 'auto';
      container.style.textOverflow = 'clip';
      container.style.whiteSpace = 'normal';
      container.style.webkitLineClamp = 'unset';
      container.style.webkitBoxOrient = 'unset';
      container.style.display = 'block';
      const lineHeight = unitToPx(originStyle.lineHeight);
      const maxHeight = Math.floor(
        lineHeight * (rows + 0.5) +
          unitToPx(originStyle.paddingTop) +
          unitToPx(originStyle.paddingBottom)
      );
      container.innerText = content;
      ownerDocument(root).body.appendChild(container);

      const end = content.length;
      const actionText = expanded ? collapseText : expandText;

      if (container.offsetHeight <= maxHeight) {
        setExceeded(false);
      } else {
        setExceeded(true);

        const middle = Math.floor((0 + end) / 2);
        const ellipsised =
          direction === 'middle'
            ? checkMiddle([0, middle], [middle, end])
            : check(0, end);
        setEllipsised(ellipsised);
      }

      ownerDocument(root).body.removeChild(container);

      function check(left: number, right: number): EllipsisedValue {
        if (right - left <= 1) {
          if (direction === 'end') {
            return {
              leading: content.slice(0, left) + '...'
            };
          } else {
            return {
              tailing: '...' + content.slice(right, end)
            };
          }
        }
        const middle = Math.round((left + right) / 2);
        if (direction === 'end') {
          container.innerText = content.slice(0, middle) + '...' + actionText;
        } else {
          container.innerText = actionText + '...' + content.slice(middle, end);
        }
        if (container.offsetHeight <= maxHeight) {
          if (direction === 'end') {
            return check(middle, right);
          } else {
            return check(left, middle);
          }
        } else {
          if (direction === 'end') {
            return check(left, middle);
          } else {
            return check(middle, right);
          }
        }
      }

      function checkMiddle(
        leftPart: [number, number],
        rightPart: [number, number]
      ): EllipsisedValue {
        if (
          leftPart[1] - leftPart[0] <= 1 &&
          rightPart[1] - rightPart[0] <= 1
        ) {
          return {
            leading: content.slice(0, leftPart[0]) + '...',
            tailing: '...' + content.slice(rightPart[1], end)
          };
        }
        const leftPartMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2);
        const rightPartMiddle = Math.floor((rightPart[0] + rightPart[1]) / 2);
        container.innerText =
          content.slice(0, leftPartMiddle) +
          '...' +
          actionText +
          '...' +
          content.slice(rightPartMiddle, end);
        if (container.offsetHeight <= maxHeight) {
          return checkMiddle(
            [leftPartMiddle, leftPart[1]],
            [rightPart[0], rightPartMiddle]
          );
        } else {
          return checkMiddle(
            [leftPart[0], leftPartMiddle],
            [rightPartMiddle, rightPart[1]]
          );
        }
      }
    }, rootRef);

    const classes = useClasses({ ...props, exceeded, expanded });

    const expandActionElement =
      exceeded && expandText ? (
        <EllipsisAction
          onClick={() => setExpanded(true)}
          className={classes.expandAction}
        >
          {expandText}
        </EllipsisAction>
      ) : null;

    const collapseActionElement =
      exceeded && expandText ? (
        <EllipsisAction
          onClick={() => setExpanded(false)}
          className={classes.collapseAction}
        >
          {collapseText}
        </EllipsisAction>
      ) : null;

    const renderContent = () => {
      if (!exceeded) {
        return content;
      }
      if (expanded) {
        return (
          <>
            {content}
            {collapseActionElement}
          </>
        );
      } else {
        return (
          <>
            {ellipsised.leading}
            {expandActionElement}
            {ellipsised.tailing}
          </>
        );
      }
    };

    return (
      <EllipsisRoot
        ref={handleRef}
        className={css(classes.root, className)}
        {...rest}
      >
        {renderContent()}
      </EllipsisRoot>
    );
  }
);

export default Ellipsis;
