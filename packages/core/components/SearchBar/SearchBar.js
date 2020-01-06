import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './styles';
import useDisabledRefTouchMove from '@wonder-ui/utils/useDisabledRefTouchMove';
import useEventCallback from '@wonder-ui/utils/useEventCallback';
import useForkRef from '@wonder-ui/utils/useForkRef';
import withStyles from '../withStyles';
import InputBase from '../InputBase';

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

  const changeValue = (value)=>{
    setInnerValue(value);
    onChange && onChange(value);
  };

  const handleChange = useEventCallback((e)=>{
    const val = e.target.value;
    changeValue(val);
  });

  const handleClear = useEventCallback(()=>{ 
    changeValue(''); 
    onClear && onClear();
  });

  const handleFocus = useEventCallback((e)=>{
    setFocus(true);
    onFocus && onFocus(e);
  });

  const handleBlur = useEventCallback((e)=>{
    setFocus(false);
    onBlur && onBlur(e);
  });

  const handleCancel = useEventCallback((e)=>{
    setFocus(false);
    changeValue('');
    onCancel && onCancel(e);
  });

  const handleSearch = useEventCallback((e)=>{
    e.preventDefault();
    const val = e.target.searchField ? e.target.searchField.value: null;
    inputRef.current.blur();
    onSearch && onSearch(val);
  });
  
  return (
    <div 
      className={clsx(
        classes.root,
        bordered && classes.bordered, 
        className
      )} 
      ref={rootRef}
    >   
      <form className={classes.body} onSubmit={handleSearch}>
        <div className={clsx(classes.input, showCancel && classes.inputStart)}>
          {showSearchIcon && <i className={classes.iconSearch}/>}
          <InputBase
            fullWidth
            clearButton
            type="search"
            autoComplete="off"
            name="searchField"
            ref={handleRef} 
            value={innerValue} 
            onChange={handleChange} 
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClear={handleClear}
            {...rest}
          />
        </div>
        <span 
          className={clsx(
            classes.cancelText,
            !showCancel&& classes.hidden
          )} 
          onClick={handleCancel}
        >{cancelText}</span>
      </form>
      {
        extra ? (
          <div className={classes.extra}>{extra}</div>
        ): (
          <div className={classes.end}/>
        )
      }
    </div>
  )
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