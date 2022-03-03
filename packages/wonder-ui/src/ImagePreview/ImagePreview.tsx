import * as React from 'react';
import CloseButton from '../CloseButton';
import ImagePreviewItem from './ImagePreviewItem';
import Modal from '../Modal/Modal';
import styled from '../styles/styled';
import Swipe, { SwipeAction } from '../Swipe';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './ImagePreviewClasses';
import { composeClasses, css, getRect, getSupport } from '@wonder-ui/utils';
import { useReactive, useResizeEffect } from '@wonder-ui/hooks';
import type { ImagePreviewProps } from './ImagePreviewTypes';

const useClasses = (styleProps: ImagePreviewProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root'],
    modal: ['modal'],
    swipe: ['swipe'],
    swipeItem: ['swipeItem'],
    img: ['img'],
    close: ['close'],
    indicators: ['indicators']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const ImagePreviewRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})({
  width: '100%',
  height: '100%',
  position: 'relative'
});

const ImagePreviewModal = styled(Modal, {
  name: COMPONENT_NAME,
  slot: 'Root'
})({});

const ImagePreviewSwipe = styled(Swipe, {
  name: COMPONENT_NAME,
  slot: 'Swipe'
})({
  height: '100%'
});

const ImagePreviewClose = styled(CloseButton, {
  name: COMPONENT_NAME,
  slot: 'Close'
})({
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 22
});

const ImagePreviewIndicators = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Indicators'
})({
  position: 'absolute',
  color: '#e2e2e2',
  top: 0,
  left: 0,
  zIndex: 10,
  width: '100%',
  textAlign: 'center',
  padding: 8,
  boxSizing: 'border-box'
});

const ImagePreview = React.forwardRef<HTMLDivElement, ImagePreviewProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      className,
      style,
      closeButton,
      defaultIndex = 0,
      images = [],
      loop = true,
      showIndicators = true,
      showCloseButton = false,
      showSwitchButtons = false,
      visible,
      onIndexChange,
      onClose,
      onRenderIndicator,
      onAfterClose
    } = props;

    const swipeRef = React.useRef<SwipeAction>();
    const swipeRootRef = React.useRef<HTMLDivElement>(null);
    const support = getSupport();

    const state = useReactive({
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    });

    const resize = () => {
      if (swipeRef.current && swipeRootRef.current) {
        const rect = getRect(swipeRootRef.current);
        state.rootWidth = rect.width;
        state.rootHeight = rect.height;
        swipeRef.current.resize();
      }
    };

    useResizeEffect(resize, swipeRootRef);

    const classes = useClasses(props);

    return (
      <ImagePreviewModal
        BackdropProps={{ opacity: 0.9 }}
        visible={visible}
        ref={ref}
        onTransitionExited={onAfterClose}
        style={style}
        className={classes.modal}
      >
        <ImagePreviewRoot className={css(classes.root, className)}>
          {showCloseButton &&
            (closeButton || (
              <ImagePreviewClose
                className={classes.close}
                color="light"
                onClick={onClose}
              />
            ))}

          <ImagePreviewSwipe
            lazyRender
            showSwitchButtons={showSwitchButtons}
            className={classes.swipe}
            loop={loop}
            ref={swipeRootRef}
            showIndicators={showIndicators}
            actionRef={swipeRef}
            defaultIndex={defaultIndex}
            onIndexChange={onIndexChange}
            onRenderIndicator={
              onRenderIndicator ||
              ((index, count) => (
                <ImagePreviewIndicators className={classes.indicators}>
                  {index + 1}/{count}
                </ImagePreviewIndicators>
              ))
            }
          >
            {images.map((img, index) => (
              <ImagePreviewItem
                classes={{
                  root: classes.swipeItem,
                  img: classes.img
                }}
                key={index}
                src={img}
                rootWidth={state.rootWidth}
                rootHeight={state.rootHeight}
                onClose={onClose}
              />
            ))}
          </ImagePreviewSwipe>
        </ImagePreviewRoot>
      </ImagePreviewModal>
    );
  }
);

export default ImagePreview;
