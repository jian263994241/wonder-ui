import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ImgPicker from '../ImgPicker';

import styles from './styles';
import withStyles from '../withStyles';

const noon = () => { };

/**
 * 图片上传列表组件
 * @visibleName ImgPickerList 图片上传列表
 */
const ImgPickerList = function ImgPickerList(props) {

  const {
    classes,
    files,
    onChange,
    selectable,
    ...resProps
  } = props;

  const onFileChange = useCallback((file, url) => {
    const arr = files.slice();
    arr.push({ file, url });
    onChange(arr);
  }, [files, onChange]);

  // 删除图片
  const onFileDelete = useCallback(index => {
    const arr = files.slice();
    arr.splice(index, 1);
    onChange(arr);
  }, [files, onChange]);

  const imgItemList = files.map((item, index, value) => {
    return (
      <div
        className={classes.imgBox}
        key={index}
      >
        <ImgPicker
          urlSmall={item.url}
          urlMiddle={item.url}
          onFileChange={onFileDelete.bind(this, index)}
          {...resProps}
        />
      </div>
    )
  });

  const selectEl = (
    <div
      key={files.length}
      className={classes.imgBox}
    >
      <ImgPicker
        showDashed
        onFileChange={onFileChange}
        {...resProps}
      />
    </div>
  );

  let allEl = selectable ? imgItemList.concat([selectEl]) : imgItemList;

  return (
    <div className={clsx(classes.root)}>
      {allEl}
    </div>
  );
};

ImgPickerList.propTypes = {
  /** 是否显示默认子元素 */
  showAdd: PropTypes.bool,
  /** 文件大小限制，单位：M */
  size: PropTypes.number,
  /** 是否可以查看大图 */
  preview: PropTypes.bool,
  /** 是否展示背景色 */
  showBg: PropTypes.bool,
  /** 是否展示虚线边框 */
  showDashed: PropTypes.bool,
  /** 是否展示四角边框 */
  showBorderAround: PropTypes.bool,
  /** 是否填充父元素 */
  autoFill: PropTypes.bool,
  /** 下载图片方法, 返回一个Promise方法 */
  fileDownLoad: PropTypes.func,
  /** files 值发生变化触发的回调函数 */
  onChange: PropTypes.func,
  /** 图片列表 */
  files: PropTypes.array,
  /** 是否显示添加按钮 */
  selectable: PropTypes.bool
};

ImgPickerList.defaultProps = {
  showAdd: true,
  size: 10,
  preview: true,
  showBg: false,
  showDashed: false,
  showBorderAround: false,
  autoFill: false,
  onChange: noon,
  fileDownLoad: noon,
  selectable: true
}

ImgPickerList.displayName = 'ImgPickerList';

export default withStyles(styles)(ImgPickerList);