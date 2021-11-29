import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  clamp,
  composeClasses,
  css,
  deepClone,
  generateUtilityClasses,
  isObject,
  preventDefault,
  warn
} from '@wonder-ui/utils';
import {
  useEventCallback,
  useEventListener,
  useForkRef,
  useReactive,
  useTouch
} from '@wonder-ui/hooks';

const COMPONENT_NAME = 'WuiPickerColumn';

const DEFAULT_DURATION = 200;
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;

export const pickerCloumnClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'inner',
  'item',
  'readOnly'
]);

const useClasses = (styleProps: PickerColumnProps) => {
  const { classes, readOnly } = styleProps;
  const slots = {
    root: ['root', readOnly && 'readOnly'],
    inner: ['inner'],
    item: ['item']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const PickerColumnRoot = styled('div', { name: COMPONENT_NAME, slot: 'Root' })(
  ({ theme }) => ({
    flex: 1,
    fontSize: theme.typography.pxToRem(16),
    overflow: 'hidden',
    cursor: 'grab'
  })
);

const PickerColumnInner = styled('ul', { name: COMPONENT_NAME, slot: 'Inner' })(
  {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.68, 1)'
  }
);

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

type PickerObjectOption = {
  text?: string | number;
  disabled?: boolean;
  // for custom filed names
  [key: string]: any;
};

export type PickerOption = string | number | PickerObjectOption;

//级联
export type PickerObjectColumn = {
  values?: PickerOption[];
  children?: PickerOption[] | PickerObjectColumn;
  className?: string;
  defaultIndex?: number;
  // for custom filed names
  [key: string]: any;
};

type PickerColumnState = {
  index: number;
  offset: number;
  duration: number;
  options: PickerOption[];
};

export type PickerColumnAction = {
  state: PickerColumnState;
  setIndex(index: number, emitChange?: boolean): void;
  getValue(): PickerOption;
  setValue(value: string | number): void;
  setOptions(options: PickerOption): void;
  stopMomentum(): void;
};

export interface PickerColumnProps {
  actionRef?: React.Ref<PickerColumnAction | null>;
  readOnly?: boolean;
  className?: string;
  classes?: Partial<typeof pickerCloumnClasses>;
  textKey?: string;
  itemHeight?: number;
  swipeDuration?: number;
  visibleItemCount?: number;
  defaultIndex?: number;
  initialOptions?: PickerOption[];
  style?: React.CSSProperties;
  onChange?(index: number): void;
}

function isOptionDisabled(option: PickerOption) {
  return isObject(option) && option.disabled;
}

const PickerColumn = React.forwardRef<HTMLDivElement, PickerColumnProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      actionRef,
      defaultIndex = 0,
      initialOptions,
      itemHeight = 44,
      className,
      readOnly,
      swipeDuration = 600,
      textKey = 'text',
      visibleItemCount = 6,
      style,
      onChange
    } = props;

    const moving = React.useRef<boolean>(false);
    const startOffset = React.useRef<number>();
    const touchStartTime = React.useRef<number>();
    const momentumOffset = React.useRef<number>();
    const transitionEndTrigger = React.useRef<Function | null>(null);

    const rootRef = React.useRef<HTMLDivElement>(null);
    const handleRef = useForkRef(rootRef, ref);
    const wrapper = React.useRef<HTMLUListElement>(null);

    const state = useReactive({
      index: defaultIndex,
      offset: 0,
      duration: 0,
      options: deepClone(initialOptions) || []
    });

    const touch = useTouch();

    const count = () => state.options?.length;

    const baseOffset = () => (itemHeight * (+visibleItemCount - 1)) / 2;

    const adjustIndex = (index: number) => {
      index = clamp(index, 0, count());

      for (let i = index; i < count(); i++) {
        if (!isOptionDisabled(state.options[i])) return i;
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!isOptionDisabled(state.options[i])) return i;
      }
    };

    const setIndex = (index: number, emitChange?: boolean) => {
      index = adjustIndex(index) || 0;

      const offset = -index * itemHeight;

      const trigger = () => {
        if (index !== state.index) {
          state.index = index;

          if (emitChange && onChange) {
            onChange(index);
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

    const setOptions = (options: PickerOption[]) => {
      if (JSON.stringify(options) !== JSON.stringify(state.options)) {
        state.options = deepClone(options);
        setIndex(defaultIndex);
      }
    };

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
      clamp(Math.round(-offset / itemHeight), 0, count() - 1);

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

        state.offset = Math.min(0, translateY - baseOffset());
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
        -(count() * itemHeight),
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

      // compatible with desktop scenario
      // use setTimeout to skip the click event Emitted after touchstart
      setTimeout(() => {
        moving.current = false;
      }, 0);
    });

    const styleProps = { ...props, readOnly };

    const classes = useClasses(styleProps);

    const renderOptions = () => {
      const optionStyle = {
        height: `${itemHeight}px`
      };

      return state.options.map((option, index: number) => {
        const text = getOptionText(option);

        if (!text) {
          return null;
        }

        const disabled = isOptionDisabled(option)!;

        const itemProps = {
          role: 'button',
          style: optionStyle,
          tabIndex: disabled ? -1 : 0,
          className: css(classes.item, {
            disabled,
            selected: index === state.index
          }),
          onClick: () => onClickItem(index)
        };

        return (
          <PickerColumnItem key={index} {...itemProps}>
            {text}
          </PickerColumnItem>
        );
      });
    };

    const setValue = (value: string | number) => {
      const { options } = state;

      for (let i = 0; i < options.length; i++) {
        if (getOptionText(options[i]) === value) {
          return setIndex(i);
        }
      }
    };

    const getValue = () => state.options[state.index!];

    React.useImperativeHandle(
      actionRef,
      () => ({
        state,
        setIndex,
        getValue,
        setValue,
        setOptions,
        stopMomentum
      }),
      [state]
    );

    React.useEffect(() => {
      if (
        initialOptions &&
        JSON.stringify(initialOptions) !== JSON.stringify(state.options)
      ) {
        setOptions(initialOptions);
      } else if (defaultIndex != undefined) {
        setIndex(defaultIndex);
      } else {
        setIndex(state.index!);
      }
    }, [defaultIndex, initialOptions, state]);

    const wrapperStyle: React.CSSProperties = {
      transform: `translate3d(0, ${state.offset + baseOffset()}px, 0)`,
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
        <PickerColumnInner
          className={classes.inner}
          ref={wrapper}
          style={wrapperStyle}
          onTransitionEnd={stopMomentum}
        >
          {renderOptions()}
        </PickerColumnInner>
      </PickerColumnRoot>
    );
  }
);

export default PickerColumn;
