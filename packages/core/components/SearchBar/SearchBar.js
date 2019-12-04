import React from 'react';
import PropTypes from 'prop-types';
import useForkRef from '@wonder-ui/utils/useForkRef';
import useDisabledRefTouchMove from '@wonder-ui/utils/useDisabledRefTouchMove';
import {
  SearchRoot,
  SearchBody,
  IconSearch,
  SearchInput,
  CancelText,
  SearchClear,
  Extra,
  End
} from './styles';

const SearchBar = React.forwardRef(function SearchBar(props, ref){
  const {
    classes = {},
    defaultValue = '',
    value,
    cancelText = '取消',
    onChange,
    onFocus,
    onBlur,
    onSearch,
    onCancel,
    onClear,
    showCancelButton = true,
    showSearchIcon = true,
    extra,
    bordered = true,
    ...rest
  } = props;
  const rootRef = React.useRef(null);
  const inputRef = React.useRef();
  const handleRef = useForkRef(inputRef, ref);
  const _value = value != undefined ?  value : defaultValue;
  
  const [innerValue, setInnerValue] = React.useState('');
  const [inFocus, setFocus] = React.useState(false);
  const inputProcess = React.useRef();

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

  const handleChange = React.useCallback((e)=>{
    const val = e.target.value;
    changeValue(val);
  }, [onChange]);

  const handleClear = React.useCallback(()=>{
    clearTimeout(inputProcess.current);   
    changeValue(''); 
    inputRef.current.focus();
    onClear && onClear();
  }, []);

  const handleFocus = React.useCallback((e)=>{
    setFocus(true);
    onFocus && onFocus(e);
  }, [onFocus]);

  const handleBlur = React.useCallback((e)=>{
    inputProcess.current = setTimeout(() => {
      setFocus(false);
      onBlur && onBlur(e);
    }, 10);
  }, [onBlur]);

  const handleCancel = React.useCallback((e)=>{
    setFocus(false);
    changeValue('');
    onCancel && onCancel(e);
  }, [onCancel]);

  const handleSearch = React.useCallback((e)=>{
    e.preventDefault();
    const val = e.target.searchField ? e.target.searchField.value: null;
    inputRef.current.blur();
    onSearch && onSearch(val);
  }, [onSearch])
  
  return (
    <SearchRoot className={classes.root} bordered={bordered} ref={rootRef}>   
      <SearchBody className={classes.body} onSubmit={handleSearch}>
        <SearchInput className={classes.input} start={showCancelButton && inFocus} transitionDisabled={!!extra}>
          {showSearchIcon && <IconSearch/>}
          <input
            type="search"
            autoComplete="off"
            name="searchField"
            ref={handleRef} 
            value={innerValue} 
            onChange={handleChange} 
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />
          <SearchClear visible={inFocus && (innerValue != '')} onClick={handleClear}/>
        </SearchInput>
        {showCancelButton && <CancelText visible={inFocus} onClick={handleCancel}><span>{cancelText}</span></CancelText>}
      </SearchBody>
      {
        extra ? (
          <Extra visible={showCancelButton ? !inFocus: true }>{extra}</Extra>
        ): (
          <End/>
        )
      }
    </SearchRoot>
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

export default SearchBar;