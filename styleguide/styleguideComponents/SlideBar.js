import React from 'react';
/**
 * SlideBar
 */
export default function SlideBar(props){
  const {
    slidebarfix = 60,
    children
  } = props;

  const [scrollTop, setScrollTop] = React.useState(0);

  const scrollBody = React.useMemo(()=>{
    return document.querySelector('.wonder-doc');
  }, [])

  const handleScroll = React.useCallback((e)=>{
    const _scrollTop = e.target.scrollTop ;
    setScrollTop(_scrollTop);
  }, []);

  React.useEffect(()=>{
    const scrollBody = document.querySelector('.wonder-doc');
    scrollBody.addEventListener('scroll', handleScroll);
    return ()=>{
      scrollBody.removeEventListener('scroll', handleScroll);
    }
  }, [scrollTop]);

  const navStyle = React.useMemo(()=>{
    return scrollTop >= slidebarfix ? { top: 0, bottom: 0 }: {top: slidebarfix - scrollTop, bottom: 0}
  }, [scrollTop, slidebarfix]);

  return (
    <div className="wonder-doc-nav" style={navStyle}>{children}</div>
  )
};