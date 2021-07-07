/**
 * title: 基本使用
 * desc: 通过改变`children`自定义按钮样式
 *
 */
import { BackTop, IconButton, useTheme } from '@wonder-ui/core';
import { ArrowUp } from '@wonder-ui/icons';

export default () => {
  const theme = useTheme();
  return (
    <div>
      按钮出现在右下角
      <BackTop style={{ bottom: 30 }}>
        <IconButton
          style={{
            backgroundColor: theme.palette.colors.blue.A200,
            color: '#fff'
          }}
        >
          <ArrowUp />
        </IconButton>
      </BackTop>
    </div>
  );
};
