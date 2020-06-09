import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '../Dialog';
import IconInfoOutlined from '@wonder-ui/icons/InfoCircleOutlined';

export default function ExtraInfo(props) {
  const { message, type = 'error', ...rest } = props;

  const showInfo = React.useCallback(
    () => {
      Dialog.toast(message);
    },
    [message],
  );

  if (!message) {
    return null;
  }

  return (
    <IconInfoOutlined
      color={type}
      onClick={showInfo}
      style={{ marginLeft: 3 }}
      {...rest}
    />
  );
}

ExtraInfo.prototype = {
  message: PropTypes.string,
  type: PropTypes.string,
};
