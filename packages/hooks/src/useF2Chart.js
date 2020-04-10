import React from 'react';
import F2 from '@antv/f2';

/**
 * https://f2.antv.vision/zh/examples/basic
 */
export default function useChart(props = {}){
  const {
    className,
    style,
    ...chartOpts
  } = props;
  
  const chartRef = React.useRef();
  const chartConfigRef = React.useRef(()=>{});
  const chartConfigInputsRef = React.useRef([]);
  const elRef = React.useRef();

  const canvas = (
    <canvas 
      ref={elRef} 
      style={{width: '100%', ...style}} 
      className={className}
    />
  );

  React.useEffect(()=>{
    const el = elRef.current;
    if(!el) return ;
    const f2Chart =  new F2.Chart({ el, pixelRatio: window.devicePixelRatio, ...chartOpts });
    chartRef.current = f2Chart;
    return () => {
      // if(f2Chart){
      //   f2Chart.destroy();  //bug
      // }
    }
  }, [elRef]);

  const config = (configFn, inputs = [])=>{
    chartConfigRef.current = configFn;
    chartConfigInputsRef.current = inputs;
  };

  React.useEffect(()=>{
    const chart = chartRef.current;
    if(chart){
      chart.clear();
      chartConfigRef.current({ chart, F2 });
      chart.render();
    }
  }, [chartRef, chartConfigRef, ...chartConfigInputsRef.current]);
  
  return [ canvas, config, chartRef ];
}