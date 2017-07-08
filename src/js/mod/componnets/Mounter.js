import React, {PureComponent} from 'react'

export default class Mounter extends PureComponent{

  constructor (props){
    super(props);
    this.div = document.createElement('div');
    this.container = props.container || document.body;
    this.container.appendChild(this.div);
  }

  componentDidMount () {
    const {
      children
    } = this.props;

    ReactDOM.render(<div>{children}</div>, this.div);
  }

  componentWillUnmount() {
    this.div.remove();
  }

  componentWillReceiveProps(nextProps) {
    const {
      children
    } = nextProps;

    ReactDOM.render(<div>{children}</div>, this.div);
  }

  render() {
    return null;
  }
}
