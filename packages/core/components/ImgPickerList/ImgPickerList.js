import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ImgPicker from '../ImgPicker';

import styles from './styles';
import withStyles from '../withStyles';

const noon = () => { };

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
    fileUpLoad,
    ...resProps
  } = props;

  // input图片改变
  const onFileChange = useCallback((file, url) => {
    const arr = files.slice();
    arr.push({ file, url, urlMiddle: url });
    onChange(arr);
  }, [files, onChange]);

  // 删除图片
  const onFileDelete = useCallback(index => {
    const arr = files.slice();
    arr.splice(index, 1);
    onChange(arr);
  }, [files, onChange]);

  // 查看中图
  const fileDownLoadFun = useCallback((index) => {
    return new Promise(async (resolve, reject) => {
      try {
        await fileDownLoad(index);
        resolve();
      } catch (e) {
        reject(e);
      }
    })
  }, [fileDownLoad]);

  // 上传图片方
  const upLoadFun = useCallback(file => {
    return new Promise(async (resolve, reject) => {
      try {
        await fileUpLoad(file);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }, [fileUpLoad]);

  // 图片列表
  const imgItemList = files.map((item, index) => {
    return (
      <div
        className={classes.imgBox}
        key={index}
      >
        <ImgPicker
          urlSmall={item.url}
          urlMiddle={item.urlMiddle}
          onFileChange={onFileDelete.bind(this, index)}
          fileDownLoad={fileDownLoadFun.bind(this, index)}
          {...resProps}
        />
      </div>
    )
  });

  // 添加图片DOM
  const selectEl = (
    <div
      key={files.length}
      className={classes.imgBox}
    >
      <ImgPicker
        showDashed
        onFileChange={onFileChange}
        fileUpLoad={upLoadFun}
        {...resProps}
      />
    </div>
  );

  const allEl = selectable ? imgItemList.concat([selectEl]) : imgItemList;

  return (
    <div className={clsx(classes.root)}>
      {allEl}
    </div>
  );
};

ImgPickerList.propTypes = {
  /** files 值发生变化触发的回调函数 */
  onChange: PropTypes.func,
  /** 图片列表 */
  files: PropTypes.array,
  /** 是否显示添加按钮 */
  selectable: PropTypes.bool,
  /** 下载图片方法, 返回一个Promise方法 */
  fileDownLoad: PropTypes.func,
  /** 上传图片方法, 返回一个Promise方法 */
  fileUpLoad: PropTypes.func,
};

ImgPickerList.defaultProps = {
  onChange: noon,
  fileDownLoad: noon,
  fileUpLoad: noon,
  selectable: true
}

ImgPickerList.displayName = 'ImgPickerList';

export default withStyles(styles)(ImgPickerList);