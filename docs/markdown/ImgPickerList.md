
```js
import React, { useState, useCallback } from 'react';
import { Page, ImgPickerList } from '@wonder-ui/core';
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

function ImpPickerListExample(props) {

  const classes = useStyles();

  const [files, setFiles] = useState([]);
  const [selectable, serSelectable] = useState(true);

  const onChange = useCallback(arr => {
    console.log('setFiles', arr);
    setFiles(arr);
  }, []);

  return (
    <Page name="图片上传列表" navbar>
      <div className={classes.box}>
        <ImgPickerList
          files={files}
          onChange={onChange}
          selectable={selectable}
          autoFill
          showDashed
          selectable={files.length < 6}
        />
      </div>
    </Page>
  )
};

<ImpPickerListExample />
```