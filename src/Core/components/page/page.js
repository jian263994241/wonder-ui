import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { WUI_page_root, WUI_page_content } from './styles';
import { withRouter } from 'react-router-dom';
import AppContext from '../App/AppContext';
import utils from '../../utils/utils';
import { duration } from '../styles/transitions';

/**
 * 创建一个页面(长宽100%的容器)
 * @visibleName Page 页面
 */
@withRouter
class Page extends React.Component {

  static contextType = AppContext;

  static Content = WUI_page_content;

  state = {
    current: false
  }

  mounted = false;

  init = ()=>{
    const app = this.context;
    app.emit('pageInit', this.props.name, this.props);
    setTimeout(() => {
      if(this.mounted){
        this.setState({ current: true });
      }
    }, duration.complex * 0.05);
  }

  componentDidMount() {
    const { name, match, history } = this.props;
    const app = this.context;
    this.mounted = true;
    this.init();

    this.unlisten = history.listen((location, action)=>{
      if(location.pathname === match.url){
        //reinit
        this.init();
      }else{
        //非当前页面, 页面缓存中的页面
        app.emit('pageRemove', name, this.props);
        this.setState({ current: false });
      }  
    })
  }

  componentWillUnmount(){
    this.mounted = false;
    this.unlisten();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.current
  }
  
  render(){
    const {
      pageContent = true, 
      children, 
      styles = {},
    } = this.props;

      const slots = (()=>{
        const childrenArray = Children.toArray(children);
        return utils.slot(childrenArray); 
      })()

    return (
      <WUI_page_root 
        ref='root' 
        pageroot={true}
        css = {styles.root}
        //onTouchMove={(e)=> e.preventDefault()}
      >
        <>
        { slots['pageContentBefore'] }
        {
          pageContent ? (
            <WUI_page_content css = {styles.content} >{ slots.main }</WUI_page_content>
          ) : slots.main
        }
        { slots['pageContentAfter'] }
        </>
      </WUI_page_root>
    )
  }
}

Page.defaultProps = {
  name: undefined,
}

Page.propTypes = {
  /** 
   * 页面的名字
   * 可以配合pageInit来设置页面标题
   */
  name: PropTypes.string,
}

export default Page;