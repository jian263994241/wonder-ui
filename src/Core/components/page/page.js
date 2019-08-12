import React, { Children } from 'react';
import { WUI_page_root, WUI_page_content } from './styles';
import { withRouter } from 'react-router-dom';
import appContext from '../app/appContext';
import utils from '../../utils/utils';
import theme from '../styles/defaultTheme';
import { ThemeProvider } from 'styled-components';
import { duration } from '../styles/transitions';
import $ from 'dom7';


class Page extends React.Component {

  static contextType = appContext;

  state = {
    init: false
  }

  init = ()=>{
    const app = this.context;
    setTimeout(() => {
      this.setState({ init: true }, ()=>{
        app.emit('pageInit', this.props.name, this.props);
      })
    }, duration.complex);
  }

  componentDidMount() {
    const { name, match } = this.props;
    const app = this.context;

    this.init();

    this.unlisten = app.history.listen((location, action)=>{
      if(location.pathname === match.url){
        //reinit
        this.init();
      }else{
        //非当前页面, 页面缓存中的页面
        this.setState({ init: false }, ()=>{
          app.emit('pageRemove', name, this.props);
        })
      }  
    })
    
  }

  componentWillUnmount(){
    this.setState({ init: false }, ()=>{
      this.unlisten();
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.init
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
      <ThemeProvider theme={theme}>
        <WUI_page_root 
          ref='root' 
          pageroot={true}
          css = {styles.root}
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
      </ThemeProvider>
    )
  }
}

// const Page = withRouter(React.forwardRef((props, ref)=>{
//   const {
//     name, 
//     pageContent = true, 
//     children, 
//     location,
//     styles = {},
//     match 
//   } = props;
//   const app = React.useContext(appContext);
//   const root = React.useRef(null);
//   const pathname = location.pathname;

//   const slots = React.useMemo(()=>{
//     const childrenArray = Children.toArray(children);
//     return utils.slot(childrenArray); 
//   }, [children]);

//   React.useEffect(()=>{
//     if(ref){
//       ref.current = root.current;
//     }
    
//     const aniState = $(root.current).parent('.router-transition-stage').attr('ani-state');

//     if(!['exit', 'exiting', 'exited'].includes(aniState)){
//       if(pathname === match.url){
//         app.emit('pageInit', name, props);
//       }
//     }
    
//     return ()=>{
//       if(pathname === match.url){
//         app.emit('pageRemove', name, props);
//       }
//     }
//   }, [name, pathname])

//   return (
//     <ThemeProvider theme={theme}>
//       <WUI_page_root 
//         ref={root} 
//         pageroot={true}
//         css = {styles.root}
//       >
//         <>
//           { slots['pageContentBefore'] }
//           {
//             pageContent ? (
//               <WUI_page_content css = {styles.content} >{ slots.main }</WUI_page_content>
//             ) : slots.main
//           }
//           { slots['pageContentAfter'] }
//         </>
//       </WUI_page_root>
//     </ThemeProvider>
//   )
// }))

Page.PageContent = WUI_page_content;


export default withRouter(Page);