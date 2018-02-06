import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInputWrapper = styled.div `
  width: 100%;
  height: 43px;
  >i{
    width: ${props=>(100/props.grid)}%;
    float: left;
    height:43px;
    font-style: normal;
    line-height:43px;
    background: #ffffff;
    color: #000;
    display: block;
    text-align: center;
    box-sizing: border-box;
    border:1px solid #DEDEDE;
    border-right:none;
    &:first-child{
      border-radius: 4px 0 0 4px;
    }
    &:last-child{
      border-right:1px solid #DEDEDE;
      border-radius: 0 4px 4px 0;
    }
  }
  &::after{
    content:'';
    display: block;
    height: 0;
    overflow: hidden;
    clear: both;
  }
`;


export default class KeyboardInput extends PureComponent {

  static uiName = 'Keyboard.Input';

  static propTypes = {
    show: PropTypes.bool,
    id: PropTypes.string,
    grid: PropTypes.number,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    grid: 6,
    show: true,
    onChange: val=>val
  }

  state = {
    value: ''
  }

  renderCols = ()=>{
    const val = [];
    const value = this.state.value;
    const {grid, show} = this.props;

    for(let i=0; i< grid; i++){
      if(value[i] === undefined){
        val.push('');
      }else{
        val.push(value[i]);
      }
    }

    const cols = (n, i)=>{
      const num = (!show && n !='') ? '\u25cf': n;
      return <i key={i}>{num}</i>;
    }

    return val.map(cols);
  }

  componentDidMount(){
    const input = this.refs.input;
    const self = this;

    function onchangeCallback(value) {
        self.setState({value});
        self.props.onChange(value);
    }

    input.addEventListener('onchange', onchangeCallback, false);

    Object.defineProperty(input, '_value', {
        configurable: true,
        set: function(value) {
            this.value = value;
            onchangeCallback(value);
        },
        get: function() {
            return this.value;
        }
    });
  }

  render(){

    const {grid, id} = this.props;

    const Fragment = React.Fragment || 'div';

    return (
      <Fragment>
        <StyledInputWrapper grid={grid}>
          {this.renderCols()}
        </StyledInputWrapper>
        <input type="hidden" ref="input" id={id}/>
      </Fragment>
    )
  }
}
