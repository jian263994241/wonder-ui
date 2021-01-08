import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import elementAcceptingRef from '@wonder-ui/utils/elementAcceptingRef';
import styles from './styles';
import { withStyles } from '@wonder-ui/styles';
import AccordionContext from '../Accordion/AccordionContext';

/**
 * 手风琴面板
 * @visibleName AccordionPanel 手风琴面板
 */
const AccordionPanel = withStyles(styles, { name: 'AccordionPanel' })(
  function AccordionPanel(props) {
    const { classes, children, header, itemKey } = props;
    const {
      accordion,
      activeKey,
      onChange,
      disableTranstion,
    } = React.useContext(AccordionContext);
    const [visible, setVisible] = React.useState(false);
    const panelRef = React.useRef();
    const [visibleHeight, setVisibleHeight] = React.useState(null);

    React.useEffect(() => {
      if (accordion) {
        setVisible(activeKey === itemKey);
      }
    }, [activeKey]);

    const handleHeaderClick = React.useCallback(
      (e) => {
        if (accordion) {
          onChange && onChange(activeKey === itemKey ? '' : itemKey);
        } else {
          setVisible(!visible);
        }

        if (header.props.onClick) {
          header.props.onClick(e);
        }
      },
      [visible, itemKey, activeKey],
    );

    React.useEffect(() => {
      if (children && panelRef.current) {
        setVisibleHeight(panelRef.current.scrollHeight);
      }
    }, [panelRef]);

    return (
      <React.Fragment>
        {React.cloneElement(header, { onClick: handleHeaderClick })}
        <div
          ref={panelRef}
          className={clsx(classes.root, {
            [classes.hidden]: !visible,
            [classes.transition]: !disableTranstion,
            expanded: !visible,
          })}
          style={{ height: visibleHeight || undefined }}
        >
          {children}
        </div>
      </React.Fragment>
    );
  },
);

AccordionPanel.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.any,
  /**
   * 面板头内容
   */
  header: elementAcceptingRef.isRequired,
  /**
   * 对应 activeKey
   */
  itemKey: PropTypes.string,
};

export default AccordionPanel;
