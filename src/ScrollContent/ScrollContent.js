import React, {Component, PureComponent} from 'react';
import { PageContent } from '../Core';

export default class ScrollContent extends Component {

  static defaultProps = {
    onLoad: done => done(false),
    id: undefined
  }

  static status = {}

  lock = false;

  scrollHandler = ({target : container})=>{
    const {onLoad, id} = this.props;
    const scrollHeight = container.scrollHeight;
    const offsetHeight = container.offsetHeight;
    const isBottom = container.scrollTop === scrollHeight - offsetHeight;
    const done = ()=>{
      this.lock = false;
    }

    if(id) {
      ScrollContent.status[id] = {
        scrollTop : container.scrollTop
      }
    }

    if(!this.lock && isBottom && scrollHeight != offsetHeight) {
      this.lock = true;
      onLoad(done);
    }
  }

  componentDidMount(){
    const id = this.props.id;
    const status = ScrollContent.status[id];
    if(status){
      this.content.scrollTop = status.scrollTop;
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.id != this.props.id){
      this.lock = false;
    }
  }

  render(){

    const {
      className,
      children,
      style,
      ...rest
    } = this.props;

    return (
      <PageContent
        className={className}
        style={style}
        ref={x=>this.content = x}
        onScroll={this.scrollHandler}
        children={children}
      />
    )
  }
}
