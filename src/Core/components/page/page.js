import React, { Children } from 'react';
import { WUI_page_root, WUI_page_content } from './styles';
import appContext from '../app/appContext';
import Utils from '../../utils/utils';
import $ from 'dom7';


const Page = React.forwardRef(({classes = {}, styles={}, name, pageContent = true, children, ...rest }, ref)=>{
  const app = React.useContext(appContext);
  const childrenArray = Children.toArray(children);
  const slots = Utils.slot(childrenArray); 
  const root = React.useRef(null);

  React.useLayoutEffect(()=>{

    const aniState = $(root.current).parent('.router-transition-stage').attr('ani-state');

    if(!['exit', 'exiting', 'exited'].includes(aniState)){
      app.emit('pageInit', name, rest);
    }
    
    return ()=>{
      app.emit('pageRemove', name, rest);
    }
  }, [name])

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
            css={styles.context}
          >{ slots.main }</WUI_page_content>
        ) : slots.main
      }
      { slots['pageContentAfter'] }
    </WUI_page_root>
  )

})

Page.PageContent = WUI_page_content;


export default Page;