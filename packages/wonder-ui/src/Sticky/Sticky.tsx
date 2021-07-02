import * as React from 'react';
import Portal from '../Portal';
import {
  containRect,
  DelayedRender,
  forwardRef,
  getRect,
  getWindow,
  IRectangle,
  mergedRef
} from '@wonder-ui/utils';
import { useEventCallback } from '@wonder-ui/hooks';

export interface StickyProps extends React.HTMLAttributes<HTMLDivElement> {
  container?: HTMLElement | null;
  offsetTop?: number;
  scrollEl?: HTMLElement | null;
}

const styles: Record<string, React.CSSProperties> = {
  shadow: {
    position: 'fixed',
    zIndex: 999
  }
};

const Sticky = forwardRef<HTMLDivElement, StickyProps>((props, ref) => {
  const {
    offsetTop = 0,
    children,
    className,
    style,
    container,
    scrollEl,
    ...rest
  } = props;

  const [rectInfo, setRect] = React.useState<IRectangle>();

  const rootRef = React.useRef<HTMLDivElement>(null);

  const syncPosition = () => {
    const rect = getRect(rootRef.current!);
    const fixedRect = { ...rect, top: offsetTop };
    const containerRect = getRect(container!);

    if (typeof offsetTop != 'number') return;

    if (rect.top <= offsetTop && containRect(containerRect, fixedRect)) {
      if (!rectInfo) {
        setRect(fixedRect);
      }
    } else {
      rectInfo && setRect(undefined);
    }
  };

  const callback = useEventCallback(syncPosition);

  const handleResize = useEventCallback(() => {
    setRect(undefined);
    setTimeout(syncPosition, 10);
  });

  React.useEffect(syncPosition, []);

  React.useEffect(() => {
    const currentWindow = getWindow(rootRef.current!);
    const scrollContainer = scrollEl ? scrollEl : currentWindow;

    scrollContainer.addEventListener('scroll', callback);

    currentWindow.addEventListener('resize', handleResize);

    return () => {
      scrollContainer.removeEventListener('scroll', callback);
      currentWindow.removeEventListener('resize', handleResize);
    };
  }, [scrollEl]);

  return (
    <React.Fragment>
      <div
        ref={mergedRef(rootRef, ref)}
        className={className}
        style={{
          ...style,
          ...(rectInfo && {
            visibility: 'hidden'
          })
        }}
        {...rest}
      >
        {children}
      </div>
      <DelayedRender>
        <Portal>
          <div
            className={className}
            style={{
              ...style,
              ...styles.shadow,
              ...(rectInfo
                ? { top: rectInfo.top, left: rectInfo.left }
                : { display: 'none' })
            }}
            {...rest}
          >
            {children}
          </div>
        </Portal>
      </DelayedRender>
    </React.Fragment>
  );
});

export default Sticky;
