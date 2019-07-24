import React, { Children } from 'react';
import { WUI_page_root, WUI_page_content } from './styles';
import { withRouter, __RouterContext } from 'react-router-dom';
import appContext from '../app/appContext';
import Utils from '../../utils/utils';
import $ from 'dom7';

const Page = withRouter(React.memo((props)=>{
  const {
    classes = {}, 
    styles={}, 
    name, 
    pageContent = true, 
    children, 
    location,
    match,
    ...rest 
  } = props;
  const app = React.useContext(appContext);
  const childrenArray = Children.toArray(children);
  const slots = Utils.slot(childrenArray); 
  const root = React.useRef(null);
  const router = React.useContext(__RouterContext);
  const pathname = location.pathname;

  React.useEffect(()=>{

    const aniState = $(root.current).parent('.router-transition-stage').attr('ani-state');

    if(!['exit', 'exiting', 'exited'].includes(aniState)){
      if(pathname === match.url){
        app.emit('pageInit', name, rest);
      }
    }
    
    return ()=>{
      if(pathname === match.url){
        app.emit('pageRemove', name, rest);
      }
    }
  }, [name, pathname])

  return (
    <WUI_page_root 
      ref={root} 
      className={classes.root}
      css={styles.root}
      pageroot={true}
    >
      { slots['pageContentBefore'] }
      {
        pageContent ? (
          <WUI_page_content 
            className={classes.content}
            css={styles.content}
          >{ slots.main }</WUI_page_content>
        ) : slots.main
      }
      { slots['pageContentAfter'] }
    </WUI_page_root>
  )
}))

Page.PageContent = WUI_page_content;


export default Page;