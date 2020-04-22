import React from 'react';
import F2 from '@antv/f2';
import useForkRef from '@wonder-ui/utils/useForkRef';
/**
 * https://f2.antv.vision/zh/examples/basic
 */
export default function useChart(chartOpts = {}){  

  const elRef = React.useRef();
  const [ domInit, setDomInit ] = React.useState(false);

  const Canvas = React.useMemo(()=>{
    return React.forwardRef((props, ref) => {
      const fixStyles = { 
        width: '100%', WebkitUserSelect: 'none', 
        WebkitTapHighlightColor: 'transparent',
      };
      useForkRef(elRef, ref);
      React.useEffect(()=>{
        setDomInit(true);
      }, []);
      return <canvas ref={elRef} style={fixStyles} {...props} />;
    })
  }, []);

  const chart = React.useMemo(()=>{
    const el = elRef.current;
    if(!el) return ;
    return new F2.Chart({ el, pixelRatio: window.devicePixelRatio, ...chartOpts });
  }, [domInit]);


  const useEffect = (callfn, inputs = [])=>{
    React.useEffect(()=>{
      if(callfn && chart){
        callfn({ chart, F2 });
      }
    }, [chart, ...inputs]);
  }

  return [ Canvas, useEffect, chart ];
}