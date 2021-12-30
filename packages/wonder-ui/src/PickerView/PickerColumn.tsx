import * as React from 'react';
import {
  useCreation,
  useEventCallback,
  useEventListener,
  useForkRef,
  useReactive,
  useSafeState,
  useTouch
} from '@wonder-ui/hooks';
import { clamp, css, isObject, preventDefault, warn } from '@wonder-ui/utils';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME, pickerViewClasses } from './PickerViewClasses';
import { ColumnClasses, ColumnProps, PickerOption } from './PickerViewTypes';

const DEFAULT_DURATION = 200;
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;

const PickerColumnRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Column'
})(({ theme }) => ({
  flex: 1,
  fontSize: theme.typography.pxToRem(16),
  overflow: 'hidden',
  cursor: 'grab'
}));

const PickerColumnContent = styled('ul', {
  name: COMPONENT_NAME,
  slot: 'Content'
})({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.68, 1)'
});

const PickerColumnItem = styled('li', { name: COMPONENT_NAME, slot: 'Item' })(
  ({ theme }) => ({
    outline: 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 4px',
    color: theme.palette.text.primary
  })
);

function getElementTranslateY(element: Element) {
  const style = window.getComputedStyle(element);
  const transform = style.transform || style.webkitTransform;
  const translateY = transform.slice(7, transform.length - 1).split(', ')[5];

  return Number(translateY);
}

function isOptionDisabled(option: PickerOption) {
  return isObject(option) && option.disabled;
}

const PickerColumn = React.forwardRef<HTMLDivElement, ColumnProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      actionRef,
      defaultIndex = 0,
      initialOptions = [],
      itemHeight = 44,
      className,
      readOnly,
      swipeDuration = 225,
      textKey = 'text',
      visibleItemCount = 6,
      style,
      onChange,
      classes = {} as ColumnClasses
    } = props;

    const moving = React.useRef<boolean>(false);
    const startOffset = React.useRef<number>();
    const touchStartTime = React.useRef<number>();
    const momentumOffset = React.useRef<number>();
    const transitionEndTrigger = React.useRef<Function | null>(null);

    const rootRef = React.useRef<HTMLDivElement>(null);
    const handleRef = useForkRef(rootRef, ref);
    const wrapper = React.useRef<HTMLUListElement>(null);

    const [columnOptions, _setOptions] = useSafeState(initialOptions);
    const state = useReactive({ index: defaultIndex, offset: 0, duration: 0 });

    const touch = useTouch();

    const baseOffset = React.useMemo(
      () => (itemHeight * (+visibleItemCount - 1)) / 2,
      [itemHeight, visibleItemCount]
    );

    const adjustIndex = (index: number) => {
      index = clamp(index, 0, columnOptions.length);

      for (let i = index; i < columnOptions.length; i++) {
        if (!isOptionDisabled(columnOptions[i])) return i;
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!isOptionDisabled(columnOptions[i])) return i;
      }
    };

    const getIndex = () => state.index;

    const setIndex = (index: number, emitChange?: boolean) => {
      index = adjustIndex(index) || 0;

      const offset = -index * itemHeight;

      const trigger = () => {
        if (index !== state.index) {
          state.index = index;
          if (emitChange) {
            onChange?.(index);
          }
        }
      };

      // trigger the change event after transitionend when moving
      if (moving.current && offset !== state.offset) {
        transitionEndTrigger.current = trigger;
      } else {
        trigger();
      }

      state.offset = offset;
    };

    useCreation(() => {
      if (defaultIndex != undefined) {
        setIndex(defaultIndex);
      }
    }, [defaultIndex]);

    const setOptions = (options: PickerOption[] = []) => {
      if (JSON.stringify(options) !== JSON.stringify(columnOptions)) {
        _setOptions(options, () => {
          setIndex(defaultIndex);
        });
      }
    };

    const getOptions = () => columnOptions;

    const onClickItem = useEventCallback((index: number) => {
      if (moving.current || readOnly) {
        return;
      }

      transitionEndTrigger.current = null;
      state.duration = DEFAULT_DURATION;
      setIndex(index, true);
    });

    const getOptionText = (option: PickerOption) => {
      if (isObject(option) && textKey in option) {
        return option[textKey];
      } else if (typeof option === 'string' || typeof option === 'number') {
        return option;
      }

      warn(`Picker error: textKey [${textKey}] is not is col columns`);
    };

    const getIndexByOffset = (offset: number) =>
      clamp(Math.round(-offset / itemHeight), 0, columnOptions.length - 1);

    const momentum = (distance: number, duration: number) => {
      const speed = Math.abs(distance / duration);

      distance = state.offset + (speed / 0.003) * (distance < 0 ? -1 : 1);

      const index = getIndexByOffset(distance);

      state.duration = +swipeDuration;
      setIndex(index, true);
    };

    const stopMomentum = useEventCallback(() => {
      moving.current = false;
      state.duration = 0;

      if (transitionEndTrigger.current) {
        transitionEndTrigger.current();
        transitionEndTrigger.current = null;
      }
    });

    const onTouchStart = useEventCallback((event: React.TouchEvent) => {
      if (readOnly) {
        return;
      }

      touch.start(event);

      if (moving.current) {
        const translateY = getElementTranslateY(wrapper.current!);

        state.offset = Math.min(0, translateY - baseOffset);
        startOffset.current = state.offset;
      } else {
        startOffset.current = state.offset;
      }

      state.duration = 0;
      touchStartTime.current = Date.now();
      momentumOffset.current = startOffset.current;
      transitionEndTrigger.current = null;
    });

    const onTouchMove = useEventCallback((event: TouchEvent) => {
      if (readOnly) {
        return;
      }

      touch.move(event);

      if (touch.isVertical()) {
        moving.current = true;

        preventDefault(event, true);
      }

      state.offset = clamp(
        startOffset.current! + touch.deltaY.current,
        -(columnOptions.length * itemHeight),
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
      if (readOnly) {
        return;
      }

      moving.current = false;

      const distance = state.offset - momentumOffset.current!;
      const duration = Date.now() - touchStartTime.current!;
      const allowMomentum =
        duration < MOMENTUM_LIMIT_TIME &&
        Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        momentum(distance, duration);
        return;
      }

      const index = getIndexByOffset(state.offset);
      state.duration = DEFAULT_DURATION;
      setIndex(index, true);

      setTimeout(() => {
        moving.current = false;
      }, 0);
    });

    const setValue = (value: string) => {
      for (let i = 0; i < columnOptions.length; i++) {
        if (getOptionText(columnOptions[i]) === value) {
          return setIndex(i);
        }
      }
    };

    const getValue = () => columnOptions[state.index!];

    React.useImperativeHandle(actionRef, () => ({
      getIndex,
      setIndex,
      getValue,
      setValue,
      setOptions,
      getOptions,
      stopMomentum
    }));

    const wrapperStyle: React.CSSProperties = {
      transform: `translate3d(0, ${state.offset + baseOffset}px, 0)`,
      transitionDuration: `${state.duration}ms`,
      transitionProperty: state.duration ? 'transform' : 'none'
    };

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
          ref={wrapper}
          style={wrapperStyle}
          onTransitionEnd={stopMomentum}
        >
          {columnOptions.map((option, index: number) => {
            const text = getOptionText(option);

            if (!text) {
              return null;
            }

            const disabled = isOptionDisabled(option)!;

            return (
              <PickerColumnItem
                key={index}
                role="button"
                tabIndex={disabled ? -1 : 0}
                style={{
                  height: `${itemHeight}px`
                }}
                className={css(classes.item, {
                  [pickerViewClasses.disabled]: disabled,
                  [pickerViewClasses.selected]: index === state.index
                })}
                onClick={onClickItem.bind(null, index)}
              >
                {text}
              </PickerColumnItem>
            );
          })}
        </PickerColumnContent>
      </PickerColumnRoot>
    );
  }
);

export default PickerColumn;
