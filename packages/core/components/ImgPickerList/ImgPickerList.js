import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ImgPicker from '../ImgPicker';

import styles from './styles';
import { withStyles } from '@wonder-ui/styles';

const noon = () => {};

/**
 * 图片上传列表组件，属性同ImgPicker
 * @visibleName ImgPickerList 图片上传列表
 */
const ImgPickerList = function ImgPickerList(props) {
  const {
    classes,
    files,
    onChange,
    selectable,
    fileDownLoad,
    ...resProps
  } = props;

  const onFileChange = useCallback(
    (file, url) => {
      const arr = files.slice();
      arr.push({ file, url, urlMiddle: url });
      onChange(arr);
    },
    [files, onChange],
  );

  // 删除图片
  const onFileDelete = useCallback(
    (index) => {
      const arr = files.slice();
      arr.splice(index, 1);
      onChange(arr);
    },
    [files, onChange],
  );

  // 查看中图
  const fileDownLoadFun = useCallback(
    (index) => {
      fileDownLoad(index);
    },
    [fileDownLoad],
  );

  const imgItemList = files.map((item, index, value) => {
    return (
      <div className={classes.imgBox} key={index}>
        <ImgPicker
          urlSmall={item.url}
          urlMiddle={item.urlMiddle}
          onFileChange={onFileDelete.bind(this, index)}
          fileDownLoad={fileDownLoadFun.bind(this, index)}
          {...resProps}
        />
      </div>
    );
  });

  const selectEl = (
    <div key={files.length} className={classes.imgBox}>
      <ImgPicker showDashed onFileChange={onFileChange} {...resProps} />
    </div>
  );

  const allEl = selectable ? imgItemList.concat([selectEl]) : imgItemList;

  return <div className={clsx(classes.root)}>{allEl}</div>;
};

ImgPickerList.propTypes = {
  /** 下载图片方法, 返回一个Promise方法 */
  fileDownLoad: PropTypes.func,
  /** files 值发生变化触发的回调函数 */
  onChange: PropTypes.func,
  /** 图片列表 */
  files: PropTypes.array,
  /** 是否显示添加按钮 */
  selectable: PropTypes.bool,
};

ImgPickerList.defaultProps = {
  onChange: noon,
  fileDownLoad: noon,
  selectable: true,
};

ImgPickerList.displayName = 'ImgPickerList';

export default withStyles(styles)(ImgPickerList);
