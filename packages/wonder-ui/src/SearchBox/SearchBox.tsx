import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { capitalize, css, generateUtilityStyles } from '@wonder-ui/utils';
import InputBase from '../Input';
import ButtonBase from '../ButtonBase';

export interface SearchBoxProps {}

const SearchBoxRoot = styled('div', {
  name: 'WuiSearchBox',
  slot: 'Root'
})({});

const SearchBoxIconContainer = styled('div', {
  name: 'WuiSearchBox',
  slot: 'IconContainer'
})({});

const SearchBoxInput = styled(InputBase, {
  name: 'WuiSearchBox',
  slot: 'Input'
})({});

const SearchBoxResetButton = styled(ButtonBase, {
  name: 'WuiSearchBox',
  slot: 'ResetButton'
})({});

const SearchBox = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiSearchBox' });
  const {} = props;

  return (
    <SearchBoxRoot>
      <SearchBoxIconContainer></SearchBoxIconContainer>
      <SearchBoxInput type="search" />
      <SearchBoxResetButton />
    </SearchBoxRoot>
  );
});

export default SearchBox;
