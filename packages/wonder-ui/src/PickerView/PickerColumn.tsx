import * as React from 'react';
import styled from '../styles/styled';
import Typography from '../Typography';
import { clamp, css, isObject, preventDefault, warn } from '@wonder-ui/utils';
import { ColumnProps, PickerFieldNames, PickerOption } from './PickerViewTypes';
import {
  COMPONENT_NAME,
  pickerViewClasses,
  pickerViewCssVars
} from './PickerViewClasses';
import { easing } from '../styles/transitions';
import {
  useEventListener,
  useCreation,
  useEventCallback,
  useReactive,
  useTouch,
  useForkRef
} from '@wonder-ui/hooks';

const DEFAULT_DURATION = 200;
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;

const PickerColumnRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Column'
})({
  flex: 1,
  overflow: 'hidden',
  cursor: 'grab'
});

const PickerColumnContent = styled('ul', {
  name: COMPONENT_NAME,
  slot: 'Content'
})({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  transitionTimingFunction: easing.easeInOut
});

const PickerColumnItem = styled('li', { name: COMPONENT_NAME, slot: 'Item' })({
  outline: 0,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 4px',
  height: pickerViewCssVars.value('itemHeight', '44px')
});

function isOptionDisabled(option: PickerOption) {
  return isObject(option) && option.disabled;
}

const adjustIndex = (index: number, options: PickerOption[]) => {
  index = clamp(index, 0, options.length);
  // ->
  for (let i = index; i < options.length; i++) {
    if (!isOptionDisabled(options[i])) return i;
  }
  // <-
  for (let i = index - 1; i >= 0; i--) {
    if (!isOptionDisabled(options[i])) return i;
  }

  return 0;
};

export const getOptionText = (
  option: PickerOption,
  fieldNames: PickerFieldNames
) => {
  if (isObject(option) && fieldNames.label in option) {
    return option[fieldNames.label];
  } else if (typeof option === 'string' || typeof option === 'number') {
    return option;
  } else {
    warn(
      `Picker error: fieldNames.label [${fieldNames.label}] is not is col columns`
    );
  }
};

export const getOptionValue = (
  option: PickerOption,
  fieldNames: PickerFieldNames
) => {
  if (isObject(option)) {
    return option[fieldNames.value] ?? option[fieldNames.label];
  } else if (typeof option === 'string' || typeof option === 'number') {
    return option;
  }
};

const PickerColumn = React.forwardRef<HTMLDivElement, ColumnProps>(
  (props, ref) => {
    const {
      options: columnItems = [],
      index: indexProp,
      defaultIndex = 0,
      itemHeight = 44,
      className,
      readOnly,
      swipeDuration = 225,
      fieldNames,
      visibleItemCount = 6,
      style,
      onIndexChange,
      onRenderLabel,
      classes = {} as any
    } = props;
    const rootRef = React.useRef(null);
    const handleRef = useForkRef(rootRef, ref);
    const touch = useTouch();
    const movingRef = React.useRef<boolean>(false);
    const startOffset = React.useRef<number>();
    const touchStartTime = React.useRef<number>();
    const momentumOffset = React.useRef<number>();

    const state = useReactive({ offset: 0, duration: 0, index: 0 });

    const baseOffset = useCreation(
      () => (itemHeight * (+visibleItemCount - 1)) / 2,
      [itemHeight, visibleItemCount]
    );

    React.useEffect(() => {
      setIndex(indexProp ?? defaultIndex, false);
    }, [indexProp, defaultIndex, columnItems]);

    const setIndex = (index: number, emitChange: boolean = true) => {
      index = adjustIndex(index, columnItems);

      if (state.index != index && emitChange) {
        onIndexChange?.(index);
      }

      state.index = index;
      state.offset = -index * itemHeight;
    };

    const onClickItem = useEventCallback((index: number) => {
      if (movingRef.current || readOnly) {
        return;
      }

      state.duration = DEFAULT_DURATION;

      setIndex(index);
    });

    const getIndexByOffset = (offset: number) =>
      clamp(Math.round(-offset / itemHeight), 0, columnItems.length - 1);

    const stopMomentum = useEventCallback(() => {
      movingRef.current = false;
      state.duration = 0;
    });

    const onTouchStart = useEventCallback((event: React.TouchEvent) => {
      if (readOnly) return;

      touch.start(event);

      if (movingRef.current) {
        state.offset = Math.min(0, state.offset);

        startOffset.current = state.offset;
      } else {
        startOffset.current = state.offset;
      }

      state.duration = 0;
      touchStartTime.current = Date.now();
      momentumOffset.current = startOffset.current;
    });

    const onTouchMove = useEventCallback((event: TouchEvent) => {
      if (readOnly) return;

      touch.move(event);

      if (touch.isVertical()) {
        movingRef.current = true;
        preventDefault(event, true);
      }

      state.offset = clamp(
        startOffset.current! + touch.deltaY.current,
        -(columnItems.length * itemHeight),
        itemHeight
      );

      const now = Date.now();
      if (now - touchStartTime.current! > MOMENTUM_LIMIT_TIME) {
        touchStartTime.current = now;
        momentumOffset.current = state.offset;
      }
    });

    useEventListener(rootRef, 'touchmove', onTouchMove, { passive: false });

    const onTouchEnd = useEventCallback(() => {
      if (!movingRef.current || readOnly) return;

      movingRef.current = false;

      const distance = state.offset - momentumOffset.current!;
      const duration = Date.now() - touchStartTime.current!;
      const allowMomentum =
        duration < MOMENTUM_LIMIT_TIME &&
        Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        const speed = Math.abs(distance / duration);
        const index = getIndexByOffset(
          state.offset + (speed / 0.003) * (distance < 0 ? -1 : 1)
        );

        state.duration = +swipeDuration;
        setIndex(index);
      } else {
        const index = getIndexByOffset(state.offset);

        state.duration = DEFAULT_DURATION;
        setIndex(index);
      }
    });

    return (
      <PickerColumnRoot
        ref={handleRef}
        className={css(classes.root, className)}
        style={style}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        <PickerColumnContent
          className={classes.content}
          onTransitionEnd={stopMomentum}
          style={{
            transform: `translate3d(0, ${state.offset + baseOffset}px, 0)`,
            transitionDuration: `${state.duration}ms`,
            transitionProperty: state.duration ? 'transform' : 'none'
          }}
        >
          {columnItems.map((option, index: number) => {
            const label = getOptionText(option, fieldNames);
            return label ? (
              <PickerColumnItem
                key={index}
                role="button"
                className={css(classes.item, {
                  [pickerViewClasses.disabled]: isOptionDisabled(option),
                  [pickerViewClasses.selected]: index === state.index
                })}
                onClick={onClickItem.bind(null, index)}
              >
                <Typography variant="inherit" noWrap>
                  {onRenderLabel ? onRenderLabel(option) : label}
                </Typography>
              </PickerColumnItem>
            ) : null;
          })}
        </PickerColumnContent>
      </PickerColumnRoot>
    );
  }
);

export default PickerColumn;
