/**
 * title: 自定义按钮
 * desc:  用 `ButtonBase` 基础样式组件扩展按钮
 *
 */

import * as React from 'react';
import { ButtonBase, withStyles } from '../../index';

const CustomButton = withStyles({
  root: {
    color: '#fff',
    backgroundColor: '#0d6efd',
    borderColor: '#0d6efd',
    fontSize: 14,
    padding: '.375rem .75rem',
    borderRadius: '.25rem',
    '&.active': {
      opacity: 0.8
    }
  }
})(ButtonBase);

export default function Example() {
  return <CustomButton>自定义按钮</CustomButton>;
}
