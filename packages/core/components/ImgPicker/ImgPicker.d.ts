import * as React from 'react';

export interface ImgPickerProps {
  /** 是否显示默认子元素 */
  showAdd?: boolean;
  /** 文件大小限制，单位：M */
  size?: number;
  /** 小图url，base64类型 */
  urlSmall?: string;
  /** 中图url，base64类型 */
  urlMiddle?: string;
  /** input改变 */
  onFileChange?: (f: any, r: any) => any;
  /** 点击input */
  onFileHandle?: (f: any) => any;
  /** 是否可以查看大图 */
  preview?: boolean;
  /** 是否展示背景色 */
  showBg?: boolean;
  /** 是否展示虚线边框 */
  showDashed?: boolean;
  /** 是否展示四角边框 */
  showBorderAround?: boolean;
  /** 是否填充父元素 */
  autoFill?: boolean;
  /** 下载图片方法, 返回一个Promise方法 */
  fileDownLoad?: (f: any) => any;
}

export default function ImgPicker(props: ImgPickerProps): JSX.Element;
