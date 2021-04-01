import * as React from 'react';
import Manager from './Manager';

type Props = {
  [key: string]: any;
};

export interface GlobalModalProps {
  modalKey: string;
  visible: boolean;
  onClose: () => void;
}

type RunModalProps = Props & Partial<Pick<GlobalModalProps, 'modalKey'>>;
type ModalState = Props & Pick<GlobalModalProps, 'visible' | 'modalKey'>;
type GlobalModalComponentProps = Props & GlobalModalProps;

type ContextProps = {
  runModal: (props: RunModalProps) => void;
};

export const GlobalModalContext = React.createContext<ContextProps>({
  runModal: () => console.error('GlobalModalContext is missing.')
});

export function useGlobalModal() {
  return React.useContext(GlobalModalContext);
}

export interface GlobalModalProviderProps {
  /**
   * @description Children
   */
  children?: any;
  /**
   * @description Modal component
   */
  component: React.ComponentType<GlobalModalComponentProps>;
  /**
   * @description Modal stack
   * @default false
   */
  modalStack?: boolean;
}

const GlobalModalProvider: React.FC<GlobalModalProviderProps> = React.forwardRef(
  (props, ref) => {
    const { component: Component, children, modalStack = false } = props;
    const manager = React.useMemo(() => new Manager(), []);

    const [userProps, setProps] = React.useState<ModalState>({
      visible: false,
      modalKey: 'default'
    });

    const runModal = (props: RunModalProps) => {
      if (modalStack) {
        manager.run((clearQueue) => {
          setProps({
            ...props,
            modalKey: props.modalKey || 'default',
            visible: true,
            clearQueue
          });
        });
      } else {
        setProps({
          ...props,
          modalKey: props.modalKey || 'default',
          visible: true
        });
      }
    };

    React.useImperativeHandle(ref, () => ({ runModal }));

    const InnerComponent = React.forwardRef(
      (props: GlobalModalComponentProps, ref) => {
        const { onClose: onCloseProp, clearQueue, ...rest } = props;
        const onClose = () => {
          setProps({ ...props, visible: false });

          if (onCloseProp) {
            onCloseProp();
          }

          if (clearQueue) {
            clearQueue();
          }
        };

        return <Component onClose={onClose} ref={ref} {...rest} />;
      }
    );

    return (
      <GlobalModalContext.Provider value={{ runModal }}>
        <React.Fragment>
          {children}
          <InnerComponent {...userProps} />
        </React.Fragment>
      </GlobalModalContext.Provider>
    );
  }
);

export default GlobalModalProvider;
