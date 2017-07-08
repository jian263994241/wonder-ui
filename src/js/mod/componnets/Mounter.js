import React, {PureComponent, cloneElement} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {validateDOMElem} from '../utils/mix'

export default class Mounter extends PureComponent{

  static uiName = 'Mounter';

  static propTypes = {
    root: validateDOMElem
  };

  getContainer = ()=>{
    return this.container;
  }

  destroy = ()=>{
    this.container.remove();
  }

  constructor (props){
    super(props);

    this.container = document.createElement('div');
    const root = props.root || document.body;

    root.appendChild(this.container);

  }

  componentDidMount () {
    const {
      container,
      root,
      children,
      ...other
    } = this.props;

    ReactDOM.render(<div {...other}>{children}</div>, this.container);
  }

  componentWillUnmount() {
    this.destroy();
  }

  componentWillReceiveProps(nextProps) {
    const {
      container,
      root,
      children,
      ...other
    } = nextProps;

    ReactDOM.render(<div {...other}>{children}</div>, this.container);
  }

  render() {
    return null;
  }
}

//直接挂在的虚拟DOM
Mounter.mount = function (component, props){
  const container = document.createElement('div');
  let rendered = render(cloneElement(component, props), container);
  return {
    getComponent: function(){
      return rendered;
    },
    updateProps: function(props, callback){
      rendered = render(cloneElement(component, Object.assign({}, rendered.props, props)), container, callback);
    }
  };
}
