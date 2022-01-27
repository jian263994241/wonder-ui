import * as React from 'react';
import ActivityIndicator from '../ActivityIndicator';
import Image from '../Image/Image';
import styled from '../styles/styled';
import SwipeItem from '../SwipeItem/SwipeItem';
import { clamp, preventDefault } from '@wonder-ui/utils';
import { COMPONENT_NAME } from './ImagePreviewClasses';
import { emphasize } from '../styles/colorManipulator';
import { useReactive, useTouch, useEventCallback } from '@wonder-ui/hooks';
import type { ImagePreviewItemProps } from './ImagePreviewTypes';

const ImagePreviewSwipeItem = styled(SwipeItem, {
  name: COMPONENT_NAME,
  slot: 'SwipeItem'
})(({ theme }) => {
  const textColor = emphasize(theme.palette.text.primary, 0.9);

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    '--image-fallback-color': textColor,
    '--image-placeholder-color': textColor
  };
});

const getDistance = (touches: React.TouchList) =>
  Math.sqrt(
    (touches[0].clientX - touches[1].clientX) ** 2 +
      (touches[0].clientY - touches[1].clientY) ** 2
  );

const ImagePreviewItem = React.forwardRef<
  HTMLDivElement,
  ImagePreviewItemProps
>((props, ref) => {
  const {
    src,
    classes,
    rootWidth,
    rootHeight,
    maxZoom = 3,
    minZoom = 1 / 3,
    onClose
  } = props;

  const state = useReactive({
    scale: 1,
    moveX: 0,
    moveY: 0,
    moving: false,
    zooming: false,
    imageRatio: 0,
    displayWidth: 0,
    displayHeight: 0
  });

  const touch = useTouch();

  const vertical = React.useMemo(() => {
    const rootRatio = rootHeight / rootWidth;
    return state.imageRatio > rootRatio;
  }, [rootWidth, rootHeight]);

  const imageStyle = React.useMemo(() => {
    const { scale, moveX, moveY, moving, zooming } = state;
    const style: React.CSSProperties = {
      transitionDuration: zooming || moving ? '0s' : '.3s'
    };

    if (scale !== 1) {
      const offsetX = moveX / scale;
      const offsetY = moveY / scale;
      style.transform = `scale(${scale}, ${scale}) translate(${offsetX}px, ${offsetY}px)`;
    }

    return style;
  }, [state.scale, state.moveX, state.moveY, state.moving, state.zooming]);

  const maxMoveX = React.useMemo(() => {
    if (state.imageRatio) {
      const displayWidth = vertical ? rootHeight / state.imageRatio : rootWidth;
      return Math.max(0, (state.scale * displayWidth - rootWidth) / 2);
    }

    return 0;
  }, [rootWidth, rootHeight, vertical, state.imageRatio, state.scale]);

  const maxMoveY = React.useMemo(() => {
    if (state.imageRatio) {
      const displayHeight = vertical
        ? rootHeight
        : rootWidth * state.imageRatio;

      return Math.max(0, (state.scale * displayHeight - rootHeight) / 2);
    }

    return 0;
  }, [rootWidth, rootHeight, vertical, state.imageRatio, state.scale]);

  const setScale = (scale: number) => {
    scale = clamp(scale, +minZoom, +maxZoom + 1);

    if (scale !== state.scale) {
      state.scale = scale;
    }
  };

  const resetScale = () => {
    setScale(1);
    state.moveX = 0;
    state.moveY = 0;
  };

  const toggleScale = () => {
    const scale = state.scale > 1 ? 1 : 2;

    setScale(scale);
    state.moveX = 0;
    state.moveY = 0;
  };

  const fingerNum = React.useRef<number>();
  const startMoveX = React.useRef<number>();
  const startMoveY = React.useRef<number>();
  const startScale = React.useRef<number>();
  const startDistance = React.useRef<number>();
  const doubleTapTimer = React.useRef<NodeJS.Timeout>();
  const touchStartTime = React.useRef<number>();

  const onTouchStart = (event: React.TouchEvent) => {
    const { touches } = event;
    const { offsetX } = touch;

    touch.start(event);

    fingerNum.current = touches.length;
    startMoveX.current = state.moveX;
    startMoveY.current = state.moveY;
    touchStartTime.current = Date.now();

    state.moving = fingerNum.current === 1 && state.scale !== 1;
    state.zooming = fingerNum.current === 2 && !offsetX.current;

    if (state.zooming) {
      startScale.current = state.scale;
      startDistance.current = getDistance(event.touches);
    }
  };

  const onTouchMove = (event: React.TouchEvent) => {
    const { touches } = event;

    touch.move(event);

    if (state.moving || state.zooming) {
      preventDefault(event, true);
    }

    if (state.moving) {
      const { deltaX, deltaY } = touch;
      const moveX = deltaX.current + startMoveX.current!;
      const moveY = deltaY.current + startMoveY.current!;
      state.moveX = clamp(moveX, -maxMoveX, maxMoveX);
      state.moveY = clamp(moveY, -maxMoveY, maxMoveY);
    }

    if (state.zooming && touches.length === 2) {
      const distance = getDistance(touches);
      const scale = (startScale.current! * distance) / startDistance.current!;

      setScale(scale);
    }
  };

  const checkTap = () => {
    if (!fingerNum.current || fingerNum.current > 1) {
      return;
    }

    const { offsetX, offsetY } = touch;
    const deltaTime = Date.now() - touchStartTime.current!;
    const TAP_TIME = 250;
    const TAP_OFFSET = 5;

    if (
      offsetX.current < TAP_OFFSET &&
      offsetY.current < TAP_OFFSET &&
      deltaTime < TAP_TIME
    ) {
      if (doubleTapTimer.current) {
        clearTimeout(doubleTapTimer.current);
        doubleTapTimer.current = undefined;
        toggleScale();
      } else {
        doubleTapTimer.current = setTimeout(() => {
          onClose?.();
          doubleTapTimer.current = undefined;
        }, TAP_TIME);
      }
    }
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    let stopPropagation = false;

    /* istanbul ignore else */
    if (state.moving || state.zooming) {
      stopPropagation = true;

      if (
        state.moving &&
        startMoveX.current === state.moveX &&
        startMoveY.current === state.moveY
      ) {
        stopPropagation = false;
      }

      if (!event.touches.length) {
        if (state.zooming) {
          state.moveX = clamp(state.moveX, -maxMoveX, maxMoveX);
          state.moveY = clamp(state.moveY, -maxMoveY, maxMoveY);
          state.zooming = false;
        }

        state.moving = false;
        startMoveX.current = 0;
        startMoveY.current = 0;
        startScale.current = 1;

        if (state.scale < 1) {
          resetScale();
        }

        if (state.scale > maxZoom) {
          state.scale = +maxZoom;
        }
      }
    }

    // eliminate tap delay on safari
    preventDefault(event, stopPropagation);

    checkTap();
    touch.reset();
  };

  const onLoad = (event: React.SyntheticEvent) => {
    const { naturalWidth, naturalHeight } = event.target as HTMLImageElement;
    state.imageRatio = naturalHeight / naturalWidth;
  };

  return (
    <ImagePreviewSwipeItem
      ref={ref}
      onTouchStartCapture={onTouchStart}
      onTouchMoveCapture={onTouchMove}
      onTouchEndCapture={onTouchEnd}
      onTouchCancelCapture={onTouchEnd}
      className={classes?.root}
    >
      <Image
        className={classes?.img}
        src={src}
        style={imageStyle}
        fit="contain"
        onLoad={onLoad}
        placeholder={<ActivityIndicator color="light" type="spinner" />}
      />
    </ImagePreviewSwipeItem>
  );
});

export default ImagePreviewItem;
