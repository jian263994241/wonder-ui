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

  const handleScroll = React.useCallback((e)=>{
    const _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    setScrollTop(_scrollTop);
  }, []);

  React.useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollTop]);

  const navStyle = React.useMemo(()=>{
    return scrollTop >= slidebarfix ? { top: 0, bottom: 0 }: {top: slidebarfix - scrollTop, bottom: 0}
  }, [scrollTop, slidebarfix]);

  return (
    <div className="wonder-doc-nav" style={navStyle}>{children}</div>
  )
};