/**
 * title: 基本使用
 * desc:
 */
import { Noticebar, Space, ArrowForward, IconButton } from '@wonder-ui/core';
import { InfoCircle, CheckCircle, ExclamationCircle } from '@wonder-ui/icons';

export default () => (
  <Space direction="vertical" itemWrap={false}>
    <Noticebar type="info" icon={<InfoCircle />}>
      Info (default) Noticebar.
    </Noticebar>
    <Noticebar
      type="warning"
      icon={<ExclamationCircle />}
      actions={
        <IconButton disableRipple>
          <ArrowForward fontSize="small" />
        </IconButton>
      }
    >
      Warning Noticebar.
    </Noticebar>
    <Noticebar type="error" closable>
      message...message...message...message...message...message...message...message...message...message...message...message...
    </Noticebar>
    <Noticebar type="error" closable scrollable>
      message...message...message...message...message...message...message...message...message...message...message...message...
    </Noticebar>
    <Noticebar icon={<CheckCircle />} type="success" wrap closable>
      message...message...message...message...message...message...message...message...message...message...message...message...
    </Noticebar>
  </Space>
);
