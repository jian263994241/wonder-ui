
```js
import React, { useState, useCallback } from 'react';
import { Page, ImgPicker } from '@wonder-ui/core';
import { createUseStyles } from '@wonder-ui/styles';


const useStyles = createUseStyles({
  box: {
    padding: "10px"
  },
  title: {
    margin: "10px 0"
  },
  parent: {
    height: "180px"
  }
});

function ImpPickerExample(props) {

  const classes = useStyles();

  const [urlSmall, setUrlSmall] = useState('');
  const [urlMiddle, setUrlMiddle] = useState('');

  // input图片改变
  const onFileChange = useCallback((file, buffer) => {
    if (!file) { // 删除图片
      setUrlSmall();
      setUrlMiddle();
      return;
    }
    setUrlSmall(buffer);
    setUrlMiddle(buffer);
  }, []);

  return (
    <Page name="图片上传" navbar>
      <div className={classes.box}>
        <h3 className={classes.title}>带虚线边框</h3>
        <ImgPicker
          title="测试用例"
          urlSmall={urlSmall}
          urlMiddle={urlMiddle}
          onFileChange={onFileChange}
          showDashed
        />
      </div>
      <div className={classes.box}>
        <h3 className={classes.title}>带四角边框</h3>
        <ImgPicker
          title="测试用例"
          urlSmall={urlSmall}
          urlMiddle={urlMiddle}
          onFileChange={onFileChange}
          showBorderAround
        />
      </div>
      <div className={classes.box}>
        <h3 className={classes.title}>带背景色</h3>
        <ImgPicker
          title="测试用例"
          urlSmall={urlSmall}
          urlMiddle={urlMiddle}
          onFileChange={onFileChange}
          showBg
        />
      </div>
      <div className={classes.box}>
        <h3 className={classes.title}>宽高填充父元素</h3>
        <div className={classes.parent}>
          <ImgPicker
            title="测试用例"
            urlSmall={urlSmall}
            urlMiddle={urlMiddle}
            onFileChange={onFileChange}
            autoFill
            showDashed
          />
        </div>
      </div>
    </Page>
  )
}
<ImpPickerExample/>
```