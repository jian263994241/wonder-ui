import React, { useState, useCallback, forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Toast from '../toast';
import ActivityIndicator from '../ActivityIndicator';
import WxImageViewer from 'react-wx-images-viewer';
import styles from './styles';
import withStyles from '../withStyles';

import { AddCircleOutline } from '@wonder-ui/icons';

const noon = () => { };

/**
 * 图片上传组件
 * @visibleName ImgPicker 图片上传
 */
const ImgPicker = forwardRef(function ImgPicker({ classes, ...resProps }, ref) {

  const childrenEle = (
    <div className={classes.childrenEle} />
  );

  const {
    showAdd,
    children = showAdd ? childrenEle : null,
    urlSmall,
    urlMiddle,
    preview,
    size,
    showBg,
    showDashed,
    showBorderAround,
    fileDownLoad,
    onFileChange,
    onFileHandle,
    autoFill,
    fileUpLoad
  } = resProps;

  const [isOpen, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  // 打开图片预览
  const onOpen = useCallback(async () => {
    if (!urlSmall || !preview) {
      return;
    }
    if (urlMiddle) {
      setOpen(true);
      return;
    }
    try {
      await fileDownLoad();
      setOpen(true);
    } catch (e) {
      console.log('打开图片预览失败', e);
    }
  }, [preview, urlMiddle, urlSmall]);

  // 关闭图片预览
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  // input改变
  const onChange = useCallback(async e => {
    const fileSelectorEl = e.target;
    const { files } = fileSelectorEl;
    if (!files || !files.length) {
      return;
    }
    const file = files[0];
    if (file.size > size * 1024 * 1024) {
      e.target.value = null; // 清空input值
      Toast(`图片大小不能超过${size}M`, 2000);
      return;
    }
    setLoading(true);
    try {
      await fileUpLoad(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        onFileChange(file, e.target.result);
      }
    } catch (e) {
      console.log('upLoad报错', e);
    } finally {
      setLoading(false);
    }
  }, [size, onFileChange, fileUpLoad]);

  // 点击input
  const onHandle = useCallback(
    e => {
      e.target.value = null; // 清空input值，防止两次文件一致时不触发onChange事件
      onFileHandle(e);
    },
    [onFileHandle]
  );

  return (
    <div className={clsx(
      classes.root,
      { [classes.autoFill]: autoFill },
      { [classes.containerBg]: !urlSmall && showBg },
      { [classes.containerBorder]: urlSmall })}>
      {urlSmall && (
        <div className={classes.deleteBox} onClick={() => onFileChange()}>
          <AddCircleOutline className={classes.deleteIcon} />
        </div>
      )}
      <input
        ref={ref}
        type="file"
        className={clsx(classes.input, { [classes.hide]: urlSmall })}
        accept="image/*"
        onChange={onChange}
        onClick={e => onHandle(e)}
      />
      {urlSmall ? (
        <div className={classes.pickerImgBox} onClick={onOpen}>
          <img alt="" className={classes.pickerImg} src={urlSmall} />
        </div>
      ) : isLoading ? <ActivityIndicator /> : (
        children
      )}
      {showBorderAround && !urlSmall && (
        <>
          <i className={clsx(classes.borderLine, 'left-top')} />
          <i className={clsx(classes.borderLine, 'right-top')} />
          <i className={clsx(classes.borderLine, 'left-bottom')} />
          <i className={clsx(classes.borderLine, 'right-bottom')} />
        </>
      )}
      {(urlSmall || showDashed) && <div className={classes.imgDashed} />}
      {isOpen && <WxImageViewer onClose={onClose} urls={[urlMiddle]} />}
    </div>
  );
});

ImgPicker.propTypes = {
  /** 是否显示默认子元素 */
  showAdd: PropTypes.bool,
  /** 文件大小限制，单位：M */
  size: PropTypes.number,
  /** 小图url，base64类型 */
  urlSmall: PropTypes.string,
  /** 中图url，base64类型 */
  urlMiddle: PropTypes.string,
  /** input改变 */
  onFileChange: PropTypes.func,
  /** 点击input */
  onFileHandle: PropTypes.func,
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
  /** 上传图片方法, 返回一个Promise方法 */
  fileUpLoad: PropTypes.func
};

ImgPicker.defaultProps = {
  showAdd: true,
  size: 10,
  preview: true,
  showBg: false,
  showDashed: false,
  showBorderAround: false,
  autoFill: false,
  onFileChange: noon,
  onFileHandle: noon,
  fileDownLoad: noon,
  fileUpLoad: noon
}

ImgPicker.displayName = 'ImgPicker';

export default withStyles(styles)(ImgPicker);