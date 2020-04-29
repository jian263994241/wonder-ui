
```js
import React, { useState, useCallback } from 'react';
import { Page, ImgPickerList } from '@wonder-ui/core';
import { createUseStyles } from '@wonder-ui/styles';

const useStyles = createUseStyles({
  box: {
    padding: "10px"
  }
});

function ImpPickerListExample(props) {

  const classes = useStyles();

  const [files, setFiles] = useState([]);

  // files 值发生变化
  const onChange = useCallback(arr => {
    setFiles(arr);
  }, []);

  const fileDownLoad = useCallback((index) => {
    console.log('fileDownLoad', index);
    return new Promise((resolve, reject) => {
      resolve();
    });
  }, []);

  return (
    <Page name="图片上传列表" navbar>
      <div className={classes.box}>
        <ImgPickerList
          files={files}
          onChange={onChange}
          autoFill
          showDashed
          selectable={files.length < 6}
          fileDownLoad={fileDownLoad}
        />
      </div>
    </Page>
  )
};

<ImpPickerListExample />
```