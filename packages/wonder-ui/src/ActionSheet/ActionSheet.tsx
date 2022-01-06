import * as React from 'react';
import Button from '../Button/Button';
import Divider from '../Divider/Divider';
import Drawer from '../Drawer/Drawer';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import WhiteSpace from '../WhiteSpace/WhiteSpace';
import { COMPONENT_NAME } from './ActionSheetClasses';
import { createChainedFunction, composeClasses, css } from '@wonder-ui/utils';
import { drawerClasses } from '../Drawer/DrawerClasses';
import { useControlled } from '@wonder-ui/hooks';
import { whiteSpaceClasses } from '../WhiteSpace/WhiteSpaceClasses';
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

const ActionSheetRoot = styled(Drawer, {
  name: COMPONENT_NAME,
  slot: 'Root'
})(({ theme }) => ({
  userSelect: 'none',
  [`.${drawerClasses.paper}`]: {
    borderTopLeftRadius: `var(--action-sheet-border-radius, ${theme.shape.borderRadius}px)`,
    borderTopRightRadius: `var(--action-sheet-border-radius, ${theme.shape.borderRadius}px)`,
    paddingBottom: 'env(safe-area-inset-bottom)'
  },
  [`.${whiteSpaceClasses.root}`]: {
    backgroundColor: theme.palette.background.default
  }
}));

const ActionSheetTitle = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Title'
})(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: '20px 16px',
  textAlign: 'center',
  borderBottom: `thin solid ${theme.palette.divider}`
}));

const ActionSheetAction = styled(Button, {
  name: COMPONENT_NAME,
  slot: 'Action'
})(({ theme }) => ({
  ...theme.typography.body1,
  width: '100%',
  padding: '14px 16px',
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
      divider,
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

    const classes = useClasses(props);

    return (
      <React.Fragment>
        {React.isValidElement(children)
          ? React.cloneElement(children, {
              //@ts-expect-error
              onClick: createChainedFunction(openModal, children.props.onClick)
            })
          : children}
        <ActionSheetRoot
          anchor="bottom"
          visible={visible}
          onClose={handleClose}
          className={css(classes.root, className)}
          ref={ref}
          style={style}
        >
          {title && (
            <ActionSheetTitle className={classes.title}>
              {title}
            </ActionSheetTitle>
          )}
          {onRenderContent
            ? onRenderContent()
            : actions.map((action, index) => (
                <React.Fragment key={action.key || index}>
                  <ActionSheetAction
                    className={classes.action}
                    color={action.danger ? 'danger' : 'primary'}
                    size="large"
                    disabled={action.disabled}
                    onClick={createChainedFunction(
                      onAction?.bind(null, action),
                      action.onClick,
                      hideModal
                    )}
                  >
                    {action.text}
                    {action.description && (
                      <Typography variant="body2" color="textSecondary">
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
                size="large"
                className={classes.cancelAction}
                onClick={handleClose}
              >
                {cancelText}
              </ActionSheetAction>
            </React.Fragment>
          )}
        </ActionSheetRoot>
      </React.Fragment>
    );
  }
);

export default ActionSheet;
