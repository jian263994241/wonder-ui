import Button from '../Button/Button';
import Divider from '../Divider/Divider';
import Popup from '../Popup/Popup';
import React from 'react';
import SafeArea from '../SafeArea/SafeArea';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import WhiteSpace from '../WhiteSpace/WhiteSpace';
import {
  addUnit,
  composeClasses,
  createChainedFunction,
  css
} from '@wonder-ui/utils';
import { buttonCssVars } from '../Button';
import { COMPONENT_NAME } from './ActionSheetClasses';
import { useControlled } from '@wonder-ui/hooks';
import type { ActionSheetProps } from './ActionSheetTypes';

const useClasses = (props: ActionSheetProps) => {
  const { classes } = props;

  const slots = {
    root: ['root'],
    action: ['action'],
    title: ['title'],
    cancelAction: ['cancelAction']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const ActionSheetRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})(({ theme }) => ({
  ...buttonCssVars.style({
    color: theme.palette.text.primary,
    fontWeight: '400'
  })
}));

const ActionSheetTitle = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Title'
})(({ theme }) => ({
  padding: `${addUnit(theme.shape.distanceHorizontal * 1.5)} ${addUnit(
    theme.shape.distanceHorizontal
  )}`,
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper
}));

const ActionSheetAction = styled(Button, {
  name: COMPONENT_NAME,
  slot: 'Action'
})(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: 'block'
}));

const ActionSheet = React.forwardRef<HTMLDivElement, ActionSheetProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      actions = [],
      cancelText,
      className,
      style,
      divider = true,
      title,
      onAction,
      onClose,
      onRenderContent,
      visible: visibleProp,
      children
    } = props;
    const [visible, setVisibleUnControlled] = useControlled({
      value: visibleProp,
      defaultValue: false
    });

    const openModal = () => {
      setVisibleUnControlled(true);
    };

    const hideModal = () => {
      setVisibleUnControlled(false);
    };

    const handleClose = () => {
      hideModal();
      onClose?.();
    };

    const styleProps = { ...props, divider };
    const classes = useClasses(styleProps);

    return (
      <React.Fragment>
        {React.isValidElement(children)
          ? React.cloneElement(children, {
              //@ts-expect-error
              onClick: createChainedFunction(openModal, children.props.onClick)
            })
          : children}

        <Popup
          autoHeight
          visible={visible}
          onBackdropClick={handleClose}
          navbar={false}
        >
          <ActionSheetRoot
            className={css(classes.root, className)}
            ref={ref}
            style={style}
          >
            {title && (
              <React.Fragment>
                <ActionSheetTitle
                  className={classes.title}
                  color="textSecondary"
                  variant="subtitle2"
                >
                  {title}
                </ActionSheetTitle>
                <Divider />
              </React.Fragment>
            )}
            {onRenderContent
              ? onRenderContent()
              : actions.map((action, index) => (
                  <React.Fragment key={action.key || index}>
                    <ActionSheetAction
                      fullWidth
                      className={classes.action}
                      color={action.danger ? 'danger' : undefined}
                      size="large"
                      shape="square"
                      disabled={action.disabled}
                      onClick={createChainedFunction(
                        onAction?.bind(null, action),
                        action.onClick,
                        hideModal
                      )}
                    >
                      {action.text}
                      {action.description && (
                        <Typography variant="caption" color="textSecondary">
                          {action.description}
                        </Typography>
                      )}
                    </ActionSheetAction>
                    {divider && index != actions.length - 1 && <Divider />}
                  </React.Fragment>
                ))}

            {cancelText && (
              <React.Fragment>
                <WhiteSpace size="small" />
                <ActionSheetAction
                  fullWidth
                  size="large"
                  shape="square"
                  className={classes.cancelAction}
                  onClick={handleClose}
                >
                  {cancelText}
                </ActionSheetAction>
              </React.Fragment>
            )}
            <SafeArea position="bottom" />
          </ActionSheetRoot>
        </Popup>
      </React.Fragment>
    );
  }
);

export default ActionSheet;
