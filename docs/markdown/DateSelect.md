
```js
import React, { useState } from 'react';
import { Page, DateSelect } from '@wonder-ui/core';
import { createUseStyles } from '@wonder-ui/styles';


const useStyles = createUseStyles({
  box: {
    background: "#fff",
    padding: "10px",
    margin: "10px"
  }
});

function DateSelectExample(props) {

  const classes = useStyles();

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <Page name="日期范围选择器" navbar>
      <div className={classes.box}>
        <DateSelect
          startDate={startDate}
          endDate={endDate}
          onStartDate={setStartDate}
          onEndDate={setEndDate}
        />
      </div>
    </Page>
  )
}
<DateSelectExample />
```