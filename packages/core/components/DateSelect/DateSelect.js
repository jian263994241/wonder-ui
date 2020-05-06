import React, { useState, useCallback } from "react";
import PropTypes from 'prop-types';

import Toast from "../toast";
import DatePicker from "../DatePicker";
import ListItem from "../ListItem";
import withStyles from '../withStyles';
import styles from "./styles";

function dayjs(time, format) {
  var t = new Date(time);
  var tf = function (i) { return (i < 10 ? '0' : '') + i };
  return format.replace(/YYYY|MM|DD/g, function (a) {
    switch (a) {
      case 'YYYY':
        return tf(t.getFullYear());
        break;
      case 'MM':
        return tf(t.getMonth() + 1);
        break;
      case 'DD':
        return tf(t.getDate());
        break;
    }
  })
}

function formatDate(date) {
  if (!date) {
    return;
  }
  return new Date(date);
}

const noon = () => { };

/**
 * 日期范围选择器
 * @visibleName DateSelect 日期范围选择器
 */

const DateSelect = (props) => {

  const {
    classes,
    title,
    showTip,
    tipRange,
    startDate,
    endDate,
    onStartDate,
    onEndDate,
    minDate,
    maxDate,
    format,
    splitTxt
  } = props;

  const [visibleStart, setVisibleStart] = useState(false);
  const [visibleEnd, setVisibleEnd] = useState(false);

  // 开始日期改变
  const onChangeStart = useCallback(date => {
    const val = dayjs(date, format);
    if (endDate) {
      if (val > endDate) {
        Toast('开始时间需要小于结束时间', 1800);
        return;
      }
      if ((new Date(endDate).getTime() - date.getTime()) / (1000 * 3600 * 24) > tipRange) {
        Toast(`所选时间范围超过了${tipRange}天，请缩小范围后重试`, 1800);
        return;
      }
    }
    console.log("startDate", date.getTime());
    onStartDate(val); // eslint-disable-line
    setVisibleStart(false);
  }, [endDate, tipRange, onStartDate]);

  // 结束日期改变
  const onChangeEnd = useCallback(date => {
    const val = dayjs(date, format);
    if (startDate) {
      if (startDate > val) {
        Toast('开始时间需要小于结束时间', 1800);
        return;
      }
      if ((date.getTime() - new Date(startDate).getTime()) / (1000 * 3600 * 24) > tipRange) {
        Toast(`所选时间范围超过了${tipRange}天，请缩小范围后重试`, 1800);
        return;
      }
    }
    console.log("endDate", date.getTime());
    onEndDate(val); // eslint-disable-line
    setVisibleEnd(false);
  }, [startDate, tipRange, onEndDate]);

  // 修改ListItem样式
  const ListItemStyle = withStyles(theme => ({
    root: {
      minHeight: '36px',
      marginBottom: 0,
      paddingLeft: '10px'
    },
    line: {
      ...theme.hairline.remove('bottom')
    },
    extra: {
      flex: 1,
      textAlign: 'left'
    }
  }))(ListItem);

  // 显示
  const ItemWrap = params => {
    const { extra, setFun } = params;
    const txt = extra ? extra : '请选择';
    return (
      <ListItemStyle arrow="vertical" extra={txt} onClick={() => setFun(true)} />
    )
  };

  return (
    <div className={classes.root}>
      <div className={classes.titleBox}>
        <span className={classes.title}>{title}</span>
        {
          showTip &&
          <span className={classes.tip}>时间范围最长{tipRange}天</span>
        }
      </div>
      <div className={classes.selectBox}>
        <div className={classes.selectItem}>
          <DatePicker
            visible={visibleStart}
            mode="date"
            title="选择开始时间"
            value={formatDate(startDate)}
            onChange={onChangeStart}
            minDate={minDate}
            maxDate={maxDate}
            onCancel={() => setVisibleStart(false)}
          >
            <ItemWrap setFun={setVisibleStart} />
          </DatePicker>
        </div>
        <span className={classes.splitBox}>{splitTxt}</span>
        <div className={classes.selectItem}>
          <DatePicker
            visible={visibleEnd}
            mode="date"
            title="选择结束时间"
            value={formatDate(endDate)}
            onChange={onChangeEnd}
            minDate={minDate}
            maxDate={maxDate}
            onCancel={() => setVisibleEnd(false)}
          >
            <ItemWrap setFun={setVisibleEnd} />
          </DatePicker>
        </div>
      </div>
    </div>
  );
}

DateSelect.propTypes = {
  /** 左侧标题 */
  title: PropTypes.string,
  /** 是否显示右侧说明 */
  showTip: PropTypes.bool,
  /** 日期范围 */
  tipRange: PropTypes.number,
  /** 开始日期 */
  startDate: PropTypes.string,
  /** 结束日期 */
  endDate: PropTypes.string,
  /** 开始日期改变 */
  onStartDate: PropTypes.func,
  /** 结束日期改变 */
  onEndDate: PropTypes.func,
  /** 最小可选日期 */
  minDate: PropTypes.instanceOf(Date),
  /** 最大可选日期 */
  maxDate: PropTypes.instanceOf(Date),
  /** 日期格式 */
  format: PropTypes.string,
  /** 分隔字符 */
  splitTxt: PropTypes.string
};

DateSelect.defaultProps = {
  title: '自定义时间',
  showTip: true,
  tipRange: 30,
  onStartDate: noon,
  onEndDate: noon,
  minDate: new Date(1980, 0, 1, 23, 59, 59),
  maxDate: new Date(2100, 11, 30, 23, 59, 59),
  format: 'YYYY-MM-DD',
  splitTxt: '至'
}

DateSelect.displayName = 'DateSelect';

export default withStyles(styles)(DateSelect);