import React, { useState, useCallback, forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Toast from '../toast';
import WxImageViewer from 'react-wx-images-viewer';
import styles from './styles';
import withStyles from '../withStyles';

// import { iconDelete } from '../Icon';
import { AddCircleOutline } from '@wonder-ui/icons';

/**
 * 图片上传组件
 * @visibleName ImgPicker 上传
 */
const ImgPicker = forwardRef(function ImgPicker({classes, ...resProps}, ref) {

  const noon = useCallback(() => {}, []);

  const childrenEle = (
    <div className={classes.childrenEle} />
  );

  const {
    showAdd = true,
    children = showAdd ? childrenEle : null,
    urlSmall,
    urlMiddle,
    preview = true,
    size = 10,
    showBg,
    showDashed,
    showBorderAround,
    filedownload = noon,
    onFileChange = noon,
    onFileHandle = noon,
    autoFill = false
  } = resProps;

  const [isOpen, setOpen] = useState(false);

  // 打开图片预览
  const onOpen = useCallback(async () => {
    if (!urlSmall) {
      return;
    }
    if (urlMiddle) {
      setOpen(true);
      return;
    }
    if (!preview) {
      return;
    }
    try {
      await filedownload();
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
  const onChange = useCallback(e => {
    const fileSelectorEl = e.target;
    const { files } = fileSelectorEl;
    if (!files || !files.length) {
      return;
    }
    if (files[0].size > size * 1024 * 1024) {
      e.target.value = null; // 清空input值
      Toast(`图片大小不能超过${size}M`, 2000);
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = function(e) {
      onFileChange(files[0], e.target.result);
    }
  }, [size]);

  // 点击input
  const onHandle = useCallback(
    e => {
      e.target.value = null; // 清空input值，防止两次文件一致时不触发onChange事件
      onFileHandle(e);
    },
    []
  );

  return (
    <div className={clsx(
      classes.container,
      autoFill ? 'auto-fill' : null,
      !urlSmall && showBg ? classes.containerBg : '',
      urlSmall ? classes.containerBorder : '')}>
      {urlSmall && (
        <div className="delete-box" onClick={() => onFileChange()}>
          {/* <img alt="" src={iconDelete} className="delete" /> */}
          <AddCircleOutline className="delete" />
        </div>
      )}
      <input
        ref={ref}
        type="file"
        className={urlSmall ? "hide" : ""}
        accept="image/*"
        onChange={onChange}
        onClick={e => onHandle(e)}
      />
      {urlSmall ? (
        <div className="picker-img-box" onClick={onOpen}>
          <img alt="" className="picker-img" src={urlSmall} />
        </div>
      ) : (
          children
        )}
      {showBorderAround && !urlSmall && (
        <>
          <i className="border-i border-left-top" />
          <i className="border-i border-right-top" />
          <i className="border-i border-left-bottom" />
          <i className="border-i border-right-bottom" />
        </>
      )}
      {(urlSmall || showDashed) && <div className="img-dashed" />}
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
};

ImgPicker.defaultProps = {
  showAdd: true,
  size: 10,
  preview: true,
  showBg: false,
  showDashed: false,
  showBorderAround: false,
  autoFill: false,
}

ImgPicker.displayName = 'ImgPicker';

export default withStyles(styles)(ImgPicker);