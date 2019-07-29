import React, { Children } from 'react';
import { WUI_page_root, WUI_page_content } from './styles';
import { withRouter } from 'react-router-dom';
import appContext from '../app/appContext';
import utils from '../../utils/utils';
import theme from '../styles/defaultTheme';
import { ThemeProvider } from 'styled-components';
import $ from 'dom7';

const Page = withRouter(React.memo((props)=>{
  const {
    name, 
    pageContent = true, 
    children, 
    location,
    styles = {},
    match 
  } = props;
  const app = React.useContext(appContext);
  const root = React.useRef(null);
  const pathname = location.pathname;
  const [visible, setVisible] = React.useState(false);

  const slots = React.useMemo(()=>{
    const childrenArray = Children.toArray(children);
    return utils.slot(childrenArray); 
  }, [children]);

  React.useEffect(()=>{
    utils.nextTick(()=>setVisible(true))
  }, []);

  React.useEffect(()=>{

    const aniState = $(root.current).parent('.router-transition-stage').attr('ani-state');

    if(!['exit', 'exiting', 'exited'].includes(aniState)){
      if(pathname === match.url){
        app.emit('pageInit', name, props);
      }
    }
    
    return ()=>{
      if(pathname === match.url){
        app.emit('pageRemove', name, props);
      }
    }
  }, [name, pathname])

  return visible && (
    <ThemeProvider theme={theme}>
      <WUI_page_root 
        ref={root} 
        pageroot={true}
        css = {styles.root}
      >
        { slots['pageContentBefore'] }
        {
          pageContent ? (
            <WUI_page_content 
                css = {styles.content}
              >{ slots.main }</WUI_page_content>
          ) : slots.main
        }
        { slots['pageContentAfter'] }
      </WUI_page_root>
    </ThemeProvider>
    
  )
}))

Page.PageContent = WUI_page_content;


export default Page;