import React, {Component} from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames'


class SegmentedControl extends Component{

  constructor(props){
    super(props);
    this.state = {
      selectedIndex: 0
    }
  }

  static uiName = 'SegmentedControl'

  static propTypes = {
    controls: PropTypes.array,
    onChange: PropTypes.func,
    selectedIndex: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.string
  }

  static defaultProps = {
    controls: []
  }

  componentDidMount() {
  
    const {selectedIndex} = this.props;
    this.setState({selectedIndex},()=>{
      if(this.props.onChange){
        this.props.onChange(selectedIndex);
      }
    });
  }

  eventHandler(selectedIndex){
    this.setState({selectedIndex},()=>{
      if(this.props.onChange){
        this.props.onChange(selectedIndex);
      }
    });
  }

  render() {

    const {
      controls,
      className,
      style,
      children,
      ...other
    } = this.props

    const createElem = (item, index)=>{
      const cls = this.state.selectedIndex === index ? classnames('control-item', 'active'): 'control-item' ;
      return (
        <a className={cls} onClick={this.eventHandler.bind(this, index)}>{item}</a>
      );
    }

    const cls = classnames('segmented-control', className);
    return (
      <div
        className={cls}
        style={style}
        {...other}
      >
        {controls.map(createElem)}
      </div>
    );
  }
}


export default SegmentedControl;
