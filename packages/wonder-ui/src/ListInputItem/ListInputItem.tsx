import * as React from 'react';
import InputBase, { InputProps } from '../Input';
import Label from '../Label';
import ListItem, { ListItemProps } from '../ListItem';
import styled from '../styles/styled';
import Typography from '../Typography';
import useThemeProps from '../styles/useThemeProps';
import {
  composeClasses,
  css,
  forwardRef,
  generateUtilityClasses
} from '@wonder-ui/utils';

const COMPONENT_NAME = 'WuiListInputItem';

const listInputItemClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'label',
  'inputWrap',
  'input',
  'description',
  'errorMessage',
  'disabled',
  'readOnly'
]);

const useClasses = (styleProps: ListInputItemStyleProps) => {
  const { classes, disabled, readOnly } = styleProps;

  const slots = {
    root: ['root', disabled && 'disabled', readOnly && 'readOnly'],
    label: ['label'],
    inputWrap: ['inputWrap'],
    input: ['input'],
    description: ['description'],
    errorMessage: ['errorMessage']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

export interface ListInputItemProps
  extends Omit<ListItemProps, 'prefix' | 'onChange'> {
  InputProps?: InputProps;
  /**
   * 显示清除按钮
   * @default false
   */
  allowClear?: InputProps['allowClear'];
  /**
   * @ignore
   */
  classes?: Partial<typeof listInputItemClasses>;
  /**
   * 初始值
   */
  defaultValue?: InputProps['defaultValue'];
  /**
   * 提示信息
   */
  description?: React.ReactNode;
  /**
   * 禁用
   */
  disabled?: InputProps['disabled'];
  /**
   * 分割线
   */
  divider?: boolean;
  /**
   * 错误提示信息
   */
  errorMessage?: React.ReactNode;
  /**
   * 标签文字
   */
  label?: React.ReactNode;
  /**
   * 标签对齐
   */
  labelAlign?: 'left' | 'right';
  /**
   * 标签宽度
   * @default 6
   */
  labelWidth?: number;
  /**
   * 输入字段长度
   */
  maxLength?: InputProps['maxLength'];
  /**
   * 多行输入框
   * @default false
   */
  multiline?: InputProps['multiline'];
  /**
   * 事件
   */
  onChange?: InputProps['onChange'];
  /**
   * Input placeholder
   */
  placeholder?: InputProps['placeholder'];
  /**
   * 输入框前图标
   */
  prefix?: React.ReactNode;
  /**
   * 只读
   */
  readOnly?: InputProps['readOnly'];
  /**
   * 必填
   */
  required?: InputProps['required'];
  /**
   * 输入框后图标
   */
  suffix?: React.ReactNode;
  /**
   * Input type
   */
  type?: InputProps['type'];
  /**
   * 当前值
   */
  value?: InputProps['value'];
}

interface ListInputItemStyleProps extends ListInputItemProps {}

const ListInputItemRoot = styled(ListItem, {
  name: COMPONENT_NAME,
  slot: 'Root'
})({});

const ListInputItemLabel = styled(Label, {
  name: COMPONENT_NAME,
  slot: 'Label'
})(({ theme }) => ({
  height: theme.typography.pxToRem(44),
  paddingTop: theme.typography.pxToRem(10),
  alignSelf: 'flex-start'
}));

const ListInputItemInputWrap = styled('span', {
  name: COMPONENT_NAME,
  slot: 'InputWrap'
})(({ theme }) => ({
  width: '100%',
  paddingTop: theme.typography.pxToRem(6),
  paddingBottom: theme.typography.pxToRem(6)
}));

const ListInputItemInput = styled(InputBase, {
  name: COMPONENT_NAME,
  slot: 'Input'
})({
  padding: 0,
  height: 'auto'
});

const ListInputItem = forwardRef<HTMLLIElement, ListInputItemProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      InputProps,
      allowClear = false,
      divider = false,
      disabled = false,
      required = false,
      readOnly = false,
      label,
      labelAlign,
      labelWidth = 6,
      placeholder,
      multiline,
      maxLength,
      prefix,
      suffix,
      className,
      style,
      type,
      value,
      defaultValue,
      onChange,
      description,
      errorMessage,
      ...rest
    } = props;

    const styleProps = { ...props };

    const classes = useClasses(styleProps);

    const inputProps = {
      borderless: true,
      allowClear,
      type,
      placeholder,
      disabled,
      required,
      readOnly,
      multiline,
      maxLength,
      value,
      defaultValue,
      onChange,
      ...InputProps
    };

    return (
      <ListInputItemRoot
        divider={divider}
        className={css(classes.root, className)}
        style={style}
        ref={ref}
        media={prefix}
        extra={suffix}
        {...rest}
      >
        {label && (
          <ListInputItemLabel
            className={classes.label}
            required={required}
            disalbed={disabled}
            labelAlign={labelAlign}
            width={labelWidth}
            htmlFor={InputProps?.id}
          >
            {label}
          </ListInputItemLabel>
        )}
        <ListInputItemInputWrap className={classes.inputWrap}>
          <ListInputItemInput
            type={type}
            component="span"
            multiline={multiline}
            className={css(classes.input, InputProps?.className)}
            error={!!errorMessage}
            {...inputProps}
          />
          {description && !errorMessage && (
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.description}
            >
              {description}
            </Typography>
          )}
          {errorMessage && (
            <Typography
              variant="body2"
              color="error"
              className={classes.errorMessage}
            >
              {errorMessage}
            </Typography>
          )}
        </ListInputItemInputWrap>
      </ListInputItemRoot>
    );
  }
);

export default ListInputItem;
