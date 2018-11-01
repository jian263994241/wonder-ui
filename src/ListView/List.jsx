import React, {Component, createContext} from 'react';
import PropTypes from 'prop-types';
import { StyledList } from './Styled';

export const TypeContext = createContext('listType');

export default class List extends Component {

  static propTypes = {
    mediaList: PropTypes.bool
  }

  render(){

    const {
      mediaList,
      ...rest
    } = this.props;

    return (
      <TypeContext.Provider value={{mediaList}}>
        <StyledList mediaList={mediaList} {...rest}/>
      </TypeContext.Provider>
    )
  }
};
