import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import device from '../utils/device'
import $ from 'dom7'
import {withRouter} from 'react-router-dom'

class Expose extends Component {
  componentWillMount() {
    $(document).trigger('page:init', this.props);
  }
  componentWillUnmount() {
    $(document).trigger('page:remove', this.props);
  }
  render() {
    return null;
  }
}

const ExposeRouter = withRouter(Expose);

export default class Page extends Component {

  static uiName = 'Page'

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    theme: PropTypes.string,
    navbarFixed: PropTypes.bool,
    toolbarFixed: PropTypes.bool
  }

  static defaultProps = {
    waiting: false,
    navbarFixed: false,
  }

  constructor(props){
    super(props);
    this.title = props.title;
  }

  componentDidMount() {
    this.setDocumentTitle(this.title);
  }

  componentWillReceiveProps(nextProps) {
    const {
      title
    } = nextProps;

    if(title != this.title){
      this.setDocumentTitle(title);
    }
  }

  setDocumentTitle = (title) => {

    if(!title) return ;
    this.title = title;
    document.title = title;

    if (device.ios && device.webView) {
      var i = document.createElement('iframe');
      i.src = '/favicon.ico';
      i.style.display = 'none';
      i.onload = function() {
          setTimeout(function(){
              i.remove();
          }, 9)
      }
      document.body.appendChild(i);
    }
  }

  render() {

    const {
      title,
      theme,
      navbarFixed,
      toolbarFixed,
      className,
      waiting,
      children,
      ...other
    } = this.props;

    const themeCss = theme? `theme-${theme}`: '';
    let cls = classnames('page', {
      'navbar-fixed': navbarFixed,
      'toolbar-fixed': toolbarFixed
    } ,themeCss, className);

    let hasNavbar = false;

    if(waiting){
      return <div className="page"><span className="progressbar-infinite"></span></div>;
    }

    React.Children.forEach(children, (child, index)=>{
      if(child.type && child.type.uiName === 'Navbar'){
        hasNavbar = true;
      }
    });

    if(!navbarFixed && hasNavbar){
      cls = classnames(cls, 'navbar-fixed');
    }

    return (
      <div
        className={cls}
        ref="Page"
        {...other}>
        <ExposeRouter title={title}/>
        {children}
      </div>
    );
  }

}
