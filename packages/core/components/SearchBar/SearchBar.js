import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './styles';
import useDisabledRefTouchMove from '@wonder-ui/utils/useDisabledRefTouchMove';
import useEventCallback from '@wonder-ui/utils/useEventCallback';
import useForkRef from '@wonder-ui/utils/useForkRef';
import withStyles from '../withStyles';
import InputBase from '../InputBase';

/**
 * 
 * @visibleName SearchBar 搜索
 */
const SearchBar = React.forwardRef(function SearchBar(props, ref){
  const {
    bordered = true,
    cancelText = '取消',
    classes = {},
    className,
    defaultValue = '',
    extra,
    onBlur,
    onCancel,
    onChange,
    onClear,
    onFocus,
    onSearch,
    showCancelButton = true,
    showSearchIcon = true,
    value,
    ...rest
  } = props;
  const rootRef = React.useRef(null);
  const inputRef = React.useRef();
  const handleRef = useForkRef(inputRef, ref);
  const _value = value != undefined ?  value : defaultValue;
  
  const [innerValue, setInnerValue] = React.useState('');
  const [inFocus, setFocus] = React.useState(false);

  const showCancel = showCancelButton && !extra && inFocus;

  useDisabledRefTouchMove(rootRef);

  React.useEffect(()=>{
    if(_value != innerValue){
      setInnerValue(_value);
    }
  }, [_value]);

  const changeValue = React.useCallback((value)=>{
    setInnerValue(value);
    onChange && onChange(value);
    if(!value || value === ''){
      if(onClear){
        onClear();
      }
    }
  }, []);

  const handleFocus = useEventCallback((e)=>{
    setFocus(true);
    onFocus && onFocus(e);
  });

  const handleCancel = useEventCallback((e)=>{
    changeValue('');
    setFocus(false);
    onCancel && onCancel(e);
  });

  const handleSearch = useEventCallback((e)=>{
    e.preventDefault();
    const val = e.target.searchField ? e.target.searchField.value: null;
    inputRef.current.blur();
    setFocus(false);
    onSearch && onSearch(val);
  });

  return (
    <form
      className={clsx(
        classes.root,
        {
          [classes.bordered]: bordered,
          [classes.inputStart]: showCancel,
        },
        className
      )}
      onSubmit={handleSearch}
    >
      <div className={classes.body}>
        <div className={classes.inputWrap}>
          <InputBase
            clearButton
            className={classes.input}
            type="search"
            autoComplete="off"
            name="searchField"
            inputRef={handleRef} 
            value={innerValue} 
            onChange={changeValue} 
            onFocus={handleFocus}
            {...rest}
          />
          <i className={classes.iconSearch}/>
        </div>
        <span 
          className={classes.cancelText} 
          onClick={handleCancel}
        >{cancelText}</span>
      </div>
      {
        extra  && <div className={classes.extra}>{extra}</div>
      }
    </form>
  );
});

SearchBar.propTypes={
  classes: PropTypes.object,
  cancelText: PropTypes.node,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onSearch: PropTypes.func,
  onCancel: PropTypes.func,
  onClear: PropTypes.func,
  showCancelButton: PropTypes.bool,
  showSearchIcon: PropTypes.bool,
  extra: PropTypes.node,
  bordered: PropTypes.bool
}; 

SearchBar.displayName = 'SearchBar';

export default withStyles(styles)(SearchBar);